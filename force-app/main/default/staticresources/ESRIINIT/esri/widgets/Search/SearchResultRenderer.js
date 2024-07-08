// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../Widget ./SearchViewModel ../support/decorators/accessibleHandler ../support/decorators/messageBundle ../support/jsxFactory ../support/widgetUtils".split(" "),function(q,g,k,f,y,r,t,u,n,v,c,z){f=function(p){function l(a,b){a=p.call(this,a,b)||this;a.messages=null;a.showMoreResultsOpen=
!1;a.viewModel=null;return a}q._inheritsLoose(l,p);var d=l.prototype;d.render=function(){return c.tsx("div",{class:"esri-search-result-renderer esri-widget"},c.tsx("div",{key:"esri-search-renderer__container",class:this.classes("esri-search-result-renderer__more-results",{["esri-search-result-renderer__more-results--show-more-results"]:this.showMoreResultsOpen})},this.renderSearchResultName(),this.renderMoreResults()))};d.renderMoreResults=function(){return c.tsx("div",{key:"esri-search-renderer__more-results"},
this.renderMoreResultsButton(),this.renderMoreResultsLists())};d.renderSearchResultName=function(){const a=this.viewModel?.selectedResult;return c.tsx("div",{key:"esri-search-renderer__result-name",class:"esri-search-result-renderer__more-results-item"},a&&a.name||"")};d.renderMoreResultsLists=function(){var a=this.viewModel?.results;const {resultCount:b}=this.viewModel;if(2>b)return null;a=a.map(e=>this.renderMoreResultsList(e));return c.tsx("div",{key:"esri-search-renderer__more-results-container",
class:"esri-search-result-renderer__more-results-list"},a)};d.renderMoreResultsButton=function(){const {messages:a}=this,{resultCount:b}=this.viewModel;return 2>b?null:c.tsx("div",{key:"esri-search-renderer__more-results-button",class:"esri-search-result-renderer__more-results-item"},c.tsx("a",{class:"esri-widget__anchor",href:"#",bind:this,onclick:this._showMoreResultsClick,onkeydown:this._showMoreResultsClick},this.showMoreResultsOpen?a.hideMoreResults:a.showMoreResults))};d.renderMoreResultsHeader=
function(a,b){return c.tsx("div",{key:`esri-search-result-renderer__header-${b}`,class:"esri-search-result-renderer__more-results-list-header"},a)};d.renderMoreResultsList=function(a){var {results:b}=a,e=b.length;const m=!!e;var h=this.viewModel?.selectedResult;e=1===e&&b[0]===h;h=this._getSourceName(a.source,a.sourceIndex);h=1<this.viewModel?.results.length&&!e?this.renderMoreResultsHeader(h,a.sourceIndex):null;b=m&&b.map((w,x)=>this.renderMoreResultsListItem(w,x));b=m&&!e?c.tsx("ul",{key:`esri-search-result-renderer__list-${a.sourceIndex}`},
b):null;return m?c.tsx("div",{key:`esri-search-result-renderer__results-${a.sourceIndex}`},h,b):null};d.renderMoreResultsListItem=function(a,b){const e=this.get("viewModel.selectedResult");return a!==e?c.tsx("li",{key:`esri-search-result-renderer__list-item-${b}`},c.tsx("a",{class:"esri-widget__anchor",href:"#",tabindex:"0",bind:this,"data-result":a,onclick:this._selectResultClick,onkeydown:this._selectResultClick},a.name)):null};d._showMoreResultsClick=function(a){a.preventDefault();this.showMoreResultsOpen=
!this.showMoreResultsOpen;(a=this.get("viewModel.view.popup"))&&a.reposition()};d._selectResultClick=function(a){a.preventDefault();a=a.currentTarget["data-result"];this.viewModel&&this.viewModel.select(a)};d._getSourceName=function(a,b){return b===u.ALL_INDEX?this.messages.all:a.name};return l}(t);g.__decorate([k.property(),v.messageBundle("esri/widgets/Search/t9n/Search")],f.prototype,"messages",void 0);g.__decorate([k.property()],f.prototype,"showMoreResultsOpen",void 0);g.__decorate([k.property()],
f.prototype,"viewModel",void 0);g.__decorate([n.accessibleHandler()],f.prototype,"_showMoreResultsClick",null);g.__decorate([n.accessibleHandler()],f.prototype,"_selectResultClick",null);return f=g.__decorate([r.subclass("esri.widgets.Search.SearchResultRenderer")],f)});