"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[7152],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,c=m["".concat(s,".").concat(g)]||m[g]||y[g]||l;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},45217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={sidebar_position:40,title:"bq-freshness"},i=void 0,o={unversionedId:"cli/bq-freshness",id:"cli/bq-freshness",title:"bq-freshness",description:"Synopsis",source:"@site/docs/0800-cli/bq-freshness.md",sourceDirName:"0800-cli",slug:"/cli/bq-freshness",permalink:"/docs/next/cli/bq-freshness",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0800-cli/bq-freshness.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,title:"bq-freshness"},sidebar:"starlakeSidebar",previous:{title:"bootstrap",permalink:"/docs/next/cli/bootstrap"},next:{title:"bq-info",permalink:"/docs/next/cli/bq-info"}},s={},p=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:p},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"synopsis"},"Synopsis"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"starlake bq-freshness ","[options]")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("h2",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--write:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"One of Set(OVERWRITE, APPEND)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--connection:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Connection to use")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--database:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"database / project id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--external:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Include external datasets defined in _config.sl.yml instead of using other parameters of this command ? Defaults to false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--tables:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"List of datasetName.tableName1,datasetName.tableName2 ...")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--accessToken:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Access token to use for authentication")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--persist:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Persist results ?")))))}y.isMDXComponent=!0}}]);