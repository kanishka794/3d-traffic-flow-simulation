import * as THREE from 'three';
import { VehicleMeshFactory } from './VehicleMeshFactory.js';

/**
 * Vehicle
 * Represents a single autonomous vehicle in the simulation.
 * Implements:
 * - Intelligent Driver Model (IDM) for collision spacing and smooth acceleration/braking
 * - Spline path following with tangent orientation and matrix transformation
 * - Kinematic wheel spin animation (omega = v / r)
 * - Chassis pitch dynamics during acceleration and braking
 * - Stop-line obedience at traffic lights and yield logic for pedestrians
 */
export class Vehicle {
  static idCounter = 100;

  constructor(pathData, type = 'sedan', isEmergency = false) {
    this.id = ++Vehicle.idCounter;
    this.pathData = pathData;
    this.type = type;
    this.isEmergency = isEmergency;

    // Build 3D Mesh
    if (this.isEmergency) {
      this.modelData = VehicleMeshFactory.createAmbulance();
    } else if (type === 'suv') {
      this.modelData = VehicleMeshFactory.createSUV();
    } else if (type === 'bus') {
      this.modelData = VehicleMeshFactory.createBus();
    } else {
      this.modelData = VehicleMeshFactory.createSedan();
    }

    this.mesh = this.modelData.root;
    this.chassis = this.modelData.chassis;
    this.wheels = this.modelData.wheels;
    this.brakeLights = this.modelData.brakeLights;
    this.tailMat = this.modelData.tailMat;
    this.headMat = this.modelData.headMat;
    this.sirenLights = this.modelData.sirenLights;
    this.sirenRedMat = this.modelData.sirenRedMat;
    this.sirenBlueMat = this.modelData.sirenBlueMat;

    this.length = this.modelData.length;
    this.width = this.modelData.width;
    this.wheelRadius = this.modelData.wheelRadius;

    // IDM Parameters
    this.desiredSpeed = this.isEmergency ? 16.0 : (type === 'bus' ? 9.5 : (type === 'suv' ? 11.5 : 12.5)); // m/s
    this.currentSpeed = this.desiredSpeed * (0.8 + Math.random() * 0.3);
    this.acceleration = 0;
    this.maxAccel = this.isEmergency ? 3.5 : 2.2; // m/s^2
    this.comfortBrake = 2.8; // m/s^2
    this.minGap = 2.5; // s0 in meters
    this.timeHeadway = 1.2; // T in seconds

    // State on Spline
    this.distanceTraveled = 0; // Distance along curve in meters
    this.t = 0; // Normalized parameter [0, 1]
    this.isFinished = false;
    this.isBraking = false;
    this.leadDistance = 999;
    this.leadDeltaV = 0;
    this.stoppedAtLight = false;

    // Siren strobe state
    this.sirenTimer = 0;

    // Temp vectors for transformation
    this.positionVec = new THREE.Vector3();
    this.tangentVec = new THREE.Vector3();
    this.upVec = new THREE.Vector3(0, 1, 0);
    this.rotMatrix = new THREE.Matrix4();

    // Initial placement
    this.updateTransform();
  }

