/*! For license information please see 729bb814.83d18945.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[388752],{704826:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>u,toc:()=>l});var o=t(824246),n=t(511151);const c={id:"plugin-bitbucket-cloud-common.models.repository.fork_policy",title:"Models.Repository.fork_policy",description:"API reference for Models.Repository.fork_policy"},i=void 0,u={unversionedId:"reference/plugin-bitbucket-cloud-common.models.repository.fork_policy",id:"reference/plugin-bitbucket-cloud-common.models.repository.fork_policy",title:"Models.Repository.fork_policy",description:"API reference for Models.Repository.fork_policy",source:"@site/../docs/reference/plugin-bitbucket-cloud-common.models.repository.fork_policy.md",sourceDirName:"reference",slug:"/reference/plugin-bitbucket-cloud-common.models.repository.fork_policy",permalink:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.fork_policy",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-bitbucket-cloud-common.models.repository.fork_policy.md",tags:[],version:"current",frontMatter:{id:"plugin-bitbucket-cloud-common.models.repository.fork_policy",title:"Models.Repository.fork_policy",description:"API reference for Models.Repository.fork_policy"}},s={},l=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,n.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common",children:(0,o.jsx)(r.code,{children:"@backstage/plugin-bitbucket-cloud-common"})})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models",children:(0,o.jsx)(r.code,{children:"Models"})})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository",children:(0,o.jsx)(r.code,{children:"Repository"})})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.fork_policy",children:(0,o.jsx)(r.code,{children:"fork\\_policy"})})]}),"\n",(0,o.jsx)(r.p,{children:"Controls the rules for forking this repository."}),"\n",(0,o.jsx)(r.p,{children:"* **allow_forks**: unrestricted forking * **no_public_forks**: restrict forking to private forks (forks cannot be made public later) * **no_forks**: deny all forking"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.b,{children:"Signature:"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"fork_policy?: RepositoryForkPolicyEnum;\n"})})]})}const a=function(e={}){const{wrapper:r}=Object.assign({},(0,n.ah)(),e.components);return r?(0,o.jsx)(r,Object.assign({},e,{children:(0,o.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(n){return!1}}()?Object.assign:function(e,n){for(var c,i,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in c=Object(arguments[s]))t.call(c,l)&&(u[l]=c[l]);if(r){i=r(c);for(var f=0;f<i.length;f++)o.call(c,i[f])&&(u[i[f]]=c[i[f]])}}return u}},371426:(e,r,t)=>{t(862525);var o=t(827378),n=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),r.Fragment=c("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var o,c={},l=null,f=null;for(o in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(f=r.ref),r)u.call(r,o)&&!s.hasOwnProperty(o)&&(c[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===c[o]&&(c[o]=r[o]);return{$$typeof:n,type:e,key:l,ref:f,props:c,_owner:i.current}}r.jsx=l,r.jsxs=l},541535:(e,r,t)=>{var o=t(862525),n=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var i=60109,u=60110,s=60112;r.Suspense=60113;var l=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),c=a("react.portal"),r.Fragment=a("react.fragment"),r.StrictMode=a("react.strict_mode"),r.Profiler=a("react.profiler"),i=a("react.provider"),u=a("react.context"),s=a("react.forward_ref"),r.Suspense=a("react.suspense"),l=a("react.memo"),f=a("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function b(){}function _(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var k=_.prototype=new b;k.constructor=_,o(k,h.prototype),k.isPureReactComponent=!0;var v={current:null},g=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var o,c={},i=null,u=null;if(null!=r)for(o in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(i=""+r.key),r)g.call(r,o)&&!j.hasOwnProperty(o)&&(c[o]=r[o]);var s=arguments.length-2;if(1===s)c.children=t;else if(1<s){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];c.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===c[o]&&(c[o]=s[o]);return{$$typeof:n,type:e,key:i,ref:u,props:c,_owner:v.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var x=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,t,o,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case c:s=!0}}if(s)return i=i(s=e),e=""===o?"."+S(s,0):o,Array.isArray(i)?(t="",null!=e&&(t=e.replace(x,"$&/")+"/"),R(i,r,t,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,r){return{$$typeof:n,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(x,"$&/")+"/")+e)),r.push(i)),1;if(s=0,o=""===o?".":o+":",Array.isArray(e))for(var l=0;l<e.length;l++){var f=o+S(u=e[l],l);s+=R(u,r,t,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),l=0;!(u=e.next()).done;)s+=R(u=u.value,r,t,f=o+S(u,l++),i);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return s}function C(e,r,t){if(null==e)return e;var o=[],n=0;return R(e,o,"","",(function(e){return r.call(t,e,n++)})),o}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(d(321));return e}var M={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:o};r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=_,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var c=o({},e.props),i=e.key,u=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,s=v.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in r)g.call(r,f)&&!j.hasOwnProperty(f)&&(c[f]=void 0===r[f]&&void 0!==l?l[f]:r[f])}var f=arguments.length-2;if(1===f)c.children=t;else if(1<f){l=Array(f);for(var a=0;a<f;a++)l[a]=arguments[a+2];c.children=l}return{$$typeof:n,type:e.type,key:i,ref:u,props:c,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>u,ah:()=>c});var o=t(667294);const n=o.createContext({});function c(e){const r=o.useContext(n);return o.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function u({components:e,children:r,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||i:c(e),o.createElement(n.Provider,{value:u},r)}}}]);