/*! For license information please see f6839a70.15c6edb0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[907834],{175244:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(824246),i=r(511151);const o={id:"core-app-api.multipleanalyticsapi",title:"MultipleAnalyticsApi",description:"API reference for MultipleAnalyticsApi"},a=void 0,c={unversionedId:"reference/core-app-api.multipleanalyticsapi",id:"reference/core-app-api.multipleanalyticsapi",title:"MultipleAnalyticsApi",description:"API reference for MultipleAnalyticsApi",source:"@site/../docs/reference/core-app-api.multipleanalyticsapi.md",sourceDirName:"reference",slug:"/reference/core-app-api.multipleanalyticsapi",permalink:"/docs/reference/core-app-api.multipleanalyticsapi",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.multipleanalyticsapi.md",tags:[],version:"current",frontMatter:{id:"core-app-api.multipleanalyticsapi",title:"MultipleAnalyticsApi",description:"API reference for MultipleAnalyticsApi"}},s={},l=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}];function u(e){const t=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/core-app-api",children:(0,n.jsx)(t.code,{children:"@backstage/core-app-api"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/core-app-api.multipleanalyticsapi",children:(0,n.jsx)(t.code,{children:"MultipleAnalyticsApi"})})]}),"\n",(0,n.jsx)(t.p,{children:"An implementation of the AnalyticsApi that can be used to forward analytics events to multiple concrete implementations."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.b,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class MultipleAnalyticsApi implements AnalyticsApi \n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.b,{children:"Implements:"})," ",(0,n.jsx)(t.a,{href:"/docs/reference/core-plugin-api.analyticsapi",children:"AnalyticsApi"})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"createApiFactory({\n  api: analyticsApiRef,\n  deps: { configApi: configApiRef, identityApi: identityApiRef, storageApi: storageApiRef },\n  factory: ({ configApi, identityApi, storageApi }) =>\n    MultipleAnalyticsApi.fromApis([\n      VendorAnalyticsApi.fromConfig(configApi, { identityApi }),\n      CustomAnalyticsApi.fromConfig(configApi, { identityApi, storageApi }),\n    ]),\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/core-app-api.multipleanalyticsapi.captureevent",children:"captureEvent(event)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Forward the event to all configured analytics API implementations."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/core-app-api.multipleanalyticsapi.fromapis",children:"fromApis(actualApis)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"static"})}),(0,n.jsx)(t.td,{children:"Create an AnalyticsApi implementation from an array of concrete implementations."})]})]})]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in o=Object(arguments[s]))r.call(o,l)&&(c[l]=o[l]);if(t){a=t(o);for(var u=0;u<a.length;u++)n.call(o,a[u])&&(c[a[u]]=o[a[u]])}}return c}},371426:(e,t,r)=>{r(862525);var n=r(827378),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),t.Fragment=o("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,n)&&!s.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:u,props:o,_owner:a.current}}t.jsx=l,t.jsxs=l},541535:(e,t,r)=>{var n=r(862525),i=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,c=60110,s=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;i=p("react.element"),o=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),a=p("react.provider"),c=p("react.context"),s=p("react.forward_ref"),t.Suspense=p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function v(){}function j(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var b=j.prototype=new v;b.constructor=j,n(b,m.prototype),b.isPureReactComponent=!0;var g={current:null},A=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,o={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)A.call(t,n)&&!_.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:g.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var O=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case i:case o:s=!0}}if(s)return a=a(s=e),e=""===n?"."+k(s,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),C(a,t,r,"",(function(e){return e}))):null!=a&&(w(a)&&(a=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),t.push(a)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=n+k(c=e[l],l);s+=C(c,t,r,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(c=e.next()).done;)s+=C(c=c.value,t,r,u=n+k(c,l++),a);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function S(e,t,r){if(null==e)return e;var n=[],i=0;return C(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function P(){var e=R.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:S,forEach:function(e,t,r){S(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},t.Component=m,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var o=n({},e.props),a=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=g.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)A.call(t,u)&&!_.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){l=Array(u);for(var p=0;p<u;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:i,type:e.type,key:a,ref:c,props:o,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return P().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,r){return P().useReducer(e,t,r)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>o});var n=r(667294);const i=n.createContext({});function o(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||a:o(e),n.createElement(i.Provider,{value:c},t)}}}]);