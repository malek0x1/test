"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[5043],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(r),y=a,m=d["".concat(p,".").concat(y)]||d[y]||u[y]||l;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},52383:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const l={sidebar_position:60,title:"cnxload"},i=void 0,o={unversionedId:"cli/cnxload",id:"cli/cnxload",title:"cnxload",description:"Synopsis",source:"@site/docs/0800-cli/cnxload.md",sourceDirName:"0800-cli",slug:"/cli/cnxload",permalink:"/docs/next/cli/cnxload",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0800-cli/cnxload.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60,title:"cnxload"},sidebar:"starlakeSidebar",previous:{title:"bq-info",permalink:"/docs/next/cli/bq-info"},next:{title:"compare",permalink:"/docs/next/cli/compare"}},p={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"synopsis"},"Synopsis"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"starlake cnxload ","[options]")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Load parquet file into JDBC Table."),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:null},"Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"--source_file:",(0,a.yg)("inlineCode",{parentName:"td"},"<value>")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("em",{parentName:"td"},"Required")),(0,a.yg)("td",{parentName:"tr",align:null},"Full Path to source file")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"--output_table:",(0,a.yg)("inlineCode",{parentName:"td"},"<value>")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("em",{parentName:"td"},"Required")),(0,a.yg)("td",{parentName:"tr",align:null},"JDBC Output Table")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"--options:",(0,a.yg)("inlineCode",{parentName:"td"},"<value>")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("em",{parentName:"td"},"Optional")),(0,a.yg)("td",{parentName:"tr",align:null},"Connection options eq for jdbc : driver, user, password, url, partitions, batchSize")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"--write_strategy:",(0,a.yg)("inlineCode",{parentName:"td"},"<value>")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("em",{parentName:"td"},"Optional")),(0,a.yg)("td",{parentName:"tr",align:null},"One of the write strategies: APPEND, OVERWRITE (see strategy types)")))))}u.isMDXComponent=!0}}]);