(this["webpackJsonpnext-story"]=this["webpackJsonpnext-story"]||[]).push([[9],{159:function(e,t,n){"use strict";var r=n(23),a=n(0),o=n.n(a),i=n(140),c=n(18);function l(){var e=Object(r.a)(["\n    margin-top: 85px;\n"]);return l=function(){return e},e}var u=Object(c.b)(i.a)(l());t.a=function(e){return o.a.createElement(u,{maxWidth:e.maxWidth},e.children)}},164:function(e,t,n){e.exports=n.p+"static/media/MockCover.4d59545d.png"},165:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.movie="movie",e.book="book"}(r||(r={}))},171:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,a=Array.isArray,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)"undefined"!==typeof e[r]&&(n[r]=e[r]);return n};e.exports={arrayToObject:i,assign:function(e,t){return Object.keys(t).reduce((function(e,n){return e[n]=t[n],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],r=0;r<t.length;++r)for(var o=t[r],i=o.obj[o.prop],c=Object.keys(i),l=0;l<c.length;++l){var u=c[l],s=i[u];"object"===typeof s&&null!==s&&-1===n.indexOf(s)&&(t.push({obj:i,prop:u}),n.push(s))}return function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(a(n)){for(var r=[],o=0;o<n.length;++o)"undefined"!==typeof n[o]&&r.push(n[o]);t.obj[t.prop]=r}}}(t),e},decode:function(e,t,n){var r=e.replace(/\+/g," ");if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(a){return r}},encode:function(e,t,n){if(0===e.length)return e;var r=e;if("symbol"===typeof e?r=Symbol.prototype.toString.call(e):"string"!==typeof e&&(r=String(e)),"iso-8859-1"===n)return escape(r).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var a="",i=0;i<r.length;++i){var c=r.charCodeAt(i);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?a+=r.charAt(i):c<128?a+=o[c]:c<2048?a+=o[192|c>>6]+o[128|63&c]:c<55296||c>=57344?a+=o[224|c>>12]+o[128|c>>6&63]+o[128|63&c]:(i+=1,c=65536+((1023&c)<<10|1023&r.charCodeAt(i)),a+=o[240|c>>18]+o[128|c>>12&63]+o[128|c>>6&63]+o[128|63&c])}return a},isBuffer:function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(a(e)){for(var n=[],r=0;r<e.length;r+=1)n.push(t(e[r]));return n}return t(e)},merge:function e(t,n,o){if(!n)return t;if("object"!==typeof n){if(a(t))t.push(n);else{if(!t||"object"!==typeof t)return[t,n];(o&&(o.plainObjects||o.allowPrototypes)||!r.call(Object.prototype,n))&&(t[n]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(n);var c=t;return a(t)&&!a(n)&&(c=i(t,o)),a(t)&&a(n)?(n.forEach((function(n,a){if(r.call(t,a)){var i=t[a];i&&"object"===typeof i&&n&&"object"===typeof n?t[a]=e(i,n,o):t.push(n)}else t[a]=n})),t):Object.keys(n).reduce((function(t,a){var i=n[a];return r.call(t,a)?t[a]=e(t[a],i,o):t[a]=i,t}),c)}}},178:function(e,t,n){"use strict";var r=n(23),a=n(0),o=n.n(a),i=n(18);function c(){var e=Object(r.a)(["\n    border-radius: 7px;\n    color: white;\n    outline: none;\n    border: none;\n    margin: 5px;\n    cursor: pointer;\n    background-color: ",";\n    &:hover {\n        background-color: ",";\n    }\n    font-size: 16px;\n    padding: 3px 5px 3px 5px;\n"]);return c=function(){return e},e}var l=i.b.button(c(),(function(e){return e.theme.palette.primary.light}),(function(e){return e.theme.palette.secondary.light})),u=function(e){var t=e.tag;return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement(l,null,t))};function s(){var e=Object(r.a)(["\n    margin-bottom: 15px;\n"]);return s=function(){return e},e}var f=i.b.div(s());t.a=function(e){var t=e.tags,n=e.tagObjects;return o.a.createElement(f,null,t&&t.map((function(e,t){return o.a.createElement(u,{key:t,tag:e})})),!t&&n&&n.map((function(e,t){return o.a.createElement(u,{key:t,tag:e.tagName})})))}},179:function(e,t,n){"use strict";var r=n(42),a=n(23),o=n(0),i=n.n(o),c=n(18),l=n(343),u=n(113),s=n(144),f=n(152),d=n(148),p=n(142),m=n(188),b=n.n(m),v=n(189),h=n.n(v),y=n(145),g=n(9);function O(){var e=Object(a.a)(["\n    color: white;\n    &:hover {\n        color: grey;\n    }\n"]);return O=function(){return e},e}function j(){var e=Object(a.a)(["\n    margin-right: 10px;\n    background: none;\n    border: none;\n    color: ",";\n    cursor: pointer;\n    font-size: 16px;\n\n    &:hover {\n        color: ",";\n    }\n"]);return j=function(){return e},e}function x(){var e=Object(a.a)(["\n    height: 35px;\n    width: 100%;\n    position:absolute;\n    bottom:0;\n    display: flex;\n    justify-content: flex-end;\n"]);return x=function(){return e},e}function E(){var e=Object(a.a)(["\n    margin: 10px;\n    margin-bottom: ",";\n"]);return E=function(){return e},e}function w(){var e=Object(a.a)(["\n    overflow: auto;\n"]);return w=function(){return e},e}function S(){var e=Object(a.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 10px;\n"]);return S=function(){return e},e}function k(){var e=Object(a.a)(["\n    max-width: ","\n"]);return k=function(){return e},e}function N(){var e=Object(a.a)(["\n    max-height: ",";\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    margin: 10px;\n    overflow: auto;\n"]);return N=function(){return e},e}function D(){var e=Object(a.a)(["\n    height: ",";\n    overflow: auto;\n"]);return D=function(){return e},e}function P(){var e=Object(a.a)(["\n    background-color: ",";\n    height: 50px;\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n"]);return P=function(){return e},e}function M(){var e=Object(a.a)(["\n    width: ",";\n    height: ",";\n    position: absolute;\n    left: 50% !important;\n    top: 50% !important;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    position: relative;\n"]);return M=function(){return e},e}var A=c.b.div(M(),(function(e){return e.isSmall||e.isShort?"100vw":"500px"}),(function(e){return e.isSmall||e.isShort?"100vh":"500px"})),C=c.b.div(P(),(function(e){return e.theme.palette.primary.main})),R=c.b.div(D(),(function(e){return e.isSmall||e.isShort?"100%":"450px"})),T=c.b.div(N(),(function(e){return e.isShort?"80%":"350px"})),I=c.b.img(k(),(function(e){return e.isShort?"30%":"50%"})),z=c.b.div(S()),F=c.b.div(w()),L=c.b.div(E(),(function(e){return e.isSmall||e.isShort?"100px":"35px"})),H=Object(c.b)(u.a)(x()),B=Object(c.b)(y.a)(j(),(function(e){return e.theme.palette.grey[600]}),(function(e){return e.theme.palette.grey[900]})),V=Object(c.b)(b.a)(O()),Q=function(e){var t,n,r=e.isOpen,a=e.modalData,o=e.setModalOpen,c=Object(g.g)(),l=Object(s.a)("(max-width:450px)"),u=Object(s.a)("(max-height:500px)");return i.a.createElement(f.a,{open:r,onClose:function(){return o(!1)}},i.a.createElement(A,{isSmall:l,isShort:u},i.a.createElement(C,null,i.a.createElement(d.a,{onClick:function(){return o(!1)}},i.a.createElement(V,null))),i.a.createElement(R,{isSmall:l,isShort:u},i.a.createElement(T,{isShort:u},i.a.createElement(I,{src:null===a||void 0===a?void 0:a.image,isShort:u}),i.a.createElement(z,null,i.a.createElement(p.a,{variant:"h3",gutterBottom:!0},null===a||void 0===a?void 0:a.title),i.a.createElement(p.a,{variant:"caption",gutterBottom:!0},"Avg Rating: ",null===a||void 0===a||null===(t=a.avgRating)||void 0===t?void 0:t.toString()),i.a.createElement(F,null,i.a.createElement(p.a,null,null===a||void 0===a||null===(n=a.tags)||void 0===n?void 0:n.join(", "))))),i.a.createElement(L,{isSmall:l,isShort:u},i.a.createElement(p.a,{variant:"body1"},null===a||void 0===a?void 0:a.blurb))),i.a.createElement(H,{elevation:3},i.a.createElement(B,{endIcon:i.a.createElement(h.a,null),onClick:function(){return function(){var e=a.id,t=a.mediaType;c.push("/".concat(t,"/").concat(e)),o(!1)}()}},"Go to page"))))};function G(){var e=Object(a.a)(["\n    max-height: 250px;\n    max-width: 100%;\n    cursor: pointer;\n    &:hover {\n        opacity: 50%;\n    }\n"]);return G=function(){return e},e}function U(){var e=Object(a.a)(["\n    height: 250px;\n    width: 175px;\n    display: flex;\n    justify-content: center;\n    align-items: space-between;\n    flex-direction: column;\n"]);return U=function(){return e},e}var q=Object(c.b)(l.a)(U()),W=c.b.img(G());t.a=function(e){var t=e.cardData.image,n=Object(o.useState)(!1),a=Object(r.a)(n,2),c=a[0],l=a[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(Q,{isOpen:c,setModalOpen:function(){return l(!1)},modalData:e.cardData}),i.a.createElement(q,{elevation:1},i.a.createElement(W,{src:t,onClick:function(){return l(!0)}})))}},198:function(e,t,n){"use strict";var r=String.prototype.replace,a=/%20/g,o=n(171),i={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=o.assign({default:i.RFC3986,formatters:{RFC1738:function(e){return r.call(e,a,"+")},RFC3986:function(e){return String(e)}}},i)},231:function(e,t,n){"use strict";var r=n(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=(0,r(n(61)).default)(a.default.createElement("path",{d:"M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"}),"AccountBox");t.default=o},232:function(e,t,n){"use strict";var r=n(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=(0,r(n(61)).default)(a.default.createElement("path",{d:"M10 17l5-5-5-5v10z"}),"ArrowRight");t.default=o},249:function(e,t,n){"use strict";var r=n(250),a=n(251),o=n(198);e.exports={formats:o,parse:a,stringify:r}},250:function(e,t,n){"use strict";var r=n(171),a=n(198),o=Object.prototype.hasOwnProperty,i={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,l=Array.prototype.push,u=function(e,t){l.apply(e,c(t)?t:[t])},s=Date.prototype.toISOString,f=a.default,d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,format:f,formatter:a.formatters[f],indices:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},p=function e(t,n,a,o,i,l,s,f,p,m,b,v,h){var y,g=t;if("function"===typeof s?g=s(n,g):g instanceof Date?g=m(g):"comma"===a&&c(g)&&(g=r.maybeMap(g,(function(e){return e instanceof Date?m(e):e})).join(",")),null===g){if(o)return l&&!v?l(n,d.encoder,h,"key"):n;g=""}if("string"===typeof(y=g)||"number"===typeof y||"boolean"===typeof y||"symbol"===typeof y||"bigint"===typeof y||r.isBuffer(g))return l?[b(v?n:l(n,d.encoder,h,"key"))+"="+b(l(g,d.encoder,h,"value"))]:[b(n)+"="+b(String(g))];var O,j=[];if("undefined"===typeof g)return j;if(c(s))O=s;else{var x=Object.keys(g);O=f?x.sort(f):x}for(var E=0;E<O.length;++E){var w=O[E],S=g[w];if(!i||null!==S){var k=c(g)?"function"===typeof a?a(n,w):n:n+(p?"."+w:"["+w+"]");u(j,e(S,k,a,o,i,l,s,f,p,m,b,v,h))}}return j};e.exports=function(e,t){var n,r=e,l=function(e){if(!e)return d;if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||d.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=a.default;if("undefined"!==typeof e.format){if(!o.call(a.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var r=a.formatters[n],i=d.filter;return("function"===typeof e.filter||c(e.filter))&&(i=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?d.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?d.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:d.encode,encoder:"function"===typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:i,formatter:r,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}}(t);"function"===typeof l.filter?r=(0,l.filter)("",r):c(l.filter)&&(n=l.filter);var s,f=[];if("object"!==typeof r||null===r)return"";s=t&&t.arrayFormat in i?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var m=i[s];n||(n=Object.keys(r)),l.sort&&n.sort(l.sort);for(var b=0;b<n.length;++b){var v=n[b];l.skipNulls&&null===r[v]||u(f,p(r[v],v,m,l.strictNullHandling,l.skipNulls,l.encode?l.encoder:null,l.filter,l.sort,l.allowDots,l.serializeDate,l.formatter,l.encodeValuesOnly,l.charset))}var h=f.join(l.delimiter),y=!0===l.addQueryPrefix?"?":"";return l.charsetSentinel&&("iso-8859-1"===l.charset?y+="utf8=%26%2310003%3B&":y+="utf8=%E2%9C%93&"),h.length>0?y+h:""}},251:function(e,t,n){"use strict";var r=n(171),a=Object.prototype.hasOwnProperty,o=Array.isArray,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},c=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},l=function(e,t){return e&&"string"===typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},u=function(e,t,n,r){if(e){var o=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,c=n.depth>0&&/(\[[^[\]]*])/.exec(o),u=c?o.slice(0,c.index):o,s=[];if(u){if(!n.plainObjects&&a.call(Object.prototype,u)&&!n.allowPrototypes)return;s.push(u)}for(var f=0;n.depth>0&&null!==(c=i.exec(o))&&f<n.depth;){if(f+=1,!n.plainObjects&&a.call(Object.prototype,c[1].slice(1,-1))&&!n.allowPrototypes)return;s.push(c[1])}return c&&s.push("["+o.slice(c.index)+"]"),function(e,t,n,r){for(var a=r?t:l(t,n),o=e.length-1;o>=0;--o){var i,c=e[o];if("[]"===c&&n.parseArrays)i=[].concat(a);else{i=n.plainObjects?Object.create(null):{};var u="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,s=parseInt(u,10);n.parseArrays||""!==u?!isNaN(s)&&c!==u&&String(s)===u&&s>=0&&n.parseArrays&&s<=n.arrayLimit?(i=[])[s]=a:i[u]=a:i={0:a}}a=i}return a}(s,t,n,r)}};e.exports=function(e,t){var n=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"===typeof e.charset?i.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:i.comma,decoder:"function"===typeof e.decoder?e.decoder:i.decoder,delimiter:"string"===typeof e.delimiter||r.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"===typeof e.depth||!1===e.depth?+e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null===e||"undefined"===typeof e)return n.plainObjects?Object.create(null):{};for(var s="string"===typeof e?function(e,t){var n,u={},s=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,d=s.split(t.delimiter,f),p=-1,m=t.charset;if(t.charsetSentinel)for(n=0;n<d.length;++n)0===d[n].indexOf("utf8=")&&("utf8=%E2%9C%93"===d[n]?m="utf-8":"utf8=%26%2310003%3B"===d[n]&&(m="iso-8859-1"),p=n,n=d.length);for(n=0;n<d.length;++n)if(n!==p){var b,v,h=d[n],y=h.indexOf("]="),g=-1===y?h.indexOf("="):y+1;-1===g?(b=t.decoder(h,i.decoder,m,"key"),v=t.strictNullHandling?null:""):(b=t.decoder(h.slice(0,g),i.decoder,m,"key"),v=r.maybeMap(l(h.slice(g+1),t),(function(e){return t.decoder(e,i.decoder,m,"value")}))),v&&t.interpretNumericEntities&&"iso-8859-1"===m&&(v=c(v)),h.indexOf("[]=")>-1&&(v=o(v)?[v]:v),a.call(u,b)?u[b]=r.combine(u[b],v):u[b]=v}return u}(e,n):e,f=n.plainObjects?Object.create(null):{},d=Object.keys(s),p=0;p<d.length;++p){var m=d[p],b=u(m,s[m],n,"string"===typeof e);f=r.merge(f,b,n)}return r.compact(f)}},337:function(e,t,n){"use strict";var r=n(1),a=n(2),o=n(0),i=(n(3),n(4)),c=n(5),l=n(48),u=Object(l.a)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var s=o.forwardRef((function(e,t){var n=e.alt,c=e.children,l=e.classes,s=e.className,f=e.component,d=void 0===f?"div":f,p=e.imgProps,m=e.sizes,b=e.src,v=e.srcSet,h=e.variant,y=void 0===h?"circle":h,g=Object(a.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),O=null,j=function(e){var t=e.src,n=e.srcSet,r=o.useState(!1),a=r[0],i=r[1];return o.useEffect((function(){if(t||n){i(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=n,r.onload=function(){e&&i("loaded")},r.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,n]),a}({src:b,srcSet:v}),x=b||v,E=x&&"error"!==j;return O=E?o.createElement("img",Object(r.a)({alt:n,src:b,srcSet:v,sizes:m,className:l.img},p)):null!=c?c:x&&n?n[0]:o.createElement(u,{className:l.fallback}),o.createElement(d,Object(r.a)({className:Object(i.a)(l.root,l.system,l[y],s,!E&&l.colorDefault),ref:t},g),O)}));t.a=Object(c.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(s)},354:function(e,t,n){"use strict";n.r(t);var r=n(83),a=n(0),o=n.n(a),i=n(344),c=n(23),l=n(18),u=n(142),s=n(231),f=n.n(s),d=n(337);function p(){var e=Object(c.a)(["\n  &.MuiTypography-body1 {\n    font-weight: bold;\n  }\n"]);return p=function(){return e},e}function m(){var e=Object(c.a)(["\n  &.MuiAvatar-root {\n    width: 100%;\n    height: 100%;\n  }\n"]);return m=function(){return e},e}function b(){var e=Object(c.a)(["\n  width: 150px;\n  &>:first-child {\n    border: solid 2px #D3D3D3;\n    height: 150px;\n  }\n"]);return b=function(){return e},e}function v(){var e=Object(c.a)(["\n  &.MuiSvgIcon-root {\n    width: 100%;\n    height: 100%;\n  }\n"]);return v=function(){return e},e}function h(){var e=Object(c.a)(["\n  flex: 0 1 auto;\n  min-width: 300px;\n  /* height: 100vh; */\n  /* overflow-x: hidden; */\n  /* overflow-y: auto; */\n  & > * {\n    margin-bottom: 10px;\n  }\n"]);return h=function(){return e},e}var y=l.b.div(h()),g=Object(l.b)(f.a)(v()),O=l.b.div(b()),j=Object(l.b)(d.a)(m()),x=Object(l.b)(u.a)(p()),E=function(e){var t=e.avatar,n=e.about,r=e.email,a=e.booksCount,i=e.moviesCount,c=e.name;return o.a.createElement(y,{id:"userinfo"},o.a.createElement(O,{id:"profile-pic"},o.a.createElement("div",null,t?o.a.createElement(j,{variant:"square"},o.a.createElement("img",{alt:"profile",src:t,width:"100%"})):o.a.createElement(g,{color:"disabled",fontSize:"large"})),o.a.createElement(u.a,{align:"center",color:"primary",variant:"body1"},"(Edit Profile)")),o.a.createElement("div",null,o.a.createElement(u.a,{variant:"body2"},"User Name: ".concat(c)),o.a.createElement(u.a,{variant:"body2"},"Books Read: ".concat(a)),o.a.createElement(u.a,{variant:"body2"},"Movies Watched: ".concat(i))),o.a.createElement("div",null,o.a.createElement(x,null,"About Me/Message User"),o.a.createElement(u.a,{variant:"body2"},n)),o.a.createElement("div",null,o.a.createElement(x,null,"Contact"),o.a.createElement(u.a,{variant:"body2"},r)))},w=n(144),S=n(159),k=n(62),N=n(14),D=n(42),P=n(184),M=n.n(P),A=(n(187),n(179)),C=n(164),R=n.n(C),T=n(232),I=n.n(T),z=n(360);function F(){var e=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n"]);return F=function(){return e},e}function L(){var e=Object(c.a)(["\n  border: 1px solid rgba(0, 0, 0, 0.23);\n  border-left: none;\n  border-radius: 0 4px 4px 0;\n  :hover{\n    cursor: pointer;\n  }\n"]);return L=function(){return e},e}function H(){var e=Object(c.a)(["\n  &.MuiOutlinedInput-root {\n    border-radius: 4px 0 0 4px;\n  }\n"]);return H=function(){return e},e}function B(){var e=Object(c.a)(["\n  &.MuiGrid-container {\n    flex-wrap: nowrap;\n  }\n"]);return B=function(){return e},e}var V=Object(l.b)(i.a)(B()),Q=Object(l.b)(z.a)(H()),G=Object(l.b)(i.a)(L()),U=l.b.div(F()),q=function(){return o.a.createElement("div",null,o.a.createElement(V,{container:!0,spacing:0,alignItems:"stretch"},o.a.createElement(i.a,{item:!0},o.a.createElement(Q,{name:"search",type:"search",placeholder:"Search"})),o.a.createElement(G,{item:!0},o.a.createElement(U,null,o.a.createElement(I.a,{fontSize:"large"})))))},W=n(356),J=function(){return o.a.createElement(W.a,{variant:"outlined",native:!0},o.a.createElement("option",{value:1},"Option 1"),o.a.createElement("option",{value:2},"Option 2"))},_=n(165),K=n(72),$=n(160),X=n.n($),Y=n(249),Z=n.n(Y);function ee(){var e=Object(c.a)(["\n  margin-top: 20px;\n"]);return ee=function(){return e},e}var te=Object(l.b)(M.a)(ee()),ne={title:"Mock Title Harry Potter Mock Title Harry Potter",image:R.a,mediaType:_.a.movie,nextStoryTags:[],people:"J.K. Rowling",tags:["fantasy","action","sci-fi","superheroes","tag1","tag2","tag3"],blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",avgRating:3},re=function(){return o.a.createElement(i.a,{spacing:1,container:!0},o.a.createElement(i.a,{item:!0,xs:6},o.a.createElement(J,null)),o.a.createElement(i.a,{item:!0,xs:6},o.a.createElement(q,null)))},ae=Object(K.b)()((function(e){var t=e.bookIds,n=e.movieIds,r=e.title,i=e.withSearchSelect,c=e.updateMethod,l=Object(a.useState)({books:[],movies:[]}),s=Object(D.a)(l,2),f=s[0],d=s[1],p=window.location.protocol+"//"+window.location.host,m=Object(a.useCallback)((function(){X.a.get("".concat(p,"/multi/booksAndMovies"),{params:{books:t,movies:n},paramsSerializer:function(e){return Z.a.stringify(e)}}).then((function(e){var t=e.data;c(t),d(t)})).catch((function(e){console.error("Error fetching books and movie information for media cards: ",e)}))}),[t,n]);return Object(a.useEffect)((function(){((null===t||void 0===t?void 0:t.length)||(null===n||void 0===n?void 0:n.length))&&m()}),[t,n,m]),o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{variant:"h4"},r),o.a.createElement("div",null,i&&o.a.createElement(re,null)),o.a.createElement(te,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,draggable:!0,infinite:!0,keyBoardControl:!0,minimumTouchDrag:80,slidesToSlide:1,swipeable:!0,centerMode:!0,removeArrowOnDeviceType:["xmd","sm","xs"],responsive:{xl:{breakpoint:{max:3e3,min:1200},items:2.4,partialVisibilityGutter:40},lg:{breakpoint:{max:1200,min:960},items:1.5,partialVisibilityGutter:20},md:{breakpoint:{max:960,min:768},items:2,partialVisibilityGutter:0},xmd:{breakpoint:{max:768,min:480},items:1.5,partialVisibilityGutter:20},sm:{breakpoint:{max:480,min:0},items:.8,partialVisibilityGutter:50}}},f.books.map((function(e){var t=e.bookId,n=e.rating,r=e.nextStoryTags.map((function(e){return e.tagName}));return o.a.createElement(A.a,{key:t,cardData:Object(N.a)(Object(N.a)({},ne),{},{avgRating:n,id:t,mediaType:_.a.book,nextStoryTags:r})})})),f.movies.map((function(e){var t=e.movieId,n=e.rating,r=e.nextStoryTags.map((function(e){return e.tagName}));return o.a.createElement(A.a,{key:t,cardData:Object(N.a)(Object(N.a)({},ne),{},{avgRating:n,id:t,mediaType:_.a.movie,nextStoryTags:r})})}))))})),oe=n(178),ie=n(64);function ce(){var e=Object(c.a)(["\n  min-width: 350px;\n  margin: 0 auto;\n"]);return ce=function(){return e},e}function le(){var e=Object(c.a)(["\n  > * {\n    :not(:first-child) {\n      margin-top: 30px;\n    }\n  }\n"]);return le=function(){return e},e}var ue=l.b.div(le()),se=l.b.div(ce()),fe=Object(K.b)(null,(function(e){return{setFavorites:function(t){return e((n=t,{type:ie.a,data:n}));var n},setLater:function(t){return e((n=t,{type:ie.b,data:n}));var n}}}))((function(e){var t=e.favoriteAuthors,n=e.favoriteBooks,r=e.favoriteDirectors,a=e.favoriteGenres,i=e.favoriteMovies,c=e.favoriteNextStoryTags,l=e.readLater,s=e.watchLater,f=e.setFavorites,d=e.setLater;return o.a.createElement(ue,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(se,null,o.a.createElement(u.a,{variant:"h4"},"Favourite Genres"),o.a.createElement(oe.a,{tags:Object(k.a)(a)}),o.a.createElement(oe.a,{tagObjects:Object(k.a)(c)})),o.a.createElement(se,null,o.a.createElement(u.a,{variant:"h4"},"Favourite Authors/Directors:"),o.a.createElement(oe.a,{tags:[].concat(Object(k.a)(t),Object(k.a)(r))})),o.a.createElement(se,null,o.a.createElement(ae,{bookIds:n,bMSource:"favorite",movieIds:i,title:"User's Favourite Books:",updateMethod:f})),o.a.createElement(se,null,o.a.createElement(ae,{bMSource:"later",title:"User's Read/Watched List",bookIds:l,movieIds:s,withSearchSelect:!0,updateMethod:d}))))})),de=n(82);t.default=Object(K.b)((function(e){return{profile:e.profile}}),(function(e){return{setProfile:function(t){return e(function(e){return{type:de.a,profile:e}}(t))}}}))((function(e){var t=e.profile,n=t.avatar,c=t.booksRead,l=t.email,u=t.message,s=t.moviesWatched,f=t.name,d=Object(r.a)(t,["avatar","booksRead","email","message","moviesWatched","name"]),p=e.setProfile,m=Object(w.a)("(min-width: 960px)"),b=window.location.protocol+"//"+window.location.host;return Object(a.useEffect)((function(){var e=sessionStorage.getItem("NS-session-data"),t=e&&JSON.parse(e).userId;X.a.get("".concat(b,"/users/").concat(t)).then((function(e){p(e.data)})).catch((function(e){console.log("Error fetching profile: ",e)}))}),[]),o.a.createElement(S.a,{maxWidth:m?"lg":"sm"},o.a.createElement(i.a,{container:!0,spacing:5},o.a.createElement(i.a,{item:!0,xs:12,sm:12,md:5},o.a.createElement(E,{about:u,avatar:n,booksCount:c.length,email:l,moviesCount:s.length,name:f})),o.a.createElement(i.a,{item:!0,xs:12,sm:12,md:7},o.a.createElement(fe,d))))}))}}]);
//# sourceMappingURL=9.bb3d369e.chunk.js.map