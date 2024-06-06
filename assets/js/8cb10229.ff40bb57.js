"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[7706],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),y=o,g=s["".concat(c,".").concat(y)]||s[y]||d[y]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},17725:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(58168),o=(r(96540),r(15680));const a={},i="Tutorial",l={unversionedId:"guides/deploy/tutorial",id:"guides/deploy/tutorial",title:"Tutorial",description:"Running your project",source:"@site/docs/0300-guides/600-deploy/100-tutorial.mdx",sourceDirName:"0300-guides/600-deploy",slug:"/guides/deploy/tutorial",permalink:"/docs/next/guides/deploy/tutorial",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0300-guides/600-deploy/100-tutorial.mdx",tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Deploy",permalink:"/docs/next/category/deploy"},next:{title:"Configuration",permalink:"/docs/next/category/configuration"}},c={},u=[{value:"Running your project",id:"running-your-project",level:2},{value:"Orchestrating the ETL pipeline",id:"orchestrating-the-etl-pipeline",level:2}],p={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(s,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"tutorial"},"Tutorial"),(0,o.yg)("h2",{id:"running-your-project"},"Running your project"),(0,o.yg)("p",null,"Deploying your project is as simple as copying your metadata folder to a cloud storage bucket\nand run any of the load / transform command from the ",(0,o.yg)("inlineCode",{parentName:"p"},"starlake")," docker container running on any cloud provider."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Make sure you use environment variables to abstract your project\nfrom the target environment as described ",(0,o.yg)("a",{parentName:"p",href:"../../configuration/environment"},"here")),(0,o.yg)("p",{parentName:"admonition"},"In your starlake docker container make the SL_ENV and SL_ROOT env variables are set to the correct values.")),(0,o.yg)("h2",{id:"orchestrating-the-etl-pipeline"},"Orchestrating the ETL pipeline"),(0,o.yg)("p",null,"To run on your orchestrator, just copy the contents of the ",(0,o.yg)("inlineCode",{parentName:"p"},"metadta/dags/generated")," folder to your orchestrator's DAGs folder."))}d.isMDXComponent=!0}}]);