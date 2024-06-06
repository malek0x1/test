"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[6502],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),y=r,g=m["".concat(p,".").concat(y)]||m[y]||u[y]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},89555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const l={sidebar_position:310,title:"transform"},i=void 0,o={unversionedId:"cli/transform",id:"version-1.2.0/cli/transform",title:"transform",description:"Synopsis",source:"@site/versioned_docs/version-1.2.0/0800-cli/transform.md",sourceDirName:"0800-cli",slug:"/cli/transform",permalink:"/docs/cli/transform",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.2.0/0800-cli/transform.md",tags:[],version:"1.2.0",sidebarPosition:310,frontMatter:{sidebar_position:310,title:"transform"},sidebar:"starlakeSidebar",previous:{title:"test",permalink:"/docs/cli/test"},next:{title:"validate",permalink:"/docs/cli/validate"}},p={},s=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"synopsis"},"Synopsis"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"starlake transform ","[options]")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("h2",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--name:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Required")),(0,r.yg)("td",{parentName:"tr",align:null},"Task Name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--compile:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Return final query only")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--interactive:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Run query without sinking the result")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--reload:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Reload YAML  files. Used in server mode")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--truncate:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Force table to be truncated before insert. Default value is false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--recursive:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Execute all dependencies recursively. Default value is false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--test:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Should we run this transform as a test ? Default value is false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--accessToken:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Access token to use for authentication")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--options:",(0,r.yg)("inlineCode",{parentName:"td"},"k1=v1,k2=v2...")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional, Unbounded")),(0,r.yg)("td",{parentName:"tr",align:null},"Job arguments to be used as substitutions")))))}u.isMDXComponent=!0}}]);