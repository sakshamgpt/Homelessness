// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ./chunks/_rollupPluginBabelHelpers ./core/has ./core/urlUtils ./support/revision".split(" "),function(k,b,l,m,h,g){b.id=void 0;m("host-webworker")||console.debug(`Using ArcGIS API for JavaScript ${"4.25"} [Date: ${g.buildDate}, Revision: ${g.commitHash.slice(0,8)}]`);b.buildDate=g.buildDate;b.revision=g.commitHash;b.addTokenParameter=function(c){const d=b.id&&b.id.findCredential(c);return d&&d.token?h.addQueryParameter(c,"token",d.token):c};b.setId=function(c){b.id=c};b.version=
"4.25";b.workerMessages={request(c,d){return l._asyncToGenerator(function*(){var {default:e}=yield new Promise((n,p)=>k(["./request"],q=>n(Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}))),p)),a=c.options;const f=a.responseType;a.signal=d?.signal;a.responseType="native"===f||"native-request-init"===f?"native-request-init":f&&["blob","json","text"].includes(f)&&h.getInterceptor(c.url)?.after?f:"array-buffer";e=yield e(c.url,a);a={data:e.data,ssl:e.ssl};
switch(e.requestOptions?.responseType){case "native-request-init":return delete a.data.signal,a;case "blob":a.data=yield a.data.arrayBuffer();break;case "json":a.data=(new TextEncoder).encode(JSON.stringify(a.data)).buffer;break;case "text":a.data=(new TextEncoder).encode(a.data).buffer}return{result:a,transferList:[a.data]}})()}};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});