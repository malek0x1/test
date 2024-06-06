"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[8743],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>y});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=d(a),p=n,y=m["".concat(s,".").concat(p)]||m[p]||f[p]||l;return a?r.createElement(y,i(i({ref:t},g),{},{components:a})):r.createElement(y,i({ref:t},g))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},70896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(58168),n=(a(96540),a(15680));const l={},i="Filesystem",o={unversionedId:"configuration/filesystem",id:"version-1.1.0/configuration/filesystem",title:"Filesystem",description:"A filesystem is the location where datasets and Starlake Data Pipeline metadata used for ingestion are stored.",source:"@site/versioned_docs/version-1.1.0/0500-configuration/0120-filesystem.mdx",sourceDirName:"0500-configuration",slug:"/configuration/filesystem",permalink:"/docs/1.1.0/configuration/filesystem",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.1.0/0500-configuration/0120-filesystem.mdx",tags:[],version:"1.1.0",sidebarPosition:120,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Connections",permalink:"/docs/1.1.0/configuration/connections"},next:{title:"Load",permalink:"/docs/1.1.0/configuration/load"}},s={},d=[],g={toc:d},m="wrapper";function f(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"filesystem"},"Filesystem"),(0,n.yg)("p",null,"A filesystem is the location where datasets and Starlake Data Pipeline metadata used for ingestion are stored."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"On premise this reference the folder where datasets and metadata are stored, eq.",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"On a local filesystem: file://"),(0,n.yg)("li",{parentName:"ul"},"On a HDFS: hdfs://localhost:9000"))),(0,n.yg)("li",{parentName:"ul"},"In the cloud:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"On Google Cloud Platform: gs://my-bucket"),(0,n.yg)("li",{parentName:"ul"},"On Microsoft Azure: abfs://",(0,n.yg)("a",{parentName:"li",href:"mailto:my-bucket@starlake.dfs.core.windows.net"},"my-bucket@starlake.dfs.core.windows.net")),(0,n.yg)("li",{parentName:"ul"},"On Amazon Web Service: s3a://my_bucket")))),(0,n.yg)("p",null,"By default, Starlake expect metadata in the /tmp/metadata folder and will store ingested datasets in the /tmp/datasets folder.\nBelow is how the folders look like by default for the provided ",(0,n.yg)("inlineCode",{parentName:"p"},"userguide")," sample."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    /userguide\n    |-- datasets (Root folder of ingested datasets)\n    |   |-- accepted (Root folder of all valid records)\n    |   |   |-- hr (domain name as specified in the name attribute of the /tmp/metadata/hr.yml)\n    |   |   |   `-- sellers (Schema name as specified in the /tmp/metadata/hr.yml)\n    |   |   |       |-- _SUCCESS\n    |   |   |       `-- part-00000-292c081b-7291-4797-b935-17bc9409b03b.snappy.parquet\n    |   |   `-- sales\n    |   |       |-- customers (valid records for this schema as specified in the /tmp/metadata/sales.yml)\n    |   |       |   |-- _SUCCESS\n    |   |       |   `-- part-00000-562501a1-34ef-4b94-b527-8e93bcbb5f89.snappy.parquet\n    |   |       `-- orders (valid records for this schema as specified in the /tmp/metadata/sales.yml)\n    |   |           |-- _SUCCESS\n    |   |           `-- part-00000-92544093-4ae2-4a98-8df8-a5aba19a1b27.snappy.parquet\n    |   |-- archive (Source files as found in the incoming folder are saved here after processing)\n    |   |   |-- hr (Domain name)\n    |   |   |   `-- sellers-2018-01-01.json\n    |   |   `-- sales\n    |   |       |-- customers-2018-01-01.psv\n    |   |       `-- orders-2018-01-01.csv\n    |   |-- business\n    |   |   |-- hr\n    |   |   `-- sales\n    |   |-- metrics\n    |   |   |-- discrete\n    |   |   |-- continuous\n    |   |   `-- frequencies\n    |   |-- ingesting (Temporary folder used during ingestion by Starlake)\n    |   |   |-- hr (One temporary subfolder / domain)\n    |   |   `-- sales\n    |   |-- pending (Source files are copied here from the incoming folder before processing)\n    |   |   |-- hr (one folder / domain)\n    |   |   `-- sales\n    |   |-- rejected (invalid records in processed datasets are stored here)\n    |   |   |-- hr (Domain name)\n    |   |   |   `-- sellers (Schema name)\n    |   |   |       |-- _SUCCESS\n    |   |   |       `-- part-00000-aef2dde6-af24-4e20-ad88-3e5238916e57.snappy.parquet\n    |   |   `-- sales\n    |   |       |-- customers\n    |   |       |   |-- _SUCCESS\n    |   |       |   `-- part-00000-e6fa5ff9-ad29-4e5f-a5ff-549dd331fafd.snappy.parquet\n    |   |       `-- orders\n    |   |           |-- _SUCCESS\n    |   |           `-- part-00000-6f7ba5d4-960b-4ac6-a123-87a7ab2d212f.snappy.parquet\n    |   `-- unresolved (Files found in the incoming folder but do not match any schema)\n    |       `-- hr\n    |           `-- dummy.json\n    `-- metadata (Root of metadata files)\n        |-- load (all domain definition files are located in this folder)\n        |   |-- hr/_config.sl.yml (One definition file / domain)\n        |   `-- hr/sales.yml\n        `-- assertions (All assertion definitions go here)\n        |   |-- default.sl.yml (Predefined assertion definitions)\n        |   `-- assertions.sl.yml (assertion definitions defined here are accessible throughout the project)\n        `-- types (All semantic types are defined here)\n        |   |-- default.sl.yml (Default semantic types)\n        |   `-- types.sl.yml (User defined semantic types, overwrite default ones)\n        `-- transform (All transform jobs go here)\n            `-- hr/sales_by_name.sql (Compute sales by )\n")),(0,n.yg)("p",null,"Starlake Data Pipeline allows you to store datasets and metadata in two different filesystems. Thi is useful if you want to define a specific lifecycle for your datasets.\nAlmost all options are customizable through environnement variables.\nThe main env vars are described below, you may change default settings. The exhaustive list of predefined env vars can be found in the src/main/resource/reference.conf file."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"HOCON Variable"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Env variable"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default Value"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"root"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_ROOT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"/tmp"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Root directory of the datasets and metadata files in the defined filesystem above")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"datasets"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_DATASETS"),(0,n.yg)("td",{parentName:"tr",align:"left"},'"{{root}}/datasets"'),(0,n.yg)("td",{parentName:"tr",align:"left"},"Folder where datasets are located in the datasets ",(0,n.yg)("inlineCode",{parentName:"td"},"file-system"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"metadata"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_METADATA"),(0,n.yg)("td",{parentName:"tr",align:"left"},'"{{root}}/metadata" otherwise'),(0,n.yg)("td",{parentName:"tr",align:"left"},"Folder where metadata are located in the metadata ",(0,n.yg)("inlineCode",{parentName:"td"},"metadata-file-system"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"area.pending"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_AREA_PENDING"),(0,n.yg)("td",{parentName:"tr",align:"left"},"pending"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Source files are copied here from the incoming folder before processing")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"area.unresolved"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_AREA_UNRESOLVED"),(0,n.yg)("td",{parentName:"tr",align:"left"},"unresolved"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Files found in the incoming folder but do not match any schema")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"area.archive"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_AREA_ARCHIVE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"archive"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Source files as found in the incoming folder are saved here after processing")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"area.ingesting"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_AREA_INGESTING"),(0,n.yg)("td",{parentName:"tr",align:"left"},"ingesting"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Temporary folder used during ingestion by Starlake")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"area.accepted"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_AREA_ACCEPTED"),(0,n.yg)("td",{parentName:"tr",align:"left"},"accepted"),(0,n.yg)("td",{parentName:"tr",align:"left"},"root folder of all valid records")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"area.rejected"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_AREA_REJECTED"),(0,n.yg)("td",{parentName:"tr",align:"left"},"rejected"),(0,n.yg)("td",{parentName:"tr",align:"left"},"invalid records in processed datasets are stored here")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"area.business"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_AREA_BUSINESS"),(0,n.yg)("td",{parentName:"tr",align:"left"},"business"),(0,n.yg)("td",{parentName:"tr",align:"left"},"root folder for all datasets produced by autojobs")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"archive"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_ARCHIVE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"true"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Should we archive the incoming files once they are ingested")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"default-write-format"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_DEFAULT_WRITE_FORMAT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"parquet"),(0,n.yg)("td",{parentName:"tr",align:"left"},"How accepted records are stored (parquet / orc / json / csv / avro)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"default-rejected-write-format"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_DEFAULT_REJECTED_WRITE_FORMAT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"parquet"),(0,n.yg)("td",{parentName:"tr",align:"left"},"How rejected records are stored (parquet / orc / json / csv / avro)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"default-audit-write-format"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_DEFAULT_AUDIT_WRITE_FORMAT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"parquet"),(0,n.yg)("td",{parentName:"tr",align:"left"},"How audit is stored (parquet / orc / json / csv / avro)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hive"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_HIVE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"true"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Should we create external Hive tables for ingested files ?")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"analyze"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_ANALYZE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"true"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Should we computed basic statistics ? (requires SL_HIVE to be set to true)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"launcher"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_LAUNCHER"),(0,n.yg)("td",{parentName:"tr",align:"left"},"simple"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Which orchestrator to use ? Valid values are airflow or simple (direct call)")))),(0,n.yg)("p",null,"To make sure, the same schema is not ingested by two concurrent Starlake processes, Starlake Data Pipeline uses a file lock when necessary."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"HOCON Variable"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Env variable"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default Value"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"lock.path"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_LOCK_PATH"),(0,n.yg)("td",{parentName:"tr",align:"left"},'"{{root}}/locks"'),(0,n.yg)("td",{parentName:"tr",align:"left"},"Root folder where lock file is created")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"lock.timeout"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SL_LOCK_TIMEOUT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-1"),(0,n.yg)("td",{parentName:"tr",align:"left"},"How long to wait for the file lock to be available (in seconds)")))))}f.isMDXComponent=!0}}]);