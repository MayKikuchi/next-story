(this["webpackJsonpnext-story"]=this["webpackJsonpnext-story"]||[]).push([[11],{157:function(e,a,t){"use strict";var n=t(22),o=t(0),r=t.n(o),c=t(138),l=t(17);function i(){var e=Object(n.a)(["\n    margin-top: 85px;\n"]);return i=function(){return e},e}var s=Object(l.b)(c.a)(i());a.a=function(e){return r.a.createElement(s,{maxWidth:e.maxWidth},e.children)}},169:function(e,a,t){},349:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=(t(187),t(157)),c=(t(169),t(42)),l=t(356),i=t(143),s=t(344),d=t(353),m=t(1),u=t(2),p=(t(3),t(4)),b=t(161),g=t(5),f=t(140),h=t(6),v=n.forwardRef((function(e,a){e.checked;var t=e.classes,o=e.className,r=e.control,c=e.disabled,l=(e.inputRef,e.label),i=e.labelPlacement,s=void 0===i?"end":i,d=(e.name,e.onChange,e.value,Object(u.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),g=Object(b.a)(),v=c;"undefined"===typeof v&&"undefined"!==typeof r.props.disabled&&(v=r.props.disabled),"undefined"===typeof v&&g&&(v=g.disabled);var E={disabled:v};return["checked","name","onChange","value","inputRef"].forEach((function(a){"undefined"===typeof r.props[a]&&"undefined"!==typeof e[a]&&(E[a]=e[a])})),n.createElement("label",Object(m.a)({className:Object(p.a)(t.root,o,"end"!==s&&t["labelPlacement".concat(Object(h.a)(s))],v&&t.disabled),ref:a},d),n.cloneElement(r,E),n.createElement(f.a,{component:"span",className:Object(p.a)(t.label,v&&t.disabled)},l))})),E=Object(g.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(v),O=t(49),y=t(186),j=t(146),k=n.forwardRef((function(e,a){var t=e.autoFocus,o=e.checked,r=e.checkedIcon,c=e.classes,l=e.className,i=e.defaultChecked,s=e.disabled,d=e.icon,g=e.id,f=e.inputProps,h=e.inputRef,v=e.name,E=e.onBlur,k=e.onChange,x=e.onFocus,S=e.readOnly,w=e.required,C=e.tabIndex,I=e.type,N=e.value,L=Object(u.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),P=Object(y.a)({controlled:o,default:Boolean(i),name:"SwitchBase",state:"checked"}),F=Object(O.a)(P,2),B=F[0],R=F[1],D=Object(b.a)(),z=s;D&&"undefined"===typeof z&&(z=D.disabled);var T="checkbox"===I||"radio"===I;return n.createElement(j.a,Object(m.a)({component:"span",className:Object(p.a)(c.root,l,B&&c.checked,z&&c.disabled),disabled:z,tabIndex:null,role:void 0,onFocus:function(e){x&&x(e),D&&D.onFocus&&D.onFocus(e)},onBlur:function(e){E&&E(e),D&&D.onBlur&&D.onBlur(e)},ref:a},L),n.createElement("input",Object(m.a)({autoFocus:t,checked:o,defaultChecked:i,className:c.input,disabled:z,id:T&&g,name:v,onChange:function(e){var a=e.target.checked;R(a),k&&k(e,a)},readOnly:S,ref:h,required:w,tabIndex:C,type:I,value:N},f)),B?r:d)})),x=Object(g.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(k),S=t(44),w=Object(S.a)(n.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),C=Object(S.a)(n.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),I=t(14),N=Object(S.a)(n.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),L=n.createElement(C,null),P=n.createElement(w,null),F=n.createElement(N,null),B=n.forwardRef((function(e,a){var t=e.checkedIcon,o=void 0===t?L:t,r=e.classes,c=e.color,l=void 0===c?"secondary":c,i=e.icon,s=void 0===i?P:i,d=e.indeterminate,b=void 0!==d&&d,g=e.indeterminateIcon,f=void 0===g?F:g,v=e.inputProps,E=e.size,O=void 0===E?"medium":E,y=Object(u.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]);return n.createElement(x,Object(m.a)({type:"checkbox",classes:{root:Object(p.a)(r.root,r["color".concat(Object(h.a)(l))],b&&r.indeterminate),checked:r.checked,disabled:r.disabled},color:l,inputProps:Object(m.a)({"data-indeterminate":b},v),icon:n.cloneElement(b?f:s,{fontSize:"small"===O?"small":"default"}),checkedIcon:n.cloneElement(b?f:o,{fontSize:"small"===O?"small":"default"}),ref:a},y))})),R=Object(g.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(I.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(I.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(B),D=t(342),z=t(231),T=t(347),G=t(197),W=t.n(G),H=t(343),$=t(138),q=t(9),J=t(160),M=t.n(J),V=t(196);function A(){return o.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(D.a,{color:"inherit",href:"https://material-ui.com/"},"NextStory")," ",(new Date).getFullYear(),".")}var Y=Object(H.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(2,0,2)}}}));function _(){var e=Y(),a=Object(n.useState)(""),t=Object(c.a)(a,2),r=t[0],m=t[1],u=Object(n.useState)(""),p=Object(c.a)(u,2),b=p[0],g=p[1],h=Object(n.useState)(""),v=Object(c.a)(h,2),O=v[0],y=v[1],j=Object(n.useState)(!1),k=Object(c.a)(j,2),x=k[0],S=k[1],w=Object(n.useState)(!1),C=Object(c.a)(w,2),I=C[0],N=C[1],L=Object(n.useState)(!1),P=Object(c.a)(L,2),F=P[0],B=P[1],G=Object(q.g)();Object(n.useEffect)((function(){var e=sessionStorage.getItem("NS-session-data"),a=e&&JSON.parse(e),t=null===a||void 0===a?void 0:a.expiry,n=t&&new Date(t)>new Date,o=null===a||void 0===a?void 0:a.isGoogleLogin;N(n),B(o)}),[]);return o.a.createElement($.a,{component:"main",maxWidth:"xs"},o.a.createElement(s.a,null),o.a.createElement("div",{className:e.paper},o.a.createElement(l.a,{className:e.avatar},o.a.createElement(W.a,null)),o.a.createElement(f.a,{component:"h1",variant:"h5"},"Login"),I?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{color:"red",margin:"20px"}},"You are already signed in"),o.a.createElement(D.a,{href:"/",variant:"body2"},"Go to home"),o.a.createElement("div",{style:{margin:"10px"}},"Or"),F?o.a.createElement(V.GoogleLogout,{clientId:"279438615331-cvlr0tk0j35i4s9df4m51o9sb5uj8k3s.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(){sessionStorage.removeItem("NS-session-data"),N(!1),B(!1)}}):o.a.createElement(i.a,{color:"primary",onClick:function(){sessionStorage.removeItem("NS-session-data"),N(!1),B(!1)}},"Logout")):o.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:function(e){if(e.preventDefault(),!r||!b)return S(!0),void y("All fields must be filled in");S(!1),M.a.get("http://localhost:9000/users/notGoogleLogin/".concat(r,"/").concat(b)).then((function(e){if(e.data.passwordCorrect){var a=e.data.userId,t=e.data.name,n=new Date;n.setSeconds(n.getSeconds()+3599);var o={expiry:n,username:t,userId:a,isGoogleLogin:!1};sessionStorage.setItem("NS-session-data",JSON.stringify(o)),G.push("/")}else S(!0),y("Password is incorrect")})).catch((function(e){var a,t;S(!0);var n=(null===(a=e.response)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.message)||"There was an error logging in";y(n),console.log("Error logging in",e)}))}},o.a.createElement(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){m(e.target.value)}}),o.a.createElement(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){g(e.target.value)}}),x&&o.a.createElement(z.a,{item:!0,xs:12},o.a.createElement("div",{style:{color:"red"}},O)),o.a.createElement(E,{control:o.a.createElement(R,{value:"remember",color:"primary"}),label:"Remember me"}),o.a.createElement(i.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Log In"),o.a.createElement("span",{style:{marginRight:"5px"}},"Or login with Google"),o.a.createElement(V.GoogleLogin,{clientId:"279438615331-cvlr0tk0j35i4s9df4m51o9sb5uj8k3s.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(e){console.log("response: ",e);var a=e.profileObj.email;a&&M.a.get("http://localhost:9000/users/googleLogin/".concat(a)).then((function(e){var a=e.data.userId,t=e.data.name,n=new Date;n.setSeconds(n.getSeconds()+3599);var o={expiry:n,username:t,userId:a,isGoogleLogin:!0};sessionStorage.setItem("NS-session-data",JSON.stringify(o)),G.push("/")})).catch((function(e){var a,t;S(!0);var n=(null===(a=e.response)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.message)||"There was an error logging in";y(n),console.log("Error logging in",e)}))},onFailure:function(e){console.log("on login Failure"),console.log("response: ",e),S(!0),y("There was an error logging in")},cookiePolicy:"single_host_origin"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(z.a,{container:!0},o.a.createElement(z.a,{item:!0,xs:!0},o.a.createElement(D.a,{href:"#",variant:"body2"},"Forgot password?")),o.a.createElement(z.a,{item:!0},o.a.createElement(D.a,{href:"/signup",variant:"body2"},"Don't have an account? Sign Up"))))),o.a.createElement(T.a,{mt:8},o.a.createElement(A,null)))}a.default=function(){return o.a.createElement(r.a,{maxWidth:"md"},o.a.createElement(_,null))}}}]);
//# sourceMappingURL=11.8dda2108.chunk.js.map