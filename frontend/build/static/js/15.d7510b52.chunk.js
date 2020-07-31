(this["webpackJsonpnext-story"]=this["webpackJsonpnext-story"]||[]).push([[15],{157:function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),function(e){e.movie="movie",e.book="book",e.start=""}(a||(a={})),function(e){e.bookPerson="bookPerson",e.moviePerson="moviePerson",e.genre="genre",e.tag="tag",e.searchBar="searchBar"}(r||(r={}))},159:function(e,t,n){"use strict";var a=n(17),r=n(0),c=n.n(r),o=n(244),l=n(14);function i(){var e=Object(a.a)(["\n    margin-top: 85px;\n    margin-bottom: 85px;\n"]);return i=function(){return e},e}var u=Object(l.b)(o.a)(i());t.a=function(e){return c.a.createElement(u,{maxWidth:e.maxWidth},e.children)}},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(75),r=function(e){return{type:a.a,filterName:e}}},165:function(e,t,n){"use strict";var a=n(17),r=n(0),c=n.n(r),o=n(14),l=n(7),i=n(157),u=n(41),s=n(73),d=n(160);function m(){var e=Object(a.a)(["\n    border-radius: 7px;\n    color: white;\n    outline: none;\n    border: none;\n    margin: 5px;\n    cursor: pointer;\n    background-color: ",";\n    &:hover {\n        background-color: ",";\n    }\n    font-size: 16px;\n    padding: 3px 5px 3px 5px;\n"]);return m=function(){return e},e}var b=o.b.button(m(),(function(e){return e.theme.palette.primary.light}),(function(e){return e.theme.palette.secondary.light})),p=Object(s.b)(null,{changeSingleSearchPageFilter:d.a})((function(e){var t=e.label,n=e.tagId,a=e.singleQueryType,r=Object(l.g)(),o=encodeURIComponent(n||t);return c.a.createElement(c.a.Fragment,null,t&&c.a.createElement(b,{onClick:function(){!function(e,t){switch(t){case i.b.bookPerson:e.changeSingleSearchPageFilter(u.b);break;case i.b.moviePerson:e.changeSingleSearchPageFilter(u.d);break;case i.b.tag:case i.b.genre:case i.b.searchBar:default:e.changeSingleSearchPageFilter(u.a)}}(e,a),r.push("/searchResult/param?singleQueryType=".concat(a,"&query=").concat(o))}},t))}));function f(){var e=Object(a.a)(["\n    margin-bottom: 15px;\n"]);return f=function(){return e},e}var g=o.b.div(f());t.a=function(e){var t=e.singleQueryType,n=e.tags,a=e.tagObjects;return c.a.createElement(g,null,n&&n.map((function(e,n){return c.a.createElement(p,{key:n,label:e,singleQueryType:t})})),!n&&a&&a.map((function(e,n){return c.a.createElement(p,{key:n,label:e.tagName,singleQueryType:t,tagId:e.tagId})})))}},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n(64);function c(){return a.useContext(r.a)}},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(e){var t=e.controlled,n=e.default,r=(e.name,e.state,a.useRef(void 0!==t).current),c=a.useState(n),o=c[0],l=c[1];return[r?t:o,a.useCallback((function(e){r||l(e)}),[])]}},201:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(192),o=n(17),l=n(14),i=n(223),u=n(144),s=n(275),d=n(157),m=n(165),b=n(7),p=n(171);function f(){var e=Object(o.a)(["\n    &:hover {\n        cursor: pointer;\n    }\n"]);return f=function(){return e},e}function g(){var e=Object(o.a)(["\n    margin-bottom: 5px;\n"]);return g=function(){return e},e}function h(){var e=Object(o.a)(["\n    max-width: ",";\n    &:hover {\n        cursor: pointer;\n    }\n"]);return h=function(){return e},e}function v(){var e=Object(o.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return v=function(){return e},e}function y(){var e=Object(o.a)(["\n    border-top: ",";\n    border-bottom: ",";\n    min-height: 50px;\n    padding: 5px;\n    margin-bottom: 2px;\n"]);return y=function(){return e},e}var x=l.b.div(y(),(function(e){var t=e.theme;return"2px solid ".concat(t.palette.grey[400])}),(function(e){var t=e.theme;return"2px solid ".concat(t.palette.grey[400])})),k=l.b.div(v()),O=l.b.img(h(),(function(e){return e.isSmall?"150px":"100%"})),j=l.b.div(g()),E=Object(l.b)(i.a)(f()),S=function(e){var t=e.image,n=e.title,a=e.blurb,c=e.genres,o=e.mediaType,l=e.mediaId,i=e.nextStoryTags,f=Object(b.g)(),g=Object(u.a)("(max-width:450px)"),h=function(){f.push("/".concat(o,"/").concat(l))};return r.a.createElement(x,null,r.a.createElement(k,null,r.a.createElement(s.a,{container:!0,direction:"row",spacing:5},r.a.createElement(s.a,{item:!0,sm:3},r.a.createElement(O,{src:t,onClick:h,isSmall:g})),r.a.createElement(s.a,{item:!0,sm:6},r.a.createElement(j,null,r.a.createElement(E,{variant:"h5",onClick:h,color:"textPrimary",gutterBottom:!0},r.a.createElement("strong",null,n))),r.a.createElement(p.a,{content:a})),r.a.createElement(s.a,{item:!0,sm:3},"Genres:",r.a.createElement(m.a,{tags:c,singleQueryType:d.b.genre}),i&&r.a.createElement(r.a.Fragment,null,"Tags:",r.a.createElement(m.a,{tagObjects:i,singleQueryType:d.b.tag}))))))};t.a=function(e){var t=e.resultsToDisplay,n=e.hasMore,a=e.doNext;return r.a.createElement(c.a,{style:{overflow:"hidden"},dataLength:t.length,scrollThreshold:1,next:a,hasMore:n,loader:r.a.createElement("h4",{style:{textAlign:"center"}},"Loading more results..."),endMessage:r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"No more results"))},t.map((function(e,t){return r.a.createElement(S,{key:t,image:e.image,title:e.title,blurb:e.blurb,genres:e.genres,nextStoryTags:e.nextStoryTags,mediaType:e.mediaType,mediaId:e.id})})))}},379:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(159),o=n(273),l=n(63),i=n(221),u=n.n(i),s=n(222),d=n(40),m=n(17),b=n(14),p=n(158),f=n.n(p),g=n(1),h=n(2),v=(n(3),n(4)),y=n(166),x=n(5),k=n(8),O=a.forwardRef((function(e,t){e.checked;var n=e.classes,r=e.className,c=e.control,l=e.disabled,i=(e.inputRef,e.label),u=e.labelPlacement,s=void 0===u?"end":u,d=(e.name,e.onChange,e.value,Object(h.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),m=Object(y.a)(),b=l;"undefined"===typeof b&&"undefined"!==typeof c.props.disabled&&(b=c.props.disabled),"undefined"===typeof b&&m&&(b=m.disabled);var p={disabled:b};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof c.props[t]&&"undefined"!==typeof e[t]&&(p[t]=e[t])})),a.createElement("label",Object(g.a)({className:Object(v.a)(n.root,r,"end"!==s&&n["labelPlacement".concat(Object(k.a)(s))],b&&n.disabled),ref:t},d),a.cloneElement(c,p),a.createElement(o.a,{component:"span",className:Object(v.a)(n.label,b&&n.disabled)},i))})),j=Object(x.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(O),E=n(54),S=n(190),P=n(148),T=a.forwardRef((function(e,t){var n=e.autoFocus,r=e.checked,c=e.checkedIcon,o=e.classes,l=e.className,i=e.defaultChecked,u=e.disabled,s=e.icon,d=e.id,m=e.inputProps,b=e.inputRef,p=e.name,f=e.onBlur,x=e.onChange,k=e.onFocus,O=e.readOnly,j=e.required,T=e.tabIndex,C=e.type,w=e.value,I=Object(h.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),B=Object(S.a)({controlled:r,default:Boolean(i),name:"SwitchBase",state:"checked"}),F=Object(E.a)(B,2),N=F[0],R=F[1],M=Object(y.a)(),z=u;M&&"undefined"===typeof z&&(z=M.disabled);var L="checkbox"===C||"radio"===C;return a.createElement(P.a,Object(g.a)({component:"span",className:Object(v.a)(o.root,l,N&&o.checked,z&&o.disabled),disabled:z,tabIndex:null,role:void 0,onFocus:function(e){k&&k(e),M&&M.onFocus&&M.onFocus(e)},onBlur:function(e){f&&f(e),M&&M.onBlur&&M.onBlur(e)},ref:t},I),a.createElement("input",Object(g.a)({autoFocus:n,checked:r,defaultChecked:i,className:o.input,disabled:z,id:L&&d,name:p,onChange:function(e){var t=e.target.checked;R(t),x&&x(e,t)},readOnly:O,ref:b,required:j,tabIndex:T,type:C,value:w},m)),N?c:s)})),C=Object(x.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(T),w=n(50),I=Object(w.a)(a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),B=Object(w.a)(a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),F=n(15),N=Object(w.a)(a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),R=a.createElement(B,null),M=a.createElement(I,null),z=a.createElement(N,null),L=a.forwardRef((function(e,t){var n=e.checkedIcon,r=void 0===n?R:n,c=e.classes,o=e.color,l=void 0===o?"secondary":o,i=e.icon,u=void 0===i?M:i,s=e.indeterminate,d=void 0!==s&&s,m=e.indeterminateIcon,b=void 0===m?z:m,p=e.inputProps,f=e.size,y=void 0===f?"medium":f,x=Object(h.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]);return a.createElement(C,Object(g.a)({type:"checkbox",classes:{root:Object(v.a)(c.root,c["color".concat(Object(k.a)(l))],d&&c.indeterminate),checked:c.checked,disabled:c.disabled},color:l,inputProps:Object(g.a)({"data-indeterminate":d},p),icon:a.cloneElement(d?b:u,{fontSize:"small"===y?"small":"default"}),checkedIcon:a.cloneElement(d?b:r,{fontSize:"small"===y?"small":"default"}),ref:t},x))})),A=Object(x.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(F.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(F.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(L),H=n(145),Q=n(201);function W(){var e=Object(m.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return W=function(){return e},e}var Y=b.b.div(W()),$=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),m=Object(d.a)(i,2),b=m[0],p=m[1],g=Object(a.useState)(!1),h=Object(d.a)(g,2),v=h[0],y=h[1],x=Object(a.useState)([]),k=Object(d.a)(x,2),O=k[0],E=k[1],S=Object(a.useState)(0),P=Object(d.a)(S,2),T=P[0],C=P[1],w=Object(a.useState)(!0),I=Object(d.a)(w,2),B=I[0],F=I[1],N=Object(a.useState)(!0),R=Object(d.a)(N,2),M=R[0],z=R[1],L=Object(a.useState)([]),W=Object(d.a)(L,2),$=W[0],D=W[1],q=Object(a.useState)(!1),V=Object(d.a)(q,2),J=V[0],G=V[1];Object(a.useEffect)((function(){f.a.get("/nextStoryTags").then((function(e){c(e.data)})).catch((function(e){console.log(e)}))}),[]);var U=function(){var e=Object(s.a)(u.a.mark((function e(){var t,n,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=[],n=[],a=O.reduce((function(e,t){return"".concat(e,"&").concat(t.tagId)}),"").substring(1),!b){e.next=14;break}return e.prev=4,e.next=7,f.a.get("/movies/withTags/".concat(a));case 7:r=e.sent,t=r.data,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log("error fetching movies from mongo for tag",e.t0);case 14:if(!v){e.next=25;break}return e.prev=15,e.next=18,f.a.get("/books/withTags/".concat(a));case 18:c=e.sent,n=c.data,e.next=25;break;case 22:e.prev=22,e.t1=e.catch(15),console.log("error fetching books from mongo for tag",e.t1);case 25:return e.prev=25,e.next=28,K(t,n);case 28:e.next=33;break;case 30:e.prev=30,e.t2=e.catch(25),console.log(e.t2);case 33:case"end":return e.stop()}}),e,null,[[4,11],[15,22],[25,30]])})));return function(){return e.apply(this,arguments)}}();function K(e,t){return X.apply(this,arguments)}function X(){return(X=Object(s.a)(u.a.mark((function e(t,n){var a,r,c,o,i,s,d,m,b;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],r=[],c=T+5,o=t.length>=c?c:t.length,i=n.length>=c?c:n.length,s=u.a.mark((function e(n){var a,c,o,i,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t[n].movieId,e.prev=1,e.next=4,f.a.get("/thirdPartyMovieApi/tmdbMovies/searchOneById/".concat(a));case 4:c=e.sent,o=c.data,i=t.filter((function(e){return e.movieId===a})),s=i.length>0&&i[0],o.nextStoryTags=s?s.nextStoryTags:[],r.push(o),D((function(e){return[].concat(Object(l.a)(e),[o])})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})),d=T;case 7:if(!(d<o)){e.next=12;break}return e.delegateYield(s(d),"t0",9);case 9:d++,e.next=7;break;case 12:m=u.a.mark((function e(t){var r,c,o,i,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n[t].bookId,e.prev=1,e.next=4,f.a.get("/thirdPartyBookApi/googleBooks/searchOneById/".concat(r));case 4:c=e.sent,o=c.data,i=n.filter((function(e){return e.bookId===r})),s=i.length>0&&i[0],o.nextStoryTags=s?s.nextStoryTags:[],a.push(o),D((function(e){return[].concat(Object(l.a)(e),[o])})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})),b=T;case 14:if(!(b<i)){e.next=19;break}return e.delegateYield(m(b),"t1",16);case 16:b++,e.next=14;break;case 19:return 0===r.length&&F(!1),0===a.length&&z(!1),e.abrupt("return",[r,a]);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=function(){C(T+5)},_=r.a.createElement("div",null,r.a.createElement(Y,null,r.a.createElement(o.a,null,"Types:"),r.a.createElement("div",null,r.a.createElement(j,{onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:r.a.createElement(A,{name:"movie",onClick:function(e){e.stopPropagation(),p(!b)}}),label:"Movies"}),r.a.createElement(j,{onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:r.a.createElement(A,{name:"book",onClick:function(e){e.stopPropagation(),y(!v)}}),label:"Books"}))),r.a.createElement("div",null,r.a.createElement(o.a,null,"Tags:"),r.a.createElement("div",null,n.map((function(e,t){return r.a.createElement(j,{control:r.a.createElement(A,{name:e.tagName,onClick:function(){if(O.includes(e)){var t=O.indexOf(e);t>-1&&O.splice(t,1)}else E([].concat(Object(l.a)(O),[e]))}}),label:e.tagName,key:t})})))),r.a.createElement(H.a,{variant:"contained",style:{marginBottom:"5px"},onClick:function(){b||v?O&&0!==O.length?(D([]),G(!0),U()):alert("Please Spicify The Tags For Your Story!"):alert("Please Spicify The Story Type You Are Looking For!")}},"Explore"));return r.a.createElement("div",null,_,J?$&&$.length>0?r.a.createElement(Q.a,{resultsToDisplay:$,hasMore:B||M,doNext:Z}):r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"Sorry... We Haven't Found What You Are Looking For.")):r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"What's Your Next Story?")))};t.default=function(){return r.a.createElement(c.a,{maxWidth:"md"},r.a.createElement(o.a,{variant:"h1",gutterBottom:!0},"Explore Your Next Story!"),r.a.createElement($,null))}}}]);
//# sourceMappingURL=15.d7510b52.chunk.js.map