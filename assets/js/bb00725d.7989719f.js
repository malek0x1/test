"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[9887],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),y=d(n),u=r,m=y["".concat(p,".").concat(u)]||y[u]||g[u]||l;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(58168),r=(n(96540),n(15680));const l={sidebar_position:260,title:"table-dependencies"},i=void 0,o={unversionedId:"cli/table-dependencies",id:"version-1.1.0/cli/table-dependencies",title:"table-dependencies",description:"Synopsis",source:"@site/versioned_docs/version-1.1.0/0800-cli/table-dependencies.md",sourceDirName:"0800-cli",slug:"/cli/table-dependencies",permalink:"/docs/1.1.0/cli/table-dependencies",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.1.0/0800-cli/table-dependencies.md",tags:[],version:"1.1.0",sidebarPosition:260,frontMatter:{sidebar_position:260,title:"table-dependencies"},sidebar:"starlakeSidebar",previous:{title:"site",permalink:"/docs/1.1.0/cli/site"},next:{title:"transform",permalink:"/docs/1.1.0/cli/transform"}},p={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:d},y="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"synopsis"},"Synopsis"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"starlake table-dependencies ","[options]")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Generate GraphViz files from Domain / Schema YAML files"),(0,r.yg)("h2",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--output:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Where to save the generated dot file ? Output to the console by default")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--all-attrs:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Should we include all attributes in the dot file or only the primary and foreign keys ? true by default")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--reload:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Should we reload the domains first ?")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--svg:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Should we generate SVG files ?")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--png:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Should we generate PNG files ?")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--related:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Should we include only entities with relations to others ? false by default")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--tables:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Which tables should we include in the dot file ?")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--all:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Include all tables in the dot file ? All by default")))))}g.isMDXComponent=!0}}]);