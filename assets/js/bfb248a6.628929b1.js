"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[3394],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),h=r,y=c["".concat(d,".").concat(h)]||c[h]||m[h]||o;return t?n.createElement(y,l(l({ref:a},u),{},{components:t})):n.createElement(y,l({ref:a},u))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=h;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},56130:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(58168),r=(t(96540),t(15680));const o={},l="Tutorial",i={unversionedId:"guides/load/tutorial",id:"guides/load/tutorial",title:"Tutorial",description:"Load and validate, in one shot or incrementally, JSON, XML and CSV files into your datawarehouse using different write strategies.",source:"@site/docs/0300-guides/200-load/100-tutorial.mdx",sourceDirName:"0300-guides/200-load",slug:"/guides/load/tutorial",permalink:"/docs/next/guides/load/tutorial",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0300-guides/200-load/100-tutorial.mdx",tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Load",permalink:"/docs/next/category/load"},next:{title:"Autoload",permalink:"/docs/next/guides/load/autoload"}},d={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Autoload",id:"autoload",level:2},{value:"Query your datawarehouse",id:"query-your-datawarehouse",level:2},{value:"Manual load",id:"manual-load",level:2},{value:"Infer schema",id:"infer-schema",level:3},{value:"Stage before loading",id:"stage-before-loading",level:3},{value:"Load data into your datawarehouse",id:"load-data-into-your-datawarehouse",level:3},{value:"Query your loaded files in your datawarehouse",id:"query-your-loaded-files-in-your-datawarehouse",level:2}],u={toc:s},c="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(c,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"tutorial"},"Tutorial"),(0,r.yg)("p",null,"Load and validate, in one shot or incrementally, JSON, XML and CSV files into your datawarehouse using different write strategies."),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("p",null,"If you skipped the extract step above, copy the folder and its files present in ",(0,r.yg)("inlineCode",{parentName:"p"},"$SL_ROOT/sample-data/")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},"$SL_ROOT/incoming/")," folder."),(0,r.yg)("p",null,"The folder name ",(0,r.yg)("inlineCode",{parentName:"p"},"starbake")," will be translated in to a schema name (dataset in BigQuery) in the datawarehouse."),(0,r.yg)("p",null,"The files in the folder will be loaded into tables in the schema. Files will be loaded into tables with the same name in the schema.\nTables suffixed by a date/time will be loaded incrementally."),(0,r.yg)("h2",{id:"autoload"},"Autoload"),(0,r.yg)("p",null,"The autoload command is used to load the files in the default incoming folder into the datawarehouse."),(0,r.yg)("p",null,"The autoload command will:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"detect the file type based on its extension and content"),(0,r.yg)("li",{parentName:"ul"},"infer the schema of the target table"),(0,r.yg)("li",{parentName:"ul"},"stage the files"),(0,r.yg)("li",{parentName:"ul"},"load the files into the target tables")),(0,r.yg)("p",null,"Run the following command to autoload the files located the incoming folder."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"starlake autoload\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Starlake looks at files present in the $SL_ROOT/incoming folder."),(0,r.yg)("p",{parentName:"admonition"},"The default incoming folder may be changed by setting the SL_INCOMING environment variable.")),(0,r.yg)("p",null,"Once loaded, files are moved to the $SL_ROOT/datasets/archive folder if the SL_ARCHIVE environment variable is set to true (default).\nYou can replay them by moving them back to the incoming folder."),(0,r.yg)("h2",{id:"query-your-datawarehouse"},"Query your datawarehouse"),(0,r.yg)("p",null,"That's it you have loaded the data into your datawarehouse and just need to query it.\nTo query your database, open de DuckDB shell by running the following command:"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Install ",(0,r.yg)("a",{parentName:"p",href:"https://duckdb.org/docs/installation/"},"duckdb")," if you haven't done it yet.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'$ cd $SL_ROOT\n$ duckdb datasets/duckdb.db\nv0.10.0 20b1486d11\nEnter ".help" for usage hints.\n')),(0,r.yg)("p",null,"You can now query your datawarehouse using SQL."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"D show;\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 database \u2502  schema  \u2502      name       \u2502     column_names     \u2502                                           column_types                                            \u2502 temporary \u2502\n\u2502 varchar  \u2502 varchar  \u2502     varchar     \u2502      varchar[]       \u2502                                             varchar[]                                             \u2502  boolean  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 duckdb   \u2502 audit    \u2502 audit           \u2502 [JOBID, PATHS, DOM\u2026  \u2502 [VARCHAR, VARCHAR, VARCHAR, VARCHAR, BOOLEAN, BIGINT, BIGINT, BIGINT, TIMESTAMP, INTEGER, VARCH\u2026  \u2502 false     \u2502\n\u2502 duckdb   \u2502 audit    \u2502 rejected        \u2502 [JOBID, TIMESTAMP,\u2026  \u2502 [VARCHAR, TIMESTAMP, VARCHAR, VARCHAR, VARCHAR, VARCHAR]                                          \u2502 false     \u2502\n\u2502 duckdb   \u2502 starbake \u2502 order           \u2502 [customer_id, orde\u2026  \u2502 [BIGINT, BIGINT, VARCHAR, TIMESTAMP]                                                              \u2502 false     \u2502\n\u2502 duckdb   \u2502 starbake \u2502 order_line      \u2502 [order_id, product\u2026  \u2502 [BIGINT, BIGINT, BIGINT, DOUBLE]                                                                  \u2502 false     \u2502\n\u2502 duckdb   \u2502 starbake \u2502 product         \u2502 [category, cost, d\u2026  \u2502 [VARCHAR, DOUBLE, VARCHAR, VARCHAR, DOUBLE, BIGINT]                                               \u2502 false     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nD select * from starbake.order limit 5;\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 customer_id \u2502 order_id \u2502  status   \u2502        timestamp        \u2502\n\u2502    int64    \u2502  int64   \u2502  varchar  \u2502        timestamp        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502           6 \u2502        1 \u2502 Cancelled \u2502 2024-02-05 22:19:15.454 \u2502\n\u2502          23 \u2502        2 \u2502 Delivered \u2502 2024-01-02 11:44:37.59  \u2502\n\u2502          20 \u2502        3 \u2502 Delivered \u2502 2024-02-10 23:10:30.685 \u2502\n\u2502           6 \u2502        4 \u2502 Delivered \u2502 2024-01-17 19:31:22.917 \u2502\n\u2502          17 \u2502        5 \u2502 Pending   \u2502 2024-01-19 01:26:06.674 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("p",null,"To exit the DuckDB shell, type ",(0,r.yg)("inlineCode",{parentName:"p"},".quit")," and press Enter."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"D .quit\n$\n")),(0,r.yg)("h2",{id:"manual-load"},"Manual load"),(0,r.yg)("p",null,"The autoload command above is a shortcut to the infer-schema, stage and load commands below."),(0,r.yg)("h3",{id:"infer-schema"},"Infer schema"),(0,r.yg)("p",null,"This is done by running the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"starlake infer-schema --input-path incoming/starbake --clean\n")),(0,r.yg)("p",null,"Your metadata ",(0,r.yg)("inlineCode",{parentName:"p"},"load")," folder should now contain the folder ",(0,r.yg)("inlineCode",{parentName:"p"},"starbake")," with following files:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"products.sl.yml"),(0,r.yg)("li",{parentName:"ul"},"orders.sl.yml"),(0,r.yg)("li",{parentName:"ul"},"order_lines.yml"),(0,r.yg)("li",{parentName:"ul"},"_config.sl.yml")),(0,r.yg)("p",null,"The \xecnfer-schema` command has created a schema file for each of the files in the incoming folder trying to detect the schema of the files.\nThese schema files are used to load the data into the datawarehouse."),(0,r.yg)("p",null,"In a real life scenario, you may want to review the schema files and adjust them to your needs."),(0,r.yg)("h3",{id:"stage-before-loading"},"Stage before loading"),(0,r.yg)("p",null,"starlake can stage the files before loading them into the datawarehouse.\nThis is useful when your files arrive in a different folder from the one where they are loaded into the datawarehouse."),(0,r.yg)("p",null,"To move the incoming files to the stage folder. Run the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"starlake stage\n")),(0,r.yg)("h3",{id:"load-data-into-your-datawarehouse"},"Load data into your datawarehouse"),(0,r.yg)("p",null,"Run the following command to load the files in the incoming folder.\nSince we are target the DuckDB datawarehouse, we need to set the SL_ENV variable to ",(0,r.yg)("inlineCode",{parentName:"p"},"DUCKDB")," to activate the env.DUCKDB.sl.yml configuration file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nSL_ENV=DUCKDB starlake load\n\n")),(0,r.yg)("h2",{id:"query-your-loaded-files-in-your-datawarehouse"},"Query your loaded files in your datawarehouse"),(0,r.yg)("p",null,"That's it you have loaded the data into your datawarehouse and just need to query it.\nTo query your database, you can use the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'$ cd $SL_ROOT\n$ duckdb datasets/duckdb.db\nv0.10.0 20b1486d11\nEnter ".help" for usage hints.\nD show;\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 database \u2502  schema  \u2502      name       \u2502     column_names     \u2502                                           column_types                                            \u2502 temporary \u2502\n\u2502 varchar  \u2502 varchar  \u2502     varchar     \u2502      varchar[]       \u2502                                             varchar[]                                             \u2502  boolean  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 duckdb   \u2502 audit    \u2502 audit           \u2502 [JOBID, PATHS, DOM\u2026  \u2502 [VARCHAR, VARCHAR, VARCHAR, VARCHAR, BOOLEAN, BIGINT, BIGINT, BIGINT, TIMESTAMP, INTEGER, VARCH\u2026  \u2502 false     \u2502\n\u2502 duckdb   \u2502 audit    \u2502 rejected        \u2502 [JOBID, TIMESTAMP,\u2026  \u2502 [VARCHAR, TIMESTAMP, VARCHAR, VARCHAR, VARCHAR, VARCHAR]                                          \u2502 false     \u2502\n\u2502 duckdb   \u2502 starbake \u2502 order           \u2502 [customer_id, orde\u2026  \u2502 [BIGINT, BIGINT, VARCHAR, TIMESTAMP]                                                              \u2502 false     \u2502\n\u2502 duckdb   \u2502 starbake \u2502 order_line      \u2502 [order_id, product\u2026  \u2502 [BIGINT, BIGINT, BIGINT, DOUBLE]                                                                  \u2502 false     \u2502\n\u2502 duckdb   \u2502 starbake \u2502 product         \u2502 [category, cost, d\u2026  \u2502 [VARCHAR, DOUBLE, VARCHAR, VARCHAR, DOUBLE, BIGINT]                                               \u2502 false     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nD select * from starbake.order limit 5;\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 customer_id \u2502 order_id \u2502  status   \u2502        timestamp        \u2502\n\u2502    int64    \u2502  int64   \u2502  varchar  \u2502        timestamp        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502           6 \u2502        1 \u2502 Cancelled \u2502 2024-02-05 22:19:15.454 \u2502\n\u2502          23 \u2502        2 \u2502 Delivered \u2502 2024-01-02 11:44:37.59  \u2502\n\u2502          20 \u2502        3 \u2502 Delivered \u2502 2024-02-10 23:10:30.685 \u2502\n\u2502           6 \u2502        4 \u2502 Delivered \u2502 2024-01-17 19:31:22.917 \u2502\n\u2502          17 \u2502        5 \u2502 Pending   \u2502 2024-01-19 01:26:06.674 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nD .quit\n$\n')),(0,r.yg)("p",null,"Our raw files have been loaded into the datawarehouse and we can now start to ",(0,r.yg)("a",{parentName:"p",href:"../transform/tutorial"},"transform our data to build insights"),"."))}m.isMDXComponent=!0}}]);