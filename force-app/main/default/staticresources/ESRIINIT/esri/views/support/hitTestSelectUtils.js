// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe"],function(c,g,e){function d(){d=g._asyncToGenerator(function*(a,b){if("2d"===a.type)return a.hitTest(b);a=yield a.hitTest(b);if(0===a.results.length)return a;b=a.results[0];const h=e.isSome(b.distance)?1.05*b.distance:b.distance;b=a.results.findIndex(k=>k.distance>h);-1!==b&&(a.results=a.results.slice(0,b));return a});return d.apply(this,arguments)}function f(a){return e.isSome(a)&&"graphic"===a.type}c.filterGraphicHits=
function(a){return a.filter(f)};c.findFirstGraphicHit=function(a){return a.find(f)??null};c.hitTestSelectSimilarDistance=function(a,b){return d.apply(this,arguments)};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});