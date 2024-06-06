"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[3022],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>u});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,u=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return r?a.createElement(u,i(i({ref:t},m),{},{components:r})):a.createElement(u,i({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99140:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const o={},i="Export",s={unversionedId:"guides/transform/export",id:"version-1.2.0/guides/transform/export",title:"Export",description:"You may export your data to files or to another database.",source:"@site/versioned_docs/version-1.2.0/0300-guides/300-transform/140-export.mdx",sourceDirName:"0300-guides/300-transform",slug:"/guides/transform/export",permalink:"/docs/guides/transform/export",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.2.0/0300-guides/300-transform/140-export.mdx",tags:[],version:"1.2.0",sidebarPosition:140,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Python Transforms",permalink:"/docs/guides/transform/python"},next:{title:"Orchestration",permalink:"/docs/guides/transform/orchestration"}},l={},p=[{value:"Export to files",id:"export-to-files",level:2},{value:"Export to another database",id:"export-to-another-database",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"export"},"Export"),(0,n.yg)("p",null,"You may export your data to files or to another database."),(0,n.yg)("h2",{id:"export-to-files"},"Export to files"),(0,n.yg)("p",null,"You may export to CSV / JSON / Parquet / Avro or whatever file formt supported by Apache Spark.\nYou can export the data to a CSV file using by specifying the csv format in the sink attribute of your transform."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="metadata/transform/<domain>/<transform>.sl.yml"',title:'"metadata/transform/<domain>/<transform>.sl.yml"'},"task:\n  sink:\n    format: csv\n    extension: csv\n\n")),(0,n.yg)("p",null,"The file will be saved in the ",(0,n.yg)("inlineCode",{parentName:"p"},"datasets")," folder (relative to the root path) of the project under the ",(0,n.yg)("inlineCode",{parentName:"p"},"<domain>")," folder named after the ",(0,n.yg)("inlineCode",{parentName:"p"},"<transform>")," name and the ",(0,n.yg)("inlineCode",{parentName:"p"},"extension")," set in the yaml file."),(0,n.yg)("p",null,"You may also request the file to be saved in an absolute path by specifying the file path (relative to the root path)  in the ",(0,n.yg)("inlineCode",{parentName:"p"},"path")," attribute of the sink."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="metadata/transform/<domain>/<transform>.sl.yml"',title:'"metadata/transform/<domain>/<transform>.sl.yml"'},"task:\n  sink:\n    format: csv\n    path: mnt/data/output.csv\n\n")),(0,n.yg)("p",null,"On a cloud storage, the bucket name will be prepended to the path. The file will be saved in the specified path below the root path."),(0,n.yg)("p",null,"The root path is specified in the ",(0,n.yg)("inlineCode",{parentName:"p"},"root")," key in the ",(0,n.yg)("inlineCode",{parentName:"p"},"metadata.application.sl.yml")," file."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="metadata/application.sl.yml"',title:'"metadata/application.sl.yml"'},"...\nroot: gs://my-bucket/folder1/folder2\n...\n")),(0,n.yg)("h2",{id:"export-to-another-database"},"Export to another database"),(0,n.yg)("p",null,"You may also export the data to a database. You can specify the database connection name  in the ",(0,n.yg)("inlineCode",{parentName:"p"},"sink.connectionRef")," attribute of your transform."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="metadata/transform/<domain>/<transform>.sl.yml"',title:'"metadata/transform/<domain>/<transform>.sl.yml"'},"\ntask:\n  ...\n  sink:\n    connectionRef: my_database\n    ...\n\n")))}c.isMDXComponent=!0}}]);