/*! For license information please see 5fa621ab.47c5c281.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[132070],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(r),y=o,v=f["".concat(i,".").concat(y)]||f[y]||p[y]||a;return r?n.createElement(v,c(c({ref:t},l),{},{components:r})):n.createElement(v,c({ref:t},l))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[f]="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},284864:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"plugin-stack-overflow.stackoverflowquestionscontentprops",title:"StackOverflowQuestionsContentProps",description:"API reference for StackOverflowQuestionsContentProps"},s=void 0,i={unversionedId:"reference/plugin-stack-overflow.stackoverflowquestionscontentprops",id:"reference/plugin-stack-overflow.stackoverflowquestionscontentprops",title:"StackOverflowQuestionsContentProps",description:"API reference for StackOverflowQuestionsContentProps",source:"@site/../docs/reference/plugin-stack-overflow.stackoverflowquestionscontentprops.md",sourceDirName:"reference",slug:"/reference/plugin-stack-overflow.stackoverflowquestionscontentprops",permalink:"/docs/reference/plugin-stack-overflow.stackoverflowquestionscontentprops",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-stack-overflow.stackoverflowquestionscontentprops.md",tags:[],version:"current",frontMatter:{id:"plugin-stack-overflow.stackoverflowquestionscontentprops",title:"StackOverflowQuestionsContentProps",description:"API reference for StackOverflowQuestionsContentProps"}},u={},l=[],f={toc:l};function p(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-stack-overflow"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-stack-overflow"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-stack-overflow.stackoverflowquestionscontentprops"}),(0,n.kt)("inlineCode",{parentName:"a"},"StackOverflowQuestionsContentProps"))),(0,n.kt)("p",null,"Props for HomePageStackOverflowQuestions"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type StackOverflowQuestionsContentProps = {\n    requestParams: StackOverflowQuestionsRequestParams;\n    icon?: React.ReactNode;\n};\n")),(0,n.kt)("b",null,"References:")," [StackOverflowQuestionsRequestParams](/docs/reference/plugin-stack-overflow.stackoverflowquestionsrequestparams)")}p.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var c,s,i=o(e),u=1;u<arguments.length;u++){for(var l in c=Object(arguments[u]))r.call(c,l)&&(i[l]=c[l]);if(t){s=t(c);for(var f=0;f<s.length;f++)n.call(c,s[f])&&(i[s[f]]=c[s[f]])}}return i}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var c=60109,s=60110,i=60112;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),c=f("react.provider"),s=f("react.context"),i=f("react.forward_ref"),f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function m(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||v}function b(){}function k(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||v}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var w=k.prototype=new b;w.constructor=k,n(w,m.prototype),w.isPureReactComponent=!0;var g={current:null},O=Object.prototype.hasOwnProperty,h={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,a={},c=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)O.call(t,n)&&!h.hasOwnProperty(n)&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:c,ref:s,props:a,_owner:g.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return c=c(i=e),e=""===n?"."+_(i,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),C(c,t,r,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(S,"$&/")+"/")+e)),t.push(c)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+_(s=e[u],u);i+=C(s,t,r,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)i+=C(s=s.value,t,r,l=n+_(s,u++),c);else if("object"===s)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function q(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function N(){var e=x.current;if(null===e)throw Error(y(321));return e}},827378:(e,t,r)=>{r(541535)}}]);