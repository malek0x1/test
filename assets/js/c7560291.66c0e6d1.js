"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[7732],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>f});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},59369:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(58168),r=(a(96540),a(15680));const i={},o="Load fixed width files",l={unversionedId:"guides/load/position",id:"guides/load/position",title:"Load fixed width files",description:"To load fixed width files, you need to know the width of each column.",source:"@site/docs/0300-guides/200-load/140-position.mdx",sourceDirName:"0300-guides/200-load",slug:"/guides/load/position",permalink:"/docs/next/guides/load/position",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0300-guides/200-load/140-position.mdx",tags:[],version:"current",sidebarPosition:140,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Load XML files",permalink:"/docs/next/guides/load/xml"},next:{title:"Load strategies",permalink:"/docs/next/guides/load/load-strategies"}},s={},d=[{value:"Infer schema",id:"infer-schema",level:2},{value:"Load data",id:"load-data",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"load-fixed-width-files"},"Load fixed width files"),(0,r.yg)("p",null,"To load fixed width files, you need to know the width of each column.\nThe example below is an example of how a fixed width file may be used to represent orders."),(0,r.yg)("br",null),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plaintext"},"00001    62024-02-05T21:19:15.454ZCancelled\n00002    72024-02-05T21:19:15.454ZCancelled\n00003    82024-02-05T21:19:15.454ZDelivered\n")),(0,r.yg)("br",null),(0,r.yg)("p",null,"In the file above the columns are as follows:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"order_id: 5 characters"),(0,r.yg)("li",{parentName:"ul"},"customer_id: 5 characters"),(0,r.yg)("li",{parentName:"ul"},"timestamp: 24 characters"),(0,r.yg)("li",{parentName:"ul"},"status: 10 characters")),(0,r.yg)("h2",{id:"infer-schema"},"Infer schema"),(0,r.yg)("p",null,"The width of each column is fixed, but the columns are not separated by a delimiter.\nWe just need to provide the ",(0,r.yg)("inlineCode",{parentName:"p"},"infer-schema")," command with a file that contains a single record where each field is placed on a separate line prefixed by its name followed by a colon."),(0,r.yg)("p",null,"to infer the schema of the fixed width file above, we can submit the following file to the ",(0,r.yg)("inlineCode",{parentName:"p"},"infer_schema")," command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plaintext"},"order_id:00001\ncustomer_id:    6\ntimestamp:2024-02-05T21:19:15.454Z\nstatus:Cancelled\n")),(0,r.yg)("p",null,"After calling the infer-schema command below, the schema will be inferred and printed to the console."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ starlake infer-schema -inputPath /my/path/fixed_width_file.txt --format FIXED --outputDir $SL_ROOT/metadata/load/starbake\n")),(0,r.yg)("p",null,"The schema will be saved in the directory specified by the ",(0,r.yg)("inlineCode",{parentName:"p"},"outputDir")," parameter.\nThe starlake YAML schema will look like the one below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"load:\n    metadata:\n      format: FIXED\n      writeStrategy:\n        type: APPEND\n    ...\n    attributes:\n      - name: order_id\n        type: string\n        position:  # first 5 characters\n          first: 0\n          last: 4\n      - name: customer_id\n        type: string\n        position: # next  5 characters\n          first: 5\n          last: 9\n      - name: timestamp\n        type: string\n        position: # next 24 characters\n          first: 10\n          last: 33\n      - name: status\n        type: string\n        position: # next 10 characters\n          first: 34\n          last: 43\n")),(0,r.yg)("h2",{id:"load-data"},"Load data"),(0,r.yg)("p",null,"After inferring the schema, we can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"load")," command to load the data into the datawarehouse."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ starlake load\n")))}u.isMDXComponent=!0}}]);