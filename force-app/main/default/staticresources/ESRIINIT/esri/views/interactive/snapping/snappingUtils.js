// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../../../chunks/vec3","../../../chunks/vec3f64","../../../support/elevationInfoUtils"],function(d,h,m,n,k){function p(a,b){const c=a.x-b.x;a=a.y-b.y;return c*c+a*a}function l(a,b,c,f){const {coordinateHelper:e,elevationInfo:g}=c;if(!e.hasZ()||h.isNone(b)||"3d"!==b.type||h.isNone(a)||k.elevationInfoLikeEquals(g,f))return a;b=k.getConvertedElevationFromVector(b,a,e.spatialReference,g,f);a=e.clone(a);a[2]=b;return a}const r=n.create(),q=n.create();d.LineSegmentHintType=
void 0;(function(a){a[a.TARGET=0]="TARGET";a[a.REFERENCE=1]="REFERENCE";a[a.REFERENCE_EXTENSION=2]="REFERENCE_EXTENSION"})(d.LineSegmentHintType||(d.LineSegmentHintType={}));d.convertPointElevation=l;d.editEdgeToSnappingEdge=function(a,b,c,f=k.absoluteHeightElevationInfo){return{left:l(a.leftVertex.pos,b,c,f),right:l(a.rightVertex.pos,b,c,f)}};d.makeFilter=function(a){return a.createQuery()};d.makeSnappingQuery=function(a,b){return{point:a.coordinateHelper.vectorToPoint(a.point).toJSON(),distance:a.distance,
types:a.types,query:h.isSome(b)?b.toJSON():{where:"1\x3d1"}}};d.objectEqual=function(a,b){const c=a.length===b.length&&a[0]===b[0]&&a[1]===b[1];switch(a.length){case 2:return c;case 3:return c&&a[2]===b[2];case 4:return c&&a[2]===b[2]&&a[3]===b[3]}return!1};d.screenDistance=function(a,b){return Math.sqrt(p(a,b))};d.sortCandidatesInPlace=function(a,b,c){const f=c.toXYZ(a,r);b.sort((e,g)=>{e=c.toXYZ(e.targetPoint,q);e=m.squaredDistance(e,f);g=c.toXYZ(g.targetPoint,q);g=m.squaredDistance(g,f);return e-
g})};d.squaredScreenDistance=p;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});