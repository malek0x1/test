"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[3248],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},28503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(58168),r=(n(96540),n(15680));const i={},o="Load JSON Files",l={unversionedId:"guides/load/json",id:"version-1.2.0/guides/load/json",title:"Load JSON Files",description:"Loading a JSON file is similar to loading a CSV file except that JSON attributes may have nested attributes.",source:"@site/versioned_docs/version-1.2.0/0300-guides/200-load/120-json.mdx",sourceDirName:"0300-guides/200-load",slug:"/guides/load/json",permalink:"/docs/guides/load/json",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.2.0/0300-guides/200-load/120-json.mdx",tags:[],version:"1.2.0",sidebarPosition:120,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Load DSV files",permalink:"/docs/guides/load/csv"},next:{title:"Load XML files",permalink:"/docs/guides/load/xml"}},s={},d=[{value:"Infer schema",id:"infer-schema",level:2},{value:"Parsing JSON",id:"parsing-json",level:2},{value:"Attributes validation",id:"attributes-validation",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"load-json-files"},"Load JSON Files"),(0,r.yg)("p",null,"Loading a JSON file is similar to loading a CSV file except that JSON attributes may have nested attributes."),(0,r.yg)("h2",{id:"infer-schema"},"Infer schema"),(0,r.yg)("p",null,"The very first step is to infer the schema of the file from a data file as described in the ",(0,r.yg)("a",{parentName:"p",href:"autoload#how-autoload-detects-the-format-of-the-files"},"autoload section")," before you start customizing your configuration. This is done using the ",(0,r.yg)("inlineCode",{parentName:"p"},"infer-schema")," command. This will bootstrap the configuration file for the table."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nstarlake infer-schema --input-path incoming/starbake\n\n")),(0,r.yg)("h2",{id:"parsing-json"},"Parsing JSON"),(0,r.yg)("p",null,"Like other file formats, JSON Parsing options are defined in the ",(0,r.yg)("inlineCode",{parentName:"p"},"metadata")," section of the configuration file."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"format"),"attribute may be set to one of the values below:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Format"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JSON"),(0,r.yg)("td",{parentName:"tr",align:null},"The JSON file is parsed as a list of objects, one object per line")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JSON_FLAT"),(0,r.yg)("td",{parentName:"tr",align:null},"The JSON objects do not contain any repeated or nested fields. Using this format instead of JSON makes file parsing faster")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JSON_ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"The JSON file is parsed as a single array of objects")))),(0,r.yg)("br",null),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="metadata/load/<domain>/<table>.sl.yml - parsing section"',title:'"metadata/load/<domain>/<table>.sl.yml',"-":!0,parsing:!0,'section"':!0},'table:\n  pattern: "order_line.*.csv"\n  metadata:\n    format: "JSON" # or "JSON_FLAT" since the JSON objects do not contain any repeated or nested fields\n    ...\n  attributes:\n    - ...\n')),(0,r.yg)("h2",{id:"attributes-validation"},"Attributes validation"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"attributes")," section of the configuration file is used to define the attributes of the JSON file.\nThe ",(0,r.yg)("inlineCode",{parentName:"p"},"attributes")," section is a list of objects, each object representing an attribute of the JSON file.\nIn addition to the common attributes, the ",(0,r.yg)("inlineCode",{parentName:"p"},"attributes")," section may contain the following attributes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"'array' (optional): The attribute is an array of objects. The value of this attribute is a list of objects, each object representing an attribute of the array."),(0,r.yg)("li",{parentName:"ul"},"'struct' (optional): The attribute is an object containing other attributes.")),(0,r.yg)("br",null),(0,r.yg)("p",null,"Given the Json record below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "order_id": 1,\n  "order_date": "2021-01-01",\n  "order_lines": [\n    {\n      "line_id": 1,\n      "product_id": 1,\n      "quantity": 2\n    },\n    {\n      "line_id": 2,\n      "product_id": 2,\n      "quantity": 3\n    }\n  ]\n}\n')),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"attributes")," section of the configuration file would be:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="metadata/load/<domain>/<table>.sl.yml - attributes section"',title:'"metadata/load/<domain>/<table>.sl.yml',"-":!0,attributes:!0,'section"':!0},'table:\n  pattern: "order_line.*.csv"\n  metadata:\n    format: "JSON"\n    ...\n  attributes:\n    - name: "order_id"\n      type: "integer"\n    - name: "order_date"\n      type: "date"\n    - name: "order_lines"\n      type: "struct"\n      array: true\n      attributes:\n        - name: "line_id"\n          type: "integer"\n        - name: "product_id"\n          type: "integer"\n        - name: "quantity"\n          type: "integer"\n')))}c.isMDXComponent=!0}}]);