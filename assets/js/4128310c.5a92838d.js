/*! For license information please see 4128310c.5a92838d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[986776],{540727:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var n=t(824246),o=t(511151);const a={id:"plugin-kubernetes-common.clusterattributes.dashboardapp",title:"ClusterAttributes.dashboardApp",description:"API reference for ClusterAttributes.dashboardApp"},s=void 0,u={unversionedId:"reference/plugin-kubernetes-common.clusterattributes.dashboardapp",id:"reference/plugin-kubernetes-common.clusterattributes.dashboardapp",title:"ClusterAttributes.dashboardApp",description:"API reference for ClusterAttributes.dashboardApp",source:"@site/../docs/reference/plugin-kubernetes-common.clusterattributes.dashboardapp.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-common.clusterattributes.dashboardapp",permalink:"/docs/reference/plugin-kubernetes-common.clusterattributes.dashboardapp",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-common.clusterattributes.dashboardapp.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-common.clusterattributes.dashboardapp",title:"ClusterAttributes.dashboardApp",description:"API reference for ClusterAttributes.dashboardApp"}},c={},i=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-common",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-kubernetes-common"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-common.clusterattributes",children:(0,n.jsx)(r.code,{children:"ClusterAttributes"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-common.clusterattributes.dashboardapp",children:(0,n.jsx)(r.code,{children:"dashboardApp"})})]}),"\n",(0,n.jsx)(r.p,{children:"Specifies the app that provides the Kubernetes dashboard. This will be used for formatting links to kubernetes objects inside the dashboard."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.b,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"dashboardApp?: string;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"The supported dashboards are: standard, rancher, openshift, gke, aks, eks Note that it will default to the regular dashboard provided by the Kubernetes project (standard). Note that you can add your own formatter by registering it to the clusterLinksFormatters dictionary."}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import { clusterLinksFormatters } from '@backstage/plugin-kubernetes';\nclusterLinksFormatters.myDashboard = (options) => ...;\n"})})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,s,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var i in a=Object(arguments[c]))t.call(a,i)&&(u[i]=a[i]);if(r){s=r(a);for(var l=0;l<s.length;l++)n.call(a,s[l])&&(u[s[l]]=a[s[l]])}}return u}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),r.Fragment=a("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,a={},i=null,l=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)u.call(r,n)&&!c.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:s.current}}r.jsx=i,r.jsxs=i},541535:(e,r,t)=>{var n=t(862525),o=60103,a=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var s=60109,u=60110,c=60112;r.Suspense=60113;var i=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),s=f("react.provider"),u=f("react.context"),c=f("react.forward_ref"),r.Suspense=f("react.suspense"),i=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function y(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||h}function m(){}function v(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var g=v.prototype=new m;g.constructor=v,n(g,y.prototype),g.isPureReactComponent=!0;var k={current:null},_=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,t){var n,a={},s=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(s=""+r.key),r)_.call(r,n)&&!j.hasOwnProperty(n)&&(a[n]=r[n]);var c=arguments.length-2;if(1===c)a.children=t;else if(1<c){for(var i=Array(c),l=0;l<c;l++)i[l]=arguments[l+2];a.children=i}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:s,ref:u,props:a,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,s){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return s=s(c=e),e=""===n?"."+C(c,0):n,Array.isArray(s)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),S(s,r,t,"",(function(e){return e}))):null!=s&&(w(s)&&(s=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,t+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+e)),r.push(s)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=n+C(u=e[i],i);c+=S(u,r,t,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(u=e.next()).done;)c+=S(u=u.value,r,t,l=n+C(u,i++),s);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function E(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function A(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:E,forEach:function(e,r,t){E(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return E(e,(function(){r++})),r},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},r.Component=y,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var a=n({},e.props),s=e.key,u=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,c=k.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in r)_.call(r,l)&&!j.hasOwnProperty(l)&&(a[l]=void 0===r[l]&&void 0!==i?i[l]:r[l])}var l=arguments.length-2;if(1===l)a.children=t;else if(1<l){i=Array(l);for(var f=0;f<l;f++)i[f]=arguments[f+2];a.children=i}return{$$typeof:o,type:e.type,key:s,ref:u,props:a,_owner:c}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:A}},r.memo=function(e,r){return{$$typeof:i,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return R().useCallback(e,r)},r.useContext=function(e,r){return R().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return R().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return R().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return R().useLayoutEffect(e,r)},r.useMemo=function(e,r){return R().useMemo(e,r)},r.useReducer=function(e,r,t){return R().useReducer(e,r,t)},r.useRef=function(e){return R().useRef(e)},r.useState=function(e){return R().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>u,ah:()=>a});var n=t(667294);const o=n.createContext({});function a(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function u({components:e,children:r,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||s:a(e),n.createElement(o.Provider,{value:u},r)}}}]);