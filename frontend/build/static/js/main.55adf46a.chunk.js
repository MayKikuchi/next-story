(this["webpackJsonpnext-story"]=this["webpackJsonpnext-story"]||[]).push([[6],{102:function(e,t,n){e.exports=n(114)},107:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),i=n.n(o);n(107),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(149),u=n(97),l=Object(u.a)({typography:{h1:{fontSize:32,fontFamily:'"Cambria Math", "Roboto", "Helvetica", "Arial", sans-serif'},h2:{fontSize:28},h3:{fontSize:24},h4:{fontSize:20},h5:{fontSize:16},h6:{fontSize:12}}}),s=n(31),f=n(50),d=n(73),m=n(32),h=n(33),b=n(36),p=n(35),g=n(7),v=n(86),E=n(83),O=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.load,n=Object(v.a)(e,["load"]),o=Object(a.lazy)((function(){return t()}));return r.a.createElement(a.Suspense,{fallback:r.a.createElement(E.a,null)},r.a.createElement(o,n))}}]),n}(r.a.Component),j=function(e){var t=e.component,n=sessionStorage.getItem("NS-session-data"),a=n&&JSON.parse(n),o=null===a||void 0===a?void 0:a.expiry,i=new Date(o),c=o&&i>new Date;if(c){var u=i.setSeconds(i.getSeconds()+3599);a.expiry=u,sessionStorage.setItem("NS-session-data",JSON.stringify(a))}else sessionStorage.removeItem("NS-session-data");for(var l=arguments.length,s=new Array(l>1?l-1:0),f=1;f<l;f++)s[f-1]=arguments[f];return r.a.createElement(g.b,Object.assign({},s,{render:function(e){return c?r.a.createElement(t,e):r.a.createElement(g.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},y=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.d,null,r.a.createElement(j,{exact:!0,key:"home",path:"/",component:function(e){return r.a.createElement(O,Object.assign({load:function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(10)]).then(n.bind(null,380))}},e))}}),r.a.createElement(j,{exact:!0,key:"profile",path:"/profile",component:function(e){return r.a.createElement(O,Object.assign({load:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(11)]).then(n.bind(null,376))}},e))}}),r.a.createElement(j,{exact:!0,key:"singleSearchResult",path:"/searchResult/:params",component:function(e){return r.a.createElement(O,Object.assign({load:function(){return Promise.all([n.e(0),n.e(12),n.e(13)]).then(n.bind(null,379))}},e))}}),r.a.createElement(g.b,{exact:!0,key:"login",path:"/login",render:function(e){return r.a.createElement(O,Object.assign({load:function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(16)]).then(n.bind(null,382))}},e))}}),r.a.createElement(g.b,{exact:!0,key:"signup",path:"/signup",render:function(e){return r.a.createElement(O,Object.assign({load:function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(17)]).then(n.bind(null,383))}},e))}}),r.a.createElement(j,{exact:!0,key:"nextStoryTagPage",path:"/allStoryTags",component:function(e){return r.a.createElement(O,Object.assign({load:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,374))}},e))}}),r.a.createElement(j,{exact:!0,key:"notFound",path:"/notFound",component:function(e){return r.a.createElement(O,Object.assign({load:function(){return n.e(5).then(n.bind(null,375))}},e))}}),r.a.createElement(j,{exact:!0,key:"mediaPage",path:"/:mediaType/:id",component:function(e){return r.a.createElement(O,Object.assign({load:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(9),n.e(14)]).then(n.bind(null,377))}},e))}}),r.a.createElement(j,{exact:!0,key:"notFound",path:"*",component:function(e){return r.a.createElement(O,Object.assign({load:function(){return n.e(5).then(n.bind(null,375))}},e))}})))}}]),a}(r.a.Component),k=n(40),x=n(17),S=n(14),w=n(142),_=n(153),I=n(151),P=n(155),T=n(145),N=n(123),C=n(156),R=n(146),z=n(147),D=n(148),F=n(69),L=n.n(F),A=n(95),B=n.n(A),M=n(96),U=n.n(M);function W(){var e=Object(x.a)(["\n"]);return W=function(){return e},e}function J(){var e=Object(x.a)(["\n    background-color: white;\n    padding-left: 5px;\n"]);return J=function(){return e},e}function X(){var e=Object(x.a)(["\n"]);return X=function(){return e},e}function V(){var e=Object(x.a)(["\n"]);return V=function(){return e},e}function q(){var e=Object(x.a)(["\n"]);return q=function(){return e},e}function G(){var e=Object(x.a)(["\n    display: flex;\n"]);return G=function(){return e},e}function H(){var e=Object(x.a)(["\n"]);return H=function(){return e},e}function K(){var e=Object(x.a)(["\n    flex: 1;\n"]);return K=function(){return e},e}function Q(){var e=Object(x.a)(["\n    color: white;\n    text-decoration: none;\n"]);return Q=function(){return e},e}function $(){var e=Object(x.a)(["\n    top: 0;\n    left: 0;\n    width: 100%;\n"]);return $=function(){return e},e}var Y=Object(S.b)(w.a)($()),Z=S.b.a(Q()),ee=S.b.div(K()),te=Object(S.b)(_.a)(H()),ne=S.b.div(G()),ae=Object(S.b)(_.a)(q()),re=Object(S.b)(_.a)(V()),oe=Object(S.b)(I.a)(X()),ie=Object(S.b)(P.a)(J()),ce=Object(S.b)(T.a)(W()),ue=function(){var e=r.a.useState(!1),t=Object(k.a)(e,2),n=t[0],o=t[1],i=r.a.useState(null),c=Object(k.a)(i,2),u=c[0],l=c[1],s=r.a.useState(null),f=Object(k.a)(s,2),d=f[0],m=f[1],h=r.a.useState(""),b=Object(k.a)(h,2),p=b[0],v=b[1],E=Object(g.g)(),O=function(){p&&E.push("/searchResult/param?singleQueryType=searchBar&query=".concat(p))};Object(a.useEffect)((function(){switch(n){case"explore":break;case"tags":E.push("/allStoryTags");break;case"logout":E.push("/login");break;case"profile":E.push("/profile")}}),[E,n]);var j=Boolean(u),y=Boolean(d),x=function(){m(null)},S=function(e,t){l(null),o(t),x()},w=r.a.createElement(N.a,{anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},id:"desktop-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:j,onClose:function(e){l(null),x()}},r.a.createElement(C.a,{onClick:function(e){return S(0,"logout")}},"Logout")),_=r.a.createElement(N.a,{anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},id:"mobile-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:y,onClose:x},r.a.createElement(C.a,{onClick:function(e){return S(0,"tags")}},"Tags"),r.a.createElement(C.a,{onClick:function(e){return S(0,"explore")}},"Explore"),r.a.createElement(C.a,{onClick:function(e){return S(0,"profile")}},"Profile"),r.a.createElement(C.a,{onClick:function(e){return S(0,"logout")}},"Logout"));return r.a.createElement(Y,null,r.a.createElement(R.a,null,r.a.createElement(Z,{href:"/"},"Next Story"),r.a.createElement(te,{smDown:!0},r.a.createElement(oe,{variant:"fullWidth",value:("tags"===n||"explore"===n)&&n,"aria-label":"nav items tabs",onChange:function(e,t){o(t)}},r.a.createElement(z.a,{component:"a",label:"Tags",value:"tags"}),r.a.createElement(z.a,{component:"a",label:"Explore",value:"explore"}))),r.a.createElement(ee,null),r.a.createElement(ne,null,r.a.createElement(ie,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"},onChange:function(e){v(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&O()}}),r.a.createElement(ce,{onClick:O},r.a.createElement(B.a,null))),r.a.createElement(ee,null),r.a.createElement(ae,{smDown:!0},r.a.createElement(D.a,{edge:"end","aria-label":"profile","aria-haspopup":"true",color:"inherit",onClick:function(){return E.push("/profile")}},r.a.createElement(U.a,null)),r.a.createElement(D.a,{edge:"end","aria-label":"logout","aria-controls":"desktop-menu","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit"},r.a.createElement(L.a,null))),r.a.createElement(re,{mdUp:!0},r.a.createElement(D.a,{"aria-label":"show more","aria-controls":"mobile-menu","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},r.a.createElement(L.a,null)))),_,w)};var le=function(){return r.a.createElement("div",null,r.a.createElement(ue,null),r.a.createElement(y,null))},se=n(63),fe=n(15),de=n(30),me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de.d:var n=[],a={};e.forEach((function(e){if(e.userId!==t.userId)n.push(e);else{var r=Object(fe.a)(Object(fe.a)({},e),{},{userName:e.userName,userId:e.userId,text:t.text,datePosted:t.datePosted});a=r}}));var r=[a].concat(n);return r;case de.a:var o=e.filter((function(e){return t.userId===e.userId}));if(0===o.length){var i={userName:t.userName,userId:t.userId,text:t.text,datePosted:t.datePosted},c=[i].concat(Object(se.a)(e));return c}return e.map((function(e){return e.userId===t.userId?Object(fe.a)(Object(fe.a)({},e),{},{text:t.text,datePosted:t.datePosted}):e}));case de.c:var u=[];return e.forEach((function(e){e.userId===t.userId?void 0!==e.rating&&0!==e.rating&&u.push(Object(fe.a)(Object(fe.a)({},e),{},{text:""})):u.push(e)})),[].concat(u);case de.e:return t.reviewsArray;case de.b:var l=!1,s=[];if(e.forEach((function(e){e.userId===t.userId?(l=!0,(""!==e.text||0!==t.rating&&void 0!==t.rating)&&s.push(Object(fe.a)(Object(fe.a)({},e),{},{rating:t.rating}))):s.push(e)})),!l){var f={userId:t.userId,userName:t.userName,text:"",datePosted:"",rating:t.rating};s=[f].concat(Object(se.a)(e))}return s;default:return e}},he=n(41),be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he.a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he.c:return t.filterName;default:return e}},pe=n(85),ge={avatar:"",booksRead:[],email:"",favoriteAuthors:[],favoriteBooks:[],favoriteDirectors:[],favoriteGenres:[],favoriteMovies:[],favoriteNextStoryTags:[],message:"",moviesWatched:[],name:"",readLater:[],type:"",userId:"",watchLater:[],_id:""},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.a:return Object(fe.a)({},t.profile);default:return e}},Ee=n(65),Oe={favorites:{books:[],movies:[]},later:{books:[],movies:[]}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee.a:return Object(fe.a)(Object(fe.a)({},e),{},{favorites:t.data});case Ee.b:return Object(fe.a)(Object(fe.a)({},e),{},{later:t.data});default:return e}},ye=n(75),ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he.a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye.a:return t.filterName;default:return e}},xe=Object(s.b)({profile:ve,reviewRatings:me,homePageFilterReducer:be,booksMovies:je,singleSearchPageFilterReducer:ke}),Se=Object(s.c)(xe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(r.a.createElement(d.a,{store:Se},r.a.createElement(c.a,{theme:l},r.a.createElement(S.a,{theme:l},r.a.createElement(f.a,null,r.a.createElement(le,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return c}));var a="add_review",r="delete_review",o="edit_review",i="load_reviews_from_db",c="change_rating"},41:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return i}));var a="change_home_page_filter",r="all",o="movies",i="books"},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="UPDATE_FAVORITES",r="UPDATE_LATER_LIST"},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="change_single_search_page_filter"},83:function(e,t,n){"use strict";var a=n(32),r=n(33),o=n(36),i=n(35),c=n(17),u=n(0),l=n.n(u),s=n(91),f=n.n(s),d=n(14);function m(){var e=Object(c.a)(["\n    width: 100px;\n    animation: rotation 2s infinite linear;\n    \n    @keyframes rotation {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(359deg);\n        }\n    }\n"]);return m=function(){return e},e}function h(){var e=Object(c.a)(["\n    color: red;\n    font-size: 24px;\n    font-weight: bold;\n    text-align: center;\n"]);return h=function(){return e},e}function b(){var e=Object(c.a)(["\n    background-color: rgba(255, 255, 255, 0.90);\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 100;\n"]);return b=function(){return e},e}var p=d.b.div(b()),g=d.b.div(h()),v=d.b.img(m()),E=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).timeout=void 0,r.state={timedOut:!1},r.timeout=0,r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.state.timedOut||(this.timeout=setTimeout(function(){this.setState({timedOut:!0})}.bind(this),5e3))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"render",value:function(){return l.a.createElement(p,null,this.state.timedOut?l.a.createElement(g,null,l.a.createElement("p",null,"Timeout - Request is taking too long to complete :("),l.a.createElement("p",null,"Please refresh the page and try again")):l.a.createElement(v,{alt:"",src:f.a}))}}]),n}(l.a.Component);t.a=E},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="SET_PROFILE"},91:function(e,t,n){e.exports=n.p+"static/media/fourSpinner.d26d85b9.png"}},[[102,7,8]]]);
//# sourceMappingURL=main.55adf46a.chunk.js.map