// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../core/ArrayPool ../../core/handleUtils ../../core/has ../../core/Logger ./vnodeCache".split(" "),function(r,P,ja,u,M,ka){function Q(){return{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,
azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,
"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,
"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,
columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,"float":!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,
"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,
"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,
"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,
"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,
"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,
"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,
"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,
"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1}}function N(a){a=a||{};var b={},c;for(c in a)b[c]=a[c];a=b;a.whiteList=a.whiteList||H.whiteList;a.onAttr=a.onAttr||H.onAttr;a.onIgnoreAttr=a.onIgnoreAttr||H.onIgnoreAttr;a.safeAttrValue=a.safeAttrValue||H.safeAttrValue;this.options=a}function R(){return{a:["target","href","title"],abbr:["title"],
address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:"autoplay controls crossorigin loop muted preload src".split(" "),b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],
img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:"autoplay controls crossorigin loop muted playsinline poster preload src height width".split(" ")}}
function S(a){return a.replace(la,"\x26lt;").replace(ma,"\x26gt;")}function T(a){return a.replace(na,"\x26quot;")}function U(a){return a.replace(oa,'"')}function V(a){return a.replace(pa,function(b,c){return"x"===c[0]||"X"===c[0]?String.fromCharCode(parseInt(c.substr(1),16)):String.fromCharCode(parseInt(c,10))})}function W(a){return a.replace(qa,":").replace(ra," ")}function X(a){for(var b="",c=0,d=a.length;c<d;c++)b+=32>a.charCodeAt(c)?" ":a.charAt(c);return I.trim(b)}function Y(a){a=U(a);a=V(a);
a=W(a);return a=X(a)}function Z(a){a=T(a);return a=S(a)}function sa(a,b){for(;b<a.length;b++){var c=a[b];if(" "!==c)return"\x3d"===c?b:-1}}function ta(a,b){for(;b<a.length;b++){var c=a[b];if(" "!==c)return"'"===c||'"'===c?b:-1}}function ua(a,b){for(;0<b;b--){var c=a[b];if(" "!==c)return"\x3d"===c?b:-1}}function aa(a){var b='"'===a[0]&&'"'===a[a.length-1]||"'"===a[0]&&"'"===a[a.length-1]?!0:!1;return b?a.substr(1,a.length-2):a}function va(a){var b=J.spaceIndex(a);if(-1===b)return{html:"",closing:"/"===
a[a.length-2]};a=J.trim(a.slice(b+1,-1));(b="/"===a[a.length-1])&&(a=J.trim(a.slice(0,-1)));return{html:a,closing:b}}function wa(a){var b={},c;for(c in a)Array.isArray(a[c])?b[c.toLowerCase()]=a[c].map(function(d){return d.toLowerCase()}):b[c.toLowerCase()]=a[c];return b}function ba(a){a=a||{};var b={},c;for(c in a)b[c]=a[c];a=b;a.stripIgnoreTag&&(a.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),a.onIgnoreTag=t.onIgnoreTagStripAll);
a.whiteList=a.whiteList||a.allowList?wa(a.whiteList||a.allowList):t.whiteList;a.onTag=a.onTag||t.onTag;a.onTagAttr=a.onTagAttr||t.onTagAttr;a.onIgnoreTag=a.onIgnoreTag||t.onIgnoreTag;a.onIgnoreTagAttr=a.onIgnoreTagAttr||t.onIgnoreTagAttr;a.safeAttrValue=a.safeAttrValue||t.safeAttrValue;a.escapeHtml=a.escapeHtml||t.escapeHtml;this.options=a;!1===a.css?this.cssFilter=!1:(a.css=a.css||{},this.cssFilter=new xa(a.css))}function ca(a){a=a?.closest("[dir]");return null!==a&&a instanceof HTMLElement&&"rtl"===
a.dir||"rtl"===document.dir}var ya=function(a){if("object"!==typeof a||null===a||"[object Object]"!==Object.prototype.toString.call(a))return!1;var b=Object.getPrototypeOf(a);if(null===b)return!0;for(;null!==Object.getPrototypeOf(b);)b=Object.getPrototypeOf(b);return Object.getPrototypeOf(a)===b},A={exports:{}},q={};u={exports:{}};var x={},za=/javascript\s*:/gim;x.whiteList=Q();x.getDefaultWhiteList=Q;x.onAttr=function(a,b,c){};x.onIgnoreAttr=function(a,b,c){};x.safeAttrValue=function(a,b){return za.test(b)?
"":b};var F={indexOf:function(a,b){var c;if(Array.prototype.indexOf)return a.indexOf(b);var d=0;for(c=a.length;d<c;d++)if(a[d]===b)return d;return-1},forEach:function(a,b,c){var d;if(Array.prototype.forEach)return a.forEach(b,c);var e=0;for(d=a.length;e<d;e++)b.call(c,a[e],e,a)},trim:function(a){return String.prototype.trim?a.trim():a.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(a){return String.prototype.trimRight?a.trimRight():a.replace(/(\s*$)/g,"")}},H=x,Aa=function(a,b){function c(){if(!e){var k=
F.trim(a.slice(f,g)),m=k.indexOf(":");if(-1!==m){var p=F.trim(k.slice(0,m));m=F.trim(k.slice(m+1));p&&(k=b(f,l.length,p,m,k))&&(l+=k+"; ")}}f=g+1}a=F.trimRight(a);";"!==a[a.length-1]&&(a+=";");for(var d=a.length,e=!1,f=0,g=0,l="";g<d;g++){var h=a[g];if("/"===h&&"*"===a[g+1]){h=a.indexOf("*/",g+2);if(-1===h)break;g=h+1;f=g+1;e=!1}else"("===h?e=!0:")"===h?e=!1:";"===h?e||c():"\n"===h&&c()}return F.trim(l)};N.prototype.process=function(a){a=(a||"").toString();if(!a)return"";var b=this.options,c=b.whiteList,
d=b.onAttr,e=b.onIgnoreAttr,f=b.safeAttrValue;return Aa(a,function(g,l,h,k,m){var p=c[h],n=!1;!0===p?n=p:"function"===typeof p?n=p(k):p instanceof RegExp&&(n=p.test(k));!0!==n&&(n=!1);if(k=f(h,k)){g={position:l,sourcePosition:g,source:m,isWhite:n};if(n)return n=d(h,k,g),void 0===n||null===n?h+":"+k:n;n=e(h,k,g);if(void 0!==n&&null!==n)return n}})};(function(a,b){b=a.exports=function(d,e){return(new N(e)).process(d)};b.FilterCSS=N;for(var c in x)b[c]=x[c]})(u,u.exports);var v={indexOf:function(a,b){var c;
if(Array.prototype.indexOf)return a.indexOf(b);var d=0;for(c=a.length;d<c;d++)if(a[d]===b)return d;return-1},forEach:function(a,b,c){var d;if(Array.prototype.forEach)return a.forEach(b,c);var e=0;for(d=a.length;e<d;e++)b.call(c,a[e],e,a)},trim:function(a){return String.prototype.trim?a.trim():a.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(a){return(a=/\s|\n|\t/.exec(a))?a.index:-1}},K=u.exports.getDefaultWhiteList,I=v,da=new u.exports.FilterCSS,la=/</g,ma=/>/g,na=/"/g,oa=/&quot;/g,pa=/&#([a-zA-Z0-9]*);?/gim,
qa=/&colon;?/gim,ra=/&newline;?/gim,L=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,ea=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,fa=/u\s*r\s*l\s*\(.*/gi;q.whiteList=R();q.getDefaultWhiteList=R;q.onTag=function(a,b,c){};q.onIgnoreTag=function(a,b,c){};q.onTagAttr=function(a,b,c){};q.onIgnoreTagAttr=function(a,b,c){};q.safeAttrValue=function(a,b,c,d){c=Y(c);if("href"===b||"src"===b){c=I.trim(c);if("#"===c)return"#";if("http://"!==c.substr(0,7)&&"https://"!==
c.substr(0,8)&&"mailto:"!==c.substr(0,7)&&"tel:"!==c.substr(0,4)&&"data:image/"!==c.substr(0,11)&&"ftp://"!==c.substr(0,6)&&"./"!==c.substr(0,2)&&"../"!==c.substr(0,3)&&"#"!==c[0]&&"/"!==c[0])return""}else if("background"===b){if(L.lastIndex=0,L.test(c))return""}else if("style"===b){ea.lastIndex=0;if(ea.test(c))return"";fa.lastIndex=0;if(fa.test(c)&&(L.lastIndex=0,L.test(c)))return"";!1!==d&&(d=d||da,c=d.process(c))}return c=Z(c)};q.escapeHtml=S;q.escapeQuote=T;q.unescapeQuote=U;q.escapeHtmlEntities=
V;q.escapeDangerHtml5Entities=W;q.clearNonPrintableCharacter=X;q.friendlyAttrValue=Y;q.escapeAttrValue=Z;q.onIgnoreTagStripAll=function(){return""};q.StripTagBody=function(a,b){"function"!==typeof b&&(b=function(){});var c=!Array.isArray(a),d=[],e=!1;return{onIgnoreTag:function(f,g,l){var h=c?!0:-1!==I.indexOf(a,f);if(h){if(l.isClosing)return d.push([!1!==e?e:l.position,l.position+10]),e=!1,"[/removed]";e||(e=l.position);return"[removed]"}return b(f,g,l)},remove:function(f){var g="",l=0;I.forEach(d,
function(h){g+=f.slice(l,h[0]);l=h[1]});return g+=f.slice(l)}}};q.stripCommentTag=function(a){for(var b="",c=0;c<a.length;){var d=a.indexOf("\x3c!--",c);if(-1===d){b+=a.slice(c);break}b+=a.slice(c,d);c=a.indexOf("--\x3e",d);if(-1===c)break;c+=3}return b};q.stripBlankChar=function(a){a=a.split("");a=a.filter(function(b){b=b.charCodeAt(0);return 127===b?!1:31>=b?10===b||13===b?!0:!1:!0});return a.join("")};q.cssFilter=da;q.getDefaultCSSWhiteList=K;var C={},Ba=/[^a-zA-Z0-9\\_:.-]/gim;C.parseTag=function(a,
b,c){var d="",e=0,f=!1,g=!1,l=0,h=a.length,k="",m="";l=0;a:for(;l<h;l++)if(m=a.charAt(l),!1===f)"\x3c"===m&&(f=l);else if(!1===g)if("\x3c"===m)d+=c(a.slice(e,l)),e=f=l;else if("\x3e"===m)d+=c(a.slice(e,f)),m=a.slice(f,l+1),e=void 0,e=m,k=v.spaceIndex(e),e=-1===k?e.slice(1,-1):e.slice(1,k+1),e=v.trim(e).toLowerCase(),"/"===e.slice(0,1)&&(e=e.slice(1)),"/"===e.slice(-1)&&(e=e.slice(0,-1)),k=e,d+=b(f,d.length,k,m,"\x3c/"===m.slice(0,2)),e=l+1,f=!1;else{if('"'===m||"'"===m){k=1;for(var p=a.charAt(l-k);""===
p.trim()||"\x3d"===p;){if("\x3d"===p){g=m;continue a}p=a.charAt(l-++k)}}}else m===g&&(g=!1);e<a.length&&(d+=c(a.substr(e)));return d};C.parseAttr=function(a,b){function c(m,p){m=v.trim(m);m=m.replace(Ba,"").toLowerCase();1>m.length||(m=b(m,p||""))&&f.push(m)}for(var d=0,e=0,f=[],g=!1,l=a.length,h=0;h<l;h++){var k=a.charAt(h);if(!1===g&&"\x3d"===k)g=a.slice(d,h),d=h+1,e='"'===a.charAt(d)||"'"===a.charAt(d)?d:ta(a,h+1);else{if(!1!==g&&h===e)if(k=a.indexOf(k,h+1),-1===k)break;else{d=v.trim(a.slice(e+
1,k));c(g,d);g=!1;h=k;d=h+1;continue}/\s|\n|\t/.test(k)&&(a=a.replace(/\s|\n|\t/g," "),!1===g?(k=sa(a,h),-1===k?(d=v.trim(a.slice(d,h)),c(d),g=!1,d=h+1):h=k-1):(k=ua(a,h-1),-1===k&&(d=v.trim(a.slice(d,h)),d=aa(d),c(g,d),g=!1,d=h+1)))}}d<a.length&&(!1===g?c(a.slice(d)):c(g,aa(v.trim(a.slice(d)))));return v.trim(f.join(" "))};var xa=u.exports.FilterCSS,t=q,Ca=C.parseTag,Da=C.parseAttr,J=v;ba.prototype.process=function(a){a=(a||"").toString();if(!a)return"";var b=this.options,c=b.whiteList,d=b.onTag,
e=b.onIgnoreTag,f=b.onTagAttr,g=b.onIgnoreTagAttr,l=b.safeAttrValue,h=b.escapeHtml,k=this.cssFilter;b.stripBlankChar&&(a=t.stripBlankChar(a));b.allowCommentTag||(a=t.stripCommentTag(a));var m=!1;b.stripIgnoreTagBody&&(m=t.StripTagBody(b.stripIgnoreTagBody,e),e=m.onIgnoreTag);a=Ca(a,function(p,n,w,y,Ea){p={sourcePosition:p,position:n,isClosing:Ea,isWhite:Object.prototype.hasOwnProperty.call(c,w)};n=d(w,y,p);if(void 0!==n&&null!==n)return n;if(p.isWhite){if(p.isClosing)return"\x3c/"+w+"\x3e";p=va(y);
var Fa=c[w];n=Da(p.html,function(D,G){var O=-1!==J.indexOf(Fa,D),B=f(w,D,G,O);if(void 0!==B&&null!==B)return B;if(O)return(G=l(w,D,G,k))?D+'\x3d"'+G+'"':D;B=g(w,D,G,O);if(void 0!==B&&null!==B)return B});y="\x3c"+w;n&&(y+=" "+n);p.closing&&(y+=" /");return y+"\x3e"}n=e(w,y,p);return void 0!==n&&null!==n?n:h(y)},h);m&&(a=m.remove(a));return a};(function(a,b){function c(e,f){return(new d(f)).process(e)}var d=ba;b=a.exports=c;b.filterXSS=c;b.FilterXSS=d;(function(){for(var e in q)b[e]=q[e];for(var f in C)b[f]=
C[f]})();"undefined"!==typeof self&&"undefined"!==typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=a.exports)})(A,A.exports);u=function(){function a(b,c){var d=this;this.arcgisWhiteList={a:["href","style","target"],abbr:["title"],audio:["autoplay","controls","loop","muted","preload"],b:[],br:[],dd:["style"],div:["align","style"],dl:["style"],dt:["style"],em:[],figcaption:["style"],figure:["style"],font:["color","face","size","style"],h1:["style"],h2:["style"],
h3:["style"],h4:["style"],h5:["style"],h6:["style"],hr:[],i:[],img:"alt border height src style width".split(" "),li:[],ol:[],p:["style"],source:["media","src","type"],span:["style"],strong:[],sub:["style"],sup:["style"],table:"border cellpadding cellspacing height style width".split(" "),tbody:[],tr:["align","height","style","valign"],td:"align colspan height nowrap rowspan style valign width".split(" "),th:"align colspan height nowrap rowspan style valign width".split(" "),u:[],ul:[],video:"autoplay controls height loop muted poster preload width".split(" ")};
this.allowedProtocols="http https mailto iform tel flow lfmobile arcgis-navigator arcgis-appstudio-player arcgis-survey123 arcgis-collector arcgis-workforce arcgis-explorer arcgis-trek2there arcgis-quickcapture mspbi comgooglemaps pdfefile pdfehttp pdfehttps boxapp boxemm awb awbs gropen radarscope".split(" ");this.arcgisFilterOptions={allowCommentTag:!0,safeAttrValue:function(f,g,l,h){return"a"===f&&"href"===g||("img"===f||"source"===f)&&"src"===g?d.sanitizeUrl(l):A.exports.safeAttrValue(f,g,l,h)}};
this._entityMap={"\x26":"\x26#x38;","\x3c":"\x26#x3C;","\x3e":"\x26#x3E;",'"':"\x26#x22;","'":"\x26#x27;","/":"\x26#x2F;"};if(b&&!c)var e=b;else b&&c?(e=Object.create(this.arcgisFilterOptions),Object.keys(b).forEach(function(f){"whiteList"===f?e.whiteList=d._extendObjectOfArrays([d.arcgisWhiteList,b.whiteList||{}]):e[f]=b[f]})):(e=Object.create(this.arcgisFilterOptions),e.whiteList=this.arcgisWhiteList);this.xssFilterOptions=e;this._xssFilter=new A.exports.FilterXSS(e)}a.prototype.sanitize=function(b,
c){void 0===c&&(c={});switch(typeof b){case "number":return isNaN(b)||!isFinite(b)?null:b;case "boolean":return b;case "string":return this._xssFilter.process(b);case "object":return this._iterateOverObject(b,c);default:if(!c.allowUndefined||"undefined"!==typeof b)return null}};a.prototype.sanitizeUrl=function(b,c){c=(null!==c&&void 0!==c?c:{}).isProtocolRequired;c=void 0===c?!0:c;var d=this._trim(b.substring(0,b.indexOf(":"))),e="/"===b,f=/^#/.test(b),g=d&&-1<this.allowedProtocols.indexOf(d.toLowerCase());
return e||f||g?A.exports.escapeAttrValue(b):d||c?"":A.exports.escapeAttrValue("https://".concat(b))};a.prototype.sanitizeHTMLAttribute=function(b,c,d,e){return"function"===typeof this.xssFilterOptions.safeAttrValue?this.xssFilterOptions.safeAttrValue(b,c,d,e):A.exports.safeAttrValue(b,c,d,e)};a.prototype.validate=function(b,c){void 0===c&&(c={});c=this.sanitize(b,c);return{isValid:b===c,sanitized:c}};a.prototype.encodeHTML=function(b){var c=this;return String(b).replace(/[&<>"'\/]/g,function(d){return c._entityMap[d]})};
a.prototype.encodeAttrValue=function(b){var c=/^[a-zA-Z0-9]$/;return String(b).replace(/[\x00-\xFF]/g,function(d,e){return c.test(d)?d:"\x26#x".concat(Number(b.charCodeAt(e)).toString(16),";")})};a.prototype._extendObjectOfArrays=function(b){var c={};b.forEach(function(d){Object.keys(d).forEach(function(e){Array.isArray(d[e])&&Array.isArray(c[e])?c[e]=c[e].concat(d[e]):c[e]=d[e]})});return c};a.prototype._iterateOverObject=function(b,c){var d=this;void 0===c&&(c={});try{var e=!1,f=void 0;if(Array.isArray(b))f=
b.reduce(function(g,l){var h=d.validate(l,c);if(h.isValid)return g.concat([l]);e=!0;return g.concat([h.sanitized])},[]);else if(ya(b))f=Object.keys(b).reduce(function(g,l){var h=b[l],k=d.validate(h,c);k.isValid?g[l]=h:(e=!0,g[l]=k.sanitized);return g},{});else return c.allowUndefined&&"undefined"===typeof b?void 0:null;return e?f:b}catch(g){return null}};a.prototype._trim=function(b){return String.prototype.trim?b.trim():b.replace(/(^\s*)|(\s*$)/g,"")};return a}();var z,E,ha=function(a){if("WebkitTransition"in
a.style)z="webkitTransitionEnd",E="webkitAnimationEnd";else if("transition"in a.style)z="transitionend",E="animationend";else throw Error("Your browser is not supported!");},Ga=function(a,b){void 0===b&&(b=a+"-active");return function(c){z||ha(c);var d=!1,e=function(f){d||(d=!0,c.removeEventListener(z,e),c.removeEventListener(E,e),c.classList.remove(a),c.classList.remove(b))};c.classList.add(a);c.addEventListener(z,e);c.addEventListener(E,e);requestAnimationFrame(function(){c.classList.add(b)})}},
Ha=function(a,b){void 0===b&&(b=a+"-active");return function(c,d){z||ha(c);var e=!1,f=function(g){e||(e=!0,c.removeEventListener(z,f),c.removeEventListener(E,f),d())};c.classList.add(a);c.addEventListener(z,f);c.addEventListener(E,f);requestAnimationFrame(function(){c.classList.add(b)})}};const Ia=M.getLogger("esri.widgets.support.widgetUtils");M=(()=>{const a=new Map,b=new ResizeObserver(c=>{ka.clearVNodeCache();for(const d of c)a.get(d.target)?.(d)});return(c,d,e)=>{a.has(c)&&Ia.error("Already observing element",
c);a.set(c,d);b.observe(c,e);return ja.makeHandle(()=>{b.unobserve(c);a.delete(c)})}})();K="dd dl dt h1 h2 h3 h4 h5 h6 sub sup animate animatetransform circle clippath defs ellipse g image line lineargradient marker mask path pattern polygon polyline radialgradient rect stop svg switch symbol text textpath tspan use".split(" ");const Ja=K.reduce((a,b)=>{a[b]=[];return a},{}),ia="align alink alt bgcolor border cellpadding cellspacing class color cols colspan coords d dir face height hspace ismap lang marginheight marginwidth multiple nohref noresize noshade nowrap ref rel rev rows rowspan scrolling shape span summary tabindex title usemap valign value vlink vspace width".split(" ");
u=new u({whiteList:Ja,onTagAttr:(a,b,c)=>{a=`${b}="${c}"`;if(ia.includes(b))return a},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0);r.additionalAllowedTags=K;r.classes=function(a){const b=P.acquire();for(var c=0;c<arguments.length;c++){const d=arguments[c],e=typeof d;if("string"===e)b.push(d);else if(Array.isArray(d))b.push.apply(b,d);else if("object"===e)for(const f in d)d[f]&&b.push(f)}c=b.join(" ");P.release(b);return c};r.cssTransition=function(a,b){return("enter"===a?Ga:Ha)(b)};
r.discardNode=function(a){this[a.getAttribute("data-node-ref")]=null};r.getDir=function(a){return ca(a)?"rtl":"ltr"};r.isActivationKey=function(a){return"Enter"===a||" "===a};r.isRTL=ca;r.keepMenuItemWithinView=function(a,b){const c=a.getBoundingClientRect();b=b.getBoundingClientRect();const d=c.top,e=b.top;(c.top+c.height>b.top+b.height||d<e)&&a.scrollIntoView({block:"end"})};r.onResize=M;r.renderingSanitizer=u;r.safeAttrs=ia;r.storeNode=function(a){this[a.getAttribute("data-node-ref")]=a};Object.defineProperties(r,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});