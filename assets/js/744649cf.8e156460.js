/*! For license information please see 744649cf.8e156460.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[833575],{518607:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var t=n(824246),o=n(511151);const s={id:"errors.responseerror",title:"ResponseError",description:"API reference for ResponseError"},c=void 0,i={unversionedId:"reference/errors.responseerror",id:"reference/errors.responseerror",title:"ResponseError",description:"API reference for ResponseError",source:"@site/../docs/reference/errors.responseerror.md",sourceDirName:"reference",slug:"/reference/errors.responseerror",permalink:"/docs/reference/errors.responseerror",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/errors.responseerror.md",tags:[],version:"current",frontMatter:{id:"errors.responseerror",title:"ResponseError",description:"API reference for ResponseError"}},a={},u=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/errors",children:(0,t.jsx)(r.code,{children:"@backstage/errors"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/errors.responseerror",children:(0,t.jsx)(r.code,{children:"ResponseError"})})]}),"\n",(0,t.jsx)(r.p,{children:"An error thrown as the result of a failed server request."}),"\n",(0,t.jsx)(r.p,{children:"The server is expected to respond on the ErrorResponseBody format."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.b,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class ResponseError extends Error \n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.b,{children:"Extends:"})," Error"]}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/errors.responseerror.body",children:"body"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"readonly"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/errors.errorresponsebody",children:"ErrorResponseBody"})}),(0,t.jsx)(r.td,{children:"The parsed JSON error body, as sent by the server."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/errors.responseerror.cause",children:"cause"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"readonly"})}),(0,t.jsx)(r.td,{children:"Error"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:"The Error cause, as seen by the remote server. This is parsed out of the JSON error body."}),(0,t.jsx)(r.p,{children:"This error always has the plain Error constructor, however all serializable enumerable fields on the remote error including its name are preserved. Therefore, if you want to check the error type, use its name property rather than checking typeof or its constructor or prototype."})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/errors.responseerror.response",children:"response"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"readonly"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/errors.consumedresponse",children:"ConsumedResponse"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:"The actual response, as seen by the client."}),(0,t.jsxs)(r.p,{children:["Note that the body of this response is always consumed. Its parsed form is in the ",(0,t.jsx)(r.code,{children:"body"})," field."]})]})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Method"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/errors.responseerror.fromresponse",children:"fromResponse(response)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"static"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:"Constructs a ResponseError based on a failed response."}),(0,t.jsx)(r.p,{children:"Assumes that the response has already been checked to be not ok. This function consumes the body of the response, and assumes that it hasn't been consumed before."})]})]})})]})]})}const d=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var s,c,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var u in s=Object(arguments[a]))n.call(s,u)&&(i[u]=s[u]);if(r){c=r(s);for(var l=0;l<c.length;l++)t.call(s,c[l])&&(i[c[l]]=s[c[l]])}}return i}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),r.Fragment=s("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var t,s={},u=null,l=null;for(t in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,t)&&!a.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:u,ref:l,props:s,_owner:c.current}}r.jsx=u,r.jsxs=u},541535:(e,r,n)=>{var t=n(862525),o=60103,s=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,i=60110,a=60112;r.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),s=d("react.portal"),r.Fragment=d("react.fragment"),r.StrictMode=d("react.strict_mode"),r.Profiler=d("react.profiler"),c=d("react.provider"),i=d("react.context"),a=d("react.forward_ref"),r.Suspense=d("react.suspense"),u=d("react.memo"),l=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function j(e,r,n){this.props=e,this.context=r,this.refs=y,this.updater=n||h}function x(){}function b(e,r,n){this.props=e,this.context=r,this.refs=y,this.updater=n||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,r,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=j.prototype;var m=b.prototype=new x;m.constructor=b,t(m,j.prototype),m.isPureReactComponent=!0;var v={current:null},_=Object.prototype.hasOwnProperty,g={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,n){var t,s={},c=null,i=null;if(null!=r)for(t in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)_.call(r,t)&&!g.hasOwnProperty(t)&&(s[t]=r[t]);var a=arguments.length-2;if(1===a)s.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];s.children=u}if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===s[t]&&(s[t]=a[t]);return{$$typeof:o,type:e,key:c,ref:i,props:s,_owner:v.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function O(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,n,t,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case s:a=!0}}if(a)return c=c(a=e),e=""===t?"."+O(a,0):t,Array.isArray(c)?(n="",null!=e&&(n=e.replace(k,"$&/")+"/"),R(c,r,n,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(k,"$&/")+"/")+e)),r.push(c)),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=t+O(i=e[u],u);a+=R(i,r,n,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)a+=R(i=i.value,r,n,l=t+O(i,u++),c);else if("object"===i)throw r=""+e,Error(p(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function S(e,r,n){if(null==e)return e;var t=[],o=0;return R(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(p(321));return e}var T={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:S,forEach:function(e,r,n){S(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return S(e,(function(){r++})),r},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(p(143));return e}},r.Component=j,r.PureComponent=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error(p(267,e));var s=t({},e.props),c=e.key,i=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,a=v.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in r)_.call(r,l)&&!g.hasOwnProperty(l)&&(s[l]=void 0===r[l]&&void 0!==u?u[l]:r[l])}var l=arguments.length-2;if(1===l)s.children=n;else if(1<l){u=Array(l);for(var d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}return{$$typeof:o,type:e.type,key:c,ref:i,props:s,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:u,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return $().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,n){return $().useReducer(e,r,n)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>i,ah:()=>s});var t=n(667294);const o=t.createContext({});function s(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function i({components:e,children:r,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:s(e),t.createElement(o.Provider,{value:i},r)}}}]);