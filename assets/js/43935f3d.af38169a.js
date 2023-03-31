/*! For license information please see 43935f3d.af38169a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[39745],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},529205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>u});n(827378);var r=n(603905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"utility-apis",title:"Utility APIs",description:"Backstage Utility APIs"},s=void 0,l={unversionedId:"api/utility-apis",id:"api/utility-apis",title:"Utility APIs",description:"Backstage Utility APIs",source:"@site/../docs/api/utility-apis.md",sourceDirName:"api",slug:"/api/utility-apis",permalink:"/docs/api/utility-apis",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/api/utility-apis.md",tags:[],version:"current",frontMatter:{id:"utility-apis",title:"Utility APIs",description:"Backstage Utility APIs"},sidebar:"docs",previous:{title:"Figma",permalink:"/docs/dls/figma"},next:{title:"Package Index",permalink:"/docs/reference/"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Consuming APIs",id:"consuming-apis",level:2},{value:"Supplying APIs",id:"supplying-apis",level:2},{value:"API Factories",id:"api-factories",level:3},{value:"Registering API Factories",id:"registering-api-factories",level:2},{value:"Core APIs",id:"core-apis",level:3},{value:"Plugin APIs",id:"plugin-apis",level:3},{value:"App APIs",id:"app-apis",level:3},{value:"Custom implementations of Utility APIs",id:"custom-implementations-of-utility-apis",level:2},{value:"Defining custom Utility APIs",id:"defining-custom-utility-apis",level:2},{value:"Architecture",id:"architecture",level:2}],f={toc:u};function d(e){var{components:t}=e,p=o(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,p),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Backstage Plugins strive to be self-contained, with as much functionality as\npossible residing within the plugin itself and its backend APIs. There will\nhowever always be a need for plugins to communicate outside of its boundaries,\nboth with other plugins and the app itself."),(0,r.kt)("p",null,"Backstage provides two primary methods for plugins to communicate across their\nboundaries in client-side code. The first one being the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.createplugin"},(0,r.kt)("inlineCode",{parentName:"a"},"createPlugin"))," API along with the\nextensions that it can provide, and the second one being Utility APIs. While the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.createplugin"},(0,r.kt)("inlineCode",{parentName:"a"},"createPlugin"))," API is focused on\nthe initialization plugins and the app, the Utility APIs provide ways for\nplugins to communicate during their entire life cycle."),(0,r.kt)("h2",{id:"consuming-apis"},"Consuming APIs"),(0,r.kt)("p",null,"Each Utility API is tied to an ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.apiref"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiRef")),"\ninstance, which is a global singleton object without any additional state or\nfunctionality, its only purpose is to reference Utility APIs.\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.apiref"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiRef")),"s are created using\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.createapiref"},(0,r.kt)("inlineCode",{parentName:"a"},"createApiRef")),", which is exported\nby ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api"},(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/core-plugin-api")),". There are also\nmany predefined Utility APIs in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api"},(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/core-plugin-api")),", and they're all\nexported with a name of the pattern ",(0,r.kt)("inlineCode",{parentName:"p"},"*ApiRef"),", for example\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.errorapiref"},(0,r.kt)("inlineCode",{parentName:"a"},"errorApiRef")),"."),(0,r.kt)("p",null,"To access one of the Utility APIs inside a React component, use the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.useapi"},(0,r.kt)("inlineCode",{parentName:"a"},"useApi"))," hook exported by\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api"},(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/core-plugin-api")),", or the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.withapis"},(0,r.kt)("inlineCode",{parentName:"a"},"withApis"))," HOC if you prefer class\ncomponents. For example, the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.errorapi"},(0,r.kt)("inlineCode",{parentName:"a"},"ErrorApi"))," can be accessed like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { useApi, errorApiRef } from '@backstage/core-plugin-api';\n\nexport const MyComponent = () => {\n  const errorApi = useApi(errorApiRef);\n\n  // Signal to the app that something went wrong, and display the error to the user.\n  const handleError = error => {\n    errorApi.post(error);\n  };\n\n  // the rest of the component ...\n};\n")),(0,r.kt)("p",null,"Note that there is no explicit type given for\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.errorapi"},(0,r.kt)("inlineCode",{parentName:"a"},"ErrorApi")),". This is because the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.errorapiref"},(0,r.kt)("inlineCode",{parentName:"a"},"errorApiRef"))," has the type\nembedded, and ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.useapi"},(0,r.kt)("inlineCode",{parentName:"a"},"useApi"))," is able to infer\nthe type."),(0,r.kt)("p",null,"Also note that consuming Utility APIs is not limited to plugins, it can be done\nfrom any component inside Backstage, including the ones in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api"},(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/core-plugin-api")),". The only\nrequirement is that they are beneath the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppProvider")," in the react tree."),(0,r.kt)("h2",{id:"supplying-apis"},"Supplying APIs"),(0,r.kt)("h3",{id:"api-factories"},"API Factories"),(0,r.kt)("p",null,"APIs are registered in the form of\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.apifactory"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiFactory"))," instances, which encapsulate\nthe process of instantiating an API. It is a collection of three things: the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.apiref"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiRef"))," of the API to instantiate, a\nlist of all required dependencies, and a factory function that returns a new API\ninstance."),(0,r.kt)("p",null,"For example, this is the default\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.apifactory"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiFactory"))," for the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.errorapi"},(0,r.kt)("inlineCode",{parentName:"a"},"ErrorApi")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"createApiFactory({\n  api: errorApiRef,\n  deps: { alertApi: alertApiRef },\n  factory: ({ alertApi }) => {\n    const errorApi = new ErrorAlerter(alertApi, new ErrorApiForwarder());\n    UnhandledErrorForwarder.forward(errorApi, { hidden: false });\n    return errorApi;\n  },\n});\n")),(0,r.kt)("p",null,"In this example the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.errorapiref"},(0,r.kt)("inlineCode",{parentName:"a"},"errorApiRef")),"\nis our API, which encapsulates the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.errorapi"},(0,r.kt)("inlineCode",{parentName:"a"},"ErrorApi"))," type. The\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.alertapiref"},(0,r.kt)("inlineCode",{parentName:"a"},"alertApiRef"))," is our single\ndependency, which we give the name ",(0,r.kt)("inlineCode",{parentName:"p"},"alertApi"),", and is then passed on to the\nfactory function, which returns an implementation of the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.errorapi"},(0,r.kt)("inlineCode",{parentName:"a"},"ErrorApi")),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.createapifactory"},(0,r.kt)("inlineCode",{parentName:"a"},"createApiFactory")),"\nfunction is a thin wrapper that enables TypeScript type inference. You may\nnotice that there are no type annotations in the above example, and that is\nbecause we're able to infer all types from the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.apiref"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiRef")),"s. TypeScript will make sure\nthat the return value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"factory")," function matches the type embedded in\n",(0,r.kt)("inlineCode",{parentName:"p"},"api"),"'s ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.apiref"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiRef")),", in this case the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.errorapi"},(0,r.kt)("inlineCode",{parentName:"a"},"ErrorApi")),". It will also match the\ntypes between the ",(0,r.kt)("inlineCode",{parentName:"p"},"deps")," and the parameters of the ",(0,r.kt)("inlineCode",{parentName:"p"},"factory")," function, again\nusing the type embedded within the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.apiref"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiRef")),"s."),(0,r.kt)("h2",{id:"registering-api-factories"},"Registering API Factories"),(0,r.kt)("p",null,"The responsibility for adding Utility APIs to a Backstage app lies in three\ndifferent locations: the Backstage core library, each plugin included in the\napp, and the app itself."),(0,r.kt)("h3",{id:"core-apis"},"Core APIs"),(0,r.kt)("p",null,"Starting with the Backstage core library, it provides implementations for all of\nthe core APIs. The core APIs are the ones exported by\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api"},(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/core-plugin-api")),", such as the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.errorapiref"},(0,r.kt)("inlineCode",{parentName:"a"},"errorApiRef"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.configapiref"},(0,r.kt)("inlineCode",{parentName:"a"},"configApiRef")),"."),(0,r.kt)("p",null,"The core APIs are loaded for any app created with\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/app-defaults.createapp"},(0,r.kt)("inlineCode",{parentName:"a"},"createApp"))," from\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/app-defaults"},(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/core-plugin-api")),", which means that\nthere is no step that needs to be taken to include these APIs in an app."),(0,r.kt)("h3",{id:"plugin-apis"},"Plugin APIs"),(0,r.kt)("p",null,"In addition to the core APIs, plugins can define and export their own APIs.\nWhile doing so they should usually also provide default implementations of their\nown APIs, for example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog")," plugin exports ",(0,r.kt)("inlineCode",{parentName:"p"},"catalogApiRef"),", and also\nsupplies a default ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.apifactory"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiFactory"))," of\nthat API using the ",(0,r.kt)("inlineCode",{parentName:"p"},"CatalogClient"),". There is one restriction to plugin-provided\nAPI Factories: plugins may not supply factories for core APIs, trying to do so\nwill cause the app to refuse to start."),(0,r.kt)("p",null,"Plugins supply their APIs through the ",(0,r.kt)("inlineCode",{parentName:"p"},"apis")," option of\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.createplugin"},(0,r.kt)("inlineCode",{parentName:"a"},"createPlugin")),", for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export const techdocsPlugin = createPlugin({\n  id: 'techdocs',\n  apis: [\n    createApiFactory({\n      api: techdocsStorageApiRef,\n      deps: { configApi: configApiRef },\n      factory({ configApi }) {\n        return new TechDocsStorageApi({\n          apiOrigin: configApi.getString('techdocs.storageUrl'),\n        });\n      },\n    }),\n  ],\n});\n")),(0,r.kt)("h3",{id:"app-apis"},"App APIs"),(0,r.kt)("p",null,"Lastly, the app itself is the final point where APIs can be added, and what has\nthe final say in what APIs will be loaded at runtime. The app may override the\nfactories for any of the core or plugin APIs, with the exception of the config,\napp theme, and identity APIs. These are static APIs that are tied into the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/app-defaults.createapp"},(0,r.kt)("inlineCode",{parentName:"a"},"createApp"))," implementation, and\ntherefore not possible to override."),(0,r.kt)("p",null,"Overriding APIs is useful for apps that want to switch out behavior to tailor it\nto their environment. In some cases plugins may also export multiple\nimplementations of the same API, where they each have their own different\nrequirements on for example backend storage and surrounding environment."),(0,r.kt)("p",null,"Supplying APIs to the app works just like for plugins:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const app = createApp({\n  apis: [\n    /* ApiFactories */\n  ],\n  // ... other options\n});\n")),(0,r.kt)("p",null,"A common pattern is to export a list of all APIs from ",(0,r.kt)("inlineCode",{parentName:"p"},"apis.ts"),", next to\n",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx"),". See the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/packages/app/src/apis.ts"},"example app in this repo"),"\nfor an example."),(0,r.kt)("h2",{id:"custom-implementations-of-utility-apis"},"Custom implementations of Utility APIs"),(0,r.kt)("p",null,"Defining a custom implementation of a utility API is easy, you simply need to\nexport a class that ",(0,r.kt)("inlineCode",{parentName:"p"},"implements")," the target API, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export class IgnoringErrorApi implements ErrorApi {\n  post(error: ErrorApiError, context?: ErrorApiErrorContext) {\n    // ignore error\n  }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"IgnoringErrorApi")," would then be imported in the app, and wired up like\nthis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const app = createApp({\n  apis: [\n    /* ApiFactories */\n    createApiFactory(errorApiRef, new IgnoringErrorApi()),\n\n    // OR\n    // If your API has dependencies, you use the object form\n    createApiFactory({\n      api: errorApiRef,\n      deps: { configApi: configApiRef },\n      factory({ configApi }) {\n        return new IgnoringErrorApi({\n          reportingUrl: configApi.getString('error.reportingUrl'),\n        });\n      },\n    }),\n  ],\n  // ... other options\n});\n")),(0,r.kt)("p",null,"Note that the above line will cause an error if ",(0,r.kt)("inlineCode",{parentName:"p"},"IgnoreErrorApi")," does not fully\nimplement the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.errorapi"},(0,r.kt)("inlineCode",{parentName:"a"},"ErrorApi")),", as it is\nchecked by the type embedded in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.errorapiref"},(0,r.kt)("inlineCode",{parentName:"a"},"errorApiRef"))," at compile time."),(0,r.kt)("h2",{id:"defining-custom-utility-apis"},"Defining custom Utility APIs"),(0,r.kt)("p",null,"Plugins are free to define their own Utility APIs. Simply define the TypeScript\ninterface for the API, and create an\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.apiref"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiRef"))," using\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.createapiref"},(0,r.kt)("inlineCode",{parentName:"a"},"createApiRef"))," exported from\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api"},(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/core-plugin-api")),". Also be sure to\nprovide at least one implementation of the API, and to declare a default factory\nfor the API in ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.createplugin"},(0,r.kt)("inlineCode",{parentName:"a"},"createPlugin")),"."),(0,r.kt)("p",null,"Custom Utility APIs can be either public or private, which is up to the plugin\nto choose. Private APIs do not expose an external API surface, and it's\ntherefore possible to make breaking changes to the API without affecting other\nusers of the plugin. If an API is made public however, it opens up for other\nplugins to make use of the API, and it also makes it possible for users for your\nplugin to override the API in the app. It is however important to maintain\nbackwards compatibility of public APIs, as you may otherwise break apps that are\nusing your plugin."),(0,r.kt)("p",null,"To make an API public, simply export the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.apiref"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiRef"))," of the API, and any associated\ntypes. To make an API private, just avoid exporting the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.apiref"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiRef")),", but still be sure to supply a\ndefault factory to ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.createplugin"},(0,r.kt)("inlineCode",{parentName:"a"},"createPlugin")),"."),(0,r.kt)("p",null,"Private APIs are useful for plugins that want to depend on other APIs outside of\nReact components, but not have to expose an entire API surface to maintain. When\nusing private APIs, it is fine to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"typeof")," of an implementing class as\nthe type parameter passed to\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.createapiref"},(0,r.kt)("inlineCode",{parentName:"a"},"createApiRef")),", while public APIs\nshould always define a separate TypeScript interface type."),(0,r.kt)("p",null,"Plugins may depend on APIs from other plugins, both in React components and as\ndependencies to API factories. Do however be sure to not cause circular\ndependencies between plugins."),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.apiref"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiRef"))," instances mentioned above\nprovide a point of indirection between consumers and producers of Utility APIs.\nIt allows for plugins and components to depend on APIs in a type-safe way,\nwithout having a direct reference to a concrete implementation of the APIs. The\nApps are also given a lot of flexibility in what implementations to provide. As\nlong as they adhere to the contract established by an\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/core-plugin-api.apiref"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiRef")),", they are free to choose any\nimplementation they want."),(0,r.kt)("p",null,"The figure below shows the relationship between"),(0,r.kt)("span",{class:"textGreen",className:"textGreen"},"different Apps"),", that provide",(0,r.kt)("span",{class:"textBlue",className:"textBlue"}," different implementations")," of the",(0,r.kt)("span",{class:"textPurple",className:"textPurple"}," FooApi"),".",(0,r.kt)("span",{class:"textYellow",className:"textYellow"}," Components")," within Plugins then access the",(0,r.kt)("span",{class:"textPurple",className:"textPurple"}," FooApi")," via the",(0,r.kt)("span",{class:"textRed",className:"textRed"}," fooApiRef"),".",(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Figure showing the relationship between utility APIs, the apps that provide them, and the plugins that consume them",src:n(619462).Z,width:"296",height:"382"})),(0,r.kt)("p",null,"The current method for connecting Utility API providers and consumers is via the\nReact tree using an ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiProvider"),", which is added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppProvider")," of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"App"),". In the future there may potentially be more ways to do this, in ways that\nare not tied to React. A design goal of the Utility APIs was to not have them\ndirectly tied to React."),(0,r.kt)("p",null,"The indirection provided by Utility APIs also makes it straightforward to test\ncomponents that depend on APIs, and to provide a standard common development\nenvironment for plugins. A proper test wrapper with mocked API implementations\nis not yet ready, but it will be provided as a part of\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/test-utils"},(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/test-utils")),". It will provide mocked\nvariants of APIs, with additional methods for asserting a component's\ninteraction with the API."),(0,r.kt)("p",null,"The common development environment for plugins is included in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/dev-utils"},(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/dev-utils")),", where the exported\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/dev-utils.createdevapp"},(0,r.kt)("inlineCode",{parentName:"a"},"createDevApp"))," function creates an\napplication with implementations for all core APIs already present. Contrary to\nthe method for wiring up Utility API implementations in an app created with\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/app-defaults.createapp"},(0,r.kt)("inlineCode",{parentName:"a"},"createApp")),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/dev-utils.createdevapp"},(0,r.kt)("inlineCode",{parentName:"a"},"createDevApp"))," uses automatic dependency\ninjection. This is to make it possible to replace any API implementation, and\nhaving that be reflected in dependents of that API."))}d.isMDXComponent=!0},619462:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/utility-apis-fig1-9c402cdfb600310e725056dd4802b351.svg"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,i){for(var o,p,s=a(e),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))n.call(o,c)&&(s[c]=o[c]);if(t){p=t(o);for(var u=0;u<p.length;u++)r.call(o,p[u])&&(s[p[u]]=o[p[u]])}}return s}},541535:(e,t,n)=>{var r=n(862525),a=60103,i=60106;var o=60109,p=60110,s=60112;var l=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),i=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),o=u("react.provider"),p=u("react.context"),s=u("react.forward_ref"),u("react.suspense"),l=u("react.memo"),c=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function y(){}function k(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var A=k.prototype=new y;A.constructor=k,r(A,g.prototype),A.isPureReactComponent=!0;var b={current:null},v=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,i={},o=null,p=null;if(null!=t)for(r in void 0!==t.ref&&(p=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,r)&&!P.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:a,type:e,key:o,ref:p,props:i,_owner:b.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var I=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,r,o){var p=typeof e;"undefined"!==p&&"boolean"!==p||(e=null);var s=!1;if(null===e)s=!0;else switch(p){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case i:s=!0}}if(s)return o=o(s=e),e=""===r?"."+C(s,0):r,Array.isArray(o)?(n="",null!=e&&(n=e.replace(I,"$&/")+"/"),O(o,t,n,"",(function(e){return e}))):null!=o&&(w(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(I,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var c=r+C(p=e[l],l);s+=O(p,t,n,c,o)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),l=0;!(p=e.next()).done;)s+=O(p=p.value,t,n,c=r+C(p,l++),o);else if("object"===p)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function j(e,t,n){if(null==e)return e;var r=[],a=0;return O(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function E(){var e=R.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);