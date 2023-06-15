/*! For license information please see c8924404.1e35a9fa.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[385781],{505824:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>u,metadata:()=>a,toc:()=>s});var n=t(824246),o=t(511151);const u={id:"plugin-azure-devops.azuredevopsplugin",title:"azureDevOpsPlugin",description:"API reference for azureDevOpsPlugin"},i=void 0,a={unversionedId:"reference/plugin-azure-devops.azuredevopsplugin",id:"reference/plugin-azure-devops.azuredevopsplugin",title:"azureDevOpsPlugin",description:"API reference for azureDevOpsPlugin",source:"@site/../docs/reference/plugin-azure-devops.azuredevopsplugin.md",sourceDirName:"reference",slug:"/reference/plugin-azure-devops.azuredevopsplugin",permalink:"/docs/reference/plugin-azure-devops.azuredevopsplugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-azure-devops.azuredevopsplugin.md",tags:[],version:"current",frontMatter:{id:"plugin-azure-devops.azuredevopsplugin",title:"azureDevOpsPlugin",description:"API reference for azureDevOpsPlugin"}},c={},s=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-azure-devops",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-azure-devops"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-azure-devops.azuredevopsplugin",children:(0,n.jsx)(r.code,{children:"azureDevOpsPlugin"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.b,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:'azureDevOpsPlugin: import("@backstage/core-plugin-api").BackstagePlugin<{}, {}, {}>\n'})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var u,i,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var s in u=Object(arguments[c]))t.call(u,s)&&(a[s]=u[s]);if(r){i=r(u);for(var f=0;f<i.length;f++)n.call(u,i[f])&&(a[i[f]]=u[i[f]])}}return a}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),r.Fragment=u("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,u={},s=null,f=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,n)&&!c.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:f,props:u,_owner:i.current}}r.jsx=s,r.jsxs=s},541535:(e,r,t)=>{var n=t(862525),o=60103,u=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var i=60109,a=60110,c=60112;r.Suspense=60113;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),u=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),i=l("react.provider"),a=l("react.context"),c=l("react.forward_ref"),r.Suspense=l("react.suspense"),s=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function g(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||y}function h(){}function m(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=g.prototype;var _=m.prototype=new h;_.constructor=m,n(_,g.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,t){var n,u={},i=null,a=null;if(null!=r)for(n in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(i=""+r.key),r)j.call(r,n)&&!O.hasOwnProperty(n)&&(u[n]=r[n]);var c=arguments.length-2;if(1===c)u.children=t;else if(1<c){for(var s=Array(c),f=0;f<c;f++)s[f]=arguments[f+2];u.children=s}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===u[n]&&(u[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:a,props:u,_owner:b.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function z(e,r,t,n,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case u:c=!0}}if(c)return i=i(c=e),e=""===n?"."+S(c,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(P,"$&/")+"/"),z(i,r,t,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),r.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=n+S(a=e[s],s);c+=z(a,r,t,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(a=e.next()).done;)c+=z(a=a.value,r,t,f=n+S(a,s++),i);else if("object"===a)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function x(e,r,t){if(null==e)return e;var n=[],o=0;return z(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(d(321));return e}var R={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:x,forEach:function(e,r,t){x(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return x(e,(function(){r++})),r},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},r.Component=g,r.PureComponent=m,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var u=n({},e.props),i=e.key,a=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,c=b.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in r)j.call(r,f)&&!O.hasOwnProperty(f)&&(u[f]=void 0===r[f]&&void 0!==s?s[f]:r[f])}var f=arguments.length-2;if(1===f)u.children=t;else if(1<f){s=Array(f);for(var l=0;l<f;l++)s[l]=arguments[l+2];u.children=s}return{$$typeof:o,type:e.type,key:i,ref:a,props:u,_owner:c}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:a,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>a,ah:()=>u});var n=t(667294);const o=n.createContext({});function u(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function a({components:e,children:r,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||i:u(e),n.createElement(o.Provider,{value:a},r)}}}]);