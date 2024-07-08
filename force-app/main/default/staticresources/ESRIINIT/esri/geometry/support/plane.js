// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../core/mathUtils ../../core/maybe ../../chunks/vec3 ../../chunks/vec3f64 ../../chunks/sphere ./vector ./vectorStacks ../../views/3d/support/mathUtils".split(" "),function(e,J,K,f,t,C,y,m,L){function z(a=q){return[a[0],a[1],a[2],a[3]]}function D(a,b){return A(b[0],b[1],b[2],b[3],a)}function A(a,b,c,d,h=z()){h[0]=a;h[1]=b;h[2]=c;h[3]=d;return h}function E(a,b,c){var d=b[0]*b[0]+b[1]*b[1]+b[2]*b[2];d=1E-5<Math.abs(d-1)&&1E-12<d?1/Math.sqrt(d):1;c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;
c[3]=-(c[0]*a[0]+c[1]*a[1]+c[2]*a[2]);return c}function F(a,b,c,d=z()){var h=c[0]-b[0],g=c[1]-b[1],k=c[2]-b[2];c=a[0]-b[0];const G=a[1]-b[1],H=a[2]-b[2];b=g*H-k*G;k=k*c-h*H;h=h*G-g*c;g=b*b+k*k+h*h;g=1E-5<Math.abs(g-1)&&1E-12<g?1/Math.sqrt(g):1;d[0]=b*g;d[1]=k*g;d[2]=h*g;d[3]=-(d[0]*a[0]+d[1]*a[1]+d[2]*a[2]);return d}function B(a,b,c,d,h){if(3>a.count)return!1;a.getVec(c,u);let g=d,k=!1;for(;g<a.count-1&&!k;)a.getVec(g,r),g++,k=!f.exactEquals(u,r);if(!k)return!1;g=Math.max(g,h);for(k=!1;g<a.count&&
!k;)a.getVec(g,p),g++,f.subtract(v,u,r),f.normalize(v,v),f.subtract(w,r,p),f.normalize(w,w),k=!f.exactEquals(u,p)&&!f.exactEquals(r,p)&&.99619469809>Math.abs(f.dot(v,w));if(!k)return 0===c&&1===d&&2===h?!1:B(a,b,0,1,2);F(u,r,p,b);return!0}function I(a,b,c){a=f.scale(m.sv3d.get(),a,f.dot(a,b));f.subtract(c,b,a);return c}function n(a,b){return f.dot(a,b)+a[3]}function x(a,b,c,d,h){const g=f.dot(a,c);if(0===g)return!1;a=-(f.dot(a,b)+a[3])/g;d&l.CLAMP&&(a=J.clamp(a,0,1));if(!(d&l.INFINITE_MIN)&&0>a||
!(d&l.INFINITE_MAX)&&1<a)return!1;f.add(h,b,f.scale(h,c,a));return!0}const u=t.create(),r=t.create(),p=t.create(),v=t.create(),w=t.create(),q=[0,0,1,0];var l;(function(a){a[a.NONE=0]="NONE";a[a.CLAMP=1]="CLAMP";a[a.INFINITE_MIN=4]="INFINITE_MIN";a[a.INFINITE_MAX=8]="INFINITE_MAX"})(l||(l={}));const M=l.INFINITE_MIN|l.INFINITE_MAX,N=l.INFINITE_MAX;e.UP=q;e.clip=function(a,b){const c=f.dot(a,b.ray.direction);a=-n(a,b.ray.origin);if(0>a&&0<=c)return!1;if(-1E-6<c&&1E-6>c)return 0<a;if((0>a||0>c)&&!(0>
a&&0>c))return!0;a/=c;0<c?a<b.c1&&(b.c1=a):a>b.c0&&(b.c0=a);return b.c0<=b.c1};e.clipInfinite=function(a,b){const c=f.dot(a,b.ray.direction);a=-n(a,b.ray.origin);if(-1E-6<c&&1E-6>c)return 0<a;a/=c;0<c?a<b.c1&&(b.c1=a):a>b.c0&&(b.c0=a);return b.c0<=b.c1};e.copy=D;e.create=z;e.distance=function(a,b){return Math.abs(n(a,b))};e.fromManyPoints=function(a,b){return B(a,b,0,1,2)};e.fromManyPointsSampleAt=B;e.fromNormalAndOffset=function(a,b,c){f.copy(c,a);c[3]=b;return c};e.fromPoints=F;e.fromPositionAndNormal=
E;e.fromValues=A;e.fromVectorsAndPoint=function(a,b,c,d){f.cross(p,b,a);return E(c,p,d)};e.intersectLine=function(a,b,c,d){c=f.subtract(m.sv3d.get(),c,b);return x(a,b,c,M,d)};e.intersectLineSegment=function(a,b,c){return x(a,b.origin,b.vector,l.NONE,c)};e.intersectLineSegmentClamp=function(a,b,c){return x(a,b.origin,b.vector,l.CLAMP,c)};e.intersectRay=function(a,b,c){return K.isSome(b)?x(a,b.origin,b.direction,N,c):!1};e.isPointInside=function(a,b){return 0<=n(a,b)};e.isPointOutside=function(a,b){return 0>
n(a,b)};e.isSphereFullyInside=function(a,b){return 0<=n(a,C.getCenter(b))-b[3]};e.isSphereFullyOutside=function(a,b){return 0>n(a,C.getCenter(b))+b[3]};e.negate=function(a,b){b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=-a[3];return b};e.normal=function(a){return a};e.projectPoint=function(a,b,c){const d=f.scale(m.sv3d.get(),a,-a[3]);b=f.subtract(m.sv3d.get(),b,d);a=I(a,b,m.sv3d.get());f.add(c,a,d);return c};e.projectPointLocal=function(a,b,c,d){var h=m.sv3d.get(),g=m.sv3d.get();L.tangentFrame(a,h,g);b=
f.subtract(m.sv3d.get(),c,b);h=y.projectPointSignedLength(h,b);g=y.projectPointSignedLength(g,b);a=y.projectPointSignedLength(a,b);return f.set(d,h,g,a)};e.projectVector=I;e.setOffsetFromPoint=function(a,b,c){b!==a&&D(a,b);a[3]=-f.dot(a,c);return a};e.signedDistance=n;e.wrap=function(a=q[0],b=q[1],c=q[2],d=q[3]){return A(a,b,c,d,m.sv4d.get())};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});