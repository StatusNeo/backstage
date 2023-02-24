/*! For license information please see 480e7b0c.35f98607.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[622759],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,h=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},199925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"Announcing Backstage",author:"Stefan \xc5lund, Spotify",authorURL:"http://twitter.com/stalund",authorImageURL:"https://pbs.twimg.com/profile_images/121166861/6919c047c0d0edaace78c3009b28e917-user-full-200-130.generated_400x400.jpg"},s=void 0,l={permalink:"/blog/2020/03/16/announcing-backstage",source:"@site/../microsite/blog/2020-03-16-announcing-backstage.md",title:"Announcing Backstage",description:"What is Backstage?",date:"2020-03-16T00:00:00.000Z",formattedDate:"March 16, 2020",tags:[],readingTime:3.515,hasTruncateMarker:!0,authors:[{name:"Stefan \xc5lund, Spotify",url:"http://twitter.com/stalund",imageURL:"https://pbs.twimg.com/profile_images/121166861/6919c047c0d0edaace78c3009b28e917-user-full-200-130.generated_400x400.jpg"}],frontMatter:{title:"Announcing Backstage",author:"Stefan \xc5lund, Spotify",authorURL:"http://twitter.com/stalund",authorImageURL:"https://pbs.twimg.com/profile_images/121166861/6919c047c0d0edaace78c3009b28e917-user-full-200-130.generated_400x400.jpg"},prevItem:{title:"What the heck is Backstage anyway?",permalink:"/blog/2020/03/18/what-is-backstage"}},c={authorsImageUrls:[void 0]},u=[{value:"What is Backstage?",id:"what-is-backstage",level:2},{value:"As simple as writing a plugin.",id:"as-simple-as-writing-a-plugin",level:2},{value:"The Spotify story",id:"the-spotify-story",level:2},{value:"Project roadmap",id:"project-roadmap",level:2}],p={toc:u};function f(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"what-is-backstage"}),"What is Backstage?"),(0,n.kt)("p",null,"Backstage is Spotify's open source platform for building developer portals."),(0,n.kt)("p",null,"It\u2019s the first open source infrastructure platform by Spotify that allows you to focus on building your application instead of reinventing the button. With an elegant and unified, yet opinionated UI/UX for all your tooling and infrastructure, Backstage enables engineers to get up and running faster, which ultimately makes their lives easier and more productive."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:r(436164).Z,width:"1552",height:"989"})),(0,n.kt)("h2",o({},{id:"as-simple-as-writing-a-plugin"}),"As simple as writing a plugin."),(0,n.kt)("p",null,"Backstage makes it easy to unify all of your infrastructure tooling, services, and documentation under a single, easy-to-use interface. So your engineers will always know where to find the right tool for the job. And engineers will already know how to use each tool \u2014 because everything uses the same, familiar UI."),(0,n.kt)("p",null,"The number of open source infrastructure projects and tools ",(0,n.kt)("a",o({parentName:"p"},{href:"https://landscape.cncf.io/"}),"landscape")," is exploding. As the sheer volume of projects increases, companies and their engineers find it increasingly difficult to keep track and adopt all of the tooling fast enough to keep pace. Most of the tools were built by a different individual, team, or company, which means that there is no single UI/UX, and simply getting the tool installed and started can be a painful challenge- let alone wrangling each tool to work with one another within your existing ecosystem. Due to varying qualities and the varying UI/UX of each open source project, we'd like to introduce Backstage as a best-of-breed platform for developers to use... all in service of ensuring a flawless, consistent user experience."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"illustration",src:r(919920).Z,width:"1354",height:"865"})),(0,n.kt)("h2",o({},{id:"the-spotify-story"}),"The Spotify story"),(0,n.kt)("p",null,"A best-in-class developer portal \u2014 from a music company? Since the very beginning, Spotify has been known for its agile, autonomous engineering culture. More than music, we\u2019re a tech company that has always put engineers first, empowering our developers with the ability to innovate quickly and at scale. Backstage is the natural result of that focus."),(0,n.kt)("p",null,"Since adopting Backstage internally at Spotify, we\u2019ve seen a 55% decrease in onboarding time for our engineers (as measured by time until 10th pull request). Over 280 engineering teams inside Spotify are using Backstage to manage 2,000+ backend services, 300+ websites, 4,000+ data pipelines, and 200+ mobile features."),(0,n.kt)("h2",o({},{id:"project-roadmap"}),"Project roadmap"),(0,n.kt)("p",null,"We created Backstage about 4 years ago, and today, we\u2019ve decided to share the goodness with the greater engineering community. While our version of Backstage has had the benefit of time to mature and evolve, the first iteration of our open source version is still nascent. I wanted to take a moment to share with you what our vision for Backstage OSS is so that 1. users and our community gain a better understanding of where we\u2019re envisioning the product to go and more importantly, 2. you can provide input and feedback so that together, we can create a better infrastructure experience for developers everywhere."),(0,n.kt)("p",null,"We are envisioning three phases of the project and we have already begun work on various aspects of these phases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Phase 1:")," Extensible frontend platform (now) - You will be able to easily create a single consistent UI layer for your internal infrastructure and tools. A set of reusable UX patterns and components help ensure a consistent experience between tools.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Phase 2:")," Manage your stuff (next 2-3 months) - Manage anything from microservices to software components to infrastructure and your service catalog. Regardless of whether you want to create a new library, view service deployment status in Kubernetes, or check the test coverage for a website -- Backstage will provide all of those tools - and many more - in a single developer portal.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Phase 3:")," Ecosystem (later) - Everyone's infrastructure stack is different. By fostering a vibrant community of contributors we hope to provide an ecosystem of Open Source plugins/integrations that allows you to pick the tools that match your stack."))),(0,n.kt)("p",null,"Our vision for Backstage is for it to become the trusted standard toolbox (read: UI layer) for the open source infrastructure landscape. Think of it like Kubernetes for developer experience. We realize this is an ambitious goal. We can\u2019t do it alone. If this sounds interesting or you'd like to help us shape our product vision, we'd love to talk. You can email us directly: ",(0,n.kt)("a",o({parentName:"p"},{href:"mailto:backstage-interest@spotify.com"}),"backstage-interest@spotify.com"),"."))}f.isMDXComponent=!0},436164:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/blog_1-2f866d19821c1dfe6e4a1f6baf879715.png"},919920:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/illustration-99a9e6cef4809097daeb356e602ceeef.svg"},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,l=o(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))r.call(i,u)&&(l[u]=i[u]);if(t){s=t(i);for(var p=0;p<s.length;p++)n.call(i,s[p])&&(l[s[p]]=i[s[p]])}}return l}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var i=60109,s=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function m(){}function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var v=b.prototype=new m;v.constructor=b,n(v,y.prototype),v.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,a={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===n?"."+P(l,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),x(i,t,r,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=n+P(s=e[c],c);l+=x(s,t,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=x(s=s.value,t,r,u=n+P(s,c++),i);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function U(e,t,r){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function B(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function I(){var e=E.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);