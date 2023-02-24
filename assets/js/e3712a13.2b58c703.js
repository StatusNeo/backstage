/*! For license information please see e3712a13.2b58c703.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[283284],{603905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),d=o,m=l["".concat(c,".").concat(d)]||l[d]||f[d]||i;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},528878:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"plugin-permission-node.createpermissionintegrationrouter",title:"createPermissionIntegrationRouter",description:"API reference for createPermissionIntegrationRouter"},s=void 0,c={unversionedId:"reference/plugin-permission-node.createpermissionintegrationrouter",id:"reference/plugin-permission-node.createpermissionintegrationrouter",title:"createPermissionIntegrationRouter",description:"API reference for createPermissionIntegrationRouter",source:"@site/../docs/reference/plugin-permission-node.createpermissionintegrationrouter.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.createpermissionintegrationrouter",permalink:"/docs/reference/plugin-permission-node.createpermissionintegrationrouter",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-node.createpermissionintegrationrouter.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-node.createpermissionintegrationrouter",title:"createPermissionIntegrationRouter",description:"API reference for createPermissionIntegrationRouter"}},u={},p=[{value:"Remarks",id:"remarks",level:2}],l={toc:p};function f(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-permission-node"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-permission-node"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-permission-node.createpermissionintegrationrouter"}),(0,n.kt)("inlineCode",{parentName:"a"},"createPermissionIntegrationRouter"))),(0,n.kt)("p",null,"Create an express Router which provides an authorization route to allow integration between the permission backend and other Backstage backend plugins. Plugin owners that wish to support conditional authorization for their resources should add the router created by this function to their express app inside their ",(0,n.kt)("inlineCode",{parentName:"p"},"createRouter")," implementation."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),'createPermissionIntegrationRouter: <TResourceType extends string, TResource>(options: {\n    resourceType: TResourceType;\n    permissions?: Permission[] | undefined;\n    rules: PermissionRule<TResource, any, NoInfer<TResourceType>, import("@backstage/plugin-permission-common").PermissionRuleParams>[];\n    getResources: (resourceRefs: string[]) => Promise<(TResource | undefined)[]>;\n}) => express.Router\n')),(0,n.kt)("h2",o({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"To make this concrete, we can use the Backstage software catalog as an example. The catalog has conditional rules around access to specific ","_","entities","_"," in the catalog. The ","_","type","_"," of resource is captured here as ",(0,n.kt)("inlineCode",{parentName:"p"},"resourceType"),", a string identifier (",(0,n.kt)("inlineCode",{parentName:"p"},"catalog-entity")," in this example) that can be provided with permission definitions. This is merely a ","_","type","_"," to verify that conditions in an authorization policy are constructed correctly, not a reference to a specific resource."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"rules")," parameter is an array of ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-permission-node.permissionrule"}),"PermissionRule"),"s that introduce conditional filtering logic for resources; for the catalog, these are things like ",(0,n.kt)("inlineCode",{parentName:"p"},"isEntityOwner")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"hasAnnotation"),". Rules describe how to filter a list of resources, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"conditions")," returned allow these rules to be applied with specific parameters (such as 'group:default/team-a', or 'backstage.io/edit-url')."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"getResources")," argument should load resources based on a reference identifier. For the catalog, this is an . For other plugins, this can be any serialized format. This is used to construct the ",(0,n.kt)("inlineCode",{parentName:"p"},"createPermissionIntegrationRouter"),", a function to add an authorization route to your backend plugin. This function will be called by the ",(0,n.kt)("inlineCode",{parentName:"p"},"permission-backend")," when authorization conditions relating to this plugin need to be evaluated."))}f.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,s,c=o(e),u=1;u<arguments.length;u++){for(var p in a=Object(arguments[u]))t.call(a,p)&&(c[p]=a[p]);if(r){s=r(a);for(var l=0;l<s.length;l++)n.call(a,s[l])&&(c[s[l]]=a[s[l]])}}return c}},541535:(e,r,t)=>{var n=t(862525),o=60103,i=60106;var a=60109,s=60110,c=60112;var u=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),i=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),a=l("react.provider"),s=l("react.context"),c=l("react.forward_ref"),l("react.suspense"),u=l("react.memo"),p=l("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||m}function g(){}function b(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var v=b.prototype=new g;v.constructor=b,n(v,h.prototype),v.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,r,t){var n,i={},a=null,s=null;if(null!=r)for(n in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(a=""+r.key),r)O.call(r,n)&&!w.hasOwnProperty(n)&&(i[n]=r[n]);var c=arguments.length-2;if(1===c)i.children=t;else if(1<c){for(var u=Array(c),p=0;p<c;p++)u[p]=arguments[p+2];i.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===i[n]&&(i[n]=c[n]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g;function _(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function T(e,r,t,n,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===n?"."+_(c,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(R,"$&/")+"/"),T(a,r,t,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(R,"$&/")+"/")+e)),r.push(a)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=n+_(s=e[u],u);c+=T(s,r,t,p,a)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(s=e.next()).done;)c+=T(s=s.value,r,t,p=n+_(s,u++),a);else if("object"===s)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function C(e,r,t){if(null==e)return e;var n=[],o=0;return T(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function N(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function x(){var e=S.current;if(null===e)throw Error(d(321));return e}},827378:(e,r,t)=>{t(541535)}}]);