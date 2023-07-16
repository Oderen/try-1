"use strict";(self.webpackChunkProjects=self.webpackChunkProjects||[]).push([[361],{6361:function(n,r,e){e.r(r),e.d(r,{default:function(){return A}});var t=e(1413),a=e(9439),i=e(2791),o=e(3044),c=e(8551),s=e(4708),u=e(9176),l=e(533),p=e(3433),m=e(4942),d=e(3366),f=e(7462),g=e(8182),v=e(1184),h=e(8519),x=e(4419),w=e(6934),b=e(1402),Z=e(3967);var k=i.createContext(),S=e(5878),j=e(1217);function y(n){return(0,j.Z)("MuiGrid",n)}var W=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],M=(0,S.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,p.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,p.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,p.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,p.Z)(W.map((function(n){return"grid-xs-".concat(n)}))),(0,p.Z)(W.map((function(n){return"grid-sm-".concat(n)}))),(0,p.Z)(W.map((function(n){return"grid-md-".concat(n)}))),(0,p.Z)(W.map((function(n){return"grid-lg-".concat(n)}))),(0,p.Z)(W.map((function(n){return"grid-xl-".concat(n)}))))),N=e(184),P=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function L(n){var r=parseFloat(n);return"".concat(r).concat(String(n).replace(String(r),"")||"px")}function z(n){var r=n.breakpoints,e=n.values,t="";Object.keys(e).forEach((function(n){""===t&&0!==e[n]&&(t=n)}));var a=Object.keys(r).sort((function(n,e){return r[n]-r[e]}));return a.slice(0,a.indexOf(t))}var T=(0,w.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,r){var e=n.ownerState,t=e.container,a=e.direction,i=e.item,o=e.spacing,c=e.wrap,s=e.zeroMinWidth,u=e.breakpoints,l=[];t&&(l=function(n,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[e["spacing-xs-".concat(String(n))]];var t=[];return r.forEach((function(r){var a=n[r];Number(a)>0&&t.push(e["spacing-".concat(r,"-").concat(String(a))])})),t}(o,u,r));var m=[];return u.forEach((function(n){var t=e[n];t&&m.push(r["grid-".concat(n,"-").concat(String(t))])})),[r.root,t&&r.container,i&&r.item,s&&r.zeroMinWidth].concat((0,p.Z)(l),["row"!==a&&r["direction-xs-".concat(String(a))],"wrap"!==c&&r["wrap-xs-".concat(String(c))]],m)}})((function(n){var r=n.ownerState;return(0,f.Z)({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},"wrap"!==r.wrap&&{flexWrap:r.wrap})}),(function(n){var r=n.theme,e=n.ownerState,t=(0,v.P$)({values:e.direction,breakpoints:r.breakpoints.values});return(0,v.k9)({theme:r},t,(function(n){var r={flexDirection:n};return 0===n.indexOf("column")&&(r["& > .".concat(M.item)]={maxWidth:"none"}),r}))}),(function(n){var r=n.theme,e=n.ownerState,t=e.container,a=e.rowSpacing,i={};if(t&&0!==a){var o,c=(0,v.P$)({values:a,breakpoints:r.breakpoints.values});"object"===typeof c&&(o=z({breakpoints:r.breakpoints.values,values:c})),i=(0,v.k9)({theme:r},c,(function(n,e){var t,a=r.spacing(n);return"0px"!==a?(0,m.Z)({marginTop:"-".concat(L(a))},"& > .".concat(M.item),{paddingTop:L(a)}):null!=(t=o)&&t.includes(e)?{}:(0,m.Z)({marginTop:0},"& > .".concat(M.item),{paddingTop:0})}))}return i}),(function(n){var r=n.theme,e=n.ownerState,t=e.container,a=e.columnSpacing,i={};if(t&&0!==a){var o,c=(0,v.P$)({values:a,breakpoints:r.breakpoints.values});"object"===typeof c&&(o=z({breakpoints:r.breakpoints.values,values:c})),i=(0,v.k9)({theme:r},c,(function(n,e){var t,a=r.spacing(n);return"0px"!==a?(0,m.Z)({width:"calc(100% + ".concat(L(a),")"),marginLeft:"-".concat(L(a))},"& > .".concat(M.item),{paddingLeft:L(a)}):null!=(t=o)&&t.includes(e)?{}:(0,m.Z)({width:"100%",marginLeft:0},"& > .".concat(M.item),{paddingLeft:0})}))}return i}),(function(n){var r,e=n.theme,t=n.ownerState;return e.breakpoints.keys.reduce((function(n,a){var i={};if(t[a]&&(r=t[a]),!r)return n;if(!0===r)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,v.P$)({values:t.columns,breakpoints:e.breakpoints.values}),c="object"===typeof o?o[a]:o;if(void 0===c||null===c)return n;var s="".concat(Math.round(r/c*1e8)/1e6,"%"),u={};if(t.container&&t.item&&0!==t.columnSpacing){var l=e.spacing(t.columnSpacing);if("0px"!==l){var p="calc(".concat(s," + ").concat(L(l),")");u={flexBasis:p,maxWidth:p}}}i=(0,f.Z)({flexBasis:s,flexGrow:0,maxWidth:s},u)}return 0===e.breakpoints.values[a]?Object.assign(n,i):n[e.breakpoints.up(a)]=i,n}),{})}));var E=function(n){var r=n.classes,e=n.container,t=n.direction,a=n.item,i=n.spacing,o=n.wrap,c=n.zeroMinWidth,s=n.breakpoints,u=[];e&&(u=function(n,r){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var e=[];return r.forEach((function(r){var t=n[r];if(Number(t)>0){var a="spacing-".concat(r,"-").concat(String(t));e.push(a)}})),e}(i,s));var l=[];s.forEach((function(r){var e=n[r];e&&l.push("grid-".concat(r,"-").concat(String(e)))}));var m={root:["root",e&&"container",a&&"item",c&&"zeroMinWidth"].concat((0,p.Z)(u),["row"!==t&&"direction-xs-".concat(String(t)),"wrap"!==o&&"wrap-xs-".concat(String(o))],l)};return(0,x.Z)(m,y,r)},C=i.forwardRef((function(n,r){var e=(0,b.Z)({props:n,name:"MuiGrid"}),t=(0,Z.Z)().breakpoints,a=(0,h.Z)(e),o=a.className,c=a.columns,s=a.columnSpacing,u=a.component,l=void 0===u?"div":u,p=a.container,m=void 0!==p&&p,v=a.direction,x=void 0===v?"row":v,w=a.item,S=void 0!==w&&w,j=a.rowSpacing,y=a.spacing,W=void 0===y?0:y,M=a.wrap,L=void 0===M?"wrap":M,z=a.zeroMinWidth,C=void 0!==z&&z,G=(0,d.Z)(a,P),D=j||W,I=s||W,_=i.useContext(k),B=m?c||12:_,F={},O=(0,f.Z)({},G);t.keys.forEach((function(n){null!=G[n]&&(F[n]=G[n],delete O[n])}));var $=(0,f.Z)({},a,{columns:B,container:m,direction:x,item:S,rowSpacing:D,columnSpacing:I,wrap:L,zeroMinWidth:C,spacing:W},F,{breakpoints:t.keys}),q=E($);return(0,N.jsx)(k.Provider,{value:B,children:(0,N.jsx)(T,(0,f.Z)({ownerState:$,className:(0,g.Z)(q.root,o),as:l,ref:r},O))})})),G=C,D=e(4554),I=e(403),_=e(890),B=e(1614),F=e(9434),O=e(8661),$="LoginForm_loginButton__qeQmy",q="LoginForm_loginLink__ZHawW";function R(){var n=(0,F.I0)(),r=(0,i.useState)(!1),e=(0,a.Z)(r,2),p=e[0],m=e[1],d=(0,i.useState)(!1),f=(0,a.Z)(d,2),g=f[0],v=f[1],h=(0,F.v9)((function(n){return n.auth.isAuthProblem.isLogProblem})),x=(0,i.useState)(!1),w=(0,a.Z)(x,2),b=w[0],Z=w[1],k={backgroundColor:b?"#2072af":"#003262",transition:"background-color 0.2s ease"};return(0,N.jsxs)(B.Z,{component:"main",maxWidth:"xs",children:[(0,N.jsx)(s.ZP,{}),(0,N.jsxs)(D.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,N.jsx)(o.Z,{sx:{m:1,bgcolor:"#003262"},children:(0,N.jsx)(I.Z,{})}),(0,N.jsx)(_.Z,{component:"h1",variant:"h5",children:"Log In"}),(0,N.jsxs)(D.Z,{component:"form",onSubmit:function(r){r.preventDefault();var e=new FormData(r.currentTarget),t=e.get("email"),a=e.get("password");if(""===t)return m(!0);if(m(!1),!(a.length>6))return v(!0);v(!1);var i={name:t.split("@")[0],email:t,password:a};n((0,O.Ib)(i))},noValidate:!0,sx:{mt:1},children:[(0,N.jsx)(u.Z,{id:"email",name:"email",type:"email",label:"Email Address",placeholder:"example.something@gmail.com",autoComplete:"email",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0,error:!(!p&&!h),helperText:p?"Invalid email. Please try again":""}),(0,N.jsx)(u.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",error:!(!g&&!h),helperText:g?"Password must contain at leat 7 characters":"",autoComplete:"current-password"}),h&&(0,N.jsx)("div",{style:{marginTop:10},children:(0,N.jsx)("p",{style:{margin:0,color:"red"},children:"Wrong email or password. Please try again"})}),(0,N.jsx)(c.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:2,mb:2},style:(0,t.Z)({},k),className:$,onMouseEnter:function(){return Z(!0)},onMouseLeave:function(){return Z(!1)},children:"Log In"}),(0,N.jsx)(G,{container:!0,children:(0,N.jsx)(G,{item:!0,children:(0,N.jsx)(l.Z,{href:"http://localhost:3000/goit-react-hw-08-phonebook/register",variant:"body2",style:{textDecoration:"none"},children:(0,N.jsxs)("p",{className:q,children:[(0,N.jsx)("span",{children:"Don't have an account?"}),(0,N.jsx)("span",{style:{marginLeft:5},children:"Sign Up"})]})})})})]})]})]})}var A=function(){return(0,N.jsx)(R,{})}}}]);
//# sourceMappingURL=361.b115e887.chunk.js.map