/*! For license information please see 18c86ab3.9d103533.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[9128],{63730:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>f,toc:()=>i});var n=t(824246),o=t(511151);const c={id:"plugin-scaffolder.scaffolderpage",title:"ScaffolderPage",description:"API reference for ScaffolderPage"},a=void 0,f={unversionedId:"reference/plugin-scaffolder.scaffolderpage",id:"reference/plugin-scaffolder.scaffolderpage",title:"ScaffolderPage",description:"API reference for ScaffolderPage",source:"@site/../docs/reference/plugin-scaffolder.scaffolderpage.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder.scaffolderpage",permalink:"/docs/reference/plugin-scaffolder.scaffolderpage",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder.scaffolderpage.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder.scaffolderpage",title:"ScaffolderPage",description:"API reference for ScaffolderPage"}},u={},i=[];function s(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-scaffolder"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder.scaffolderpage",children:(0,n.jsx)(r.code,{children:"ScaffolderPage"})})]}),"\n",(0,n.jsx)(r.p,{children:"The Router and main entrypoint to the Scaffolder plugin."}),"\n",(0,n.jsx)(r.p,{children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:'ScaffolderPage: (props: import("./components/Router").RouterProps) => JSX.Element\n'})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,a,f=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var i in c=Object(arguments[u]))t.call(c,i)&&(f[i]=c[i]);if(r){a=r(c);for(var s=0;s<a.length;s++)n.call(c,a[s])&&(f[a[s]]=c[a[s]])}}return f}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,c={},i=null,s=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(s=r.ref),r)f.call(r,n)&&!u.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:s,props:c,_owner:a.current}}r.jsx=i,r.jsxs=i},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var a=60109,f=60110,u=60112;r.Suspense=60113;var i=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),a=l("react.provider"),f=l("react.context"),u=l("react.forward_ref"),r.Suspense=l("react.suspense"),i=l("react.memo"),s=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function m(){}function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var _=v.prototype=new m;_.constructor=v,n(_,g.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function O(e,r,t){var n,c={},a=null,f=null;if(null!=r)for(n in void 0!==r.ref&&(f=r.ref),void 0!==r.key&&(a=""+r.key),r)j.call(r,n)&&!S.hasOwnProperty(n)&&(c[n]=r[n]);var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){for(var i=Array(u),s=0;s<u;s++)i[s]=arguments[s+2];c.children=i}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===c[n]&&(c[n]=u[n]);return{$$typeof:o,type:e,key:a,ref:f,props:c,_owner:b.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function P(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function E(e,r,t,n,a){var f=typeof e;"undefined"!==f&&"boolean"!==f||(e=null);var u=!1;if(null===e)u=!0;else switch(f){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case c:u=!0}}if(u)return a=a(u=e),e=""===n?"."+P(u,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(w,"$&/")+"/"),E(a,r,t,"",(function(e){return e}))):null!=a&&(k(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(w,"$&/")+"/")+e)),r.push(a)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var s=n+P(f=e[i],i);u+=E(f,r,t,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),i=0;!(f=e.next()).done;)u+=E(f=f.value,r,t,s=n+P(f,i++),a);else if("object"===f)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function x(e,r,t){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:x,forEach:function(e,r,t){x(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return x(e,(function(){r++})),r},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(d(143));return e}},r.Component=g,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var c=n({},e.props),a=e.key,f=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(f=r.ref,u=b.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in r)j.call(r,s)&&!S.hasOwnProperty(s)&&(c[s]=void 0===r[s]&&void 0!==i?i[s]:r[s])}var s=arguments.length-2;if(1===s)c.children=t;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];c.children=i}return{$$typeof:o,type:e.type,key:a,ref:f,props:c,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:f,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=O,r.createFactory=function(e){var r=O.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=k,r.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:i,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>f,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const a={};function f({components:e,children:r,disableParentContext:t}){let f;return f=t?"function"==typeof e?e({}):e||a:c(e),n.createElement(o.Provider,{value:f},r)}}}]);