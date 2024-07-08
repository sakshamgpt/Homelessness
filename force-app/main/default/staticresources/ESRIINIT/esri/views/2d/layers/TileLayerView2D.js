// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
require({cache:{"esri/views/2d/layers/BitmapTileLayerView2D":function(){define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/Error ../../../core/has ../../../core/accessorSupport/decorators/subclass ../engine/BitmapTileContainer".split(" "),function(m,n,c,h,a,b,d,f,e,g){m.BitmapTileLayerView2D=k=>{k=function(r){function u(){return r.apply(this,arguments)||this}n._inheritsLoose(u,
r);var x=u.prototype;x.attach=function(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`);this._bitmapView=new g.BitmapTileContainer(this._tileInfoView);this.container.addChild(this._bitmapView)};x.detach=function(){this.container.removeChild(this._bitmapView);this._bitmapView?.removeAllChildren()};return u}(k);return k=c.__decorate([e.subclass("esri.views.2d.layers.BitmapTileLayerView2D")],k)};Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})},
"esri/views/2d/layers/LayerView2D":function(){define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Collection ../../../core/collectionUtils ../../../core/Error ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../engine/Container ../../layers/support/ClipRect ../../layers/support/Geometry ../../layers/support/Path".split(" "),
function(m,n,c,h,a,b,d,f,e,g,k,r,u,x,y){const D=h.ofType({key:"type",base:null,typeMap:{rect:u,path:y,geometry:x}});m.LayerView2DMixin=w=>{w=function(A){function E(){var p=A.apply(this,arguments)||this;p.attached=!1;p.clips=new D;p.lastUpdateId=-1;p.moving=!1;p.updateRequested=!1;p.visibleAtCurrentScale=!1;return p}n._inheritsLoose(E,A);var v=E.prototype;v.initialize=function(){const p=this.view?.spatialReferenceLocked??!0;this.view?.spatialReference&&p&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new b("layerview:spatial-reference-incompatible",
"The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new r.Container),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.handles.add([d.watch(()=>this.suspended,t=>{this.container&&(this.container.visible=!t);this.view&&!t&&this.updateRequested&&this.view.requestUpdate()},d.syncAndInitial),d.watch(()=>this.layer?.opacity??1,t=>{this.container&&(this.container.opacity=
t)},d.syncAndInitial),d.watch(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",t=>{this.container&&(this.container.blendMode=t)},d.syncAndInitial),d.watch(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,t=>{this.container&&(this.container.effect=t)},d.syncAndInitial),d.on(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},d.syncAndInitial),d.watch(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?
this.layer.effectiveScaleRange:null}),({scale:t})=>{t=t&&this.isVisibleAtScale(t);t!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",t)},d.syncAndInitial)]),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(t=>{t===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))};v.destroy=function(){this.processDetach();this.updateRequested=!1};v.processAttach=function(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&
(this.attach(),this.attached=!0,this.requestUpdate())};v.processDetach=function(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)};v.isVisibleAtScale=function(p){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const {minScale:C,maxScale:F}=t;return(0===C||p<=C)&&(0===F||p>=F)};v.requestUpdate=function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())};v.processUpdate=
function(p){this.isFulfilled()&&!this.isResolved()?this.updateRequested=!1:(this._set("updateParameters",p),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(p)))};v.hitTest=function(p,t){return Promise.resolve(null)};v.supportsSpatialReference=function(p){return!0};v.canResume=function(){return this.spatialReferenceSupported?A.prototype.canResume.call(this)?this.visibleAtCurrentScale:!1:!1};v.getSuspendInfo=function(){const p=A.prototype.getSuspendInfo.call(this),t=!this.spatialReferenceSupported,
C=this.visibleAtCurrentScale;t&&(p.spatialReferenceNotSupported=t);C&&(p.outsideScaleRange=C);return p};n._createClass(E,[{key:"spatialReferenceSupported",get:function(){const p=this.view?.spatialReference;return null==p||this.supportsSpatialReference(p)}},{key:"updating",get:function(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}}]);return E}(w);c.__decorate([f.property()],w.prototype,"attached",
void 0);c.__decorate([f.property({type:D,set(A){A=a.referenceSetter(A,this._get("clips"),D);this._set("clips",A)}})],w.prototype,"clips",void 0);c.__decorate([f.property()],w.prototype,"container",void 0);c.__decorate([f.property()],w.prototype,"moving",void 0);c.__decorate([f.property({readOnly:!0})],w.prototype,"spatialReferenceSupported",null);c.__decorate([f.property({readOnly:!0})],w.prototype,"updateParameters",void 0);c.__decorate([f.property()],w.prototype,"updateRequested",void 0);c.__decorate([f.property()],
w.prototype,"updating",null);c.__decorate([f.property()],w.prototype,"view",void 0);c.__decorate([f.property({readOnly:!0})],w.prototype,"visibleAtCurrentScale",void 0);return w=c.__decorate([k.subclass("esri.views.2d.layers.LayerView2D")],w)};Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})},"esri/views/layers/support/ClipRect":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./ClipArea".split(" "),
function(m,n,c,h,a,b,d){var f;h=f=function(e){function g(r){r=e.call(this,r)||this;r.type="rect";r.left=null;r.right=null;r.top=null;r.bottom=null;return r}m._inheritsLoose(g,e);var k=g.prototype;k.clone=function(){return new f({left:this.left,right:this.right,top:this.top,bottom:this.bottom})};k.commitVersionProperties=function(){this.commitProperty("left");this.commitProperty("right");this.commitProperty("top");this.commitProperty("bottom")};return g}(d);n.__decorate([c.property({type:[Number,String],
json:{write:!0}})],h.prototype,"left",void 0);n.__decorate([c.property({type:[Number,String],json:{write:!0}})],h.prototype,"right",void 0);n.__decorate([c.property({type:[Number,String],json:{write:!0}})],h.prototype,"top",void 0);n.__decorate([c.property({type:[Number,String],json:{write:!0}})],h.prototype,"bottom",void 0);return h=f=n.__decorate([b.subclass("esri.views.layers.support.ClipRect")],h)})},"esri/views/layers/support/ClipArea":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass".split(" "),
function(m,n,c,h,a,b,d){c=function(f){function e(){return f.apply(this,arguments)||this}m._inheritsLoose(e,f);m._createClass(e,[{key:"version",get:function(){this.commitVersionProperties();return(this._get("version")||0)+1}}]);return e}(c.JSONSupport);n.__decorate([h.property({readOnly:!0})],c.prototype,"version",null);return c=n.__decorate([d.subclass("esri.views.layers.support.ClipArea")],c)})},"esri/views/layers/support/Geometry":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/Geometry ../../../geometry/support/jsonUtils ./ClipArea ../../../geometry/Extent ../../../geometry/Polygon".split(" "),
function(m,n,c,h,a,b,d,f,e,g,k,r){var u;c={base:f,key:"type",typeMap:{extent:k,polygon:r}};g=u=function(x){function y(w){w=x.call(this,w)||this;w.type="geometry";w.geometry=null;return w}m._inheritsLoose(y,x);var D=y.prototype;D.clone=function(){return new u({geometry:this.geometry?.clone()??null})};D.commitVersionProperties=function(){this.commitProperty("geometry")};return y}(g);n.__decorate([h.property({types:c,json:{read:e.fromJSON,write:!0}})],g.prototype,"geometry",void 0);return g=u=n.__decorate([d.subclass("esri.views.layers.support.Geometry")],
g)})},"esri/views/layers/support/Path":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./ClipArea".split(" "),function(m,n,c,h,a,b,d){h=function(f){function e(g){g=f.call(this,g)||this;g.type="path";g.path=[];return g}m._inheritsLoose(e,f);e.prototype.commitVersionProperties=function(){this.commitProperty("path")};
return e}(d);n.__decorate([c.property({type:[[[Number]]],json:{write:!0}})],h.prototype,"path",void 0);return h=n.__decorate([b.subclass("esri.views.layers.support.Path")],h)})},"esri/views/2d/layers/support/imageUtils":function(){define(["exports"],function(m){function n(c){const h=document.createElement("canvas");[h.width,h.height]=c;return h}m.createBlankImage=n;m.resampleImage=function(c,h,a,b){if(a.level===b.level)return h;const d=c.tileInfo.size;var f=c.getTileResolution(a.level),e=c.getTileResolution(b.level),
g=c.getLODInfoAt(b.level),k=g.getXForColumn(b.col);b=g.getYForRow(b.row);g=c.getLODInfoAt(a.level);c=g.getXForColumn(a.col);const r=g.getYForRow(a.row);g=(h instanceof HTMLImageElement?h.naturalWidth:h.width)/d[0];a=(h instanceof HTMLImageElement?h.naturalHeight:h.height)/d[1];k=Math.round((k-c)/f*g);b=Math.round(-(b-r)/f*a);c=Math.round(e/f*d[0]*g);f=Math.round(e/f*d[1]*a);e=n(d);e.getContext("2d").drawImage(h,k,b,c,f,0,0,d[0],d[1]);return e};Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})},
"esri/views/layers/RefreshableLayerView":function(){define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Logger ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(m,n,c,h,a,b,d,f,e){return g=>{g=function(k){function r(){return k.apply(this,arguments)||this}m._inheritsLoose(r,k);r.prototype.initialize=
function(){this.handles.add(a.on(()=>this.layer,"refresh",u=>{this.doRefresh(u.dataChanged).catch(x=>{h.isAbortError(x)||c.getLogger(this.declaredClass).error(x)})}),"RefreshableLayerView")};return r}(g);n.__decorate([b.property()],g.prototype,"layer",void 0);return g=n.__decorate([e.subclass("esri.layers.mixins.RefreshableLayerView")],g)}})},"esri/views/layers/TileLayerView":function(){define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../renderers/support/clickToleranceUtils".split(" "),
function(m,n,c,h,a,b,d,f,e,g){return k=>{k=function(r){function u(){return r.apply(this,arguments)||this}m._inheritsLoose(u,r);u.prototype.fetchPopupFeatures=function(){var x=m._asyncToGenerator(function*(y,D){var w=this,{layer:A}=this;if(!y)throw new c("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:A});if("tile"!==A.type)throw new c("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:A.type});const E=this.get("view.scale");A=A.allSublayers.toArray().filter(v=>
{const p=0===v.minScale||E<=v.minScale,t=0===v.maxScale||E>=v.maxScale;return v.popupTemplate&&v.popupEnabled&&v.visible&&p&&t});return a.eachAlways(A.map(function(){var v=m._asyncToGenerator(function*(p){const t=p.createQuery();var C=h.isSome(D)?D.event:null;C=g.calculateTolerance({renderer:p.renderer,event:C});t.geometry=w.createFetchPopupFeaturesQueryGeometry(y,C);t.outFields=yield p.popupTemplate.getRequiredFields();return(yield p.queryFeatures(t)).features});return function(p){return v.apply(this,
arguments)}}())).then(v=>[].concat(...v.map(p=>p.value).filter(Boolean)))});return function(y,D){return x.apply(this,arguments)}}();return u}(k);n.__decorate([b.property()],k.prototype,"layer",void 0);return k=n.__decorate([e.subclass("esri.layers.mixins.TileLayerView")],k)}})},"esri/renderers/support/clickToleranceUtils":function(){define(["exports"],function(m){function n(a,b){return b?"xoffset"in b&&b.xoffset?Math.max(a,Math.abs(b.xoffset)):"yoffset"in b&&b.yoffset?Math.max(a,Math.abs(b.yoffset||
0)):a:a}function c(a,b){if("number"===typeof a)return a;if(a&&a.stops&&a.stops.length){a=a.stops;let d=b=0;for(let f=0;f<a.length;f++){const e=a[f].size;"number"===typeof e&&(b+=e,d++)}return b/d}return b}function h(a,b){if(!b)return a;b=b.filter(e=>"size"===e.type).map(e=>{const {maxSize:g,minSize:k}=e;return(c(g,a)+c(k,a))/2});let d=0;const f=b.length;if(0===f)return a;for(let e=0;e<f;e++)d+=b[e];return Math.max(Math.floor(d/f),a)}m.calculateTolerance=function(a){const b=a&&a.renderer;a="touch"===
(a&&a.event&&a.event.pointerType)?9:6;if(!b)return a;a="visualVariables"in b?h(a,b.visualVariables):a;if("simple"===b.type)return n(a,b.symbol);if("unique-value"===b.type){let d=a;b.uniqueValueInfos?.forEach(f=>{d=n(d,f.symbol)});return d}if("class-breaks"===b.type){let d=a;b.classBreakInfos.forEach(f=>{d=n(d,f.symbol)});return d}return a};Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})},"esri/views/support/drapedUtils":function(){define("exports ../../geometry ../../core/maybe ../../core/unitUtils ../../renderers/support/clickToleranceUtils ../../geometry/Extent".split(" "),
function(m,n,c,h,a,b){function d(e,g,k,r=new b){let u;if("2d"===k.type)u=g*k.resolution;else if("3d"===k.type){var x=k.overlayPixelSizeInMapUnits(e),y=k.basemapSpatialReference;u=c.isSome(y)&&!y.equals(k.spatialReference)?h.getMetersPerUnitForSR(y)/h.getMetersPerUnitForSR(k.spatialReference):g*x}g=e.x-u;x=e.y-u;y=e.x+u;e=e.y+u;({spatialReference:k}=k);r.xmin=Math.min(g,y);r.ymin=Math.min(x,e);r.xmax=Math.max(g,y);r.ymax=Math.max(x,e);r.spatialReference=k;return r}const f=new b;m.createQueryGeometry=
d;m.intersectsDrapedGeometry=function(e,g,k){e=k.toMap(e);if(c.isNone(e))return!1;const r=a.calculateTolerance();return d(e,r,k,f).intersects(g)};Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})},"*noref":1}});
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/spatialReferenceUtils ./BitmapTileLayerView2D ./LayerView2D ./support/imageUtils ../tiling/TileInfoView ../tiling/TileKey ../tiling/TileQueue ../tiling/TileStrategy ../../layers/LayerView ../../layers/RefreshableLayerView ../../layers/TileLayerView ../../support/drapedUtils".split(" "),function(m,
n,c,h,a,b,d,f,e,g,k,r,u,x,y,D,w,A,E,v,p){const t=[0,0];d=function(C){function F(){var q=C.apply(this,arguments)||this;q._tileStrategy=null;q._fetchQueue=null;q.layer=null;return q}m._inheritsLoose(F,C);var B=F.prototype;B.update=function(q){this._fetchQueue.pause();this._fetchQueue.state=q.state;this._tileStrategy.update(q);this._fetchQueue.resume()};B.attach=function(){const q="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new x(this.layer.tileInfo,this.layer.fullExtent);
this._fetchQueue=new D({tileInfoView:this._tileInfoView,concurrency:q&&10*q.length||10,process:(l,z)=>this.fetchTile(l,z)});this._tileStrategy=new w({cachePolicy:"keep",resampling:this.resampling,acquireTile:l=>this.acquireTile(l),releaseTile:l=>this.releaseTile(l),tileInfoView:this._tileInfoView});this.requestUpdate();this.handles.add(a.watch(()=>this.resampling,()=>{this.doRefresh()}));C.prototype.attach.call(this)};B.detach=function(){C.prototype.detach.call(this);this._tileStrategy.destroy();
this._fetchQueue.clear();this.container.removeAllChildren();this._fetchQueue=this._tileStrategy=this._tileInfoView=null};B.moveStart=function(){this.requestUpdate()};B.viewChange=function(){this.requestUpdate()};B.moveEnd=function(){this.requestUpdate()};B.supportsSpatialReference=function(q){return g.equals(this.layer.tileInfo?.spatialReference,q)};B.createFetchPopupFeaturesQueryGeometry=function(q,l){return p.createQueryGeometry(q,l,this.view)};B.doRefresh=function(){var q=m._asyncToGenerator(function*(){!this.attached||
this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(l=>this._enqueueTileFetch(l)))});return function(){return q.apply(this,arguments)}}();B.isUpdating=function(){return this._fetchQueue?.updating??!1};B.acquireTile=function(q){q=this._bitmapView.createTile(q);const l=q.bitmap;[l.x,l.y]=this._tileInfoView.getTileCoords(t,q.key);l.resolution=this._tileInfoView.getTileResolution(q.key);[l.width,l.height]=this._tileInfoView.tileInfo.size;this._enqueueTileFetch(q);
this._bitmapView.addChild(q);this.requestUpdate();return q};B.releaseTile=function(q){this._fetchQueue.abort(q.key.id);this._bitmapView.removeChild(q);q.once("detach",()=>q.destroy());this.requestUpdate()};B.fetchTile=function(){var q=m._asyncToGenerator(function*(l,z={}){var G="tilemapCache"in this.layer?this.layer.tilemapCache:null;const {signal:I,resamplingLevel:K=0}=z;if(!G)try{return yield this._fetchImage(l,I)}catch(H){if(!h.isAbortError(H)&&!this.resampling)return u.createBlankImage(this._tileInfoView.tileInfo.size);
if(3>K&&(G=this._tileInfoView.getTileParentId(l.id)))return G=new y(G),z=yield this.fetchTile(G,{...z,resamplingLevel:K+1}),u.resampleImage(this._tileInfoView,z,G,l);throw H;}z=new y(0,0,0,0);let J;try{yield G.fetchAvailabilityUpsample(l.level,l.row,l.col,z,{signal:I});if(z.level!==l.level&&!this.resampling)return u.createBlankImage(this._tileInfoView.tileInfo.size);J=yield this._fetchImage(z,I)}catch(H){if(h.isAbortError(H))throw H;J=yield this._fetchImage(l,I)}return this.resampling?u.resampleImage(this._tileInfoView,
J,z,l):J});return function(l){return q.apply(this,arguments)}}();B._enqueueTileFetch=function(){var q=m._asyncToGenerator(function*(l){if(!this._fetchQueue.has(l.key.id)){try{const z=yield this._fetchQueue.push(l.key);l.bitmap.source=z;l.bitmap.width=this._tileInfoView.tileInfo.size[0];l.bitmap.height=this._tileInfoView.tileInfo.size[1];l.once("attach",()=>this.requestUpdate())}catch(z){h.isAbortError(z)||c.getLogger(this.declaredClass).error(z)}this.requestUpdate()}});return function(l){return q.apply(this,
arguments)}}();B._fetchImage=function(){var q=m._asyncToGenerator(function*(l,z){return this.layer.fetchImageBitmapTile(l.level,l.row,l.col,{signal:z})});return function(l,z){return q.apply(this,arguments)}}();m._createClass(F,[{key:"resampling",get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling}}]);return F}(v(E(k.BitmapTileLayerView2D(r.LayerView2DMixin(A)))));n.__decorate([b.property()],d.prototype,"_fetchQueue",void 0);n.__decorate([b.property()],d.prototype,"resampling",
null);return d=n.__decorate([e.subclass("esri.views.2d.layers.TileLayerView2D")],d)});