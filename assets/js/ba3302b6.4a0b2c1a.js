/*! For license information please see ba3302b6.4a0b2c1a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[893008],{835179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(824246),o=r(511151);const i={id:"plugin-cost-insights-common.changestatistic",title:"ChangeStatistic",description:"API reference for ChangeStatistic"},c=void 0,s={unversionedId:"reference/plugin-cost-insights-common.changestatistic",id:"reference/plugin-cost-insights-common.changestatistic",title:"ChangeStatistic",description:"API reference for ChangeStatistic",source:"@site/../docs/reference/plugin-cost-insights-common.changestatistic.md",sourceDirName:"reference",slug:"/reference/plugin-cost-insights-common.changestatistic",permalink:"/docs/reference/plugin-cost-insights-common.changestatistic",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-cost-insights-common.changestatistic.md",tags:[],version:"current",frontMatter:{id:"plugin-cost-insights-common.changestatistic",title:"ChangeStatistic",description:"API reference for ChangeStatistic"}},a={},u=[{value:"Properties",id:"properties",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cost-insights-common",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-cost-insights-common"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cost-insights-common.changestatistic",children:(0,n.jsx)(t.code,{children:"ChangeStatistic"})})]}),"\n",(0,n.jsx)(t.p,{children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export interface ChangeStatistic \n"})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cost-insights-common.changestatistic.amount",children:"amount"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"The actual USD change between time periods (can be negative if costs decreased)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cost-insights-common.changestatistic.ratio",children:"ratio?"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsxs)(t.td,{children:["(Optional)"," The ratio of change from one duration to another, expressed as: (newSum - oldSum) / oldSum If a ratio cannot be calculated - such as when a new or old sum is zero, the ratio can be omitted and where applicable, \u221e or -\u221e will display based on amount."]})]})]})]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,c,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var u in i=Object(arguments[a]))r.call(i,u)&&(s[u]=i[u]);if(t){c=t(i);for(var l=0;l<c.length;l++)n.call(i,c[l])&&(s[c[l]]=i[c[l]])}}return s}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:i,_owner:c.current}}t.jsx=u,t.jsxs=u},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,s=60110,a=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),c=f("react.provider"),s=f("react.context"),a=f("react.forward_ref"),t.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function g(){}function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var b=v.prototype=new g;b.constructor=v,n(b,m.prototype),b.isPureReactComponent=!0;var j={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,i={},c=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)_.call(t,n)&&!x.hasOwnProperty(n)&&(i[n]=t[n]);var a=arguments.length-2;if(1===a)i.children=r;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===i[n]&&(i[n]=a[n]);return{$$typeof:o,type:e,key:c,ref:s,props:i,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return c=c(a=e),e=""===n?"."+k(a,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),C(c,t,r,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(O,"$&/")+"/")+e)),t.push(c)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+k(s=e[u],u);a+=C(s,t,r,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)a+=C(s=s.value,t,r,l=n+k(s,u++),c);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function E(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:E,forEach:function(e,t,r){E(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},t.Component=m,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var i=n({},e.props),c=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=j.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)_.call(t,l)&&!x.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];i.children=u}return{$$typeof:o,type:e.type,key:c,ref:s,props:i,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>i});var n=r(667294);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||c:i(e),n.createElement(o.Provider,{value:s},t)}}}]);