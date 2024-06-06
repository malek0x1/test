"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[5572],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>s});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=p(a),y=r,s=m["".concat(d,".").concat(y)]||m[y]||c[y]||l;return a?n.createElement(s,i(i({ref:t},g),{},{components:a})):n.createElement(s,i({ref:t},g))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},80239:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={sidebar_position:130,title:"extract-data"},i=void 0,o={unversionedId:"cli/extract-data",id:"version-1.2.0/cli/extract-data",title:"extract-data",description:"Synopsis",source:"@site/versioned_docs/version-1.2.0/0800-cli/extract-data.md",sourceDirName:"0800-cli",slug:"/cli/extract-data",permalink:"/docs/cli/extract-data",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.2.0/0800-cli/extract-data.md",tags:[],version:"1.2.0",sidebarPosition:130,frontMatter:{sidebar_position:130,title:"extract-data"},sidebar:"starlakeSidebar",previous:{title:"extract-bq-schema",permalink:"/docs/cli/extract-bq-schema"},next:{title:"extract-schema",permalink:"/docs/cli/extract-schema"}},d={},p=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],g={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"synopsis"},"Synopsis"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"starlake extract-data ","[options]")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Extract data from any database defined in mapping file."),(0,r.yg)("p",null,"Extraction is done in parallel by default and use all the available processors. It can be changed using ",(0,r.yg)("inlineCode",{parentName:"p"},"parallelism")," CLI config.\nExtraction of a table can be divided in smaller chunk and fetched in parallel by defining partitionColumn and its numPartitions."),(0,r.yg)("h1",{id:"examples"},"Examples"),(0,r.yg)("p",null,"Objective: Extract data"),(0,r.yg)("p",null,"  starlake.sh extract-data --config my-config --outputDir $PWD/output"),(0,r.yg)("p",null,'Objective: Plan to fetch all data but with different scheduling (once a day for all and twice a day for some) with failure recovery like behavior.\nstarlake.sh extract-data --config my-config --outputDir $PWD/output --includeSchemas aSchema\n--includeTables table1RefreshedTwiceADay,table2RefreshedTwiceADay --ifExtractedBefore "2023-04-21 12:00:00"\n--clean'),(0,r.yg)("h2",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--config:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Required")),(0,r.yg)("td",{parentName:"tr",align:null},"Database tables & connection info")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--limit:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Limit number of records")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--numPartitions:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"parallelism level regarding partitionned tables")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--parallelism:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"parallelism level of the extraction process. By default equals to the available cores: 10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--ignoreExtractionFailure:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Don't fail extraction job when any extraction fails.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--clean:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Clean all files of table only when it is extracted.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--outputDir:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Required")),(0,r.yg)("td",{parentName:"tr",align:null},"Where to output csv files")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--incremental:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Export only new data since last extraction.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--ifExtractedBefore:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"DateTime to compare with the last beginning extraction dateTime. If it is before that date, extraction is done else skipped.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--includeSchemas:",(0,r.yg)("inlineCode",{parentName:"td"},"schema1,schema2")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Domains to include during extraction.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--excludeSchemas:",(0,r.yg)("inlineCode",{parentName:"td"},"schema1,schema2...")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Domains to exclude during extraction. if ",(0,r.yg)("inlineCode",{parentName:"td"},"include-domains")," is defined, this config is ignored.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--includeTables:",(0,r.yg)("inlineCode",{parentName:"td"},"table1,table2,table3...")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Schemas to include during extraction.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--excludeTables:",(0,r.yg)("inlineCode",{parentName:"td"},"table1,table2,table3...")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null},"Schemas to exclude during extraction. if ",(0,r.yg)("inlineCode",{parentName:"td"},"include-schemas")," is defined, this config is ignored.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--:",(0,r.yg)("inlineCode",{parentName:"td"},"<value>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional")),(0,r.yg)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);