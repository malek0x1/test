"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[6646],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),c=i,u=d["".concat(o,".").concat(c)]||d[c]||y[c]||r;return n?a.createElement(u,m(m({ref:t},s),{},{components:n})):a.createElement(u,m({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,m=new Array(r);m[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:i,m[1]=p;for(var l=2;l<r;l++)m[l]=n[l];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},35189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>y,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=n(58168),i=(n(96540),n(15680));const r={},m="Type validation",p={unversionedId:"guides/load/validate",id:"version-1.2.0/guides/load/validate",title:"Type validation",description:"starlake allows you to validate the types of the data you are loading.",source:"@site/versioned_docs/version-1.2.0/0300-guides/200-load/180-validate.mdx",sourceDirName:"0300-guides/200-load",slug:"/guides/load/validate",permalink:"/docs/guides/load/validate",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.2.0/0300-guides/200-load/180-validate.mdx",tags:[],version:"1.2.0",sidebarPosition:180,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Native load",permalink:"/docs/guides/load/native"},next:{title:"Transform on load",permalink:"/docs/guides/load/transform"}},o={},l=[{value:"Basic types",id:"basic-types",level:2},{value:"Custom types",id:"custom-types",level:2}],s={toc:l},d="wrapper";function y(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"type-validation"},"Type validation"),(0,i.yg)("p",null,"starlake allows you to validate the types of the data you are loading.\nThis is done by specifying the schema of the data you are writing.\nThis schema, generally infered from sample data, is described using the YAML syntax in the ",(0,i.yg)("inlineCode",{parentName:"p"},"attributes"),"section of\nthe ",(0,i.yg)("inlineCode",{parentName:"p"},"metadata/load/<domain>/<table>.sl.yml")," file."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"order_line")," table may be described as follows:"),(0,i.yg)("br",null),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'{7,9,11,13} title="metadata/load/starbake/order_line.sl.yml - validation section"',"{7,9,11,13}":!0,title:'"metadata/load/starbake/order_line.sl.yml',"-":!0,validation:!0,'section"':!0},'table:\n  pattern: "order_line.*.csv"\n  metadata:\n    - ...\n  attributes:\n  - name: "order_id"\n    type: "int"\n  - name: "product_id"\n    type: "int"\n  - name: "quantity"\n    type: "int"\n  - name: "sale_price"\n    type: "double"\n')),(0,i.yg)("br",null),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"int")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"double")," are what we call the basic types and are mapped to the corresponding SQL types."),(0,i.yg)("h2",{id:"basic-types"},"Basic types"),(0,i.yg)("p",null,"The basic types below are supported by starlake:"),(0,i.yg)("br",null),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="metadata/types/default.sl.yml"',title:'"metadata/types/default.sl.yml"'},'types:\n  - name: "string"\n    primitiveType: "string"\n    pattern: ".+"\n    sample: "Hello World"\n    comment: "Any set of chars"\n  - name: "int"\n    pattern: "[-|\\\\+|0-9][0-9]*"\n    primitiveType: "long"\n    sample: "1234"\n    comment: "Int number"\n  - name: "integer"\n    pattern: "[-|\\\\+|0-9][0-9]*"\n    primitiveType: "long"\n    sample: "1234"\n    comment: "Int number"\n  - name: "byte"\n    primitiveType: "byte"\n    pattern: "."\n    sample: "x"\n    comment: "Any set of chars"\n  - name: "double"\n    primitiveType: "double"\n    pattern: "[-+]?\\\\d*\\\\.?\\\\d+[Ee]?[-+]?\\\\d*"\n    sample: "-45.78"\n    comment: "Any floating value"\n  - name: "long"\n    primitiveType: "long"\n    pattern: "[-|\\\\+|0-9][0-9]*"\n    sample: "-64564"\n    comment: "any positive or negative number"\n  - name: "short"\n    primitiveType: "short"\n    pattern: "-?\\\\d+"\n    sample: "564"\n    comment: "any positive or negative number"\n  - name: "boolean"\n    primitiveType: "boolean"\n    pattern: "(?i)true|yes|[y1]<-TF->(?i)false|no|[n0]"\n    sample: "TruE"\n  - name: "timestamp"\n    primitiveType: "timestamp"\n    pattern: "ISO_DATE_TIME"\n    sample: "2019-12-31 23:59:02"\n    comment: "date/time in epoch millis"\n  - name: "decimal"\n    primitiveType: "decimal"\n    pattern: "-?\\\\d*\\\\.{0,1}\\\\d+"\n    sample: "-45.787686786876"\n    comment: "Any floating value"\n  - name: "date"\n    primitiveType: "date"\n    pattern: "yyyy-MM-dd"\n    sample: "2018-07-21"\n    comment: "Date in the format yyyy-MM-dd"\n  - name: "basic_iso_date"\n    primitiveType: "timestamp"\n    pattern: "BASIC_ISO_DATE"\n    sample: "20111203"\n    comment: "Timestamp based on yyyMMdd pattern"\n  - name: "iso_local_date"\n    primitiveType: "timestamp"\n    pattern: "ISO_LOCAL_DATE"\n    sample: "2011-12-03"\n    comment: "Timestamp based on yyyy-MM-dd pattern"\n  - name: "iso_offset_date"\n    primitiveType: "timestamp"\n    pattern: "ISO_OFFSET_DATE"\n    sample: "2011-12-03+02:00"\n    comment: "Timestamp based on `ISO Date with offset` pattern"\n  - name: "iso_date"\n    primitiveType: "timestamp"\n    pattern: "ISO_DATE"\n    sample: "2011-12-03+02:00"\n    comment: "Timestamp based on `ISO Date with or without offset` pattern"\n  - name: "iso_local_date_time"\n    primitiveType: "timestamp"\n    pattern: "ISO_LOCAL_DATE_TIME"\n    sample: "2011-12-03T10:15:30"\n    comment: "Timestamp based on `ISO Local Date and Time` pattern"\n  - name: "iso_offset_date_time"\n    primitiveType: "timestamp"\n    pattern: "ISO_OFFSET_DATE_TIME"\n    sample: "2011-12-03T10:15:30+01:00"\n    comment: "Timestamp based on `ISO Local Date and Time` pattern"\n  - name: "iso_zoned_date_time"\n    primitiveType: "timestamp"\n    pattern: "ISO_ZONED_DATE_TIME"\n    sample: "2011-12-03T10:15:30+01:00[Europe/Paris]"\n    comment: "Timestamp based on `ISO Zoned Date Time` pattern"\n  - name: "iso_date_time"\n    primitiveType: "timestamp"\n    pattern: "ISO_DATE_TIME"\n    sample: "2011-12-03T10:15:30+01:00[Europe/Paris]"\n    comment: "Timestamp based on `ISO Date and time with ZoneId` pattern"\n  - name: "iso_ordinal_date"\n    primitiveType: "timestamp"\n    pattern: "ISO_ORDINAL_DATE"\n    sample: "2012-337"\n    comment: "Timestamp based on `year and day of year` pattern"\n  - name: "iso_week_date"\n    primitiveType: "timestamp"\n    pattern: "ISO_WEEK_DATE"\n    sample: "2012-W48-6"\n    comment: "Timestamp based on `Year and Week` pattern"\n  - name: "iso_instant"\n    primitiveType: "timestamp"\n    pattern: "ISO_INSTANT"\n    sample: "2011-12-03T10:15:30Z"\n    comment: "Timestamp based on `Date and Time of an Instant` pattern (UTC only)"\n  - name: "rfc_1123_date_time"\n    primitiveType: "timestamp"\n    pattern: "RFC_1123_DATE_TIME"\n    sample: "Tue, 3 Jun 2008 11:05:30 GMT"\n    comment: "Timestamp based on `RFC 1123 / RFC 822` patterns"\n')),(0,i.yg)("h2",{id:"custom-types"},"Custom types"),(0,i.yg)("p",null,"You may redefine existing standard types or define your own types in the ",(0,i.yg)("inlineCode",{parentName:"p"},"metadata/types")," directory in a file named ",(0,i.yg)("inlineCode",{parentName:"p"},"custom.sl.yml"),"."),(0,i.yg)("p",null,"This allows you to run your input data against advanced validation rules."),(0,i.yg)("p",null,"Below is an example of a custom type definition:"),(0,i.yg)("br",null),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="metadata/types/custom.sl.yml"',title:'"metadata/types/custom.sl.yml"'},'\ntypes:\n  - name: "email"\n    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}$"\n    primitiveType: "string"\n    sample: "\n    comment: "Email address"\n  - name: "phone"\n    pattern: "^[0-9]{10}$"\n    primitiveType: "string"\n    sample: "1234567890"\n    comment: "Phone number"\n  - name: "zip_code"\n    pattern: "^[0-9]{5}$"\n    primitiveType: "string"\n    sample: "12345"\n    comment: "Zip code"\n')),(0,i.yg)("br",null),(0,i.yg)("p",null,"Note that you have to map the custom type to a primitive type, which is the type that will be used in the SQL schema."),(0,i.yg)("p",null,"The following primitive types are supported:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"string"),(0,i.yg)("li",{parentName:"ul"},"long"),(0,i.yg)("li",{parentName:"ul"},"double"),(0,i.yg)("li",{parentName:"ul"},"byte"),(0,i.yg)("li",{parentName:"ul"},"short"),(0,i.yg)("li",{parentName:"ul"},"boolean"),(0,i.yg)("li",{parentName:"ul"},"timestamp"),(0,i.yg)("li",{parentName:"ul"},"decimal"),(0,i.yg)("li",{parentName:"ul"},"date")))}y.isMDXComponent=!0}}]);