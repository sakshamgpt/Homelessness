// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/Evented ../../core/Handles ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./ListItem ./support/layerListUtils".split(" "),function(t,l,g,x,y,h,m,A,B,z,u,q){const v=g.ofType(u);g=function(w){function p(a){a=w.call(this,a)||this;a._handles=new y;a.checkPublishStatusEnabled=
!1;a.listItemCreatedFunction=null;a.operationalItems=new v;a.view=null;return a}t._inheritsLoose(p,w);var d=p.prototype;d.initialize=function(){this._handles.add([h.watch(()=>[this.view,this.view?.ready],()=>this._viewHandles(),h.initial),h.watch(()=>[this.listItemCreatedFunction,this.checkPublishStatusEnabled],()=>this._recompileList())],"view")};d.destroy=function(){this._handles.destroy();this.view=this._handles=null;this.operationalItems.removeAll()};d.triggerAction=function(a,b){a&&!a.disabled&&
this.emit("trigger-action",{action:a,item:b})};d.moveListItem=function(a,b,c,e){const f=a?.layer;if(f){var k=this.view?.map?.layers,r=b?q.getItemLayers(b):k;k=c?q.getItemLayers(c):k;if(r&&k){var {operationalItems:n}=this;b=b?.children||n;n=c?.children||n;e=k.length-e;a.parent=c||null;b.includes(a)&&b.remove(a);r.includes(f)&&r.remove(f);n.includes(a)||n.add(a,e);k.includes(f)||k.add(f,e)}}};d._createLayerViewHandles=function(a){const {_handles:b}=this;b.remove("layer-views");this._compileList();a&&
b.add(a.on("change",()=>this._compileList()),"layer-views")};d._createMapLayerHandles=function(a){const {_handles:b}=this;b.remove("map-layers");this._compileList();a&&b.add(a.on("change",()=>this._compileList()),"map-layers")};d._createListItem=function(a){const {view:b,listItemCreatedFunction:c,checkPublishStatusEnabled:e}=this;return new u({checkPublishStatusEnabled:e,layer:a,listItemCreatedFunction:c,view:b})};d._removeAllItems=function(){const {_handles:a,operationalItems:b}=this;b.forEach(c=>
{a.remove(`${"children"}-${c.uid}`)});b.removeAll()};d._getViewableLayers=function(a){if(a)return a.filter(b=>"hide"!==q.findLayerListMode(b))};d._watchLayersListMode=function(a){const {_handles:b}=this;b.remove("layer-list-mode");a&&a.forEach(c=>{"listMode"in c&&b.add(h.watch(()=>c.listMode,()=>this._compileList()),"layer-list-mode")})};d._compileList=function(){var a=this.get("view.map.layers");this._watchLayersListMode(a);(a=this._getViewableLayers(a))&&a.length?(this._createNewItems(a),this._removeItems(a),
this._sortItems(a)):this._removeAllItems()};d._createNewItems=function(a){const {operationalItems:b}=this;a.forEach(c=>{b.find(e=>e.layer===c)||b.add(this._createListItem(c))})};d._removeItems=function(a){const {_handles:b,operationalItems:c}=this,e=[];c.forEach(f=>{f&&a&&a.includes(f.layer)||(b.remove(`${"children"}-${f.uid}`),e.push(f))});c.removeMany(e)};d._sortItems=function(a){const {operationalItems:b}=this;b.sort((c,e)=>{c=a.indexOf(c.layer);e=a.indexOf(e.layer);return c>e?-1:c<e?1:0})};d._recompileList=
function(){this._removeAllItems();this._compileList()};d._viewHandles=function(){const {_handles:a,view:b}=this;a.remove(["map-layers","layer-views","view-layers"]);this._compileList();b&&b.ready&&a.add([h.watch(()=>this.view?.map?.allLayers,c=>this._createMapLayerHandles(c),h.initial),h.watch(()=>this.view?.allLayerViews,c=>this._createLayerViewHandles(c),h.initial)],"view-layers")};t._createClass(p,[{key:"state",get:function(){const a=this.get("view");return this.get("view.ready")?"ready":a?"loading":
"disabled"}}]);return p}(x.EventedAccessor);l.__decorate([m.property()],g.prototype,"checkPublishStatusEnabled",void 0);l.__decorate([m.property()],g.prototype,"listItemCreatedFunction",void 0);l.__decorate([m.property({type:v})],g.prototype,"operationalItems",void 0);l.__decorate([m.property({readOnly:!0})],g.prototype,"state",null);l.__decorate([m.property()],g.prototype,"view",void 0);return g=l.__decorate([z.subclass("esri.widgets.LayerList.LayerListViewModel")],g)});