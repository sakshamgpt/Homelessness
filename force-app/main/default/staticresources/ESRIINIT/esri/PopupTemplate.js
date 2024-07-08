// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("./chunks/_rollupPluginBabelHelpers ./chunks/tslib.es6 ./core/Clonable ./core/Collection ./core/JSONSupport ./core/lang ./core/Logger ./core/promiseUtils ./core/accessorSupport/decorators/property ./core/accessorSupport/decorators/cast ./core/accessorSupport/decorators/reader ./core/accessorSupport/decorators/subclass ./core/accessorSupport/decorators/writer ./core/accessorSupport/ensureType ./layers/support/fieldUtils ./popup/content ./popup/ExpressionInfo ./popup/FieldInfo ./popup/LayerOptions ./popup/RelatedRecordsInfo ./popup/content/support/mediaInfoTypes ./support/actions/ActionBase ./support/actions/ActionButton ./support/actions/ActionToggle ./popup/content/MediaContent ./popup/content/TextContent ./popup/content/AttachmentsContent ./popup/content/FieldsContent ./popup/content/ExpressionContent ./popup/content/RelationshipContent ./popup/content/Content ./popup/content/CustomContent".split(" "),
function(p,k,h,r,E,A,t,F,m,G,H,I,q,J,B,K,L,M,N,O,P,Q,R,S,u,v,w,x,C,y,T,U){const V=t.getLogger("esri.PopupTemplate");t=r.ofType({key:"type",defaultKeyValue:"button",base:Q,typeMap:{button:R,toggle:S}});const W={base:T,key:"type",typeMap:{media:u,custom:U,text:v,attachments:w,fields:x,expression:C,relationship:y}},X="attachments fields media text expression relationship".split(" ");h=function(D){function z(){var a=D.apply(this,arguments)||this;a.actions=null;a.content="";a.expressionInfos=null;a.fieldInfos=
null;a.layerOptions=null;a.lastEditInfoEnabled=!0;a.outFields=null;a.overwriteActions=!1;a.returnGeometry=!1;a.title="";return a}p._inheritsLoose(z,D);var f=z.prototype;f.castContent=function(a){if(Array.isArray(a))return a.map(b=>J.ensureOneOfType(W,b));if("string"===typeof a||"function"===typeof a||a instanceof HTMLElement||F.isPromiseLike(a))return a;V.error("content error","unsupported content value",{value:a});return null};f.readContent=function(a,b){({popupElements:a}=b);return Array.isArray(a)&&
0<a.length?this._readPopupInfoElements(b.description,b.mediaInfos,a):this._readPopupInfo(b)};f.writeContent=function(a,b,c,d){"string"===typeof a?b.description=a:Array.isArray(a)&&(b.popupElements=a.filter(e=>X.includes(e.type)).map(e=>e&&e.toJSON(d)),b.popupElements.forEach(e=>{"attachments"===e.type?this._writeAttachmentContent(b):"media"===e.type?this._writeMediaContent(e,b):"text"===e.type?this._writeTextContent(e,b):"relationship"===e.type&&this._writeRelationshipContent(e,b)}))};f.writeFieldInfos=
function(a,b,c,d){({content:c}=this);c=Array.isArray(c)?c:null;if(a){const e=c?c.filter(l=>"fields"===l.type):[],g=e.length&&e.every(l=>l.fieldInfos?.length);b.fieldInfos=a.filter(Boolean).map(l=>{l=l.toJSON(d);g&&(l.visible=!1);return l})}if(c)for(const e of c)"fields"===e.type&&this._writeFieldsContent(e,b)};f.writeLayerOptions=function(a,b,c,d){b[c]=!a||null===a.showNoDataRecords&&null===a.returnTopmostRaster?null:a.toJSON(d)};f.writeTitle=function(a,b){b.title=a||""};f.collectRequiredFields=function(){var a=
p._asyncToGenerator(function*(b,c){const d=this.expressionInfos||[];yield this._collectExpressionInfoFields(b,c,[...d,...this._getContentExpressionInfos(this.content,d)]);B.collectFields(b,c,[...(this.outFields||[]),...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])});return function(b,c){return a.apply(this,arguments)}}();f.getRequiredFields=function(){var a=p._asyncToGenerator(function*(b){const c=new Set;yield this.collectRequiredFields(c,
b);return[...c].sort()});return function(b){return a.apply(this,arguments)}}();f._writeFieldsContent=function(a,b){Array.isArray(a.fieldInfos)&&a.fieldInfos.length&&(a=A.clone(a.fieldInfos),Array.isArray(b.fieldInfos)?a.forEach(c=>{const d=b.fieldInfos.find(e=>e.fieldName.toLowerCase()===c.fieldName.toLowerCase());d?d.visible=!0:b.fieldInfos.push(c)}):b.fieldInfos=a)};f._writeAttachmentContent=function(a){a.showAttachments||(a.showAttachments=!0)};f._writeRelationshipContent=function(a,b){var c=a.orderByFields?.map(d=>
this._toFieldOrderJSON(d,a.relationshipId))||[];c=[...(b.relatedRecordsInfo?.orderByFields||[]),...c];b.relatedRecordsInfo={showRelatedRecords:!0,...(c?.length&&{orderByFields:c})}};f._writeTextContent=function(a,b){!b.description&&a.text&&(b.description=a.text)};f._writeMediaContent=function(a,b){Array.isArray(a.mediaInfos)&&a.mediaInfos.length&&(a=A.clone(a.mediaInfos),Array.isArray(b.mediaInfos)?b.mediaInfos=[...b.mediaInfos,...a]:b.mediaInfos=a)};f._readPopupInfoElements=function(a,b,c){var d=
!1,e=!1;return c.map(g=>{if("media"===g.type)return g.mediaInfos||!b||e||(g.mediaInfos=b,e=!0),u.fromJSON(g);if("text"===g.type)return g.text||!a||d||(g.text=a,d=!0),v.fromJSON(g);if("attachments"===g.type)return w.fromJSON(g);if("fields"===g.type)return x.fromJSON(g);if("expression"===g.type)return C.fromJSON(g);if("relationship"===g.type)return y.fromJSON(g)}).filter(Boolean)};f._toRelationshipContent=function(a){const {field:b,order:c}=a;if(!b?.startsWith("relationships/"))return null;var d=b.replace("relationships/",
"").split("/");if(2!==d.length)return null;a=parseInt(d[0],10);d=d[1];return"number"===typeof a&&d?y.fromJSON({relationshipId:a,orderByFields:[{field:d,order:c}]}):null};f._toFieldOrderJSON=function(a,b){const {order:c,field:d}=a;return{field:`${"relationships/"}${b}/${d}`,order:c}};f._readPopupInfo=function({description:a,mediaInfos:b,showAttachments:c,relatedRecordsInfo:d={showRelatedRecords:!1}}){const e=[];a?e.push(new v({text:a})):e.push(new x);Array.isArray(b)&&b.length&&e.push(u.fromJSON({mediaInfos:b}));
c&&e.push(w.fromJSON({displayType:"auto"}));const {showRelatedRecords:g,orderByFields:l}=d;g&&l?.length&&l.forEach(n=>{(n=this._toRelationshipContent(n))&&e.push(n)});return e.length?e:a};f._getContentElementFields=function(a){var b=a?.type;return"attachments"===b?[...this._extractFieldNames(a.title),...this._extractFieldNames(a.description)]:"custom"===b?a.outFields||[]:"fields"===b?[...this._extractFieldNames(a.title),...this._extractFieldNames(a.description),...this._getFieldInfoFields(a.fieldInfos??
this.fieldInfos)]:"media"===b?(b=a.mediaInfos||[],[...this._extractFieldNames(a.title),...this._extractFieldNames(a.description),...b.reduce((c,d)=>[...c,...this._getMediaInfoFields(d)],[])]):"text"===b?this._extractFieldNames(a.text):[]};f._getMediaInfoFields=function(a){const {caption:b,title:c,value:d}=a,{fields:e,normalizeField:g,tooltipField:l,sourceURL:n,linkURL:Y}=d||{};a=[...this._extractFieldNames(c),...this._extractFieldNames(b),...this._extractFieldNames(n),...this._extractFieldNames(Y),
...(e??[])];g&&a.push(g);l&&a.push(l);return a};f._getContentExpressionInfos=function(a,b){return Array.isArray(a)?a.reduce((c,d)=>[...c,...("expression"===d.type&&d.expressionInfo?[d.expressionInfo]:[])],b):[]};f._getContentFields=function(a){return"string"===typeof a?this._extractFieldNames(a):Array.isArray(a)?a.reduce((b,c)=>[...b,...this._getContentElementFields(c)],[]):[]};f._collectExpressionInfoFields=function(){var a=p._asyncToGenerator(function*(b,c,d){d&&(yield Promise.all(d.map(e=>B.collectArcadeFieldNames(b,
c,e.expression))))});return function(b,c,d){return a.apply(this,arguments)}}();f._getFieldInfoFields=function(a){return a?a.filter(b=>"undefined"===typeof b.visible?!0:!!b.visible).map(b=>b.fieldName).filter(b=>!b.startsWith("relationships/")&&!b.startsWith("expression/")):[]};f._getActionsFields=function(a){return a?a.toArray().reduce((b,c)=>[...b,...this._getActionFields(c)],[]):[]};f._getActionFields=function(a){const {className:b,title:c,type:d}=a;a="button"===d||"toggle"===d?a.image:"";return[...this._extractFieldNames(c),
...this._extractFieldNames(b),...this._extractFieldNames(a)]};f._getTitleFields=function(a){return"string"===typeof a?this._extractFieldNames(a):[]};f._extractFieldNames=function(a){if(!a||"string"!==typeof a)return[];a=a.match(/{[^}]*}/g);if(!a)return[];const b=/\{(\w+):.+\}/;return(a=a.filter(c=>!(0===c.indexOf("{relationships/")||0===c.indexOf("{expression/"))).map(c=>c.replace(b,"{$1}")))?a.map(c=>c.slice(1,-1)):[]};return z}(h.ClonableMixin(E.JSONSupport));k.__decorate([m.property({type:t})],
h.prototype,"actions",void 0);k.__decorate([m.property()],h.prototype,"content",void 0);k.__decorate([G.cast("content")],h.prototype,"castContent",null);k.__decorate([H.reader("content","description fieldInfos popupElements mediaInfos showAttachments relatedRecordsInfo".split(" "))],h.prototype,"readContent",null);k.__decorate([q.writer("content",{popupElements:{type:r.ofType(K.persistableTypes)},showAttachments:{type:Boolean},mediaInfos:{type:r.ofType(P.types)},description:{type:String},relatedRecordsInfo:{type:O}})],
h.prototype,"writeContent",null);k.__decorate([m.property({type:[L],json:{write:!0}})],h.prototype,"expressionInfos",void 0);k.__decorate([m.property({type:[M]})],h.prototype,"fieldInfos",void 0);k.__decorate([q.writer("fieldInfos")],h.prototype,"writeFieldInfos",null);k.__decorate([m.property({type:N})],h.prototype,"layerOptions",void 0);k.__decorate([q.writer("layerOptions")],h.prototype,"writeLayerOptions",null);k.__decorate([m.property({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},
default:!0}})],h.prototype,"lastEditInfoEnabled",void 0);k.__decorate([m.property()],h.prototype,"outFields",void 0);k.__decorate([m.property()],h.prototype,"overwriteActions",void 0);k.__decorate([m.property()],h.prototype,"returnGeometry",void 0);k.__decorate([m.property({json:{type:String}})],h.prototype,"title",void 0);k.__decorate([q.writer("title")],h.prototype,"writeTitle",null);return h=k.__decorate([I.subclass("esri.PopupTemplate")],h)});