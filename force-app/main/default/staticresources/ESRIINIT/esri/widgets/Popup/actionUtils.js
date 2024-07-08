// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../core/Logger ../../core/promiseUtils ./actions".split(" "),function(f,l,g,A,B,e){function w(a){const {selectedFeature:d,location:c,view:b}=a;return b?"3d"===b.type?d||c:a.get("selectedFeature.geometry")||c:null}function n(a){return a?.isAggregate&&"cluster"===a?.sourceLayer?.featureReduction?.type}function C(a,d){return p.apply(this,arguments)}function p(){p=l._asyncToGenerator(function*(a,d){if("3d"!==d?.type||!a||"esri.Graphic"!==
a.declaredClass)return!0;if((d=d.getViewForGraphic(a))&&"whenGraphicBounds"in d){let c;try{c=yield d.whenGraphicBounds(a,{useViewElevation:!0})}catch(b){}return!c||!c.boundingBox||c.boundingBox[0]===c.boundingBox[3]&&c.boundingBox[1]===c.boundingBox[4]&&c.boundingBox[2]===c.boundingBox[5]}return!0});return p.apply(this,arguments)}function x(a){return q.apply(this,arguments)}function q(){q=l._asyncToGenerator(function*(a){const {location:d,selectedFeature:c,view:b,zoomFactor:h}=a,k=w(a);if(!k)throw a=
new g("zoom-to:invalid-target-or-view","Cannot zoom to location without a target and view.",{target:k,view:b}),m.error(a),a;const D=b.scale/h,r=a.get("selectedFeature.geometry")||d,y=r&&"point"===r.type&&(yield C(c,b));e.zoomToFeature.active=!0;e.zoomToFeature.disabled=!0;try{yield a.zoomTo({target:{target:k,scale:y?D:void 0}})}catch(F){const E=new g("zoom-to:invalid-graphic","Could not zoom to the location of the graphic.",{graphic:c});m.error(E)}finally{e.zoomToFeature.active=!1,e.zoomToFeature.disabled=
!1,a.zoomToLocation=null,y&&(a.location=r)}});return q.apply(this,arguments)}function z(a){return t.apply(this,arguments)}function t(){t=l._asyncToGenerator(function*(a){const {selectedFeature:d,view:c}=a;if("2d"!==c?.type)throw a=new g("zoomToCluster:invalid-view","View must be 2d MapView.",{view:c}),m.error(a),a;if(!n(d))throw a=new g("zoomToCluster:invalid-selectedFeature","Selected feature must represent an aggregate/cluster graphic.",{selectedFeature:d}),m.error(a),a;var b=yield c.whenLayerView(d.sourceLayer);
const h=b.createQuery();h.aggregateIds=[d.getObjectId()];e.zoomToClusteredFeatures.active=!0;e.zoomToClusteredFeatures.disabled=!0;({extent:b}=yield b.queryExtent(h));yield a.zoomTo({target:b});e.zoomToClusteredFeatures.active=!1;e.zoomToClusteredFeatures.disabled=!1});return t.apply(this,arguments)}function u(){u=l._asyncToGenerator(function*(a){const {selectedFeature:d,view:c}=a;var b=yield c.whenLayerView(d.sourceLayer);const h=b.createQuery();h.aggregateIds=[d.getObjectId()];({extent:b}=yield b.queryExtent(h));
a.selectedClusterBoundaryFeature.geometry=b;c.graphics.add(a.selectedClusterBoundaryFeature)});return u.apply(this,arguments)}function v(){v=l._asyncToGenerator(function*(a){const {selectedFeature:d,view:c}=a;a=yield c.whenLayerView(d.sourceLayer);const b=a.createQuery();b.aggregateIds=[d.getObjectId()];e.browseClusteredFeatures.active=!0;e.browseClusteredFeatures.disabled=!0;({features:a}=yield a.queryFeatures(b));e.browseClusteredFeatures.active=!1;e.browseClusteredFeatures.disabled=!1;c.popup.open({features:[d].concat(a),
featureMenuOpen:!0})});return v.apply(this,arguments)}const m=A.getLogger("esri.widgets.Popup.PopupViewModel");f.browseAggregateFeatures=function(a){return v.apply(this,arguments)};f.displayClusterExtent=function(a){return u.apply(this,arguments)};f.getSelectedTarget=w;f.isClusterFeature=n;f.removeClusteredFeaturesForBrowsing=function(a){const d=a.features.filter(c=>n(c));d.length&&(a.features=d)};f.triggerAction=a=>{const {event:d,view:c}=a;({action:a}=d);var b=c&&c.popup;if(!a)return Promise.reject(new g("trigger-action:missing-arguments",
"Event has no action"));if(!b)return Promise.reject(new g("trigger-action:missing-arguments","view.popup is missing"));const {disabled:h,id:k}=a;if(!k)return Promise.reject(new g("trigger-action:invalid-action","action.id is missing"));if(h)return Promise.reject(new g("trigger-action:invalid-action","Action is disabled"));if(k===e.zoomToFeature.id)return x(b.viewModel).catch(B.throwIfNotAbortError);if(k===e.zoomToClusteredFeatures.id)return z(b.viewModel);if(k===e.browseClusteredFeatures.id)return b.featureMenuOpen=
!b.featureMenuOpen,b.viewModel.browseClusterEnabled=!b.viewModel.browseClusterEnabled,Promise.resolve();b.viewModel.browseClusterEnabled=!1;if(k===e.removeSelectedFeature.id){b.close();({selectedFeature:a}=b);if(!a)return Promise.reject(new g(`trigger-action:${e.removeSelectedFeature.id}`,"selectedFeature is required",{selectedFeature:a}));({sourceLayer:b}=a);b?b.remove(a):c.graphics.remove(a)}return Promise.resolve()};f.zoomToClusterExtent=z;f.zoomToLocation=x;Object.defineProperties(f,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});