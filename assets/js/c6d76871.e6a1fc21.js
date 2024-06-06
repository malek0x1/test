"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[7597],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,y=m["".concat(p,".").concat(c)]||m[c]||g[c]||l;return a?n.createElement(y,i(i({ref:t},s),{},{components:a})):n.createElement(y,i({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},38733:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(58168),r=(a(96540),a(15680));const l={sidebar_position:80,title:"esload"},i=void 0,o={unversionedId:"cli/esload",id:"version-1.0.0/cli/esload",title:"esload",description:"Synopsis",source:"@site/versioned_docs/version-1.0.0/0800-cli/esload.md",sourceDirName:"0800-cli",slug:"/cli/esload",permalink:"/docs/1.0.0/cli/esload",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.0.0/0800-cli/esload.md",tags:[],version:"1.0.0",sidebarPosition:80,frontMatter:{sidebar_position:80,title:"esload"},sidebar:"starlakeSidebar",previous:{title:"dag-generate",permalink:"/docs/1.0.0/cli/dag-generate"},next:{title:"extract",permalink:"/docs/1.0.0/cli/extract"}},p={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:d},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"synopsis"},"Synopsis"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"starlake esload ","[options]")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("h2",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--timestamp:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Elasticsearch index timestamp suffix as in {@timestamp")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--id:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Elasticsearch Document Id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--mapping:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to Elasticsearch Mapping File")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--domain:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Required")),(0,r.yg)("td",{parentName:"tr",align:null},"Domain Name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--schema:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Required")),(0,r.yg)("td",{parentName:"tr",align:null},"Schema Name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--format:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Required")),(0,r.yg)("td",{parentName:"tr",align:null},"Dataset input file: parquet, json or json-array")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--dataset:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Input dataset path")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--conf:",(0,r.yg)("inlineCode",{parentName:"td"},"es.batch.size.entries=1000, es.batch.size.bytes=1mb...")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"esSpark configuration options. See ",(0,r.yg)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/elasticsearch/hadoop/current/configuration.html"},"https://www.elastic.co/guide/en/elasticsearch/hadoop/current/configuration.html"))))))}g.isMDXComponent=!0}}]);