/*! For license information please see 3251bf79.c57e884c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[535914],{979652:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=r(824246),i=r(511151);const c={id:"integration-react.scmauth",title:"ScmAuth",description:"API reference for ScmAuth"},s=void 0,o={unversionedId:"reference/integration-react.scmauth",id:"reference/integration-react.scmauth",title:"ScmAuth",description:"API reference for ScmAuth",source:"@site/../docs/reference/integration-react.scmauth.md",sourceDirName:"reference",slug:"/reference/integration-react.scmauth",permalink:"/docs/reference/integration-react.scmauth",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration-react.scmauth.md",tags:[],version:"current",frontMatter:{id:"integration-react.scmauth",title:"ScmAuth",description:"API reference for ScmAuth"}},a={},d=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}];function u(e){const t=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",div:"div"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration-react",children:(0,n.jsx)(t.code,{children:"@backstage/integration-react"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth",children:(0,n.jsx)(t.code,{children:"ScmAuth"})})]}),"\n",(0,n.jsx)(t.p,{children:"An implementation of the ScmAuthApi that merges together OAuthApi instances to form a single instance that can handles authentication for multiple providers."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.b,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class ScmAuth implements ScmAuthApi \n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.b,{children:"Implements:"})," ",(0,n.jsx)(t.a,{href:"/docs/reference/integration-react.scmauthapi",children:"ScmAuthApi"})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"// Supports authentication towards both public GitHub and GHE:\ncreateApiFactory({\n  api: scmAuthApiRef,\n  deps: {\n    gheAuthApi: gheAuthApiRef,\n    githubAuthApi: githubAuthApiRef,\n  },\n  factory: ({ githubAuthApi, gheAuthApi }) =>\n    ScmAuth.merge(\n      ScmAuth.forGithub(githubAuthApi),\n      ScmAuth.forGithub(gheAuthApi, {\n        host: 'ghe.example.com',\n      }),\n    )\n})\n"})}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.createdefaultapifactory",children:"createDefaultApiFactory()"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"static"})}),(0,n.jsx)(t.td,{children:"Creates an API factory that enables auth for each of the default SCM providers."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.forauthapi",children:"forAuthApi(authApi, options)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"static"})}),(0,n.jsx)(t.td,{children:"Creates a general purpose ScmAuth instance with a custom scope mapping."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.forazure",children:"forAzure(microsoftAuthApi, options)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"static"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Creates a new ScmAuth instance that handles authentication towards Azure."}),(0,n.jsxs)(t.p,{children:["The host option determines which URLs that are handled by this instance and defaults to ",(0,n.jsx)(t.code,{children:"dev.azure.com"}),"."]}),(0,n.jsx)(t.p,{children:"The default scopes are:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"vso.build vso.code vso.graph vso.project vso.profile"})}),(0,n.jsxs)(t.p,{children:["If the additional ",(0,n.jsx)(t.code,{children:"repoWrite"})," permission is requested, these scopes are added:"]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"vso.code_manage"})})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.forbitbucket",children:"forBitbucket(bitbucketAuthApi, options)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"static"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Creates a new ScmAuth instance that handles authentication towards Bitbucket."}),(0,n.jsxs)(t.p,{children:["The host option determines which URLs that are handled by this instance and defaults to ",(0,n.jsx)(t.code,{children:"bitbucket.org"}),"."]}),(0,n.jsx)(t.p,{children:"The default scopes are:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"account team pullrequest snippet issue"})}),(0,n.jsxs)(t.p,{children:["If the additional ",(0,n.jsx)(t.code,{children:"repoWrite"})," permission is requested, these scopes are added:"]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"pullrequest"})}),(0,n.jsx)(t.div,{}),(0,n.jsxs)(t.code,{children:[" snippet",(0,n.jsx)(t.div,{})," issue",(0,n.jsx)(t.div,{})]}),(0,n.jsx)(t.p,{})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.forgithub",children:"forGithub(githubAuthApi, options)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"static"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Creates a new ScmAuth instance that handles authentication towards GitHub."}),(0,n.jsxs)(t.p,{children:["The host option determines which URLs that are handled by this instance and defaults to ",(0,n.jsx)(t.code,{children:"github.com"}),"."]}),(0,n.jsx)(t.p,{children:"The default scopes are:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"repo read"})}),(0,n.jsx)(t.div,{}),(0,n.jsxs)(t.code,{children:[" read",(0,n.jsx)(t.div,{})]}),(0,n.jsx)(t.p,{}),(0,n.jsxs)(t.p,{children:["If the additional ",(0,n.jsx)(t.code,{children:"repoWrite"})," permission is requested, these scopes are added:"]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"gist"})})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.forgitlab",children:"forGitlab(gitlabAuthApi, options)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"static"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Creates a new ScmAuth instance that handles authentication towards GitLab."}),(0,n.jsxs)(t.p,{children:["The host option determines which URLs that are handled by this instance and defaults to ",(0,n.jsx)(t.code,{children:"gitlab.com"}),"."]}),(0,n.jsx)(t.p,{children:"The default scopes are:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"read_user read_api read_repository"})}),(0,n.jsxs)(t.p,{children:["If the additional ",(0,n.jsx)(t.code,{children:"repoWrite"})," permission is requested, these scopes are added:"]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"write_repository api"})})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.getcredentials",children:"getCredentials(options)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Fetches credentials for the given resource."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.isurlsupported",children:"isUrlSupported(url)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Checks whether the implementation is able to provide authentication for the given URL."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.merge",children:"merge(providers)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"static"})}),(0,n.jsx)(t.td,{children:"Merges together multiple ScmAuth instances into one that routes requests to the correct instance based on the URL."})]})]})]})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var c,s,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var d in c=Object(arguments[a]))r.call(c,d)&&(o[d]=c[d]);if(t){s=t(c);for(var u=0;u<s.length;u++)n.call(c,s[u])&&(o[s[u]]=c[s[u]])}}return o}},371426:(e,t,r)=>{r(862525);var n=r(827378),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;i=c("react.element"),t.Fragment=c("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,c={},d=null,u=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!a.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:i,type:e,key:d,ref:u,props:c,_owner:s.current}}t.jsx=d,t.jsxs=d},541535:(e,t,r)=>{var n=r(862525),i=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,o=60110,a=60112;t.Suspense=60113;var d=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;i=l("react.element"),c=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),s=l("react.provider"),o=l("react.context"),a=l("react.forward_ref"),t.Suspense=l("react.suspense"),d=l("react.memo"),u=l("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function x(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||p}function m(){}function y(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||p}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=x.prototype;var g=y.prototype=new m;g.constructor=y,n(g,x.prototype),g.isPureReactComponent=!0;var b={current:null},v=Object.prototype.hasOwnProperty,A={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n,c={},s=null,o=null;if(null!=t)for(n in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)v.call(t,n)&&!A.hasOwnProperty(n)&&(c[n]=t[n]);var a=arguments.length-2;if(1===a)c.children=r;else if(1<a){for(var d=Array(a),u=0;u<a;u++)d[u]=arguments[u+2];c.children=d}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===c[n]&&(c[n]=a[n]);return{$$typeof:i,type:e,key:s,ref:o,props:c,_owner:b.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var w=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,r,n,s){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case c:a=!0}}if(a)return s=s(a=e),e=""===n?"."+k(a,0):n,Array.isArray(s)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),O(s,t,r,"",(function(e){return e}))):null!=s&&(S(s)&&(s=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),t.push(s)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var d=0;d<e.length;d++){var u=n+k(o=e[d],d);a+=O(o,t,r,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),d=0;!(o=e.next()).done;)a+=O(o=o.value,t,r,u=n+k(o,d++),s);else if("object"===o)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function C(e,t,r){if(null==e)return e;var n=[],i=0;return O(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function P(){var e=E.current;if(null===e)throw Error(f(321));return e}var $={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(f(143));return e}},t.Component=x,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(f(267,e));var c=n({},e.props),s=e.key,o=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,a=b.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(u in t)v.call(t,u)&&!A.hasOwnProperty(u)&&(c[u]=void 0===t[u]&&void 0!==d?d[u]:t[u])}var u=arguments.length-2;if(1===u)c.children=r;else if(1<u){d=Array(u);for(var l=0;l<u;l++)d[l]=arguments[l+2];c.children=d}return{$$typeof:i,type:e.type,key:s,ref:o,props:c,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:o,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return P().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,r){return P().useReducer(e,t,r)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>o,ah:()=>c});var n=r(667294);const i=n.createContext({});function c(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function o({components:e,children:t,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||s:c(e),n.createElement(i.Provider,{value:o},t)}}}]);