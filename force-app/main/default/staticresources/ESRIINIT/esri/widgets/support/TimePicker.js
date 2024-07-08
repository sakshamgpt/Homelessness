// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../intl ../../core/events ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../Widget ./TimePickerViewModel ./widgetUtils ./decorators/messageBundle ./jsxFactory ../../chunks/datetime ../../intl/date ../../intl/locale".split(" "),function(t,m,h,B,r,G,H,C,D,u,I,E,v,k,n,w){const p={hour:"numeric",minute:"numeric"},F=["ArrowDown",
"ArrowLeft","ArrowRight","ArrowUp","Tab"];h=function(x){function q(a,b){a=x.call(this,a,b)||this;a._activeTime=null;a.messages=null;a.viewModel=new u;return a}t._inheritsLoose(q,x);var e=q.prototype;e.render=function(){const a=this._activeTime||this.viewModel.value;return v.tsx("div",{class:"esri-time-picker esri-widget"},v.tsx("input",{afterUpdate:this._handleInputUpdate,"aria-label":this.messages.inputTitle,bind:this,class:this.classes("esri-time-picker__input","esri-input"),onblur:this._handleInputBlur,
onfocus:this._handleInputFocus,onkeydown:this._handleInputKeydown,oninput:this._handleInputKeydown,onclick:this._handleInputClick,onpaste:this._handleInputPaste,onwheel:this._handleInputWheel,value:n.formatDate(a.valueOf(),p)}))};e._handleInputBlur=function(){this._activeTime.isValid&&(this.viewModel.value=this._activeTime.toJSDate());this._activePart=this._activeTime=null};e._handleInputUpdate=function(a){this._selectPart(a,this._activePart)};e._selectPart=function(a,b){var c=this._activeTime;if(c){c=
n.formatDate(c.valueOf(),p);var f=c.indexOf(":");if("hours"===b)a.setSelectionRange(0,f);else{var d=f+1;f=d+2;"minutes"===b?a.setSelectionRange(d,f):(c=c.length,"meridiem"===b&&a.setSelectionRange(f+1,c))}}};e._handleInputFocus=function(a){this._activePart="hours";this._activeTime=k.DateTime.fromJSDate(this.viewModel.value).startOf("minute");this._selectPart(a.target,"hours")};e._caretIndexToPartName=function(a){var b=this._activeTime.toFormat("t",{locale:w.getLocale(),numberingSystem:"latn"});const c=
b.indexOf(":");b=b.indexOf(" ");return a<=c?"hours":a>c&&a<=b?"minutes":"meridiem"};e._handleInputKeydown=function(a){const {ctrlKey:b,metaKey:c,shiftKey:f}=a;var d=B.eventKey(a),l=this._activeTime,g=this._activePart;const y=/\d/.test(d),z=/^a|p$/i.test(d),A=c||b;if(F.includes(d)||y||"meridiem"===g&&z&&!A){if("ArrowLeft"===d)this._activePart=this._prevPart();else if("ArrowRight"===d)this._activePart=this._nextPart();else if("Tab"===d){g=f?this._prevPart():this._nextPart();if(g===this._activePart)return;
this._activePart=g}else"ArrowUp"===d?this._shift("up",g):"ArrowDown"===d?this._shift("down",g):y?this._setTime(l,g,Number(d)):z&&(d=d.toLowerCase(),l=l.hour,("a"===d&&12<=l||"p"===d&&12>l)&&this._shift("up",g));a.preventDefault();a.stopImmediatePropagation()}else A||(a.preventDefault(),a.stopImmediatePropagation())};e._handleInputClick=function(a){a=a.target;this._activePart=null;this.renderNow();this._activePart=this._caretIndexToPartName(a.selectionStart)};e._getOrderedParts=function(){return n.formatDate(this._activeTime.valueOf(),
p).includes(" ")?["hours","minutes","meridiem"]:["hours","minutes"]};e._prevPart=function(){const a=this._getOrderedParts(),b=a.indexOf(this._activePart)-1;return a[Math.max(b,0)]};e._nextPart=function(){const a=this._getOrderedParts(),b=a.indexOf(this._activePart)+1;return a[Math.min(b,a.length-1)]};e._setTime=function(a,b,c){if("hours"===b){b=n.formatDate(a.valueOf(),p).includes(" ")?12:24;var f=`${a.hour%b}`;const d=Number(`${f}${c}`);2===f.length||d>b?this._activeTime=a.set({hour:c}):d<=b&&(this._activeTime=
a.set({hour:d}))}else"minutes"===b&&(b=`${a.minute}`,f=Number(`${b}${c}`),2===b.length||59<f?this._activeTime=a.set({minute:c}):59>f&&(this._activeTime=a.set({minute:f})))};e._parseTime=function(a){const b={locale:w.getLocale(),numberingSystem:"latn"};let c=k.DateTime.fromFormat(a,"t",b);if(c.isValid)return c;c=k.DateTime.fromISO(a,b);if(c.isValid)return c;c=k.DateTime.fromRFC2822(a,b);if(c.isValid)return c;c=k.DateTime.fromJSDate(new Date(a));return c.isValid?c:null};e._handleInputPaste=function(a){var b=
a.clipboardData.getData("text/plain");if(b=this._parseTime(b))this._activeTime=b;a.preventDefault();a.stopImmediatePropagation()};e._handleInputWheel=function(a){this._shift(0>a.deltaY?"up":"down",this._activePart)};e._shift=function(a,b){a&&b&&(this._activeTime=this._activeTime["up"===a?"plus":"minus"]({["hours"===b?"hour":"minutes"===b?"minute":"hours"]:"meridiem"===b?12:1}))};t._createClass(q,[{key:"value",get:function(){return this.viewModel.value},set:function(a){this.viewModel.value=a}}]);return q}(D);
m.__decorate([r.property(),E.messageBundle("esri/widgets/support/t9n/TimePicker")],h.prototype,"messages",void 0);m.__decorate([r.property()],h.prototype,"value",null);m.__decorate([r.property({type:u})],h.prototype,"viewModel",void 0);return h=m.__decorate([C.subclass("esri.widgets.support.TimePicker")],h)});