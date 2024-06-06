"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[5828],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>g});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),u=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=u(e.components);return r.createElement(s.Provider,{value:a},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),y=u(t),m=n,g=y["".concat(s,".").concat(m)]||y[m]||d[m]||l;return t?r.createElement(g,i(i({ref:a},p),{},{components:t})):r.createElement(g,i({ref:a},p))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[y]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7095:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(58168),n=(t(96540),t(15680));const l={sidebar_position:1},i="What is Starlake ?",o={unversionedId:"intro",id:"intro",title:"What is Starlake ?",description:"Starlake is a configuration only Extract, Load, Transform and Orchestration Declarative Data Pipeline Tool.",source:"@site/docs/0000-intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/next/intro",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0000-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"starlakeSidebar",next:{title:"Installation",permalink:"/docs/next/install"}},s={},u=[{value:"Extract",id:"extract",level:2},{value:"Load",id:"load",level:2},{value:"Transform",id:"transform",level:2},{value:"Orchestrate",id:"orchestrate",level:2}],p={toc:u},y="wrapper";function d(e){let{components:a,...l}=e;return(0,n.yg)(y,(0,r.A)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"what-is-starlake-"},"What is Starlake ?"),(0,n.yg)("p",null,"Starlake is a configuration only Extract, Load, Transform and Orchestration Declarative Data Pipeline Tool.\nThe workflow below is a typical use case:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Extract your data as a set of Fixed Position, DSV (Delimiter-separated values) or JSON or XML files"),(0,n.yg)("li",{parentName:"ul"},"Define or infer the structure of each POSITION/DSV/JSON/XML file with a schema using YAML syntax"),(0,n.yg)("li",{parentName:"ul"},"Configure the loading process"),(0,n.yg)("li",{parentName:"ul"},"Start watching your data being available as Tables in your warehouse."),(0,n.yg)("li",{parentName:"ul"},"Build aggregates using SQL, Jinja and YAML configuration files.  ")),(0,n.yg)("p",null,"Starlake may be used indistinctly for all or any of these steps."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"extract")," step allows to export selective data from an existing SQL database to a set of CSV files."),(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"load")," step allows you to load text files, to ingest FIXED-WIDTH/CSV/JSON/XML files as strong typed records stored as parquet files or DWH tables (eq. Google BigQuery) or whatever sink you configured"),(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"transform")," step allows to join loaded data and save them as parquet files, DWH tables or Elasticsearch indices")),(0,n.yg)("p",null,"The figure below illustrates the typical data lifecycle in Starlake.\n",(0,n.yg)("img",{src:t(33123).A,width:"1467",height:"960"})),(0,n.yg)("p",null,"Input file schemas, ingestion rules, transformation and indexing definitions used in the steps above are all defined in YAML files."),(0,n.yg)("h2",{id:"extract"},"Extract"),(0,n.yg)("p",null,"Starlake provides a simple yet powerful  way to extract, in full or incrementally, tables from your database. "),(0,n.yg)("p",null,"Using parallel load through a JDBC connection and configuring the incremental fields in the schema, you may extract your data incrementally.\nOnce copied to the cloud provider of your choice, the data is available for further processing by the Load and Transform steps."),(0,n.yg)("p",null,"The extraction module support two modes:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Native mode: Native database scripts are generated and must be run against your database."),(0,n.yg)("li",{parentName:"ul"},"JDBC mode: In this mode, Starlake will spawn a number of threads to extract the data. We were able to extract an average of 1 million records per second using the AdventureWorks database on Postgres.")),(0,n.yg)("h2",{id:"load"},"Load"),(0,n.yg)("p",null,"Usually, data loading is done by writing hand made custom parsers that transform input files into datasets of records."),(0,n.yg)("p",null,"Starlake aims at automating this parsing task by making data loading purely declarative."),(0,n.yg)("p",null,"The major benefits the Starlake data loader bring to your warehouse are:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Eliminates manual coding for data loading"),(0,n.yg)("li",{parentName:"ul"},"Assign metadata to each dataset"),(0,n.yg)("li",{parentName:"ul"},"Expose data loading metrics and history"),(0,n.yg)("li",{parentName:"ul"},"Transform text files to strongly typed records without coding"),(0,n.yg)("li",{parentName:"ul"},"Support semantic types by allowing you to set type constraints on the incoming data"),(0,n.yg)("li",{parentName:"ul"},"Apply privacy to specific fields"),(0,n.yg)("li",{parentName:"ul"},"Apply security at load time"),(0,n.yg)("li",{parentName:"ul"},"Preview your data lifecycle and publish in SVG format"),(0,n.yg)("li",{parentName:"ul"},"Support multiple data sources and sinks"),(0,n.yg)("li",{parentName:"ul"},"Starlake is a very, very simple piece of software to administer")),(0,n.yg)("p",null,"Starlake loads the data using an embedded Spark engine. Please note that this mode does not require setting up a Spark cluster, it run out of the box in the starlake docker image."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"For some datawarehouses like BigQuery, Starlake can make use of the datawarehouse load API to load the data.\nThis is the fastest way to load the data but comes at the expense of limited features.")),(0,n.yg)("p",null,"The table below list the features supported by each mode, the one that meet your requirements depend on the quality of your source and on the audit level you wish to have:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Import from any source"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"CSV"),(0,n.yg)("li",{parentName:"ul"},"CSV with multichar separator"),(0,n.yg)("li",{parentName:"ul"},"JSON Lines"),(0,n.yg)("li",{parentName:"ul"},"JSON Array"),(0,n.yg)("li",{parentName:"ul"},"XML"),(0,n.yg)("li",{parentName:"ul"},"POSITION"),(0,n.yg)("li",{parentName:"ul"},"Parquet"),(0,n.yg)("li",{parentName:"ul"},"Avro"),(0,n.yg)("li",{parentName:"ul"},"Kafka"),(0,n.yg)("li",{parentName:"ul"},"Any JDBC database"),(0,n.yg)("li",{parentName:"ul"},"Any Spark Source"),(0,n.yg)("li",{parentName:"ul"},"Any char encoding including chinese, arabic, celtic ..."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Transform on load"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"rename fields"),(0,n.yg)("li",{parentName:"ul"},"add new field (scripted fields)"),(0,n.yg)("li",{parentName:"ul"},"Apply SQL transform on any field"),(0,n.yg)("li",{parentName:"ul"},"Validate type"),(0,n.yg)("li",{parentName:"ul"},"Validate pattern (semantic types)"),(0,n.yg)("li",{parentName:"ul"},"Ignore some fields"),(0,n.yg)("li",{parentName:"ul"},"remove fields after transformation"),(0,n.yg)("li",{parentName:"ul"},"parse date and time fields in any format"),(0,n.yg)("li",{parentName:"ul"},"keep filename in target table for traceability"),(0,n.yg)("li",{parentName:"ul"},"Partition target table"),(0,n.yg)("li",{parentName:"ul"},"Append Mode"),(0,n.yg)("li",{parentName:"ul"},"Overwrite Mode"),(0,n.yg)("li",{parentName:"ul"},"Merge Mode (SCD2, Remove duplicates, overwrite by key / partition ...)"),(0,n.yg)("li",{parentName:"ul"},"Run Pre or Post Load SQL scripts"),(0,n.yg)("li",{parentName:"ul"},"Report Data quality using expectations"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Save to any sink"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Parquet"),(0,n.yg)("li",{parentName:"ul"},"Delta Lake"),(0,n.yg)("li",{parentName:"ul"},"Databricks"),(0,n.yg)("li",{parentName:"ul"},"Google BigQuery"),(0,n.yg)("li",{parentName:"ul"},"Amazon Redshift"),(0,n.yg)("li",{parentName:"ul"},"Snowflake"),(0,n.yg)("li",{parentName:"ul"},"Apache Hive"),(0,n.yg)("li",{parentName:"ul"},"Any JDBC database"),(0,n.yg)("li",{parentName:"ul"},"Any Spark Sink"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Secure your tables"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Apply ACL"),(0,n.yg)("li",{parentName:"ul"},"Apply RLS"),(0,n.yg)("li",{parentName:"ul"},"Apply Tags"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Audit / Error Handling Levels"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"File level"),(0,n.yg)("li",{parentName:"ul"},"Column level reporting"),(0,n.yg)("li",{parentName:"ul"},"Produce replay file"),(0,n.yg)("li",{parentName:"ul"},"Handle unlimited number of errors")))),(0,n.yg)("h2",{id:"transform"},"Transform"),(0,n.yg)("p",null,"Simply write standard SQL et describe how you want the result to be stored in a YAML description file.\nThe major benefits Starlake bring to your Data transformation jobs are:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Write transformations in regular SQL as SELECT statements only,\nStarlake will convert them to INSERT INTO, MERGE INTO or UPDATE statements depending on the write strategy you choose. ")),(0,n.yg)("h2",{id:"orchestrate"},"Orchestrate"),(0,n.yg)("p",null,"No more need to write complex ETL scripts, just write your SQL and YAML configuration files and let Starlake do the rest on your favorite scheduler."),(0,n.yg)("p",null,"Starlake provides a simple yet powerful way to orchestrate your data pipeline.\nDependencies between tasks are inferred from SQL statements and YAML configuration files.\nStarlake will generate a Directed Acyclic Graph (DAG) of your data pipeline and execute in the right order\nthe tasks that are ready to run through your own Airflow or Dagster scheduler."))}d.isMDXComponent=!0},33123:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/workflow-4c42599b0de7f282b5121082daf9df19.png"}}]);