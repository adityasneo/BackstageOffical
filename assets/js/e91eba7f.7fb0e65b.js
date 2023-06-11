/*! For license information please see e91eba7f.7fb0e65b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[499802],{791503:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>a});var t=r(824246),o=r(511151);const c={id:"backend-common.kubernetescontainerrunner",title:"KubernetesContainerRunner",description:"API reference for KubernetesContainerRunner"},s=void 0,u={unversionedId:"reference/backend-common.kubernetescontainerrunner",id:"reference/backend-common.kubernetescontainerrunner",title:"KubernetesContainerRunner",description:"API reference for KubernetesContainerRunner",source:"@site/../docs/reference/backend-common.kubernetescontainerrunner.md",sourceDirName:"reference",slug:"/reference/backend-common.kubernetescontainerrunner",permalink:"/docs/reference/backend-common.kubernetescontainerrunner",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-common.kubernetescontainerrunner.md",tags:[],version:"current",frontMatter:{id:"backend-common.kubernetescontainerrunner",title:"KubernetesContainerRunner",description:"API reference for KubernetesContainerRunner"}},i={},a=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-common",children:(0,t.jsx)(n.code,{children:"@backstage/backend-common"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.kubernetescontainerrunner",children:(0,t.jsx)(n.code,{children:"KubernetesContainerRunner"})})]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.containerrunner",children:"ContainerRunner"})," for Kubernetes."]}),"\n",(0,t.jsx)(n.p,{children:"Runs containers leveraging Jobs on a Kubernetes cluster"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.b,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class KubernetesContainerRunner implements ContainerRunner \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.b,{children:"Implements:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.containerrunner",children:"ContainerRunner"})]}),"\n",(0,t.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constructor"}),(0,t.jsx)(n.th,{children:"Modifiers"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.kubernetescontainerrunner._constructor_",children:"(constructor)(options)"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Constructs a new instance of the ",(0,t.jsx)(n.code,{children:"KubernetesContainerRunner"})," class"]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Modifiers"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.kubernetescontainerrunner.runcontainer",children:"runContainer(options)"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]})})]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,s,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var a in c=Object(arguments[i]))r.call(c,a)&&(u[a]=c[a]);if(n){s=n(c);for(var l=0;l<s.length;l++)t.call(c,s[l])&&(u[s[l]]=c[s[l]])}}return u}},371426:(e,n,r)=>{r(862525);var t=r(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),n.Fragment=c("react.fragment")}var s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,c={},a=null,l=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)u.call(n,t)&&!i.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:o,type:e,key:a,ref:l,props:c,_owner:s.current}}n.jsx=a,n.jsxs=a},541535:(e,n,r)=>{var t=r(862525),o=60103,c=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var s=60109,u=60110,i=60112;n.Suspense=60113;var a=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),n.Fragment=f("react.fragment"),n.StrictMode=f("react.strict_mode"),n.Profiler=f("react.profiler"),s=f("react.provider"),u=f("react.context"),i=f("react.forward_ref"),n.Suspense=f("react.suspense"),a=f("react.memo"),l=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,n,r){this.props=e,this.context=n,this.refs=y,this.updater=r||h}function m(){}function j(e,n,r){this.props=e,this.context=n,this.refs=y,this.updater=r||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,n,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var v=j.prototype=new m;v.constructor=j,t(v,b.prototype),v.isPureReactComponent=!0;var _={current:null},k=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function g(e,n,r){var t,c={},s=null,u=null;if(null!=n)for(t in void 0!==n.ref&&(u=n.ref),void 0!==n.key&&(s=""+n.key),n)k.call(n,t)&&!x.hasOwnProperty(t)&&(c[t]=n[t]);var i=arguments.length-2;if(1===i)c.children=r;else if(1<i){for(var a=Array(i),l=0;l<i;l++)a[l]=arguments[l+2];c.children=a}if(e&&e.defaultProps)for(t in i=e.defaultProps)void 0===c[t]&&(c[t]=i[t]);return{$$typeof:o,type:e,key:s,ref:u,props:c,_owner:_.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function O(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,r,t,s){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case c:i=!0}}if(i)return s=s(i=e),e=""===t?"."+O(i,0):t,Array.isArray(s)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),R(s,n,r,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),n.push(s)),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var l=t+O(u=e[a],a);i+=R(u,n,r,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(u=e.next()).done;)i+=R(u=u.value,n,r,l=t+O(u,a++),s);else if("object"===u)throw n=""+e,Error(p(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return i}function S(e,n,r){if(null==e)return e;var t=[],o=0;return R(e,t,"","",(function(e){return n.call(r,e,o++)})),t}function E(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(p(321));return e}var I={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:t};n.Children={map:S,forEach:function(e,n,r){S(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return S(e,(function(){n++})),n},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(p(143));return e}},n.Component=b,n.PureComponent=j,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.cloneElement=function(e,n,r){if(null==e)throw Error(p(267,e));var c=t({},e.props),s=e.key,u=e.ref,i=e._owner;if(null!=n){if(void 0!==n.ref&&(u=n.ref,i=_.current),void 0!==n.key&&(s=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in n)k.call(n,l)&&!x.hasOwnProperty(l)&&(c[l]=void 0===n[l]&&void 0!==a?a[l]:n[l])}var l=arguments.length-2;if(1===l)c.children=r;else if(1<l){a=Array(l);for(var f=0;f<l;f++)a[f]=arguments[f+2];c.children=a}return{$$typeof:o,type:e.type,key:s,ref:u,props:c,_owner:i}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:u,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=g,n.createFactory=function(e){var n=g.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:i,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:a,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return $().useCallback(e,n)},n.useContext=function(e,n){return $().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return $().useEffect(e,n)},n.useImperativeHandle=function(e,n,r){return $().useImperativeHandle(e,n,r)},n.useLayoutEffect=function(e,n){return $().useLayoutEffect(e,n)},n.useMemo=function(e,n){return $().useMemo(e,n)},n.useReducer=function(e,n,r){return $().useReducer(e,n,r)},n.useRef=function(e){return $().useRef(e)},n.useState=function(e){return $().useState(e)},n.version="17.0.2"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>u,ah:()=>c});var t=r(667294);const o=t.createContext({});function c(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function u({components:e,children:n,disableParentContext:r}){let u;return u=r?"function"==typeof e?e({}):e||s:c(e),t.createElement(o.Provider,{value:u},n)}}}]);