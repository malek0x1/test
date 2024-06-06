"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[7978],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),p=r,g=c["".concat(d,".").concat(p)]||c[p]||m[p]||l;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},67414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const l={},o="Autoload",i={unversionedId:"guides/load/autoload",id:"guides/load/autoload",title:"Autoload",description:"Datawarehouses are organized around schemas where tables are grouped.",source:"@site/docs/0300-guides/200-load/105-autoload.mdx",sourceDirName:"0300-guides/200-load",slug:"/guides/load/autoload",permalink:"/docs/next/guides/load/autoload",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0300-guides/200-load/105-autoload.mdx",tags:[],version:"current",sidebarPosition:105,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Tutorial",permalink:"/docs/next/guides/load/tutorial"},next:{title:"Load",permalink:"/docs/next/guides/load/load"}},d={},s=[{value:"Query the loaded tables",id:"query-the-loaded-tables",level:2},{value:"How autoload detects the format of the files",id:"how-autoload-detects-the-format-of-the-files",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"autoload"},"Autoload"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Datawarehouses are organized around schemas where tables are grouped.\nDepending on the database, a database ",(0,r.yg)("inlineCode",{parentName:"p"},"schema")," can be called ",(0,r.yg)("inlineCode",{parentName:"p"},"schema")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"catalog")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"dataset"),".\nIn starlake, we use the term ",(0,r.yg)("inlineCode",{parentName:"p"},"domain")," to designate  a ",(0,r.yg)("inlineCode",{parentName:"p"},"schema"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"catalog")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"dataset"),".")),(0,r.yg)("p",null,"The conventions used by the autoload command are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"files are stored under the incoming directory and named after the domain and table they are loaded into: ",(0,r.yg)("inlineCode",{parentName:"li"},"$SL_ROOT/incoming/<domain>/<table><suffix>.<extension>")),(0,r.yg)("li",{parentName:"ul"},"The target schema is named after the domain names"),(0,r.yg)("li",{parentName:"ul"},"The target tables are named after the file name without the extension or suffix."),(0,r.yg)("li",{parentName:"ul"},"The suffix is used to differentiate between files that are loaded in full ",(0,r.yg)("inlineCode",{parentName:"li"},"overwrite")," mode and those loaded in ",(0,r.yg)("inlineCode",{parentName:"li"},"append")," mode.\nFor example ",(0,r.yg)("inlineCode",{parentName:"li"},"order_20240228.json")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"order_line_20240228.csv")," are respectively loaded into the same table ",(0,r.yg)("inlineCode",{parentName:"li"},"order")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"order_line"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="directory structure example before running autoload"',title:'"directory',structure:!0,example:!0,before:!0,running:!0,'autoload"':!0},"incoming\n\u2514\u2500\u2500 starbake\n    \u251c\u2500\u2500 product.xml\n    \u251c\u2500\u2500 order_20240228.csv\n    \u2514\u2500\u2500 order_line_20240228.csv\nmetadata/load\n")),(0,r.yg)("br",null),(0,r.yg)("p",null,"After running the ",(0,r.yg)("inlineCode",{parentName:"p"},"autoload")," command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"starlake autoload\n")),(0,r.yg)("br",null),(0,r.yg)("p",null,"Since we did not specify the target datawarehouse but the local filesystem as the target, the directory structure will be updated as follows."),(0,r.yg)("p",null,"In real life, the target datawarehouse will be a database and the tables will be created in the target database."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="table schemas inferred from the directory structure"',title:'"table',schemas:!0,inferred:!0,from:!0,the:!0,directory:!0,'structure"':!0},"incoming\n\u2514\u2500\u2500 starbake\n    \u251c\u2500\u2500 product.xml\n    \u251c\u2500\u2500 order_20240228.csv\n    \u2514\u2500\u2500 order_line_20240228.csv\nmetadata/load\n\u2514\u2500\u2500 starbake\n    \u251c\u2500\u2500 _config.sl.yml\n    \u251c\u2500\u2500 product.sl.yml\n    \u2514\u2500\u2500 order.sl.yml\ndatasets/\n\u251c\u2500\u2500 archive         # files are moved to the archive directory after being loaded\n\u2502   \u2514\u2500\u2500 starbake\n\u251c\u2500\u2500 ingesting       # files are moved to the ingesting directory before being loaded\n\u2502   \u2514\u2500\u2500 starbake\n\u251c\u2500\u2500 replay          # invalid records that need to be replayed are moved\n\u2502   \u2514\u2500\u2500 starbake    # in the  replay directory\n\u251c\u2500\u2500 stage           # files are moved to the stage directory before being loaded\n\u2502   \u2514\u2500\u2500 starbake\n\u2514\u2500\u2500 unresolved      # files with names that do not match a valid pattern\n                    # are moved to the unresolved directory.\n\n")),(0,r.yg)("br",null),(0,r.yg)("p",null,"When running against Spark Locally, the tables are created in the ",(0,r.yg)("inlineCode",{parentName:"p"},"datasets")," directory.\nWhen running against a real datawarehouse, the tables are created in the target database."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="Extra files when running autoload against spark locally"',title:'"Extra',files:!0,when:!0,running:!0,autoload:!0,against:!0,spark:!0,'locally"':!0},"datasets/\n\u251c\u2500\u2500 starbake.db     # files are loaded as tables into the starbake domain\n\u2502   \u251c\u2500\u2500 order\n\u2502   \u251c\u2500\u2500 order_line\n\u2502   \u2514\u2500\u2500 product\n\u251c\u2500\u2500 audit.db        # audit tables are created in the audit schema\n\u2502   \u251c\u2500\u2500 audit\n\u2502   \u2514\u2500\u2500 rejected\n\n\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"_config.sl.yml")," file is a configuration file that contains the domain configuration and describe how the domain will be created in the target database.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"<table>.sl.yml")," file contains the table configuration and describes how files are parsed, validated and loaded into the target database."))),(0,r.yg)("h2",{id:"query-the-loaded-tables"},"Query the loaded tables"),(0,r.yg)("h2",{id:"how-autoload-detects-the-format-of-the-files"},"How autoload detects the format of the files"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"It expects the file to be named after the table it will be loaded into."),(0,r.yg)("li",{parentName:"ul"},"It uses the file extension to detect the format of the file. The supported formats are ",(0,r.yg)("inlineCode",{parentName:"li"},"csv"),",",(0,r.yg)("inlineCode",{parentName:"li"},"psv"),",",(0,r.yg)("inlineCode",{parentName:"li"},"dsv"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"json"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"xml")),(0,r.yg)("li",{parentName:"ul"},"It uses the first line of the file to detect the separator and the number of columns."),(0,r.yg)("li",{parentName:"ul"},"In the case of CSV files, it uses the first line of the file to detect the column names."),(0,r.yg)("li",{parentName:"ul"},"It uses the whole file content to detect the column types."),(0,r.yg)("li",{parentName:"ul"},"In the case of JSON file, if is a considered a JSON_ARRAY file if the first character is ",(0,r.yg)("inlineCode",{parentName:"li"},"[")," and a JSON file if the first character is ",(0,r.yg)("inlineCode",{parentName:"li"},"{"),"."),(0,r.yg)("li",{parentName:"ul"},"In the case of XML file, it uses the first line of the file to detect the root element and the number of columns.")),(0,r.yg)("p",null,"XML files are expected to have the following structure:"),(0,r.yg)("br",null),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},'<?xml> # optional xml declaration\n<root>\n    <row attr1="value1" >\n        <column1>value1</column1>\n        <column2>value2</column2>\n        ...\n    </row>\n<root>\n\n')))}m.isMDXComponent=!0}}]);