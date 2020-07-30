(this["webpackJsonpnext-story"]=this["webpackJsonpnext-story"]||[]).push([[10],{158:function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),function(e){e.movie="movie",e.book="book",e.start=""}(a||(a={})),function(e){e.bookPerson="bookPerson",e.moviePerson="moviePerson",e.genre="genre",e.tag="tag",e.searchBar="searchBar"}(r||(r={}))},159:function(e,t,n){"use strict";var a=n(17),r=n(0),o=n.n(r),i=n(239),c=n(14);function l(){var e=Object(a.a)(["\n    margin-top: 85px;\n    margin-bottom: 85px;\n"]);return l=function(){return e},e}var u=Object(c.b)(i.a)(l());t.a=function(e){return o.a.createElement(u,{maxWidth:e.maxWidth},e.children)}},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(75),r=function(e){return{type:a.a,filterName:e}}},166:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return l}));var a=n(30),r=function(e){return{type:a.e,reviewsArray:e}},o=function(e){return{type:a.a,text:e.text,userId:e.userId,userName:e.userName,datePosted:e.datePosted}},i=function(e){return{type:a.c,userId:e}},c=function(e){return{type:a.d,text:e.text,userId:e.userId,userName:e.userName,datePosted:e.datePosted}},l=function(e){return{type:a.b,userId:e.userId,userName:e.userName,rating:e.rating}}},167:function(e,t,n){"use strict";var a=n(17),r=n(0),o=n.n(r),i=n(14),c=n(7),l=n(158),u=n(41),s=n(73),p=n(161);function m(){var e=Object(a.a)(["\n    border-radius: 7px;\n    color: white;\n    outline: none;\n    border: none;\n    margin: 5px;\n    cursor: pointer;\n    background-color: ",";\n    &:hover {\n        background-color: ",";\n    }\n    font-size: 16px;\n    padding: 3px 5px 3px 5px;\n"]);return m=function(){return e},e}var f=i.b.button(m(),(function(e){return e.theme.palette.primary.light}),(function(e){return e.theme.palette.secondary.light})),d=Object(s.b)(null,{changeSingleSearchPageFilter:p.a})((function(e){var t=e.label,n=e.tagId,a=e.singleQueryType,r=Object(c.g)(),i=encodeURIComponent(n||t);return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement(f,{onClick:function(){!function(e,t){switch(t){case l.b.bookPerson:e.changeSingleSearchPageFilter(u.b);break;case l.b.moviePerson:e.changeSingleSearchPageFilter(u.d);break;case l.b.tag:case l.b.genre:case l.b.searchBar:default:e.changeSingleSearchPageFilter(u.a)}}(e,a),r.push("/searchResult/param?singleQueryType=".concat(a,"&query=").concat(i))}},t))}));function b(){var e=Object(a.a)(["\n    margin-bottom: 15px;\n"]);return b=function(){return e},e}var g=i.b.div(b());t.a=function(e){var t=e.singleQueryType,n=e.tags,a=e.tagObjects;return o.a.createElement(g,null,n&&n.map((function(e,n){return o.a.createElement(d,{key:n,label:e,singleQueryType:t})})),!n&&a&&a.map((function(e,n){return o.a.createElement(d,{key:n,label:e.tagName,singleQueryType:t,tagId:e.tagId})})))}},170:function(e,t,n){"use strict";var a=n(63),r=n(40),o=n(17),i=n(0),c=n.n(i),l=n(183),u=n.n(l),s=n(148),p=n(229),m=n(182),f=n.n(m),d=n(184),b=n.n(d),g=n(14),h=n(73),v=n(166),y=n(157),O=n.n(y);function x(){var e=Object(o.a)(["\n    display: flex;\n    align-items: center;\n"]);return x=function(){return e},e}function j(){var e=Object(o.a)(["\n    padding: 0px !important;\n"]);return j=function(){return e},e}var E=Object(g.b)(s.a)(j()),S=g.b.div(x()),k=window.location.protocol+"//"+window.location.host;t.a=Object(h.b)(null,{changeRatingAction:v.b})((function(e){var t=Object(i.useState)(0),n=Object(r.a)(t,2),o=n[0],l=n[1],s=e.readonly,m=e.readOnlyRating,d=e.hideReadOnlyLabel,g=e.userRating,h=e.userId,v=e.userName,y="";function x(t){var n=o===t?t-1:t;l(n),h&&v&&function(e,t,n,a){e.changeRatingAction({userId:t,userName:n,rating:a}),a||e.userHasReviewText?O.a.put(k+"/reviewRatings/rating",{mediaId:e.mediaId,mediaType:e.mediaType,userId:t,rating:a}).then((function(e){console.log("Successfully put the rating: ",e)})).catch((function(e){console.log(e)})):O.a.delete(k+"/reviewRatings"+"/".concat(e.mediaType,"/").concat(e.mediaId,"/").concat(t)).then((function(e){console.log("Successfully deleted the reviewRating",e)})).catch((function(e){console.log(e)}))}(e,h,v,n)}return s&&m?y=m.toFixed(2):g&&(y=g.toFixed(2)),Object(i.useEffect)((function(){o||l(g||0)}),[g]),c.a.createElement(p.a,{display:"flex"},Object(a.a)(Array(5)).map((function(e,t){return c.a.createElement(S,{key:t},s?c.a.createElement(c.a.Fragment,null,function(e,t){var n=((null===t||void 0===t?void 0:t.toFixed(2))||"0.00").split("."),a=Object(r.a)(n,2),o=a[0],i=a[1],l=parseInt(o),s=parseInt(i);if(e+1<=l)return c.a.createElement(f.a,{style:{fill:"#FFCC00"},fontSize:"small"});if(e!==l)return c.a.createElement(u.a,{style:{fill:"#FFCC00"},fontSize:"small"});var p=50*Math.round(s/50);return 0===p?c.a.createElement(u.a,{style:{fill:"#FFCC00"},fontSize:"small"}):50===p?c.a.createElement(b.a,{style:{fill:"#FFCC00"},fontSize:"small"}):100===p?c.a.createElement(f.a,{style:{fill:"#FFCC00"},fontSize:"small"}):void 0}(t,m)):c.a.createElement(E,{size:"small",onClick:function(){return x(t+1)}},t<o?c.a.createElement(f.a,{style:{fill:"#FFCC00"}}):c.a.createElement(u.a,{style:{fill:"#FFCC00"}})))})),c.a.createElement(p.a,{ml:1},s&&!d&&y))}))},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(41),r=function(e){return{type:a.c,filterName:e}}},175:function(e,t,n){e.exports=n.p+"static/media/MockCover.4d59545d.png"},178:function(e,t,n){"use strict";var a=n(40),r=n(17),o=n(0),i=n.n(o),c=n(14),l=n(369),u=n(116),s=n(144),p=n(152),m=n(148),f=n(268),d=n(214),b=n.n(d),g=n(215),h=n.n(g),v=n(145),y=n(7),O=n(158),x=n(172),j=n(167),E=n(157),S=n.n(E),k=n(170);function w(){var e=Object(r.a)(["\n    color: white;\n    &:hover {\n        color: grey;\n    }\n"]);return w=function(){return e},e}function P(){var e=Object(r.a)(["\n    margin-right: 10px;\n    background: none;\n    border: none;\n    color: ",";\n    cursor: pointer;\n    font-size: 16px;\n\n    &:hover {\n        color: ",";\n    }\n"]);return P=function(){return e},e}function F(){var e=Object(r.a)(["\n    height: 35px;\n    width: 100%;\n    position:absolute;\n    bottom:0;\n    display: flex;\n    justify-content: flex-end;\n"]);return F=function(){return e},e}function C(){var e=Object(r.a)(["\n    margin: 10px;\n    margin-bottom: ",";\n"]);return C=function(){return e},e}function T(){var e=Object(r.a)(["\n    overflow: auto;\n"]);return T=function(){return e},e}function R(){var e=Object(r.a)(["\n    max-height: ",";\n    display: flex;\n    flex-direction: column;\n    margin-right: 10px;\n    margin-left: 10px;\n"]);return R=function(){return e},e}function N(){var e=Object(r.a)(["\n    max-width: ","\n"]);return N=function(){return e},e}function M(){var e=Object(r.a)(["\n    max-height: ",";\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    margin: 10px;\n    overflow: auto;\n"]);return M=function(){return e},e}function I(){var e=Object(r.a)(["\n    height: ",";\n    overflow: auto;\n"]);return I=function(){return e},e}function A(){var e=Object(r.a)(["\n    background-color: ",";\n    height: 50px;\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n"]);return A=function(){return e},e}function z(){var e=Object(r.a)(["\n    width: ",";\n    height: ",";\n    position: absolute;\n    left: 50% !important;\n    top: 50% !important;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    position: relative;\n"]);return z=function(){return e},e}var B=c.b.div(z(),(function(e){return e.isSmall||e.isShort?"100vw":"500px"}),(function(e){return e.isSmall||e.isShort?"100vh":"500px"})),D=c.b.div(A(),(function(e){return e.theme.palette.primary.main})),G=c.b.div(I(),(function(e){return e.isSmall||e.isShort?"100%":"450px"})),V=c.b.div(M(),(function(e){return e.isShort?"80%":"350px"})),H=c.b.img(N(),(function(e){return e.isShort?"30%":"50%"})),K=c.b.div(R(),(function(e){return e.isShort?"80%":"350px"})),L=c.b.div(T()),W=c.b.div(C(),(function(e){return e.isSmall||e.isShort?"100px":"35px"})),Q=Object(c.b)(u.a)(F()),_=Object(c.b)(v.a)(P(),(function(e){return e.theme.palette.grey[600]}),(function(e){return e.theme.palette.grey[900]})),$=Object(c.b)(b.a)(w()),J=function(e){var t=e.isOpen,n=e.modalData,r=e.setModalOpen,c=Object(y.g)(),l=Object(o.useState)([]),u=Object(a.a)(l,2),d=u[0],b=u[1],g=Object(o.useState)(0),v=Object(a.a)(g,2),E=v[0],w=v[1],P=Object(s.a)("(max-width:450px)"),F=Object(s.a)("(max-height:500px)");return Object(o.useEffect)((function(){if(t){var e=n.id,a=n.mediaType===O.a.book?"books":"movies";S.a.get("/".concat(a,"/tags/").concat(e)).then((function(e){var t=e.data;b(t.nextStoryTags)})).catch((function(e){console.log("Error getting media",e)}))}}),[n,t]),Object(o.useEffect)((function(){if(t){var e=n.id,a=n.mediaType;S.a.get("/reviewRatings/averageRating/".concat(a,"/").concat(e)).then((function(e){var t=e.data;w(t.average)})).catch((function(e){console.log("Error getting media",e)}))}}),[n,t]),i.a.createElement(p.a,{open:t,onClose:function(){return r(!1)}},i.a.createElement(B,{isSmall:P,isShort:F},i.a.createElement(D,null,i.a.createElement(m.a,{onClick:function(){return r(!1)}},i.a.createElement($,null))),i.a.createElement(G,{isSmall:P,isShort:F},i.a.createElement(V,{isShort:F},i.a.createElement(H,{src:null===n||void 0===n?void 0:n.image,isShort:F}),i.a.createElement(K,{isShort:F},i.a.createElement(f.a,{variant:"h3",gutterBottom:!0},null===n||void 0===n?void 0:n.title," ",(null===n||void 0===n?void 0:n.mediaType)===O.a.movie?"(Movie)":"(Book)"),i.a.createElement(f.a,{variant:"subtitle2"},"Avg members rating: ",!E&&"No rating"),E>0&&i.a.createElement(k.a,{readOnlyRating:E,readonly:!0}),i.a.createElement(L,null,"Genres:",i.a.createElement(j.a,{tags:(null===n||void 0===n?void 0:n.genres)||[],singleQueryType:O.b.genre}),d.length>0&&i.a.createElement(i.a.Fragment,null,"Tags:",i.a.createElement(j.a,{tagObjects:d||[],singleQueryType:O.b.tag}))))),i.a.createElement(W,{isSmall:P,isShort:F},i.a.createElement(x.a,{content:(null===n||void 0===n?void 0:n.blurb)||""}))),i.a.createElement(Q,{elevation:3},i.a.createElement(_,{endIcon:i.a.createElement(h.a,null),onClick:function(){return function(){var e=n.id,t=n.mediaType;c.push("/".concat(t,"/").concat(e)),r(!1)}()}},"Go to page"))))};function U(){var e=Object(r.a)(["\n    height: 100%;\n    max-width: 100%;\n    cursor: pointer;\n    &:hover {\n        opacity: 50%;\n    }\n"]);return U=function(){return e},e}function q(){var e=Object(r.a)(["\n    height: 250px;\n    width: 175px;\n    display: flex;\n    justify-content: center;\n    align-items: space-between;\n    flex-direction: column;\n"]);return q=function(){return e},e}var X=Object(c.b)(l.a)(q()),Y=c.b.img(U());t.a=function(e){var t=e.cardData.image,n=Object(o.useState)(!1),r=Object(a.a)(n,2),c=r[0],l=r[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(J,{isOpen:c,setModalOpen:function(){return l(!1)},modalData:e.cardData}),i.a.createElement(X,{elevation:1},i.a.createElement(Y,{src:t,onClick:function(){return l(!0)}})))}},186:function(e,t,n){"use strict";var a=n(40),r=n(17),o=n(0),i=n.n(o),c=n(14),l=n(151),u=n(153),s=n(147),p=n(73),m=n(173),f=n(41),d=n(161);function b(){var e=Object(r.a)(["\n"]);return b=function(){return e},e}var g=Object(c.b)(l.a)(b());t.a=Object(p.b)((function(e){return{singleSearchPageFilter:e.singleSearchPageFilterReducer}}),{changeHomePageFilter:m.a,changeSingleSearchPageFilter:d.a})((function(e){var t=e.singleSearchPageFilter,n=e.isSearchPage,r=i.a.useState("all"),c=Object(a.a)(r,2),l=c[0],p=c[1];return Object(o.useEffect)((function(){n&&t&&p(t)}),[t]),Object(o.useEffect)((function(){switch(l){case"all":n?e.changeSingleSearchPageFilter(f.a):e.changeHomePageFilter(f.a);break;case"movies":n?e.changeSingleSearchPageFilter(f.d):e.changeHomePageFilter(f.d);break;case"books":n?e.changeSingleSearchPageFilter(f.b):e.changeHomePageFilter(f.b)}}),[l]),i.a.createElement(u.a,{smDown:!0},i.a.createElement(g,{value:l,onChange:function(e,t){p(t)},"aria-label":"home-page-filter",centered:!0},i.a.createElement(s.a,{component:"a",label:"All",value:"all"}),i.a.createElement(s.a,{component:"a",label:"Movies",value:"movies"}),i.a.createElement(s.a,{component:"a",label:"Books",value:"books"})))}))},187:function(e,t,n){"use strict";var a=n(40),r=n(17),o=n(0),i=n.n(o),c=n(14),l=n(269),u=n(153),s=n(270),p=n(188),m=n.n(p),f=n(189),d=n.n(f),b=n(190),g=n.n(b),h=n(73),v=n(173),y=n(161),O=n(41);function x(){var e=Object(r.a)(["\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n"]);return x=function(){return e},e}var j=Object(c.b)(l.a)(x());t.a=Object(h.b)((function(e){return{singleSearchPageFilter:e.singleSearchPageFilterReducer}}),{changeHomePageFilter:v.a,changeSingleSearchPageFilter:y.a})((function(e){var t=e.singleSearchPageFilter,n=e.isSearchPage,r=Object(o.useState)(O.a),c=Object(a.a)(r,2),l=c[0],p=c[1];return Object(o.useEffect)((function(){n&&t&&p(t)}),[t]),Object(o.useEffect)((function(){switch(l){case"all":n?e.changeSingleSearchPageFilter(O.a):e.changeHomePageFilter(O.a);break;case"movies":n?e.changeSingleSearchPageFilter(O.d):e.changeHomePageFilter(O.d);break;case"books":n?e.changeSingleSearchPageFilter(O.b):e.changeHomePageFilter(O.b)}}),[l]),i.a.createElement(u.a,{mdUp:!0},i.a.createElement(j,{value:l,onChange:function(e,t){p(t)},showLabels:!0,"aria-label":"home-page-filter"},i.a.createElement(s.a,{label:"All",icon:i.a.createElement(m.a,null),value:"all"}),i.a.createElement(s.a,{label:"Movies",icon:i.a.createElement(d.a,null),value:"movies"}),i.a.createElement(s.a,{label:"Books",icon:i.a.createElement(g.a,null),value:"books"})))}))},188:function(e,t,n){"use strict";var a=n(47);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(62)).default)(r.default.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.default=o},189:function(e,t,n){"use strict";var a=n(47);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(62)).default)(r.default.createElement("path",{d:"M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"}),"Movie");t.default=o},190:function(e,t,n){"use strict";var a=n(47);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(62)).default)(r.default.createElement("path",{d:"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"}),"Book");t.default=o},216:function(e,t,n){e.exports=n.p+"static/media/MockBookCover.db0a0480.jpg"},229:function(e,t,n){"use strict";var a=n(28),r=n(1),o=(n(3),n(49));var i=function(e){var t=function(t){var n=e(t);return t.css?Object(r.a)(Object(r.a)({},Object(o.a)(n,e(Object(r.a)({theme:t.theme},t.css)))),function(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}(t.css,[e.filterProps])):n};return t.propTypes={},t.filterProps=["css"].concat(Object(a.a)(e.filterProps)),t};var c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=function(e){return t.reduce((function(t,n){var a=n(e);return a?Object(o.a)(t,a):t}),{})};return a.propTypes={},a.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),a},l=n(9),u=n(76);function s(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var p=function(e){var t=e.prop,n=e.cssProperty,a=void 0===n?e.prop:n,r=e.themeKey,o=e.transform,i=function(e){if(null==e[t])return null;var n=e[t],i=s(e.theme,r)||{};return Object(u.a)(e,n,(function(e){var t;return"function"===typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=s(i,e)||e,o&&(t=o(t))),!1===a?t:Object(l.a)({},a,t)}))};return i.propTypes={},i.filterProps=[t],i};function m(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var f=c(p({prop:"border",themeKey:"borders",transform:m}),p({prop:"borderTop",themeKey:"borders",transform:m}),p({prop:"borderRight",themeKey:"borders",transform:m}),p({prop:"borderBottom",themeKey:"borders",transform:m}),p({prop:"borderLeft",themeKey:"borders",transform:m}),p({prop:"borderColor",themeKey:"palette"}),p({prop:"borderRadius",themeKey:"shape"})),d=c(p({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),p({prop:"display"}),p({prop:"overflow"}),p({prop:"textOverflow"}),p({prop:"visibility"}),p({prop:"whiteSpace"})),b=c(p({prop:"flexBasis"}),p({prop:"flexDirection"}),p({prop:"flexWrap"}),p({prop:"justifyContent"}),p({prop:"alignItems"}),p({prop:"alignContent"}),p({prop:"order"}),p({prop:"flex"}),p({prop:"flexGrow"}),p({prop:"flexShrink"}),p({prop:"alignSelf"}),p({prop:"justifyItems"}),p({prop:"justifySelf"})),g=c(p({prop:"gridGap"}),p({prop:"gridColumnGap"}),p({prop:"gridRowGap"}),p({prop:"gridColumn"}),p({prop:"gridRow"}),p({prop:"gridAutoFlow"}),p({prop:"gridAutoColumns"}),p({prop:"gridAutoRows"}),p({prop:"gridTemplateColumns"}),p({prop:"gridTemplateRows"}),p({prop:"gridTemplateAreas"}),p({prop:"gridArea"})),h=c(p({prop:"position"}),p({prop:"zIndex",themeKey:"zIndex"}),p({prop:"top"}),p({prop:"right"}),p({prop:"bottom"}),p({prop:"left"})),v=c(p({prop:"color",themeKey:"palette"}),p({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),y=p({prop:"boxShadow",themeKey:"shadows"});function O(e){return e<=1?"".concat(100*e,"%"):e}var x=p({prop:"width",transform:O}),j=p({prop:"maxWidth",transform:O}),E=p({prop:"minWidth",transform:O}),S=p({prop:"height",transform:O}),k=p({prop:"maxHeight",transform:O}),w=p({prop:"minHeight",transform:O}),P=(p({prop:"size",cssProperty:"width",transform:O}),p({prop:"size",cssProperty:"height",transform:O}),c(x,j,E,S,k,w,p({prop:"boxSizing"}))),F=n(154),C=c(p({prop:"fontFamily",themeKey:"typography"}),p({prop:"fontSize",themeKey:"typography"}),p({prop:"fontStyle",themeKey:"typography"}),p({prop:"fontWeight",themeKey:"typography"}),p({prop:"letterSpacing"}),p({prop:"lineHeight"}),p({prop:"textAlign"})),T=n(2),R=n(0),N=n.n(R),M=n(4),I=n(21),A=n.n(I),z=n(150);function B(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}var D=n(52),G=function(e){var t=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.name,o=Object(T.a)(n,["name"]);var i,c=a,l="function"===typeof t?function(e){return{root:function(n){return t(Object(r.a)({theme:e},n))}}}:{root:t},u=Object(z.a)(l,Object(r.a)({Component:e,name:a||e.displayName,classNamePrefix:c},o));t.filterProps&&(i=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var s=N.a.forwardRef((function(t,n){var a=t.children,o=t.className,c=t.clone,l=t.component,s=Object(T.a)(t,["children","className","clone","component"]),p=u(t),m=Object(M.a)(p.root,o),f=s;if(i&&(f=B(f,i)),c)return N.a.cloneElement(a,Object(r.a)({className:Object(M.a)(a.props.className,m)},f));if("function"===typeof a)return a(Object(r.a)({className:m},f));var d=l||e;return N.a.createElement(d,Object(r.a)({ref:n,className:m},f),a)}));return A()(s,e),s}}(e);return function(e,n){return t(e,Object(r.a)({defaultTheme:D.a},n))}},V=i(c(f,d,b,g,h,v,y,P,F.b,C)),H=G("div")(V,{name:"MuiBox"});t.a=H},269:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(0),i=(n(25),n(3),n(4)),c=n(5),l=o.forwardRef((function(e,t){var n=e.children,c=e.classes,l=e.className,u=e.component,s=void 0===u?"div":u,p=e.onChange,m=e.showLabels,f=void 0!==m&&m,d=e.value,b=Object(r.a)(e,["children","classes","className","component","onChange","showLabels","value"]);return o.createElement(s,Object(a.a)({className:Object(i.a)(c.root,l),ref:t},b),o.Children.map(n,(function(e,t){if(!o.isValidElement(e))return null;var n=void 0===e.props.value?t:e.props.value;return o.cloneElement(e,{selected:n===d,showLabel:void 0!==e.props.showLabel?e.props.showLabel:f,value:n,onChange:p})})))}));t.a=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"center",height:56,backgroundColor:e.palette.background.paper}}}),{name:"MuiBottomNavigation"})(l)},270:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(0),i=(n(3),n(4)),c=n(5),l=n(72),u=o.forwardRef((function(e,t){var n=e.classes,c=e.className,u=e.icon,s=e.label,p=e.onChange,m=e.onClick,f=e.selected,d=e.showLabel,b=e.value,g=Object(r.a)(e,["classes","className","icon","label","onChange","onClick","selected","showLabel","value"]);return o.createElement(l.a,Object(a.a)({ref:t,className:Object(i.a)(n.root,c,f?n.selected:!d&&n.iconOnly),focusRipple:!0,onClick:function(e){p&&p(e,b),m&&m(e)}},g),o.createElement("span",{className:n.wrapper},u,o.createElement("span",{className:Object(i.a)(n.label,f?n.selected:!d&&n.iconOnly)},s)))}));t.a=Object(c.a)((function(e){return{root:{transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"6px 12px 8px",minWidth:80,maxWidth:168,color:e.palette.text.secondary,flex:"1","&$iconOnly":{paddingTop:16},"&$selected":{paddingTop:6,color:e.palette.primary.main}},selected:{},iconOnly:{},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"},label:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s","&$iconOnly":{opacity:0,transitionDelay:"0s"},"&$selected":{fontSize:e.typography.pxToRem(14)}}}}),{name:"MuiBottomNavigationAction"})(u)},380:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(159),i=n(268),c=n(63),l=n(40),u=n(17),s=n(179),p=n.n(s),m=(n(181),n(178)),f=n(14),d=n(175),b=n.n(d),g=n(216),h=n.n(g),v=n(158),y=n(157),O=n.n(y),x=n(73),j=n(41);function E(){var e=Object(u.a)(["\n    margin-top: 20px;\n"]);return E=function(){return e},e}var S=Object(f.b)(p.a)(E()),k=Object(x.b)((function(e){return{homePageFilterReducer:e.homePageFilterReducer}}))((function(e){var t=Object(a.useState)([{title:"",id:"",mediaType:v.a.start,image:b.a,people:"",genres:[],nextStoryTags:[],blurb:"",avgRating:0}]),n=Object(l.a)(t,2),o=n[0],i=n[1],u=Object(a.useState)([{title:"",id:"",mediaType:v.a.start,image:h.a,people:"",genres:[],nextStoryTags:[],blurb:"",avgRating:0}]),s=Object(l.a)(u,2),p=s[0],f=s[1],d=Object(a.useRef)(!0);Object(a.useEffect)((function(){if(O.a.get("/thirdPartyMovieApi/tmdbMovies/popularMovies").then((function(e){var t=e.data;if(!d.current)return null;i(t)})).catch((function(e){console.log(e)})),O.a.get("/thirdPartyBookApi/googleBooks/popularBooks").then((function(e){var t=e.data;if(!d.current)return null;f(t)})).catch((function(e){console.log(e)})),p.length>1&&o.length>1)return function(){d.current=!1}}),[]);return r.a.createElement(S,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,draggable:!0,infinite:!0,keyBoardControl:!0,minimumTouchDrag:80,slidesToSlide:1,swipeable:!0,centerMode:!0,removeArrowOnDeviceType:["xxs","xs","sm"],responsive:{xl:{breakpoint:{max:3e3,min:1920},items:6,partialVisibilityGutter:40},lg:{breakpoint:{max:1920,min:1280},items:5,partialVisibilityGutter:30},md:{breakpoint:{max:1280,min:1100},items:4,partialVisibilityGutter:0},xmd:{breakpoint:{max:1100,min:900},items:3,partialVisibilityGutter:0},sm:{breakpoint:{max:900,min:600},items:2,partialVisibilityGutter:0},xs:{breakpoint:{max:600,min:400},items:1,partialVisibilityGutter:0},xxs:{breakpoint:{max:400,min:0},items:.5,partialVisibilityGutter:100}}},function(e){switch(e){case j.a:return[].concat(Object(c.a)(p),Object(c.a)(o)).map((function(e,t){return r.a.createElement(m.a,{key:t,cardData:e})}));case j.d:return o.map((function(e,t){return r.a.createElement(m.a,{key:t,cardData:e})}));case j.b:return p.map((function(e,t){return r.a.createElement(m.a,{key:t,cardData:e})}));default:return[].concat(Object(c.a)(p),Object(c.a)(o)).map((function(e,t){return r.a.createElement(m.a,{key:t,cardData:e})}))}}(e.homePageFilterReducer))}));function w(){var e=Object(u.a)(["\n    margin-top: 20px;\n"]);return w=function(){return e},e}var P=Object(f.b)(p.a)(w()),F=Object(x.b)((function(e){return{homePageFilterReducer:e.homePageFilterReducer}}))((function(e){var t=Object(a.useState)([{title:"",id:"",mediaType:v.a.start,image:b.a,people:"",genres:[],nextStoryTags:[],blurb:"",avgRating:0}]),n=Object(l.a)(t,2),o=n[0],i=n[1],u=Object(a.useState)([{title:"",id:"",mediaType:v.a.start,image:h.a,people:"",genres:[],nextStoryTags:[],blurb:"",avgRating:0}]),s=Object(l.a)(u,2),p=s[0],f=s[1],d=Object(a.useRef)(!0);Object(a.useEffect)((function(){if(O.a.get("/thirdPartyMovieApi/tmdbMovies/movieRecommendations").then((function(e){var t=e.data;if(!d.current)return null;i(t)})).catch((function(e){console.log(e)})),O.a.get("/thirdPartyBookApi/googleBooks/bookRecommendations").then((function(e){var t=e.data;if(!d.current)return null;f(t)})).catch((function(e){console.log(e)})),p.length>1&&o.length>1)return function(){d.current=!1}}),[]);return r.a.createElement(P,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,draggable:!0,infinite:!0,keyBoardControl:!0,minimumTouchDrag:80,slidesToSlide:1,swipeable:!0,centerMode:!0,removeArrowOnDeviceType:["xxs","xs","sm"],responsive:{xl:{breakpoint:{max:3e3,min:1920},items:6,partialVisibilityGutter:40},lg:{breakpoint:{max:1920,min:1280},items:5,partialVisibilityGutter:30},md:{breakpoint:{max:1280,min:1100},items:4,partialVisibilityGutter:0},xmd:{breakpoint:{max:1100,min:900},items:3,partialVisibilityGutter:0},sm:{breakpoint:{max:900,min:600},items:2,partialVisibilityGutter:0},xs:{breakpoint:{max:600,min:400},items:1,partialVisibilityGutter:0},xxs:{breakpoint:{max:400,min:0},items:.5,partialVisibilityGutter:100}}},function(e){switch(e){case j.a:return[].concat(Object(c.a)(p),Object(c.a)(o)).map((function(e,t){return r.a.createElement(m.a,{key:t,cardData:e})}));case j.d:return o.map((function(e,t){return r.a.createElement(m.a,{key:t,cardData:e})}));case j.b:return p.map((function(e,t){return r.a.createElement(m.a,{key:t,cardData:e})}));default:return[].concat(Object(c.a)(p),Object(c.a)(o)).map((function(e,t){return r.a.createElement(m.a,{key:t,cardData:e})}))}}(e.homePageFilterReducer))})),C=n(186),T=n(187);t.default=function(){return r.a.createElement(o.a,{maxWidth:"lg"},r.a.createElement(C.a,null),r.a.createElement(i.a,{variant:"h1"},"Recommendation"),r.a.createElement(F,null),r.a.createElement("br",null),r.a.createElement(i.a,{variant:"h1"},"Popular"),r.a.createElement(k,null),r.a.createElement(T.a,null))}}}]);
//# sourceMappingURL=10.b7ee7e01.chunk.js.map