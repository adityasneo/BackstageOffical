/*! For license information please see 7dce2c86.6d7a23ce.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[381053],{280629:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var n=t(824246),o=t(511151);const c={id:"core-plugin-api.appcomponents",title:"AppComponents",description:"API reference for AppComponents"},a=void 0,u={unversionedId:"reference/core-plugin-api.appcomponents",id:"reference/core-plugin-api.appcomponents",title:"AppComponents",description:"API reference for AppComponents",source:"@site/../docs/reference/core-plugin-api.appcomponents.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.appcomponents",permalink:"/docs/reference/core-plugin-api.appcomponents",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.appcomponents.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.appcomponents",title:"AppComponents",description:"API reference for AppComponents"}},i={},p=[];function s(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.appcomponents",children:(0,n.jsx)(r.code,{children:"AppComponents"})})]}),"\n",(0,n.jsx)(r.p,{children:"A set of replaceable core components that are part of every Backstage app."}),"\n",(0,n.jsx)(r.p,{children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type AppComponents = {\n    NotFoundErrorPage: ComponentType<{}>;\n    BootErrorPage: ComponentType<BootErrorPageProps>;\n    Progress: ComponentType<{}>;\n    Router: ComponentType<{\n        basename?: string;\n    }>;\n    ErrorBoundaryFallback: ComponentType<ErrorBoundaryFallbackProps>;\n    ThemeProvider?: ComponentType<{}>;\n    SignInPage?: ComponentType<SignInPageProps>;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:["References:"," ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.booterrorpageprops",children:"BootErrorPageProps"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.errorboundaryfallbackprops",children:"ErrorBoundaryFallbackProps"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.signinpageprops",children:"SignInPageProps"})]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,a,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var p in c=Object(arguments[i]))t.call(c,p)&&(u[p]=c[p]);if(r){a=r(c);for(var s=0;s<a.length;s++)n.call(c,a[s])&&(u[a[s]]=c[a[s]])}}return u}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,c={},p=null,s=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(s=r.ref),r)u.call(r,n)&&!i.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:p,ref:s,props:c,_owner:a.current}}r.jsx=p,r.jsxs=p},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var a=60109,u=60110,i=60112;r.Suspense=60113;var p=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),a=f("react.provider"),u=f("react.context"),i=f("react.forward_ref"),r.Suspense=f("react.suspense"),p=f("react.memo"),s=f("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function g(){}function v(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var b=v.prototype=new g;b.constructor=v,n(b,h.prototype),b.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,t){var n,c={},a=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(a=""+r.key),r)j.call(r,n)&&!C.hasOwnProperty(n)&&(c[n]=r[n]);var i=arguments.length-2;if(1===i)c.children=t;else if(1<i){for(var p=Array(i),s=0;s<i;s++)p[s]=arguments[s+2];c.children=p}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===c[n]&&(c[n]=i[n]);return{$$typeof:o,type:e,key:a,ref:u,props:c,_owner:_.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function E(e,r,t,n,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case c:i=!0}}if(i)return a=a(i=e),e=""===n?"."+w(i,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),E(a,r,t,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),r.push(a)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var s=n+w(u=e[p],p);i+=E(u,r,t,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),p=0;!(u=e.next()).done;)i+=E(u=u.value,r,t,s=n+w(u,p++),a);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function S(e,r,t){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function x(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var A={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:S,forEach:function(e,r,t){S(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return S(e,(function(){r++})),r},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var c=n({},e.props),a=e.key,u=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=_.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(s in r)j.call(r,s)&&!C.hasOwnProperty(s)&&(c[s]=void 0===r[s]&&void 0!==p?p[s]:r[s])}var s=arguments.length-2;if(1===s)c.children=t;else if(1<s){p=Array(s);for(var f=0;f<s;f++)p[f]=arguments[f+2];c.children=p}return{$$typeof:o,type:e.type,key:a,ref:u,props:c,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=P,r.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:x}},r.memo=function(e,r){return{$$typeof:p,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>u,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const a={};function u({components:e,children:r,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||a:c(e),n.createElement(o.Provider,{value:u},r)}}}]);