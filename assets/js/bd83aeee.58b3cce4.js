/*! For license information please see bd83aeee.58b3cce4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[33889],{940649:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=r(824246),o=r(511151);const s={id:"release-manifests.getmanifestbyreleaselineoptions",title:"GetManifestByReleaseLineOptions",description:"API reference for GetManifestByReleaseLineOptions"},i=void 0,a={unversionedId:"reference/release-manifests.getmanifestbyreleaselineoptions",id:"reference/release-manifests.getmanifestbyreleaselineoptions",title:"GetManifestByReleaseLineOptions",description:"API reference for GetManifestByReleaseLineOptions",source:"@site/../docs/reference/release-manifests.getmanifestbyreleaselineoptions.md",sourceDirName:"reference",slug:"/reference/release-manifests.getmanifestbyreleaselineoptions",permalink:"/docs/reference/release-manifests.getmanifestbyreleaselineoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/release-manifests.getmanifestbyreleaselineoptions.md",tags:[],version:"current",frontMatter:{id:"release-manifests.getmanifestbyreleaselineoptions",title:"GetManifestByReleaseLineOptions",description:"API reference for GetManifestByReleaseLineOptions"}},c={},u=[];function f(e){const t=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/release-manifests",children:(0,n.jsx)(t.code,{children:"@backstage/release-manifests"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/release-manifests.getmanifestbyreleaselineoptions",children:(0,n.jsx)(t.code,{children:"GetManifestByReleaseLineOptions"})})]}),"\n",(0,n.jsxs)(t.p,{children:["Options for ",(0,n.jsx)(t.a,{href:"/docs/reference/release-manifests.getmanifestbyreleaseline",children:"getManifestByReleaseLine()"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type GetManifestByReleaseLineOptions = {\n    releaseLine: string;\n};\n"})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var s,i,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in s=Object(arguments[c]))r.call(s,u)&&(a[u]=s[u]);if(t){i=t(s);for(var f=0;f<i.length;f++)n.call(s,i[f])&&(a[i[f]]=s[i[f]])}}return a}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),t.Fragment=s("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,s={},u=null,f=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(f=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:f,props:s,_owner:i.current}}t.jsx=u,t.jsxs=u},541535:(e,t,r)=>{var n=r(862525),o=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,a=60110,c=60112;t.Suspense=60113;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),s=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),i=l("react.provider"),a=l("react.context"),c=l("react.forward_ref"),t.Suspense=l("react.suspense"),u=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function v(){}function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var g=b.prototype=new v;g.constructor=b,n(g,h.prototype),g.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,s={},i=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,n)&&!O.hasOwnProperty(n)&&(s[n]=t[n]);var c=arguments.length-2;if(1===c)s.children=r;else if(1<c){for(var u=Array(c),f=0;f<c;f++)u[f]=arguments[f+2];s.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===s[n]&&(s[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:a,props:s,_owner:_.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,n,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case s:c=!0}}if(c)return i=i(c=e),e=""===n?"."+S(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(R,"$&/")+"/"),x(i,t,r,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=n+S(a=e[u],u);c+=x(a,t,r,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(a=e.next()).done;)c+=x(a=a.value,t,r,f=n+S(a,u++),i);else if("object"===a)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function C(e,t,r){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(y(321));return e}var L={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(y(143));return e}},t.Component=h,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var s=n({},e.props),i=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(f in t)j.call(t,f)&&!O.hasOwnProperty(f)&&(s[f]=void 0===t[f]&&void 0!==u?u[f]:t[f])}var f=arguments.length-2;if(1===f)s.children=r;else if(1<f){u=Array(f);for(var l=0;l<f;l++)u[l]=arguments[l+2];s.children=u}return{$$typeof:o,type:e.type,key:i,ref:a,props:s,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return $().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,r){return $().useReducer(e,t,r)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>a,ah:()=>s});var n=r(667294);const o=n.createContext({});function s(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function a({components:e,children:t,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||i:s(e),n.createElement(o.Provider,{value:a},t)}}}]);