/*! For license information please see 66a6c5d0.784d195c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[682012],{728485:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=t(824246),i=t(511151);const o={id:"plugin-pagerduty.pagerdutyapi.getincidentsbyserviceid",title:"PagerDutyApi.getIncidentsByServiceId()",description:"API reference for PagerDutyApi.getIncidentsByServiceId()"},c=void 0,u={unversionedId:"reference/plugin-pagerduty.pagerdutyapi.getincidentsbyserviceid",id:"reference/plugin-pagerduty.pagerdutyapi.getincidentsbyserviceid",title:"PagerDutyApi.getIncidentsByServiceId()",description:"API reference for PagerDutyApi.getIncidentsByServiceId()",source:"@site/../docs/reference/plugin-pagerduty.pagerdutyapi.getincidentsbyserviceid.md",sourceDirName:"reference",slug:"/reference/plugin-pagerduty.pagerdutyapi.getincidentsbyserviceid",permalink:"/docs/reference/plugin-pagerduty.pagerdutyapi.getincidentsbyserviceid",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-pagerduty.pagerdutyapi.getincidentsbyserviceid.md",tags:[],version:"current",frontMatter:{id:"plugin-pagerduty.pagerdutyapi.getincidentsbyserviceid",title:"PagerDutyApi.getIncidentsByServiceId()",description:"API reference for PagerDutyApi.getIncidentsByServiceId()"}},a={},s=[{value:"Parameters",id:"parameters",level:2}];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-pagerduty",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-pagerduty"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-pagerduty.pagerdutyapi",children:(0,n.jsx)(r.code,{children:"PagerDutyApi"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-pagerduty.pagerdutyapi.getincidentsbyserviceid",children:(0,n.jsx)(r.code,{children:"getIncidentsByServiceId"})})]}),"\n",(0,n.jsx)(r.p,{children:"Fetches a list of incidents a provided service has."}),"\n",(0,n.jsx)(r.p,{children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"getIncidentsByServiceId(serviceId: string): Promise<PagerDutyIncidentsResponse>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"serviceId"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.p,{children:"Returns:"}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-pagerduty.pagerdutyincidentsresponse",children:"PagerDutyIncidentsResponse"}),">"]})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,c,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var s in o=Object(arguments[a]))t.call(o,s)&&(u[s]=o[s]);if(r){c=r(o);for(var f=0;f<c.length;f++)n.call(o,c[f])&&(u[c[f]]=o[c[f]])}}return u}},371426:(e,r,t)=>{t(862525);var n=t(827378),i=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),r.Fragment=o("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,o={},s=null,f=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(f=r.ref),r)u.call(r,n)&&!a.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:i,type:e,key:s,ref:f,props:o,_owner:c.current}}r.jsx=s,r.jsxs=s},541535:(e,r,t)=>{var n=t(862525),i=60103,o=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,u=60110,a=60112;r.Suspense=60113;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;i=l("react.element"),o=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),c=l("react.provider"),u=l("react.context"),a=l("react.forward_ref"),r.Suspense=l("react.suspense"),s=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}function v(){}function m(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var b=m.prototype=new v;b.constructor=m,n(b,h.prototype),b.isPureReactComponent=!0;var j={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,t){var n,o={},c=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(c=""+r.key),r)_.call(r,n)&&!x.hasOwnProperty(n)&&(o[n]=r[n]);var a=arguments.length-2;if(1===a)o.children=t;else if(1<a){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+2];o.children=s}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:j.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var O=/\/+/g;function k(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function w(e,r,t,n,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var a=!1;if(null===e)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case o:a=!0}}if(a)return c=c(a=e),e=""===n?"."+k(a,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),w(c,r,t,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,r){return{$$typeof:i,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(O,"$&/")+"/")+e)),r.push(c)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=n+k(u=e[s],s);a+=w(u,r,t,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(u=e.next()).done;)a+=w(u=u.value,r,t,f=n+k(u,s++),c);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function I(e,r,t){if(null==e)return e;var n=[],i=0;return w(e,n,"","",(function(e){return r.call(t,e,i++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function R(){var e=E.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:I,forEach:function(e,r,t){I(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return I(e,(function(){r++})),r},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=m,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var o=n({},e.props),c=e.key,u=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,a=j.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in r)_.call(r,f)&&!x.hasOwnProperty(f)&&(o[f]=void 0===r[f]&&void 0!==s?s[f]:r[f])}var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){s=Array(f);for(var l=0;l<f;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:i,type:e.type,key:c,ref:u,props:o,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=S,r.createFactory=function(e){var r=S.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=P,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return R().useCallback(e,r)},r.useContext=function(e,r){return R().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return R().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return R().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return R().useLayoutEffect(e,r)},r.useMemo=function(e,r){return R().useMemo(e,r)},r.useReducer=function(e,r,t){return R().useReducer(e,r,t)},r.useRef=function(e){return R().useRef(e)},r.useState=function(e){return R().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>u,ah:()=>o});var n=t(667294);const i=n.createContext({});function o(e){const r=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function u({components:e,children:r,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||c:o(e),n.createElement(i.Provider,{value:u},r)}}}]);