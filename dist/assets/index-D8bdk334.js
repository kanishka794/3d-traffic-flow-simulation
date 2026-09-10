var uc=Object.defineProperty;var dc=(s,t,e)=>t in s?uc(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Ne=(s,t,e)=>dc(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Er="160",zn={ROTATE:0,DOLLY:1,PAN:2},Gn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fc=0,Br=1,pc=2,So=1,Eo=2,rn=3,Mn=0,we=1,Xe=2,_n=0,oi=1,zr=2,Gr=3,Hr=4,mc=5,Cn=100,gc=101,_c=102,Vr=103,kr=104,xc=200,vc=201,Mc=202,Sc=203,ur=204,dr=205,Ec=206,yc=207,Tc=208,wc=209,bc=210,Ac=211,Rc=212,Cc=213,Lc=214,Pc=0,Dc=1,Ic=2,cs=3,Uc=4,Nc=5,Oc=6,Fc=7,yo=0,Bc=1,zc=2,xn=0,Gc=1,Hc=2,Vc=3,To=4,kc=5,Wc=6,wo=300,li=301,hi=302,fr=303,pr=304,Ms=306,je=1e3,Be=1001,mr=1002,ye=1003,Wr=1004,Cs=1005,Fe=1006,Xc=1007,wi=1008,vn=1009,Yc=1010,qc=1011,yr=1012,bo=1013,mn=1014,gn=1015,bi=1016,Ao=1017,Ro=1018,Pn=1020,jc=1021,Ye=1023,Kc=1024,Zc=1025,Dn=1026,ui=1027,$c=1028,Co=1029,Jc=1030,Lo=1031,Po=1033,Ls=33776,Ps=33777,Ds=33778,Is=33779,Xr=35840,Yr=35841,qr=35842,jr=35843,Do=36196,Kr=37492,Zr=37496,$r=37808,Jr=37809,Qr=37810,ta=37811,ea=37812,na=37813,ia=37814,sa=37815,ra=37816,aa=37817,oa=37818,ca=37819,la=37820,ha=37821,Us=36492,ua=36494,da=36495,Qc=36283,fa=36284,pa=36285,ma=36286,Io=3e3,In=3001,tl=3200,el=3201,Uo=0,nl=1,ze="",_e="srgb",on="srgb-linear",Tr="display-p3",Ss="display-p3-linear",ls="linear",te="srgb",hs="rec709",us="p3",Hn=7680,ga=519,il=512,sl=513,rl=514,No=515,al=516,ol=517,cl=518,ll=519,_a=35044,xa="300 es",gr=1035,an=2e3,ds=2001;class Fn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let va=1234567;const Ei=Math.PI/180,Ai=180/Math.PI;function fi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[s&255]+ve[s>>8&255]+ve[s>>16&255]+ve[s>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function me(s,t,e){return Math.max(t,Math.min(e,s))}function wr(s,t){return(s%t+t)%t}function hl(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function ul(s,t,e){return s!==t?(e-s)/(t-s):0}function yi(s,t,e){return(1-e)*s+e*t}function dl(s,t,e,n){return yi(s,t,1-Math.exp(-e*n))}function fl(s,t=1){return t-Math.abs(wr(s,t*2)-t)}function pl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ml(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function gl(s,t){return s+Math.floor(Math.random()*(t-s+1))}function _l(s,t){return s+Math.random()*(t-s)}function xl(s){return s*(.5-Math.random())}function vl(s){s!==void 0&&(va=s);let t=va+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ml(s){return s*Ei}function Sl(s){return s*Ai}function _r(s){return(s&s-1)===0&&s!==0}function El(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function fs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yl(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*m,a*l);break;case"YXY":s.set(c*m,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function si(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ps={DEG2RAD:Ei,RAD2DEG:Ai,generateUUID:fi,clamp:me,euclideanModulo:wr,mapLinear:hl,inverseLerp:ul,lerp:yi,damp:dl,pingpong:fl,smoothstep:pl,smootherstep:ml,randInt:gl,randFloat:_l,randFloatSpread:xl,seededRandom:vl,degToRad:Ml,radToDeg:Sl,isPowerOfTwo:_r,ceilPowerOfTwo:El,floorPowerOfTwo:fs,setQuaternionFromProperEuler:yl,normalize:Se,denormalize:si};class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,i,r,o,a,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=i[0],p=i[3],f=i[6],E=i[1],v=i[4],b=i[7],D=i[2],C=i[5],R=i[8];return r[0]=o*_+a*E+c*D,r[3]=o*p+a*v+c*C,r[6]=o*f+a*b+c*R,r[1]=l*_+h*E+u*D,r[4]=l*p+h*v+u*C,r[7]=l*f+h*b+u*R,r[2]=d*_+m*E+g*D,r[5]=d*p+m*v+g*C,r[8]=d*f+m*b+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,m=l*r-o*c,g=e*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ns.makeScale(t,e)),this}rotate(t){return this.premultiply(Ns.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ns.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new Xt;function Oo(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ms(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Tl(){const s=ms("canvas");return s.style.display="block",s}const Ma={};function Ti(s){s in Ma||(Ma[s]=!0,console.warn(s))}const Sa=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ea=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ii={[on]:{transfer:ls,primaries:hs,toReference:s=>s,fromReference:s=>s},[_e]:{transfer:te,primaries:hs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ss]:{transfer:ls,primaries:us,toReference:s=>s.applyMatrix3(Ea),fromReference:s=>s.applyMatrix3(Sa)},[Tr]:{transfer:te,primaries:us,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ea),fromReference:s=>s.applyMatrix3(Sa).convertLinearToSRGB()}},wl=new Set([on,Ss]),$t={enabled:!0,_workingColorSpace:on,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!wl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Ii[t].toReference,i=Ii[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ii[s].primaries},getTransfer:function(s){return s===ze?ls:Ii[s].transfer}};function ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Vn;class Fo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vn===void 0&&(Vn=ms("canvas")),Vn.width=t.width,Vn.height=t.height;const n=Vn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ms("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bl=0;class Bo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bl++}),this.uuid=fi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Fs(i[o].image)):r.push(Fs(i[o]))}else r=Fs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Al=0;class be extends Fn{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=Be,i=Be,r=Fe,o=wi,a=Ye,c=vn,l=be.DEFAULT_ANISOTROPY,h=ze){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Al++}),this.uuid=fi(),this.name="",this.source=new Bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===In?_e:ze),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case je:t.x=t.x-Math.floor(t.x);break;case Be:t.x=t.x<0?0:1;break;case mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case je:t.y=t.y-Math.floor(t.y);break;case Be:t.y=t.y<0?0:1;break;case mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_e?In:Io}set encoding(t){Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===In?_e:ze}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=wo;be.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,b=(m+1)/2,D=(f+1)/2,C=(h+d)/4,R=(u+_)/4,k=(g+p)/4;return v>b&&v>D?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=C/n,r=R/n):b>D?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=C/i,r=k/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=R/r,i=k/r),this.set(n,i,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((l+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rl extends Fn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ti("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===In?_e:ze),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Bo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Rl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class zo extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ye,this.minFilter=ye,this.wrapR=Be,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cl extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ye,this.minFilter=ye,this.wrapR=Be,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let p=1-a;const f=c*d+l*m+h*g+u*_,E=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const D=Math.sqrt(v),C=Math.atan2(D,f*E);p=Math.sin(p*C)/D,a=Math.sin(a*C)/D}const b=a*E;if(c=c*p+d*b,l=l*p+m*b,h=h*p+g*b,u=u*p+_*b,p===1-a){const D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-a*m,t[e+2]=l*g+h*m+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class y{constructor(t=0,e=0,n=0){y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ya.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ya.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bs.copy(this).projectOnVector(t),this.sub(Bs)}reflect(t){return this.sub(Bs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new y,ya=new Nn;class pi{constructor(t=new y(1/0,1/0,1/0),e=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ge):Ge.fromBufferAttribute(r,o),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ui.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ui.copy(n.boundingBox)),Ui.applyMatrix4(t.matrixWorld),this.union(Ui)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_i),Ni.subVectors(this.max,_i),kn.subVectors(t.a,_i),Wn.subVectors(t.b,_i),Xn.subVectors(t.c,_i),cn.subVectors(Wn,kn),ln.subVectors(Xn,Wn),yn.subVectors(kn,Xn);let e=[0,-cn.z,cn.y,0,-ln.z,ln.y,0,-yn.z,yn.y,cn.z,0,-cn.x,ln.z,0,-ln.x,yn.z,0,-yn.x,-cn.y,cn.x,0,-ln.y,ln.x,0,-yn.y,yn.x,0];return!zs(e,kn,Wn,Xn,Ni)||(e=[1,0,0,0,1,0,0,0,1],!zs(e,kn,Wn,Xn,Ni))?!1:(Oi.crossVectors(cn,ln),e=[Oi.x,Oi.y,Oi.z],zs(e,kn,Wn,Xn,Ni))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qe=[new y,new y,new y,new y,new y,new y,new y,new y],Ge=new y,Ui=new pi,kn=new y,Wn=new y,Xn=new y,cn=new y,ln=new y,yn=new y,_i=new y,Ni=new y,Oi=new y,Tn=new y;function zs(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Tn.fromArray(s,r);const a=i.x*Math.abs(Tn.x)+i.y*Math.abs(Tn.y)+i.z*Math.abs(Tn.z),c=t.dot(Tn),l=e.dot(Tn),h=n.dot(Tn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Ll=new pi,xi=new y,Gs=new y;class Ri{constructor(t=new y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ll.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xi.subVectors(t,this.center);const e=xi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(xi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xi.copy(t.center).add(Gs)),this.expandByPoint(xi.copy(t.center).sub(Gs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new y,Hs=new y,Fi=new y,hn=new y,Vs=new y,Bi=new y,ks=new y;class Ci{constructor(t=new y,e=new y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Hs.copy(t).add(e).multiplyScalar(.5),Fi.copy(e).sub(t).normalize(),hn.copy(this.origin).sub(Hs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Fi),a=hn.dot(this.direction),c=-hn.dot(Fi),l=hn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Hs).addScaledVector(Fi,d),m}intersectSphere(t,e){tn.subVectors(t.center,this.origin);const n=tn.dot(this.direction),i=tn.dot(tn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,n,i,r){Vs.subVectors(e,t),Bi.subVectors(n,t),ks.crossVectors(Vs,Bi);let o=this.direction.dot(ks),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hn.subVectors(this.origin,t);const c=a*this.direction.dot(Bi.crossVectors(hn,Bi));if(c<0)return null;const l=a*this.direction.dot(Vs.cross(hn));if(l<0||c+l>o)return null;const h=-a*hn.dot(ks);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,r,o,a,c,l,h,u,d,m,g,_,p){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,m,g,_,p)}set(t,e,n,i,r,o,a,c,l,h,u,d,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Yn.setFromMatrixColumn(t,0).length(),r=1/Yn.setFromMatrixColumn(t,1).length(),o=1/Yn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pl,t,Dl)}lookAt(t,e,n){const i=this.elements;return Ce.subVectors(t,e),Ce.lengthSq()===0&&(Ce.z=1),Ce.normalize(),un.crossVectors(n,Ce),un.lengthSq()===0&&(Math.abs(n.z)===1?Ce.x+=1e-4:Ce.z+=1e-4,Ce.normalize(),un.crossVectors(n,Ce)),un.normalize(),zi.crossVectors(Ce,un),i[0]=un.x,i[4]=zi.x,i[8]=Ce.x,i[1]=un.y,i[5]=zi.y,i[9]=Ce.y,i[2]=un.z,i[6]=zi.z,i[10]=Ce.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],E=n[3],v=n[7],b=n[11],D=n[15],C=i[0],R=i[4],k=i[8],M=i[12],w=i[1],N=i[5],G=i[9],X=i[13],P=i[2],U=i[6],H=i[10],q=i[14],Y=i[3],j=i[7],K=i[11],tt=i[15];return r[0]=o*C+a*w+c*P+l*Y,r[4]=o*R+a*N+c*U+l*j,r[8]=o*k+a*G+c*H+l*K,r[12]=o*M+a*X+c*q+l*tt,r[1]=h*C+u*w+d*P+m*Y,r[5]=h*R+u*N+d*U+m*j,r[9]=h*k+u*G+d*H+m*K,r[13]=h*M+u*X+d*q+m*tt,r[2]=g*C+_*w+p*P+f*Y,r[6]=g*R+_*N+p*U+f*j,r[10]=g*k+_*G+p*H+f*K,r[14]=g*M+_*X+p*q+f*tt,r[3]=E*C+v*w+b*P+D*Y,r[7]=E*R+v*N+b*U+D*j,r[11]=E*k+v*G+b*H+D*K,r[15]=E*M+v*X+b*q+D*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*m-n*c*m)+_*(+e*c*m-e*l*d+r*o*d-i*o*m+i*l*h-r*c*h)+p*(+e*l*u-e*a*m-r*o*u+n*o*m+r*a*h-n*l*h)+f*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],E=u*p*l-_*d*l+_*c*m-a*p*m-u*c*f+a*d*f,v=g*d*l-h*p*l-g*c*m+o*p*m+h*c*f-o*d*f,b=h*_*l-g*u*l+g*a*m-o*_*m-h*a*f+o*u*f,D=g*u*c-h*_*c-g*a*d+o*_*d+h*a*p-o*u*p,C=e*E+n*v+i*b+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=E*R,t[1]=(_*d*r-u*p*r-_*i*m+n*p*m+u*i*f-n*d*f)*R,t[2]=(a*p*r-_*c*r+_*i*l-n*p*l-a*i*f+n*c*f)*R,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*m-n*c*m)*R,t[4]=v*R,t[5]=(h*p*r-g*d*r+g*i*m-e*p*m-h*i*f+e*d*f)*R,t[6]=(g*c*r-o*p*r-g*i*l+e*p*l+o*i*f-e*c*f)*R,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*m+e*c*m)*R,t[8]=b*R,t[9]=(g*u*r-h*_*r-g*n*m+e*_*m+h*n*f-e*u*f)*R,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*f+e*a*f)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*m-e*a*m)*R,t[12]=D*R,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*p+e*u*p)*R,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*p-e*a*p)*R,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,m=r*h,g=r*u,_=o*h,p=o*u,f=a*u,E=c*l,v=c*h,b=c*u,D=n.x,C=n.y,R=n.z;return i[0]=(1-(_+f))*D,i[1]=(m+b)*D,i[2]=(g-v)*D,i[3]=0,i[4]=(m-b)*C,i[5]=(1-(d+f))*C,i[6]=(p+E)*C,i[7]=0,i[8]=(g+v)*R,i[9]=(p-E)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Yn.set(i[0],i[1],i[2]).length();const o=Yn.set(i[4],i[5],i[6]).length(),a=Yn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],He.copy(this);const l=1/r,h=1/o,u=1/a;return He.elements[0]*=l,He.elements[1]*=l,He.elements[2]*=l,He.elements[4]*=h,He.elements[5]*=h,He.elements[6]*=h,He.elements[8]*=u,He.elements[9]*=u,He.elements[10]*=u,e.setFromRotationMatrix(He),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=an){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let m,g;if(a===an)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ds)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=an){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,m=(n+i)*h;let g,_;if(a===an)g=(o+r)*u,_=-2*u;else if(a===ds)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yn=new y,He=new ne,Pl=new y(0,0,0),Dl=new y(1,1,1),un=new y,zi=new y,Ce=new y,Ta=new ne,wa=new Nn;class Li{constructor(t=0,e=0,n=0,i=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ta.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ta,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wa.setFromEuler(this),this.setFromQuaternion(wa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class br{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Il=0;const ba=new y,qn=new Nn,en=new ne,Gi=new y,vi=new y,Ul=new y,Nl=new Nn,Aa=new y(1,0,0),Ra=new y(0,1,0),Ca=new y(0,0,1),Ol={type:"added"},Fl={type:"removed"};class he extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new y,e=new Li,n=new Nn,i=new y(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Xt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.multiply(qn),this}rotateOnWorldAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.premultiply(qn),this}rotateX(t){return this.rotateOnAxis(Aa,t)}rotateY(t){return this.rotateOnAxis(Ra,t)}rotateZ(t){return this.rotateOnAxis(Ca,t)}translateOnAxis(t,e){return ba.copy(t).applyQuaternion(this.quaternion),this.position.add(ba.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Aa,t)}translateY(t){return this.translateOnAxis(Ra,t)}translateZ(t){return this.translateOnAxis(Ca,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gi.copy(t):Gi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(vi,Gi,this.up):en.lookAt(Gi,vi,this.up),this.quaternion.setFromRotationMatrix(en),i&&(en.extractRotation(i.matrixWorld),qn.setFromRotationMatrix(en),this.quaternion.premultiply(qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ol)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,t,Ul),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,Nl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}he.DEFAULT_UP=new y(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ve=new y,nn=new y,Ws=new y,sn=new y,jn=new y,Kn=new y,La=new y,Xs=new y,Ys=new y,qs=new y;let Hi=!1;class We{constructor(t=new y,e=new y,n=new y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ve.subVectors(t,e),i.cross(Ve);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ve.subVectors(i,e),nn.subVectors(n,e),Ws.subVectors(t,e);const o=Ve.dot(Ve),a=Ve.dot(nn),c=Ve.dot(Ws),l=nn.dot(nn),h=nn.dot(Ws),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(t,e,n,i,r,o,a,c){return Hi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hi=!0),this.getInterpolation(t,e,n,i,r,o,a,c)}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,sn.x),c.addScaledVector(o,sn.y),c.addScaledVector(a,sn.z),c)}static isFrontFacing(t,e,n,i){return Ve.subVectors(n,e),nn.subVectors(t,e),Ve.cross(nn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ve.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Ve.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Hi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hi=!0),We.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return We.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;jn.subVectors(i,n),Kn.subVectors(r,n),Xs.subVectors(t,n);const c=jn.dot(Xs),l=Kn.dot(Xs);if(c<=0&&l<=0)return e.copy(n);Ys.subVectors(t,i);const h=jn.dot(Ys),u=Kn.dot(Ys);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(jn,o);qs.subVectors(t,r);const m=jn.dot(qs),g=Kn.dot(qs);if(g>=0&&m<=g)return e.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Kn,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return La.subVectors(r,i),a=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(La,a);const f=1/(p+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(jn,o).addScaledVector(Kn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},Vi={h:0,s:0,l:0};function js(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=wr(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=js(o,r,t+1/3),this.g=js(o,r,t),this.b=js(o,r,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=_e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){const n=Go[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return $t.fromWorkingColorSpace(Me.copy(this),t),Math.round(me(Me.r*255,0,255))*65536+Math.round(me(Me.g*255,0,255))*256+Math.round(me(Me.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,i=Me.g,r=Me.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=_e){$t.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,i=Me.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(dn),this.setHSL(dn.h+t,dn.s+e,dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(dn),t.getHSL(Vi);const n=yi(dn.h,Vi.h,e),i=yi(dn.s,Vi.s,e),r=yi(dn.l,Vi.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new kt;kt.NAMES=Go;let Bl=0;class Bn extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=oi,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ur,this.blendDst=dr,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ga,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ur&&(n.blendSrc=this.blendSrc),this.blendDst!==dr&&(n.blendDst=this.blendDst),this.blendEquation!==Cn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ga&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ho extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new y,ki=new bt;class Ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_a,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ki.fromBufferAttribute(this,e),ki.applyMatrix3(t),this.setXY(e,ki.x,ki.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_a&&(t.usage=this.usage),t}}class Vo extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ko extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zl=0;const Oe=new ne,Ks=new he,Zn=new y,Le=new pi,Mi=new pi,pe=new y;class Ae extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Oo(t)?ko:Vo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oe.makeRotationFromQuaternion(t),this.applyMatrix4(Oe),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,n){return Oe.makeTranslation(t,e,n),this.applyMatrix4(Oe),this}scale(t,e,n){return Oe.makeScale(t,e,n),this.applyMatrix4(Oe),this}lookAt(t){return Ks.lookAt(t),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Le.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new y,1/0);return}if(t){const n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Mi.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(Le.min,Mi.min),Le.expandByPoint(pe),pe.addVectors(Le.max,Mi.max),Le.expandByPoint(pe)):(Le.expandByPoint(Mi.min),Le.expandByPoint(Mi.max))}Le.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(pe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)pe.fromBufferAttribute(a,l),c&&(Zn.fromBufferAttribute(t,l),pe.add(Zn)),i=Math.max(i,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new y,h[w]=new y;const u=new y,d=new y,m=new y,g=new bt,_=new bt,p=new bt,f=new y,E=new y;function v(w,N,G){u.fromArray(i,w*3),d.fromArray(i,N*3),m.fromArray(i,G*3),g.fromArray(o,w*2),_.fromArray(o,N*2),p.fromArray(o,G*2),d.sub(u),m.sub(u),_.sub(g),p.sub(g);const X=1/(_.x*p.y-p.x*_.y);isFinite(X)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(X),E.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(X),l[w].add(f),l[N].add(f),l[G].add(f),h[w].add(E),h[N].add(E),h[G].add(E))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,N=b.length;w<N;++w){const G=b[w],X=G.start,P=G.count;for(let U=X,H=X+P;U<H;U+=3)v(n[U+0],n[U+1],n[U+2])}const D=new y,C=new y,R=new y,k=new y;function M(w){R.fromArray(r,w*3),k.copy(R);const N=l[w];D.copy(N),D.sub(R.multiplyScalar(R.dot(N))).normalize(),C.crossVectors(k,N);const X=C.dot(h[w])<0?-1:1;c[w*4]=D.x,c[w*4+1]=D.y,c[w*4+2]=D.z,c[w*4+3]=X}for(let w=0,N=b.length;w<N;++w){const G=b[w],X=G.start,P=G.count;for(let U=X,H=X+P;U<H;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new y,r=new y,o=new y,a=new y,c=new y,l=new y,h=new y,u=new y;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[m++]}return new Ie(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pa=new ne,wn=new Ci,Wi=new Ri,Da=new y,$n=new y,Jn=new y,Qn=new y,Zs=new y,Xi=new y,Yi=new bt,qi=new bt,ji=new bt,Ia=new y,Ua=new y,Na=new y,Ki=new y,Zi=new y;class it extends he{constructor(t=new Ae,e=new Ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Xi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Zs.fromBufferAttribute(u,t),o?Xi.addScaledVector(Zs,h):Xi.addScaledVector(Zs.sub(e),h))}e.add(Xi)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(r),wn.copy(t.ray).recast(t.near),!(Wi.containsPoint(wn.origin)===!1&&(wn.intersectSphere(Wi,Da)===null||wn.origin.distanceToSquared(Da)>(t.far-t.near)**2))&&(Pa.copy(r).invert(),wn.copy(t.ray).applyMatrix4(Pa),!(n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,D=v;b<D;b+=3){const C=a.getX(b),R=a.getX(b+1),k=a.getX(b+2);i=$i(this,f,t,n,l,h,u,C,R,k),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const E=a.getX(p),v=a.getX(p+1),b=a.getX(p+2);i=$i(this,o,t,n,l,h,u,E,v,b),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,D=v;b<D;b+=3){const C=b,R=b+1,k=b+2;i=$i(this,f,t,n,l,h,u,C,R,k),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const E=p,v=p+1,b=p+2;i=$i(this,o,t,n,l,h,u,E,v,b),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Gl(s,t,e,n,i,r,o,a){let c;if(t.side===we?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Mn,a),c===null)return null;Zi.copy(a),Zi.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Zi);return l<e.near||l>e.far?null:{distance:l,point:Zi.clone(),object:s}}function $i(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,$n),s.getVertexPosition(c,Jn),s.getVertexPosition(l,Qn);const h=Gl(s,t,e,n,$n,Jn,Qn,Ki);if(h){i&&(Yi.fromBufferAttribute(i,a),qi.fromBufferAttribute(i,c),ji.fromBufferAttribute(i,l),h.uv=We.getInterpolation(Ki,$n,Jn,Qn,Yi,qi,ji,new bt)),r&&(Yi.fromBufferAttribute(r,a),qi.fromBufferAttribute(r,c),ji.fromBufferAttribute(r,l),h.uv1=We.getInterpolation(Ki,$n,Jn,Qn,Yi,qi,ji,new bt),h.uv2=h.uv1),o&&(Ia.fromBufferAttribute(o,a),Ua.fromBufferAttribute(o,c),Na.fromBufferAttribute(o,l),h.normal=We.getInterpolation(Ki,$n,Jn,Qn,Ia,Ua,Na,new y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new y,materialIndex:0};We.getNormal($n,Jn,Qn,u.normal),h.face=u}return h}class Ot extends Ae{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function g(_,p,f,E,v,b,D,C,R,k,M){const w=b/R,N=D/k,G=b/2,X=D/2,P=C/2,U=R+1,H=k+1;let q=0,Y=0;const j=new y;for(let K=0;K<H;K++){const tt=K*N-X;for(let at=0;at<U;at++){const W=at*w-G;j[_]=W*E,j[p]=tt*v,j[f]=P,l.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[f]=C>0?1:-1,h.push(j.x,j.y,j.z),u.push(at/R),u.push(1-K/k),q+=1}}for(let K=0;K<k;K++)for(let tt=0;tt<R;tt++){const at=d+tt+U*K,W=d+tt+U*(K+1),Z=d+(tt+1)+U*(K+1),ht=d+(tt+1)+U*K;c.push(at,W,ht),c.push(W,Z,ht),Y+=6}a.addGroup(m,Y,M),m+=Y,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ot(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function di(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ee(s){const t={};for(let e=0;e<s.length;e++){const n=di(s[e]);for(const i in n)t[i]=n[i]}return t}function Hl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Wo(s){return s.getRenderTarget()===null?s.outputColorSpace:$t.workingColorSpace}const Vl={clone:di,merge:Ee};var kl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kl,this.fragmentShader=Wl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=di(t.uniforms),this.uniformsGroups=Hl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xo extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=an}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pe extends Xo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ai*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ei*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ai*2*Math.atan(Math.tan(Ei*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ei*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ti=-90,ei=1;class Xl extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Pe(ti,ei,t,e);i.layers=this.layers,this.add(i);const r=new Pe(ti,ei,t,e);r.layers=this.layers,this.add(r);const o=new Pe(ti,ei,t,e);o.layers=this.layers,this.add(o);const a=new Pe(ti,ei,t,e);a.layers=this.layers,this.add(a);const c=new Pe(ti,ei,t,e);c.layers=this.layers,this.add(c);const l=new Pe(ti,ei,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===an)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yo extends be{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:li,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yl extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ti("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===In?_e:ze),this.texture=new Yo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ot(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:_n});r.uniforms.tEquirect.value=e;const o=new it(i,r),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=Fe),new Xl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const $s=new y,ql=new y,jl=new Xt;class fn{constructor(t=new y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=$s.subVectors(n,e).cross(ql.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($s),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jl.getNormalMatrix(t),i=this.coplanarPoint($s).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bn=new Ri,Ji=new y;class Ar{constructor(t=new fn,e=new fn,n=new fn,i=new fn,r=new fn,o=new fn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=an){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],m=i[8],g=i[9],_=i[10],p=i[11],f=i[12],E=i[13],v=i[14],b=i[15];if(n[0].setComponents(c-r,d-l,p-m,b-f).normalize(),n[1].setComponents(c+r,d+l,p+m,b+f).normalize(),n[2].setComponents(c+o,d+h,p+g,b+E).normalize(),n[3].setComponents(c-o,d-h,p-g,b-E).normalize(),n[4].setComponents(c-a,d-u,p-_,b-v).normalize(),e===an)n[5].setComponents(c+a,d+u,p+_,b+v).normalize();else if(e===ds)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bn)}intersectsSprite(t){return bn.center.set(0,0,0),bn.radius=.7071067811865476,bn.applyMatrix4(t.matrixWorld),this.intersectsSphere(bn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ji.x=i.normal.x>0?t.max.x:t.min.x,Ji.y=i.normal.y>0?t.max.y:t.min.y,Ji.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ji)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qo(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Kl(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,m=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){const d=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),m.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const f=g[_];e?s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}class Ke extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const E=f*d-o;for(let v=0;v<l;v++){const b=v*u-r;g.push(b,-E,0),_.push(0,0,1),p.push(v/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){const v=E+l*f,b=E+l*(f+1),D=E+1+l*(f+1),C=E+1+l*f;m.push(v,b,C),m.push(b,D,C)}this.setIndex(m),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.width,t.height,t.widthSegments,t.heightSegments)}}var Zl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$l=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ql=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,th=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ih=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ah=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ch=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ah=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Rh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ch=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ih=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$h=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,iu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,su=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ru=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,au=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ou=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,uu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,du=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_u=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Su=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Au=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ru=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Du=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Iu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Uu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ou=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ku=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ju=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ku=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ju=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,td=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ed=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,id=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ad=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ld=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ud=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_d=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Md=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ed=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Td=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ad=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Zl,alphahash_pars_fragment:$l,alphamap_fragment:Jl,alphamap_pars_fragment:Ql,alphatest_fragment:th,alphatest_pars_fragment:eh,aomap_fragment:nh,aomap_pars_fragment:ih,batching_pars_vertex:sh,batching_vertex:rh,begin_vertex:ah,beginnormal_vertex:oh,bsdfs:ch,iridescence_fragment:lh,bumpmap_pars_fragment:hh,clipping_planes_fragment:uh,clipping_planes_pars_fragment:dh,clipping_planes_pars_vertex:fh,clipping_planes_vertex:ph,color_fragment:mh,color_pars_fragment:gh,color_pars_vertex:_h,color_vertex:xh,common:vh,cube_uv_reflection_fragment:Mh,defaultnormal_vertex:Sh,displacementmap_pars_vertex:Eh,displacementmap_vertex:yh,emissivemap_fragment:Th,emissivemap_pars_fragment:wh,colorspace_fragment:bh,colorspace_pars_fragment:Ah,envmap_fragment:Rh,envmap_common_pars_fragment:Ch,envmap_pars_fragment:Lh,envmap_pars_vertex:Ph,envmap_physical_pars_fragment:kh,envmap_vertex:Dh,fog_vertex:Ih,fog_pars_vertex:Uh,fog_fragment:Nh,fog_pars_fragment:Oh,gradientmap_pars_fragment:Fh,lightmap_fragment:Bh,lightmap_pars_fragment:zh,lights_lambert_fragment:Gh,lights_lambert_pars_fragment:Hh,lights_pars_begin:Vh,lights_toon_fragment:Wh,lights_toon_pars_fragment:Xh,lights_phong_fragment:Yh,lights_phong_pars_fragment:qh,lights_physical_fragment:jh,lights_physical_pars_fragment:Kh,lights_fragment_begin:Zh,lights_fragment_maps:$h,lights_fragment_end:Jh,logdepthbuf_fragment:Qh,logdepthbuf_pars_fragment:tu,logdepthbuf_pars_vertex:eu,logdepthbuf_vertex:nu,map_fragment:iu,map_pars_fragment:su,map_particle_fragment:ru,map_particle_pars_fragment:au,metalnessmap_fragment:ou,metalnessmap_pars_fragment:cu,morphcolor_vertex:lu,morphnormal_vertex:hu,morphtarget_pars_vertex:uu,morphtarget_vertex:du,normal_fragment_begin:fu,normal_fragment_maps:pu,normal_pars_fragment:mu,normal_pars_vertex:gu,normal_vertex:_u,normalmap_pars_fragment:xu,clearcoat_normal_fragment_begin:vu,clearcoat_normal_fragment_maps:Mu,clearcoat_pars_fragment:Su,iridescence_pars_fragment:Eu,opaque_fragment:yu,packing:Tu,premultiplied_alpha_fragment:wu,project_vertex:bu,dithering_fragment:Au,dithering_pars_fragment:Ru,roughnessmap_fragment:Cu,roughnessmap_pars_fragment:Lu,shadowmap_pars_fragment:Pu,shadowmap_pars_vertex:Du,shadowmap_vertex:Iu,shadowmask_pars_fragment:Uu,skinbase_vertex:Nu,skinning_pars_vertex:Ou,skinning_vertex:Fu,skinnormal_vertex:Bu,specularmap_fragment:zu,specularmap_pars_fragment:Gu,tonemapping_fragment:Hu,tonemapping_pars_fragment:Vu,transmission_fragment:ku,transmission_pars_fragment:Wu,uv_pars_fragment:Xu,uv_pars_vertex:Yu,uv_vertex:qu,worldpos_vertex:ju,background_vert:Ku,background_frag:Zu,backgroundCube_vert:$u,backgroundCube_frag:Ju,cube_vert:Qu,cube_frag:td,depth_vert:ed,depth_frag:nd,distanceRGBA_vert:id,distanceRGBA_frag:sd,equirect_vert:rd,equirect_frag:ad,linedashed_vert:od,linedashed_frag:cd,meshbasic_vert:ld,meshbasic_frag:hd,meshlambert_vert:ud,meshlambert_frag:dd,meshmatcap_vert:fd,meshmatcap_frag:pd,meshnormal_vert:md,meshnormal_frag:gd,meshphong_vert:_d,meshphong_frag:xd,meshphysical_vert:vd,meshphysical_frag:Md,meshtoon_vert:Sd,meshtoon_frag:Ed,points_vert:yd,points_frag:Td,shadow_vert:wd,shadow_frag:bd,sprite_vert:Ad,sprite_frag:Rd},ot={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Ze={basic:{uniforms:Ee([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ee([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new kt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ee([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ee([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ee([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new kt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ee([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ee([ot.points,ot.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ee([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ee([ot.common,ot.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ee([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ee([ot.sprite,ot.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ee([ot.common,ot.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ee([ot.lights,ot.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Ze.physical={uniforms:Ee([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Qi={r:0,b:0,g:0};function Cd(s,t,e,n,i,r,o){const a=new kt(0);let c=r===!0?0:1,l,h,u=null,d=0,m=null;function g(p,f){let E=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),E=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ms)?(h===void 0&&(h=new it(new Ot(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:di(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=$t.getTransfer(v.colorSpace)!==te,(u!==v||d!==v.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new it(new Ke(2,2),new On({name:"BackgroundMaterial",uniforms:di(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=$t.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,f){p.getRGB(Qi,Wo(s)),n.buffers.color.setClear(Qi.r,Qi.g,Qi.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(a,c)},render:g}}function Ld(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null);let l=c,h=!1;function u(P,U,H,q,Y){let j=!1;if(o){const K=_(q,H,U);l!==K&&(l=K,m(l.object)),j=f(P,q,H,Y),j&&E(P,q,H,Y)}else{const K=U.wireframe===!0;(l.geometry!==q.id||l.program!==H.id||l.wireframe!==K)&&(l.geometry=q.id,l.program=H.id,l.wireframe=K,j=!0)}Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,k(P,U,H,q),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,U,H){const q=H.wireframe===!0;let Y=a[P.id];Y===void 0&&(Y={},a[P.id]=Y);let j=Y[U.id];j===void 0&&(j={},Y[U.id]=j);let K=j[q];return K===void 0&&(K=p(d()),j[q]=K),K}function p(P){const U=[],H=[],q=[];for(let Y=0;Y<i;Y++)U[Y]=0,H[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:q,object:P,attributes:{},index:null}}function f(P,U,H,q){const Y=l.attributes,j=U.attributes;let K=0;const tt=H.getAttributes();for(const at in tt)if(tt[at].location>=0){const Z=Y[at];let ht=j[at];if(ht===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(ht=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(ht=P.instanceColor)),Z===void 0||Z.attribute!==ht||ht&&Z.data!==ht.data)return!0;K++}return l.attributesNum!==K||l.index!==q}function E(P,U,H,q){const Y={},j=U.attributes;let K=0;const tt=H.getAttributes();for(const at in tt)if(tt[at].location>=0){let Z=j[at];Z===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const ht={};ht.attribute=Z,Z&&Z.data&&(ht.data=Z.data),Y[at]=ht,K++}l.attributes=Y,l.attributesNum=K,l.index=q}function v(){const P=l.newAttributes;for(let U=0,H=P.length;U<H;U++)P[U]=0}function b(P){D(P,0)}function D(P,U){const H=l.newAttributes,q=l.enabledAttributes,Y=l.attributeDivisors;H[P]=1,q[P]===0&&(s.enableVertexAttribArray(P),q[P]=1),Y[P]!==U&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),Y[P]=U)}function C(){const P=l.newAttributes,U=l.enabledAttributes;for(let H=0,q=U.length;H<q;H++)U[H]!==P[H]&&(s.disableVertexAttribArray(H),U[H]=0)}function R(P,U,H,q,Y,j,K){K===!0?s.vertexAttribIPointer(P,U,H,Y,j):s.vertexAttribPointer(P,U,H,q,Y,j)}function k(P,U,H,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const Y=q.attributes,j=H.getAttributes(),K=U.defaultAttributeValues;for(const tt in j){const at=j[tt];if(at.location>=0){let W=Y[tt];if(W===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){const Z=W.normalized,ht=W.itemSize,_t=e.get(W);if(_t===void 0)continue;const mt=_t.buffer,It=_t.type,Ut=_t.bytesPerElement,At=n.isWebGL2===!0&&(It===s.INT||It===s.UNSIGNED_INT||W.gpuType===bo);if(W.isInterleavedBufferAttribute){const Yt=W.data,F=Yt.stride,ge=W.offset;if(Yt.isInstancedInterleavedBuffer){for(let Et=0;Et<at.locationSize;Et++)D(at.location+Et,Yt.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Yt.meshPerAttribute*Yt.count)}else for(let Et=0;Et<at.locationSize;Et++)b(at.location+Et);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let Et=0;Et<at.locationSize;Et++)R(at.location+Et,ht/at.locationSize,It,Z,F*Ut,(ge+ht/at.locationSize*Et)*Ut,At)}else{if(W.isInstancedBufferAttribute){for(let Yt=0;Yt<at.locationSize;Yt++)D(at.location+Yt,W.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Yt=0;Yt<at.locationSize;Yt++)b(at.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let Yt=0;Yt<at.locationSize;Yt++)R(at.location+Yt,ht/at.locationSize,It,Z,ht*Ut,ht/at.locationSize*Yt*Ut,At)}}else if(K!==void 0){const Z=K[tt];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(at.location,Z);break;case 3:s.vertexAttrib3fv(at.location,Z);break;case 4:s.vertexAttrib4fv(at.location,Z);break;default:s.vertexAttrib1fv(at.location,Z)}}}}C()}function M(){G();for(const P in a){const U=a[P];for(const H in U){const q=U[H];for(const Y in q)g(q[Y].object),delete q[Y];delete U[H]}delete a[P]}}function w(P){if(a[P.id]===void 0)return;const U=a[P.id];for(const H in U){const q=U[H];for(const Y in q)g(q[Y].object),delete q[Y];delete U[H]}delete a[P.id]}function N(P){for(const U in a){const H=a[U];if(H[P.id]===void 0)continue;const q=H[P.id];for(const Y in q)g(q[Y].object),delete q[Y];delete H[P.id]}}function G(){X(),h=!0,l!==c&&(l=c,m(l.object))}function X(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:G,resetDefaultState:X,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:b,disableUnusedAttributes:C}}function Pd(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Dd(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,b=o||t.has("OES_texture_float"),D=v&&b,C=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:D,maxSamples:C}}function Id(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new fn,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{const E=r?0:n,v=E*4;let b=f.clippingState||null;c.value=b,b=h(g,d,v,m);for(let D=0;D!==v;++D)b[D]=e[D];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const f=m+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,b=m;v!==_;++v,b+=4)o.copy(u[v]).applyMatrix4(E,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Ud(s){let t=new WeakMap;function e(o,a){return a===fr?o.mapping=li:a===pr&&(o.mapping=hi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fr||a===pr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Yl(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class jo extends Xo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ri=4,Oa=[.125,.215,.35,.446,.526,.582],Ln=20,Js=new jo,Fa=new kt;let Qs=null,tr=0,er=0;const An=(1+Math.sqrt(5))/2,ni=1/An,Ba=[new y(1,1,1),new y(-1,1,1),new y(1,1,-1),new y(-1,1,-1),new y(0,An,ni),new y(0,An,-ni),new y(ni,0,An),new y(-ni,0,An),new y(An,ni,0),new y(-An,ni,0)];class za{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Qs=this._renderer.getRenderTarget(),tr=this._renderer.getActiveCubeFace(),er=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Va(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ha(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qs,tr,er),t.scissorTest=!1,ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===li||t.mapping===hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qs=this._renderer.getRenderTarget(),tr=this._renderer.getActiveCubeFace(),er=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:bi,format:Ye,colorSpace:on,depthBuffer:!1},i=Ga(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ga(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nd(r)),this._blurMaterial=Od(r,t,e)}return i}_compileMaterial(t){const e=new it(this._lodPlanes[0],t);this._renderer.compile(e,Js)}_sceneToCubeUV(t,e,n,i){const a=new Pe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Fa),h.toneMapping=xn,h.autoClear=!1;const m=new Ho({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),g=new it(new Ot,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Fa),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):E===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const v=this._cubeSize;ts(i,E*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===li||t.mapping===hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Va()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ha());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ts(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Js)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ba[(i-1)%Ba.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new it(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ln-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Ln;p>Ln&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ln}`);const f=[];let E=0;for(let R=0;R<Ln;++R){const k=R/_,M=Math.exp(-k*k/2);f.push(M),R===0?E+=M:R<p&&(E+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/E;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const b=this._sizeLods[i],D=3*b*(i>v-ri?i-v+ri:0),C=4*(this._cubeSize-b);ts(e,D,C,3*b,2*b),c.setRenderTarget(e),c.render(u,Js)}}function Nd(s){const t=[],e=[],n=[];let i=s;const r=s-ri+1+Oa.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-ri?c=Oa[o-s+ri-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,E=new Float32Array(_*g*m),v=new Float32Array(p*g*m),b=new Float32Array(f*g*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,k=C>2?0:-1,M=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];E.set(M,_*g*C),v.set(d,p*g*C);const w=[C,C,C,C,C,C];b.set(w,f*g*C)}const D=new Ae;D.setAttribute("position",new Ie(E,_)),D.setAttribute("uv",new Ie(v,p)),D.setAttribute("faceIndex",new Ie(b,f)),t.push(D),i>ri&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ga(s,t,e){const n=new Un(s,t,e);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ts(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Od(s,t,e){const n=new Float32Array(Ln),i=new y(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ha(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Va(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Rr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fd(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===fr||c===pr,h=c===li||c===hi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new za(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new za(s));const d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Bd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zd(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],s.ARRAY_BUFFER)}}function l(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let v=0,b=E.length;v<b;v+=3){const D=E[v+0],C=E[v+1],R=E[v+2];d.push(D,C,C,R,R,D)}}else if(g!==void 0){const E=g.array;_=g.version;for(let v=0,b=E.length/3-1;v<b;v+=3){const D=v+0,C=v+1,R=v+2;d.push(D,C,C,R,R,D)}}else return;const p=new(Oo(d)?ko:Vo)(d,1);p.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Gd(s,t,e,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,g){s.drawElements(r,g,a,m*c),e.update(g,r,1)}function u(m,g,_){if(_===0)return;let p,f;if(i)p=s,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,a,m*c,_),e.update(g,r,_)}function d(m,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let f=0;for(let E=0;E<_;E++)f+=g[E];e.update(f,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Hd(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Vd(s,t){return s[0]-t[0]}function kd(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Wd(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new ee,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==_){let U=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",U)};var m=U;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),b===!0&&(M=2),D===!0&&(M=3);let w=h.attributes.position.count*M,N=1;w>t.maxTextureSize&&(N=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const G=new Float32Array(w*N*4*_),X=new zo(G,w,N,_);X.type=gn,X.needsUpdate=!0;const P=M*4;for(let H=0;H<_;H++){const q=C[H],Y=R[H],j=k[H],K=w*N*4*H;for(let tt=0;tt<q.count;tt++){const at=tt*P;v===!0&&(o.fromBufferAttribute(q,tt),G[K+at+0]=o.x,G[K+at+1]=o.y,G[K+at+2]=o.z,G[K+at+3]=0),b===!0&&(o.fromBufferAttribute(Y,tt),G[K+at+4]=o.x,G[K+at+5]=o.y,G[K+at+6]=o.z,G[K+at+7]=0),D===!0&&(o.fromBufferAttribute(j,tt),G[K+at+8]=o.x,G[K+at+9]=o.y,G[K+at+10]=o.z,G[K+at+11]=j.itemSize===4?o.w:1)}}p={count:_,texture:X,size:new bt(w,N)},r.set(h,p),h.addEventListener("dispose",U)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const E=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",E),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];n[h.id]=_}for(let b=0;b<g;b++){const D=_[b];D[0]=b,D[1]=d[b]}_.sort(kd);for(let b=0;b<8;b++)b<g&&_[b][1]?(a[b][0]=_[b][0],a[b][1]=_[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Vd);const p=h.morphAttributes.position,f=h.morphAttributes.normal;let E=0;for(let b=0;b<8;b++){const D=a[b],C=D[0],R=D[1];C!==Number.MAX_SAFE_INTEGER&&R?(p&&h.getAttribute("morphTarget"+b)!==p[C]&&h.setAttribute("morphTarget"+b,p[C]),f&&h.getAttribute("morphNormal"+b)!==f[C]&&h.setAttribute("morphNormal"+b,f[C]),i[b]=R,E+=R):(p&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),f&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),i[b]=0)}const v=h.morphTargetsRelative?1:1-E;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Xd(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Ko extends be{constructor(t,e,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Dn,h!==Dn&&h!==ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Dn&&(n=mn),n===void 0&&h===ui&&(n=Pn),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ye,this.minFilter=c!==void 0?c:ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zo=new be,$o=new Ko(1,1);$o.compareFunction=No;const Jo=new zo,Qo=new Cl,tc=new Yo,ka=[],Wa=[],Xa=new Float32Array(16),Ya=new Float32Array(9),qa=new Float32Array(4);function mi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ka[i];if(r===void 0&&(r=new Float32Array(i),ka[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function de(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Es(s,t){let e=Wa[t];e===void 0&&(e=new Int32Array(t),Wa[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Yd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function qd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;s.uniform2fv(this.addr,t),de(e,t)}}function jd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;s.uniform3fv(this.addr,t),de(e,t)}}function Kd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;s.uniform4fv(this.addr,t),de(e,t)}}function Zd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;qa.set(n),s.uniformMatrix2fv(this.addr,!1,qa),de(e,n)}}function $d(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Ya.set(n),s.uniformMatrix3fv(this.addr,!1,Ya),de(e,n)}}function Jd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Xa.set(n),s.uniformMatrix4fv(this.addr,!1,Xa),de(e,n)}}function Qd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;s.uniform2iv(this.addr,t),de(e,t)}}function ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;s.uniform3iv(this.addr,t),de(e,t)}}function nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;s.uniform4iv(this.addr,t),de(e,t)}}function sf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;s.uniform2uiv(this.addr,t),de(e,t)}}function af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;s.uniform3uiv(this.addr,t),de(e,t)}}function of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;s.uniform4uiv(this.addr,t),de(e,t)}}function cf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?$o:Zo;e.setTexture2D(t||r,i)}function lf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qo,i)}function hf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||tc,i)}function uf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jo,i)}function df(s){switch(s){case 5126:return Yd;case 35664:return qd;case 35665:return jd;case 35666:return Kd;case 35674:return Zd;case 35675:return $d;case 35676:return Jd;case 5124:case 35670:return Qd;case 35667:case 35671:return tf;case 35668:case 35672:return ef;case 35669:case 35673:return nf;case 5125:return sf;case 36294:return rf;case 36295:return af;case 36296:return of;case 35678:case 36198:case 36298:case 36306:case 35682:return cf;case 35679:case 36299:case 36307:return lf;case 35680:case 36300:case 36308:case 36293:return hf;case 36289:case 36303:case 36311:case 36292:return uf}}function ff(s,t){s.uniform1fv(this.addr,t)}function pf(s,t){const e=mi(t,this.size,2);s.uniform2fv(this.addr,e)}function mf(s,t){const e=mi(t,this.size,3);s.uniform3fv(this.addr,e)}function gf(s,t){const e=mi(t,this.size,4);s.uniform4fv(this.addr,e)}function _f(s,t){const e=mi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function xf(s,t){const e=mi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function vf(s,t){const e=mi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Mf(s,t){s.uniform1iv(this.addr,t)}function Sf(s,t){s.uniform2iv(this.addr,t)}function Ef(s,t){s.uniform3iv(this.addr,t)}function yf(s,t){s.uniform4iv(this.addr,t)}function Tf(s,t){s.uniform1uiv(this.addr,t)}function wf(s,t){s.uniform2uiv(this.addr,t)}function bf(s,t){s.uniform3uiv(this.addr,t)}function Af(s,t){s.uniform4uiv(this.addr,t)}function Rf(s,t,e){const n=this.cache,i=t.length,r=Es(e,i);ue(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Zo,r[o])}function Cf(s,t,e){const n=this.cache,i=t.length,r=Es(e,i);ue(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Qo,r[o])}function Lf(s,t,e){const n=this.cache,i=t.length,r=Es(e,i);ue(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||tc,r[o])}function Pf(s,t,e){const n=this.cache,i=t.length,r=Es(e,i);ue(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Jo,r[o])}function Df(s){switch(s){case 5126:return ff;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return _f;case 35675:return xf;case 35676:return vf;case 5124:case 35670:return Mf;case 35667:case 35671:return Sf;case 35668:case 35672:return Ef;case 35669:case 35673:return yf;case 5125:return Tf;case 36294:return wf;case 36295:return bf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return Pf}}class If{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=df(e.type)}}class Uf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Df(e.type)}}class Nf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const nr=/(\w+)(\])?(\[|\.)?/g;function ja(s,t){s.seq.push(t),s.map[t.id]=t}function Of(s,t,e){const n=s.name,i=n.length;for(nr.lastIndex=0;;){const r=nr.exec(n),o=nr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ja(e,l===void 0?new If(a,s,t):new Uf(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Nf(a),ja(e,u)),e=u}}}class os{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Of(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ka(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Ff=37297;let Bf=0;function zf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Gf(s){const t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(s);let n;switch(t===e?n="":t===us&&e===hs?n="LinearDisplayP3ToLinearSRGB":t===hs&&e===us&&(n="LinearSRGBToLinearDisplayP3"),s){case on:case Ss:return[n,"LinearTransferOETF"];case _e:case Tr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Za(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+zf(s.getShaderSource(t),o)}else return i}function Hf(s,t){const e=Gf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Vf(s,t){let e;switch(t){case Gc:e="Linear";break;case Hc:e="Reinhard";break;case Vc:e="OptimizedCineon";break;case To:e="ACESFilmic";break;case Wc:e="AgX";break;case kc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function kf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ai).join(`
`)}function Wf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ai).join(`
`)}function Xf(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yf(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ai(s){return s!==""}function $a(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ja(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qf=/^[ \t]*#include +<([\w\d./]+)>/gm;function xr(s){return s.replace(qf,Kf)}const jf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kf(s,t){let e=Gt[t];if(e===void 0){const n=jf.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xr(e)}const Zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qa(s){return s.replace(Zf,$f)}function $f(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function to(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===So?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Eo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===rn&&(t="SHADOWMAP_TYPE_VSM"),t}function Qf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case li:case hi:t="ENVMAP_TYPE_CUBE";break;case Ms:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hi:t="ENVMAP_MODE_REFRACTION";break}return t}function ep(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case yo:t="ENVMAP_BLENDING_MULTIPLY";break;case Bc:t="ENVMAP_BLENDING_MIX";break;case zc:t="ENVMAP_BLENDING_ADD";break}return t}function np(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ip(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Jf(e),l=Qf(e),h=tp(e),u=ep(e),d=np(e),m=e.isWebGL2?"":kf(e),g=Wf(e),_=Xf(r),p=i.createProgram();let f,E,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ai).join(`
`),f.length>0&&(f+=`
`),E=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ai).join(`
`),E.length>0&&(E+=`
`)):(f=[to(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ai).join(`
`),E=[m,to(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==xn?Vf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Hf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ai).join(`
`)),o=xr(o),o=$a(o,e),o=Ja(o,e),a=xr(a),a=$a(a,e),a=Ja(a,e),o=Qa(o),a=Qa(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const b=v+f+o,D=v+E+a,C=Ka(i,i.VERTEX_SHADER,b),R=Ka(i,i.FRAGMENT_SHADER,D);i.attachShader(p,C),i.attachShader(p,R),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function k(G){if(s.debug.checkShaderErrors){const X=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(C).trim(),U=i.getShaderInfoLog(R).trim();let H=!0,q=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,C,R);else{const Y=Za(i,C,"vertex"),j=Za(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+Y+`
`+j)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(P===""||U==="")&&(q=!1);q&&(G.diagnostics={runnable:H,programLog:X,vertexShader:{log:P,prefix:f},fragmentShader:{log:U,prefix:E}})}i.deleteShader(C),i.deleteShader(R),M=new os(i,p),w=Yf(i,p)}let M;this.getUniforms=function(){return M===void 0&&k(this),M};let w;this.getAttributes=function(){return w===void 0&&k(this),w};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(p,Ff)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bf++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=R,this}let sp=0;class rp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ap(t),e.set(t,n)),n}}class ap{constructor(t){this.id=sp++,this.code=t,this.usedTimes=0}}function op(s,t,e,n,i,r,o){const a=new br,c=new rp,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,w,N,G,X){const P=G.fog,U=X.geometry,H=M.isMeshStandardMaterial?G.environment:null,q=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),Y=q&&q.mapping===Ms?q.image.height:null,j=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,tt=K!==void 0?K.length:0;let at=0;U.morphAttributes.position!==void 0&&(at=1),U.morphAttributes.normal!==void 0&&(at=2),U.morphAttributes.color!==void 0&&(at=3);let W,Z,ht,_t;if(j){const ae=Ze[j];W=ae.vertexShader,Z=ae.fragmentShader}else W=M.vertexShader,Z=M.fragmentShader,c.update(M),ht=c.getVertexShaderID(M),_t=c.getFragmentShaderID(M);const mt=s.getRenderTarget(),It=X.isInstancedMesh===!0,Ut=X.isBatchedMesh===!0,At=!!M.map,Yt=!!M.matcap,F=!!q,ge=!!M.aoMap,Et=!!M.lightMap,Lt=!!M.bumpMap,gt=!!M.normalMap,Qt=!!M.displacementMap,Ft=!!M.emissiveMap,T=!!M.metalnessMap,x=!!M.roughnessMap,O=M.anisotropy>0,et=M.clearcoat>0,J=M.iridescence>0,nt=M.sheen>0,xt=M.transmission>0,lt=O&&!!M.anisotropyMap,pt=et&&!!M.clearcoatMap,wt=et&&!!M.clearcoatNormalMap,Bt=et&&!!M.clearcoatRoughnessMap,$=J&&!!M.iridescenceMap,Zt=J&&!!M.iridescenceThicknessMap,Ht=nt&&!!M.sheenColorMap,Pt=nt&&!!M.sheenRoughnessMap,St=!!M.specularMap,ut=!!M.specularColorMap,A=!!M.specularIntensityMap,st=xt&&!!M.transmissionMap,vt=xt&&!!M.thicknessMap,ft=!!M.gradientMap,Q=!!M.alphaMap,L=M.alphaTest>0,rt=!!M.alphaHash,ct=!!M.extensions,Rt=!!U.attributes.uv1,yt=!!U.attributes.uv2,qt=!!U.attributes.uv3;let jt=xn;return M.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(jt=s.toneMapping),{isWebGL2:h,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:Z,defines:M.defines,customVertexShaderID:ht,customFragmentShaderID:_t,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ut,instancing:It,instancingColor:It&&X.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:on,map:At,matcap:Yt,envMap:F,envMapMode:F&&q.mapping,envMapCubeUVHeight:Y,aoMap:ge,lightMap:Et,bumpMap:Lt,normalMap:gt,displacementMap:d&&Qt,emissiveMap:Ft,normalMapObjectSpace:gt&&M.normalMapType===nl,normalMapTangentSpace:gt&&M.normalMapType===Uo,metalnessMap:T,roughnessMap:x,anisotropy:O,anisotropyMap:lt,clearcoat:et,clearcoatMap:pt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Bt,iridescence:J,iridescenceMap:$,iridescenceThicknessMap:Zt,sheen:nt,sheenColorMap:Ht,sheenRoughnessMap:Pt,specularMap:St,specularColorMap:ut,specularIntensityMap:A,transmission:xt,transmissionMap:st,thicknessMap:vt,gradientMap:ft,opaque:M.transparent===!1&&M.blending===oi,alphaMap:Q,alphaTest:L,alphaHash:rt,combine:M.combine,mapUv:At&&_(M.map.channel),aoMapUv:ge&&_(M.aoMap.channel),lightMapUv:Et&&_(M.lightMap.channel),bumpMapUv:Lt&&_(M.bumpMap.channel),normalMapUv:gt&&_(M.normalMap.channel),displacementMapUv:Qt&&_(M.displacementMap.channel),emissiveMapUv:Ft&&_(M.emissiveMap.channel),metalnessMapUv:T&&_(M.metalnessMap.channel),roughnessMapUv:x&&_(M.roughnessMap.channel),anisotropyMapUv:lt&&_(M.anisotropyMap.channel),clearcoatMapUv:pt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:wt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(M.sheenRoughnessMap.channel),specularMapUv:St&&_(M.specularMap.channel),specularColorMapUv:ut&&_(M.specularColorMap.channel),specularIntensityMapUv:A&&_(M.specularIntensityMap.channel),transmissionMapUv:st&&_(M.transmissionMap.channel),thicknessMapUv:vt&&_(M.thicknessMap.channel),alphaMapUv:Q&&_(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(gt||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Rt,vertexUv2s:yt,vertexUv3s:qt,pointsUvs:X.isPoints===!0&&!!U.attributes.uv&&(At||Q),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:at,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:jt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:At&&M.map.isVideoTexture===!0&&$t.getTransfer(M.map.colorSpace)===te,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xe,flipSided:M.side===we,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ct&&M.extensions.derivatives===!0,extensionFragDepth:ct&&M.extensions.fragDepth===!0,extensionDrawBuffers:ct&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)w.push(N),w.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(E(w,M),v(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function E(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){const w=g[M.type];let N;if(w){const G=Ze[w];N=Vl.clone(G.uniforms)}else N=M.uniforms;return N}function D(M,w){let N;for(let G=0,X=l.length;G<X;G++){const P=l[G];if(P.cacheKey===w){N=P,++N.usedTimes;break}}return N===void 0&&(N=new ip(s,w,M,r),l.push(N)),N}function C(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function R(M){c.remove(M)}function k(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:b,acquireProgram:D,releaseProgram:C,releaseShaderCache:R,programs:l,dispose:k}}function cp(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function lp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function eo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function no(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,m,g,_,p){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),t++,f}function a(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function c(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||lp),n.length>1&&n.sort(d||eo),i.length>1&&i.sort(d||eo)}function h(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function hp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new no,s.set(n,[o])):i>=r.length?(o=new no,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function up(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new y,color:new kt};break;case"SpotLight":e={position:new y,direction:new y,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new y,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new y,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new y,halfWidth:new y,halfHeight:new y};break}return s[t.id]=e,e}}}function dp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let fp=0;function pp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function mp(s,t){const e=new up,n=dp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new y);const r=new y,o=new ne,a=new ne;function c(h,u){let d=0,m=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let _=0,p=0,f=0,E=0,v=0,b=0,D=0,C=0,R=0,k=0,M=0;h.sort(pp);const w=u===!0?Math.PI:1;for(let G=0,X=h.length;G<X;G++){const P=h[G],U=P.color,H=P.intensity,q=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=U.r*H*w,m+=U.g*H*w,g+=U.b*H*w;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],H);M++}else if(P.isDirectionalLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const K=P.shadow,tt=n.get(P);tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,i.directionalShadow[_]=tt,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=P.shadow.matrix,b++}i.directional[_]=j,_++}else if(P.isSpotLight){const j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(U).multiplyScalar(H*w),j.distance=q,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[f]=j;const K=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,K.updateMatrices(P),P.castShadow&&k++),i.spotLightMatrix[f]=K.matrix,P.castShadow){const tt=n.get(P);tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,i.spotShadow[f]=tt,i.spotShadowMap[f]=Y,C++}f++}else if(P.isRectAreaLight){const j=e.get(P);j.color.copy(U).multiplyScalar(H),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[E]=j,E++}else if(P.isPointLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*w),j.distance=P.distance,j.decay=P.decay,P.castShadow){const K=P.shadow,tt=n.get(P);tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,tt.shadowCameraNear=K.camera.near,tt.shadowCameraFar=K.camera.far,i.pointShadow[p]=tt,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=P.shadow.matrix,D++}i.point[p]=j,p++}else if(P.isHemisphereLight){const j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(H*w),j.groundColor.copy(P.groundColor).multiplyScalar(H*w),i.hemi[v]=j,v++}}E>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const N=i.hash;(N.directionalLength!==_||N.pointLength!==p||N.spotLength!==f||N.rectAreaLength!==E||N.hemiLength!==v||N.numDirectionalShadows!==b||N.numPointShadows!==D||N.numSpotShadows!==C||N.numSpotMaps!==R||N.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=E,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=C+R-k,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=M,N.directionalLength=_,N.pointLength=p,N.spotLength=f,N.rectAreaLength=E,N.hemiLength=v,N.numDirectionalShadows=b,N.numPointShadows=D,N.numSpotShadows=C,N.numSpotMaps=R,N.numLightProbes=M,i.version=fp++)}function l(h,u){let d=0,m=0,g=0,_=0,p=0;const f=u.matrixWorldInverse;for(let E=0,v=h.length;E<v;E++){const b=h[E];if(b.isDirectionalLight){const D=i.directional[d];D.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(f),d++}else if(b.isSpotLight){const D=i.spot[g];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(f),g++}else if(b.isRectAreaLight){const D=i.rectArea[_];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(f),a.identity(),o.copy(b.matrixWorld),o.premultiply(f),a.extractRotation(o),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const D=i.point[m];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(f),m++}else if(b.isHemisphereLight){const D=i.hemi[p];D.direction.setFromMatrixPosition(b.matrixWorld),D.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:i}}function io(s,t){const e=new mp(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function gp(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new io(s,t),e.set(r,[c])):o>=a.length?(c=new io(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class _p extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xp extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sp(s,t,e){let n=new Ar;const i=new bt,r=new bt,o=new ee,a=new _p({depthPacking:el}),c=new xp,l={},h=e.maxTextureSize,u={[Mn]:we,[we]:Mn,[Xe]:Xe},d=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:vp,fragmentShader:Mp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new it(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=So;let f=this.type;this.render=function(C,R,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const M=s.getRenderTarget(),w=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),G=s.state;G.setBlending(_n),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const X=f!==rn&&this.type===rn,P=f===rn&&this.type!==rn;for(let U=0,H=C.length;U<H;U++){const q=C[U],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const j=Y.getFrameExtents();if(i.multiply(j),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,Y.mapSize.y=r.y)),Y.map===null||X===!0||P===!0){const tt=this.type!==rn?{minFilter:ye,magFilter:ye}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Un(i.x,i.y,tt),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const K=Y.getViewportCount();for(let tt=0;tt<K;tt++){const at=Y.getViewport(tt);o.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),G.viewport(o),Y.updateMatrices(q,tt),n=Y.getFrustum(),b(R,k,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===rn&&E(Y,k),Y.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(M,w,N)};function E(C,R){const k=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Un(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(R,null,k,d,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(R,null,k,m,_,null)}function v(C,R,k,M){let w=null;const N=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)w=N;else if(w=k.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=w.uuid,X=R.uuid;let P=l[G];P===void 0&&(P={},l[G]=P);let U=P[X];U===void 0&&(U=w.clone(),P[X]=U,R.addEventListener("dispose",D)),w=U}if(w.visible=R.visible,w.wireframe=R.wireframe,M===rn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:u[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const G=s.properties.get(w);G.light=k}return w}function b(C,R,k,M,w){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===rn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);const X=t.update(C),P=C.material;if(Array.isArray(P)){const U=X.groups;for(let H=0,q=U.length;H<q;H++){const Y=U[H],j=P[Y.materialIndex];if(j&&j.visible){const K=v(C,j,M,w);C.onBeforeShadow(s,C,R,k,X,K,Y),s.renderBufferDirect(k,null,X,K,C,Y),C.onAfterShadow(s,C,R,k,X,K,Y)}}}else if(P.visible){const U=v(C,P,M,w);C.onBeforeShadow(s,C,R,k,X,U,null),s.renderBufferDirect(k,null,X,U,C,null),C.onAfterShadow(s,C,R,k,X,U,null)}}const G=C.children;for(let X=0,P=G.length;X<P;X++)b(G[X],R,k,M,w)}function D(C){C.target.removeEventListener("dispose",D);for(const k in l){const M=l[k],w=C.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function Ep(s,t,e){const n=e.isWebGL2;function i(){let L=!1;const rt=new ee;let ct=null;const Rt=new ee(0,0,0,0);return{setMask:function(yt){ct!==yt&&!L&&(s.colorMask(yt,yt,yt,yt),ct=yt)},setLocked:function(yt){L=yt},setClear:function(yt,qt,jt,se,ae){ae===!0&&(yt*=se,qt*=se,jt*=se),rt.set(yt,qt,jt,se),Rt.equals(rt)===!1&&(s.clearColor(yt,qt,jt,se),Rt.copy(rt))},reset:function(){L=!1,ct=null,Rt.set(-1,0,0,0)}}}function r(){let L=!1,rt=null,ct=null,Rt=null;return{setTest:function(yt){yt?Ut(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(yt){rt!==yt&&!L&&(s.depthMask(yt),rt=yt)},setFunc:function(yt){if(ct!==yt){switch(yt){case Pc:s.depthFunc(s.NEVER);break;case Dc:s.depthFunc(s.ALWAYS);break;case Ic:s.depthFunc(s.LESS);break;case cs:s.depthFunc(s.LEQUAL);break;case Uc:s.depthFunc(s.EQUAL);break;case Nc:s.depthFunc(s.GEQUAL);break;case Oc:s.depthFunc(s.GREATER);break;case Fc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ct=yt}},setLocked:function(yt){L=yt},setClear:function(yt){Rt!==yt&&(s.clearDepth(yt),Rt=yt)},reset:function(){L=!1,rt=null,ct=null,Rt=null}}}function o(){let L=!1,rt=null,ct=null,Rt=null,yt=null,qt=null,jt=null,se=null,ae=null;return{setTest:function(Kt){L||(Kt?Ut(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Kt){rt!==Kt&&!L&&(s.stencilMask(Kt),rt=Kt)},setFunc:function(Kt,ce,qe){(ct!==Kt||Rt!==ce||yt!==qe)&&(s.stencilFunc(Kt,ce,qe),ct=Kt,Rt=ce,yt=qe)},setOp:function(Kt,ce,qe){(qt!==Kt||jt!==ce||se!==qe)&&(s.stencilOp(Kt,ce,qe),qt=Kt,jt=ce,se=qe)},setLocked:function(Kt){L=Kt},setClear:function(Kt){ae!==Kt&&(s.clearStencil(Kt),ae=Kt)},reset:function(){L=!1,rt=null,ct=null,Rt=null,yt=null,qt=null,jt=null,se=null,ae=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,E=null,v=null,b=null,D=null,C=null,R=null,k=null,M=new kt(0,0,0),w=0,N=!1,G=null,X=null,P=null,U=null,H=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=j>=2);let tt=null,at={};const W=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),ht=new ee().fromArray(W),_t=new ee().fromArray(Z);function mt(L,rt,ct,Rt){const yt=new Uint8Array(4),qt=s.createTexture();s.bindTexture(L,qt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let jt=0;jt<ct;jt++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(rt,0,s.RGBA,1,1,Rt,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(rt+jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return qt}const It={};It[s.TEXTURE_2D]=mt(s.TEXTURE_2D,s.TEXTURE_2D,1),It[s.TEXTURE_CUBE_MAP]=mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(It[s.TEXTURE_2D_ARRAY]=mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),It[s.TEXTURE_3D]=mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ut(s.DEPTH_TEST),c.setFunc(cs),Ft(!1),T(Br),Ut(s.CULL_FACE),gt(_n);function Ut(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function At(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function Yt(L,rt){return m[L]!==rt?(s.bindFramebuffer(L,rt),m[L]=rt,n&&(L===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=rt),L===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=rt)),!0):!1}function F(L,rt){let ct=_,Rt=!1;if(L)if(ct=g.get(rt),ct===void 0&&(ct=[],g.set(rt,ct)),L.isWebGLMultipleRenderTargets){const yt=L.texture;if(ct.length!==yt.length||ct[0]!==s.COLOR_ATTACHMENT0){for(let qt=0,jt=yt.length;qt<jt;qt++)ct[qt]=s.COLOR_ATTACHMENT0+qt;ct.length=yt.length,Rt=!0}}else ct[0]!==s.COLOR_ATTACHMENT0&&(ct[0]=s.COLOR_ATTACHMENT0,Rt=!0);else ct[0]!==s.BACK&&(ct[0]=s.BACK,Rt=!0);Rt&&(e.isWebGL2?s.drawBuffers(ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct))}function ge(L){return p!==L?(s.useProgram(L),p=L,!0):!1}const Et={[Cn]:s.FUNC_ADD,[gc]:s.FUNC_SUBTRACT,[_c]:s.FUNC_REVERSE_SUBTRACT};if(n)Et[Vr]=s.MIN,Et[kr]=s.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(Et[Vr]=L.MIN_EXT,Et[kr]=L.MAX_EXT)}const Lt={[xc]:s.ZERO,[vc]:s.ONE,[Mc]:s.SRC_COLOR,[ur]:s.SRC_ALPHA,[bc]:s.SRC_ALPHA_SATURATE,[Tc]:s.DST_COLOR,[Ec]:s.DST_ALPHA,[Sc]:s.ONE_MINUS_SRC_COLOR,[dr]:s.ONE_MINUS_SRC_ALPHA,[wc]:s.ONE_MINUS_DST_COLOR,[yc]:s.ONE_MINUS_DST_ALPHA,[Ac]:s.CONSTANT_COLOR,[Rc]:s.ONE_MINUS_CONSTANT_COLOR,[Cc]:s.CONSTANT_ALPHA,[Lc]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(L,rt,ct,Rt,yt,qt,jt,se,ae,Kt){if(L===_n){f===!0&&(At(s.BLEND),f=!1);return}if(f===!1&&(Ut(s.BLEND),f=!0),L!==mc){if(L!==E||Kt!==N){if((v!==Cn||C!==Cn)&&(s.blendEquation(s.FUNC_ADD),v=Cn,C=Cn),Kt)switch(L){case oi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zr:s.blendFunc(s.ONE,s.ONE);break;case Gr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case oi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Gr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,D=null,R=null,k=null,M.set(0,0,0),w=0,E=L,N=Kt}return}yt=yt||rt,qt=qt||ct,jt=jt||Rt,(rt!==v||yt!==C)&&(s.blendEquationSeparate(Et[rt],Et[yt]),v=rt,C=yt),(ct!==b||Rt!==D||qt!==R||jt!==k)&&(s.blendFuncSeparate(Lt[ct],Lt[Rt],Lt[qt],Lt[jt]),b=ct,D=Rt,R=qt,k=jt),(se.equals(M)===!1||ae!==w)&&(s.blendColor(se.r,se.g,se.b,ae),M.copy(se),w=ae),E=L,N=!1}function Qt(L,rt){L.side===Xe?At(s.CULL_FACE):Ut(s.CULL_FACE);let ct=L.side===we;rt&&(ct=!ct),Ft(ct),L.blending===oi&&L.transparent===!1?gt(_n):gt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const Rt=L.stencilWrite;l.setTest(Rt),Rt&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),O(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ut(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(L){G!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),G=L)}function T(L){L!==fc?(Ut(s.CULL_FACE),L!==X&&(L===Br?s.cullFace(s.BACK):L===pc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),X=L}function x(L){L!==P&&(Y&&s.lineWidth(L),P=L)}function O(L,rt,ct){L?(Ut(s.POLYGON_OFFSET_FILL),(U!==rt||H!==ct)&&(s.polygonOffset(rt,ct),U=rt,H=ct)):At(s.POLYGON_OFFSET_FILL)}function et(L){L?Ut(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function J(L){L===void 0&&(L=s.TEXTURE0+q-1),tt!==L&&(s.activeTexture(L),tt=L)}function nt(L,rt,ct){ct===void 0&&(tt===null?ct=s.TEXTURE0+q-1:ct=tt);let Rt=at[ct];Rt===void 0&&(Rt={type:void 0,texture:void 0},at[ct]=Rt),(Rt.type!==L||Rt.texture!==rt)&&(tt!==ct&&(s.activeTexture(ct),tt=ct),s.bindTexture(L,rt||It[L]),Rt.type=L,Rt.texture=rt)}function xt(){const L=at[tt];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function lt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Bt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Zt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function A(L){ht.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ht.copy(L))}function st(L){_t.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),_t.copy(L))}function vt(L,rt){let ct=u.get(rt);ct===void 0&&(ct=new WeakMap,u.set(rt,ct));let Rt=ct.get(L);Rt===void 0&&(Rt=s.getUniformBlockIndex(rt,L.name),ct.set(L,Rt))}function ft(L,rt){const Rt=u.get(rt).get(L);h.get(rt)!==Rt&&(s.uniformBlockBinding(rt,Rt,L.__bindingPointIndex),h.set(rt,Rt))}function Q(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},tt=null,at={},m={},g=new WeakMap,_=[],p=null,f=!1,E=null,v=null,b=null,D=null,C=null,R=null,k=null,M=new kt(0,0,0),w=0,N=!1,G=null,X=null,P=null,U=null,H=null,ht.set(0,0,s.canvas.width,s.canvas.height),_t.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ut,disable:At,bindFramebuffer:Yt,drawBuffers:F,useProgram:ge,setBlending:gt,setMaterial:Qt,setFlipSided:Ft,setCullFace:T,setLineWidth:x,setPolygonOffset:O,setScissorTest:et,activeTexture:J,bindTexture:nt,unbindTexture:xt,compressedTexImage2D:lt,compressedTexImage3D:pt,texImage2D:St,texImage3D:ut,updateUBOMapping:vt,uniformBlockBinding:ft,texStorage2D:Ht,texStorage3D:Pt,texSubImage2D:wt,texSubImage3D:Bt,compressedTexSubImage2D:$,compressedTexSubImage3D:Zt,scissor:A,viewport:st,reset:Q}}function yp(s,t,e,n,i,r,o){const a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return m?new OffscreenCanvas(T,x):ms("canvas")}function _(T,x,O,et){let J=1;if((T.width>et||T.height>et)&&(J=et/Math.max(T.width,T.height)),J<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const nt=x?fs:Math.floor,xt=nt(J*T.width),lt=nt(J*T.height);u===void 0&&(u=g(xt,lt));const pt=O?g(xt,lt):u;return pt.width=xt,pt.height=lt,pt.getContext("2d").drawImage(T,0,0,xt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xt+"x"+lt+")."),pt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return _r(T.width)&&_r(T.height)}function f(T){return a?!1:T.wrapS!==Be||T.wrapT!==Be||T.minFilter!==ye&&T.minFilter!==Fe}function E(T,x){return T.generateMipmaps&&x&&T.minFilter!==ye&&T.minFilter!==Fe}function v(T){s.generateMipmap(T)}function b(T,x,O,et,J=!1){if(a===!1)return x;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let nt=x;if(x===s.RED&&(O===s.FLOAT&&(nt=s.R32F),O===s.HALF_FLOAT&&(nt=s.R16F),O===s.UNSIGNED_BYTE&&(nt=s.R8)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(nt=s.R8UI),O===s.UNSIGNED_SHORT&&(nt=s.R16UI),O===s.UNSIGNED_INT&&(nt=s.R32UI),O===s.BYTE&&(nt=s.R8I),O===s.SHORT&&(nt=s.R16I),O===s.INT&&(nt=s.R32I)),x===s.RG&&(O===s.FLOAT&&(nt=s.RG32F),O===s.HALF_FLOAT&&(nt=s.RG16F),O===s.UNSIGNED_BYTE&&(nt=s.RG8)),x===s.RGBA){const xt=J?ls:$t.getTransfer(et);O===s.FLOAT&&(nt=s.RGBA32F),O===s.HALF_FLOAT&&(nt=s.RGBA16F),O===s.UNSIGNED_BYTE&&(nt=xt===te?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function D(T,x,O){return E(T,O)===!0||T.isFramebufferTexture&&T.minFilter!==ye&&T.minFilter!==Fe?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function C(T){return T===ye||T===Wr||T===Cs?s.NEAREST:s.LINEAR}function R(T){const x=T.target;x.removeEventListener("dispose",R),M(x),x.isVideoTexture&&h.delete(x)}function k(T){const x=T.target;x.removeEventListener("dispose",k),N(x)}function M(T){const x=n.get(T);if(x.__webglInit===void 0)return;const O=T.source,et=d.get(O);if(et){const J=et[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(T),Object.keys(et).length===0&&d.delete(O)}n.remove(T)}function w(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const O=T.source,et=d.get(O);delete et[x.__cacheKey],o.memory.textures--}function N(T){const x=T.texture,O=n.get(T),et=n.get(x);if(et.__webglTexture!==void 0&&(s.deleteTexture(et.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(O.__webglFramebuffer[J]))for(let nt=0;nt<O.__webglFramebuffer[J].length;nt++)s.deleteFramebuffer(O.__webglFramebuffer[J][nt]);else s.deleteFramebuffer(O.__webglFramebuffer[J]);O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[J])}else{if(Array.isArray(O.__webglFramebuffer))for(let J=0;J<O.__webglFramebuffer.length;J++)s.deleteFramebuffer(O.__webglFramebuffer[J]);else s.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let J=0;J<O.__webglColorRenderbuffer.length;J++)O.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[J]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,nt=x.length;J<nt;J++){const xt=n.get(x[J]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(x[J])}n.remove(x),n.remove(T)}let G=0;function X(){G=0}function P(){const T=G;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),G+=1,T}function U(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function H(T,x){const O=n.get(T);if(T.isVideoTexture&&Qt(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const et=T.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(O,T,x);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function q(T,x){const O=n.get(T);if(T.version>0&&O.__version!==T.version){ht(O,T,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function Y(T,x){const O=n.get(T);if(T.version>0&&O.__version!==T.version){ht(O,T,x);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function j(T,x){const O=n.get(T);if(T.version>0&&O.__version!==T.version){_t(O,T,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}const K={[je]:s.REPEAT,[Be]:s.CLAMP_TO_EDGE,[mr]:s.MIRRORED_REPEAT},tt={[ye]:s.NEAREST,[Wr]:s.NEAREST_MIPMAP_NEAREST,[Cs]:s.NEAREST_MIPMAP_LINEAR,[Fe]:s.LINEAR,[Xc]:s.LINEAR_MIPMAP_NEAREST,[wi]:s.LINEAR_MIPMAP_LINEAR},at={[il]:s.NEVER,[ll]:s.ALWAYS,[sl]:s.LESS,[No]:s.LEQUAL,[rl]:s.EQUAL,[cl]:s.GEQUAL,[al]:s.GREATER,[ol]:s.NOTEQUAL};function W(T,x,O){if(O?(s.texParameteri(T,s.TEXTURE_WRAP_S,K[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,K[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,K[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,tt[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,tt[x.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==Be||x.wrapT!==Be)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,C(x.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,C(x.minFilter)),x.minFilter!==ye&&x.minFilter!==Fe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,at[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===ye||x.minFilter!==Cs&&x.minFilter!==wi||x.type===gn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===bi&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(T,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Z(T,x){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",R));const et=x.source;let J=d.get(et);J===void 0&&(J={},d.set(et,J));const nt=U(x);if(nt!==T.__cacheKey){J[nt]===void 0&&(J[nt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[nt].usedTimes++;const xt=J[T.__cacheKey];xt!==void 0&&(J[T.__cacheKey].usedTimes--,xt.usedTimes===0&&w(x)),T.__cacheKey=nt,T.__webglTexture=J[nt].texture}return O}function ht(T,x,O){let et=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(et=s.TEXTURE_3D);const J=Z(T,x),nt=x.source;e.bindTexture(et,T.__webglTexture,s.TEXTURE0+O);const xt=n.get(nt);if(nt.version!==xt.__version||J===!0){e.activeTexture(s.TEXTURE0+O);const lt=$t.getPrimaries($t.workingColorSpace),pt=x.colorSpace===ze?null:$t.getPrimaries(x.colorSpace),wt=x.colorSpace===ze||lt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Bt=f(x)&&p(x.image)===!1;let $=_(x.image,Bt,!1,i.maxTextureSize);$=Ft(x,$);const Zt=p($)||a,Ht=r.convert(x.format,x.colorSpace);let Pt=r.convert(x.type),St=b(x.internalFormat,Ht,Pt,x.colorSpace,x.isVideoTexture);W(et,x,Zt);let ut;const A=x.mipmaps,st=a&&x.isVideoTexture!==!0&&St!==Do,vt=xt.__version===void 0||J===!0,ft=D(x,$,Zt);if(x.isDepthTexture)St=s.DEPTH_COMPONENT,a?x.type===gn?St=s.DEPTH_COMPONENT32F:x.type===mn?St=s.DEPTH_COMPONENT24:x.type===Pn?St=s.DEPTH24_STENCIL8:St=s.DEPTH_COMPONENT16:x.type===gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Dn&&St===s.DEPTH_COMPONENT&&x.type!==yr&&x.type!==mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=mn,Pt=r.convert(x.type)),x.format===ui&&St===s.DEPTH_COMPONENT&&(St=s.DEPTH_STENCIL,x.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Pn,Pt=r.convert(x.type))),vt&&(st?e.texStorage2D(s.TEXTURE_2D,1,St,$.width,$.height):e.texImage2D(s.TEXTURE_2D,0,St,$.width,$.height,0,Ht,Pt,null));else if(x.isDataTexture)if(A.length>0&&Zt){st&&vt&&e.texStorage2D(s.TEXTURE_2D,ft,St,A[0].width,A[0].height);for(let Q=0,L=A.length;Q<L;Q++)ut=A[Q],st?e.texSubImage2D(s.TEXTURE_2D,Q,0,0,ut.width,ut.height,Ht,Pt,ut.data):e.texImage2D(s.TEXTURE_2D,Q,St,ut.width,ut.height,0,Ht,Pt,ut.data);x.generateMipmaps=!1}else st?(vt&&e.texStorage2D(s.TEXTURE_2D,ft,St,$.width,$.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,$.width,$.height,Ht,Pt,$.data)):e.texImage2D(s.TEXTURE_2D,0,St,$.width,$.height,0,Ht,Pt,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){st&&vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,St,A[0].width,A[0].height,$.depth);for(let Q=0,L=A.length;Q<L;Q++)ut=A[Q],x.format!==Ye?Ht!==null?st?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,ut.width,ut.height,$.depth,Ht,ut.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,St,ut.width,ut.height,$.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,ut.width,ut.height,$.depth,Ht,Pt,ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,St,ut.width,ut.height,$.depth,0,Ht,Pt,ut.data)}else{st&&vt&&e.texStorage2D(s.TEXTURE_2D,ft,St,A[0].width,A[0].height);for(let Q=0,L=A.length;Q<L;Q++)ut=A[Q],x.format!==Ye?Ht!==null?st?e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,ut.width,ut.height,Ht,ut.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,St,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?e.texSubImage2D(s.TEXTURE_2D,Q,0,0,ut.width,ut.height,Ht,Pt,ut.data):e.texImage2D(s.TEXTURE_2D,Q,St,ut.width,ut.height,0,Ht,Pt,ut.data)}else if(x.isDataArrayTexture)st?(vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,St,$.width,$.height,$.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Ht,Pt,$.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,$.width,$.height,$.depth,0,Ht,Pt,$.data);else if(x.isData3DTexture)st?(vt&&e.texStorage3D(s.TEXTURE_3D,ft,St,$.width,$.height,$.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Ht,Pt,$.data)):e.texImage3D(s.TEXTURE_3D,0,St,$.width,$.height,$.depth,0,Ht,Pt,$.data);else if(x.isFramebufferTexture){if(vt)if(st)e.texStorage2D(s.TEXTURE_2D,ft,St,$.width,$.height);else{let Q=$.width,L=$.height;for(let rt=0;rt<ft;rt++)e.texImage2D(s.TEXTURE_2D,rt,St,Q,L,0,Ht,Pt,null),Q>>=1,L>>=1}}else if(A.length>0&&Zt){st&&vt&&e.texStorage2D(s.TEXTURE_2D,ft,St,A[0].width,A[0].height);for(let Q=0,L=A.length;Q<L;Q++)ut=A[Q],st?e.texSubImage2D(s.TEXTURE_2D,Q,0,0,Ht,Pt,ut):e.texImage2D(s.TEXTURE_2D,Q,St,Ht,Pt,ut);x.generateMipmaps=!1}else st?(vt&&e.texStorage2D(s.TEXTURE_2D,ft,St,$.width,$.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ht,Pt,$)):e.texImage2D(s.TEXTURE_2D,0,St,Ht,Pt,$);E(x,Zt)&&v(et),xt.__version=nt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function _t(T,x,O){if(x.image.length!==6)return;const et=Z(T,x),J=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+O);const nt=n.get(J);if(J.version!==nt.__version||et===!0){e.activeTexture(s.TEXTURE0+O);const xt=$t.getPrimaries($t.workingColorSpace),lt=x.colorSpace===ze?null:$t.getPrimaries(x.colorSpace),pt=x.colorSpace===ze||xt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const wt=x.isCompressedTexture||x.image[0].isCompressedTexture,Bt=x.image[0]&&x.image[0].isDataTexture,$=[];for(let Q=0;Q<6;Q++)!wt&&!Bt?$[Q]=_(x.image[Q],!1,!0,i.maxCubemapSize):$[Q]=Bt?x.image[Q].image:x.image[Q],$[Q]=Ft(x,$[Q]);const Zt=$[0],Ht=p(Zt)||a,Pt=r.convert(x.format,x.colorSpace),St=r.convert(x.type),ut=b(x.internalFormat,Pt,St,x.colorSpace),A=a&&x.isVideoTexture!==!0,st=nt.__version===void 0||et===!0;let vt=D(x,Zt,Ht);W(s.TEXTURE_CUBE_MAP,x,Ht);let ft;if(wt){A&&st&&e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,ut,Zt.width,Zt.height);for(let Q=0;Q<6;Q++){ft=$[Q].mipmaps;for(let L=0;L<ft.length;L++){const rt=ft[L];x.format!==Ye?Pt!==null?A?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,0,0,rt.width,rt.height,Pt,rt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,ut,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,0,0,rt.width,rt.height,Pt,St,rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,ut,rt.width,rt.height,0,Pt,St,rt.data)}}}else{ft=x.mipmaps,A&&st&&(ft.length>0&&vt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,ut,$[0].width,$[0].height));for(let Q=0;Q<6;Q++)if(Bt){A?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,$[Q].width,$[Q].height,Pt,St,$[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ut,$[Q].width,$[Q].height,0,Pt,St,$[Q].data);for(let L=0;L<ft.length;L++){const ct=ft[L].image[Q].image;A?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,0,0,ct.width,ct.height,Pt,St,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,ut,ct.width,ct.height,0,Pt,St,ct.data)}}else{A?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pt,St,$[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ut,Pt,St,$[Q]);for(let L=0;L<ft.length;L++){const rt=ft[L];A?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,0,0,Pt,St,rt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,ut,Pt,St,rt.image[Q])}}}E(x,Ht)&&v(s.TEXTURE_CUBE_MAP),nt.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function mt(T,x,O,et,J,nt){const xt=r.convert(O.format,O.colorSpace),lt=r.convert(O.type),pt=b(O.internalFormat,xt,lt,O.colorSpace);if(!n.get(x).__hasExternalTextures){const Bt=Math.max(1,x.width>>nt),$=Math.max(1,x.height>>nt);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,nt,pt,Bt,$,x.depth,0,xt,lt,null):e.texImage2D(J,nt,pt,Bt,$,0,xt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),gt(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,J,n.get(O).__webglTexture,0,Lt(x)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,J,n.get(O).__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(T,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let et=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(O||gt(x)){const J=x.depthTexture;J&&J.isDepthTexture&&(J.type===gn?et=s.DEPTH_COMPONENT32F:J.type===mn&&(et=s.DEPTH_COMPONENT24));const nt=Lt(x);gt(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,et,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,et,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,et,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const et=Lt(x);O&&gt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,x.width,x.height):gt(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const et=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let J=0;J<et.length;J++){const nt=et[J],xt=r.convert(nt.format,nt.colorSpace),lt=r.convert(nt.type),pt=b(nt.internalFormat,xt,lt,nt.colorSpace),wt=Lt(x);O&&gt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,pt,x.width,x.height):gt(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,pt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,pt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const et=n.get(x.depthTexture).__webglTexture,J=Lt(x);if(x.depthTexture.format===Dn)gt(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(x.depthTexture.format===ui)gt(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function At(T){const x=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ut(x.__webglFramebuffer,T)}else if(O){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]=s.createRenderbuffer(),It(x.__webglDepthbuffer[et],T,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),It(x.__webglDepthbuffer,T,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(T,x,O){const et=n.get(T);x!==void 0&&mt(et.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&At(T)}function F(T){const x=T.texture,O=n.get(T),et=n.get(x);T.addEventListener("dispose",k),T.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=x.version,o.memory.textures++);const J=T.isWebGLCubeRenderTarget===!0,nt=T.isWebGLMultipleRenderTargets===!0,xt=p(T)||a;if(J){O.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(a&&x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[lt]=[];for(let pt=0;pt<x.mipmaps.length;pt++)O.__webglFramebuffer[lt][pt]=s.createFramebuffer()}else O.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)O.__webglFramebuffer[lt]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(nt)if(i.drawBuffers){const lt=T.texture;for(let pt=0,wt=lt.length;pt<wt;pt++){const Bt=n.get(lt[pt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&gt(T)===!1){const lt=nt?x:[x];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pt=0;pt<lt.length;pt++){const wt=lt[pt];O.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[pt]);const Bt=r.convert(wt.format,wt.colorSpace),$=r.convert(wt.type),Zt=b(wt.internalFormat,Bt,$,wt.colorSpace,T.isXRRenderTarget===!0),Ht=Lt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,Zt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,O.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),It(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),W(s.TEXTURE_CUBE_MAP,x,xt);for(let lt=0;lt<6;lt++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)mt(O.__webglFramebuffer[lt][pt],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else mt(O.__webglFramebuffer[lt],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);E(x,xt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const lt=T.texture;for(let pt=0,wt=lt.length;pt<wt;pt++){const Bt=lt[pt],$=n.get(Bt);e.bindTexture(s.TEXTURE_2D,$.__webglTexture),W(s.TEXTURE_2D,Bt,xt),mt(O.__webglFramebuffer,T,Bt,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),E(Bt,xt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?lt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,et.__webglTexture),W(lt,x,xt),a&&x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)mt(O.__webglFramebuffer[pt],T,x,s.COLOR_ATTACHMENT0,lt,pt);else mt(O.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,lt,0);E(x,xt)&&v(lt),e.unbindTexture()}T.depthBuffer&&At(T)}function ge(T){const x=p(T)||a,O=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let et=0,J=O.length;et<J;et++){const nt=O[et];if(E(nt,x)){const xt=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,lt=n.get(nt).__webglTexture;e.bindTexture(xt,lt),v(xt),e.unbindTexture()}}}function Et(T){if(a&&T.samples>0&&gt(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],O=T.width,et=T.height;let J=s.COLOR_BUFFER_BIT;const nt=[],xt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(T),pt=T.isWebGLMultipleRenderTargets===!0;if(pt)for(let wt=0;wt<x.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let wt=0;wt<x.length;wt++){nt.push(s.COLOR_ATTACHMENT0+wt),T.depthBuffer&&nt.push(xt);const Bt=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(Bt===!1&&(T.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),pt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[wt]),Bt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[xt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[xt])),pt){const $=n.get(x[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,O,et,0,0,O,et,J,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let wt=0;wt<x.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,lt.__webglColorRenderbuffer[wt]);const Bt=n.get(x[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,Bt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function Lt(T){return Math.min(i.maxSamples,T.samples)}function gt(T){const x=n.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Qt(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Ft(T,x){const O=T.colorSpace,et=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===gr||O!==on&&O!==ze&&($t.getTransfer(O)===te?a===!1?t.has("EXT_sRGB")===!0&&et===Ye?(T.format=gr,T.minFilter=Fe,T.generateMipmaps=!1):x=Fo.sRGBToLinear(x):(et!==Ye||J!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}this.allocateTextureUnit=P,this.resetTextureUnits=X,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=Yt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=gt}function Tp(s,t,e){const n=e.isWebGL2;function i(r,o=ze){let a;const c=$t.getTransfer(o);if(r===vn)return s.UNSIGNED_BYTE;if(r===Ao)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ro)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Yc)return s.BYTE;if(r===qc)return s.SHORT;if(r===yr)return s.UNSIGNED_SHORT;if(r===bo)return s.INT;if(r===mn)return s.UNSIGNED_INT;if(r===gn)return s.FLOAT;if(r===bi)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===jc)return s.ALPHA;if(r===Ye)return s.RGBA;if(r===Kc)return s.LUMINANCE;if(r===Zc)return s.LUMINANCE_ALPHA;if(r===Dn)return s.DEPTH_COMPONENT;if(r===ui)return s.DEPTH_STENCIL;if(r===gr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===$c)return s.RED;if(r===Co)return s.RED_INTEGER;if(r===Jc)return s.RG;if(r===Lo)return s.RG_INTEGER;if(r===Po)return s.RGBA_INTEGER;if(r===Ls||r===Ps||r===Ds||r===Is)if(c===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ls)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ls)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ps)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ds)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Is)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xr||r===Yr||r===qr||r===jr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Xr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Do)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Kr||r===Zr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Kr)return c===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Zr)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$r||r===Jr||r===Qr||r===ta||r===ea||r===na||r===ia||r===sa||r===ra||r===aa||r===oa||r===ca||r===la||r===ha)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===$r)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jr)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qr)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ta)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ea)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===na)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ia)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sa)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ra)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===aa)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===oa)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ca)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===la)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ha)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Us||r===ua||r===da)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Us)return c===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ua)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===da)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qc||r===fa||r===pa||r===ma)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Us)return a.COMPRESSED_RED_RGTC1_EXT;if(r===fa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ma)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Pn?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class wp extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jt extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bp={type:"move"};class ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ap extends Fn{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null;const _=e.getContextAttributes();let p=null,f=null;const E=[],v=[],b=new bt;let D=null;const C=new Pe;C.layers.enable(1),C.viewport=new ee;const R=new Pe;R.layers.enable(2),R.viewport=new ee;const k=[C,R],M=new wp;M.layers.enable(1),M.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=E[W];return Z===void 0&&(Z=new ir,E[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=E[W];return Z===void 0&&(Z=new ir,E[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=E[W];return Z===void 0&&(Z=new ir,E[W]=Z),Z.getHandSpace()};function G(W){const Z=v.indexOf(W.inputSource);if(Z===-1)return;const ht=E[Z];ht!==void 0&&(ht.update(W.inputSource,W.frame,l||o),ht.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",P);for(let W=0;W<E.length;W++){const Z=v[W];Z!==null&&(v[W]=null,E[W].disconnect(Z))}w=null,N=null,t.setRenderTarget(p),m=null,d=null,u=null,i=null,f=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",X),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(b),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Un(m.framebufferWidth,m.framebufferHeight,{format:Ye,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ht=null,_t=null;_.depth&&(_t=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=_.stencil?ui:Dn,ht=_.stencil?Pn:mn);const mt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(mt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new Un(d.textureWidth,d.textureHeight,{format:Ye,type:vn,depthTexture:new Ko(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const It=t.properties.get(f);It.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(W){for(let Z=0;Z<W.removed.length;Z++){const ht=W.removed[Z],_t=v.indexOf(ht);_t>=0&&(v[_t]=null,E[_t].disconnect(ht))}for(let Z=0;Z<W.added.length;Z++){const ht=W.added[Z];let _t=v.indexOf(ht);if(_t===-1){for(let It=0;It<E.length;It++)if(It>=v.length){v.push(ht),_t=It;break}else if(v[It]===null){v[It]=ht,_t=It;break}if(_t===-1)break}const mt=E[_t];mt&&mt.connect(ht)}}const U=new y,H=new y;function q(W,Z,ht){U.setFromMatrixPosition(Z.matrixWorld),H.setFromMatrixPosition(ht.matrixWorld);const _t=U.distanceTo(H),mt=Z.projectionMatrix.elements,It=ht.projectionMatrix.elements,Ut=mt[14]/(mt[10]-1),At=mt[14]/(mt[10]+1),Yt=(mt[9]+1)/mt[5],F=(mt[9]-1)/mt[5],ge=(mt[8]-1)/mt[0],Et=(It[8]+1)/It[0],Lt=Ut*ge,gt=Ut*Et,Qt=_t/(-ge+Et),Ft=Qt*-ge;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ft),W.translateZ(Qt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const T=Ut+Qt,x=At+Qt,O=Lt-Ft,et=gt+(_t-Ft),J=Yt*At/x*T,nt=F*At/x*T;W.projectionMatrix.makePerspective(O,et,J,nt,T,x),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Y(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;M.near=R.near=C.near=W.near,M.far=R.far=C.far=W.far,(w!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,N=M.far);const Z=W.parent,ht=M.cameras;Y(M,Z);for(let _t=0;_t<ht.length;_t++)Y(ht[_t],Z);ht.length===2?q(M,C,R):M.projectionMatrix.copy(C.projectionMatrix),j(W,M,Z)};function j(W,Z,ht){ht===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(ht.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ai*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)};let K=null;function tt(W,Z){if(h=Z.getViewerPose(l||o),g=Z,h!==null){const ht=h.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let _t=!1;ht.length!==M.cameras.length&&(M.cameras.length=0,_t=!0);for(let mt=0;mt<ht.length;mt++){const It=ht[mt];let Ut=null;if(m!==null)Ut=m.getViewport(It);else{const Yt=u.getViewSubImage(d,It);Ut=Yt.viewport,mt===0&&(t.setRenderTargetTextures(f,Yt.colorTexture,d.ignoreDepthValues?void 0:Yt.depthStencilTexture),t.setRenderTarget(f))}let At=k[mt];At===void 0&&(At=new Pe,At.layers.enable(mt),At.viewport=new ee,k[mt]=At),At.matrix.fromArray(It.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(It.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),mt===0&&(M.matrix.copy(At.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_t===!0&&M.cameras.push(At)}}for(let ht=0;ht<E.length;ht++){const _t=v[ht],mt=E[ht];_t!==null&&mt!==void 0&&mt.update(_t,Z,l||o)}K&&K(W,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const at=new qo;at.setAnimationLoop(tt),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}}function Rp(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Wo(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,E,v,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,b)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,E,v):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===we&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===we&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=t.get(f).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,E,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=v*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===we&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const E=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cp(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,v){const b=v.program;n.uniformBlockBinding(E,b)}function l(E,v){let b=i[E.id];b===void 0&&(g(E),b=h(E),i[E.id]=b,E.addEventListener("dispose",p));const D=v.program;n.updateUBOMapping(E,D);const C=t.render.frame;r[E.id]!==C&&(d(E),r[E.id]=C)}function h(E){const v=u();E.__bindingPointIndex=v;const b=s.createBuffer(),D=E.__size,C=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,D,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,b),b}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const v=i[E.id],b=E.uniforms,D=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let C=0,R=b.length;C<R;C++){const k=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,w=k.length;M<w;M++){const N=k[M];if(m(N,C,M,D)===!0){const G=N.__offset,X=Array.isArray(N.value)?N.value:[N.value];let P=0;for(let U=0;U<X.length;U++){const H=X[U],q=_(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,G+P,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(E,v,b,D){const C=E.value,R=v+"_"+b;if(D[R]===void 0)return typeof C=="number"||typeof C=="boolean"?D[R]=C:D[R]=C.clone(),!0;{const k=D[R];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return D[R]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function g(E){const v=E.uniforms;let b=0;const D=16;for(let R=0,k=v.length;R<k;R++){const M=Array.isArray(v[R])?v[R]:[v[R]];for(let w=0,N=M.length;w<N;w++){const G=M[w],X=Array.isArray(G.value)?G.value:[G.value];for(let P=0,U=X.length;P<U;P++){const H=X[P],q=_(H),Y=b%D;Y!==0&&D-Y<q.boundary&&(b+=D-Y),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=q.storage}}}const C=b%D;return C>0&&(b+=D-C),E.__size=b,E.__cache={},this}function _(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function p(E){const v=E.target;v.removeEventListener("dispose",p);const b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}class ec{constructor(t={}){const{canvas:e=Tl(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this._useLegacyLights=!1,this.toneMapping=xn,this.toneMappingExposure=1;const v=this;let b=!1,D=0,C=0,R=null,k=-1,M=null;const w=new ee,N=new ee;let G=null;const X=new kt(0);let P=0,U=e.width,H=e.height,q=1,Y=null,j=null;const K=new ee(0,0,U,H),tt=new ee(0,0,U,H);let at=!1;const W=new Ar;let Z=!1,ht=!1,_t=null;const mt=new ne,It=new bt,Ut=new y,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Yt(){return R===null?q:1}let F=n;function ge(S,I){for(let z=0;z<S.length;z++){const V=S[z],B=e.getContext(V,I);if(B!==null)return B}return null}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Er}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",rt,!1),F===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),F=ge(I,S),F===null)throw ge(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Et,Lt,gt,Qt,Ft,T,x,O,et,J,nt,xt,lt,pt,wt,Bt,$,Zt,Ht,Pt,St,ut,A,st;function vt(){Et=new Bd(F),Lt=new Dd(F,Et,t),Et.init(Lt),ut=new Tp(F,Et,Lt),gt=new Ep(F,Et,Lt),Qt=new Hd(F),Ft=new cp,T=new yp(F,Et,gt,Ft,Lt,ut,Qt),x=new Ud(v),O=new Fd(v),et=new Kl(F,Lt),A=new Ld(F,Et,et,Lt),J=new zd(F,et,Qt,A),nt=new Xd(F,J,et,Qt),Ht=new Wd(F,Lt,T),Bt=new Id(Ft),xt=new op(v,x,O,Et,Lt,A,Bt),lt=new Rp(v,Ft),pt=new hp,wt=new gp(Et,Lt),Zt=new Cd(v,x,O,gt,nt,d,c),$=new Sp(v,nt,Lt),st=new Cp(F,Qt,Lt,gt),Pt=new Pd(F,Et,Qt,Lt),St=new Gd(F,Et,Qt,Lt),Qt.programs=xt.programs,v.capabilities=Lt,v.extensions=Et,v.properties=Ft,v.renderLists=pt,v.shadowMap=$,v.state=gt,v.info=Qt}vt();const ft=new Ap(v,F);this.xr=ft,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=Et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(U,H,!1))},this.getSize=function(S){return S.set(U,H)},this.setSize=function(S,I,z=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=S,H=I,e.width=Math.floor(S*q),e.height=Math.floor(I*q),z===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(U*q,H*q).floor()},this.setDrawingBufferSize=function(S,I,z){U=S,H=I,q=z,e.width=Math.floor(S*z),e.height=Math.floor(I*z),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(K)},this.setViewport=function(S,I,z,V){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,I,z,V),gt.viewport(w.copy(K).multiplyScalar(q).floor())},this.getScissor=function(S){return S.copy(tt)},this.setScissor=function(S,I,z,V){S.isVector4?tt.set(S.x,S.y,S.z,S.w):tt.set(S,I,z,V),gt.scissor(N.copy(tt).multiplyScalar(q).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(S){gt.setScissorTest(at=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(S=!0,I=!0,z=!0){let V=0;if(S){let B=!1;if(R!==null){const dt=R.texture.format;B=dt===Po||dt===Lo||dt===Co}if(B){const dt=R.texture.type,Mt=dt===vn||dt===mn||dt===yr||dt===Pn||dt===Ao||dt===Ro,Ct=Zt.getClearColor(),Dt=Zt.getClearAlpha(),Vt=Ct.r,Nt=Ct.g,zt=Ct.b;Mt?(m[0]=Vt,m[1]=Nt,m[2]=zt,m[3]=Dt,F.clearBufferuiv(F.COLOR,0,m)):(g[0]=Vt,g[1]=Nt,g[2]=zt,g[3]=Dt,F.clearBufferiv(F.COLOR,0,g))}else V|=F.COLOR_BUFFER_BIT}I&&(V|=F.DEPTH_BUFFER_BIT),z&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),pt.dispose(),wt.dispose(),Ft.dispose(),x.dispose(),O.dispose(),nt.dispose(),A.dispose(),st.dispose(),xt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",ae),ft.removeEventListener("sessionend",Kt),_t&&(_t.dispose(),_t=null),ce.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=Qt.autoReset,I=$.enabled,z=$.autoUpdate,V=$.needsUpdate,B=$.type;vt(),Qt.autoReset=S,$.enabled=I,$.autoUpdate=z,$.needsUpdate=V,$.type=B}function rt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ct(S){const I=S.target;I.removeEventListener("dispose",ct),Rt(I)}function Rt(S){yt(S),Ft.remove(S)}function yt(S){const I=Ft.get(S).programs;I!==void 0&&(I.forEach(function(z){xt.releaseProgram(z)}),S.isShaderMaterial&&xt.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,z,V,B,dt){I===null&&(I=At);const Mt=B.isMesh&&B.matrixWorld.determinant()<0,Ct=oc(S,I,z,V,B);gt.setMaterial(V,Mt);let Dt=z.index,Vt=1;if(V.wireframe===!0){if(Dt=J.getWireframeAttribute(z),Dt===void 0)return;Vt=2}const Nt=z.drawRange,zt=z.attributes.position;let oe=Nt.start*Vt,Re=(Nt.start+Nt.count)*Vt;dt!==null&&(oe=Math.max(oe,dt.start*Vt),Re=Math.min(Re,(dt.start+dt.count)*Vt)),Dt!==null?(oe=Math.max(oe,0),Re=Math.min(Re,Dt.count)):zt!=null&&(oe=Math.max(oe,0),Re=Math.min(Re,zt.count));const fe=Re-oe;if(fe<0||fe===1/0)return;A.setup(B,V,Ct,z,Dt);let Je,ie=Pt;if(Dt!==null&&(Je=et.get(Dt),ie=St,ie.setIndex(Je)),B.isMesh)V.wireframe===!0?(gt.setLineWidth(V.wireframeLinewidth*Yt()),ie.setMode(F.LINES)):ie.setMode(F.TRIANGLES);else if(B.isLine){let Wt=V.linewidth;Wt===void 0&&(Wt=1),gt.setLineWidth(Wt*Yt()),B.isLineSegments?ie.setMode(F.LINES):B.isLineLoop?ie.setMode(F.LINE_LOOP):ie.setMode(F.LINE_STRIP)}else B.isPoints?ie.setMode(F.POINTS):B.isSprite&&ie.setMode(F.TRIANGLES);if(B.isBatchedMesh)ie.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ie.renderInstances(oe,fe,B.count);else if(z.isInstancedBufferGeometry){const Wt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ws=Math.min(z.instanceCount,Wt);ie.renderInstances(oe,fe,ws)}else ie.render(oe,fe)};function qt(S,I,z){S.transparent===!0&&S.side===Xe&&S.forceSinglePass===!1?(S.side=we,S.needsUpdate=!0,Di(S,I,z),S.side=Mn,S.needsUpdate=!0,Di(S,I,z),S.side=Xe):Di(S,I,z)}this.compile=function(S,I,z=null){z===null&&(z=S),p=wt.get(z),p.init(),E.push(p),z.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),S!==z&&S.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(v._useLegacyLights);const V=new Set;return S.traverse(function(B){const dt=B.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){const Ct=dt[Mt];qt(Ct,z,B),V.add(Ct)}else qt(dt,z,B),V.add(dt)}),E.pop(),p=null,V},this.compileAsync=function(S,I,z=null){const V=this.compile(S,I,z);return new Promise(B=>{function dt(){if(V.forEach(function(Mt){Ft.get(Mt).currentProgram.isReady()&&V.delete(Mt)}),V.size===0){B(S);return}setTimeout(dt,10)}Et.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let jt=null;function se(S){jt&&jt(S)}function ae(){ce.stop()}function Kt(){ce.start()}const ce=new qo;ce.setAnimationLoop(se),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(S){jt=S,ft.setAnimationLoop(S),S===null?ce.stop():ce.start()},ft.addEventListener("sessionstart",ae),ft.addEventListener("sessionend",Kt),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(I),I=ft.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,I,R),p=wt.get(S,E.length),p.init(),E.push(p),mt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),W.setFromProjectionMatrix(mt),ht=this.localClippingEnabled,Z=Bt.init(this.clippingPlanes,ht),_=pt.get(S,f.length),_.init(),f.push(_),qe(S,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,j),this.info.render.frame++,Z===!0&&Bt.beginShadows();const z=p.state.shadowsArray;if($.render(z,S,I),Z===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Zt.render(_,S),p.setupLights(v._useLegacyLights),I.isArrayCamera){const V=I.cameras;for(let B=0,dt=V.length;B<dt;B++){const Mt=V[B];Dr(_,S,Mt,Mt.viewport)}}else Dr(_,S,I);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(v,S,I),A.resetDefaultState(),k=-1,M=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function qe(S,I,z,V){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||W.intersectsSprite(S)){V&&Ut.setFromMatrixPosition(S.matrixWorld).applyMatrix4(mt);const Mt=nt.update(S),Ct=S.material;Ct.visible&&_.push(S,Mt,Ct,z,Ut.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||W.intersectsObject(S))){const Mt=nt.update(S),Ct=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ut.copy(S.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Ut.copy(Mt.boundingSphere.center)),Ut.applyMatrix4(S.matrixWorld).applyMatrix4(mt)),Array.isArray(Ct)){const Dt=Mt.groups;for(let Vt=0,Nt=Dt.length;Vt<Nt;Vt++){const zt=Dt[Vt],oe=Ct[zt.materialIndex];oe&&oe.visible&&_.push(S,Mt,oe,z,Ut.z,zt)}}else Ct.visible&&_.push(S,Mt,Ct,z,Ut.z,null)}}const dt=S.children;for(let Mt=0,Ct=dt.length;Mt<Ct;Mt++)qe(dt[Mt],I,z,V)}function Dr(S,I,z,V){const B=S.opaque,dt=S.transmissive,Mt=S.transparent;p.setupLightsView(z),Z===!0&&Bt.setGlobalState(v.clippingPlanes,z),dt.length>0&&ac(B,dt,I,z),V&&gt.viewport(w.copy(V)),B.length>0&&Pi(B,I,z),dt.length>0&&Pi(dt,I,z),Mt.length>0&&Pi(Mt,I,z),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function ac(S,I,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const dt=Lt.isWebGL2;_t===null&&(_t=new Un(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?bi:vn,minFilter:wi,samples:dt?4:0})),v.getDrawingBufferSize(It),dt?_t.setSize(It.x,It.y):_t.setSize(fs(It.x),fs(It.y));const Mt=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(X),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Ct=v.toneMapping;v.toneMapping=xn,Pi(S,z,V),T.updateMultisampleRenderTarget(_t),T.updateRenderTargetMipmap(_t);let Dt=!1;for(let Vt=0,Nt=I.length;Vt<Nt;Vt++){const zt=I[Vt],oe=zt.object,Re=zt.geometry,fe=zt.material,Je=zt.group;if(fe.side===Xe&&oe.layers.test(V.layers)){const ie=fe.side;fe.side=we,fe.needsUpdate=!0,Ir(oe,z,V,Re,fe,Je),fe.side=ie,fe.needsUpdate=!0,Dt=!0}}Dt===!0&&(T.updateMultisampleRenderTarget(_t),T.updateRenderTargetMipmap(_t)),v.setRenderTarget(Mt),v.setClearColor(X,P),v.toneMapping=Ct}function Pi(S,I,z){const V=I.isScene===!0?I.overrideMaterial:null;for(let B=0,dt=S.length;B<dt;B++){const Mt=S[B],Ct=Mt.object,Dt=Mt.geometry,Vt=V===null?Mt.material:V,Nt=Mt.group;Ct.layers.test(z.layers)&&Ir(Ct,I,z,Dt,Vt,Nt)}}function Ir(S,I,z,V,B,dt){S.onBeforeRender(v,I,z,V,B,dt),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(v,I,z,V,S,dt),B.transparent===!0&&B.side===Xe&&B.forceSinglePass===!1?(B.side=we,B.needsUpdate=!0,v.renderBufferDirect(z,I,V,B,S,dt),B.side=Mn,B.needsUpdate=!0,v.renderBufferDirect(z,I,V,B,S,dt),B.side=Xe):v.renderBufferDirect(z,I,V,B,S,dt),S.onAfterRender(v,I,z,V,B,dt)}function Di(S,I,z){I.isScene!==!0&&(I=At);const V=Ft.get(S),B=p.state.lights,dt=p.state.shadowsArray,Mt=B.state.version,Ct=xt.getParameters(S,B.state,dt,I,z),Dt=xt.getProgramCacheKey(Ct);let Vt=V.programs;V.environment=S.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(S.isMeshStandardMaterial?O:x).get(S.envMap||V.environment),Vt===void 0&&(S.addEventListener("dispose",ct),Vt=new Map,V.programs=Vt);let Nt=Vt.get(Dt);if(Nt!==void 0){if(V.currentProgram===Nt&&V.lightsStateVersion===Mt)return Nr(S,Ct),Nt}else Ct.uniforms=xt.getUniforms(S),S.onBuild(z,Ct,v),S.onBeforeCompile(Ct,v),Nt=xt.acquireProgram(Ct,Dt),Vt.set(Dt,Nt),V.uniforms=Ct.uniforms;const zt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(zt.clippingPlanes=Bt.uniform),Nr(S,Ct),V.needsLights=lc(S),V.lightsStateVersion=Mt,V.needsLights&&(zt.ambientLightColor.value=B.state.ambient,zt.lightProbe.value=B.state.probe,zt.directionalLights.value=B.state.directional,zt.directionalLightShadows.value=B.state.directionalShadow,zt.spotLights.value=B.state.spot,zt.spotLightShadows.value=B.state.spotShadow,zt.rectAreaLights.value=B.state.rectArea,zt.ltc_1.value=B.state.rectAreaLTC1,zt.ltc_2.value=B.state.rectAreaLTC2,zt.pointLights.value=B.state.point,zt.pointLightShadows.value=B.state.pointShadow,zt.hemisphereLights.value=B.state.hemi,zt.directionalShadowMap.value=B.state.directionalShadowMap,zt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,zt.spotShadowMap.value=B.state.spotShadowMap,zt.spotLightMatrix.value=B.state.spotLightMatrix,zt.spotLightMap.value=B.state.spotLightMap,zt.pointShadowMap.value=B.state.pointShadowMap,zt.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Nt,V.uniformsList=null,Nt}function Ur(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=os.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Nr(S,I){const z=Ft.get(S);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function oc(S,I,z,V,B){I.isScene!==!0&&(I=At),T.resetTextureUnits();const dt=I.fog,Mt=V.isMeshStandardMaterial?I.environment:null,Ct=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:on,Dt=(V.isMeshStandardMaterial?O:x).get(V.envMap||Mt),Vt=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Nt=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),zt=!!z.morphAttributes.position,oe=!!z.morphAttributes.normal,Re=!!z.morphAttributes.color;let fe=xn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(fe=v.toneMapping);const Je=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ie=Je!==void 0?Je.length:0,Wt=Ft.get(V),ws=p.state.lights;if(Z===!0&&(ht===!0||S!==M)){const Ue=S===M&&V.id===k;Bt.setState(V,S,Ue)}let re=!1;V.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==ws.state.version||Wt.outputColorSpace!==Ct||B.isBatchedMesh&&Wt.batching===!1||!B.isBatchedMesh&&Wt.batching===!0||B.isInstancedMesh&&Wt.instancing===!1||!B.isInstancedMesh&&Wt.instancing===!0||B.isSkinnedMesh&&Wt.skinning===!1||!B.isSkinnedMesh&&Wt.skinning===!0||B.isInstancedMesh&&Wt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Wt.instancingColor===!1&&B.instanceColor!==null||Wt.envMap!==Dt||V.fog===!0&&Wt.fog!==dt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Bt.numPlanes||Wt.numIntersection!==Bt.numIntersection)||Wt.vertexAlphas!==Vt||Wt.vertexTangents!==Nt||Wt.morphTargets!==zt||Wt.morphNormals!==oe||Wt.morphColors!==Re||Wt.toneMapping!==fe||Lt.isWebGL2===!0&&Wt.morphTargetsCount!==ie)&&(re=!0):(re=!0,Wt.__version=V.version);let Sn=Wt.currentProgram;re===!0&&(Sn=Di(V,I,B));let Or=!1,gi=!1,bs=!1;const xe=Sn.getUniforms(),En=Wt.uniforms;if(gt.useProgram(Sn.program)&&(Or=!0,gi=!0,bs=!0),V.id!==k&&(k=V.id,gi=!0),Or||M!==S){xe.setValue(F,"projectionMatrix",S.projectionMatrix),xe.setValue(F,"viewMatrix",S.matrixWorldInverse);const Ue=xe.map.cameraPosition;Ue!==void 0&&Ue.setValue(F,Ut.setFromMatrixPosition(S.matrixWorld)),Lt.logarithmicDepthBuffer&&xe.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xe.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,gi=!0,bs=!0)}if(B.isSkinnedMesh){xe.setOptional(F,B,"bindMatrix"),xe.setOptional(F,B,"bindMatrixInverse");const Ue=B.skeleton;Ue&&(Lt.floatVertexTextures?(Ue.boneTexture===null&&Ue.computeBoneTexture(),xe.setValue(F,"boneTexture",Ue.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(xe.setOptional(F,B,"batchingTexture"),xe.setValue(F,"batchingTexture",B._matricesTexture,T));const As=z.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0&&Lt.isWebGL2===!0)&&Ht.update(B,z,Sn),(gi||Wt.receiveShadow!==B.receiveShadow)&&(Wt.receiveShadow=B.receiveShadow,xe.setValue(F,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(En.envMap.value=Dt,En.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),gi&&(xe.setValue(F,"toneMappingExposure",v.toneMappingExposure),Wt.needsLights&&cc(En,bs),dt&&V.fog===!0&&lt.refreshFogUniforms(En,dt),lt.refreshMaterialUniforms(En,V,q,H,_t),os.upload(F,Ur(Wt),En,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(os.upload(F,Ur(Wt),En,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xe.setValue(F,"center",B.center),xe.setValue(F,"modelViewMatrix",B.modelViewMatrix),xe.setValue(F,"normalMatrix",B.normalMatrix),xe.setValue(F,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ue=V.uniformsGroups;for(let Rs=0,hc=Ue.length;Rs<hc;Rs++)if(Lt.isWebGL2){const Fr=Ue[Rs];st.update(Fr,Sn),st.bind(Fr,Sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sn}function cc(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function lc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,I,z){Ft.get(S.texture).__webglTexture=I,Ft.get(S.depthTexture).__webglTexture=z;const V=Ft.get(S);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,I){const z=Ft.get(S);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,z=0){R=S,D=I,C=z;let V=!0,B=null,dt=!1,Mt=!1;if(S){const Dt=Ft.get(S);Dt.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(F.FRAMEBUFFER,null),V=!1):Dt.__webglFramebuffer===void 0?T.setupRenderTarget(S):Dt.__hasExternalTextures&&T.rebindTextures(S,Ft.get(S.texture).__webglTexture,Ft.get(S.depthTexture).__webglTexture);const Vt=S.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Mt=!0);const Nt=Ft.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Nt[I])?B=Nt[I][z]:B=Nt[I],dt=!0):Lt.isWebGL2&&S.samples>0&&T.useMultisampledRTT(S)===!1?B=Ft.get(S).__webglMultisampledFramebuffer:Array.isArray(Nt)?B=Nt[z]:B=Nt,w.copy(S.viewport),N.copy(S.scissor),G=S.scissorTest}else w.copy(K).multiplyScalar(q).floor(),N.copy(tt).multiplyScalar(q).floor(),G=at;if(gt.bindFramebuffer(F.FRAMEBUFFER,B)&&Lt.drawBuffers&&V&&gt.drawBuffers(S,B),gt.viewport(w),gt.scissor(N),gt.setScissorTest(G),dt){const Dt=Ft.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,Dt.__webglTexture,z)}else if(Mt){const Dt=Ft.get(S.texture),Vt=I||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.__webglTexture,z||0,Vt)}k=-1},this.readRenderTargetPixels=function(S,I,z,V,B,dt,Mt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Ft.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct){gt.bindFramebuffer(F.FRAMEBUFFER,Ct);try{const Dt=S.texture,Vt=Dt.format,Nt=Dt.type;if(Vt!==Ye&&ut.convert(Vt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Nt===bi&&(Et.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&Et.has("EXT_color_buffer_float"));if(Nt!==vn&&ut.convert(Nt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===gn&&(Lt.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-V&&z>=0&&z<=S.height-B&&F.readPixels(I,z,V,B,ut.convert(Vt),ut.convert(Nt),dt)}finally{const Dt=R!==null?Ft.get(R).__webglFramebuffer:null;gt.bindFramebuffer(F.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(S,I,z=0){const V=Math.pow(2,-z),B=Math.floor(I.image.width*V),dt=Math.floor(I.image.height*V);T.setTexture2D(I,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,S.x,S.y,B,dt),gt.unbindTexture()},this.copyTextureToTexture=function(S,I,z,V=0){const B=I.image.width,dt=I.image.height,Mt=ut.convert(z.format),Ct=ut.convert(z.type);T.setTexture2D(z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,V,S.x,S.y,B,dt,Mt,Ct,I.image.data):I.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,V,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,Mt,I.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,V,S.x,S.y,Mt,Ct,I.image),V===0&&z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(S,I,z,V,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=S.max.x-S.min.x+1,Mt=S.max.y-S.min.y+1,Ct=S.max.z-S.min.z+1,Dt=ut.convert(V.format),Vt=ut.convert(V.type);let Nt;if(V.isData3DTexture)T.setTexture3D(V,0),Nt=F.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)T.setTexture2DArray(V,0),Nt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const zt=F.getParameter(F.UNPACK_ROW_LENGTH),oe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Re=F.getParameter(F.UNPACK_SKIP_PIXELS),fe=F.getParameter(F.UNPACK_SKIP_ROWS),Je=F.getParameter(F.UNPACK_SKIP_IMAGES),ie=z.isCompressedTexture?z.mipmaps[B]:z.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ie.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ie.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,S.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,S.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,S.min.z),z.isDataTexture||z.isData3DTexture?F.texSubImage3D(Nt,B,I.x,I.y,I.z,dt,Mt,Ct,Dt,Vt,ie.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Nt,B,I.x,I.y,I.z,dt,Mt,Ct,Dt,ie.data)):F.texSubImage3D(Nt,B,I.x,I.y,I.z,dt,Mt,Ct,Dt,Vt,ie),F.pixelStorei(F.UNPACK_ROW_LENGTH,zt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,oe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Re),F.pixelStorei(F.UNPACK_SKIP_ROWS,fe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Je),B===0&&V.generateMipmaps&&F.generateMipmap(Nt),gt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),gt.unbindTexture()},this.resetState=function(){D=0,C=0,R=null,gt.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Tr?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===Ss?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_e?In:Io}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===In?_e:on}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Lp extends ec{}Lp.prototype.isWebGL1Renderer=!0;class Cr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new Cr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Pp extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Lr extends Bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const so=new y,ro=new y,ao=new ne,sr=new Ci,es=new Ri;class nc extends he{constructor(t=new Ae,e=new Lr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)so.fromBufferAttribute(e,i-1),ro.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=so.distanceTo(ro);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(i),es.radius+=r,t.ray.intersectsSphere(es)===!1)return;ao.copy(i).invert(),sr.copy(t.ray).applyMatrix4(ao);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new y,h=new y,u=new y,d=new y,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let v=f,b=E-1;v<b;v+=m){const D=g.getX(v),C=g.getX(v+1);if(l.fromBufferAttribute(p,D),h.fromBufferAttribute(p,C),sr.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const k=t.ray.origin.distanceTo(d);k<t.near||k>t.far||e.push({distance:k,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),E=Math.min(p.count,o.start+o.count);for(let v=f,b=E-1;v<b;v+=m){if(l.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),sr.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(d);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const oo=new y,co=new y;class Dp extends nc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)oo.fromBufferAttribute(e,i),co.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+oo.distanceTo(co);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ic extends Bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lo=new ne,vr=new Ci,ns=new Ri,is=new y;class Ip extends he{constructor(t=new Ae,e=new ic){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(i),ns.radius+=r,t.ray.intersectsSphere(ns)===!1)return;lo.copy(i).invert(),vr.copy(t.ray).applyMatrix4(lo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,_=m;g<_;g++){const p=l.getX(g);is.fromBufferAttribute(u,p),ho(is,p,c,i,t,e,this)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)is.fromBufferAttribute(u,g),ho(is,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ho(s,t,e,n,i,r,o){const a=vr.distanceSqToPoint(s);if(a<e){const c=new y;vr.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class ii extends be{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Up{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,m=(o-h)/d;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new bt:new y);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new y,i=[],r=[],o=[],a=new y,c=new ne;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new y)}r[0]=new y,o[0]=new y;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(me(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(me(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function Pr(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,m*=h,i(o,a,d,m)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const ss=new y,rr=new Pr,ar=new Pr,or=new Pr;class Np extends Up{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new y){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(ss.subVectors(i[0],i[1]).add(i[0]),l=ss);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ss.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ss),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),rr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,p),ar.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,p),or.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(rr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ar.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),or.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(rr.calc(c),ar.calc(c),or.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new y().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class De extends Ae{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],m=[];let g=0;const _=[],p=n/2;let f=0;E(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(m,2));function E(){const b=new y,D=new y;let C=0;const R=(e-t)/n;for(let k=0;k<=r;k++){const M=[],w=k/r,N=w*(e-t)+t;for(let G=0;G<=i;G++){const X=G/i,P=X*c+a,U=Math.sin(P),H=Math.cos(P);D.x=N*U,D.y=-w*n+p,D.z=N*H,u.push(D.x,D.y,D.z),b.set(U,R,H).normalize(),d.push(b.x,b.y,b.z),m.push(X,1-w),M.push(g++)}_.push(M)}for(let k=0;k<i;k++)for(let M=0;M<r;M++){const w=_[M][k],N=_[M+1][k],G=_[M+1][k+1],X=_[M][k+1];h.push(w,N,X),h.push(N,G,X),C+=6}l.addGroup(f,C,0),f+=C}function v(b){const D=g,C=new bt,R=new y;let k=0;const M=b===!0?t:e,w=b===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,p*w,0),d.push(0,w,0),m.push(.5,.5),g++;const N=g;for(let G=0;G<=i;G++){const P=G/i*c+a,U=Math.cos(P),H=Math.sin(P);R.x=M*H,R.y=p*w,R.z=M*U,u.push(R.x,R.y,R.z),d.push(0,w,0),C.x=U*.5+.5,C.y=H*.5*w+.5,m.push(C.x,C.y),g++}for(let G=0;G<i;G++){const X=D+G,P=N+G;b===!0?h.push(P,P+1,X):h.push(P+1,P,X),k+=3}l.addGroup(f,k,b===!0?1:2),f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gs extends De{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new gs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ys extends Ae{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new y,d=new y,m=[],g=[],_=[],p=[];for(let f=0;f<=n;f++){const E=[],v=f/n;let b=0;f===0&&o===0?b=.5/e:f===n&&c===Math.PI&&(b=-.5/e);for(let D=0;D<=e;D++){const C=D/e;u.x=-t*Math.cos(i+C*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+C*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(C+b,1-v),E.push(l++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){const v=h[f][E+1],b=h[f][E],D=h[f+1][E],C=h[f+1][E+1];(f!==0||o>0)&&m.push(v,b,C),(f!==n-1||c<Math.PI)&&m.push(b,D,C)}this.setIndex(m),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Tt extends Bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ts extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Op extends Ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const cr=new ne,uo=new y,fo=new y;class sc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uo.setFromMatrixPosition(t.matrixWorld),e.position.copy(uo),fo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fo),e.updateMatrixWorld(),cr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const po=new ne,Si=new y,lr=new y;class Fp extends sc{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new y(1,0,0),new y(-1,0,0),new y(0,0,1),new y(0,0,-1),new y(0,1,0),new y(0,-1,0)],this._cubeUps=[new y(0,1,0),new y(0,1,0),new y(0,1,0),new y(0,1,0),new y(0,0,1),new y(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Si.setFromMatrixPosition(t.matrixWorld),n.position.copy(Si),lr.copy(n.position),lr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(lr),n.updateMatrixWorld(),i.makeTranslation(-Si.x,-Si.y,-Si.z),po.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po)}}class rc extends Ts{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Bp extends sc{constructor(){super(new jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zp extends Ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new Bp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gp extends Ts{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=mo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function mo(){return(typeof performance>"u"?Date:performance).now()}class Vp{constructor(t,e,n=0,i=1/0){this.ray=new Ci(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new br,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Mr(t,this,n,e),n.sort(go),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Mr(t[i],this,n,e);return n.sort(go),n}}function go(s,t){return s.distance-t.distance}function Mr(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Mr(i[r],t,e,!0)}}class _o{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const rs=new pi;class kp extends Dp{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new Ae;r.setIndex(new Ie(n,1)),r.setAttribute("position",new Ie(i,3)),super(r,new Lr({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&rs.setFromObject(this.object),rs.isEmpty())return;const e=rs.min,n=rs.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Er}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Er);class Wp{constructor(t){this.container=t,this.scene=new Pp,this.scene.background=new kt(791330),this.scene.fog=new Cr(791330,.005);const e=window.innerWidth/window.innerHeight;this.camera=new Pe(52,e,.5,600),this.camera.position.set(38,30,48),this.renderer=new ec({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Eo,this.renderer.toneMapping=To,this.renderer.toneMappingExposure=1.1,this.container.appendChild(this.renderer.domElement),this.setupLighting(),this.isNight=!1,this.targetSkyColor=new kt(791330),this.daySkyColor=new kt(8900331),this.nightSkyColor=new kt(527898),window.addEventListener("resize",()=>this.onWindowResize())}setupLighting(){this.ambientLight=new Gp(16777215,.55),this.scene.add(this.ambientLight),this.hemiLight=new Op(12248829,1976635,.45),this.hemiLight.position.set(0,50,0),this.scene.add(this.hemiLight),this.sunLight=new zp(16775149,1.4),this.sunLight.position.set(65,80,50),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=240;const t=75;this.sunLight.shadow.camera.left=-t,this.sunLight.shadow.camera.right=t,this.sunLight.shadow.camera.top=t,this.sunLight.shadow.camera.bottom=-t,this.sunLight.shadow.bias=-3e-4,this.sunLight.shadow.radius=2,this.scene.add(this.sunLight)}setShadowsEnabled(t){this.renderer.shadowMap.enabled=t,this.sunLight.castShadow=t,this.scene.traverse(e=>{e.material&&(e.material.needsUpdate=!0)})}setNightMode(t){this.isNight=t,t?(this.targetSkyColor.copy(this.nightSkyColor),this.sunLight.intensity=.15,this.sunLight.color.setHex(3718648),this.ambientLight.intensity=.25,this.hemiLight.intensity=.2):(this.targetSkyColor.copy(this.daySkyColor),this.sunLight.intensity=1.4,this.sunLight.color.setHex(16775149),this.ambientLight.intensity=.55,this.hemiLight.intensity=.45)}update(t){this.scene.background.lerp(this.targetSkyColor,.08),this.scene.fog.color.lerp(this.targetSkyColor,.08)}onWindowResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}render(){this.renderer.render(this.scene,this.camera)}}const xo={type:"change"},hr={type:"start"},vo={type:"end"},as=new Ci,Mo=new fn,Xp=Math.cos(70*ps.DEG2RAD);class Yp extends Fn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new y,this.cursor=new y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zn.ROTATE,MIDDLE:zn.DOLLY,RIGHT:zn.PAN},this.touches={ONE:Gn.ROTATE,TWO:Gn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",wt),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",wt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(xo),n.update(),r=i.NONE},this.update=function(){const A=new y,st=new Nn().setFromUnitVectors(t.up,new y(0,1,0)),vt=st.clone().invert(),ft=new y,Q=new Nn,L=new y,rt=2*Math.PI;return function(Rt=null){const yt=n.object.position;A.copy(yt).sub(n.target),A.applyQuaternion(st),a.setFromVector3(A),n.autoRotate&&r===i.NONE&&G(w(Rt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let qt=n.minAzimuthAngle,jt=n.maxAzimuthAngle;isFinite(qt)&&isFinite(jt)&&(qt<-Math.PI?qt+=rt:qt>Math.PI&&(qt-=rt),jt<-Math.PI?jt+=rt:jt>Math.PI&&(jt-=rt),qt<=jt?a.theta=Math.max(qt,Math.min(jt,a.theta)):a.theta=a.theta>(qt+jt)/2?Math.max(qt,a.theta):Math.min(jt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?a.radius=K(a.radius):a.radius=K(a.radius*l),A.setFromSpherical(a),A.applyQuaternion(vt),yt.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let se=!1;if(n.zoomToCursor&&C){let ae=null;if(n.object.isPerspectiveCamera){const Kt=A.length();ae=K(Kt*l);const ce=Kt-ae;n.object.position.addScaledVector(b,ce),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Kt=new y(D.x,D.y,0);Kt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),se=!0;const ce=new y(D.x,D.y,0);ce.unproject(n.object),n.object.position.sub(ce).add(Kt),n.object.updateMatrixWorld(),ae=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ae!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ae).add(n.object.position):(as.origin.copy(n.object.position),as.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(as.direction))<Xp?t.lookAt(n.target):(Mo.setFromNormalAndCoplanarPoint(n.object.up,n.target),as.intersectPlane(Mo,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),se=!0);return l=1,C=!1,se||ft.distanceToSquared(n.object.position)>o||8*(1-Q.dot(n.object.quaternion))>o||L.distanceToSquared(n.target)>0?(n.dispatchEvent(xo),ft.copy(n.object.position),Q.copy(n.object.quaternion),L.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Zt),n.domElement.removeEventListener("pointerdown",T),n.domElement.removeEventListener("pointercancel",O),n.domElement.removeEventListener("wheel",nt),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",O),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",wt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new _o,c=new _o;let l=1;const h=new y,u=new bt,d=new bt,m=new bt,g=new bt,_=new bt,p=new bt,f=new bt,E=new bt,v=new bt,b=new y,D=new bt;let C=!1;const R=[],k={};let M=!1;function w(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function N(A){const st=Math.abs(A*.01);return Math.pow(.95,n.zoomSpeed*st)}function G(A){c.theta-=A}function X(A){c.phi-=A}const P=function(){const A=new y;return function(vt,ft){A.setFromMatrixColumn(ft,0),A.multiplyScalar(-vt),h.add(A)}}(),U=function(){const A=new y;return function(vt,ft){n.screenSpacePanning===!0?A.setFromMatrixColumn(ft,1):(A.setFromMatrixColumn(ft,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(vt),h.add(A)}}(),H=function(){const A=new y;return function(vt,ft){const Q=n.domElement;if(n.object.isPerspectiveCamera){const L=n.object.position;A.copy(L).sub(n.target);let rt=A.length();rt*=Math.tan(n.object.fov/2*Math.PI/180),P(2*vt*rt/Q.clientHeight,n.object.matrix),U(2*ft*rt/Q.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(vt*(n.object.right-n.object.left)/n.object.zoom/Q.clientWidth,n.object.matrix),U(ft*(n.object.top-n.object.bottom)/n.object.zoom/Q.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function q(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(A,st){if(!n.zoomToCursor)return;C=!0;const vt=n.domElement.getBoundingClientRect(),ft=A-vt.left,Q=st-vt.top,L=vt.width,rt=vt.height;D.x=ft/L*2-1,D.y=-(Q/rt)*2+1,b.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function tt(A){u.set(A.clientX,A.clientY)}function at(A){j(A.clientX,A.clientX),f.set(A.clientX,A.clientY)}function W(A){g.set(A.clientX,A.clientY)}function Z(A){d.set(A.clientX,A.clientY),m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const st=n.domElement;G(2*Math.PI*m.x/st.clientHeight),X(2*Math.PI*m.y/st.clientHeight),u.copy(d),n.update()}function ht(A){E.set(A.clientX,A.clientY),v.subVectors(E,f),v.y>0?q(N(v.y)):v.y<0&&Y(N(v.y)),f.copy(E),n.update()}function _t(A){_.set(A.clientX,A.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),H(p.x,p.y),g.copy(_),n.update()}function mt(A){j(A.clientX,A.clientY),A.deltaY<0?Y(N(A.deltaY)):A.deltaY>0&&q(N(A.deltaY)),n.update()}function It(A){let st=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),st=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),st=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),st=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),st=!0;break}st&&(A.preventDefault(),n.update())}function Ut(A){if(R.length===1)u.set(A.pageX,A.pageY);else{const st=ut(A),vt=.5*(A.pageX+st.x),ft=.5*(A.pageY+st.y);u.set(vt,ft)}}function At(A){if(R.length===1)g.set(A.pageX,A.pageY);else{const st=ut(A),vt=.5*(A.pageX+st.x),ft=.5*(A.pageY+st.y);g.set(vt,ft)}}function Yt(A){const st=ut(A),vt=A.pageX-st.x,ft=A.pageY-st.y,Q=Math.sqrt(vt*vt+ft*ft);f.set(0,Q)}function F(A){n.enableZoom&&Yt(A),n.enablePan&&At(A)}function ge(A){n.enableZoom&&Yt(A),n.enableRotate&&Ut(A)}function Et(A){if(R.length==1)d.set(A.pageX,A.pageY);else{const vt=ut(A),ft=.5*(A.pageX+vt.x),Q=.5*(A.pageY+vt.y);d.set(ft,Q)}m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const st=n.domElement;G(2*Math.PI*m.x/st.clientHeight),X(2*Math.PI*m.y/st.clientHeight),u.copy(d)}function Lt(A){if(R.length===1)_.set(A.pageX,A.pageY);else{const st=ut(A),vt=.5*(A.pageX+st.x),ft=.5*(A.pageY+st.y);_.set(vt,ft)}p.subVectors(_,g).multiplyScalar(n.panSpeed),H(p.x,p.y),g.copy(_)}function gt(A){const st=ut(A),vt=A.pageX-st.x,ft=A.pageY-st.y,Q=Math.sqrt(vt*vt+ft*ft);E.set(0,Q),v.set(0,Math.pow(E.y/f.y,n.zoomSpeed)),q(v.y),f.copy(E);const L=(A.pageX+st.x)*.5,rt=(A.pageY+st.y)*.5;j(L,rt)}function Qt(A){n.enableZoom&&gt(A),n.enablePan&&Lt(A)}function Ft(A){n.enableZoom&&gt(A),n.enableRotate&&Et(A)}function T(A){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",x),n.domElement.addEventListener("pointerup",O)),Ht(A),A.pointerType==="touch"?Bt(A):et(A))}function x(A){n.enabled!==!1&&(A.pointerType==="touch"?$(A):J(A))}function O(A){Pt(A),R.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",O)),n.dispatchEvent(vo),r=i.NONE}function et(A){let st;switch(A.button){case 0:st=n.mouseButtons.LEFT;break;case 1:st=n.mouseButtons.MIDDLE;break;case 2:st=n.mouseButtons.RIGHT;break;default:st=-1}switch(st){case zn.DOLLY:if(n.enableZoom===!1)return;at(A),r=i.DOLLY;break;case zn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;W(A),r=i.PAN}else{if(n.enableRotate===!1)return;tt(A),r=i.ROTATE}break;case zn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;tt(A),r=i.ROTATE}else{if(n.enablePan===!1)return;W(A),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(hr)}function J(A){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Z(A);break;case i.DOLLY:if(n.enableZoom===!1)return;ht(A);break;case i.PAN:if(n.enablePan===!1)return;_t(A);break}}function nt(A){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(A.preventDefault(),n.dispatchEvent(hr),mt(xt(A)),n.dispatchEvent(vo))}function xt(A){const st=A.deltaMode,vt={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(st){case 1:vt.deltaY*=16;break;case 2:vt.deltaY*=100;break}return A.ctrlKey&&!M&&(vt.deltaY*=10),vt}function lt(A){A.key==="Control"&&(M=!0,document.addEventListener("keyup",pt,{passive:!0,capture:!0}))}function pt(A){A.key==="Control"&&(M=!1,document.removeEventListener("keyup",pt,{passive:!0,capture:!0}))}function wt(A){n.enabled===!1||n.enablePan===!1||It(A)}function Bt(A){switch(St(A),R.length){case 1:switch(n.touches.ONE){case Gn.ROTATE:if(n.enableRotate===!1)return;Ut(A),r=i.TOUCH_ROTATE;break;case Gn.PAN:if(n.enablePan===!1)return;At(A),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Gn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(A),r=i.TOUCH_DOLLY_PAN;break;case Gn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(A),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(hr)}function $(A){switch(St(A),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Et(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Lt(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Qt(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ft(A),n.update();break;default:r=i.NONE}}function Zt(A){n.enabled!==!1&&A.preventDefault()}function Ht(A){R.push(A.pointerId)}function Pt(A){delete k[A.pointerId];for(let st=0;st<R.length;st++)if(R[st]==A.pointerId){R.splice(st,1);return}}function St(A){let st=k[A.pointerId];st===void 0&&(st=new bt,k[A.pointerId]=st),st.set(A.pageX,A.pageY)}function ut(A){const st=A.pointerId===R[0]?R[1]:R[0];return k[st]}n.domElement.addEventListener("contextmenu",Zt),n.domElement.addEventListener("pointerdown",T),n.domElement.addEventListener("pointercancel",O),n.domElement.addEventListener("wheel",nt,{passive:!1}),document.addEventListener("keydown",lt,{passive:!0,capture:!0}),this.update()}}class qp{constructor(t,e){this.camera=t,this.domElement=e,this.controls=new Yp(this.camera,this.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2-.05,this.controls.minDistance=8,this.controls.maxDistance=220,this.controls.target.set(0,0,0),this.currentMode="orbit",this.targetVehicle=null,this.isTransitioning=!1,this.transProgress=1,this.transDuration=.8,this.startPos=new y,this.endPos=new y,this.startTarget=new y,this.endTarget=new y,this.currentTarget=new y(0,0,0),this.keys={w:!1,a:!1,s:!1,d:!1,q:!1,e:!1},this.freeFlyEuler=new Li(0,0,0,"YXZ"),this.isMouseDown=!1,this.prevMouse={x:0,y:0},this.initFreeFlyListeners(),this.presets={orbit:{pos:new y(38,30,48),target:new y(0,0,0)},topdown:{pos:new y(0,95,.1),target:new y(0,0,0)},cctv:{pos:new y(32,22,32),target:new y(0,1.5,0)}}}initFreeFlyListeners(){window.addEventListener("keydown",t=>{const e=t.key.toLowerCase();this.keys.hasOwnProperty(e)&&(this.keys[e]=!0)}),window.addEventListener("keyup",t=>{const e=t.key.toLowerCase();this.keys.hasOwnProperty(e)&&(this.keys[e]=!1)}),this.domElement.addEventListener("mousedown",t=>{this.currentMode==="freefly"&&(this.isMouseDown=!0,this.prevMouse.x=t.clientX,this.prevMouse.y=t.clientY)}),window.addEventListener("mouseup",()=>{this.isMouseDown=!1}),window.addEventListener("mousemove",t=>{if(this.currentMode==="freefly"&&this.isMouseDown){const e=t.clientX-this.prevMouse.x,n=t.clientY-this.prevMouse.y;this.prevMouse.x=t.clientX,this.prevMouse.y=t.clientY,this.freeFlyEuler.setFromQuaternion(this.camera.quaternion),this.freeFlyEuler.y-=e*.003,this.freeFlyEuler.x-=n*.003,this.freeFlyEuler.x=Math.max(-Math.PI/2+.1,Math.min(Math.PI/2-.1,this.freeFlyEuler.x)),this.camera.quaternion.setFromEuler(this.freeFlyEuler)}})}setMode(t,e=null){if(!(this.currentMode===t&&this.targetVehicle===e))if(this.currentMode=t,this.targetVehicle=e,t==="orbit")this.controls.enabled=!0,this.startTransition(this.camera.position,this.presets.orbit.pos,this.currentTarget,this.presets.orbit.target);else if(t==="topdown")this.controls.enabled=!1,this.startTransition(this.camera.position,this.presets.topdown.pos,this.currentTarget,this.presets.topdown.target);else if(t==="cctv")this.controls.enabled=!1,this.startTransition(this.camera.position,this.presets.cctv.pos,this.currentTarget,this.presets.cctv.target);else if(t==="chase"){if(this.controls.enabled=!1,this.targetVehicle){const n=this.targetVehicle.mesh.position,i=n.clone().add(new y(0,5,-12));this.startTransition(this.camera.position,i,this.currentTarget,n)}}else t==="freefly"&&(this.controls.enabled=!1,this.freeFlyEuler.setFromQuaternion(this.camera.quaternion))}startTransition(t,e,n,i){this.isTransitioning=!0,this.transProgress=0,this.startPos.copy(t),this.endPos.copy(e),this.startTarget.copy(n),this.endTarget.copy(i)}update(t){if(this.isTransitioning){this.transProgress+=t/this.transDuration,this.transProgress>=1&&(this.transProgress=1,this.isTransitioning=!1);const e=ps.smoothstep(this.transProgress,0,1);this.camera.position.lerpVectors(this.startPos,this.endPos,e),this.currentTarget.lerpVectors(this.startTarget,this.endTarget,e),this.camera.lookAt(this.currentTarget),this.currentMode==="orbit"&&this.controls.target.copy(this.currentTarget);return}this.currentMode==="orbit"?(this.controls.update(),this.currentTarget.copy(this.controls.target)):this.currentMode==="chase"?this.updateChaseCamera(t):this.currentMode==="freefly"?this.updateFreeFly(t):(this.currentMode==="topdown"||this.currentMode==="cctv")&&this.camera.lookAt(this.currentTarget)}updateChaseCamera(t){if(!this.targetVehicle||this.targetVehicle.isFinished){this.setMode("orbit");return}const n=this.targetVehicle.mesh.position,i=this.targetVehicle.tangentVec.clone(),r=this.targetVehicle.isEmergency?12:9.5,o=this.targetVehicle.isEmergency?5.2:4.2,a=n.clone().sub(i.clone().multiplyScalar(r)).add(new y(0,o,0)),c=n.clone().add(i.clone().multiplyScalar(6)).add(new y(0,1.2,0));this.camera.position.lerp(a,.1),this.currentTarget.lerp(c,.12),this.camera.lookAt(this.currentTarget)}updateFreeFly(t){const e=28*t,n=new y(0,0,-1).applyQuaternion(this.camera.quaternion),i=new y(1,0,0).applyQuaternion(this.camera.quaternion),r=new y(0,1,0);this.keys.w&&this.camera.position.addScaledVector(n,e),this.keys.s&&this.camera.position.addScaledVector(n,-e),this.keys.d&&this.camera.position.addScaledVector(i,e),this.keys.a&&this.camera.position.addScaledVector(i,-e),this.keys.e&&this.camera.position.addScaledVector(r,e),this.keys.q&&this.camera.position.addScaledVector(r,-e),this.camera.position.y<1&&(this.camera.position.y=1)}}class Rn{static getAsphaltTexture(){if(this.cachedTextures.has("asphalt"))return this.cachedTextures.get("asphalt");const t=512,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");n.fillStyle="#23272e",n.fillRect(0,0,t,t);const i=n.getImageData(0,0,t,t),r=i.data;for(let a=0;a<r.length;a+=4){const c=(Math.random()-.5)*18;r[a]=Math.min(255,Math.max(0,r[a]+c)),r[a+1]=Math.min(255,Math.max(0,r[a+1]+c)),r[a+2]=Math.min(255,Math.max(0,r[a+2]+c))}n.putImageData(i,0,0);const o=new ii(e);return o.wrapS=je,o.wrapT=je,o.repeat.set(4,4),this.cachedTextures.set("asphalt",o),o}static getRoadLaneTexture(t=2){const e="road_lanes_"+t;if(this.cachedTextures.has(e))return this.cachedTextures.get(e);const n=1024,i=1024,r=document.createElement("canvas");r.width=n,r.height=i;const o=r.getContext("2d");o.fillStyle="#22262c",o.fillRect(0,0,n,i);const a=o.getImageData(0,0,n,i),c=a.data;for(let p=0;p<c.length;p+=4){const f=(Math.random()-.5)*14;c[p]=Math.min(255,Math.max(0,c[p]+f)),c[p+1]=Math.min(255,Math.max(0,c[p+1]+f)),c[p+2]=Math.min(255,Math.max(0,c[p+2]+f))}o.putImageData(a,0,0);const l=t*2,h=n/l,u=n/2;o.fillStyle="#ffffff",o.fillRect(12,0,10,i),o.fillRect(n-22,0,10,i),o.fillStyle="#f59e0b",o.fillRect(u-10,0,6,i),o.fillRect(u+4,0,6,i),o.fillStyle="#ffffff";const d=64,m=64,g=Math.ceil(i/(d+m));for(let p=1;p<l;p++){if(p===t)continue;const f=p*h;for(let E=0;E<g;E++){const v=E*(d+m);o.fillRect(f-3,v,6,d)}}const _=new ii(r);return _.wrapS=Be,_.wrapT=je,_.repeat.set(1,4),this.cachedTextures.set(e,_),_}static getCrosswalkTexture(){if(this.cachedTextures.has("crosswalk"))return this.cachedTextures.get("crosswalk");const t=512,e=512,n=document.createElement("canvas");n.width=t,n.height=e;const i=n.getContext("2d");i.fillStyle="#1e2229",i.fillRect(0,0,t,e),i.fillStyle="#f8fafc";const r=42,a=r+38,c=Math.ceil(t/a)+1;for(let h=0;h<c;h++){const u=h*a;i.fillRect(u,20,r,e-40)}const l=new ii(n);return this.cachedTextures.set("crosswalk",l),l}static getSidewalkTexture(){if(this.cachedTextures.has("sidewalk"))return this.cachedTextures.get("sidewalk");const t=512,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");n.fillStyle="#94a3b8",n.fillRect(0,0,t,t),n.strokeStyle="#64748b",n.lineWidth=4;const i=64;for(let o=0;o<=t;o+=i)n.beginPath(),n.moveTo(o,0),n.lineTo(o,t),n.stroke();for(let o=0;o<=t;o+=i)n.beginPath(),n.moveTo(0,o),n.lineTo(t,o),n.stroke();const r=new ii(e);return r.wrapS=je,r.wrapT=je,r.repeat.set(8,8),this.cachedTextures.set("sidewalk",r),r}static getBuildingFacadeTexture(t="#1e293b",e="#fef08a"){const n="facade_"+t+"_"+e;if(this.cachedTextures.has(n))return this.cachedTextures.get(n);const i=512,r=1024,o=document.createElement("canvas");o.width=i,o.height=r;const a=o.getContext("2d");a.fillStyle=t,a.fillRect(0,0,i,r);const c=8,l=24,h=16,u=16,d=(i-h*(c+1))/c,m=(r-u*(l+1))/l;for(let _=0;_<l;_++)for(let p=0;p<c;p++){const f=h+p*(d+h),E=u+_*(m+u);if(Math.random()>.35){const b=Math.random()>.4;a.fillStyle=b?e:"#bae6fd",a.fillRect(f,E,d,m),a.fillStyle="rgba(0,0,0,0.15)",a.fillRect(f,E,d,3)}else a.fillStyle="#090d16",a.fillRect(f,E,d,m)}const g=new ii(o);return g.wrapS=je,g.wrapT=je,this.cachedTextures.set(n,g),g}static getRoadSignTexture(t="stop"){const e="sign_"+t;if(this.cachedTextures.has(e))return this.cachedTextures.get(e);const n=256,i=document.createElement("canvas");i.width=n,i.height=n;const r=i.getContext("2d");if(t==="stop"){r.fillStyle="#dc2626",r.beginPath();const a=n*.46,c=n/2,l=n/2;for(let h=0;h<8;h++){const u=h*Math.PI/4+Math.PI/8,d=c+a*Math.cos(u),m=l+a*Math.sin(u);h===0?r.moveTo(d,m):r.lineTo(d,m)}r.closePath(),r.fill(),r.strokeStyle="#ffffff",r.lineWidth=10,r.stroke(),r.fillStyle="#ffffff",r.font="bold 64px Inter, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText("STOP",c,l)}else t==="speed_limit"?(r.fillStyle="#ffffff",r.roundRect(16,16,n-32,n-32,20),r.fill(),r.strokeStyle="#000000",r.lineWidth=8,r.stroke(),r.fillStyle="#000000",r.font="bold 26px Inter, sans-serif",r.textAlign="center",r.fillText("SPEED",n/2,60),r.fillText("LIMIT",n/2,90),r.font="bold 88px Inter, sans-serif",r.fillText("35",n/2,180)):t==="one_way"&&(r.fillStyle="#0f172a",r.fillRect(16,64,n-32,128),r.fillStyle="#ffffff",r.beginPath(),r.moveTo(n-48,128),r.lineTo(n-100,88),r.lineTo(n-100,112),r.lineTo(48,112),r.lineTo(48,144),r.lineTo(n-100,144),r.lineTo(n-100,168),r.closePath(),r.fill(),r.fillStyle="#0f172a",r.font="bold 24px Inter, sans-serif",r.textAlign="center",r.fillText("ONE WAY",120,136));const o=new ii(i);return this.cachedTextures.set(e,o),o}}Ne(Rn,"cachedTextures",new Map);class jp{constructor(t,e=2,n=90,i=3.8){this.scene=t,this.lanesPerDirection=e,this.roadLength=n,this.laneWidth=i,this.group=new Jt,this.streetLights=[],this.scene.add(this.group),this.buildEnvironment()}rebuild(t){for(this.lanesPerDirection=t;this.group.children.length>0;){const e=this.group.children[0];this.group.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())}this.streetLights=[],this.buildEnvironment()}buildEnvironment(){const t=this.roadLength,e=this.laneWidth,n=this.lanesPerDirection,i=n*2*e,r=i/2,o=new Ke(350,350),a=new Tt({color:1251618,roughness:.9,metalness:.1}),c=new it(o,a);c.rotation.x=-Math.PI/2,c.position.y=-.05,c.receiveShadow=!0,this.group.add(c);const l=new Ke(i,i),h=Rn.getAsphaltTexture(),u=new Tt({map:h,roughness:.85,metalness:.15}),d=new it(l,u);d.rotation.x=-Math.PI/2,d.position.y=.01,d.receiveShadow=!0,this.group.add(d);const m=Rn.getRoadLaneTexture(n),g=t-r,_=new Ke(i,g),p=new Tt({map:m,roughness:.85,metalness:.15}),f=new it(_,p);f.rotation.x=-Math.PI/2,f.position.set(0,.01,-(r+g/2)),f.receiveShadow=!0,this.group.add(f);const E=new it(_,p);E.rotation.x=-Math.PI/2,E.rotation.z=Math.PI,E.position.set(0,.01,r+g/2),E.receiveShadow=!0,this.group.add(E);const v=new it(_,p);v.rotation.x=-Math.PI/2,v.rotation.z=-Math.PI/2,v.position.set(r+g/2,.01,0),v.receiveShadow=!0,this.group.add(v);const b=new it(_,p);b.rotation.x=-Math.PI/2,b.rotation.z=Math.PI/2,b.position.set(-(r+g/2),.01,0),b.receiveShadow=!0,this.group.add(b);const D=Rn.getCrosswalkTexture(),C=new Ke(i,4),R=new Tt({map:D,roughness:.7,transparent:!0}),k=r+2.2,M=new it(C,R);M.rotation.x=-Math.PI/2,M.position.set(0,.02,-k),M.receiveShadow=!0,this.group.add(M);const w=new it(C,R);w.rotation.x=-Math.PI/2,w.position.set(0,.02,k),w.receiveShadow=!0,this.group.add(w);const N=new it(C,R);N.rotation.x=-Math.PI/2,N.rotation.z=Math.PI/2,N.position.set(k,.02,0),N.receiveShadow=!0,this.group.add(N);const G=new it(C,R);G.rotation.x=-Math.PI/2,G.rotation.z=Math.PI/2,G.position.set(-k,.02,0),G.receiveShadow=!0,this.group.add(G);const X=new Ke(r-.2,.7),P=new Tt({color:16777215,roughness:.5}),U=r+4.8,H=new it(X,P);H.rotation.x=-Math.PI/2,H.position.set(r/2,.03,-U),this.group.add(H);const q=new it(X,P);q.rotation.x=-Math.PI/2,q.position.set(-r/2,.03,U),this.group.add(q);const Y=new it(X,P);Y.rotation.x=-Math.PI/2,Y.rotation.z=Math.PI/2,Y.position.set(U,.03,r/2),this.group.add(Y);const j=new it(X,P);j.rotation.x=-Math.PI/2,j.rotation.z=Math.PI/2,j.position.set(-U,.03,-r/2),this.group.add(j);const K=Rn.getSidewalkTexture(),tt=(300-i)/2,at=new Ot(tt,.2,tt),W=new Tt({map:K,roughness:.9}),Z=r+tt/2;[{x:-Z,z:-Z},{x:Z,z:-Z},{x:-Z,z:Z},{x:Z,z:Z}].forEach(_t=>{const mt=new it(at,W);mt.position.set(_t.x,.1,_t.z),mt.receiveShadow=!0,this.group.add(mt)}),this.buildRoadSigns(r),this.buildCityBuildings(r,tt),this.buildStreetLamps(r,t),this.buildTrees(r,t)}buildRoadSigns(t){[{x:t+1.8,z:-(t+5.5),rotY:0,type:"stop"},{x:-(t+1.8),z:t+5.5,rotY:Math.PI,type:"stop"},{x:t+5.5,z:t+1.8,rotY:Math.PI/2,type:"stop"},{x:-(t+5.5),z:-(t+1.8),rotY:-Math.PI/2,type:"stop"},{x:t+2,z:-(t+25),rotY:0,type:"speed_limit"},{x:-(t+2),z:t+25,rotY:Math.PI,type:"speed_limit"},{x:t+25,z:t+2,rotY:Math.PI/2,type:"speed_limit"},{x:-(t+25),z:-(t+2),rotY:-Math.PI/2,type:"speed_limit"}].forEach(n=>{const i=new Jt;i.position.set(n.x,0,n.z),i.rotation.y=n.rotY;const r=new De(.06,.06,3.2,8),o=new Tt({color:7434618,metalness:.8,roughness:.3}),a=new it(r,o);a.position.y=1.6,a.castShadow=!0,i.add(a);const c=Rn.getRoadSignTexture(n.type),l=new Ke(.9,.9),h=new Tt({map:c,roughness:.4,side:Xe}),u=new it(l,h);u.position.set(0,2.6,.08),u.castShadow=!0,i.add(u),this.group.add(i)})}buildCityBuildings(t,e){const n=[{base:"#1e293b",win:"#fef08a"},{base:"#0f172a",win:"#bae6fd"},{base:"#334155",win:"#fef3c7"},{base:"#1e1b4b",win:"#67e8f9"},{base:"#18181b",win:"#fde047"}],i=t+16;[{x:-i-12,z:-i-12,w:22,d:22,h:48},{x:-i-40,z:-i-10,w:26,d:20,h:65},{x:-i-12,z:-i-40,w:20,d:26,h:38},{x:-i-42,z:-i-42,w:28,d:28,h:78},{x:i+12,z:-i-12,w:22,d:22,h:55},{x:i+40,z:-i-10,w:24,d:20,h:42},{x:i+12,z:-i-40,w:20,d:26,h:70},{x:i+42,z:-i-42,w:28,d:28,h:50},{x:-i-12,z:i+12,w:22,d:22,h:44},{x:-i-40,z:i+10,w:24,d:20,h:62},{x:-i-12,z:i+40,w:20,d:26,h:52},{x:-i-42,z:i+42,w:28,d:28,h:85},{x:i+12,z:i+12,w:22,d:22,h:60},{x:i+40,z:i+10,w:26,d:20,h:36},{x:i+12,z:i+40,w:20,d:26,h:58},{x:i+42,z:i+42,w:28,d:28,h:72}].forEach((o,a)=>{const c=n[a%n.length],l=Rn.getBuildingFacadeTexture(c.base,c.win);l.repeat.set(1,Math.floor(o.h/12));const h=new Ot(o.w,o.h,o.d),u=new Tt({map:l,roughness:.6,metalness:.2}),d=new it(h,u);d.position.set(o.x,o.h/2,o.z),d.castShadow=!0,d.receiveShadow=!0,this.group.add(d);const m=new Ot(o.w*.4,3,o.d*.4),g=new Tt({color:3359061,roughness:.8}),_=new it(m,g);_.position.set(o.x,o.h+1.5,o.z),this.group.add(_)})}buildStreetLamps(t,e){const n=t+1.5,i=[12,35,60,85],r=[];i.forEach(c=>{r.push({x:n,z:-c,rotY:Math.PI/2}),r.push({x:-n,z:c,rotY:-Math.PI/2}),r.push({x:c,z:n,rotY:Math.PI}),r.push({x:-c,z:-n,rotY:0})});const o=new Tt({color:4674921,metalness:.8,roughness:.2}),a=new Tt({color:16777215,emissive:16707722,emissiveIntensity:.8});r.forEach(c=>{const l=new Jt;l.position.set(c.x,0,c.z),l.rotation.y=c.rotY;const h=new De(.1,.15,6,8),u=new it(h,o);u.position.y=3,u.castShadow=!0,l.add(u);const d=new De(.08,.08,2,8),m=new it(d,o);m.rotation.z=Math.PI/3,m.position.set(.8,6.2,0),l.add(m);const g=new Ot(.6,.15,.3),_=new it(g,a);_.position.set(1.6,6.6,0),l.add(_);const p=new rc(16707722,0,24,1.8);p.position.set(1.6,6.4,0),l.add(p),this.streetLights.push(p),this.group.add(l)})}buildTrees(t,e){const n=t+3.8,i=[20,48,75],r=[];i.forEach(c=>{r.push({x:n,z:-c}),r.push({x:-n,z:-c}),r.push({x:n,z:c}),r.push({x:-n,z:c}),r.push({x:c,z:n}),r.push({x:c,z:-n}),r.push({x:-c,z:n}),r.push({x:-c,z:-n})});const o=new Tt({color:5520683,roughness:.9}),a=new Tt({color:1467700,roughness:.7,flatShading:!0});r.forEach(c=>{const l=new Jt;l.position.set(c.x,0,c.z);const h=new De(.2,.3,2,6),u=new it(h,o);u.position.y=1,u.castShadow=!0,l.add(u);const d=new gs(1.6,2.5,7),m=new it(d,a);m.position.y=2.8,m.castShadow=!0,l.add(m);const g=new gs(1.2,2,7),_=new it(g,a);_.position.y=4,_.castShadow=!0,l.add(_),this.group.add(l)})}setNightMode(t){const e=t?1.4:0;this.streetLights.forEach(n=>{n.intensity=e})}}class Kp{constructor(t=2,e=90,n=3.8){this.lanesPerDirection=t,this.roadLength=e,this.laneWidth=n,this.halfRoadWidth=t*n,this.stopLineOffset=this.halfRoadWidth+3,this.paths=[],this.conflictMap=new Map,this.generatePaths()}updateLanes(t){this.lanesPerDirection=t,this.halfRoadWidth=t*this.laneWidth,this.stopLineOffset=this.halfRoadWidth+3,this.generatePaths()}generatePaths(){this.paths=[];const t=this.roadLength,e=this.laneWidth,n=this.lanesPerDirection,i=this.stopLineOffset,r=a=>(a+.5)*e;["N","S","E","W"].forEach(a=>{for(let c=0;c<n;c++){const l=r(c);let h=["straight"];n===1?h=["straight","right","left"]:n===2?(c===0&&(h=["left","straight"]),c===1&&(h=["right","straight"])):n===3&&(c===0&&(h=["left"]),c===1&&(h=["straight"]),c===2&&(h=["right","straight"])),h.forEach(u=>{const d=this.computePathPoints(a,c,u,t,i,e,l,n),m=new Np(d,!1,"centripetal",.2),g=m.getLength(),_=this.findStopT(m,a,i),p=m.getPointAt(_);this.paths.push({id:a+"_L"+c+"_"+u,direction:a,laneIndex:c,maneuver:u,curve:m,length:g,stopT:_,stopPosition:p,entryPoint:d[0],exitPoint:d[d.length-1],laneKey:a+"_L"+c,approachEndT:this.findApproachEndT(m,a)})})}}),this.buildConflictMap()}buildConflictMap(){this.conflictMap.clear();const t=this.halfRoadWidth+5,e=120,n=3.2,i=.75,r=new Map;this.paths.forEach(a=>{const c=[];for(let l=0;l<=e;l++){const h=l/e,u=a.curve.getPointAt(h);Math.hypot(u.x,u.z)<=t&&c.push({t:h,point:u})}r.set(a.id,c),a.conflicts=[]});const o=(a,c,l,h,u)=>{const d=[a.id,c.id].sort().join("|");if(this.conflictMap.has(d))return;const m=Math.max(3.5,i*4),g=Math.min(.18,m/Math.max(1,a.length)),_=Math.min(.18,m/Math.max(1,c.length)),p={pathA:a.id,pathB:c.id,tA:l,tB:h,tStartA:Math.max(0,l-g),tEndA:Math.min(1,l+g),tStartB:Math.max(0,h-_),tEndB:Math.min(1,h+_),centerDistance:u};this.conflictMap.set(d,p),a.conflicts.push({otherPathId:c.id,conflictT:l,windowStart:p.tStartA,windowEnd:p.tEndA,otherConflictT:h}),c.conflicts.push({otherPathId:a.id,conflictT:h,windowStart:p.tStartB,windowEnd:p.tEndB,otherConflictT:l})};for(let a=0;a<this.paths.length;a++){const c=this.paths[a];for(let l=a+1;l<this.paths.length;l++){const h=this.paths[l];if(c.direction===h.direction)continue;const u=r.get(c.id)||[],d=r.get(h.id)||[];let m=1/0,g=null,_=null;for(const p of u)for(const f of d){const E=Math.hypot(p.point.x-f.point.x,p.point.z-f.point.z);E<m&&(m=E,g=p,_=f)}g&&_&&m<=n&&o(c,h,g.t,_.t,m)}}}getPathConflict(t,e){if(t===e)return null;const n=[t,e].sort().join("|");return this.conflictMap.get(n)||null}computePathPoints(t,e,n,i,r,o,a,c){const l=[],u=(Math.min(e,c-1)+.5)*o;if(t==="N"){const d=a,m=-i,g=a,_=-r;l.push(new y(d,.05,m)),l.push(new y(g,.05,_)),n==="straight"?(l.push(new y(d,.05,0)),l.push(new y(d,.05,r)),l.push(new y(d,.05,i))):n==="right"?(l.push(new y(d,.05,-r*.4)),l.push(new y(d*.7+-r*.3,.05,-r*.1)),l.push(new y(-r,.05,-u)),l.push(new y(-i,.05,-u))):n==="left"&&(l.push(new y(d,.05,-r*.2)),l.push(new y(d*.5,.05,r*.3)),l.push(new y(r*.3,.05,u*.8)),l.push(new y(r,.05,u)),l.push(new y(i,.05,u)))}else if(t==="S"){const d=-a,m=i,g=-a,_=r;l.push(new y(d,.05,m)),l.push(new y(g,.05,_)),n==="straight"?(l.push(new y(d,.05,0)),l.push(new y(d,.05,-r)),l.push(new y(d,.05,-i))):n==="right"?(l.push(new y(d,.05,r*.4)),l.push(new y(d*.7+r*.3,.05,r*.1)),l.push(new y(r,.05,u)),l.push(new y(i,.05,u))):n==="left"&&(l.push(new y(d,.05,r*.2)),l.push(new y(d*.5,.05,-r*.3)),l.push(new y(-r*.3,.05,-u*.8)),l.push(new y(-r,.05,-u)),l.push(new y(-i,.05,-u)))}else if(t==="E"){const d=i,m=a,g=r,_=a;l.push(new y(d,.05,m)),l.push(new y(g,.05,_)),n==="straight"?(l.push(new y(0,.05,m)),l.push(new y(-r,.05,m)),l.push(new y(-i,.05,m))):n==="right"?(l.push(new y(r*.4,.05,m)),l.push(new y(r*.1,.05,m*.7+-r*.3)),l.push(new y(-u,.05,-r)),l.push(new y(-u,.05,-i))):n==="left"&&(l.push(new y(r*.2,.05,m)),l.push(new y(-r*.3,.05,m*.5)),l.push(new y(-u*.8,.05,r*.3)),l.push(new y(-u,.05,r)),l.push(new y(-u,.05,i)))}else if(t==="W"){const d=-i,m=-a,g=-r,_=-a;l.push(new y(d,.05,m)),l.push(new y(g,.05,_)),n==="straight"?(l.push(new y(0,.05,m)),l.push(new y(r,.05,m)),l.push(new y(i,.05,m))):n==="right"?(l.push(new y(-r*.4,.05,m)),l.push(new y(-r*.1,.05,m*.7+r*.3)),l.push(new y(u,.05,r)),l.push(new y(u,.05,i))):n==="left"&&(l.push(new y(-r*.2,.05,m)),l.push(new y(r*.3,.05,m*.5)),l.push(new y(u*.8,.05,-r*.3)),l.push(new y(u,.05,-r)),l.push(new y(u,.05,-i)))}return l}findApproachEndT(t,e){const n=this.halfRoadWidth+1;let i=.5;for(let r=1;r<=100;r++){const o=r/100,a=t.getPointAt(o);if(Math.hypot(a.x,a.z)<=n){i=Math.min(.65,o+.05);break}}return i}findStopT(t,e,n){let i=0,r=.6;for(let o=0;o<20;o++){const a=(i+r)/2,c=t.getPointAt(a);let l=0;e==="N"?l=-c.z:e==="S"?l=c.z:e==="E"?l=c.x:e==="W"&&(l=-c.x),l>n?i=a:r=a}return(i+r)/2}getRandomPathForDirection(t){const e=this.paths.filter(n=>n.direction===t);return e.length===0?this.paths[0]:e[Math.floor(Math.random()*e.length)]}getStraightPathForDirection(t){const e=this.paths.filter(n=>n.direction===t&&n.maneuver==="straight");return e.length===0?this.getRandomPathForDirection(t):e[0]}}class Zp{constructor(t,e=2,n=3.8){this.scene=t,this.lanesPerDirection=e,this.laneWidth=n,this.group=new Jt,this.scene.add(this.group),this.nsGreenDuration=12,this.ewGreenDuration=12,this.yellowDuration=3,this.allRedDuration=1.5,this.STATES={NS_GREEN:"NS_GREEN",NS_YELLOW:"NS_YELLOW",ALL_RED_1:"ALL_RED_1",EW_GREEN:"EW_GREEN",EW_YELLOW:"EW_YELLOW",ALL_RED_2:"ALL_RED_2"},this.currentState=this.STATES.NS_GREEN,this.stateTimer=0,this.isAdaptive=!1,this.emergencyActive=!1,this.emergencyDirection=null,this.signals=[],this.pedSignals=[],this.buildSignalPoles(),this.updateVisuals()}rebuild(t){for(this.lanesPerDirection=t;this.group.children.length>0;){const e=this.group.children[0];this.group.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())}this.signals=[],this.pedSignals=[],this.buildSignalPoles(),this.updateVisuals()}buildSignalPoles(){const t=this.lanesPerDirection*2*this.laneWidth/2,e=t+1.2,n=[{id:"NW",x:-e,z:-e,rotY:-Math.PI/2,facingDir:"S"},{id:"NE",x:e,z:-e,rotY:Math.PI,facingDir:"W"},{id:"SE",x:e,z:e,rotY:Math.PI/2,facingDir:"N"},{id:"SW",x:-e,z:e,rotY:0,facingDir:"E"}],i=new Tt({color:2565930,metalness:.85,roughness:.25}),r=new Tt({color:1579035,roughness:.7});n.forEach(o=>{const a=new Jt;a.position.set(o.x,0,o.z),a.rotation.y=o.rotY;const c=new De(.14,.18,7.2,12),l=new it(c,i);l.position.y=3.6,l.castShadow=!0,a.add(l);const h=Math.max(5,t*.85),u=new De(.1,.1,h,12),d=new it(u,i);d.rotation.z=-Math.PI/2,d.position.set(h/2,6.8,0),d.castShadow=!0,a.add(d);const m=this.createSignalHead(r,o.facingDir);m.mesh.position.set(h*.75,6,0),a.add(m.mesh),this.signals.push(m);const g=this.createSignalHead(r,o.facingDir,.7);g.mesh.position.set(.3,3.8,0),a.add(g.mesh),this.signals.push(g);const _=this.createPedestrianHead(r,o.facingDir);_.mesh.position.set(.3,2.5,.2),a.add(_.mesh),this.pedSignals.push(_),this.group.add(a)})}createSignalHead(t,e,n=1){const i=new Jt;i.scale.set(n,n,n);const r=new Ot(.65,1.8,.4),o=new it(r,t);o.castShadow=!0,i.add(o);const a=new De(.18,.18,.1,16);a.rotateX(Math.PI/2);const c=new Tt({color:3342336,emissive:16716049,emissiveIntensity:.1,roughness:.3}),l=new it(a,c);l.position.set(0,.55,.18),i.add(l);const h=new Tt({color:3351040,emissive:16755200,emissiveIntensity:.1,roughness:.3}),u=new it(a,h);u.position.set(0,0,.18),i.add(u);const d=new Tt({color:13073,emissive:65382,emissiveIntensity:.1,roughness:.3}),m=new it(a,d);return m.position.set(0,-.55,.18),i.add(m),[-.55,0,.55].forEach(g=>{const _=new De(.22,.22,.2,12,1,!0,0,Math.PI);_.rotateX(Math.PI/2),_.rotateZ(Math.PI);const p=new Tt({color:1120295,side:Xe}),f=new it(_,p);f.position.set(0,g,.22),i.add(f)}),{mesh:i,facingDir:e,redMat:c,yellowMat:h,greenMat:d}}createPedestrianHead(t,e){const n=new Jt,i=new Ot(.4,.7,.25),r=new it(i,t);n.add(r);const o=new Ke(.3,.26),a=new Tt({color:15680580,emissive:15680580,emissiveIntensity:.2}),c=new it(o,a);c.position.set(0,.14,.13),n.add(c);const l=new Tt({color:16777215,emissive:16777215,emissiveIntensity:.1}),h=new it(o,l);return h.position.set(0,-.14,.13),n.add(h),{mesh:n,facingDir:e,handMat:a,walkMat:l}}update(t,e){if(this.stateTimer+=t,this.emergencyActive)this.updateEmergencyPreemption(t);else{const n=this.getCurrentPhaseDuration(e);this.stateTimer>=n&&this.advancePhase()}this.updateVisuals()}updateEmergencyPreemption(t){const e=this.emergencyDirection==="N"||this.emergencyDirection==="S",n=e?this.STATES.NS_GREEN:this.STATES.EW_GREEN,i=e?this.STATES.EW_GREEN:this.STATES.NS_GREEN,r=e?this.STATES.EW_YELLOW:this.STATES.NS_YELLOW,o=e?this.STATES.NS_YELLOW:this.STATES.EW_YELLOW,a=e?this.STATES.ALL_RED_2:this.STATES.ALL_RED_1;if(this.currentState===n){this.stateTimer=0;return}if(this.currentState===i){this.currentState=r,this.stateTimer=0;return}if(this.currentState===r){this.stateTimer>=Math.min(1.5,this.yellowDuration)&&(this.currentState=a,this.stateTimer=0);return}if(this.currentState===o){this.stateTimer>=Math.min(1,this.yellowDuration)&&(this.currentState=a,this.stateTimer=0);return}if(this.currentState===this.STATES.ALL_RED_1||this.currentState===this.STATES.ALL_RED_2){this.stateTimer>=.8&&(this.currentState=n,this.stateTimer=0);return}this.currentState=n,this.stateTimer=0}getCurrentPhaseDuration(t){if(this.currentState===this.STATES.NS_YELLOW||this.currentState===this.STATES.EW_YELLOW)return this.yellowDuration;if(this.currentState===this.STATES.ALL_RED_1||this.currentState===this.STATES.ALL_RED_2)return this.allRedDuration;if(!this.isAdaptive||!t)return this.currentState===this.STATES.NS_GREEN?this.nsGreenDuration:this.ewGreenDuration;const e=(t.N||0)+(t.S||0),n=(t.E||0)+(t.W||0);if(this.currentState===this.STATES.NS_GREEN){const i=(e+1)/(n+1);return Math.min(26,Math.max(5,this.nsGreenDuration*Math.sqrt(i)))}else{const i=(n+1)/(e+1);return Math.min(26,Math.max(5,this.ewGreenDuration*Math.sqrt(i)))}}getNextPhaseState(){switch(this.currentState){case this.STATES.NS_GREEN:return this.STATES.NS_YELLOW;case this.STATES.NS_YELLOW:return this.STATES.ALL_RED_1;case this.STATES.ALL_RED_1:return this.STATES.EW_GREEN;case this.STATES.EW_GREEN:return this.STATES.EW_YELLOW;case this.STATES.EW_YELLOW:return this.STATES.ALL_RED_2;case this.STATES.ALL_RED_2:return this.STATES.NS_GREEN;default:return this.STATES.NS_GREEN}}advancePhase(){switch(this.stateTimer=0,this.currentState){case this.STATES.NS_GREEN:this.currentState=this.STATES.NS_YELLOW;break;case this.STATES.NS_YELLOW:this.currentState=this.STATES.ALL_RED_1;break;case this.STATES.ALL_RED_1:this.currentState=this.STATES.EW_GREEN;break;case this.STATES.EW_GREEN:this.currentState=this.STATES.EW_YELLOW;break;case this.STATES.EW_YELLOW:this.currentState=this.STATES.ALL_RED_2;break;case this.STATES.ALL_RED_2:this.currentState=this.STATES.NS_GREEN;break;default:this.currentState=this.STATES.NS_GREEN}}updateVisuals(){const t=this.currentState===this.STATES.NS_GREEN,e=this.currentState===this.STATES.NS_YELLOW,n=this.currentState===this.STATES.EW_GREEN,i=this.currentState===this.STATES.EW_YELLOW;this.signals.forEach(r=>{const o=r.facingDir==="N"||r.facingDir==="S";let a="red";o?t?a="green":e?a="yellow":a="red":n?a="green":i?a="yellow":a="red",r.redMat.emissiveIntensity=a==="red"?1.5:.05,r.yellowMat.emissiveIntensity=a==="yellow"?1.5:.05,r.greenMat.emissiveIntensity=a==="green"?1.5:.05}),this.pedSignals.forEach(r=>{const o=r.facingDir==="N"||r.facingDir==="S",a=o&&t||!o&&n;r.walkMat.emissiveIntensity=a?1.5:.05,r.handMat.emissiveIntensity=a?.05:1.5})}isGreen(t){return t==="N"||t==="S"?this.currentState===this.STATES.NS_GREEN:this.currentState===this.STATES.EW_GREEN}isYellow(t){return t==="N"||t==="S"?this.currentState===this.STATES.NS_YELLOW:this.currentState===this.STATES.EW_YELLOW}isRed(t){return!this.isGreen(t)&&!this.isYellow(t)}isPedestrianWalk(t){return t==="NS"?this.currentState===this.STATES.NS_GREEN:this.currentState===this.STATES.EW_GREEN}setManualPhase(t){Object.values(this.STATES).includes(t)&&(this.isAdaptive=!1,this.currentState=t,this.stateTimer=0)}setEmergency(t,e="N"){this.emergencyActive=t,this.emergencyDirection=e}setAdaptive(t){this.isAdaptive=t}getCycleInfo(t){const e=this.getCurrentPhaseDuration(t),n=Math.max(0,e-this.stateTimer),i=Math.min(100,Math.max(0,this.stateTimer/e*100));let r="NS GREEN",o="green";return this.currentState===this.STATES.NS_YELLOW?(r="NS YELLOW",o="yellow"):this.currentState===this.STATES.ALL_RED_1||this.currentState===this.STATES.ALL_RED_2?(r="ALL RED CLEARANCE",o="red"):this.currentState===this.STATES.EW_GREEN?(r="EW GREEN",o="green"):this.currentState===this.STATES.EW_YELLOW&&(r="EW YELLOW",o="yellow"),{phaseName:r,phaseClass:o,remainingSeconds:Math.ceil(n),progressPercent:i,currentState:this.currentState,isAdaptive:this.isAdaptive,emergencyActive:this.emergencyActive}}}class $e{static createWheel(){const t=new Jt,e=new it(this.wheelGeo,this.tireMat);e.rotation.z=Math.PI/2,e.castShadow=!0,t.add(e);const n=new it(this.rimGeo,this.rimMat);return n.rotation.z=Math.PI/2,t.add(n),t}static createSedan(){const t=new Jt,e=new Jt;t.add(e);const n=this.sedanColors[Math.floor(Math.random()*this.sedanColors.length)],i=new Tt({color:n,metalness:.6,roughness:.3}),r=new Tt({color:988970,roughness:.1,metalness:.9,transparent:!0,opacity:.85}),o=new Tt({color:1579035,roughness:.8}),a=new Ot(1.85,.65,4.4),c=new it(a,i);c.position.y=.55,c.castShadow=!0,e.add(c);const l=new Ot(1.6,.6,2.3),h=new it(l,r);h.position.set(0,1.1,-.2),h.castShadow=!0,e.add(h);const u=new Ot(1.58,.08,2.2),d=new it(u,i);d.position.set(0,1.42,-.2),e.add(d);const m=new Ot(1.86,.25,.2),g=new it(m,o);g.position.set(0,.4,2.25),e.add(g);const _=new it(m,o);_.position.set(0,.4,-2.25),e.add(_);const p=new Tt({color:16777215,emissive:16777215,emissiveIntensity:1.2}),f=new Ot(.35,.15,.05),E=new it(f,p);E.position.set(.65,.65,2.22),e.add(E);const v=new it(f,p);v.position.set(-.65,.65,2.22),e.add(v);const b=new Tt({color:15680580,emissive:15680580,emissiveIntensity:.3}),D=new Ot(.35,.15,.05),C=new it(D,b);C.position.set(.65,.65,-2.22),e.add(C);const R=new it(D,b);R.position.set(-.65,.65,-2.22),e.add(R);const k=[];return[{x:.92,y:.38,z:1.3},{x:-.92,y:.38,z:1.3},{x:.92,y:.38,z:-1.3},{x:-.92,y:.38,z:-1.3}].forEach(w=>{const N=this.createWheel();N.position.set(w.x,w.y,w.z),e.add(N),k.push(N)}),{root:t,chassis:e,wheels:k,brakeLights:[C,R],tailMat:b,headlights:[E,v],headMat:p,length:4.6,width:1.9,height:1.5,wheelRadius:.38,type:"sedan"}}static createSUV(){const t=new Jt,e=new Jt;t.add(e);const n=this.suvColors[Math.floor(Math.random()*this.suvColors.length)],i=new Tt({color:n,metalness:.5,roughness:.4}),r=new Tt({color:988970,roughness:.1,metalness:.9,transparent:!0,opacity:.88});new Tt({color:1579035,roughness:.8});const o=new Ot(2,.85,4.8),a=new it(o,i);a.position.y=.75,a.castShadow=!0,e.add(a);const c=new Ot(1.85,.8,3.2),l=new it(c,r);l.position.set(0,1.45,-.4),l.castShadow=!0,e.add(l);const h=new Ot(1.82,.08,3.1),u=new it(h,i);u.position.set(0,1.88,-.4),e.add(u);const d=new Tt({color:7434618,metalness:.8}),m=new Ot(.06,.08,2.6),g=new it(m,d);g.position.set(.8,1.96,-.4),e.add(g);const _=new it(m,d);_.position.set(-.8,1.96,-.4),e.add(_);const p=new Tt({color:16777215,emissive:16777215,emissiveIntensity:1.2}),f=new Ot(.4,.22,.05),E=new it(f,p);E.position.set(.72,.85,2.42),e.add(E);const v=new it(f,p);v.position.set(-.72,.85,2.42),e.add(v);const b=new Tt({color:15680580,emissive:15680580,emissiveIntensity:.3}),D=new Ot(.35,.3,.05),C=new it(D,b);C.position.set(.75,.95,-2.42),e.add(C);const R=new it(D,b);R.position.set(-.75,.95,-2.42),e.add(R);const k=[];return[{x:1.02,y:.44,z:1.4},{x:-1.02,y:.44,z:1.4},{x:1.02,y:.44,z:-1.4},{x:-1.02,y:.44,z:-1.4}].forEach(w=>{const N=this.createWheel();N.scale.set(1.15,1.15,1.15),N.position.set(w.x,w.y,w.z),e.add(N),k.push(N)}),{root:t,chassis:e,wheels:k,brakeLights:[C,R],tailMat:b,headlights:[E,v],headMat:p,length:5,width:2.1,height:1.9,wheelRadius:.44,type:"suv"}}static createBus(){const t=new Jt,e=new Jt;t.add(e);const n=new Tt({color:165063,metalness:.4,roughness:.4}),i=new Tt({color:16317180,roughness:.3}),r=new Tt({color:988970,roughness:.1,transparent:!0,opacity:.85}),o=new Ot(2.5,2.6,9.8),a=new it(o,n);a.position.y=1.7,a.castShadow=!0,e.add(a);const c=new Ot(2.48,.25,9.75),l=new it(c,i);l.position.set(0,3.05,0),e.add(l);const h=new Ot(2.4,1.2,.1),u=new it(h,r);u.position.set(0,2.1,4.91),e.add(u);const d=new Ot(.08,.9,8.8),m=new it(d,r);m.position.set(1.26,2.1,-.2),e.add(m);const g=new it(d,r);g.position.set(-1.26,2.1,-.2),e.add(g);const _=new Tt({color:16777215,emissive:16777215,emissiveIntensity:1.2}),p=new Ot(.4,.25,.05),f=new it(p,_);f.position.set(.95,.8,4.92),e.add(f);const E=new it(p,_);E.position.set(-.95,.8,4.92),e.add(E);const v=new Tt({color:15680580,emissive:15680580,emissiveIntensity:.3}),b=new Ot(.35,.4,.05),D=new it(b,v);D.position.set(.95,.9,-4.92),e.add(D);const C=new it(b,v);C.position.set(-.95,.9,-4.92),e.add(C);const R=[];return[{x:1.28,y:.48,z:3.2},{x:-1.28,y:.48,z:3.2},{x:1.28,y:.48,z:-2.2},{x:-1.28,y:.48,z:-2.2},{x:1.28,y:.48,z:-3.6},{x:-1.28,y:.48,z:-3.6}].forEach(M=>{const w=this.createWheel();w.scale.set(1.25,1.25,1.25),w.position.set(M.x,M.y,M.z),e.add(w),R.push(w)}),{root:t,chassis:e,wheels:R,brakeLights:[D,C],tailMat:v,headlights:[f,E],headMat:_,length:10,width:2.6,height:3.2,wheelRadius:.48,type:"bus"}}static createAmbulance(){const t=new Jt,e=new Jt;t.add(e);const n=new Tt({color:16777215,roughness:.25,metalness:.3}),i=new Tt({color:14427686,roughness:.3}),r=new Tt({color:988970,roughness:.1,transparent:!0,opacity:.88}),o=new Ot(2,1.3,2),a=new it(o,n);a.position.set(0,1.05,1.6),a.castShadow=!0,e.add(a);const c=new Ot(2.2,1.85,3.8),l=new it(c,n);l.position.set(0,1.45,-1.1),l.castShadow=!0,e.add(l);const h=new Ot(2.24,.35,3.75),u=new it(h,i);u.position.set(0,1.4,-1.1),e.add(u);const d=new Ot(2.26,.2,.6),m=new it(d,i);m.position.set(0,1.8,-1.1),e.add(m);const g=new Ot(2.26,.6,.2),_=new it(g,i);_.position.set(0,1.8,-1.1),e.add(_);const p=new Ot(1.8,.6,.08),f=new it(p,r);f.position.set(0,1.3,2.61),e.add(f);const E=new Tt({color:16777215,emissive:16777215,emissiveIntensity:1.4}),v=new Ot(.35,.2,.05),b=new it(v,E);b.position.set(.75,.7,2.62),e.add(b);const D=new it(v,E);D.position.set(-.75,.7,2.62),e.add(D);const C=new Tt({color:15680580,emissive:15680580,emissiveIntensity:.4}),R=new Ot(.3,.4,.05),k=new it(R,C);k.position.set(.85,.8,-3.02),e.add(k);const M=new it(R,C);M.position.set(-.85,.8,-3.02),e.add(M);const w=new Ot(1.6,.14,.35),N=new Tt({color:1120295}),G=new it(w,N);G.position.set(0,2.45,-.6),e.add(G);const X=new Ot(.4,.16,.28),P=new Tt({color:16711680,emissive:16711680,emissiveIntensity:2,roughness:.1}),U=new it(X,P);U.position.set(.5,2.56,-.6),e.add(U);const H=new Tt({color:26367,emissive:35071,emissiveIntensity:2,roughness:.1}),q=new it(X,H);q.position.set(-.5,2.56,-.6),e.add(q);const Y=[];return[{x:1.05,y:.44,z:1.6},{x:-1.05,y:.44,z:1.6},{x:1.05,y:.44,z:-1.6},{x:-1.05,y:.44,z:-1.6}].forEach(K=>{const tt=this.createWheel();tt.scale.set(1.15,1.15,1.15),tt.position.set(K.x,K.y,K.z),e.add(tt),Y.push(tt)}),{root:t,chassis:e,wheels:Y,brakeLights:[k,M],tailMat:C,headlights:[b,D],headMat:E,sirenLights:[U,q],sirenRedMat:P,sirenBlueMat:H,length:5.6,width:2.2,height:2.7,wheelRadius:.44,type:"ambulance"}}}Ne($e,"wheelGeo",new De(.38,.38,.28,16)),Ne($e,"rimGeo",new De(.24,.24,.29,12)),Ne($e,"tireMat",new Tt({color:1579035,roughness:.9})),Ne($e,"rimMat",new Tt({color:13948120,metalness:.9,roughness:.2})),Ne($e,"sedanColors",[2450411,14427686,1483594,9647082,561586,14753096,4674921,15857145]),Ne($e,"suvColors",[3359061,1976635,11817737,1409085,223649,4988309,14870768]);const vs=class vs{constructor(t,e="sedan",n=!1){this.id=++vs.idCounter,this.pathData=t,this.type=e,this.isEmergency=n,this.isEmergency?this.modelData=$e.createAmbulance():e==="suv"?this.modelData=$e.createSUV():e==="bus"?this.modelData=$e.createBus():this.modelData=$e.createSedan(),this.mesh=this.modelData.root,this.chassis=this.modelData.chassis,this.wheels=this.modelData.wheels,this.brakeLights=this.modelData.brakeLights,this.tailMat=this.modelData.tailMat,this.headMat=this.modelData.headMat,this.sirenLights=this.modelData.sirenLights,this.sirenRedMat=this.modelData.sirenRedMat,this.sirenBlueMat=this.modelData.sirenBlueMat,this.length=this.modelData.length,this.width=this.modelData.width,this.wheelRadius=this.modelData.wheelRadius,this.desiredSpeed=this.isEmergency?16:e==="bus"?9.5:e==="suv"?11.5:12.5,this.currentSpeed=this.desiredSpeed*(.8+Math.random()*.3),this.acceleration=0,this.maxAccel=this.isEmergency?3.5:2.2,this.comfortBrake=2.8,this.minGap=2.5,this.timeHeadway=1.2,this.distanceTraveled=0,this.t=0,this.isFinished=!1,this.isBraking=!1,this.leadDistance=999,this.leadDeltaV=0,this.stoppedAtLight=!1,this.sirenTimer=0,this.positionVec=new y,this.tangentVec=new y,this.upVec=new y(0,1,0),this.rotMatrix=new ne,this.updateTransform()}update(t,e,n,i,r,o=null){if(this.isFinished)return;this.pathData.curve;const a=this.pathData.length,c=Math.min(t,.1),l=this.desiredSpeed*e;let h=999,u=0;if(i){const X=i.distanceTraveled-i.length/2-(this.distanceTraveled+this.length/2);X>0&&X<h&&(h=X,u=this.currentSpeed-i.currentSpeed)}const d=this.pathData.stopT*a,m=d-(this.distanceTraveled+this.length/2),g=this.pathData.direction,_=n.isRed(g);if(m>-1&&m<45?this.isEmergency?!(n.emergencyActive&&n.emergencyDirection===g&&n.isGreen(g))&&_&&m+1<h?(h=Math.max(.1,m+.5),u=this.currentSpeed,this.stoppedAtLight=!0):this.stoppedAtLight=!1:_&&m+1<h?(h=Math.max(.1,m+.5),u=this.currentSpeed,this.stoppedAtLight=!0):this.stoppedAtLight=!1:this.stoppedAtLight=!1,o){const X=o.leadGap;X<h&&(h=X,u=o.deltaV)}if(r&&r.length>0){const X=this.positionVec;r.forEach(P=>{if(P.isCrossing){const U=X.distanceTo(P.position);U<8&&this.distanceTraveled<d+12&&U<h&&(h=Math.max(.5,U-1.5),u=this.currentSpeed)}})}this.leadDistance=h,this.leadDeltaV=u;const p=this.currentSpeed,f=Math.max(.1,l),E=this.maxAccel,v=this.comfortBrake,b=this.minGap,D=this.timeHeadway,C=b+Math.max(0,p*D+p*u/(2*Math.sqrt(E*v))),R=1-Math.pow(p/f,4),k=Math.pow(C/Math.max(.2,h),2);this.acceleration=E*(R-k),this.acceleration=Math.max(-8,Math.min(this.maxAccel,this.acceleration));const M=this.distanceTraveled;if(this.currentSpeed=Math.max(0,this.currentSpeed+this.acceleration*c),this.distanceTraveled+=this.currentSpeed*c,i){const X=i.distanceTraveled-(i.length+this.length)*.5-.08;this.distanceTraveled>X&&X>=M&&(this.distanceTraveled=X,this.currentSpeed=Math.min(this.currentSpeed,i.currentSpeed),this.acceleration=Math.min(this.acceleration,-2.5))}if(_&&m>-.5){const X=d-this.length*.5-.08;this.distanceTraveled>X&&M<=X+.5&&(this.distanceTraveled=Math.max(M,X),this.currentSpeed=0,this.acceleration=Math.min(this.acceleration,-4),this.stoppedAtLight=!0)}if(o&&o.distanceToConflict>-.5){const X=this.distanceTraveled+this.length*.5,P=o.distanceToConflict+M+this.length*.5-.08;X>P&&P>=M+this.length*.5&&(this.distanceTraveled=P-this.length*.5,this.currentSpeed=0,this.acceleration=Math.min(this.acceleration,-4))}if(this.distanceTraveled=Math.max(M,this.distanceTraveled),this.t=Math.min(1,this.distanceTraveled/a),this.t>=.999){this.isFinished=!0;return}this.updateTransform();const N=this.currentSpeed*c/this.wheelRadius;this.wheels.forEach(X=>{X.rotation.x+=N}),this.isBraking=this.acceleration<-.4,this.tailMat&&(this.tailMat.emissiveIntensity=this.isBraking?2.2:.2);const G=ps.clamp(-this.acceleration*.015,-.05,.03);if(this.chassis.rotation.x=ps.lerp(this.chassis.rotation.x,G,.15),this.isEmergency&&this.sirenRedMat&&this.sirenBlueMat){this.sirenTimer+=c*10;const X=Math.sin(this.sirenTimer)>0;this.sirenRedMat.emissiveIntensity=X?3:.2,this.sirenBlueMat.emissiveIntensity=X?.2:3}}updateTransform(){const t=this.pathData.curve;t.getPointAt(this.t,this.positionVec),this.mesh.position.copy(this.positionVec),t.getTangentAt(this.t,this.tangentVec).normalize(),this.rotMatrix.lookAt(this.positionVec,this.positionVec.clone().sub(this.tangentVec),this.upVec),this.mesh.quaternion.setFromRotationMatrix(this.rotMatrix)}dispose(){this.mesh.parent&&this.mesh.parent.remove(this.mesh)}};Ne(vs,"idCounter",100);let _s=vs;class $p{constructor(t,e,n){this.scene=t,this.pathGen=e,this.trafficLights=n,this.vehicles=[],this.spawnRate=28,this.spawnTimer=0,this.globalSpeedMult=1,this.spawnDirectionIndex=0,this.MAX_VEHICLES=8,this.MIN_SPAWN_HEADWAY=18,this.INTERSECTION_CONFLICT_RADIUS=0,this.MIN_CONFLICT_GAP=1,this.PREDICTION_HORIZON=1.8,this.SAFE_LATERAL_GAP=.35,this.PHYSICAL_SAFETY_MARGIN=.35,this.emergencyVehicle=null,this.selectedVehicle=null,this.showColliders=!1,this.colliderHelpers=new Map,this.pathLinesGroup=new Jt,this.pathLinesGroup.visible=!1,this.scene.add(this.pathLinesGroup),this.buildPathDebugLines(),this.refreshConflictGeometry()}refreshConflictGeometry(){this.INTERSECTION_CONFLICT_RADIUS=this.pathGen.halfRoadWidth+5}setTargetVehicleCount(t){this.MAX_VEHICLES=Math.max(1,Math.round(t)),this.spawnRate=Math.max(12,Math.min(90,this.MAX_VEHICLES*4)),this.spawnTimer=0}updateLanes(t){this.pathGen=t,this.refreshConflictGeometry(),this.clearAllVehicles(),this.buildPathDebugLines()}buildPathDebugLines(){for(;this.pathLinesGroup.children.length>0;){const e=this.pathLinesGroup.children[0];this.pathLinesGroup.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}const t={N:3718648,S:1096065,E:16096779,W:11032055};this.pathGen.paths.forEach(e=>{const n=new Ae().setFromPoints(e.curve.getPoints(60)),i=new Lr({color:t[e.direction]||65535,transparent:!0,opacity:.75}),r=new nc(n,i);r.position.y=.15,this.pathLinesGroup.add(r)})}setPathLinesVisible(t){this.pathLinesGroup.visible=t}setCollidersVisible(t){this.showColliders=t,this.colliderHelpers.forEach(e=>{e.visible=t})}triggerEmergencyAmbulance(t="N"){this.emergencyVehicle&&!this.emergencyVehicle.isFinished&&this.removeVehicle(this.emergencyVehicle);const e=this.pathGen.getStraightPathForDirection(t),n=new _s(e,"ambulance",!0);return this.vehicles.push(n),this.scene.add(n.mesh),this.emergencyVehicle=n,this.selectedVehicle=n,this.trafficLights.setEmergency(!0,t),n}spawnRandomVehicle(){const t=["N","E","S","W"];let e=null;for(let o=0;o<t.length;o++){const a=t[(this.spawnDirectionIndex+o)%t.length],c=this.pathGen.paths.filter(h=>h.direction===a);if(!c.length)continue;c.sort((h,u)=>this.getEntryOccupancy(h)-this.getEntryOccupancy(u));const l=c[0];if(!this.isEntryBlocked(l)){e=l,this.spawnDirectionIndex=(t.indexOf(a)+1)%t.length;break}}if(!e)return!1;const n=Math.random();let i="sedan";n<.22?i="suv":n<.35&&(i="bus");const r=new _s(e,i,!1);if(this.vehicles.push(r),this.scene.add(r.mesh),this.showColliders){const o=new kp(r.mesh,65484);this.scene.add(o),this.colliderHelpers.set(r.id,o)}return!0}getEntryOccupancy(t){return this.vehicles.reduce((e,n)=>n.pathData.laneKey!==t.laneKey?e:e+(n.distanceTraveled<this.MIN_SPAWN_HEADWAY?1:0),0)}isEntryBlocked(t){const e=t.curve.getPointAt(0);return this.vehicles.some(n=>{if(n.isFinished||n.pathData.laneKey!==t.laneKey)return!1;const i=n.distanceTraveled,r=Math.hypot(n.positionVec.x-e.x,n.positionVec.z-e.z);return i<this.MIN_SPAWN_HEADWAY||r<this.MIN_SPAWN_HEADWAY})}getLaneLeader(t,e){const n=e.get(t.pathData.id)||[],i=n.indexOf(t);let r=i>0?n[i-1]:null;if(t.t<=t.pathData.approachEndT){const o=e.get(t.pathData.laneKey)||[];for(const a of o)a===t||a.isFinished||a.distanceTraveled<=t.distanceTraveled||a.t>a.pathData.approachEndT||(!r||a.distanceTraveled>r.distanceTraveled)&&(r=a)}return r}getConflictEntry(t,e){const n=t.pathData.id===e.pathA,i=n?e.tA:e.tB,r=n?e.tStartA:e.tStartB,o=n?e.tEndA:e.tEndB,l=i*t.pathData.length-t.length*.5-t.distanceTraveled;return{conflictT:i,windowStart:r,windowEnd:o,distanceToConflict:l,inside:t.t>=r&&t.t<=o,cleared:t.t>o}}getIntersectionConflictConstraint(t){const e=Math.hypot(t.positionVec.x,t.positionVec.z),n=t.currentSpeed*this.PREDICTION_HORIZON+t.length;if(e>this.INTERSECTION_CONFLICT_RADIUS+n)return null;let i=null;for(const r of this.vehicles){if(r===t||r.isFinished||t.pathData.id===r.pathData.id)continue;const o=this.pathGen.getPathConflict(t.pathData.id,r.pathData.id);if(!o)continue;const a=this.getConflictEntry(t,o),c=this.getConflictEntry(r,o);if(a.cleared&&c.cleared||a.distanceToConflict<-t.length)continue;const l=r.isEmergency&&!t.isEmergency,h=t.isEmergency&&!r.isEmergency,u=Math.hypot(t.positionVec.x-r.positionVec.x,t.positionVec.z-r.positionVec.z)<(t.length+r.length)*.5+this.PHYSICAL_SAFETY_MARGIN;let d=!1;if(c.inside&&!a.cleared)d=!0;else if(!a.cleared&&!c.cleared){const p=Math.max(1,t.currentSpeed),f=Math.max(1,r.currentSpeed),E=Math.max(0,a.distanceToConflict)/p,v=Math.max(0,c.distanceToConflict)/f;l?d=v<=E+2:h?d=!1:d=(v<E-.15||Math.abs(v-E)<=.15&&r.id<t.id)&&v<=this.PREDICTION_HORIZON+1}if(!d&&!u||(u&&(d=r.isEmergency?!t.isEmergency:!0),!d))continue;const m=(t.length+r.length)*.5,_={leadGap:Math.max(.15,a.distanceToConflict-m),deltaV:t.currentSpeed-r.currentSpeed,otherVehicle:r,distanceToConflict:a.distanceToConflict};(!i||_.distanceToConflict<i.distanceToConflict)&&(i=_)}return i}footprintsOverlap(t,e){const n=new bt(t.tangentVec.x,t.tangentVec.z).normalize(),i=new bt(-n.y,n.x),r=new bt(e.tangentVec.x,e.tangentVec.z).normalize(),o=new bt(-r.y,r.x),a=new bt(e.positionVec.x-t.positionVec.x,e.positionVec.z-t.positionVec.z),c=[n,i,r,o];for(const l of c){const h=Math.abs(l.dot(n))*t.length*.5+Math.abs(l.dot(i))*t.width*.5,u=Math.abs(l.dot(r))*e.length*.5+Math.abs(l.dot(o))*e.width*.5;if(Math.abs(l.dot(a))>h+u+this.PHYSICAL_SAFETY_MARGIN)return!1}return!0}resolvePhysicalConflicts(){for(let t=0;t<this.vehicles.length;t++){const e=this.vehicles[t];if(!e.isFinished)for(let n=t+1;n<this.vehicles.length;n++){const i=this.vehicles[n];if(i.isFinished)continue;const r=e.pathData.laneKey===i.pathData.laneKey&&e.t<=e.pathData.approachEndT&&i.t<=i.pathData.approachEndT,o=!!this.pathGen.getPathConflict(e.pathData.id,i.pathData.id);if(!r&&!o||!this.footprintsOverlap(e,i))continue;let a;e.isEmergency!==i.isEmergency?a=e.isEmergency?i:e:r?a=e.distanceTraveled<i.distanceTraveled?e:i:a=e.id<i.id?i:e;const c=Math.max(.35,Math.min(2,Math.max(a.length,a.width)*.35));a.distanceTraveled=Math.max(0,a.distanceTraveled-c),a.t=Math.min(1,a.distanceTraveled/a.pathData.length),a.currentSpeed=Math.min(a.currentSpeed,.2),a.acceleration=Math.min(a.acceleration,-4),a.isBraking=!0,a.updateTransform()}}}update(t,e){const n=60/Math.max(1,this.spawnRate);for(this.spawnTimer+=t;this.spawnTimer>=n&&this.vehicles.length<this.MAX_VEHICLES&&this.spawnRandomVehicle();)this.spawnTimer-=n;const i=new Map,r=new Map;this.vehicles.forEach(c=>{i.has(c.pathData.laneKey)||i.set(c.pathData.laneKey,[]),r.has(c.pathData.id)||r.set(c.pathData.id,[]),i.get(c.pathData.laneKey).push(c),r.get(c.pathData.id).push(c)}),i.forEach(c=>c.sort((l,h)=>h.distanceTraveled-l.distanceTraveled)),r.forEach(c=>c.sort((l,h)=>h.distanceTraveled-l.distanceTraveled));const o=[...this.vehicles].sort((c,l)=>{if(c.isEmergency!==l.isEmergency)return c.isEmergency?-1:1;const h=this.getNearestConflictDistance(c),u=this.getNearestConflictDistance(l);return h-u}),a=[];for(const c of o){if(c.isFinished)continue;const l=this.getLaneLeader(c,i),h=this.getIntersectionConflictConstraint(c);c.update(t,this.globalSpeedMult,this.trafficLights,l,e,h),this.showColliders&&this.colliderHelpers.has(c.id)&&this.colliderHelpers.get(c.id).update(),c.isFinished&&a.push(c)}this.resolvePhysicalConflicts(),a.forEach(c=>this.removeVehicle(c)),this.emergencyVehicle&&this.emergencyVehicle.isFinished&&(this.trafficLights.setEmergency(!1),this.emergencyVehicle=null)}getNearestConflictDistance(t){let e=1/0;for(const n of this.vehicles){if(n===t||n.isFinished)continue;const i=this.pathGen.getPathConflict(t.pathData.id,n.pathData.id);if(!i)continue;const r=this.getConflictEntry(t,i);r.distanceToConflict>=0&&(e=Math.min(e,r.distanceToConflict))}return e===1/0?1e4:e}removeVehicle(t){const e=this.vehicles.indexOf(t);e!==-1&&this.vehicles.splice(e,1),this.selectedVehicle===t&&(this.selectedVehicle=null),this.colliderHelpers.has(t.id)&&(this.scene.remove(this.colliderHelpers.get(t.id)),this.colliderHelpers.delete(t.id)),t.dispose()}clearAllVehicles(){this.vehicles.forEach(t=>{this.colliderHelpers.has(t.id)&&this.scene.remove(this.colliderHelpers.get(t.id)),t.dispose()}),this.vehicles=[],this.colliderHelpers.clear(),this.emergencyVehicle=null,this.selectedVehicle=null,this.trafficLights.setEmergency(!1)}getTelemetryStats(){const t=this.vehicles.length;let e=0,n=0;const i={N:0,S:0,E:0,W:0};return this.vehicles.forEach(r=>{const o=r.currentSpeed*3.6;e+=o,o>3&&n++,r.currentSpeed<1.8&&r.t<r.pathData.stopT+.05&&i[r.pathData.direction]++}),{vehicleCount:t,avgSpeed:t>0?Math.round(e/t):0,efficiency:t>0?Math.round(n/t*100):100,queues:i}}}const pn=class pn{constructor(t,e=0,n,i,r="NS"){this.crosswalkId=t,this.startPos=n.clone(),this.endPos=i.clone(),this.currentGoal=i.clone(),this.axis=r,this.position=n.clone(),this.walkSpeed=1.35,this.isCrossing=!1,this.waitingOnCurb=!0,this.walkCycleTime=Math.random()*Math.PI*2,this.group=new Jt,this.group.position.copy(this.position),this.buildMesh()}buildMesh(){const t=pn.shirtColors[Math.floor(Math.random()*pn.shirtColors.length)],e=pn.pantsColors[Math.floor(Math.random()*pn.pantsColors.length)],n=new Tt({color:16502760,roughness:.8}),i=new Tt({color:t,roughness:.7}),r=new Tt({color:e,roughness:.8}),o=new Ot(.44,.6,.26);this.torso=new it(o,i),this.torso.position.y=1.1,this.torso.castShadow=!0,this.group.add(this.torso);const a=new ys(.18,12,12),c=new it(a,n);c.position.y=1.6,c.castShadow=!0,this.group.add(c),this.armL=new Jt,this.armL.position.set(.28,1.35,0);const l=new Ot(.12,.5,.12);l.translate(0,-.22,0);const h=new it(l,i);this.armL.add(h),this.group.add(this.armL),this.armR=new Jt,this.armR.position.set(-.28,1.35,0);const u=new it(l,i);this.armR.add(u),this.group.add(this.armR),this.legL=new Jt,this.legL.position.set(.13,.8,0);const d=new Ot(.16,.75,.16);d.translate(0,-.35,0);const m=new it(d,r);m.castShadow=!0,this.legL.add(m),this.group.add(this.legL),this.legR=new Jt,this.legR.position.set(-.13,.8,0);const g=new it(d,r);g.castShadow=!0,this.legR.add(g),this.group.add(this.legR)}update(t,e,n=!0){if(!n){this.group.visible=!1,this.isCrossing=!1;return}this.group.visible=!0;const i=e.isPedestrianWalk(this.axis);if(this.waitingOnCurb)this.isCrossing=!1,this.armL.rotation.x=0,this.armR.rotation.x=0,this.legL.rotation.x=0,this.legR.rotation.x=0,i&&(this.waitingOnCurb=!1,this.isCrossing=!0);else{this.isCrossing=!0;const r=new y().subVectors(this.currentGoal,this.position);if(r.length()<.3){this.waitingOnCurb=!0,this.isCrossing=!1;const a=this.currentGoal.equals(this.endPos)?this.startPos:this.endPos;this.currentGoal.copy(a)}else{r.normalize(),this.position.addScaledVector(r,this.walkSpeed*t),this.group.position.copy(this.position);const a=Math.atan2(r.x,r.z);this.group.rotation.y=a,this.walkCycleTime+=t*this.walkSpeed*7.5;const c=Math.sin(this.walkCycleTime)*.65;this.legL.rotation.x=c,this.legR.rotation.x=-c,this.armL.rotation.x=-c*.8,this.armR.rotation.x=c*.8,this.torso.position.y=1.1+Math.abs(Math.sin(this.walkCycleTime))*.04}}}dispose(){this.group.parent&&this.group.parent.remove(this.group)}};Ne(pn,"shirtColors",[3900150,15680580,1096065,16096779,9133302,15485081,16317180]),Ne(pn,"pantsColors",[1976635,3359061,1973067,4674921]);let xs=pn;class Jp{constructor(t,e,n=2,i=3.8){this.scene=t,this.trafficLights=e,this.lanesPerDirection=n,this.laneWidth=i,this.enabled=!0,this.pedestrians=[],this.buildPedestrians()}rebuild(t){this.lanesPerDirection=t,this.clear(),this.buildPedestrians()}clear(){this.pedestrians.forEach(t=>t.dispose()),this.pedestrians=[]}buildPedestrians(){const t=this.lanesPerDirection*2*this.laneWidth/2,e=t+2.2,n=t+1.8;[{id:"CW_North",axis:"EW",p1:new y(-n,.1,-e),p2:new y(n,.1,-e)},{id:"CW_South",axis:"EW",p1:new y(n,.1,e),p2:new y(-n,.1,e)},{id:"CW_East",axis:"NS",p1:new y(e,.1,-n),p2:new y(e,.1,n)},{id:"CW_West",axis:"NS",p1:new y(-e,.1,n),p2:new y(-e,.1,-n)}].forEach(r=>{const o=new xs(r.id,0,r.p1,r.p2,r.axis);this.pedestrians.push(o),this.scene.add(o.group);const a=new xs(r.id,1,r.p2,r.p1,r.axis);this.pedestrians.push(a),this.scene.add(a.group)})}update(t){this.pedestrians.forEach(e=>{e.update(t,this.trafficLights,this.enabled)})}setEnabled(t){this.enabled=t}}class Qp{constructor(t){this.scene=t,this.enabled=!0,this.rainEnabled=!1,this.sirenLight=new rc(16711680,0,30,2),this.scene.add(this.sirenLight),this.buildRainSystem(),this.smokeParticles=[],this.buildExhaustPool()}buildRainSystem(){const e=new Ae,n=new Float32Array(1800*3),i=new Float32Array(1800);for(let o=0;o<1800;o++)n[o*3]=(Math.random()-.5)*180,n[o*3+1]=Math.random()*60,n[o*3+2]=(Math.random()-.5)*180,i[o]=30+Math.random()*20;e.setAttribute("position",new Ie(n,3)),this.rainVelocities=i;const r=new ic({color:9684477,size:.35,transparent:!0,opacity:.6});this.rainMesh=new Ip(e,r),this.rainMesh.visible=!1,this.scene.add(this.rainMesh)}buildExhaustPool(){const e=new ys(.18,6,6),n=new Tt({color:9741240,transparent:!0,opacity:.4,roughness:1});this.smokePool=[];for(let i=0;i<40;i++){const r=new it(e,n.clone());r.visible=!1,this.scene.add(r),this.smokePool.push({mesh:r,active:!1,life:0,maxLife:1.2,vel:new y,scale:1})}}spawnExhaustPuff(t,e){if(!this.enabled)return;const n=this.smokePool.find(i=>!i.active);n&&(n.active=!0,n.life=0,n.mesh.visible=!0,n.mesh.position.copy(t),n.mesh.position.y+=.25,n.vel.set(-e.x*2+(Math.random()-.5)*.4,.8+Math.random()*.5,-e.z*2+(Math.random()-.5)*.4),n.scale=.5,n.mesh.scale.set(n.scale,n.scale,n.scale),n.mesh.material.opacity=.45)}update(t,e,n){if(e&&!e.isFinished&&this.enabled){const i=e.mesh.position;this.sirenLight.position.set(i.x,i.y+3,i.z);const r=Math.sin(Date.now()*.015)>0;this.sirenLight.color.setHex(r?16716049:35071),this.sirenLight.intensity=2.5}else this.sirenLight.intensity=0;if(this.enabled){if(n&&n.length>0&&Math.random()<.3){const i=n[Math.floor(Math.random()*n.length)];i.acceleration>.5&&i.currentSpeed<10&&this.spawnExhaustPuff(i.mesh.position,i.tangentVec)}this.smokePool.forEach(i=>{if(i.active)if(i.life+=t,i.life>=i.maxLife)i.active=!1,i.mesh.visible=!1;else{const r=i.life/i.maxLife;i.mesh.position.addScaledVector(i.vel,t),i.scale=.5+r*2.2,i.mesh.scale.set(i.scale,i.scale,i.scale),i.mesh.material.opacity=(1-r)*.4}})}if(this.rainEnabled&&this.rainMesh){const i=this.rainMesh.geometry.attributes.position,r=i.count;for(let o=0;o<r;o++){let a=i.getY(o)-this.rainVelocities[o]*t;a<0&&(a=55+Math.random()*10),i.setY(o,a)}i.needsUpdate=!0}}setRain(t){this.rainEnabled=t,this.rainMesh&&(this.rainMesh.visible=t)}setEnabled(t){this.enabled=t,t||(this.sirenLight.intensity=0,this.smokePool.forEach(e=>{e.active=!1,e.mesh.visible=!1}))}}class tm{constructor(){this.ctx=null,this.muted=!0,this.sirenActive=!1,this.sirenOsc=null,this.sirenGain=null,this.lfoOsc=null,this.lfoGain=null}initContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.initContext(),this.muted?this.stopSiren():this.sirenActive&&this.startSiren(),!this.muted}setEmergencySiren(t){this.sirenActive=t,t&&!this.muted?this.startSiren():this.stopSiren()}startSiren(){if(!(this.muted||this.sirenOsc)&&(this.initContext(),!!this.ctx))try{this.sirenOsc=this.ctx.createOscillator(),this.sirenOsc.type="sawtooth",this.sirenOsc.frequency.setValueAtTime(750,this.ctx.currentTime),this.lfoOsc=this.ctx.createOscillator(),this.lfoOsc.type="triangle",this.lfoOsc.frequency.setValueAtTime(.4,this.ctx.currentTime),this.lfoGain=this.ctx.createGain(),this.lfoGain.gain.setValueAtTime(220,this.ctx.currentTime),this.lfoOsc.connect(this.lfoGain),this.lfoGain.connect(this.sirenOsc.frequency),this.sirenGain=this.ctx.createGain(),this.sirenGain.gain.setValueAtTime(.08,this.ctx.currentTime),this.sirenOsc.connect(this.sirenGain),this.sirenGain.connect(this.ctx.destination),this.sirenOsc.start(),this.lfoOsc.start()}catch(t){console.warn("Audio start error:",t)}}stopSiren(){if(this.sirenOsc){try{this.sirenOsc.stop(),this.lfoOsc.stop(),this.sirenOsc.disconnect(),this.lfoOsc.disconnect()}catch{}this.sirenOsc=null,this.lfoOsc=null,this.sirenGain=null}}}class em{constructor(t){this.sim=t,this.raycaster=new Vp,this.mouse=new bt,this.cacheElements(),this.bindEvents(),this.initRaycasting()}cacheElements(){this.el={btnScenarioNormal:document.getElementById("btn-scenario-normal"),btnScenarioHeavy:document.getElementById("btn-scenario-heavy"),btnScenarioJam:document.getElementById("btn-scenario-jam"),btnScenarioEmergency:document.getElementById("btn-scenario-emergency"),btnScenarioAdaptive:document.getElementById("btn-scenario-adaptive"),scenarioBtns:document.querySelectorAll(".scenario-btn"),btnDayNight:document.getElementById("btn-day-night"),dayNightIcon:document.getElementById("day-night-icon"),btnWeather:document.getElementById("btn-weather"),btnSound:document.getElementById("btn-sound"),soundIcon:document.getElementById("sound-icon"),btnAbout:document.getElementById("btn-about"),btnCgGuide:document.getElementById("btn-cg-guide"),btnReset:document.getElementById("btn-reset"),sidebarPanel:document.getElementById("sidebar-panel"),btnToggleSidebar:document.getElementById("btn-toggle-sidebar"),fpsCounter:document.getElementById("fps-counter"),statVehicleCount:document.getElementById("stat-vehicle-count"),statAvgSpeed:document.getElementById("stat-avg-speed"),statFlowEfficiency:document.getElementById("stat-flow-efficiency"),statSignalMode:document.getElementById("stat-signal-mode"),signalPhaseBadge:document.getElementById("signal-phase-badge"),signalTimerText:document.getElementById("signal-timer-text"),signalProgressBar:document.getElementById("signal-progress-bar"),queueValNorth:document.getElementById("queue-val-north"),queueValSouth:document.getElementById("queue-val-south"),queueValEast:document.getElementById("queue-val-east"),queueValWest:document.getElementById("queue-val-west"),meterNorth:document.getElementById("meter-north"),meterSouth:document.getElementById("meter-south"),meterEast:document.getElementById("meter-east"),meterWest:document.getElementById("meter-west"),modePills:document.querySelectorAll(".mode-pill"),sliderActiveVehicles:document.getElementById("slider-active-vehicles"),valActiveVehicles:document.getElementById("val-active-vehicles"),activeVehiclesRangeHint:document.getElementById("active-vehicles-range-hint"),sliderSpawnRate:document.getElementById("slider-spawn-rate"),valSpawnRate:document.getElementById("val-spawn-rate"),sliderSpeedMult:document.getElementById("slider-speed-mult"),valSpeedMult:document.getElementById("val-speed-mult"),lanePills:document.querySelectorAll(".lane-pill"),valLanes:document.getElementById("val-lanes"),toggleAdaptiveSignal:document.getElementById("toggle-adaptive-signal"),sliderNsGreen:document.getElementById("slider-ns-green"),valNsGreen:document.getElementById("val-ns-green"),sliderEwGreen:document.getElementById("slider-ew-green"),valEwGreen:document.getElementById("val-ew-green"),sliderYellowDur:document.getElementById("slider-yellow-dur"),valYellowDur:document.getElementById("val-yellow-dur"),btnForcePhase:document.getElementById("btn-force-phase"),btnForceNsGreen:document.getElementById("btn-force-ns-green"),btnForceEwGreen:document.getElementById("btn-force-ew-green"),btnForceYellow:document.getElementById("btn-force-yellow"),btnForceAllRed:document.getElementById("btn-force-all-red"),togglePedestrians:document.getElementById("toggle-pedestrians"),toggleShadows:document.getElementById("toggle-shadows"),togglePaths:document.getElementById("toggle-paths"),toggleColliders:document.getElementById("toggle-colliders"),toggleParticles:document.getElementById("toggle-particles"),camBtns:document.querySelectorAll(".cam-btn"),freeflyHelper:document.getElementById("freefly-helper"),vehicleCard:document.getElementById("vehicle-card"),vcardBadge:document.getElementById("vcard-badge"),vcardId:document.getElementById("vcard-id"),vcardSpeed:document.getElementById("vcard-speed"),vcardAccel:document.getElementById("vcard-accel"),vcardDist:document.getElementById("vcard-dist"),vcardIntent:document.getElementById("vcard-intent"),vcardClose:document.getElementById("vcard-close"),vcardBtnChase:document.getElementById("vcard-btn-chase"),cgModal:document.getElementById("cg-modal"),btnCloseModal:document.getElementById("btn-close-modal"),aboutPage:document.getElementById("about-page"),btnEnterSimulation:document.getElementById("btn-enter-simulation")}}bindEvents(){this.el.btnScenarioNormal.addEventListener("click",()=>this.sim.setScenario("normal")),this.el.btnScenarioHeavy.addEventListener("click",()=>this.sim.setScenario("heavy")),this.el.btnScenarioJam.addEventListener("click",()=>this.sim.setScenario("jam")),this.el.btnScenarioEmergency.addEventListener("click",()=>this.sim.setScenario("emergency")),this.el.btnScenarioAdaptive.addEventListener("click",()=>this.sim.setScenario("adaptive")),this.el.btnDayNight.addEventListener("click",()=>{const t=!this.sim.sceneMgr.isNight;this.sim.sceneMgr.setNightMode(t),this.sim.roadNetwork.setNightMode(t),this.el.dayNightIcon.textContent=t?"🌙":"☀️"}),this.el.btnWeather.addEventListener("click",()=>{const t=!this.sim.particleSystem.rainEnabled;this.sim.particleSystem.setRain(t),this.el.btnWeather.classList.toggle("active",t)}),this.el.btnSound.addEventListener("click",()=>{const t=this.sim.soundMgr.toggleMute();this.el.soundIcon.textContent=t?"🔊":"🔇"}),this.el.btnReset.addEventListener("click",()=>this.sim.resetSimulation()),this.el.btnAbout.addEventListener("click",()=>this.showAbout()),this.el.btnEnterSimulation.addEventListener("click",()=>this.hideAbout()),this.el.btnCgGuide.addEventListener("click",()=>{this.el.cgModal.classList.remove("hidden")}),this.el.btnCloseModal.addEventListener("click",()=>{this.el.cgModal.classList.add("hidden")}),this.el.cgModal.addEventListener("click",t=>{t.target===this.el.cgModal&&this.el.cgModal.classList.add("hidden")}),this.el.btnToggleSidebar.addEventListener("click",()=>{this.el.sidebarPanel.classList.toggle("collapsed"),this.el.btnToggleSidebar.textContent=this.el.sidebarPanel.classList.contains("collapsed")?"▶":"◀"}),this.el.sliderSpawnRate.addEventListener("input",t=>{const e=parseInt(t.target.value);this.sim.vehicleMgr.spawnRate=e,this.el.valSpawnRate.textContent=e+" veh/min"}),this.el.sliderSpeedMult.addEventListener("input",t=>{const e=parseFloat(t.target.value);this.sim.vehicleMgr.globalSpeedMult=e,this.el.valSpeedMult.textContent=e.toFixed(1)+"x"}),this.el.modePills.forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.mode;this.sim.setScenario(e)})}),this.el.sliderActiveVehicles.addEventListener("input",t=>{const e=parseInt(t.target.value);this.sim.setActiveVehicleCount(e)}),this.el.lanePills.forEach(t=>{t.addEventListener("click",()=>{const e=parseInt(t.dataset.lanes);this.el.lanePills.forEach(n=>n.classList.remove("active")),t.classList.add("active"),this.el.valLanes.textContent=e+(e===1?" Lane":" Lanes"),this.sim.rebuildRoadLanes(e)})}),this.el.toggleAdaptiveSignal.addEventListener("change",t=>{this.sim.trafficLights.setAdaptive(t.target.checked),this.el.statSignalMode.textContent=t.target.checked?"Adaptive AI":"Fixed"}),this.el.sliderNsGreen.addEventListener("input",t=>{const e=parseInt(t.target.value);this.sim.trafficLights.nsGreenDuration=e,this.el.valNsGreen.textContent=e+"s"}),this.el.sliderEwGreen.addEventListener("input",t=>{const e=parseInt(t.target.value);this.sim.trafficLights.ewGreenDuration=e,this.el.valEwGreen.textContent=e+"s"}),this.el.sliderYellowDur.addEventListener("input",t=>{const e=parseInt(t.target.value);this.sim.trafficLights.yellowDuration=e,this.el.valYellowDur.textContent=e+"s"}),this.el.btnForcePhase.addEventListener("click",()=>{this.sim.trafficLights.setManualPhase(this.sim.trafficLights.getNextPhaseState()),this.el.statSignalMode.textContent="Manual",this.el.toggleAdaptiveSignal.checked=!1}),this.el.btnForceNsGreen.addEventListener("click",()=>this.setManualSignal(this.sim.trafficLights.STATES.NS_GREEN)),this.el.btnForceEwGreen.addEventListener("click",()=>this.setManualSignal(this.sim.trafficLights.STATES.EW_GREEN)),this.el.btnForceYellow.addEventListener("click",()=>this.setManualSignal(this.sim.trafficLights.STATES.NS_YELLOW)),this.el.btnForceAllRed.addEventListener("click",()=>this.setManualSignal(this.sim.trafficLights.STATES.ALL_RED_1)),this.el.togglePedestrians.addEventListener("change",t=>{this.sim.pedestrianMgr.setEnabled(t.target.checked)}),this.el.toggleShadows.addEventListener("change",t=>{this.sim.sceneMgr.setShadowsEnabled(t.target.checked)}),this.el.togglePaths.addEventListener("change",t=>{this.sim.vehicleMgr.setPathLinesVisible(t.target.checked)}),this.el.toggleColliders.addEventListener("change",t=>{this.sim.vehicleMgr.setCollidersVisible(t.target.checked)}),this.el.toggleParticles.addEventListener("change",t=>{this.sim.particleSystem.setEnabled(t.target.checked)}),this.el.camBtns.forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.cam;this.setCameraModeUI(e),this.sim.cameraSystem.setMode(e,this.sim.vehicleMgr.selectedVehicle)})}),this.el.vcardClose.addEventListener("click",()=>{this.el.vehicleCard.classList.add("hidden"),this.sim.vehicleMgr.selectedVehicle=null}),this.el.vcardBtnChase.addEventListener("click",()=>{this.sim.vehicleMgr.selectedVehicle&&(this.setCameraModeUI("chase"),this.sim.cameraSystem.setMode("chase",this.sim.vehicleMgr.selectedVehicle))})}setManualSignal(t){this.sim.trafficLights.setManualPhase(t),this.el.toggleAdaptiveSignal.checked=!1,this.el.statSignalMode.textContent="Manual"}showAbout(){this.sim.setSimulationActive(!1),this.el.aboutPage.classList.remove("is-hidden"),this.el.aboutPage.scrollTop=0}hideAbout(){this.el.aboutPage.classList.add("is-hidden"),this.sim.setSimulationActive(!0)}setCameraModeUI(t){this.el.camBtns.forEach(n=>n.classList.remove("active"));const e=document.querySelector('.cam-btn[data-cam="'+t+'"]');e&&e.classList.add("active"),t==="freefly"?this.el.freeflyHelper.classList.remove("hidden"):this.el.freeflyHelper.classList.add("hidden")}setScenarioUI(t){this.el.scenarioBtns.forEach(n=>n.classList.remove("active"));const e=document.querySelector('.scenario-btn[data-scenario="'+t+'"]');e&&e.classList.add("active")}setTrafficModeUI(t,e,n){this.el.modePills.forEach(r=>r.classList.remove("active"));const i=document.querySelector('.mode-pill[data-mode="'+t+'"]');i&&i.classList.add("active"),this.el.sliderActiveVehicles.min=e.min,this.el.sliderActiveVehicles.max=e.max,this.el.sliderActiveVehicles.value=n,this.el.valActiveVehicles.textContent=n+" vehicles",this.el.activeVehiclesRangeHint&&(this.el.activeVehiclesRangeHint.textContent=e.min+"–"+e.max+" vehicles")}initRaycasting(){window.addEventListener("click",t=>{if(t.target.closest(".glass-panel")||t.target.closest(".modal-dialog"))return;this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.sim.cameraSystem.camera);const e=this.sim.vehicleMgr.vehicles.map(i=>i.mesh),n=this.raycaster.intersectObjects(e,!0);if(n.length>0){let i=n[0].object;for(;i.parent&&!e.includes(i);)i=i.parent;const r=this.sim.vehicleMgr.vehicles.find(o=>o.mesh===i);r&&(this.sim.vehicleMgr.selectedVehicle=r,this.el.vehicleCard.classList.remove("hidden"))}})}update(t){this.el.fpsCounter.textContent=t+" FPS";const e=this.sim.vehicleMgr.getTelemetryStats();this.el.statVehicleCount.textContent=e.vehicleCount,this.el.statAvgSpeed.innerHTML=e.avgSpeed+" <small>km/h</small>",this.el.statFlowEfficiency.textContent=e.efficiency+"%",this.el.queueValNorth.textContent=e.queues.N,this.el.queueValSouth.textContent=e.queues.S,this.el.queueValEast.textContent=e.queues.E,this.el.queueValWest.textContent=e.queues.W,this.el.meterNorth.style.width=Math.min(100,e.queues.N*18)+"%",this.el.meterSouth.style.width=Math.min(100,e.queues.S*18)+"%",this.el.meterEast.style.width=Math.min(100,e.queues.E*18)+"%",this.el.meterWest.style.width=Math.min(100,e.queues.W*18)+"%";const n=this.sim.trafficLights.getCycleInfo(e.queues);this.el.signalPhaseBadge.textContent=n.phaseName,this.el.signalPhaseBadge.className="signal-phase-badge "+n.phaseClass,this.el.signalTimerText.textContent=n.remainingSeconds+"s",this.el.signalProgressBar.style.width=n.progressPercent+"%",this.el.signalProgressBar.style.backgroundColor=n.phaseClass==="green"?"#10b981":n.phaseClass==="yellow"?"#f59e0b":"#ef4444";const i=this.sim.vehicleMgr.selectedVehicle;i&&!i.isFinished?(this.el.vehicleCard.classList.remove("hidden"),this.el.vcardId.textContent="#"+(i.isEmergency?"AMB-911":"CAR-"+i.id),this.el.vcardBadge.textContent=i.type.toUpperCase(),this.el.vcardBadge.className="vtype-badge "+i.type,this.el.vcardSpeed.textContent=Math.round(i.currentSpeed*3.6)+" km/h",this.el.vcardAccel.textContent=(i.acceleration>=0?"+":"")+i.acceleration.toFixed(2)+" m/s²",this.el.vcardDist.textContent=i.leadDistance>200?"Clear Road":i.leadDistance.toFixed(1)+" m",this.el.vcardIntent.textContent=i.pathData.maneuver.toUpperCase()+" ("+i.pathData.direction+")"):i&&i.isFinished&&this.el.vehicleCard.classList.add("hidden")}}const ke=class ke{constructor(t){this.container=t,this.lanesPerDirection=2,this.sceneMgr=new Wp(this.container),this.cameraSystem=new qp(this.sceneMgr.camera,this.sceneMgr.renderer.domElement),this.pathGen=new Kp(this.lanesPerDirection),this.roadNetwork=new jp(this.sceneMgr.scene,this.lanesPerDirection),this.trafficLights=new Zp(this.sceneMgr.scene,this.lanesPerDirection),this.vehicleMgr=new $p(this.sceneMgr.scene,this.pathGen,this.trafficLights),this.pedestrianMgr=new Jp(this.sceneMgr.scene,this.trafficLights,this.lanesPerDirection),this.particleSystem=new Qp(this.sceneMgr.scene),this.soundMgr=new tm,this.ui=new em(this),this.clock=new Hp,this.frameCount=0,this.fpsTimer=0,this.currentFps=60,this.simulationActive=!1,this.setScenario("normal"),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}setScenario(t){if(this.ui.setScenarioUI(t),t!=="emergency"&&this.vehicleMgr.emergencyVehicle&&(this.vehicleMgr.removeVehicle(this.vehicleMgr.emergencyVehicle),this.trafficLights.setEmergency(!1),this.soundMgr.setEmergencySiren(!1)),t==="normal")this.setTrafficMode("normal",ke.VEHICLE_COUNT_RANGES.normal.default,1),this.trafficLights.setAdaptive(!1),this.trafficLights.nsGreenDuration=12,this.trafficLights.ewGreenDuration=12,this.ui.el.toggleAdaptiveSignal.checked=!1,this.ui.el.statSignalMode.textContent="Fixed",this.soundMgr.setEmergencySiren(!1);else if(t==="heavy")this.setTrafficMode("heavy",ke.VEHICLE_COUNT_RANGES.heavy.default,.9),this.trafficLights.setAdaptive(!1),this.trafficLights.nsGreenDuration=14,this.trafficLights.ewGreenDuration=14,this.ui.el.toggleAdaptiveSignal.checked=!1,this.ui.el.statSignalMode.textContent="Fixed",this.soundMgr.setEmergencySiren(!1);else if(t==="jam")this.setTrafficMode("jam",ke.VEHICLE_COUNT_RANGES.jam.default,.65),this.trafficLights.setAdaptive(!1),this.trafficLights.nsGreenDuration=7,this.trafficLights.ewGreenDuration=7,this.ui.el.toggleAdaptiveSignal.checked=!1,this.ui.el.statSignalMode.textContent="Fixed",this.soundMgr.setEmergencySiren(!1);else if(t==="emergency"){const e=this.vehicleMgr.triggerEmergencyAmbulance("N");this.soundMgr.setEmergencySiren(!0),this.ui.setCameraModeUI("chase"),this.cameraSystem.setMode("chase",e)}else t==="adaptive"&&(this.setTrafficMode("heavy",ke.VEHICLE_COUNT_RANGES.heavy.default,1),this.trafficLights.setAdaptive(!0),this.ui.el.toggleAdaptiveSignal.checked=!0,this.ui.el.statSignalMode.textContent="Adaptive AI",this.soundMgr.setEmergencySiren(!1))}setTrafficMode(t,e,n){const i=ke.VEHICLE_COUNT_RANGES[t]||ke.VEHICLE_COUNT_RANGES.normal,r=Math.max(i.min,Math.min(i.max,e));this.trafficMode=t,this.vehicleMgr.setTargetVehicleCount(r),this.vehicleMgr.globalSpeedMult=n,this.ui.setTrafficModeUI(t,i,r),this.ui.el.sliderSpeedMult.value=n,this.ui.el.valSpeedMult.textContent=n.toFixed(1)+"x"}setActiveVehicleCount(t){const e=this.trafficMode||"normal",n=ke.VEHICLE_COUNT_RANGES[e]||ke.VEHICLE_COUNT_RANGES.normal,i=Math.max(n.min,Math.min(n.max,t));this.vehicleMgr.setTargetVehicleCount(i),this.ui.el.valActiveVehicles.textContent=i+" vehicles"}setTrafficDensity(t,e){this.vehicleMgr.spawnRate=t,this.vehicleMgr.globalSpeedMult=e,this.vehicleMgr.spawnTimer=0,this.ui.el.sliderSpawnRate.value=t,this.ui.el.valSpawnRate.textContent=t+" veh/min",this.ui.el.sliderSpeedMult.value=e,this.ui.el.valSpeedMult.textContent=e.toFixed(1)+"x"}rebuildRoadLanes(t){this.lanesPerDirection=t,this.pathGen.updateLanes(t),this.roadNetwork.rebuild(t),this.trafficLights.rebuild(t),this.vehicleMgr.updateLanes(this.pathGen),this.pedestrianMgr.rebuild(t)}resetSimulation(){this.vehicleMgr.clearAllVehicles(),this.soundMgr.setEmergencySiren(!1),this.setScenario("normal")}setSimulationActive(t){this.simulationActive=t,this.clock.getDelta()}animate(){requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.1);if(!this.simulationActive){this.sceneMgr.render();return}this.frameCount++,this.fpsTimer+=t,this.fpsTimer>=.5&&(this.currentFps=Math.round(this.frameCount/this.fpsTimer),this.frameCount=0,this.fpsTimer=0);const e=this.vehicleMgr.getTelemetryStats();this.trafficLights.update(t,e.queues),this.pedestrianMgr.update(t),this.vehicleMgr.update(t,this.pedestrianMgr.pedestrians),this.particleSystem.update(t,this.vehicleMgr.emergencyVehicle,this.vehicleMgr.vehicles),this.cameraSystem.update(t),this.sceneMgr.update(t),this.ui.update(this.currentFps),this.sceneMgr.render()}};Ne(ke,"VEHICLE_COUNT_RANGES",{normal:{min:5,max:10,default:8},heavy:{min:15,max:20,default:18},jam:{min:20,max:30,default:25}});let Sr=ke;window.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("canvas-container");s&&(window.simulationApp=new Sr(s),console.log("🚀 3D Traffic Simulation & Intelligent Intersection Initialized Successfully!"))});
//# sourceMappingURL=index-D8bdk334.js.map