  update(delta, globalSpeedMult, trafficLights, leadingVehicle, pedestrians, intersectionConstraint = null) {
    if (this.isFinished) return;

    const curve = this.pathData.curve;
    const totalLength = this.pathData.length;
    const dt = Math.min(delta, 0.1);

    // 1. Calculate Effective Desired Speed
    let targetV0 = this.desiredSpeed * globalSpeedMult;

    // Reduce desired speed in curves for natural turning physics
    if (this.t > 0.35 && this.t < 0.65 && this.pathData.maneuver !== 'straight') {
      targetV0 *= 0.65;
    }

    // Boost regular traffic speed if in emergency corridor to clear the way ahead of ambulance
    if (trafficLights.emergencyActive && trafficLights.emergencyDirection === dir && !this.isEmergency) {
      targetV0 *= 1.25;
    }

    // 2. Determine Nearest Obstacle Distance (Leading vehicle vs Red Light Stop Line vs Pedestrian)
    let effectiveLeadGap = 999;
    let effectiveDeltaV = 0;

    // A) Vehicle in Front in same lane / forward path
    if (leadingVehicle) {
      const gap = (leadingVehicle.distanceTraveled - leadingVehicle.length / 2) -
                  (this.distanceTraveled + this.length / 2);
      if (gap > 0 && gap < effectiveLeadGap) {
        effectiveLeadGap = gap;
        effectiveDeltaV = this.currentSpeed - leadingVehicle.currentSpeed;
      }
    }

    // B) Traffic Light Stop Line
    const stopDistance = this.pathData.stopT * totalLength;
    const distToStop = stopDistance - (this.distanceTraveled + this.length / 2);
    const dir = this.pathData.direction;

    const isRed = trafficLights.isRed(dir);

    // Stop at RED light if before stop line
    if (distToStop > -1.0 && distToStop < 45.0) {
      if (!this.isEmergency) {
        if (isRed && distToStop + 1.0 < effectiveLeadGap) {
          effectiveLeadGap = Math.max(0.1, distToStop + 0.5);
          effectiveDeltaV = this.currentSpeed;
          this.stoppedAtLight = true;
        } else {
          this.stoppedAtLight = false;
        }
      } else {
        const emergencyGreen = trafficLights.emergencyActive &&
          trafficLights.emergencyDirection === dir && trafficLights.isGreen(dir);
        if (!emergencyGreen && isRed && distToStop + 1.0 < effectiveLeadGap) {
          effectiveLeadGap = Math.max(0.1, distToStop + 0.5);
          effectiveDeltaV = this.currentSpeed;
          this.stoppedAtLight = true;
        } else {
          this.stoppedAtLight = false;
        }
      }
    } else {
      this.stoppedAtLight = false;
    }

    // C) Path-aware intersection conflict reservation
    if (intersectionConstraint) {
      const gap = intersectionConstraint.leadGap;
      if (gap < effectiveLeadGap) {
        effectiveLeadGap = gap;
        effectiveDeltaV = intersectionConstraint.deltaV;
      }
    }

    // D) Pedestrians Crossing Ahead (Directional Check)
    if (pedestrians && pedestrians.length > 0) {
      const currentPos = this.positionVec;
      pedestrians.forEach(p => {
        if (p.isCrossing) {
          const relPos = p.position.clone().sub(currentPos);
          const forwardDist = relPos.dot(this.tangentVec);
          const lateralDist = Math.hypot(relPos.x - forwardDist * this.tangentVec.x, relPos.z - forwardDist * this.tangentVec.z);

          // Only yield if pedestrian is in front of the vehicle and within lateral path width
          if (forwardDist > 0.5 && forwardDist < 8.0 && lateralDist < 2.5) {
            if (forwardDist < effectiveLeadGap) {
              effectiveLeadGap = Math.max(0.5, forwardDist - 1.2);
              effectiveDeltaV = this.currentSpeed;
            }
          }
        }
      });
    }

    this.leadDistance = effectiveLeadGap;
    this.leadDeltaV = effectiveDeltaV;

    // 3. IDM (Intelligent Driver Model) Acceleration Computation
    const v = this.currentSpeed;
    const v0 = Math.max(0.1, targetV0);
    const a = this.maxAccel;
    const b = this.comfortBrake;
    const s0 = this.minGap;
    const T = this.timeHeadway;

    // Dynamic desired gap: s*(v, delta_v) = s0 + max(0, v*T + (v*delta_v)/(2*sqrt(a*b)))
    const dynamicGap = s0 + Math.max(0, (v * T) + (v * effectiveDeltaV) / (2 * Math.sqrt(a * b)));

    // Acceleration equation: a * [1 - (v/v0)^4 - (s*/s)^2]
    const freeRoadTerm = 1 - Math.pow(v / v0, 4);
    const interactionTerm = Math.pow(dynamicGap / Math.max(0.2, effectiveLeadGap), 2);
    this.acceleration = a * (freeRoadTerm - interactionTerm);

    // Hard braking clamp
    this.acceleration = Math.max(-8.0, Math.min(this.maxAccel, this.acceleration));

    // 4. Integrate Velocity & Distance
    const previousDistance = this.distanceTraveled;
    this.currentSpeed = Math.max(0, this.currentSpeed + this.acceleration * dt);
    this.distanceTraveled += this.currentSpeed * dt;

    // Hard safety guards run after IDM. IDM provides smooth behaviour, while
    // these clamps guarantee that a numerical frame-step can never push a
    // vehicle through a red stop line or through the back of its leader.
    if (leadingVehicle) {
      const maxLeaderDistance = leadingVehicle.distanceTraveled -
        (leadingVehicle.length + this.length) * 0.5 - 0.08;
      if (this.distanceTraveled > maxLeaderDistance && maxLeaderDistance >= previousDistance) {
        this.distanceTraveled = maxLeaderDistance;
        this.currentSpeed = Math.min(this.currentSpeed, leadingVehicle.currentSpeed);
        this.acceleration = Math.min(this.acceleration, -2.5);
      }
    }

    // Red means stop before the stop line. Yellow is deliberately not clamped.
    const redWasApproached = isRed && distToStop > -0.5;
    if (redWasApproached) {
      const maxStopDistance = stopDistance - this.length * 0.5 - 0.08;
      if (this.distanceTraveled > maxStopDistance && previousDistance <= maxStopDistance + 0.5) {
        this.distanceTraveled = Math.max(previousDistance, maxStopDistance);
        this.currentSpeed = 0;
        this.acceleration = Math.min(this.acceleration, -4.0);
        this.stoppedAtLight = true;
      }
    }

    // If an intersection reservation is active, never cross its reserved
    // conflict point during this frame. The next frame will re-evaluate the
    // reservation and release the vehicle when the path is clear.
    if (intersectionConstraint && intersectionConstraint.distanceToConflict > -0.5) {
      const conflictCenterDistance = this.distanceTraveled + this.length * 0.5;
      const maxConflictDistance = intersectionConstraint.distanceToConflict +
        previousDistance + this.length * 0.5 - 0.08;
      if (conflictCenterDistance > maxConflictDistance && maxConflictDistance >= previousDistance + this.length * 0.5) {
        this.distanceTraveled = maxConflictDistance - this.length * 0.5;
        this.currentSpeed = 0;
        this.acceleration = Math.min(this.acceleration, -4.0);
      }
    }

    this.distanceTraveled = Math.max(previousDistance, this.distanceTraveled);
    this.t = Math.min(1.0, this.distanceTraveled / totalLength);

    if (this.t >= 0.999) {
      this.isFinished = true;
      return;
    }

    // 5. Update Transformations & Visuals
    this.updateTransform();

    // Wheel spin
    const wheelSpin = (this.currentSpeed * dt) / this.wheelRadius;
    this.wheels.forEach(w => {
      w.rotation.x += wheelSpin;
    });

    // Braking visual state
    this.isBraking = this.acceleration < -0.4;
    if (this.tailMat) {
      this.tailMat.emissiveIntensity = this.isBraking ? 2.2 : 0.2;
    }

    // Chassis pitch on brake/accel
    const pitch = THREE.MathUtils.clamp(-this.acceleration * 0.015, -0.05, 0.03);
    this.chassis.rotation.x = THREE.MathUtils.lerp(this.chassis.rotation.x, pitch, 0.15);

    // Emergency Siren Strobe Animation
    if (this.isEmergency && this.sirenRedMat && this.sirenBlueMat) {
      this.sirenTimer += dt * 10;
      const strobe = Math.sin(this.sirenTimer) > 0;
      this.sirenRedMat.emissiveIntensity = strobe ? 3.0 : 0.2;
      this.sirenBlueMat.emissiveIntensity = strobe ? 0.2 : 3.0;
    }
  }

  updateTransform() {
    const curve = this.pathData.curve;
    curve.getPointAt(this.t, this.positionVec);
    this.mesh.position.copy(this.positionVec);

    // Heading tangent
    curve.getTangentAt(this.t, this.tangentVec).normalize();

    this.rotMatrix.lookAt(this.positionVec, this.positionVec.clone().sub(this.tangentVec), this.upVec);
    const targetQuat = new THREE.Quaternion().setFromRotationMatrix(this.rotMatrix);

    // Smooth heading quaternion Slerp to eliminate sudden turn snaps
    if (this.t < 0.01) {
      this.mesh.quaternion.copy(targetQuat);
    } else {
      this.mesh.quaternion.slerp(targetQuat, 0.22);
    }
  }

  dispose() {
    if (this.mesh.parent) {
      this.mesh.parent.remove(this.mesh);
    }
  }
}
