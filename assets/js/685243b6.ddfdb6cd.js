"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[8547],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>u});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=s(r),y=a,u=d["".concat(p,".").concat(y)]||d[y]||c[y]||l;return r?n.createElement(u,i(i({ref:t},g),{},{components:r})):n.createElement(u,i({ref:t},g))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},78275:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const l={sidebar_position:90,title:"dag-generate"},i=void 0,o={unversionedId:"cli/dag-generate",id:"version-1.2.0/cli/dag-generate",title:"dag-generate",description:"Synopsis",source:"@site/versioned_docs/version-1.2.0/0800-cli/dag-generate.md",sourceDirName:"0800-cli",slug:"/cli/dag-generate",permalink:"/docs/cli/dag-generate",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.2.0/0800-cli/dag-generate.md",tags:[],version:"1.2.0",sidebarPosition:90,frontMatter:{sidebar_position:90,title:"dag-generate"},sidebar:"starlakeSidebar",previous:{title:"console",permalink:"/docs/cli/console"},next:{title:"esload",permalink:"/docs/cli/esload"}},p={},s=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],g={toc:s},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"synopsis"},"Synopsis"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"starlake dag-generate ","[options]")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:null},"Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"--outputDir:",(0,a.yg)("inlineCode",{parentName:"td"},"<value>")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("em",{parentName:"td"},"Optional")),(0,a.yg)("td",{parentName:"tr",align:null},"Path for saving the resulting DAG file(s).")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"--clean:",(0,a.yg)("inlineCode",{parentName:"td"},"<value>")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("em",{parentName:"td"},"Optional")),(0,a.yg)("td",{parentName:"tr",align:null},"Clean Resulting DAG file output first ?")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"--tags:",(0,a.yg)("inlineCode",{parentName:"td"},"<value>")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("em",{parentName:"td"},"Optional")),(0,a.yg)("td",{parentName:"tr",align:null},"Generate for these tags only")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"--tasks:",(0,a.yg)("inlineCode",{parentName:"td"},"<value>")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("em",{parentName:"td"},"Optional")),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to generate DAG file(s) for tasks or not")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"--domains:",(0,a.yg)("inlineCode",{parentName:"td"},"<value>")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("em",{parentName:"td"},"Optional")),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to generate DAG file(s) for domains or not")))))}c.isMDXComponent=!0}}]);