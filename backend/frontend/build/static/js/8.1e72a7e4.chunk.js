(this["webpackJsonpnext-story"]=this["webpackJsonpnext-story"]||[]).push([[8],{158:function(e,t,n){"use strict";var a=n(22),r=n(0),i=n.n(r),o=n(138),c=n(17);function u(){var e=Object(a.a)(["\n    margin-top: 85px;\n"]);return u=function(){return e},e}var l=Object(c.b)(o.a)(u());t.a=function(e){return i.a.createElement(l,{maxWidth:e.maxWidth},e.children)}},162:function(e,t,n){e.exports=n.p+"static/media/MockCover.4d59545d.png"},163:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.movie="movie",e.book="book"}(a||(a={}))},174:function(e,t,n){"use strict";var a=n(22),r=n(0),i=n.n(r),o=n(17);function c(){var e=Object(a.a)(["\n    border-radius: 7px;\n    color: white;\n    outline: none;\n    border: none;\n    margin: 5px;\n    cursor: pointer;\n    background-color: ",";\n    &:hover {\n        background-color: ",";\n    }\n    font-size: 16px;\n    padding: 3px 5px 3px 5px;\n"]);return c=function(){return e},e}var u=o.b.button(c(),(function(e){return e.theme.palette.primary.light}),(function(e){return e.theme.palette.secondary.light})),l=function(e){var t=e.tag;return i.a.createElement(i.a.Fragment,null,t&&i.a.createElement(u,null,t))};function m(){var e=Object(a.a)(["\n    margin-bottom: 15px;\n"]);return m=function(){return e},e}var s=o.b.div(m());t.a=function(e){var t=e.tags,n=e.tagObjects;return i.a.createElement(s,null,t&&t.map((function(e,t){return i.a.createElement(l,{key:t,tag:e})})),!t&&n&&n.map((function(e,t){return i.a.createElement(l,{key:t,tag:e.tagName})})))}},175:function(e,t,n){"use strict";var a=n(42),r=n(22),i=n(0),o=n.n(i),c=n(17),u=n(339),l=n(111),m=n(142),s=n(150),d=n(146),b=n(140),p=n(183),f=n.n(p),v=n(184),g=n.n(v),h=n(143),E=n(8);function x(){var e=Object(r.a)(["\n    color: white;\n    &:hover {\n        color: grey;\n    }\n"]);return x=function(){return e},e}function O(){var e=Object(r.a)(["\n    margin-right: 10px;\n    background: none;\n    border: none;\n    color: ",";\n    cursor: pointer;\n    font-size: 16px;\n\n    &:hover {\n        color: ",";\n    }\n"]);return O=function(){return e},e}function j(){var e=Object(r.a)(["\n    height: 35px;\n    width: 100%;\n    position:absolute;\n    bottom:0;\n    display: flex;\n    justify-content: flex-end;\n"]);return j=function(){return e},e}function y(){var e=Object(r.a)(["\n    margin: 10px;\n    margin-bottom: ",";\n"]);return y=function(){return e},e}function w(){var e=Object(r.a)(["\n    overflow: auto;\n"]);return w=function(){return e},e}function S(){var e=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 10px;\n"]);return S=function(){return e},e}function k(){var e=Object(r.a)(["\n    max-width: ","\n"]);return k=function(){return e},e}function M(){var e=Object(r.a)(["\n    max-height: ",";\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    margin: 10px;\n    overflow: auto;\n"]);return M=function(){return e},e}function D(){var e=Object(r.a)(["\n    height: ",";\n    overflow: auto;\n"]);return D=function(){return e},e}function T(){var e=Object(r.a)(["\n    background-color: ",";\n    height: 50px;\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n"]);return T=function(){return e},e}function A(){var e=Object(r.a)(["\n    width: ",";\n    height: ",";\n    position: absolute;\n    left: 50% !important;\n    top: 50% !important;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    position: relative;\n"]);return A=function(){return e},e}var F=c.b.div(A(),(function(e){return e.isSmall||e.isShort?"100vw":"500px"}),(function(e){return e.isSmall||e.isShort?"100vh":"500px"})),P=c.b.div(T(),(function(e){return e.theme.palette.primary.main})),q=c.b.div(D(),(function(e){return e.isSmall||e.isShort?"100%":"450px"})),R=c.b.div(M(),(function(e){return e.isShort?"80%":"350px"})),z=c.b.img(k(),(function(e){return e.isShort?"30%":"50%"})),C=c.b.div(S()),G=c.b.div(w()),U=c.b.div(y(),(function(e){return e.isSmall||e.isShort?"100px":"35px"})),B=Object(c.b)(l.a)(j()),V=Object(c.b)(h.a)(O(),(function(e){return e.theme.palette.grey[600]}),(function(e){return e.theme.palette.grey[900]})),W=Object(c.b)(f.a)(x()),H=function(e){var t,n,a=e.isOpen,r=e.modalData,i=e.setModalOpen,c=Object(E.f)(),u=Object(m.a)("(max-width:450px)"),l=Object(m.a)("(max-height:500px)");return o.a.createElement(s.a,{open:a,onClose:function(){return i(!1)}},o.a.createElement(F,{isSmall:u,isShort:l},o.a.createElement(P,null,o.a.createElement(d.a,{onClick:function(){return i(!1)}},o.a.createElement(W,null))),o.a.createElement(q,{isSmall:u,isShort:l},o.a.createElement(R,{isShort:l},o.a.createElement(z,{src:null===r||void 0===r?void 0:r.image,isShort:l}),o.a.createElement(C,null,o.a.createElement(b.a,{variant:"h3",gutterBottom:!0},null===r||void 0===r?void 0:r.title),o.a.createElement(b.a,{variant:"caption",gutterBottom:!0},"Avg Rating: ",null===r||void 0===r||null===(t=r.avgRating)||void 0===t?void 0:t.toString()),o.a.createElement(G,null,o.a.createElement(b.a,null,null===r||void 0===r||null===(n=r.tags)||void 0===n?void 0:n.join(", "))))),o.a.createElement(U,{isSmall:u,isShort:l},o.a.createElement(b.a,{variant:"body1"},null===r||void 0===r?void 0:r.blurb))),o.a.createElement(B,{elevation:3},o.a.createElement(V,{endIcon:o.a.createElement(g.a,null),onClick:function(){return function(){var e=r.id,t=r.mediaType;c.push("/".concat(t,"/").concat(e)),i(!1)}()}},"Go to page"))))};function I(){var e=Object(r.a)(["\n    max-height: 250px;\n    max-width: 100%;\n    cursor: pointer;\n    &:hover {\n        opacity: 50%;\n    }\n"]);return I=function(){return e},e}function J(){var e=Object(r.a)(["\n    height: 250px;\n    width: 175px;\n    display: flex;\n    justify-content: center;\n    align-items: space-between;\n    flex-direction: column;\n"]);return J=function(){return e},e}var L=Object(c.b)(u.a)(J()),_=c.b.img(I());t.a=function(e){var t=e.cardData.image,n=Object(i.useState)(!1),r=Object(a.a)(n,2),c=r[0],u=r[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(H,{isOpen:c,setModalOpen:function(){return u(!1)},modalData:e.cardData}),o.a.createElement(L,{elevation:1},o.a.createElement(_,{src:t,onClick:function(){return u(!0)}})))}},229:function(e,t,n){"use strict";var a=n(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=(0,a(n(60)).default)(r.default.createElement("path",{d:"M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"}),"AccountBox");t.default=i},231:function(e,t,n){"use strict";var a=n(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=(0,a(n(60)).default)(r.default.createElement("path",{d:"M10 17l5-5-5-5v10z"}),"ArrowRight");t.default=i},349:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(230),o=n(22),c=n(17),u=n(140),l=n(229),m=n.n(l);function s(){var e=Object(o.a)([""]);return s=function(){return e},e}function d(){var e=Object(o.a)(["\n  &.MuiTypography-body1 {\n    font-weight: bold;\n  }\n"]);return d=function(){return e},e}function b(){var e=Object(o.a)(["\n  width: 150px;\n  &>:first-child {\n    border: solid 2px #D3D3D3;\n    height: 150px;\n  }\n"]);return b=function(){return e},e}function p(){var e=Object(o.a)(["\n  &.MuiSvgIcon-root {\n    width: 100%;\n    height: 100%;\n  }\n"]);return p=function(){return e},e}function f(){var e=Object(o.a)(["\n  flex: 0 1 auto;\n  min-width: 300px;\n  /* height: 100vh; */\n  /* overflow-x: hidden; */\n  /* overflow-y: auto; */\n  & > * {\n    margin-bottom: 10px;\n  }\n"]);return f=function(){return e},e}var v=c.b.div(f()),g=Object(c.b)(m.a)(p()),h=c.b.div(b()),E=Object(c.b)(u.a)(d()),x=c.b.div(s()),O=function(){return r.a.createElement(v,{id:"userinfo"},r.a.createElement(h,{id:"profile-pic"},r.a.createElement("div",null,r.a.createElement(g,{color:"disabled",fontSize:"large"})),r.a.createElement(u.a,{align:"center",color:"primary",variant:"body1"},"(Edit Profile)")),r.a.createElement(x,null,r.a.createElement(u.a,{variant:"body2"},"User Name: Name Here"),r.a.createElement(u.a,{variant:"body2"},"Books Read: 20"),r.a.createElement(u.a,{variant:"body2"},"Movies Watched 10")),r.a.createElement("div",null,r.a.createElement(E,null,"About Me/Message User"),r.a.createElement(u.a,{variant:"body2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Quis auctor elit sed vulputate. Lobortis elementum nibh tellus molestie nunc non blandit massa. Aliquam purus sit amet luctus venenatis lectus magna. Ac felis donec et odio pellentesque. Etiam erat velit scelerisque in dictum. Ridiculus mus mauris vitae ultricies leo integer malesuada. Sed pulvinar proin gravida hendrerit lectus. Faucibus interdum posuere lorem ipsum dolor.")),r.a.createElement("div",null,r.a.createElement(E,null,"Contact"),r.a.createElement(u.a,{variant:"body2"},"Contact Placeholder")))},j=n(142),y=n(158),w=n(27),S=n(179),k=n.n(S),M=(n(182),n(175)),D=n(162),T=n.n(D),A=n(231),F=n.n(A),P=n(355);function q(){var e=Object(o.a)(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n"]);return q=function(){return e},e}function R(){var e=Object(o.a)(["\n  border: 1px solid rgba(0, 0, 0, 0.23);\n  border-left: none;\n  border-radius: 0 4px 4px 0;\n  :hover{\n    cursor: pointer;\n  }\n"]);return R=function(){return e},e}function z(){var e=Object(o.a)(["\n  &.MuiOutlinedInput-root {\n    border-radius: 4px 0 0 4px;\n  }\n"]);return z=function(){return e},e}function C(){var e=Object(o.a)(["\n  &.MuiGrid-container {\n    flex-wrap: nowrap;\n  }\n"]);return C=function(){return e},e}var G=Object(c.b)(i.a)(C()),U=Object(c.b)(P.a)(z()),B=Object(c.b)(i.a)(R()),V=c.b.div(q()),W=function(){return r.a.createElement("div",null,r.a.createElement(G,{container:!0,spacing:0,alignItems:"stretch"},r.a.createElement(i.a,{item:!0},r.a.createElement(U,{name:"search",type:"search",placeholder:"Search"})),r.a.createElement(B,{item:!0},r.a.createElement(V,null,r.a.createElement(F.a,{fontSize:"large"})))))},H=n(352),I=function(){return r.a.createElement(H.a,{variant:"outlined",native:!0},r.a.createElement("option",{value:1},"Option 1"),r.a.createElement("option",{value:2},"Option 2"))},J=n(163);function L(){var e=Object(o.a)(["\n  margin-top: 20px;\n"]);return L=function(){return e},e}var _=Object(c.b)(k.a)(L()),N={title:"Mock Title Harry Potter Mock Title Harry Potter",image:T.a,mediaType:J.a.movie,nextStoryTags:[],people:"J.K. Rowling",tags:["fantasy","action","sci-fi","superheroes","tag1","tag2","tag3"],blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",avgRating:3},K=function(){return r.a.createElement(i.a,{spacing:1,container:!0},r.a.createElement(i.a,{item:!0,xs:6},r.a.createElement(I,null)),r.a.createElement(i.a,{item:!0,xs:6},r.a.createElement(W,null)))},Q=function(e){var t=e.title,n=e.withSearchSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{variant:"h4"},t),r.a.createElement("div",null,n&&r.a.createElement(K,null)),r.a.createElement(_,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,draggable:!0,infinite:!0,keyBoardControl:!0,minimumTouchDrag:80,slidesToSlide:1,swipeable:!0,centerMode:!0,removeArrowOnDeviceType:["xmd","sm","xs"],responsive:{xl:{breakpoint:{max:3e3,min:1200},items:2.4,partialVisibilityGutter:40},lg:{breakpoint:{max:1200,min:960},items:1.5,partialVisibilityGutter:20},md:{breakpoint:{max:960,min:768},items:2,partialVisibilityGutter:0},xmd:{breakpoint:{max:768,min:480},items:1.5,partialVisibilityGutter:20},sm:{breakpoint:{max:480,min:0},items:.8,partialVisibilityGutter:50}}},r.a.createElement(M.a,{cardData:Object(w.a)(Object(w.a)({},N),{},{id:"mock1"})}),r.a.createElement(M.a,{cardData:Object(w.a)(Object(w.a)({},N),{},{id:"mock2"})}),r.a.createElement(M.a,{cardData:Object(w.a)(Object(w.a)({},N),{},{id:"mock3"})}),r.a.createElement(M.a,{cardData:Object(w.a)(Object(w.a)({},N),{},{id:"mock4"})}),r.a.createElement(M.a,{cardData:Object(w.a)(Object(w.a)({},N),{},{id:"mock5"})}),r.a.createElement(M.a,{cardData:Object(w.a)(Object(w.a)({},N),{},{id:"mock6"})}),r.a.createElement(M.a,{cardData:Object(w.a)(Object(w.a)({},N),{},{id:"mock7"})}),r.a.createElement(M.a,{cardData:Object(w.a)(Object(w.a)({},N),{},{id:"mock8"})})))},X=n(174);function Y(){var e=Object(o.a)(["\n  min-width: 350px;\n  margin: 0 auto;\n"]);return Y=function(){return e},e}function Z(){var e=Object(o.a)(["\n  > * {\n    :not(:first-child) {\n      margin-top: 30px;\n    }\n  }\n"]);return Z=function(){return e},e}var $=c.b.div(Z()),ee=c.b.div(Y()),te=function(){return r.a.createElement($,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null,r.a.createElement(u.a,{variant:"h4"},"Favourite Genres"),r.a.createElement(X.a,{tags:["fantasy","action","sci-fi","superheroes","tag1","tag2","tag3"]})),r.a.createElement(ee,null,r.a.createElement(u.a,{variant:"h4"},"Favourite Authors/Studios:"),r.a.createElement(X.a,{tags:["J.K. Rowling","Walt Disney Pictures","Universal Pictures","Some More Tags","Another Tag","More Tags","And Tags","Fill Up Space For Multi-line Testing"]})),r.a.createElement(ee,null,r.a.createElement(Q,{title:"User's Favourite Books:"})),r.a.createElement(ee,null,r.a.createElement(Q,{title:"User's Read/Watched List",withSearchSelect:!0}))))};t.default=function(){var e=Object(j.a)("(min-width: 960px)");return r.a.createElement(y.a,{maxWidth:e?"lg":"sm"},r.a.createElement(i.a,{container:!0,spacing:5},r.a.createElement(i.a,{item:!0,xs:12,sm:12,md:5},r.a.createElement(O,null)),r.a.createElement(i.a,{item:!0,xs:12,sm:12,md:7},r.a.createElement(te,null))))}}}]);
//# sourceMappingURL=8.1e72a7e4.chunk.js.map