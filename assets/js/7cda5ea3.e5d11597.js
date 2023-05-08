/*! For license information please see 7cda5ea3.e5d11597.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[774410],{216710:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(824246),i=t(511151);const o={id:"defining",title:"Defining Configuration for your Plugin",description:"Documentation on Defining Configuration for your Plugin"},a=void 0,s={unversionedId:"conf/defining",id:"conf/defining",title:"Defining Configuration for your Plugin",description:"Documentation on Defining Configuration for your Plugin",source:"@site/../docs/conf/defining.md",sourceDirName:"conf",slug:"/conf/defining",permalink:"/docs/conf/defining",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/conf/defining.md",tags:[],version:"current",frontMatter:{id:"defining",title:"Defining Configuration for your Plugin",description:"Documentation on Defining Configuration for your Plugin"},sidebar:"docs",previous:{title:"Writing Backstage Configuration Files",permalink:"/docs/conf/writing"},next:{title:"Authentication in Backstage",permalink:"/docs/auth/"}},c={},l=[{value:"Schema Collection and Definition",id:"schema-collection-and-definition",level:2},{value:"Visibility",id:"visibility",level:2},{value:"Validation",id:"validation",level:2},{value:"Guidelines",id:"guidelines",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",h2:"h2",code:"code",pre:"pre",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Configuration in Backstage is organized via a configuration schema, which in\nturn is defined using a superset of\n",(0,r.jsx)(n.a,{href:"https://json-schema.org/specification-links.html#draft-7",children:"JSON Schema Draft-07"}),".\nEach plugin or package within a Backstage app can contribute to the schema,\nwhich during validation is stitched together into a single schema."]}),"\n",(0,r.jsx)(n.h2,{id:"schema-collection-and-definition",children:"Schema Collection and Definition"}),"\n",(0,r.jsxs)(n.p,{children:['Schemas are collected from all packages and dependencies in each repo that are a\npart of the Backstage ecosystem, including the root package and transitive\ndependencies. The current definition of "part of the ecosystem" is that a\npackage has at least one dependency in the ',(0,r.jsx)(n.code,{children:"@backstage"})," namespace or a\n",(0,r.jsx)(n.code,{children:'"configSchema"'})," field in ",(0,r.jsx)(n.code,{children:"package.json"}),", but this is subject to change."]}),"\n",(0,r.jsxs)(n.p,{children:["Each package is searched for a schema at a single point of entry, a top-level\n",(0,r.jsx)(n.code,{children:'"configSchema"'})," field in ",(0,r.jsx)(n.code,{children:"package.json"}),". The field can either contain an\ninlined JSON schema, or a relative path to a schema file. Supported schema file\nformats are ",(0,r.jsx)(n.code,{children:".json"})," or ",(0,r.jsx)(n.code,{children:".d.ts"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsonc",metastring:'title="package.json"',children:'{\n  // ...\n  "files": [\n    // ...\n    "config.d.ts"\n  ],\n  "configSchema": "config.d.ts"\n}\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["When defining a schema file, be sure to include the file in your\n",(0,r.jsx)(n.code,{children:"package.json"})," > ",(0,r.jsx)(n.code,{children:'"files"'})," field as well!"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["TypeScript configuration schema files should export a single ",(0,r.jsx)(n.code,{children:"Config"})," type, for\nexample:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export interface Config {\n  app: {\n    /**\n     * Frontend root URL\n     * @visibility frontend\n     */\n    baseUrl: string;\n\n    // Use @items.<name> to assign annotations to primitive array items\n    /** @items.visibility frontend */\n    myItems: string[];\n  };\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Separate ",(0,r.jsx)(n.code,{children:".json"})," schema files can use a top-level\n",(0,r.jsx)(n.code,{children:'"$schema": "https://backstage.io/schema/config-v1"'})," declaration in order to\nreceive schema validation and autocompletion. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "$schema": "https://backstage.io/schema/config-v1",\n  "type": "object",\n  "properties": {\n    "app": {\n      "type": "object",\n      "properties": {\n        "baseUrl": {\n          "type": "string",\n          "description": "Frontend root URL",\n          "visibility": "frontend"\n        }\n      },\n      "required": ["baseUrl"]\n    },\n    "required": ["app"]\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"visibility",children:"Visibility"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"https://backstage.io/schema/config-v1"})," meta schema is a superset of JSON\nSchema Draft 07. The single addition is a custom ",(0,r.jsx)(n.code,{children:"visibility"})," keyword, which is\nused to indicate whether the given config value should be visible in the\nfrontend or not. The possible values are ",(0,r.jsx)(n.code,{children:"frontend"}),", ",(0,r.jsx)(n.code,{children:"backend"}),", and ",(0,r.jsx)(n.code,{children:"secret"}),",\nwhere ",(0,r.jsx)(n.code,{children:"backend"})," is the default. A visibility of ",(0,r.jsx)(n.code,{children:"secret"})," has the same scope at\nruntime, but it will be treated with more care in certain contexts, and defining\nboth ",(0,r.jsx)(n.code,{children:"frontend"})," and ",(0,r.jsx)(n.code,{children:"secret"})," for the same value in two different schemas will\nresult in an error during schema merging."]}),"\n",(0,r.jsxs)(n.p,{children:["The visibility only applies to the direct parent of where the keyword is placed\nin the schema. For example, if you set the visibility to ",(0,r.jsx)(n.code,{children:"frontend"})," for a subset\nof the schema with ",(0,r.jsx)(n.code,{children:'type: "object"'}),", but none of the descendants, only an empty\nobject will be available in the frontend. The full ancestry does not need to\nhave correctly defined visibilities however, so it is enough to only for example\ndeclare the visibility of a leaf node of ",(0,r.jsx)(n.code,{children:'type: "string"'}),"."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.code,{children:"visibility"})}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"frontend"})}),(0,r.jsx)(n.td,{children:"Visible in frontend and backend"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"backend"})}),(0,r.jsx)(n.td,{children:"(Default) Only in backend"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"secret"})}),(0,r.jsx)(n.td,{children:"Only in backend and may be excluded from logs for security reasons"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["You can set visibility with an ",(0,r.jsx)(n.code,{children:"@visibility"})," comment in the ",(0,r.jsx)(n.code,{children:"Config"})," Typescript\ninterface."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export interface Config {\n  app: {\n    /**\n     * Frontend root URL\n     * @visibility frontend\n     */\n    baseUrl: string;\n  };\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,r.jsxs)(n.p,{children:["Schemas can be validated using the ",(0,r.jsx)(n.code,{children:"backstage-cli config:check"})," command. If you\nwant to validate anything else than the default ",(0,r.jsx)(n.code,{children:"app-config.yaml"}),", be sure to\npass in all of the configuration files as ",(0,r.jsx)(n.code,{children:"--config <path>"})," options as well."]}),"\n",(0,r.jsxs)(n.p,{children:["To validate and examine the frontend configuration, use the\n",(0,r.jsx)(n.code,{children:"backstage-cli config:print --frontend"})," command. Just like for validation you\nmay need to pass in all files using one or multiple ",(0,r.jsx)(n.code,{children:"--config <path>"})," options."]}),"\n",(0,r.jsx)(n.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Make limited use of static configuration. The first question to ask is whether\na particular option actually needs to be static configuration, or if it might\njust as well be a TypeScript API. In general, options that you want to be able\nto change for different deployment environments should be static\nconfiguration, while it should otherwise be avoided."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When defining configuration for your plugin, keep keys on ",(0,r.jsx)(n.code,{children:"camelCase"})," form and stick to\nexisting casing conventions such as ",(0,r.jsx)(n.code,{children:"baseUrl"})," rather than ",(0,r.jsx)(n.code,{children:"baseURL"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"It is also usually best to prefer objects over arrays, as it makes it possible\nto override individual values using separate files or environment variables."}),"\n",(0,r.jsx)(n.p,{children:"Avoid creating new top-level fields as much as possible. Either place your\nconfiguration within an existing known top-level block, or create a single new\none using e.g. the name of the product that the plugin integrates."})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in o=Object(arguments[c]))t.call(o,l)&&(s[l]=o[l]);if(n){a=n(o);for(var d=0;d<a.length;d++)r.call(o,a[d])&&(s[a[d]]=o[a[d]])}}return s}},371426:(e,n,t)=>{t(862525);var r=t(827378),i=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),n.Fragment=o("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:l,ref:d,props:o,_owner:a.current}}n.jsx=l,n.jsxs=l},541535:(e,n,t)=>{var r=t(862525),i=60103,o=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var a=60109,s=60110,c=60112;n.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;i=u("react.element"),o=u("react.portal"),n.Fragment=u("react.fragment"),n.StrictMode=u("react.strict_mode"),n.Profiler=u("react.profiler"),a=u("react.provider"),s=u("react.context"),c=u("react.forward_ref"),n.Suspense=u("react.suspense"),l=u("react.memo"),d=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||p}function m(){}function j(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||p}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var b=j.prototype=new m;b.constructor=j,r(b,y.prototype),b.isPureReactComponent=!0;var v={current:null},x=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,n,t){var r,o={},a=null,s=null;if(null!=n)for(r in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(a=""+n.key),n)x.call(n,r)&&!k.hasOwnProperty(r)&&(o[r]=n[r]);var c=arguments.length-2;if(1===c)o.children=t;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:v.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var S=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function O(e,n,t,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case o:c=!0}}if(c)return a=a(c=e),e=""===r?"."+C(c,0):r,Array.isArray(a)?(t="",null!=e&&(t=e.replace(S,"$&/")+"/"),O(a,n,t,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,n){return{$$typeof:i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(S,"$&/")+"/")+e)),n.push(a)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=r+C(s=e[l],l);c+=O(s,n,t,d,a)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(s=e.next()).done;)c+=O(s=s.value,n,t,d=r+C(s,l++),a);else if("object"===s)throw n=""+e,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return c}function E(e,n,t){if(null==e)return e;var r=[],i=0;return O(e,r,"","",(function(e){return n.call(t,e,i++)})),r}function P(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(h(321));return e}var D={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:E,forEach:function(e,n,t){E(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return E(e,(function(){n++})),n},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(h(143));return e}},n.Component=y,n.PureComponent=j,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,n.cloneElement=function(e,n,t){if(null==e)throw Error(h(267,e));var o=r({},e.props),a=e.key,s=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,c=v.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in n)x.call(n,d)&&!k.hasOwnProperty(d)&&(o[d]=void 0===n[d]&&void 0!==l?l[d]:n[d])}var d=arguments.length-2;if(1===d)o.children=t;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];o.children=l}return{$$typeof:i,type:e.type,key:a,ref:s,props:o,_owner:c}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:s,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=w,n.createFactory=function(e){var n=w.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=_,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return $().useCallback(e,n)},n.useContext=function(e,n){return $().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return $().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return $().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return $().useLayoutEffect(e,n)},n.useMemo=function(e,n){return $().useMemo(e,n)},n.useReducer=function(e,n,t){return $().useReducer(e,n,t)},n.useRef=function(e){return $().useRef(e)},n.useState=function(e){return $().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>o});var r=t(667294);const i=r.createContext({});function o(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||a:o(e),r.createElement(i.Provider,{value:s},n)}}}]);