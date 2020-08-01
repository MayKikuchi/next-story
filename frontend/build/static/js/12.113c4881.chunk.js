(this["webpackJsonpnext-story"]=this["webpackJsonpnext-story"]||[]).push([[12],{157:function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),function(e){e.movie="movie",e.book="book",e.start=""}(a||(a={})),function(e){e.bookPerson="bookPerson",e.moviePerson="moviePerson",e.genre="genre",e.tag="tag",e.searchBar="searchBar"}(r||(r={}))},159:function(e,t,n){"use strict";var a=n(17),r=n(0),i=n.n(r),o=n(242),c=n(14);function l(){var e=Object(a.a)(["\n    margin-top: 85px;\n    margin-bottom: 85px;\n"]);return l=function(){return e},e}var u=Object(c.b)(o.a)(l());t.a=function(e){return i.a.createElement(u,{maxWidth:e.maxWidth},e.children)}},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(75),r=function(e){return{type:a.a,filterName:e}}},165:function(e,t,n){"use strict";var a=n(17),r=n(0),i=n.n(r),o=n(14),c=n(7),l=n(157),u=n(41),s=n(73),m=n(160);function d(){var e=Object(a.a)(["\n    border-radius: 7px;\n    color: white;\n    outline: none;\n    border: none;\n    margin: 5px;\n    cursor: pointer;\n    background-color: ",";\n    &:hover {\n        background-color: ",";\n    }\n    font-size: 16px;\n    padding: 3px 5px 3px 5px;\n"]);return d=function(){return e},e}var f=o.b.button(d(),(function(e){return e.theme.palette.primary.light}),(function(e){return e.theme.palette.secondary.light})),b=Object(s.b)(null,{changeSingleSearchPageFilter:m.a})((function(e){var t=e.label,n=e.tagId,a=e.singleQueryType,r=Object(c.g)(),o=encodeURIComponent(n||t);return i.a.createElement(i.a.Fragment,null,t&&i.a.createElement(f,{onClick:function(){!function(e,t){switch(t){case l.b.bookPerson:e.changeSingleSearchPageFilter(u.b);break;case l.b.moviePerson:e.changeSingleSearchPageFilter(u.d);break;case l.b.tag:case l.b.genre:case l.b.searchBar:default:e.changeSingleSearchPageFilter(u.a)}}(e,a),r.push("/searchResult/param?singleQueryType=".concat(a,"&query=").concat(o))}},t))}));function v(){var e=Object(a.a)(["\n    margin-bottom: 15px;\n"]);return v=function(){return e},e}var p=o.b.div(v());t.a=function(e){var t=e.singleQueryType,n=e.tags,a=e.tagObjects;return i.a.createElement(p,null,n&&n.map((function(e,n){return i.a.createElement(b,{key:n,label:e,singleQueryType:t})})),!n&&a&&a.map((function(e,n){return i.a.createElement(b,{key:n,label:e.tagName,singleQueryType:t,tagId:e.tagId})})))}},168:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return l}));var a=n(30),r=function(e){return{type:a.e,reviewsArray:e}},i=function(e){return{type:a.a,text:e.text,userId:e.userId,userName:e.userName,datePosted:e.datePosted}},o=function(e){return{type:a.c,userId:e}},c=function(e){return{type:a.d,text:e.text,userId:e.userId,userName:e.userName,datePosted:e.datePosted}},l=function(e){return{type:a.b,userId:e.userId,userName:e.userName,rating:e.rating}}},170:function(e,t,n){"use strict";var a=n(63),r=n(40),i=n(17),o=n(0),c=n.n(o),l=n(176),u=n.n(l),s=n(148),m=n(232),d=n(175),f=n.n(d),b=n(177),v=n.n(b),p=n(14),g=n(73),h=n(168),y=n(158),E=n.n(y);function x(){var e=Object(i.a)(["\n    display: flex;\n    align-items: center;\n"]);return x=function(){return e},e}function O(){var e=Object(i.a)(["\n    padding: 0px !important;\n"]);return O=function(){return e},e}var j=Object(p.b)(s.a)(O()),S=p.b.div(x()),w=window.location.protocol+"//"+window.location.host;t.a=Object(g.b)(null,{changeRatingAction:h.b})((function(e){var t=Object(o.useState)(0),n=Object(r.a)(t,2),i=n[0],l=n[1],s=e.readonly,d=e.readOnlyRating,b=e.hideReadOnlyLabel,p=e.userRating,g=e.userId,h=e.userName,y="";function x(t){var n=i===t?t-1:t;l(n),g&&h&&function(e,t,n,a){e.changeRatingAction({userId:t,userName:n,rating:a}),a||e.userHasReviewText?E.a.put(w+"/reviewRatings/rating",{mediaId:e.mediaId,mediaType:e.mediaType,userId:t,rating:a}).then((function(e){console.log("Successfully put the rating: ",e)})).catch((function(e){console.log(e)})):E.a.delete(w+"/reviewRatings"+"/".concat(e.mediaType,"/").concat(e.mediaId,"/").concat(t)).then((function(e){console.log("Successfully deleted the reviewRating",e)})).catch((function(e){console.log(e)}))}(e,g,h,n)}return s&&d?y=d.toFixed(2):p&&(y=p.toFixed(2)),Object(o.useEffect)((function(){i||l(p||0)}),[p]),c.a.createElement(m.a,{display:"flex"},Object(a.a)(Array(5)).map((function(e,t){return c.a.createElement(S,{key:t},s?c.a.createElement(c.a.Fragment,null,function(e,t){var n=((null===t||void 0===t?void 0:t.toFixed(2))||"0.00").split("."),a=Object(r.a)(n,2),i=a[0],o=a[1],l=parseInt(i),s=parseInt(o);if(e+1<=l)return c.a.createElement(f.a,{style:{fill:"#FFCC00"},fontSize:"small"});if(e!==l)return c.a.createElement(u.a,{style:{fill:"#FFCC00"},fontSize:"small"});var m=50*Math.round(s/50);return 0===m?c.a.createElement(u.a,{style:{fill:"#FFCC00"},fontSize:"small"}):50===m?c.a.createElement(v.a,{style:{fill:"#FFCC00"},fontSize:"small"}):100===m?c.a.createElement(f.a,{style:{fill:"#FFCC00"},fontSize:"small"}):void 0}(t,d)):c.a.createElement(j,{size:"small",onClick:function(){return x(t+1)}},t<i?c.a.createElement(f.a,{style:{fill:"#FFCC00"}}):c.a.createElement(u.a,{style:{fill:"#FFCC00"}})))})),c.a.createElement(m.a,{ml:1},s&&!b&&y))}))},178:function(e,t,n){e.exports=n.p+"static/media/MockCover.4d59545d.png"},179:function(e,t,n){e.exports=n.p+"static/media/MockBookCover.db0a0480.jpg"},182:function(e,t,n){"use strict";var a=n(40),r=n(17),i=n(0),o=n.n(i),c=n(14),l=n(365),u=n(116),s=n(144),m=n(152),d=n(148),f=n(271),b=n(217),v=n.n(b),p=n(218),g=n.n(p),h=n(145),y=n(7),E=n(157),x=n(171),O=n(165),j=n(158),S=n.n(j),w=n(170);function k(){var e=Object(r.a)(["\n    color: white;\n    &:hover {\n        color: grey;\n    }\n"]);return k=function(){return e},e}function F(){var e=Object(r.a)(["\n    margin-right: 10px;\n    background: none;\n    border: none;\n    color: ",";\n    cursor: pointer;\n    font-size: 16px;\n\n    &:hover {\n        color: ",";\n    }\n"]);return F=function(){return e},e}function I(){var e=Object(r.a)(["\n    height: 35px;\n    width: 100%;\n    position:absolute;\n    bottom:0;\n    display: flex;\n    justify-content: flex-end;\n"]);return I=function(){return e},e}function C(){var e=Object(r.a)(["\n    margin: 10px;\n    margin-bottom: ",";\n"]);return C=function(){return e},e}function T(){var e=Object(r.a)(["\n    overflow: auto;\n"]);return T=function(){return e},e}function M(){var e=Object(r.a)(["\n    max-height: ",";\n    display: flex;\n    flex-direction: column;\n    margin-right: 10px;\n    margin-left: 10px;\n"]);return M=function(){return e},e}function R(){var e=Object(r.a)(["\n    max-width: ","\n"]);return R=function(){return e},e}function P(){var e=Object(r.a)(["\n    max-height: ",";\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    margin: 10px;\n    overflow: auto;\n"]);return P=function(){return e},e}function N(){var e=Object(r.a)(["\n    height: ",";\n    overflow: auto;\n"]);return N=function(){return e},e}function z(){var e=Object(r.a)(["\n    background-color: ",";\n    height: 50px;\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n"]);return z=function(){return e},e}function D(){var e=Object(r.a)(["\n    width: ",";\n    height: ",";\n    position: absolute;\n    left: 50% !important;\n    top: 50% !important;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    position: relative;\n"]);return D=function(){return e},e}var A=c.b.div(D(),(function(e){return e.isSmall||e.isShort?"100vw":"500px"}),(function(e){return e.isSmall||e.isShort?"100vh":"500px"})),B=c.b.div(z(),(function(e){return e.theme.palette.primary.main})),Q=c.b.div(N(),(function(e){return e.isSmall||e.isShort?"100%":"450px"})),G=c.b.div(P(),(function(e){return e.isShort?"80%":"350px"})),L=c.b.img(R(),(function(e){return e.isShort?"30%":"50%"})),W=c.b.div(M(),(function(e){return e.isShort?"80%":"350px"})),V=c.b.div(T()),U=c.b.div(C(),(function(e){return e.isSmall||e.isShort?"100px":"35px"})),H=Object(c.b)(u.a)(I()),J=Object(c.b)(h.a)(F(),(function(e){return e.theme.palette.grey[600]}),(function(e){return e.theme.palette.grey[900]})),_=Object(c.b)(v.a)(k()),q=function(e){var t=e.isOpen,n=e.modalData,r=e.setModalOpen,c=Object(y.g)(),l=Object(i.useState)([]),u=Object(a.a)(l,2),b=u[0],v=u[1],p=Object(i.useState)(0),h=Object(a.a)(p,2),j=h[0],k=h[1],F=Object(s.a)("(max-width:450px)"),I=Object(s.a)("(max-height:500px)");return Object(i.useEffect)((function(){if(t){var e=n.id,a=n.mediaType===E.a.book?"books":"movies";S.a.get("/".concat(a,"/tags/").concat(e)).then((function(e){var t=e.data;v(t.nextStoryTags)})).catch((function(e){console.log("Error getting media",e)}))}}),[n,t]),Object(i.useEffect)((function(){if(t){var e=n.id,a=n.mediaType;S.a.get("/reviewRatings/averageRating/".concat(a,"/").concat(e)).then((function(e){var t=e.data;k(t.average)})).catch((function(e){console.log("Error getting media",e)}))}}),[n,t]),o.a.createElement(m.a,{open:t,onClose:function(){return r(!1)}},o.a.createElement(A,{isSmall:F,isShort:I},o.a.createElement(B,null,o.a.createElement(d.a,{onClick:function(){return r(!1)}},o.a.createElement(_,null))),o.a.createElement(Q,{isSmall:F,isShort:I},o.a.createElement(G,{isShort:I},o.a.createElement(L,{src:null===n||void 0===n?void 0:n.image,isShort:I}),o.a.createElement(W,{isShort:I},o.a.createElement(f.a,{variant:"h3",gutterBottom:!0},null===n||void 0===n?void 0:n.title," ",(null===n||void 0===n?void 0:n.mediaType)===E.a.movie?"(Movie)":"(Book)"),o.a.createElement(f.a,{variant:"subtitle2"},"Avg members rating: ",!j&&"No rating"),j>0&&o.a.createElement(w.a,{readOnlyRating:j,readonly:!0}),o.a.createElement(V,null,"Genres:",o.a.createElement(O.a,{tags:(null===n||void 0===n?void 0:n.genres)||[],singleQueryType:E.b.genre}),b.length>0&&o.a.createElement(o.a.Fragment,null,"Tags:",o.a.createElement(O.a,{tagObjects:b||[],singleQueryType:E.b.tag}))))),o.a.createElement(U,{isSmall:F,isShort:I},o.a.createElement(x.a,{content:(null===n||void 0===n?void 0:n.blurb)||""}))),o.a.createElement(H,{elevation:3},o.a.createElement(J,{endIcon:o.a.createElement(g.a,null),onClick:function(){return function(){var e=n.id,t=n.mediaType;c.push("/".concat(t,"/").concat(e)),r(!1)}()}},"Go to page"))))};function K(){var e=Object(r.a)(["\n    height: 100%;\n    max-width: 100%;\n    cursor: pointer;\n    &:hover {\n        opacity: 50%;\n    }\n"]);return K=function(){return e},e}function X(){var e=Object(r.a)(["\n    height: 250px;\n    width: 175px;\n    display: flex;\n    justify-content: center;\n    align-items: space-between;\n    flex-direction: column;\n"]);return X=function(){return e},e}var Y=Object(c.b)(l.a)(X()),Z=c.b.img(K());t.a=function(e){var t=e.cardData.image,n=Object(i.useState)(!1),r=Object(a.a)(n,2),c=r[0],l=r[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(q,{isOpen:c,setModalOpen:function(){return l(!1)},modalData:e.cardData}),o.a.createElement(Y,{elevation:1},o.a.createElement(Z,{src:t,onClick:function(){return l(!0)}})))}},272:function(e,t,n){"use strict";var a=n(47);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=(0,a(n(62)).default)(r.default.createElement("path",{d:"M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"}),"AccountBox");t.default=i},274:function(e,t,n){"use strict";var a=n(47);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=(0,a(n(62)).default)(r.default.createElement("path",{d:"M10 17l5-5-5-5v10z"}),"ArrowRight");t.default=i},360:function(e,t,n){"use strict";var a=n(1),r=n(2),i=n(0),o=(n(3),n(4)),c=n(5),l=n(50),u=Object(l.a)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var s=i.forwardRef((function(e,t){var n=e.alt,c=e.children,l=e.classes,s=e.className,m=e.component,d=void 0===m?"div":m,f=e.imgProps,b=e.sizes,v=e.src,p=e.srcSet,g=e.variant,h=void 0===g?"circle":g,y=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),E=null,x=function(e){var t=e.src,n=e.srcSet,a=i.useState(!1),r=a[0],o=a[1];return i.useEffect((function(){if(t||n){o(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=n,a.onload=function(){e&&o("loaded")},a.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,n]),r}({src:v,srcSet:p}),O=v||p,j=O&&"error"!==x;return E=j?i.createElement("img",Object(a.a)({alt:n,src:v,srcSet:p,sizes:b,className:l.img},f)):null!=c?c:O&&n?n[0]:i.createElement(u,{className:l.fallback}),i.createElement(d,Object(a.a)({className:Object(o.a)(l.root,l.system,l[h],s,!j&&l.colorDefault),ref:t},y),E)}));t.a=Object(c.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(s)},373:function(e,t,n){"use strict";n.r(t);var a=n(86),r=n(0),i=n.n(r),o=n(273),c=n(17),l=n(14),u=n(271),s=n(272),m=n.n(s),d=n(360);function f(){var e=Object(c.a)(["\n  &.MuiTypography-body1 {\n    font-weight: bold;\n  }\n"]);return f=function(){return e},e}function b(){var e=Object(c.a)(["\n  &.MuiAvatar-root {\n    width: 100%;\n    height: 100%;\n  }\n"]);return b=function(){return e},e}function v(){var e=Object(c.a)(["\n  width: 150px;\n  &>:first-child {\n    border: solid 2px #D3D3D3;\n    height: 150px;\n  }\n"]);return v=function(){return e},e}function p(){var e=Object(c.a)(["\n  &.MuiSvgIcon-root {\n    width: 100%;\n    height: 100%;\n  }\n"]);return p=function(){return e},e}function g(){var e=Object(c.a)(["\n  flex: 0 1 auto;\n  min-width: 300px;\n  /* height: 100vh; */\n  /* overflow-x: hidden; */\n  /* overflow-y: auto; */\n  & > * {\n    margin-bottom: 10px;\n  }\n"]);return g=function(){return e},e}var h=l.b.div(g()),y=Object(l.b)(m.a)(p()),E=l.b.div(v()),x=Object(l.b)(d.a)(b()),O=Object(l.b)(u.a)(f()),j=function(e){var t=e.avatar,n=e.about,a=e.email,r=e.booksCount,o=e.moviesCount,c=e.name;return i.a.createElement(h,{id:"userinfo"},i.a.createElement(E,{id:"profile-pic"},i.a.createElement("div",null,t?i.a.createElement(x,{variant:"square"},i.a.createElement("img",{alt:"profile",src:t,width:"100%"})):i.a.createElement(y,{color:"disabled",fontSize:"large"})),i.a.createElement(u.a,{align:"center",color:"primary",variant:"body1"},"(Edit Profile)")),i.a.createElement("div",null,i.a.createElement(u.a,{variant:"body2"},"User Name: ".concat(c)),i.a.createElement(u.a,{variant:"body2"},"Books Read: ".concat(r)),i.a.createElement(u.a,{variant:"body2"},"Movies Watched: ".concat(o))),i.a.createElement("div",null,i.a.createElement(O,null,"About Me/Message User"),i.a.createElement(u.a,{variant:"body2"},n)),i.a.createElement("div",null,i.a.createElement(O,null,"Contact"),i.a.createElement(u.a,{variant:"body2"},a)))},S=n(144),w=n(159),k=n(63),F=n(40),I=n(183),C=n.n(I),T=(n(185),n(182)),M=n(178),R=n.n(M),P=n(274),N=n.n(P),z=n(380);function D(){var e=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n"]);return D=function(){return e},e}function A(){var e=Object(c.a)(["\n  border: 1px solid rgba(0, 0, 0, 0.23);\n  border-left: none;\n  border-radius: 0 4px 4px 0;\n  :hover{\n    cursor: pointer;\n  }\n"]);return A=function(){return e},e}function B(){var e=Object(c.a)(["\n  &.MuiOutlinedInput-root {\n    border-radius: 4px 0 0 4px;\n  }\n"]);return B=function(){return e},e}function Q(){var e=Object(c.a)(["\n  &.MuiGrid-container {\n    flex-wrap: nowrap;\n  }\n"]);return Q=function(){return e},e}var G=Object(l.b)(o.a)(Q()),L=Object(l.b)(z.a)(B()),W=Object(l.b)(o.a)(A()),V=l.b.div(D()),U=function(){return i.a.createElement("div",null,i.a.createElement(G,{container:!0,spacing:0,alignItems:"stretch"},i.a.createElement(o.a,{item:!0},i.a.createElement(L,{name:"search",type:"search",placeholder:"Search"})),i.a.createElement(W,{item:!0},i.a.createElement(V,null,i.a.createElement(N.a,{fontSize:"large"})))))},H=n(376),J=function(){return i.a.createElement(H.a,{variant:"outlined",native:!0},i.a.createElement("option",{value:1},"Option 1"),i.a.createElement("option",{value:2},"Option 2"))},_=n(157),q=n(73),K=n(158),X=n.n(K),Y=n(179),Z=n.n(Y);function $(){var e=Object(c.a)(["\n  margin-top: 20px;\n"]);return $=function(){return e},e}var ee=Object(l.b)(C.a)($()),te=(R.a,_.a.movie,function(){return i.a.createElement(o.a,{spacing:1,container:!0},i.a.createElement(o.a,{item:!0,xs:6},i.a.createElement(J,null)),i.a.createElement(o.a,{item:!0,xs:6},i.a.createElement(U,null)))}),ne=Object(q.b)()((function(e){e.bookIds,e.movieIds;var t=e.title,n=e.withSearchSelect,a=(e.updateMethod,sessionStorage.getItem("NS-session-data")),o=(a&&JSON.parse(a)).userId,c=Object(r.useState)([{title:"",id:"",mediaType:_.a.start,image:Z.a,people:"",genres:[],nextStoryTags:[],blurb:"",avgRating:0}]),l=Object(F.a)(c,2),s=l[0],m=l[1];Object(r.useEffect)((function(){X.a.get("/users/userLists/".concat(o)).then((function(e){var n=e.data;console.log(t),console.log(n);var a=[];console.log(t),(null===t||void 0===t?void 0:t.includes("Favourite"))?(a.push.apply(a,n.favoriteMoviesDetails),a.push.apply(a,n.favoriteBooksDetails)):(a.push.apply(a,n.watchLaterDetails),a.push.apply(a,n.readLaterDetails),a.push.apply(a,n.booksReadDetails),a.push.apply(a,n.moviesWatchedDetails)),m(a)})).catch((function(e){console.log(e)}))}),[]);var d=s.map((function(e,t){return i.a.createElement(T.a,{key:t,cardData:e})})),f=Object(k.a)(d);return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{variant:"h4"},t),i.a.createElement("div",null,n&&i.a.createElement(te,null)),i.a.createElement(ee,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,draggable:!0,infinite:!0,keyBoardControl:!0,minimumTouchDrag:80,slidesToSlide:1,swipeable:!0,centerMode:!0,removeArrowOnDeviceType:["xmd","sm","xs"],responsive:{xl:{breakpoint:{max:3e3,min:1200},items:2.4,partialVisibilityGutter:40},lg:{breakpoint:{max:1200,min:960},items:1.5,partialVisibilityGutter:20},md:{breakpoint:{max:960,min:768},items:2,partialVisibilityGutter:0},xmd:{breakpoint:{max:768,min:480},items:1.5,partialVisibilityGutter:20},sm:{breakpoint:{max:480,min:0},items:.8,partialVisibilityGutter:50}}},f))})),ae=n(165),re=n(65);function ie(){var e=Object(c.a)(["\n  min-width: 350px;\n  margin: 0 auto;\n"]);return ie=function(){return e},e}function oe(){var e=Object(c.a)(["\n  > * {\n    :not(:first-child) {\n      margin-top: 30px;\n    }\n  }\n"]);return oe=function(){return e},e}var ce=l.b.div(oe()),le=l.b.div(ie()),ue=Object(q.b)(null,(function(e){return{setFavorites:function(t){return e((n=t,{type:re.a,data:n}));var n},setLater:function(t){return e((n=t,{type:re.b,data:n}));var n}}}))((function(e){var t=e.favoriteAuthors,n=e.favoriteBooks,a=e.favoriteDirectors,r=e.favoriteGenres,o=e.favoriteMovies,c=e.favoriteNextStoryTags,l=e.readLater,s=e.watchLater,m=e.setFavorites,d=e.setLater;return i.a.createElement(ce,null,i.a.createElement(i.a.Fragment,null,i.a.createElement(le,null,i.a.createElement(u.a,{variant:"h4"},"Favourite Genres"),i.a.createElement(ae.a,{tags:Object(k.a)(r),singleQueryType:_.b.genre}),i.a.createElement(ae.a,{tagObjects:Object(k.a)(c),singleQueryType:_.b.tag})),i.a.createElement(le,null,i.a.createElement(u.a,{variant:"h4"},"Favourite Authors:"),i.a.createElement(ae.a,{tags:t,singleQueryType:_.b.bookPerson})),i.a.createElement(le,null,i.a.createElement(u.a,{variant:"h4"},"Favourite Directors:"),i.a.createElement(ae.a,{tags:a,singleQueryType:_.b.moviePerson})),i.a.createElement(le,null,i.a.createElement(ne,{bookIds:n,bMSource:"favorite",movieIds:o,title:"User's Favourite Books/Movies:",updateMethod:m})),i.a.createElement(le,null,i.a.createElement(ne,{bMSource:"later",title:"User's Read/Watched List",bookIds:l,movieIds:s,withSearchSelect:!0,updateMethod:d}))))})),se=n(85);t.default=Object(q.b)((function(e){return{profile:e.profile}}),(function(e){return{setProfile:function(t){return e(function(e){return{type:se.a,profile:e}}(t))}}}))((function(e){var t=e.profile,n=t.avatar,c=t.booksRead,l=t.email,u=t.message,s=t.moviesWatched,m=t.name,d=Object(a.a)(t,["avatar","booksRead","email","message","moviesWatched","name"]),f=e.setProfile,b=Object(S.a)("(min-width: 960px)"),v=window.location.protocol+"//"+window.location.host;return Object(r.useEffect)((function(){var e=sessionStorage.getItem("NS-session-data"),t=e&&JSON.parse(e).userId;X.a.get("".concat(v,"/users/").concat(t)).then((function(e){f(e.data)})).catch((function(e){console.log("Error fetching profile: ",e)}))}),[]),i.a.createElement(w.a,{maxWidth:b?"lg":"sm"},i.a.createElement(o.a,{container:!0,spacing:5},i.a.createElement(o.a,{item:!0,xs:12,sm:12,md:5},i.a.createElement(j,{about:u,avatar:n,booksCount:c.length,email:l,moviesCount:s.length,name:m})),i.a.createElement(o.a,{item:!0,xs:12,sm:12,md:7},i.a.createElement(ue,d))))}))}}]);
//# sourceMappingURL=12.113c4881.chunk.js.map