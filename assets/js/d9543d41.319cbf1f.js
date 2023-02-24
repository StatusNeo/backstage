/*! For license information please see d9543d41.319cbf1f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[807748],{603905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},697933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});r(827378);var n=r(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={id:"plugin-permission-common",title:"@backstage/plugin-permission-common",description:"API Reference for @backstage/plugin-permission-common"},s=void 0,l={unversionedId:"reference/plugin-permission-common",id:"reference/plugin-permission-common",title:"@backstage/plugin-permission-common",description:"API Reference for @backstage/plugin-permission-common",source:"@site/../docs/reference/plugin-permission-common.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common",permalink:"/docs/reference/plugin-permission-common",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-common.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-common",title:"@backstage/plugin-permission-common",description:"API Reference for @backstage/plugin-permission-common"}},p={},m=[{value:"Classes",id:"classes",level:2},{value:"Enumerations",id:"enumerations",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2}],c={toc:m};function u(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-permission-common"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-permission-common"))),(0,n.kt)("p",null,"Isomorphic types and client for Backstage permissions and authorization"),(0,n.kt)("h2",a({},{id:"classes"}),"Classes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Class"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissionclient"}),"PermissionClient")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"An isomorphic client for requesting authorization for Backstage permissions.")))),(0,n.kt)("h2",a({},{id:"enumerations"}),"Enumerations"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Enumeration"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.authorizeresult"}),"AuthorizeResult")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The result of an authorization request.")))),(0,n.kt)("h2",a({},{id:"functions"}),"Functions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Function"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.createpermission"}),"createPermission(input)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Utility function for creating a valid ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.resourcepermission"}),"ResourcePermission"),", inferring the appropriate type and resource type parameter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.createpermission_1"}),"createPermission(input)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Utility function for creating a valid ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.basicpermission"}),"BasicPermission"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.iscreatepermission"}),"isCreatePermission(permission)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Check if a given permission is related to a create action.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.isdeletepermission"}),"isDeletePermission(permission)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Check if a given permission is related to a delete action.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.ispermission"}),"isPermission(permission, comparedPermission)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Check if the two parameters are equivalent permissions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.isreadpermission"}),"isReadPermission(permission)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Check if a given permission is related to a read action.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.isresourcepermission"}),"isResourcePermission(permission, resourceType)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Check if a given permission is a ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.resourcepermission"}),"ResourcePermission"),". When ",(0,n.kt)("code",null,"resourceType")," is supplied as the second parameter, also checks if the permission has the specified resource type.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.isupdatepermission"}),"isUpdatePermission(permission)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Check if a given permission is related to an update action.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.topermissionevaluator"}),"toPermissionEvaluator(permissionAuthorizer)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Convert ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissionauthorizer"}),"PermissionAuthorizer")," to ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissionevaluator"}),"PermissionEvaluator"),".")))),(0,n.kt)("h2",a({},{id:"interfaces"}),"Interfaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Interface"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissionauthorizer"}),"PermissionAuthorizer")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A client interacting with the permission backend can implement this authorizer interface.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissionevaluator"}),"PermissionEvaluator")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A client interacting with the permission backend can implement this evaluator interface.")))),(0,n.kt)("h2",a({},{id:"type-aliases"}),"Type Aliases"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type Alias"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.allofcriteria"}),"AllOfCriteria")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Represents a logical AND for the provided criteria.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.anyofcriteria"}),"AnyOfCriteria")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Represents a logical OR for the provided criteria.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.authorizepermissionrequest"}),"AuthorizePermissionRequest")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Request object for ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissionevaluator.authorize"}),"PermissionEvaluator.authorize()"),". If a ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.resourcepermission"}),"ResourcePermission")," is provided, it must include a corresponding ",(0,n.kt)("code",null,"resourceRef"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.authorizepermissionresponse"}),"AuthorizePermissionResponse")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Response object for ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissionevaluator.authorize"}),"PermissionEvaluator.authorize()"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.authorizerequestoptions"}),"AuthorizeRequestOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Options for authorization requests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.basicpermission"}),"BasicPermission")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A standard ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permission"}),"Permission")," with no additional capabilities or restrictions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.conditionalpolicydecision"}),"ConditionalPolicyDecision")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A conditional decision returned by the ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-node.permissionpolicy"}),"PermissionPolicy"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.definitivepolicydecision"}),"DefinitivePolicyDecision")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A definitive decision returned by the ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-node.permissionpolicy"}),"PermissionPolicy"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.discoveryapi"}),"DiscoveryApi")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"This is a copy of the core DiscoveryApi, to avoid importing core.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.evaluatepermissionrequest"}),"EvaluatePermissionRequest")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"An individual request sent to the permission backend.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.evaluatepermissionrequestbatch"}),"EvaluatePermissionRequestBatch")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A batch of requests sent to the permission backend.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.evaluatepermissionresponse"}),"EvaluatePermissionResponse")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"An individual response from the permission backend.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.evaluatepermissionresponsebatch"}),"EvaluatePermissionResponseBatch")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A batch of responses from the permission backend.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.evaluatorrequestoptions"}),"EvaluatorRequestOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Options for ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissionevaluator"}),"PermissionEvaluator")," requests. The Backstage identity token should be defined if available.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.identifiedpermissionmessage"}),"IdentifiedPermissionMessage")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A request with a UUID identifier, so that batched responses can be matched up with the original requests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.notcriteria"}),"NotCriteria")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Represents a negation of the provided criteria.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permission"}),"Permission")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A permission that can be checked through authorization.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissionattributes"}),"PermissionAttributes")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The attributes related to a given permission; these should be generic and widely applicable to all permissions in the system.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissionbase"}),"PermissionBase")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Generic type for building ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permission"}),"Permission")," types.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissioncondition"}),"PermissionCondition")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("p",null,"A condition returned with a CONDITIONAL authorization response."),(0,n.kt)("p",null,"Conditions are a reference to a rule defined by a plugin, and parameters to apply the rule. For example, a rule might be ",(0,n.kt)("code",null,"isOwner")," from the catalog-backend, and params may be a list of entity claims from a identity token."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissioncriteria"}),"PermissionCriteria")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Composes several ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissioncondition"}),"PermissionCondition"),"s as criteria with a nested AND/OR structure.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissionmessagebatch"}),"PermissionMessageBatch")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A batch of request or response items.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissionruleparam"}),"PermissionRuleParam")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A parameter to a permission rule.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissionruleparams"}),"PermissionRuleParams")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Types that can be used as parameters to permission rules.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.policydecision"}),"PolicyDecision")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A decision returned by the ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-node.permissionpolicy"}),"PermissionPolicy"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.querypermissionrequest"}),"QueryPermissionRequest")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Request object for ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissionevaluator.authorizeconditional"}),"PermissionEvaluator.authorizeConditional()"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.querypermissionresponse"}),"QueryPermissionResponse")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Response object for ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permissionevaluator.authorizeconditional"}),"PermissionEvaluator.authorizeConditional()"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.resourcepermission"}),"ResourcePermission")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"ResourcePermissions are ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-permission-common.permission"}),"Permission"),"s that can be authorized based on characteristics of a resource such a catalog entity.")))))}u.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,i){for(var o,s,l=a(e),p=1;p<arguments.length;p++){for(var m in o=Object(arguments[p]))r.call(o,m)&&(l[m]=o[m]);if(t){s=t(o);for(var c=0;c<s.length;c++)n.call(o,s[c])&&(l[s[c]]=o[s[c]])}}return l}},541535:(e,t,r)=>{var n=r(862525),a=60103,i=60106;var o=60109,s=60110,l=60112;var p=60115,m=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;a=c("react.element"),i=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),o=c("react.provider"),s=c("react.context"),l=c("react.forward_ref"),c("react.suspense"),p=c("react.memo"),m=c("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function g(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||f}function h(){}function N(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=g.prototype;var y=N.prototype=new h;y.constructor=N,n(y,g.prototype),y.isPureReactComponent=!0;var b={current:null},v=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,i={},o=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,n)&&!P.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var p=Array(l),m=0;m<l;m++)p[m]=arguments[m+2];i.children=p}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===i[n]&&(i[n]=l[n]);return{$$typeof:a,type:e,key:o,ref:s,props:i,_owner:b.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var w=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,n,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case i:l=!0}}if(l)return o=o(l=e),e=""===n?"."+A(l,0):n,Array.isArray(o)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),R(o,t,r,"",(function(e){return e}))):null!=o&&(j(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(w,"$&/")+"/")+e)),t.push(o)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var m=n+A(s=e[p],p);l+=R(s,t,r,m,o)}else if(m=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof m)for(e=m.call(e),p=0;!(s=e.next()).done;)l+=R(s=s.value,t,r,m=n+A(s,p++),o);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function C(e,t,r){if(null==e)return e;var n=[],a=0;return R(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function q(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function z(){var e=E.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);