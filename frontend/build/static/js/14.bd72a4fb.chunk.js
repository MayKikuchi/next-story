(this["webpackJsonpnext-story"]=this["webpackJsonpnext-story"]||[]).push([[14],{157:function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),function(e){e.movie="movie",e.book="book",e.start=""}(a||(a={})),function(e){e.bookPerson="bookPerson",e.moviePerson="moviePerson",e.genre="genre",e.tag="tag",e.searchBar="searchBar"}(r||(r={}))},159:function(e,t,n){"use strict";var a=n(17),r=n(0),o=n.n(r),i=n(244),c=n(14);function u(){var e=Object(a.a)(["\n    margin-top: 85px;\n    margin-bottom: 85px;\n"]);return u=function(){return e},e}var l=Object(c.b)(i.a)(u());t.a=function(e){return o.a.createElement(l,{maxWidth:e.maxWidth},e.children)}},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(75),r=function(e){return{type:a.a,filterName:e}}},165:function(e,t,n){"use strict";var a=n(17),r=n(0),o=n.n(r),i=n(14),c=n(7),u=n(157),l=n(41),s=n(73),d=n(160);function m(){var e=Object(a.a)(["\n    border-radius: 7px;\n    color: white;\n    outline: none;\n    border: none;\n    margin: 5px;\n    cursor: pointer;\n    background-color: ",";\n    &:hover {\n        background-color: ",";\n    }\n    font-size: 16px;\n    padding: 3px 5px 3px 5px;\n"]);return m=function(){return e},e}var f=i.b.button(m(),(function(e){return e.theme.palette.primary.light}),(function(e){return e.theme.palette.secondary.light})),g=Object(s.b)(null,{changeSingleSearchPageFilter:d.a})((function(e){var t=e.label,n=e.tagId,a=e.singleQueryType,r=Object(c.g)(),i=encodeURIComponent(n||t);return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement(f,{onClick:function(){!function(e,t){switch(t){case u.b.bookPerson:e.changeSingleSearchPageFilter(l.b);break;case u.b.moviePerson:e.changeSingleSearchPageFilter(l.d);break;case u.b.tag:case u.b.genre:case u.b.searchBar:default:e.changeSingleSearchPageFilter(l.a)}}(e,a),r.push("/searchResult/param?singleQueryType=".concat(a,"&query=").concat(i))}},t))}));function v(){var e=Object(a.a)(["\n    margin-bottom: 15px;\n"]);return v=function(){return e},e}var b=i.b.div(v());t.a=function(e){var t=e.singleQueryType,n=e.tags,a=e.tagObjects;return o.a.createElement(b,null,n&&n.map((function(e,n){return o.a.createElement(g,{key:n,label:e,singleQueryType:t})})),!n&&a&&a.map((function(e,n){return o.a.createElement(g,{key:n,label:e.tagName,singleQueryType:t,tagId:e.tagId})})))}},168:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(30),r=function(e){return{type:a.e,reviewsArray:e}},o=function(e){return{type:a.a,text:e.text,userId:e.userId,userName:e.userName,datePosted:e.datePosted}},i=function(e){return{type:a.c,userId:e}},c=function(e){return{type:a.d,text:e.text,userId:e.userId,userName:e.userName,datePosted:e.datePosted}},u=function(e){return{type:a.b,userId:e.userId,userName:e.userName,rating:e.rating}}},170:function(e,t,n){"use strict";var a=n(63),r=n(40),o=n(17),i=n(0),c=n.n(i),u=n(176),l=n.n(u),s=n(148),d=n(234),m=n(175),f=n.n(m),g=n(177),v=n.n(g),b=n(14),p=n(73),h=n(168),E=n(158),O=n.n(E);function y(){var e=Object(o.a)(["\n    display: flex;\n    align-items: center;\n"]);return y=function(){return e},e}function j(){var e=Object(o.a)(["\n    padding: 0px !important;\n"]);return j=function(){return e},e}var x=Object(b.b)(s.a)(j()),w=b.b.div(y()),R=window.location.protocol+"//"+window.location.host;t.a=Object(p.b)(null,{changeRatingAction:h.b})((function(e){var t=Object(i.useState)(0),n=Object(r.a)(t,2),o=n[0],u=n[1],s=e.readonly,m=e.readOnlyRating,g=e.hideReadOnlyLabel,b=e.userRating,p=e.userId,h=e.userName,E="";function y(t){var n=o===t?t-1:t;u(n),p&&h&&function(e,t,n,a){e.changeRatingAction({userId:t,userName:n,rating:a}),a||e.userHasReviewText?O.a.put(R+"/reviewRatings/rating",{mediaId:e.mediaId,mediaType:e.mediaType,userId:t,rating:a}).then((function(e){console.log("Successfully put the rating: ",e)})).catch((function(e){console.log(e)})):O.a.delete(R+"/reviewRatings"+"/".concat(e.mediaType,"/").concat(e.mediaId,"/").concat(t)).then((function(e){console.log("Successfully deleted the reviewRating",e)})).catch((function(e){console.log(e)}))}(e,p,h,n)}return s&&m?E=m.toFixed(2):b&&(E=b.toFixed(2)),Object(i.useEffect)((function(){o||u(b||0)}),[b]),c.a.createElement(d.a,{display:"flex"},Object(a.a)(Array(5)).map((function(e,t){return c.a.createElement(w,{key:t},s?c.a.createElement(c.a.Fragment,null,function(e,t){var n=((null===t||void 0===t?void 0:t.toFixed(2))||"0.00").split("."),a=Object(r.a)(n,2),o=a[0],i=a[1],u=parseInt(o),s=parseInt(i);if(e+1<=u)return c.a.createElement(f.a,{style:{fill:"#FFCC00"},fontSize:"small"});if(e!==u)return c.a.createElement(l.a,{style:{fill:"#FFCC00"},fontSize:"small"});var d=50*Math.round(s/50);return 0===d?c.a.createElement(l.a,{style:{fill:"#FFCC00"},fontSize:"small"}):50===d?c.a.createElement(v.a,{style:{fill:"#FFCC00"},fontSize:"small"}):100===d?c.a.createElement(f.a,{style:{fill:"#FFCC00"},fontSize:"small"}):void 0}(t,m)):c.a.createElement(x,{size:"small",onClick:function(){return y(t+1)}},t<o?c.a.createElement(f.a,{style:{fill:"#FFCC00"}}):c.a.createElement(l.a,{style:{fill:"#FFCC00"}})))})),c.a.createElement(d.a,{ml:1},s&&!g&&E))}))},194:function(e,t,n){"use strict";var a=n(40),r=n(17),o=n(14),i=n(0),c=n.n(i);function u(){var e=Object(r.a)(["\n    background-color: ",";\n    border: none;\n    outline: none;\n    font-size: 16px;\n    border-radius: 5px;\n    padding: 5px;\n    cursor: pointer;\n    margin: 5px;\n    color: ",";\n"]);return u=function(){return e},e}var l=o.b.button(u(),(function(e){var t=e.theme;return e.isAddedToUser?t.palette.grey[300]:t.palette.primary.light}),(function(e){return e.isAddedToUser?"black":"white"}));t.a=function(e){var t=e.addLabel,n=e.removeLabel,r=e.isAdded,o=e.toBackendOnClick,u=Object(i.useState)(!1),s=Object(a.a)(u,2),d=s[0],m=s[1];Object(i.useEffect)((function(){m(r)}),[r]);return c.a.createElement(l,{isAddedToUser:d,onClick:function(){return m(!d),void o()}},d?n:t)}},380:function(e,t,n){"use strict";n.r(t);var a=n(63),r=n(40),o=n(17),i=n(0),c=n.n(i),u=n(159),l=n(273),s=n(14),d=n(234);function m(){var e=Object(o.a)(["\n    margin-right: 10px;\n    background: none;\n    border: none;\n    color: "," || ",";\n    cursor: pointer;\n    font-size: ",";\n\n    &:hover {\n        color: ",";\n    }\n"]);return m=function(){return e},e}var f=s.b.button(m(),(function(e){return e.color}),(function(e){return e.theme.palette.grey[500]}),(function(e){return e.fontSize||"16px"}),(function(e){return e.theme.palette.primary.main})),g=function(e){var t=e.onClick,n=e.label,a=e.children,r=e.color;return c.a.createElement(f,{onClick:t,color:r},n||a)},v=n(73),b=n(168),p=n(158),h=n.n(p);function E(){var e=Object(o.a)(['\n    height: 100px;\n    width: 99%;\n    resize: vertical;\n    font-family: "Roboto", "Helvetica", "Arial", sans-serif\n']);return E=function(){return e},e}var O,y=s.b.textarea(E());!function(e){e[e.Add=0]="Add",e[e.Edit=1]="Edit"}(O||(O={}));var j=window.location.protocol+"//"+window.location.host,x=Object(v.b)(null,{addReviewAction:b.a,editReviewAction:b.d})((function(e){var t,n=Object(i.useState)((null===(t=e.editCommentProps)||void 0===t?void 0:t.review.text)||""),a=Object(r.a)(n,2),o=a[0],u=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,{value:o,onChange:function(e){u(e.target.value)}}),c.a.createElement("div",{style:{textAlign:"right"}},c.a.createElement(g,{onClick:function(){var t=e.editCommentProps,n=e.addCommentProps,a=(new Date).toString();switch(e.actionType){case O.Add:e.addReviewAction({text:o,userId:n.userId,userName:n.userName,datePosted:a,rating:void 0}),h.a.put(j+"/reviewRatings/review",{mediaId:n.mediaId,mediaType:n.mediaType,userName:n.userName,userId:n.userId,rating:n.userRating,datePosted:a,text:o}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));break;case O.Edit:var r=t.review.userId;e.editReviewAction({text:o,userId:r,userName:t.review.userName,datePosted:a}),h.a.put(j+"/reviewRatings/review",{mediaId:t.mediaId,mediaType:t.mediaType,userName:t.review.userName,userId:t.review.userId,rating:t.userRating,datePosted:a,text:o}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));break;default:return}e.closeEdit()}},"Submit"),c.a.createElement(g,{onClick:e.closeEdit},"Cancel")))})),w=n(283),R=n.n(w);var S=n(170);function k(){var e=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n"]);return k=function(){return e},e}function I(){var e=Object(o.a)(["\n    border: none;\n    outline: none;\n    background-color: rgba(255, 255, 255, 0.90);\n    text-align: center;\n    height: 30px;\n    cursor: pointer;\n    padding: 0px;\n    width: 100%;\n    &:hover {\n        background-color: ",";\n    }\n    margin-bottom: 5px;\n"]);return I=function(){return e},e}function C(){var e=Object(o.a)(["\n    border: none;\n    box-shadow: 0px 0 5px rgba(0, 0, 0, 0.3);\n    outline: none;\n    background-color: rgba(255, 255, 255, 0.75);\n    text-align: center;\n    height: 30px;\n    cursor: pointer;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    padding: 0px;\n    width: 100%;\n    backdrop-filter: blur(1.5px);\n"]);return C=function(){return e},e}function A(){var e=Object(o.a)(["\n    max-height: ",";\n    overflow: ",";\n    position: relative;\n"]);return A=function(){return e},e}function T(){var e=Object(o.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return T=function(){return e},e}function N(){var e=Object(o.a)(["\n    border-top: ",";\n    border: ",";\n    min-height: 50px;\n    padding: 5px;\n    padding-bottom: 0px;\n"]);return N=function(){return e},e}var F=s.b.div(N(),(function(e){var t=e.theme;return"2px solid ".concat(t.palette.grey[400])}),(function(e){var t=e.theme;return e.isCurrentUserComment&&"2px solid ".concat(t.palette.grey[400])})),P=s.b.div(T()),D=s.b.div(A(),(function(e){return e.expanded?"":"200px"}),(function(e){return e.expanded?"visible":"hidden"})),L=s.b.button(C()),B=s.b.button(I(),(function(e){return e.theme.palette.grey[200]})),U=s.b.div(k());var M=Object(v.b)(null,{deleteReviewAction:b.c})((function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],o=n[1],u=Object(i.useState)(!1),s=Object(r.a)(u,2),m=s[0],f=s[1],v=Object(i.useState)(!1),b=Object(r.a)(v,2),p=b[0],E=b[1],y=Object(i.useRef)(null),j=e.review,w=e.currentUserId,k=e.isCurrentUserComment,I=new Date(j.datePosted).toDateString(),C=Object(i.useMemo)((function(){return w===j.userId}),[j,w]);return Object(i.useEffect)((function(){var e=function(e){var t=e.current;return t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth}(y);E(!!e)}),[j]),c.a.createElement(c.a.Fragment,null,c.a.createElement(F,{isCurrentUserComment:k},a?c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{variant:"h5"},c.a.createElement("strong",null,j.userName)),c.a.createElement(x,{actionType:O.Edit,closeEdit:function(){return o(!1)},editCommentProps:e})):c.a.createElement(D,{expanded:m,ref:y},c.a.createElement(P,null,c.a.createElement(l.a,{variant:"h5"},c.a.createElement("strong",null,j.userName)," on ".concat(I)),C&&c.a.createElement("div",null,c.a.createElement(g,{onClick:function(){return o(!0)}},"Edit"),c.a.createElement(g,{onClick:function(){return function(e){var t=e.review.userId,n=e.review.userName;e.deleteReviewAction(t),e.userRating?h.a.put("/reviewRatings/review",{mediaId:e.mediaId,mediaType:e.mediaType,userName:n,userId:t,datePosted:"",text:""}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})):h.a.delete("/reviewRatings"+"/".concat(e.mediaType,"/").concat(e.mediaId,"/").concat(e.review.userId)).then((function(e){console.log("successfully deleted the reviewRating",e)})).catch((function(e){console.log(e)}))}(e)}},"Delete"))),c.a.createElement(U,null,c.a.createElement(d.a,{mr:1},"User rated: "),j.rating?c.a.createElement(S.a,{readonly:!0,readOnlyRating:j.rating,hideReadOnlyLabel:!0}):"no rating"),c.a.createElement(R.a,{source:j.text}),!m&&p&&c.a.createElement(L,{onClick:function(){return f(!0)}},c.a.createElement(l.a,{variant:"body1"},"Show more...")),m&&c.a.createElement(B,{onClick:function(){return f(!1)}},c.a.createElement(l.a,{variant:"body1"},"Show less")))))})),z=n(192),W=n(381),H=Object(v.b)((function(e,t){var n=e.reviewRatings.filter((function(e){return e.text})),a=[],r=void 0;return n.forEach((function(e){e.userId===t.userId?r=e:a.push(e)})),{otherUserReviews:a,currentUserReview:r}}))((function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),o=n[0],u=n[1],s=e.otherUserReviews,d=e.currentUserReview,m=e.mediaId,f=e.mediaType,v=e.userId,b=e.userName,p=e.userRating,h=!!d,E=Object(i.useState)([]),y=Object(r.a)(E,2),j=y[0],w=y[1],R=Object(i.useState)([]),S=Object(r.a)(R,2),k=S[0],I=S[1],C=Object(i.useState)("date"),A=Object(r.a)(C,2),T=A[0],N=A[1],F=Object(i.useState)("recent"),P=Object(r.a)(F,2),D=P[0],L=P[1];Object(i.useEffect)((function(){I(s);var e=null===s||void 0===s?void 0:s.slice(0,9);w(e)}),[s]);Object(i.useEffect)((function(){var e=[];switch(D){case"lowest":case"highest":e=k.sort((function(e,t){if(e.rating===t.rating){var n=e.datePosted&&new Date(e.datePosted),a=t.datePosted&&new Date(t.datePosted);return n>a?-1:n<a?1:0}return e.rating?t.rating?"highest"===D?e.rating<t.rating?1:-1:e.rating<t.rating?-1:1:-1:1}));break;case"recent":case"old":e=k.sort((function(e,t){var n=e.datePosted&&new Date(e.datePosted),a=t.datePosted&&new Date(t.datePosted);return n>a?"recent"===D?-1:1:n<a?"recent"===D?1:-1:0}))}var t=e.slice(0,9);w(Object(a.a)(t))}),[k,D,T]);var B=h?s.length+1:s.length;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{variant:"h3",gutterBottom:!0},B||0," Total Reviews"),o?c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{variant:"h5"},c.a.createElement("strong",null,b)),c.a.createElement(x,{actionType:O.Add,closeEdit:function(){return u(!1)},addCommentProps:{mediaType:f,mediaId:m,userId:v,userName:b,userRating:p}})):c.a.createElement("div",{style:{textAlign:"right"}},!h&&c.a.createElement(g,{onClick:function(){return u(!0)}},"Add Review")),d&&d.text&&c.a.createElement(c.a.Fragment,null,c.a.createElement(M,{review:d,currentUserId:v,isCurrentUserComment:!0,mediaId:m,mediaType:f,userRating:p})),c.a.createElement("br",null),s&&s.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(W.a,{variant:"outlined",native:!0,style:{marginBottom:"5px",marginRight:"5px"},onChange:function(e){N(e.target.value),"date"===e.target.value&&L("recent"),"rating"===e.target.value&&L("highest")}},c.a.createElement("option",{value:"date"},"Date"),c.a.createElement("option",{value:"rating"},"Rating")),c.a.createElement(W.a,{variant:"outlined",native:!0,style:{marginBottom:"5px"},onChange:function(e){L(e.target.value)},value:D},c.a.createElement("option",{value:"date"===T?"recent":"highest"},"date"===T?"Recent":"Highest"),c.a.createElement("option",{value:"date"===T?"old":"lowest"},"date"===T?"Old":"Lowest"))),c.a.createElement(z.a,{dataLength:j.length,next:function(){setTimeout((function(){var e=j.length+5,t=k.slice(0,e);w(t)}),1e3)},hasMore:j.length<s.length,loader:c.a.createElement("h4",{style:{textAlign:"center"}},"Loading more reviews..."),scrollThreshold:1,endMessage:c.a.createElement("p",{style:{textAlign:"center"}},c.a.createElement("b",null,"No more reviews"))},j.map((function(e,t){return c.a.createElement(M,{key:t,review:e,currentUserId:v})})))))})),Q=n(157),G=n(275),V=n(281),J=n(365),K=n(156),_=n(165),q=n(194),Y=n(145),X=n(123),Z=n(363),$=n.n(Z),ee=n(364),te=n.n(ee),ne=function(e){var t=e.allOptions,n=e.favoriteOptions,o=e.favKey,u=e.userId,l=Object(i.useState)([]),s=Object(r.a)(l,2),d=s[0],m=s[1],f=c.a.useState(null),g=Object(r.a)(f,2),v=g[0],b=g[1];Object(i.useEffect)((function(){m(n)}),[n]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(Y.a,{onClick:function(e){b(e.currentTarget)},endIcon:c.a.createElement($.a,null),style:{fontSize:"12px"}},"Add to favorites"),c.a.createElement(X.a,{id:"simple-menu",anchorEl:v,keepMounted:!0,open:Boolean(v),onClose:function(){b(null)}},t.map((function(e,t){var n=d.includes(e);return c.a.createElement(K.a,{key:t,onClick:function(){return function(e,t){if(b(null),t){var n=d.filter((function(t){return t!==e}));m(n)}else m([].concat(Object(a.a)(d),[e]));var r=t?"REMOVE":"ADD",i=encodeURIComponent(e);h.a.put("/users/".concat(o,"/").concat(i,"/").concat(u),{action:r}).then((function(e){console.log(e)})).catch((function(e){console.log("Error adding or removing favorite from dropdown",e)}))}(e,n)},style:{whiteSpace:"normal"}},e,n&&c.a.createElement(te.a,{fontSize:"small"}))}))))},ae=n(171),re=n(7),oe=n(83);function ie(){var e=Object(o.a)(["\n    width: 100%;\n    margin: 5px !important;\n"]);return ie=function(){return e},e}function ce(){var e=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 10px;\n"]);return ce=function(){return e},e}function ue(){var e=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n"]);return ue=function(){return e},e}function le(){var e=Object(o.a)(["\n    text-align: center;\n"]);return le=function(){return e},e}function se(){var e=Object(o.a)(["\n    width: 100%;\n    max-width: 300px;\n    min-height: 300px;\n    margin-bottom: 15px;\n    background-color: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return se=function(){return e},e}function de(){var e=Object(o.a)(["\n    width: 100%;\n    max-width: 300px;\n    margin-bottom: 15px;\n"]);return de=function(){return e},e}var me=s.b.img(de()),fe=s.b.div(se(),(function(e){return e.theme.palette.grey[300]})),ge=Object(s.b)(G.a)(le()),ve=s.b.div(ue()),be=s.b.div(ce()),pe=Object(s.b)(V.a)(ie());t.default=Object(v.b)(null,{loadAllReviewsAction:b.e})((function(e){var t=e.location.pathname.split("/").filter((function(e){return e})),n=Object(r.a)(t,2),o=n[0],s=n[1],m=Object(i.useState)(!1),f=Object(r.a)(m,2),g=f[0],v=f[1],b=Object(i.useState)(!1),p=Object(r.a)(b,2),E=p[0],O=p[1],y=Object(i.useState)(!1),j=Object(r.a)(y,2),x=j[0],w=j[1],R=Object(i.useState)({title:"No title",id:s,mediaType:Q.a.start,image:"",people:[""],genres:[""],blurb:"No description"}),k=Object(r.a)(R,2),I=k[0],C=k[1],A=Object(i.useState)({avgRating:0,userRating:0,userHasReviewText:!1}),T=Object(r.a)(A,2),N=T[0],F=T[1],P=Object(i.useState)({booksRead:[],moviesWatched:[],watchLater:[],readLater:[],favoriteMovies:[],favoriteBooks:[],favoriteAuthors:[],favoriteDirectors:[],favoriteGenres:[]}),D=Object(r.a)(P,2),L=D[0],B=D[1],U=Object(i.useState)([]),M=Object(r.a)(U,2),z=M[0],V=M[1],Y=Object(i.useState)([]),X=Object(r.a)(Y,2),Z=X[0],$=X[1],ee=Object(i.useState)([]),te=Object(r.a)(ee,2),ie=te[0],ce=te[1],ue=sessionStorage.getItem("NS-session-data"),le=ue&&JSON.parse(ue),se=le.username,de=le.userId,he=Object(re.g)(),Ee=Object(i.useRef)({numberSubscriptions:0}),Oe=Object(i.useState)(!1),ye=Object(r.a)(Oe,2),je=ye[0],xe=ye[1],we=I.title,Re=I.image,Se=I.people,ke=I.blurb,Ie=I.genres,Ce=N.avgRating,Ae=N.userRating,Te=N.userHasReviewText;Object(i.useEffect)((function(){Ee.current.numberSubscriptions++,xe(!0);var e=o===Q.a.book?"books":"movies";h.a.get("/".concat(e,"/").concat(s)).then((function(e){var t=e.data;t.title||(Ee.current.numberSubscriptions=0,he.push("/notFound")),Ee.current.numberSubscriptions&&(C({title:t.title||"No title",id:s,mediaType:o,image:t.image,people:t.people,genres:t.genres,blurb:t.blurb||"No description"}),Ee.current.numberSubscriptions--,xe(!1))})).catch((function(e){"Could not fetch movie"===e.response.data.message&&(Ee.current.numberSubscriptions=0,he.push("/notFound"))}))}),[e,s,o,de]),Object(i.useEffect)((function(){Ee.current.numberSubscriptions++;var e=o===Q.a.book?"books":"movies";h.a.get("/".concat(e,"/tags/").concat(s)).then((function(e){var t=e.data;Ee.current.numberSubscriptions&&(V(t.nextStoryTags),Ee.current.numberSubscriptions--)})).catch((function(e){console.log("Error getting media",e)}))}),[e,s,o,de]),Object(i.useEffect)((function(){Ee.current.numberSubscriptions++,h.a.get("/reviewRatings/".concat(o,"/").concat(s)).then((function(t){var n=t.data.reviewArray;e.loadAllReviewsAction(n);var a=n.filter((function(e){return e.userId===de})),r=a.length>0?a[0].rating:void 0,o=a.length>0&&!!a[0].text;Ee.current.numberSubscriptions&&(F({avgRating:t.data.average,userRating:r,userHasReviewText:o}),Ee.current.numberSubscriptions--)})).catch((function(e){console.log("Error getting reviews",e)}))}),[e,s,o,de]),Object(i.useEffect)((function(){Ee.current.numberSubscriptions++,h.a.get("/users/userLists/".concat(de)).then((function(e){var t=e.data;Ee.current.numberSubscriptions&&(o===Q.a.movie?(t.watchLater.includes(s)&&v(!0),t.favoriteMovies.includes(s)&&O(!0),t.moviesWatched.includes(s)&&w(!0)):(t.readLater.includes(s)&&v(!0),t.favoriteBooks.includes(s)&&O(!0),t.booksRead.includes(s)&&w(!0)),B({booksRead:t.booksRead,moviesWatched:t.moviesWatched,watchLater:t.watchLater,readLater:t.readLater,favoriteMovies:t.favoriteMovies,favoriteBooks:t.favoriteBooks,favoriteAuthors:t.favoriteAuthors,favoriteDirectors:t.favoriteDirectors,favoriteGenres:t.favoriteGenres}),Ee.current.numberSubscriptions--)})).catch((function(e){console.log("Error getting media",e)}))}),[de,o,s]),Object(i.useEffect)((function(){Ee.current.numberSubscriptions++,h.a.get("/nextStoryTags").then((function(e){var t=e.data,n=z.map((function(e){return e.tagName})),a=[],r=[];t.forEach((function(e){n.includes(e.tagName)?r.push(e):a.push(e)})),Ee.current.numberSubscriptions&&($(a),ce(r),Ee.current.numberSubscriptions--)})).catch((function(e){console.log("Error getting all story tags",e)}))}),[z]);var Ne=function(e){var t=o===Q.a.book?"books":"movies";h.a.put("/".concat(t,"/updateNextStoryTags/").concat(s),{tagsArray:e}).then((function(e){console.log("updated tags for media",e.data)})).catch((function(e){console.log("error setting tags for media",e)}))},Fe=function(e,t,n){h.a.put("/users/".concat(e,"/").concat(t,"/").concat(de),{action:n}).then((function(e){console.log(e)})).catch((function(e){console.log("Error getting reviews",e)}))};return c.a.createElement(c.a.Fragment,null,je&&c.a.createElement(oe.a,null),c.a.createElement(u.a,{maxWidth:"lg"},c.a.createElement(G.a,{container:!0,direction:"row",spacing:5},c.a.createElement(ge,{item:!0,sm:3},Re?c.a.createElement(me,{src:Re}):c.a.createElement(fe,null,"No Image"),c.a.createElement("div",null,"Your rating:",c.a.createElement(be,null,c.a.createElement(S.a,{userRating:Ae,readonly:!1,userId:de,userName:se,userHasReviewText:Te,mediaId:s,mediaType:o})),c.a.createElement("div",null,c.a.createElement(q.a,{toBackendOnClick:function(){return function(e){var t=o===Q.a.movie?"moviesWatched":"booksRead";x?(w(!1),Fe(t,e,"REMOVE")):(w(!0),Fe(t,e,"ADD"))}(s)},isAdded:x,addLabel:"Add to ".concat(o===Q.a.movie?"watched":"read"),removeLabel:"Remove from ".concat(o===Q.a.movie?"watched":"read")})),c.a.createElement("div",null,c.a.createElement(q.a,{toBackendOnClick:function(){return function(e){var t=o===Q.a.movie?"watchLater":"readLater";g?(v(!1),Fe(t,e,"REMOVE")):(v(!0),Fe(t,e,"ADD"))}(s)},isAdded:g,addLabel:"Add to ".concat(o===Q.a.movie?"watch":"read"," later"),removeLabel:"Remove from ".concat(o===Q.a.movie?"watch":"read"," later")})),c.a.createElement("div",null,c.a.createElement(q.a,{toBackendOnClick:function(){return function(e){var t=o===Q.a.movie?"favoriteMovies":"favoriteBooks";E?(O(!1),Fe(t,e,"REMOVE")):(O(!0),Fe(t,e,"ADD"))}(s)},isAdded:E,addLabel:"Add favorite",removeLabel:"Remove favorite"})))),c.a.createElement(G.a,{item:!0,sm:6},c.a.createElement(l.a,{variant:"h1"},we," ",o===Q.a.movie?"(Movie)":"(Book)"),c.a.createElement(d.a,{fontStyle:"italic"},c.a.createElement(l.a,{variant:"subtitle1",gutterBottom:!0},null===Se||void 0===Se?void 0:Se.join(", "),Se&&""!==Se[0]&&c.a.createElement(ne,{allOptions:Se,favoriteOptions:o===Q.a.movie?L.favoriteDirectors:L.favoriteAuthors,userId:de,favKey:o===Q.a.movie?"favoriteDirectors":"favoriteAuthors"}))),c.a.createElement(ve,null,c.a.createElement(l.a,{variant:"subtitle2"},"Avg members rating: "),c.a.createElement(S.a,{readOnlyRating:Ce,readonly:!0})),c.a.createElement(ae.a,{content:ke})),c.a.createElement(G.a,{item:!0,sm:3},"Genres:",c.a.createElement(_.a,{tags:Ie,singleQueryType:Q.b.genre}),c.a.createElement("div",null,Ie.length>0&&c.a.createElement(ne,{allOptions:Ie,favoriteOptions:L.favoriteGenres,userId:de,favKey:"favoriteGenres"})),"Tags:",c.a.createElement(_.a,{tagObjects:ie,singleQueryType:Q.b.tag}),Z.length>0&&c.a.createElement(pe,{variant:"outlined"},c.a.createElement(J.a,{id:"demo-simple-select-outlined-label"},"Add a tag"),c.a.createElement(W.a,{labelId:"add-tag-label",id:"add-tag",value:"",onChange:function(e){var t=[].concat(Object(a.a)(ie),[e.target.value]),n=Z.filter((function(t){return t.tagId!==e.target.value.tagId}));ce(t),$(n),Ne(t)},label:"Add a tag"},Z.map((function(e,t){return c.a.createElement(K.a,{key:"".concat(t,"_add"),value:e},e.tagName)})))),ie.length>0&&c.a.createElement(pe,{variant:"outlined"},c.a.createElement(J.a,{id:"demo-simple-select-outlined-label"},"Delete a tag"),c.a.createElement(W.a,{labelId:"delete-tag-label",id:"delete-tag",value:"",onChange:function(e){var t=ie.filter((function(t){return t.tagId!==e.target.value.tagId})),n=[].concat(Object(a.a)(Z),[e.target.value]);ce(t),$(n),Ne(t)},label:"Delete a tag"},ie.map((function(e,t){return c.a.createElement(K.a,{key:"".concat(t,"_delete"),value:e},e.tagName)}))))))),c.a.createElement(u.a,{maxWidth:"md"},c.a.createElement(H,{mediaId:s,mediaType:o,userName:se,userId:de,userRating:Ae})))}))}}]);
//# sourceMappingURL=14.bd72a4fb.chunk.js.map