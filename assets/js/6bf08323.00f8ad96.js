/*! For license information please see 6bf08323.00f8ad96.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[326463],{12055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(824246),i=n(511151);const o={id:"installation",title:"Installation",description:"Installing Kubernetes plugin into Backstage"},s=void 0,a={unversionedId:"features/kubernetes/installation",id:"features/kubernetes/installation",title:"Installation",description:"Installing Kubernetes plugin into Backstage",source:"@site/../docs/features/kubernetes/installation.md",sourceDirName:"features/kubernetes",slug:"/features/kubernetes/installation",permalink:"/docs/features/kubernetes/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/kubernetes/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",description:"Installing Kubernetes plugin into Backstage"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/features/kubernetes/"},next:{title:"Configuration",permalink:"/docs/features/kubernetes/configuration"}},u={},l=[{value:"Adding the Kubernetes frontend plugin",id:"adding-the-kubernetes-frontend-plugin",level:2},{value:"Adding Kubernetes Backend plugin",id:"adding-kubernetes-backend-plugin",level:2},{value:"Custom cluster discovery",id:"custom-cluster-discovery",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){const t=Object.assign({p:"p",a:"a",h2:"h2",pre:"pre",code:"code",strong:"strong",ul:"ul",li:"li",h3:"h3"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The Kubernetes feature is a plugin to Backstage, and it is exposed as a tab when\nviewing entities in the software catalog."}),"\n",(0,r.jsxs)(t.p,{children:["If you haven't setup Backstage already, read the\n",(0,r.jsx)(t.a,{href:"/docs/getting-started/",children:"Getting Started"})," guide."]}),"\n",(0,r.jsx)(t.h2,{id:"adding-the-kubernetes-frontend-plugin",children:"Adding the Kubernetes frontend plugin"}),"\n",(0,r.jsx)(t.p,{children:"The first step is to add the Kubernetes frontend plugin to your Backstage\napplication."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn add --cwd packages/app @backstage/plugin-kubernetes\n"})}),"\n",(0,r.jsx)(t.p,{children:'Once the package has been installed, you need to import the plugin in your app\nby adding the "Kubernetes" tab to the respective catalog pages.'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/components/catalog/EntityPage.tsx"',children:'/* highlight-add-next-line */\nimport { EntityKubernetesContent } from \'@backstage/plugin-kubernetes\';\n\n// You can add the tab to any number of pages, the service page is shown as an\n// example here\nconst serviceEntityPage = (\n  <EntityLayout>\n    {/* other tabs... */}\n    {/* highlight-add-start */}\n    <EntityLayout.Route path="/kubernetes" title="Kubernetes">\n      <EntityKubernetesContent refreshIntervalMs={30000} />\n    </EntityLayout.Route>\n    {/* highlight-add-end */}\n  </EntityLayout>\n);\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The optional ",(0,r.jsx)(t.code,{children:"refreshIntervalMs"})," property on the ",(0,r.jsx)(t.code,{children:"EntityKubernetesContent"})," defines the interval in which the content automatically refreshes, if not set this will default to 10 seconds."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"That's it! But now, we need the Kubernetes Backend plugin for the frontend to\nwork."}),"\n",(0,r.jsx)(t.h2,{id:"adding-kubernetes-backend-plugin",children:"Adding Kubernetes Backend plugin"}),"\n",(0,r.jsxs)(t.p,{children:["Navigate to ",(0,r.jsx)(t.code,{children:"packages/backend"})," of your Backstage app, and install the\n",(0,r.jsx)(t.code,{children:"@backstage/plugin-kubernetes-backend"})," package."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn add --cwd packages/backend @backstage/plugin-kubernetes-backend\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Create a file called ",(0,r.jsx)(t.code,{children:"kubernetes.ts"})," inside ",(0,r.jsx)(t.code,{children:"packages/backend/src/plugins/"})," and\nadd the following:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/kubernetes.ts"',children:"import { KubernetesBuilder } from '@backstage/plugin-kubernetes-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\nimport { CatalogClient } from '@backstage/catalog-client';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const catalogApi = new CatalogClient({ discoveryApi: env.discovery });\n  const { router } = await KubernetesBuilder.createBuilder({\n    logger: env.logger,\n    config: env.config,\n    catalogApi,\n    permissions: env.permissions,\n  }).build();\n  return router;\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["And import the plugin to ",(0,r.jsx)(t.code,{children:"packages/backend/src/index.ts"}),". There are three lines\nof code you'll need to add, and they should be added near similar code in your\nexisting Backstage backend."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="packages/backend/src/index.ts"',children:"// ..\n/* highlight-add-next-line */\nimport kubernetes from './plugins/kubernetes';\n\nasync function main() {\n  // ...\n  /* highlight-add-next-line */\n  const kubernetesEnv = useHotMemoize(module, () => createEnv('kubernetes'));\n  // ...\n  /* highlight-add-next-line */\n  apiRouter.use('/kubernetes', await kubernetes(kubernetesEnv));\n"})}),"\n",(0,r.jsx)(t.p,{children:"That's it! The Kubernetes frontend and backend have now been added to your\nBackstage app."}),"\n",(0,r.jsx)(t.h3,{id:"custom-cluster-discovery",children:"Custom cluster discovery"}),"\n",(0,r.jsxs)(t.p,{children:["If either existing\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/kubernetes/configuration#clusterlocatormethods",children:"cluster locators"}),"\ndon't work for your use-case, it is possible to implement a custom\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/reference/plugin-kubernetes-backend.kubernetesclusterssupplier",children:"KubernetesClustersSupplier"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Change the following in ",(0,r.jsx)(t.code,{children:"packages/backend/src/plugins/kubernetes.ts"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/kubernetes.ts"',children:"import {\n /* highlight-add-next-line */\n  ClusterDetails,\n  KubernetesBuilder,\n  /* highlight-add-next-line */\n  KubernetesClustersSupplier,\n} from '@backstage/plugin-kubernetes-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n/* highlight-add-next-line */\nimport { Duration } from 'luxon';\n\n/* highlight-add-start */\nexport class CustomClustersSupplier implements KubernetesClustersSupplier {\n  constructor(private clusterDetails: ClusterDetails[] = []) {}\n\n  static create(refreshInterval: Duration) {\n    const clusterSupplier = new CustomClustersSupplier();\n    // setup refresh, e.g. using a copy of https://github.com/backstage/backstage/blob/master/plugins/search-backend-node/src/runPeriodically.ts\n    runPeriodically(\n      () => clusterSupplier.refreshClusters(),\n      refreshInterval.toMillis(),\n    );\n    return clusterSupplier;\n  }\n\n  async refreshClusters(): Promise<void> {\n    this.clusterDetails = []; // fetch from somewhere\n  }\n\n  async getClusters(): Promise<ClusterDetails[]> {\n    return this.clusterDetails;\n  }\n}\n/* highlight-add-end */\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n\n  /* highlight-remove-next-line */\n  const { router } = await KubernetesBuilder.createBuilder({\n  /* highlight-add-next-line */\n  const builder = await KubernetesBuilder.createBuilder({\n     logger: env.logger,\n     config: env.config,\n  /* highlight-remove-next-line */\n  }).build();\n  /* highlight-add-start */\n  });\n  builder.setClusterSupplier(\n    CustomClustersSupplier.create(Duration.fromObject({ minutes: 60 })),\n  );\n  const { router } = await builder.build();\n  /* highlight-add-end */\n\n  // ..\n  return router;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["After installing the plugins in the code, you'll need to then\n",(0,r.jsx)(t.a,{href:"/docs/features/kubernetes/configuration",children:"configure them"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsxs)(t.p,{children:["After installing the plugins in the code, if the Kubernetes information is not\nshowing up, you'll need to ",(0,r.jsx)(t.a,{href:"/docs/features/kubernetes/troubleshooting",children:"troubleshoot it"}),"."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var l in o=Object(arguments[u]))n.call(o,l)&&(a[l]=o[l]);if(t){s=t(o);for(var c=0;c<s.length;c++)r.call(o,s[c])&&(a[s[c]]=o[s[c]])}}return a}},371426:(e,t,n)=>{n(862525);var r=n(827378),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),t.Fragment=o("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:c,props:o,_owner:s.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),i=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,a=60110,u=60112;t.Suspense=60113;var l=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;i=d("react.element"),o=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),s=d("react.provider"),a=d("react.context"),u=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),c=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var k=m.prototype=new y;k.constructor=m,r(k,b.prototype),k.isPureReactComponent=!0;var v={current:null},x=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,o={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)x.call(t,r)&&!j.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:i,type:e,key:s,ref:a,props:o,_owner:v.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var C=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case i:case o:u=!0}}if(u)return s=s(u=e),e=""===r?"."+E(u,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),S(s,t,n,"",(function(e){return e}))):null!=s&&(w(s)&&(s=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(C,"$&/")+"/")+e)),t.push(s)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var c=r+E(a=e[l],l);u+=S(a,t,n,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),l=0;!(a=e.next()).done;)u+=S(a=a.value,t,n,c=r+E(a,l++),s);else if("object"===a)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function O(e,t,n){if(null==e)return e;var r=[],i=0;return S(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function B(){var e=R.current;if(null===e)throw Error(f(321));return e}var K={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(f(143));return e}},t.Component=b,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,t.cloneElement=function(e,t,n){if(null==e)throw Error(f(267,e));var o=r({},e.props),s=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=v.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)x.call(t,c)&&!j.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:i,type:e.type,key:s,ref:a,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return B().useCallback(e,t)},t.useContext=function(e,t){return B().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return B().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return B().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return B().useLayoutEffect(e,t)},t.useMemo=function(e,t){return B().useMemo(e,t)},t.useReducer=function(e,t,n){return B().useReducer(e,t,n)},t.useRef=function(e){return B().useRef(e)},t.useState=function(e){return B().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>o});var r=n(667294);const i=r.createContext({});function o(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:o(e),r.createElement(i.Provider,{value:a},t)}}}]);