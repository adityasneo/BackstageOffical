/*! For license information please see 95696ee8.466a2d23.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[238739],{949802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var r=n(824246),i=n(511151);const s={id:"migrating",title:"Migrating your Backend Plugin to the New Backend System",sidebar_label:"Migration Guide",description:"How to migrate existing backend plugins to the new backend system"},o=void 0,u={unversionedId:"backend-system/building-plugins-and-modules/migrating",id:"backend-system/building-plugins-and-modules/migrating",title:"Migrating your Backend Plugin to the New Backend System",description:"How to migrate existing backend plugins to the new backend system",source:"@site/../docs/backend-system/building-plugins-and-modules/08-migrating.md",sourceDirName:"backend-system/building-plugins-and-modules",slug:"/backend-system/building-plugins-and-modules/migrating",permalink:"/docs/backend-system/building-plugins-and-modules/migrating",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/building-plugins-and-modules/08-migrating.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"migrating",title:"Migrating your Backend Plugin to the New Backend System",sidebar_label:"Migration Guide",description:"How to migrate existing backend plugins to the new backend system"},sidebar:"docs",previous:{title:"Testing",permalink:"/docs/backend-system/building-plugins-and-modules/testing"},next:{title:"Overview",permalink:"/docs/backend-system/core-services/index"}},a={},l=[];function c(e){const t=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",code:"code",pre:"pre",a:"a"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"DISCLAIMER: The new backend system is in alpha, and still under active development. While we have reviewed the interfaces carefully, they may still be iterated on before the stable release."})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Migrating an existing backend plugin to the new backend system is fairly straightforward. The process is similar across the majority of plugins which just return a ",(0,r.jsx)(t.code,{children:"Router"})," that is then wired up in the ",(0,r.jsx)(t.code,{children:"index.ts"})," file of your backend. The primary thing that we need to do is to make sure that the dependencies that are required by the plugin are available, and then registering the router with the HTTP router service."]}),"\n",(0,r.jsx)(t.p,{children:"Let's look at an example of migrating the Kubernetes backend plugin. In the existing (old) system, the kubernetes backend is structured like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// @backstage/plugin-kubernetes-backend/src/service/router.ts\n\nimport { KubernetesBuilder } from './KubernetesBuilder';\nexport interface RouterOptions {\n  logger: Logger;\n  config: Config;\n  catalogApi: CatalogApi;\n  clusterSupplier?: KubernetesClustersSupplier;\n  discovery: PluginEndpointDiscovery;\n}\n\nexport async function createRouter(\n  options: RouterOptions,\n): Promise<express.Router> {\n  const { router } = await KubernetesBuilder.createBuilder(options)\n    .setClusterSupplier(options.clusterSupplier)\n    .build();\n  return router;\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["We can re-use the ",(0,r.jsx)(t.code,{children:"router"})," created by the ",(0,r.jsx)(t.code,{children:"KubernetesBuilder"})," in the new backend system. We only need to make sure that the dependencies specified in ",(0,r.jsx)(t.code,{children:"RouterOptions"})," above are available. All of them are part of the ",(0,r.jsx)(t.code,{children:"coreServices"})," which makes migration easy."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { catalogServiceRef } from '@backstage/plugin-catalog-node';\nimport { Router } from 'express';\nimport { KubernetesBuilder } from './KubernetesBuilder';\n\nexport const kubernetesPlugin = createBackendPlugin({\n  pluginId: 'kubernetes',\n  register(env) {\n    env.registerInit({\n      deps: {\n        logger: coreServices.logger,\n        config: coreServices.config,\n        catalogApi: catalogServiceRef,\n        discovery: coreServices.discovery,\n        // The http router service is used to register the router created by the KubernetesBuilder.\n        http: coreServices.httpRouter,\n      },\n      async init({ config, logger, catalogApi, discovery, http }) {\n        const { router } = await KubernetesBuilder.createBuilder({\n          config,\n          logger,\n          catalogApi,\n          discovery,\n        }).build();\n\n        // We register the router with the http service.\n        http.use(router);\n      },\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Done! Users of this plugin are now able to import the ",(0,r.jsx)(t.code,{children:"kubernetesPlugin"})," and register it in their backend using"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// packages/backend/src/index.ts\nimport { kubernetesPlugin } from '@backstage/plugin-kubernetes-backend';\nbackend.add(kubernetesPlugin);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["There's one thing missing that those sharp eyed readers might have noticed: the ",(0,r.jsx)(t.code,{children:"clusterSupplier"})," option is missing from the original plugin. Let's add it and discuss the alternatives."]}),"\n",(0,r.jsxs)(t.p,{children:["One alternative is to pass the ",(0,r.jsx)(t.code,{children:"ClusterSupplier"})," in as options to the plugin, which is quick and easy but not very flexible, and also hard to evolve without introducing breaking changes as it changes the public API for the plugin. Having complex types passed in directly to the plugin also clutters the backend setup code and makes it harder to read."]}),"\n",(0,r.jsxs)(t.p,{children:["Options are primarily used for simple configuration values that are not complex types. In this case we want to allow users to register their own ",(0,r.jsx)(t.code,{children:"ClusterSupplier"})," implementations to the plugin. This is where the new backend system's ",(0,r.jsx)(t.a,{href:"/docs/backend-system/architecture/extension-points",children:"extension points"})," come in handy, but let's look at doing this with options first."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"/* omitted imports but they remain the same as above */\n\nexport interface KubernetesOptions {\n  clusterSupplier?: KubernetesClustersSupplier;\n}\n\nconst kubernetesPlugin = createBackendPlugin((options: KubernetesOptions) => ({\n  pluginId: 'kubernetes',\n  register(env) {\n    env.registerInit({\n      deps: {\n        /* omitted dependencies but they remain the same as above */\n      },\n      async init({ config, logger, catalogApi, discovery, http }) {\n        const { router } = await KubernetesBuilder.createBuilder({\n          config,\n          logger,\n          catalogApi,\n          discovery,\n        })\n          .setClusterSupplier(options.clusterSupplier)\n          .build();\n        http.use(router);\n      },\n    });\n  },\n}));\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The above would allow users to specify their own ",(0,r.jsx)(t.code,{children:"ClusterSupplier"})," implementation to the plugin like this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"backend.add(\n  kubernetesPlugin({ clusterSupplier: new MyCustomClusterSupplier() }),\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Just to echo what was said above, this is not a very flexible solution and will for example be problematic to keep backwards compatible if we start evolving the options to for example accept multiple suppliers or tweak the ",(0,r.jsx)(t.code,{children:"ClusterSupplier"})," interface."]}),"\n",(0,r.jsxs)(t.p,{children:["The new ",(0,r.jsx)(t.a,{href:"/docs/backend-system/architecture/extension-points",children:"extension points"})," API allows ",(0,r.jsx)(t.a,{href:"/docs/backend-system/architecture/modules",children:"modules"})," to add functionality into the backend plugin itself, in this case an additional ",(0,r.jsx)(t.code,{children:"ClusterSupplier"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The kubernetes backend plugin only supports one ",(0,r.jsx)(t.code,{children:"ClusterSupplier"})," at this time but let's look at how we could add support for multiple suppliers using extension points. This allows users to install several modules that add their own ",(0,r.jsx)(t.code,{children:"ClusterSupplier"})," implementations to the plugin like this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"backend.add(kubernetesPlugin());\nbackend.add(kubernetesGoogleContainerEngineClusterSupplier());\nbackend.add(kubernetesElasticContainerEngine());\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now let's look at how to implement this with extension points. First we need to define the extension point itself. As the extension point will be used by other modules, it's common practice to export these from a shared package so that they can be imported by other modules and plugins."}),"\n",(0,r.jsxs)(t.p,{children:["We'll go ahead and create a ",(0,r.jsx)(t.code,{children:"@backstage/plugin-kubernetes-node"})," package for this and from there we'll export the extension point."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { createExtensionPoint } from '@backstage/backend-plugin-api';\n\nexport interface KubernetesClusterSupplierExtensionPoint {\n  addClusterSupplier(supplier: KubernetesClustersSupplier): void;\n}\n\n/**\n * An extension point that allows other plugins to add cluster suppliers.\n * @public\n */\nexport const kubernetesClustersSupplierExtensionPoint =\n  createExtensionPoint<KubernetesClusterSupplierExtensionPoint>({\n    id: 'kubernetes.cluster-supplier',\n  });\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now we can use this extension point in the kubernetes backend plugin to register the extension point for modules to use."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { kubernetesClustersSupplierExtensionPoint, KubernetesClusterSupplierExtensionPoint } from '@backstage/plugin-kubernetes-node';\n\n// Our internal implementation of the extension point, should not be exported.\nclass ClusterSupplier implements KubernetesClusterSupplierExtensionPoint {\n  private clusterSuppliers: KubernetesClustersSupplier | undefined;\n\n  // This method is private and only used internally to retrieve the registered supplier.\n  getClusterSupplier() {\n    return this.clusterSuppliers;\n  }\n\n  addClusterSupplier(supplier: KubernetesClustersSupplier) {\n    // We can remove this check once the plugin support multiple suppliers.\n    if(this.clusterSuppliers) {\n      throw new Error('Multiple Kubernetes cluster suppliers is not supported at this time');\n    }\n    this.clusterSuppliers = supplier;\n  }\n}\n\nexport const kubernetesPlugin = createBackendPlugin({\n  pluginId: 'kubernetes',\n  register(env) {\n    const extensionPoint = new ClusterSupplier();\n    // We register the extension point with the backend, which allows modules to\n    // register their own ClusterSupplier.\n    env.registerExtensionPoint(\n      kubernetesClustersSupplierExtensionPoint,\n      extensionPoint,\n    );\n\n    env.registerInit({\n      deps: {\n        ... omitted ...\n      },\n      async init({ config, logger, catalogApi, discovery, http }) {\n        const { router } = await KubernetesBuilder.createBuilder({\n          config,\n          logger,\n          catalogApi,\n          discovery,\n        })\n          // We pass in the registered supplier from the extension point.\n          .setClusterSupplier(extensionPoint.getClusterSupplier())\n          .build();\n        http.use(router);\n      },\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["And that's it! Modules can now be built that add clusters into to the kubernetes backend plugin, here's an example of a module that adds a ",(0,r.jsx)(t.code,{children:"GoogleContainerEngineSupplier"})," to the kubernetes backend."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { kubernetesClustersSupplierExtensionPoint } from '@backstage/plugin-kubernetes-node';\n\nexport const kubernetesGoogleContainerEngineClusterSupplier =\n  createBackendModule({\n    pluginId: 'kubernetes',\n    moduleId: 'gke.supplier',\n    register(env) {\n      env.registerInit({\n        deps: {\n          supplier: kubernetesClustersSupplierExtensionPoint,\n        },\n        async init({ supplier }) {\n          supplier.addClusterSupplier(new GoogleContainerEngineSupplier());\n        },\n      });\n    },\n  });\n"})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var s,o,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in s=Object(arguments[a]))n.call(s,l)&&(u[l]=s[l]);if(t){o=t(s);for(var c=0;c<o.length;c++)r.call(s,o[c])&&(u[o[c]]=s[o[c]])}}return u}},371426:(e,t,n)=>{n(862525);var r=n(827378),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;i=s("react.element"),t.Fragment=s("react.fragment")}var o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)u.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:c,props:s,_owner:o.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),i=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,u=60110,a=60112;t.Suspense=60113;var l=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;i=p("react.element"),s=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),o=p("react.provider"),u=p("react.context"),a=p("react.forward_ref"),t.Suspense=p("react.suspense"),l=p("react.memo"),c=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function b(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||g}function m(){}function y(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||g}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var k=y.prototype=new m;k.constructor=y,r(k,b.prototype),k.isPureReactComponent=!0;var x={current:null},v=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,s={},o=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,r)&&!w.hasOwnProperty(r)&&(s[r]=t[r]);var a=arguments.length-2;if(1===a)s.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];s.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===s[r]&&(s[r]=a[r]);return{$$typeof:i,type:e,key:o,ref:u,props:s,_owner:x.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var C=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,n,r,o){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var a=!1;if(null===e)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case s:a=!0}}if(a)return o=o(a=e),e=""===r?"."+_(a,0):r,Array.isArray(o)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),P(o,t,n,"",(function(e){return e}))):null!=o&&(S(o)&&(o=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var c=r+_(u=e[l],l);a+=P(u,t,n,c,o)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),l=0;!(u=e.next()).done;)a+=P(u=u.value,t,n,c=r+_(u,l++),o);else if("object"===u)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function E(e,t,n){if(null==e)return e;var r=[],i=0;return P(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function O(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function B(){var e=R.current;if(null===e)throw Error(h(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(h(143));return e}},t.Component=b,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var s=r({},e.props),o=e.key,u=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,a=x.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)v.call(t,c)&&!w.hasOwnProperty(c)&&(s[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){l=Array(c);for(var p=0;p<c;p++)l[p]=arguments[p+2];s.children=l}return{$$typeof:i,type:e.type,key:o,ref:u,props:s,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return B().useCallback(e,t)},t.useContext=function(e,t){return B().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return B().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return B().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return B().useLayoutEffect(e,t)},t.useMemo=function(e,t){return B().useMemo(e,t)},t.useReducer=function(e,t,n){return B().useReducer(e,t,n)},t.useRef=function(e){return B().useRef(e)},t.useState=function(e){return B().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>u,ah:()=>s});var r=n(667294);const i=r.createContext({});function s(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function u({components:e,children:t,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||o:s(e),r.createElement(i.Provider,{value:u},t)}}}]);