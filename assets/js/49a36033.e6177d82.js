/*! For license information please see 49a36033.e6177d82.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[842402],{879879:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(824246),c=r(511151);const o={id:"plugin-search-backend-node.lunrsearchengine",title:"LunrSearchEngine",description:"API reference for LunrSearchEngine"},s=void 0,i={unversionedId:"reference/plugin-search-backend-node.lunrsearchengine",id:"reference/plugin-search-backend-node.lunrsearchengine",title:"LunrSearchEngine",description:"API reference for LunrSearchEngine",source:"@site/../docs/reference/plugin-search-backend-node.lunrsearchengine.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.lunrsearchengine",permalink:"/docs/reference/plugin-search-backend-node.lunrsearchengine",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-node.lunrsearchengine.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-node.lunrsearchengine",title:"LunrSearchEngine",description:"API reference for LunrSearchEngine"}},a={},l=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine",children:(0,t.jsx)(n.code,{children:"LunrSearchEngine"})})]}),"\n",(0,t.jsx)(n.p,{children:"Lunr specific search engine implementation."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.b,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class LunrSearchEngine implements SearchEngine \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.b,{children:"Implements:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-common.searchengine",children:"SearchEngine"})]}),"\n",(0,t.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constructor"}),(0,t.jsx)(n.th,{children:"Modifiers"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine._constructor_",children:"(constructor)(options)"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Constructs a new instance of the ",(0,t.jsx)(n.code,{children:"LunrSearchEngine"})," class"]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Modifiers"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.docstore",children:"docStore"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"protected"})}),(0,t.jsxs)(n.td,{children:["Record<string, ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-common.indexabledocument",children:"IndexableDocument"}),">"]}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.highlightposttag",children:"highlightPostTag"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"protected"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.highlightpretag",children:"highlightPreTag"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"protected"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.logger",children:"logger"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"protected"})}),(0,t.jsx)(n.td,{children:"Logger"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.lunrindices",children:"lunrIndices"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"protected"})}),(0,t.jsx)(n.td,{children:"Record<string, lunr.Index>"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.translator",children:"translator"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"protected"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-common.querytranslator",children:"QueryTranslator"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Modifiers"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.getindexer",children:"getIndexer(type)"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.query",children:"query(query)"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.settranslator",children:"setTranslator(translator)"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]})]})]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(c){return!1}}()?Object.assign:function(e,c){for(var o,s,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in o=Object(arguments[a]))r.call(o,l)&&(i[l]=o[l]);if(n){s=n(o);for(var d=0;d<s.length;d++)t.call(o,s[d])&&(i[s[d]]=o[s[d]])}}return i}},371426:(e,n,r)=>{r(862525);var t=r(827378),c=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;c=o("react.element"),n.Fragment=o("react.fragment")}var s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,o={},l=null,d=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,t)&&!a.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:c,type:e,key:l,ref:d,props:o,_owner:s.current}}n.jsx=l,n.jsxs=l},541535:(e,n,r)=>{var t=r(862525),c=60103,o=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var s=60109,i=60110,a=60112;n.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;c=u("react.element"),o=u("react.portal"),n.Fragment=u("react.fragment"),n.StrictMode=u("react.strict_mode"),n.Profiler=u("react.profiler"),s=u("react.provider"),i=u("react.context"),a=u("react.forward_ref"),n.Suspense=u("react.suspense"),l=u("react.memo"),d=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||p}function x(){}function y(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=g.prototype;var b=y.prototype=new x;b.constructor=y,t(b,g.prototype),b.isPureReactComponent=!0;var m={current:null},v=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,r){var t,o={},s=null,i=null;if(null!=n)for(t in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(s=""+n.key),n)v.call(n,t)&&!_.hasOwnProperty(t)&&(o[t]=n[t]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];o.children=l}if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===o[t]&&(o[t]=a[t]);return{$$typeof:c,type:e,key:s,ref:i,props:o,_owner:m.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var E=/\/+/g;function w(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function O(e,n,r,t,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case c:case o:a=!0}}if(a)return s=s(a=e),e=""===t?"."+w(a,0):t,Array.isArray(s)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),O(s,n,r,"",(function(e){return e}))):null!=s&&(S(s)&&(s=function(e,n){return{$$typeof:c,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),n.push(s)),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=t+w(i=e[l],l);a+=O(i,n,r,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(i=e.next()).done;)a+=O(i=i.value,n,r,d=t+w(i,l++),s);else if("object"===i)throw n=""+e,Error(f(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return a}function C(e,n,r){if(null==e)return e;var t=[],c=0;return O(e,t,"","",(function(e){return n.call(r,e,c++)})),t}function P(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(f(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:m,IsSomeRendererActing:{current:!1},assign:t};n.Children={map:C,forEach:function(e,n,r){C(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(f(143));return e}},n.Component=g,n.PureComponent=y,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.cloneElement=function(e,n,r){if(null==e)throw Error(f(267,e));var o=t({},e.props),s=e.key,i=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,a=m.current),void 0!==n.key&&(s=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in n)v.call(n,d)&&!_.hasOwnProperty(d)&&(o[d]=void 0===n[d]&&void 0!==l?l[d]:n[d])}var d=arguments.length-2;if(1===d)o.children=r;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];o.children=l}return{$$typeof:c,type:e.type,key:s,ref:i,props:o,_owner:a}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:i,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=S,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return $().useCallback(e,n)},n.useContext=function(e,n){return $().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return $().useEffect(e,n)},n.useImperativeHandle=function(e,n,r){return $().useImperativeHandle(e,n,r)},n.useLayoutEffect=function(e,n){return $().useLayoutEffect(e,n)},n.useMemo=function(e,n){return $().useMemo(e,n)},n.useReducer=function(e,n,r){return $().useReducer(e,n,r)},n.useRef=function(e){return $().useRef(e)},n.useState=function(e){return $().useState(e)},n.version="17.0.2"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>o});var t=r(667294);const c=t.createContext({});function o(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||s:o(e),t.createElement(c.Provider,{value:i},n)}}}]);