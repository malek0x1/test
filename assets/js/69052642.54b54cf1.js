"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[6479],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(r),u=a,y=s["".concat(p,".").concat(u)]||s[u]||d[u]||l;return r?n.createElement(y,o(o({ref:t},m),{},{components:r})):n.createElement(y,o({ref:t},m))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const l={sidebar_position:70,title:"compare"},o=void 0,i={unversionedId:"cli/compare",id:"cli/compare",title:"compare",description:"Synopsis",source:"@site/docs/0800-cli/compare.md",sourceDirName:"0800-cli",slug:"/cli/compare",permalink:"/docs/next/cli/compare",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0800-cli/compare.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,title:"compare"},sidebar:"starlakeSidebar",previous:{title:"cnxload",permalink:"/docs/next/cli/cnxload"},next:{title:"console",permalink:"/docs/next/cli/console"}},p={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"synopsis"},"Synopsis"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"starlake compare ","[options]")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:null},"Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"--project1:",(0,a.yg)("inlineCode",{parentName:"td"},"<value>")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("em",{parentName:"td"},"Required")),(0,a.yg)("td",{parentName:"tr",align:null},"old project metadata path")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"--project2:",(0,a.yg)("inlineCode",{parentName:"td"},"<value>")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("em",{parentName:"td"},"Required")),(0,a.yg)("td",{parentName:"tr",align:null},"new project metadata path")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"--template:",(0,a.yg)("inlineCode",{parentName:"td"},"<value>")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("em",{parentName:"td"},"Optional")),(0,a.yg)("td",{parentName:"tr",align:null},"SSP / Mustache Template path")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"--output:",(0,a.yg)("inlineCode",{parentName:"td"},"<value>")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("em",{parentName:"td"},"Optional")),(0,a.yg)("td",{parentName:"tr",align:null},"Output path")))))}d.isMDXComponent=!0}}]);