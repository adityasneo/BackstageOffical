/*! For license information please see 070b50d6.b762113c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[663828],{11561:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=t(824246),c=t(511151);const a={id:"plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",title:"ElasticSearchClientWrapper.bulk()",description:"API reference for ElasticSearchClientWrapper.bulk()"},o=void 0,i={unversionedId:"reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",id:"reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",title:"ElasticSearchClientWrapper.bulk()",description:"API reference for ElasticSearchClientWrapper.bulk()",source:"@site/../docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",permalink:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",title:"ElasticSearchClientWrapper.bulk()",description:"API reference for ElasticSearchClientWrapper.bulk()"}},s={},l=[{value:"Parameters",id:"parameters",level:2}];function u(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-search-backend-module-elasticsearch"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper",children:(0,n.jsx)(r.code,{children:"ElasticSearchClientWrapper"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",children:(0,n.jsx)(r.code,{children:"bulk"})})]}),"\n",(0,n.jsx)(r.p,{children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:'bulk(bulkOptions: {\n        datasource: Readable;\n        onDocument: () => ElasticSearchIndexAction;\n        refreshOnCompletion?: string | boolean;\n    }): import("@elastic/elasticsearch/lib/Helpers").BulkHelper<import("@elastic/elasticsearch/lib/Helpers").BulkStats>;\n'})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"bulkOptions"}),(0,n.jsxs)(r.td,{children:["{ datasource: Readable; onDocument: () => ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchindexaction",children:"ElasticSearchIndexAction"}),"; refreshOnCompletion?: string | boolean; }"]}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.p,{children:"Returns:"}),"\n",(0,n.jsx)(r.p,{children:'import("@elastic/elasticsearch/lib/Helpers").BulkHelper<import("@elastic/elasticsearch/lib/Helpers").BulkStats>'})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,c.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(c){return!1}}()?Object.assign:function(e,c){for(var a,o,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in a=Object(arguments[s]))t.call(a,l)&&(i[l]=a[l]);if(r){o=r(a);for(var u=0;u<o.length;u++)n.call(a,o[u])&&(i[o[u]]=a[o[u]])}}return i}},371426:(e,r,t)=>{t(862525);var n=t(827378),c=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;c=a("react.element"),r.Fragment=a("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,a={},l=null,u=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,n)&&!s.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:c,type:e,key:l,ref:u,props:a,_owner:o.current}}r.jsx=l,r.jsxs=l},541535:(e,r,t)=>{var n=t(862525),c=60103,a=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var o=60109,i=60110,s=60112;r.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;c=f("react.element"),a=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),o=f("react.provider"),i=f("react.context"),s=f("react.forward_ref"),r.Suspense=f("react.suspense"),l=f("react.memo"),u=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}function m(){}function k(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var v=k.prototype=new m;v.constructor=k,n(v,b.prototype),v.isPureReactComponent=!0;var g={current:null},j=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,t){var n,a={},o=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(o=""+r.key),r)j.call(r,n)&&!_.hasOwnProperty(n)&&(a[n]=r[n]);var s=arguments.length-2;if(1===s)a.children=t;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:c,type:e,key:o,ref:i,props:a,_owner:g.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var S=/\/+/g;function O(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,t,n,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case c:case a:s=!0}}if(s)return o=o(s=e),e=""===n?"."+O(s,0):n,Array.isArray(o)?(t="",null!=e&&(t=e.replace(S,"$&/")+"/"),C(o,r,t,"",(function(e){return e}))):null!=o&&(w(o)&&(o=function(e,r){return{$$typeof:c,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(o,t+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(S,"$&/")+"/")+e)),r.push(o)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=n+O(i=e[l],l);s+=C(i,r,t,u,o)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)s+=C(i=i.value,r,t,u=n+O(i,l++),o);else if("object"===i)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return s}function E(e,r,t){if(null==e)return e;var n=[],c=0;return C(e,n,"","",(function(e){return r.call(t,e,c++)})),n}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:E,forEach:function(e,r,t){E(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return E(e,(function(){r++})),r},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},r.Component=b,r.PureComponent=k,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var a=n({},e.props),o=e.key,i=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,s=g.current),void 0!==r.key&&(o=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in r)j.call(r,u)&&!_.hasOwnProperty(u)&&(a[u]=void 0===r[u]&&void 0!==l?l[u]:r[u])}var u=arguments.length-2;if(1===u)a.children=t;else if(1<u){l=Array(u);for(var f=0;f<u;f++)l[f]=arguments[f+2];a.children=l}return{$$typeof:c,type:e.type,key:o,ref:i,props:a,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>i,ah:()=>a});var n=t(667294);const c=n.createContext({});function a(e){const r=n.useContext(c);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const o={};function i({components:e,children:r,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||o:a(e),n.createElement(c.Provider,{value:i},r)}}}]);