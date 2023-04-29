/*! For license information please see 5517f5c1.758b298b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[837822],{326380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>u,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>f});var n=r(824246),o=r(511151);const c={id:"plugin-adr-common.adrdocument.entityref",title:"AdrDocument.entityRef",description:"API reference for AdrDocument.entityRef"},u=void 0,i={unversionedId:"reference/plugin-adr-common.adrdocument.entityref",id:"reference/plugin-adr-common.adrdocument.entityref",title:"AdrDocument.entityRef",description:"API reference for AdrDocument.entityRef",source:"@site/../docs/reference/plugin-adr-common.adrdocument.entityref.md",sourceDirName:"reference",slug:"/reference/plugin-adr-common.adrdocument.entityref",permalink:"/docs/reference/plugin-adr-common.adrdocument.entityref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-adr-common.adrdocument.entityref.md",tags:[],version:"current",frontMatter:{id:"plugin-adr-common.adrdocument.entityref",title:"AdrDocument.entityRef",description:"API reference for AdrDocument.entityRef"}},a={},f=[];function s(e){const t=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-adr-common",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-adr-common"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-adr-common.adrdocument",children:(0,n.jsx)(t.code,{children:"AdrDocument"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-adr-common.adrdocument.entityref",children:(0,n.jsx)(t.code,{children:"entityRef"})})]}),"\n",(0,n.jsx)(t.p,{children:"Ref of the entity associated with this ADR"}),"\n",(0,n.jsx)(t.p,{children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"entityRef: string;\n"})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,u,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var f in c=Object(arguments[a]))r.call(c,f)&&(i[f]=c[f]);if(t){u=t(c);for(var s=0;s<u.length;s++)n.call(c,u[s])&&(i[u[s]]=c[u[s]])}}return i}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),t.Fragment=c("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,r){var n,c={},f=null,s=null;for(n in void 0!==r&&(f=""+r),void 0!==t.key&&(f=""+t.key),void 0!==t.ref&&(s=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:f,ref:s,props:c,_owner:u.current}}t.jsx=f,t.jsxs=f},541535:(e,t,r)=>{var n=r(862525),o=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,i=60110,a=60112;t.Suspense=60113;var f=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),u=l("react.provider"),i=l("react.context"),a=l("react.forward_ref"),t.Suspense=l("react.suspense"),f=l("react.memo"),s=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function v(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var _=g.prototype=new v;_.constructor=g,n(_,h.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,c={},u=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)j.call(t,n)&&!w.hasOwnProperty(n)&&(c[n]=t[n]);var a=arguments.length-2;if(1===a)c.children=r;else if(1<a){for(var f=Array(a),s=0;s<a;s++)f[s]=arguments[s+2];c.children=f}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===c[n]&&(c[n]=a[n]);return{$$typeof:o,type:e,key:u,ref:i,props:c,_owner:b.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,n,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case c:a=!0}}if(a)return u=u(a=e),e=""===n?"."+S(a,0):n,Array.isArray(u)?(r="",null!=e&&(r=e.replace(R,"$&/")+"/"),x(u,t,r,"",(function(e){return e}))):null!=u&&(k(u)&&(u=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,r+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(R,"$&/")+"/")+e)),t.push(u)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var s=n+S(i=e[f],f);a+=x(i,t,r,s,u)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),f=0;!(i=e.next()).done;)a+=x(i=i.value,t,r,s=n+S(i,f++),u);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function C(e,t,r){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(d(321));return e}var A={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(d(143));return e}},t.Component=h,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var c=n({},e.props),u=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=b.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(s in t)j.call(t,s)&&!w.hasOwnProperty(s)&&(c[s]=void 0===t[s]&&void 0!==f?f[s]:t[s])}var s=arguments.length-2;if(1===s)c.children=r;else if(1<s){f=Array(s);for(var l=0;l<s;l++)f[l]=arguments[l+2];c.children=f}return{$$typeof:o,type:e.type,key:u,ref:i,props:c,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return $().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,r){return $().useReducer(e,t,r)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>c});var n=r(667294);const o=n.createContext({});function c(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const u={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||u:c(e),n.createElement(o.Provider,{value:i},t)}}}]);