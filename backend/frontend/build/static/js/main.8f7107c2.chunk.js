(this["webpackJsonpnext-story"]=this["webpackJsonpnext-story"]||[]).push([[4],{101:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o);n(101),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(147),l=n(90),u=Object(l.a)({typography:{h1:{fontSize:32,fontFamily:'"Cambria Math", "Roboto", "Helvetica", "Arial", sans-serif'},h2:{fontSize:28},h3:{fontSize:24},h4:{fontSize:20},h5:{fontSize:16},h6:{fontSize:12}}}),s=n(30),m=n(45),f=n(72),d=n(52),b=n(53),p=n(60),h=n(59),g=n(9),E=n(91),v=n(138),O=n(140),j=function(){return r.a.createElement(v.a,null,r.a.createElement(O.a,{variant:"h3"},"Loading..."))},k=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.load,n=Object(E.a)(e,["load"]),o=Object(a.lazy)((function(){return t()}));return r.a.createElement(a.Suspense,{fallback:r.a.createElement(j,null)},r.a.createElement(o,n))}}]),n}(r.a.Component),x=function(e){var t=e.component,n=sessionStorage.getItem("NS-session-data"),a=n&&JSON.parse(n),o=null===a||void 0===a?void 0:a.expiry,c=o&&new Date(o)>new Date;c||sessionStorage.removeItem("NS-session-data");for(var i=arguments.length,l=new Array(i>1?i-1:0),u=1;u<i;u++)l[u-1]=arguments[u];return r.a.createElement(g.b,Object.assign({},l,{render:function(e){return c?r.a.createElement(t,e):r.a.createElement(g.a,{to:{pathname:"/signup",state:{from:e.location}}})}}))},w=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.d,null,r.a.createElement(x,{exact:!0,key:"home",path:"/",component:function(e){return r.a.createElement(k,Object.assign({load:function(){return Promise.all([n.e(2),n.e(9)]).then(n.bind(null,351))}},e))}}),r.a.createElement(x,{exact:!0,key:"profile",path:"/profile",component:function(e){return r.a.createElement(k,Object.assign({load:function(){return Promise.all([n.e(1),n.e(2),n.e(8)]).then(n.bind(null,350))}},e))}}),r.a.createElement(g.b,{exact:!0,key:"login",path:"/login",render:function(e){return r.a.createElement(k,Object.assign({load:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(11)]).then(n.bind(null,349))}},e))}}),r.a.createElement(g.b,{exact:!0,key:"signup",path:"/signup",render:function(e){return r.a.createElement(k,Object.assign({load:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(12)]).then(n.bind(null,354))}},e))}}),r.a.createElement(x,{exact:!0,key:"mediaPage",path:"/:mediaType/:id",component:function(e){return r.a.createElement(k,Object.assign({load:function(){return Promise.all([n.e(0),n.e(7),n.e(10)]).then(n.bind(null,348))}},e))}}),r.a.createElement(x,{exact:!0,key:"nextStoryTagPage",path:"/allStoryTags",component:function(e){return r.a.createElement(k,Object.assign({load:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,345))}},e))}}),r.a.createElement(x,{exact:!0,key:"notFound",path:"*",component:function(e){return r.a.createElement(k,Object.assign({load:function(){return n.e(14).then(n.bind(null,346))}},e))}})))}}]),a}(r.a.Component),y=n(42),S=n(22),I=n(17),_=n(141),P=n(151),C=n(149),N=n(152),T=n(143),z=n(119),D=n(153),L=n(144),B=n(145),R=n(146),X=n(67),A=n.n(X),F=n(88),J=n.n(F),M=n(89),U=n.n(M);function W(){var e=Object(S.a)(["\n"]);return W=function(){return e},e}function V(){var e=Object(S.a)(["\n    background-color: white;\n"]);return V=function(){return e},e}function H(){var e=Object(S.a)(["\n"]);return H=function(){return e},e}function $(){var e=Object(S.a)(["\n"]);return $=function(){return e},e}function q(){var e=Object(S.a)(["\n"]);return q=function(){return e},e}function G(){var e=Object(S.a)(["\n    display: flex;\n"]);return G=function(){return e},e}function K(){var e=Object(S.a)(["\n"]);return K=function(){return e},e}function Q(){var e=Object(S.a)(["\n    flex: 1;\n"]);return Q=function(){return e},e}function Y(){var e=Object(S.a)(["\n    color: white;\n    text-decoration: none;\n"]);return Y=function(){return e},e}function Z(){var e=Object(S.a)(["\n    top: 0;\n    left: 0;\n    width: 100%;\n"]);return Z=function(){return e},e}var ee=Object(I.b)(_.a)(Z()),te=I.b.a(Y()),ne=I.b.div(Q()),ae=Object(I.b)(P.a)(K()),re=I.b.div(G()),oe=Object(I.b)(P.a)(q()),ce=Object(I.b)(P.a)($()),ie=Object(I.b)(C.a)(H()),le=Object(I.b)(N.a)(V()),ue=Object(I.b)(T.a)(W()),se=function(){var e=r.a.useState(!1),t=Object(y.a)(e,2),n=t[0],o=t[1],c=r.a.useState(null),i=Object(y.a)(c,2),l=i[0],u=i[1],s=r.a.useState(null),m=Object(y.a)(s,2),f=m[0],d=m[1],b=Object(g.g)();Object(a.useEffect)((function(){switch(n){case"explore":break;case"tags":b.push("/allStoryTags");break;case"login":b.push("/login");break;case"signup":b.push("/signup")}}),[b,n]);var p=Boolean(l),h=Boolean(f),E=function(){d(null)},v=function(e,t){u(null),o(t),E()},O=r.a.createElement(z.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:"desktop-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:function(e){u(null),E()}},r.a.createElement(D.a,{onClick:function(e){return v(0,"login")}},"Login"),r.a.createElement(D.a,{onClick:function(e){return v(0,"signup")}},"Signup")),j=r.a.createElement(z.a,{anchorEl:f,anchorOrigin:{vertical:"top",horizontal:"right"},id:"mobile-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:E},r.a.createElement(D.a,{onClick:function(e){return v(0,"tags")}},"Tags"),r.a.createElement(D.a,{onClick:function(e){return v(0,"explore")}},"Explore"),r.a.createElement(D.a,{onClick:function(e){return v(0,"login")}},"Login"),r.a.createElement(D.a,{onClick:function(e){return v(0,"signup")}},"Signup"),r.a.createElement(D.a,{onClick:function(e){return v(0,"profile")}},"Profile"));return r.a.createElement(ee,null,r.a.createElement(L.a,null,r.a.createElement(te,{href:"/"},"Next Story"),r.a.createElement(ae,{smDown:!0},r.a.createElement(ie,{variant:"fullWidth",value:("tags"===n||"explore"===n)&&n,"aria-label":"nav items tabs",onChange:function(e,t){o(t)}},r.a.createElement(B.a,{component:"a",label:"Tags",value:"tags"}),r.a.createElement(B.a,{component:"a",label:"Explore",value:"explore"}))),r.a.createElement(ne,null),r.a.createElement(re,null,r.a.createElement(le,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}}),r.a.createElement(ue,null,r.a.createElement(J.a,null))),r.a.createElement(ne,null),r.a.createElement(oe,{smDown:!0},r.a.createElement(R.a,{edge:"end","aria-label":"profile","aria-haspopup":"true",color:"inherit"},r.a.createElement(U.a,null)),r.a.createElement(R.a,{edge:"end","aria-label":"login signup","aria-controls":"desktop-menu","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},r.a.createElement(A.a,null))),r.a.createElement(ce,{mdUp:!0},r.a.createElement(R.a,{"aria-label":"show more","aria-controls":"mobile-menu","aria-haspopup":"true",onClick:function(e){d(e.currentTarget)},color:"inherit"},r.a.createElement(A.a,null)))),j,O)};var me=function(){return r.a.createElement("div",null,r.a.createElement(se,null),r.a.createElement(w,null))},fe=n(63),de=n(27),be=n(35),pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.d:var n=[],a={};e.forEach((function(e){if(e.userId!==t.userId)n.push(e);else{var r=Object(de.a)(Object(de.a)({},e),{},{userName:e.userName,userId:e.userId,text:t.text,datePosted:t.datePosted});a=r}}));var r=[a].concat(n);return r;case be.a:var o=e.filter((function(e){return t.userId===e.userId}));if(0===o.length){var c={userName:t.userName,userId:t.userId,text:t.text,datePosted:t.datePosted},i=[c].concat(Object(fe.a)(e));return i}return e.map((function(e){return e.userId===t.userId?Object(de.a)(Object(de.a)({},e),{},{text:t.text,datePosted:t.datePosted}):e}));case be.c:var l=[];return e.forEach((function(e){e.userId===t.userId?void 0!==e.rating&&0!==e.rating&&l.push(Object(de.a)(Object(de.a)({},e),{},{text:""})):l.push(e)})),[].concat(l);case be.e:return t.reviewsArray;case be.b:var u=!1,s=[];if(e.forEach((function(e){e.userId===t.userId?(u=!0,(""!==e.text||0!==t.rating&&void 0!==t.rating)&&s.push(Object(de.a)(Object(de.a)({},e),{},{rating:t.rating}))):s.push(e)})),!u){var m={userId:t.userId,userName:t.userName,text:"",datePosted:"",rating:t.rating};s=[m].concat(Object(fe.a)(e))}return s;default:return e}},he=Object(s.b)({reviewRatings:pe}),ge=Object(s.c)(he,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(f.a,{store:ge},r.a.createElement(i.a,{theme:u},r.a.createElement(I.a,{theme:u},r.a.createElement(m.a,null,r.a.createElement(me,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return i}));var a="add_review",r="delete_review",o="edit_review",c="load_reviews_from_db",i="change_rating"},96:function(e,t,n){e.exports=n(108)}},[[96,5,6]]]);
//# sourceMappingURL=main.8f7107c2.chunk.js.map