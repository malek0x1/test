"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[6173],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(n),p=r,f=d["".concat(s,".").concat(p)]||d[p]||g[p]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(58168),r=(n(96540),n(15680));const i={},o="Customize the Transform",l={unversionedId:"guides/transform/config",id:"version-1.2.0/guides/transform/config",title:"Customize the Transform",description:"Add write strategies, partitioning, access control, and more to your transform tasks.",source:"@site/versioned_docs/version-1.2.0/0300-guides/300-transform/105-config.mdx",sourceDirName:"0300-guides/300-transform",slug:"/guides/transform/config",permalink:"/docs/guides/transform/config",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.2.0/0300-guides/300-transform/105-config.mdx",tags:[],version:"1.2.0",sidebarPosition:105,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Tutorial",permalink:"/docs/guides/transform/tutorial"},next:{title:"SQL Transforms",permalink:"/docs/guides/transform/sql"}},s={},m=[{value:"Conventions",id:"conventions",level:2},{value:"Write strategies",id:"write-strategies",level:2},{value:"Clustering and Partitioning",id:"clustering-and-partitioning",level:2},{value:"Access control",id:"access-control",level:2},{value:"Running a transform against a different database",id:"running-a-transform-against-a-different-database",level:2},{value:"Writing to a different database",id:"writing-to-a-different-database",level:2},{value:"Expectations",id:"expectations",level:2}],c={toc:m},d="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"customize-the-transform"},"Customize the Transform"),(0,r.yg)("p",null,"Add write strategies, partitioning, access control, and more to your transform tasks."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Datawarehouses are organized around schemas where tables are grouped.\nDepending on the database, a database ",(0,r.yg)("inlineCode",{parentName:"p"},"schema")," can be called ",(0,r.yg)("inlineCode",{parentName:"p"},"schema")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"catalog")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"dataset"),".\nIn starlake, we use the term ",(0,r.yg)("inlineCode",{parentName:"p"},"domain")," to designate  a ",(0,r.yg)("inlineCode",{parentName:"p"},"schema"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"catalog")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"dataset"),".")),(0,r.yg)("p",null,"Exactly like in the ",(0,r.yg)("inlineCode",{parentName:"p"},"load")," section, the ",(0,r.yg)("inlineCode",{parentName:"p"},"transform")," section is organized around the ",(0,r.yg)("inlineCode",{parentName:"p"},"domain")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"table")," concepts."),(0,r.yg)("p",null,"Transforming data consists in applying a series of operations to the data to make it ready for analysis.\nThe operations can be as simple as renaming a column or as complex as joining multiple tables together."),(0,r.yg)("p",null,"The transform takes SQL queries or python scripts as input and outputs to an existing or new table using a write strategy."),(0,r.yg)("p",null,"The way the materialization is done is defined in a YAML file next to the SQL or Python file.\nThe YAML file and the SQL file are named, by default, after the table they are transforming ."),(0,r.yg)("h2",{id:"conventions"},"Conventions"),(0,r.yg)("p",null,"The transform directory looks like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plaintext",metastring:'title="transform directory structure"',title:'"transform',directory:!0,'structure"':!0},"metadata/transform\n\u2514\u2500\u2500 <domain>>\n    \u251c\u2500\u2500 _config.sl.yml\n    \u251c\u2500\u2500 <table>.sl.yml\n    \u2514\u2500\u2500 <table>.sql\n")),(0,r.yg)("br",null),(0,r.yg)("p",null,"The SQL file contains only the SELECT statement that contain the transformations to apply before storing on the target table."),(0,r.yg)("p",null,"And the YAML file contains the configuration of the transformation. The sections below describe the content of the YAML file."),(0,r.yg)("p",null,"By default, your transforms tasks will be named after the table they are transforming. The result of the SQL file will be written to the table with the same name as the SQL file (",(0,r.yg)("inlineCode",{parentName:"p"},"<table>"),"in this case) in the schema with the same name as\nthe folder name (",(0,r.yg)("inlineCode",{parentName:"p"},"<domain>")," in this case)."),(0,r.yg)("p",null,"You can change this by specifying a different name in the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," field of the transform configuration file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'tile="metadata/transform/<domain>/custom.sl.yml"',tile:'"metadata/transform/<domain>/custom.sl.yml"'},"task:\n  domain: mydomain # will write to the mydomain schema whatever the name of the <domain> folder\n  table: mytable # will write to the mytable table whatever the name of the <table> in the filename\n  name: custom # this task name. Will be used to name the task when running from the CLI\n")),(0,r.yg)("h2",{id:"write-strategies"},"Write strategies"),(0,r.yg)("p",null,"If not specified, the result of the ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT"),"statement contained in the SQL file will be appended to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<table>")," located in ",(0,r.yg)("inlineCode",{parentName:"p"},"<domain>"),".\nYou may use any of these strategies. Below is an example of using the ",(0,r.yg)("inlineCode",{parentName:"p"},"overwrite")," strategy."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'tile="metadata/transform/<domain>/<table>.sl.yml"',tile:'"metadata/transform/<domain>/<table>.sl.yml"'},"task:\n  writeStrategy:\n    type: overwrite ## or any of the strategies defined [here](../load/write-strategies)\n")),(0,r.yg)("p",null,"Transform strategies work exactly like the load ",(0,r.yg)("a",{parentName:"p",href:"../load/write-strategies"},"write strategies"),"."),(0,r.yg)("h2",{id:"clustering-and-partitioning"},"Clustering and Partitioning"),(0,r.yg)("p",null,"You can specify the clustering and partitioning of the table in the transform configuration file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'tile="metadata/transform/<domain>/<table>.sl.yml"',tile:'"metadata/transform/<domain>/<table>.sl.yml"'},"task:\n  ...\n  clustering:\n    columns:\n      - column1\n      - column2\n  partitioning:\n    columns:\n      - column1\n      - column2\n")),(0,r.yg)("p",null,"Detailed explanation of the clustering and partitioning can be found ",(0,r.yg)("a",{parentName:"p",href:"../load/sink"},"here"),"."),(0,r.yg)("h2",{id:"access-control"},"Access control"),(0,r.yg)("p",null,"You can specify the access control of the table in the transform configuration file similar to the load configuration file ",(0,r.yg)("a",{parentName:"p",href:"../load/security"},"acccess control section"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'tile="metadata/transform/<domain>/<table>.sl.yml"',tile:'"metadata/transform/<domain>/<table>.sl.yml"'},'\ntask:\n    ...\n    acl:\n        - role: SELECT\n          grants:\n            - user@starlake.ai\n            - group\n    rls:\n      - name: "USA only"\n        predicate: "country = \'USA\'"\n        grants:\n          - "group:mygroup"\n    attributesDesc:\n        - name: "code0"\n          accessPolicy: <column_access_policy>\n\n    ...\n')),(0,r.yg)("h2",{id:"running-a-transform-against-a-different-database"},"Running a transform against a different database"),(0,r.yg)("p",null,"By default, the transform runs against the database referenced in the connectionRef in the ",(0,r.yg)("inlineCode",{parentName:"p"},"metadata/application.sl.yml")," file.\nYou can override this by specifying the ",(0,r.yg)("inlineCode",{parentName:"p"},"connectionRef")," in the transform configuration file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'tile="metadata/transform/<domain>/<table>.sl.yml"',tile:'"metadata/transform/<domain>/<table>.sl.yml"'},"\ntask:\n    ...\n    connectionRef: myConnection\n    ...\n\n")),(0,r.yg)("h2",{id:"writing-to-a-different-database"},"Writing to a different database"),(0,r.yg)("p",null,"You can even specify a different target database in the sink section of the transform configuration file."),(0,r.yg)("p",null,"This allows you to transform data from one database and write it to another database."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'tile="metadata/transform/<domain>/<table>.sl.yml"',tile:'"metadata/transform/<domain>/<table>.sl.yml"'},"\ntask:\n    ...\n    sink:\n      connectionRef: myOtherConnection\n      ...\n    ...\n\n")),(0,r.yg)("h2",{id:"expectations"},"Expectations"),(0,r.yg)("p",null,"You can specify the expectations of the table in the transform configuration file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'tile="metadata/transform/<domain>/<table>.sl.yml"',tile:'"metadata/transform/<domain>/<table>.sl.yml"'},"task:\n  ...\n  expectations:\n    - \"is_col_value_not_unique('id') => result(0) == 1\"\n")),(0,r.yg)("p",null,"Detailed explanation of the expectations can be found ",(0,r.yg)("a",{parentName:"p",href:"../load/expectations"},"here"),"."))}g.isMDXComponent=!0}}]);