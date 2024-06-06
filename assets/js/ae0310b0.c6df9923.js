"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[8527],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>p});var r=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},g=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,p=u["".concat(s,".").concat(d)]||u[d]||y[d]||n;return a?r.createElement(p,l(l({ref:t},g),{},{components:a})):r.createElement(p,l({ref:t},g))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12066:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(58168),i=(a(96540),a(15680));const n={slug:"rls-cls-big-query",title:"Column  and Row Level Security in BigQuery",author:"Hayssam Saleh",author_title:"Starlake Core Team Member",author_url:"https://www.linkedin.com/in/hayssams/",author_image_url:"https://s.gravatar.com/avatar/04aa2a859a66b52787bcba8c36beba8c.png",tags:["Spark","BigQuery","Dataproc","Google Cloud","ETL","Starlake"]},l=void 0,o={permalink:"/blog/rls-cls-big-query",editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/blog/2022-02-15-rls-cls-big-query.mdx",source:"@site/blog/2022-02-15-rls-cls-big-query.mdx",title:"Column  and Row Level Security in BigQuery",description:"Data exposition strategies",date:"2022-02-15T00:00:00.000Z",formattedDate:"February 15, 2022",tags:[{label:"Spark",permalink:"/blog/tags/spark"},{label:"BigQuery",permalink:"/blog/tags/big-query"},{label:"Dataproc",permalink:"/blog/tags/dataproc"},{label:"Google Cloud",permalink:"/blog/tags/google-cloud"},{label:"ETL",permalink:"/blog/tags/etl"},{label:"Starlake",permalink:"/blog/tags/starlake"}],readingTime:2.815,hasTruncateMarker:!1,authors:[{name:"Hayssam Saleh",title:"Starlake Core Team Member",url:"https://www.linkedin.com/in/hayssams/",imageURL:"https://s.gravatar.com/avatar/04aa2a859a66b52787bcba8c36beba8c.png"}],frontMatter:{slug:"rls-cls-big-query",title:"Column  and Row Level Security in BigQuery",author:"Hayssam Saleh",author_title:"Starlake Core Team Member",author_url:"https://www.linkedin.com/in/hayssams/",author_image_url:"https://s.gravatar.com/avatar/04aa2a859a66b52787bcba8c36beba8c.png",tags:["Spark","BigQuery","Dataproc","Google Cloud","ETL","Starlake"]},prevItem:{title:"Starlake OSS - Bringing Declarative Programming to Data Engineering and Analytics",permalink:"/blog/starlake-oss"},nextItem:{title:"Handling Dynamic Partitioning and Merge with Spark on BigQuery",permalink:"/blog/spark-big-query-partitioning"}},s={authorsImageUrls:[void 0]},c=[{value:"Data exposition strategies",id:"data-exposition-strategies",level:2},{value:"BigQuery Row Level Security",id:"bigquery-row-level-security",level:2},{value:"Big Query Column Level Security",id:"big-query-column-level-security",level:2},{value:"BigQuery RLS/CLS benefits",id:"bigquery-rlscls-benefits",level:2},{value:"A word about RLS and CLS in Starlake",id:"a-word-about-rls-and-cls-in-starlake",level:2}],g={toc:c},u="wrapper";function y(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"data-exposition-strategies"},"Data exposition strategies"),(0,i.yg)("p",null,"Data may be exposed using views or authorized views and more recently using Row / Column level security."),(0,i.yg)("p",null,"Historically, to restrict access on specific columns or rows in BigQuery, one can create a (authorized) view with a SQL request like the one below:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"CLS / RLS using Views",src:a(20175).A,title:"CLS / RLS using Views",width:"650",height:"177"})),(0,i.yg)("p",null,"BigQuery ",(0,i.yg)("strong",{parentName:"p"},"Views")," require to grant access for the end users to the table on top of which the view is created. To bypass that limitation,\nBigQuery provide ",(0,i.yg)("strong",{parentName:"p"},"Authorized views"),". However, Authorized views come with the following restrictions:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"The underlying table is accessed through the authorized view where the end user is impersonated,\nloosing thus at the table level, the identity of the user making the request.\n",(0,i.yg)("img",{alt:"Impersonation",src:a(27192).A,title:"Impersonation",width:"950",height:"778"}))),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Each restriction policy require to define a specific authorized view making it difficult to identify who has access to what ?\n",(0,i.yg)("img",{alt:"Multiplication of Authorized Views",src:a(17350).A,title:"Multiplication of Authorized Views",width:"1144",height:"980"}))),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},'Authorized views need to be updated whenever a schema evolution on the underlying table bring in a sensitive field that need to be excluded or a field that need to be included in the view.\nIn the example below, the new column "description" need to be added to the authorized view if we want it .\n',(0,i.yg)("img",{alt:"Multiplication of Authorized Views",src:a(27523).A,title:"Multiplication of Authorized Views",width:"1412",height:"890"}))),(0,i.yg)("p",null,"That's where Row Level Security and Column Level security features natively supported by BigQuery come in."),(0,i.yg)("h2",{id:"bigquery-row-level-security"},"BigQuery Row Level Security"),(0,i.yg)("p",null,"Row Level Security restrict access to the rows based on the conditions set in the where clause using the custom SQL statement below:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"RLS",src:a(46494).A,title:"RLS",width:"1246",height:"496"})),(0,i.yg)("h2",{id:"big-query-column-level-security"},"Big Query Column Level Security"),(0,i.yg)("p",null,"Column level security in BigQuery is managed using a taxonomy. This taxonomy is a hierarchy of policy tags\ndescribing the table attributes or other resources. By assigning access rights to a tag,\nwe restrict access to any resource tagged using this specific tag and this applies to BigQuery table fields."),(0,i.yg)("p",null,"In our example, restricting access to specific user/group/sa to the column ",(0,i.yg)("inlineCode",{parentName:"p"},"price")," require the following steps:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"In Cloud Data Catalog/Policy Tags, create a Taxonomy. Note that ",(0,i.yg)("inlineCode",{parentName:"li"},"Enfore access control")," should be checked.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"CLS Taxonomy",src:a(33493).A,title:"CLS Taxonomy",width:"1210",height:"1104"})),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Assign permissions for each policy tag you defined")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"CLS Access",src:a(26531).A,title:"CLS Access",width:"1626",height:"666"})),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Tag restricted columns in the BigQuery schema editor.\n",(0,i.yg)("img",{alt:"CLS Assign",src:a(23582).A,title:"CLS Assign",width:"2310",height:"580"}))),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Assigning policy tags may be done using the ",(0,i.yg)("inlineCode",{parentName:"p"},"bq load/update")," command line tool")),(0,i.yg)("h2",{id:"bigquery-rlscls-benefits"},"BigQuery RLS/CLS benefits"),(0,i.yg)("p",null,"Using BigQuery row and column level security features bring several benefits:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"There is no need to create extra views"),(0,i.yg)("li",{parentName:"ul"},"Users use the same name for the table but with different access rights"),(0,i.yg)("li",{parentName:"ul"},"A company-wide taxonomy is defined allowing better Data Management"),(0,i.yg)("li",{parentName:"ul"},"Access rights to a new column in the table are automatically handled")),(0,i.yg)("h2",{id:"a-word-about-rls-and-cls-in-starlake"},"A word about RLS and CLS in Starlake"),(0,i.yg)("p",null,"Ingesting Data into BigQuery cannot be considered complete without taking into account the access level restrictions on the target table.\nStarlake will handle for you all the scripting required to secure BigQuery rows and columns using a YAML declarative syntax to make sure\nthat your tables are secured in BigQuery:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'{2,11} title="Declarative Row Level & Column Level Security"',"{2,11}":!0,title:'"Declarative',Row:!0,Level:!0,"&":!0,Column:!0,'Security"':!0},'  - name: "PRODUCT"\n    rls:\n      - name: "my-rls"\n        predicate: "category like \'Food\'"\n        grants:\n          - "user:me@company.com"\n          - "group:financegroup@company.com"\n          - "sa:serviceacount@gserviceaccount.com"\n    attributes:\n      - name: "id"\n        accessPolicy: PII\n')))}y.isMDXComponent=!0},27192:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/cls-rls-impersonation-d290b998aa748c2b23231558de9afc7c.png"},17350:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/cls-rls-multiple-authorized-e19a851c7b806f40e9c2c83fd1ddd421.png"},27523:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/cls-rls-schema-evolution-7197e36d99aca59b497350daab3ad183.png"},20175:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/cls-rls-a2ebde91659ccc0037f3d019bba0adb0.png"},26531:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/cls-tag-access-9fc28444083b65a4adc785238913bc1a.png"},23582:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/cls-tag-assign-96ed179a9690d0b1c16dbbff97df5b89.png"},33493:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/cls-taxonomy-5438941ab866042819d8f09a1eb63fa1.png"},46494:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/rls-syntax-2f284354737c3e9ba48138f6dd9ead2f.png"}}]);