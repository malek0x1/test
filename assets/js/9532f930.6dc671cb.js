"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[5336],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(n),p=a,f=c["".concat(l,".").concat(p)]||c[p]||d[p]||s;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<s;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},37611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var r=n(58168),a=(n(96540),n(15680));const s={},o="SQL Transforms",i={unversionedId:"guides/transform/sql",id:"version-1.2.0/guides/transform/sql",title:"SQL Transforms",description:"SQL transforms are used to materialize SELECT statements using a user defined strategy.",source:"@site/versioned_docs/version-1.2.0/0300-guides/300-transform/110-sql.mdx",sourceDirName:"0300-guides/300-transform",slug:"/guides/transform/sql",permalink:"/docs/guides/transform/sql",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.2.0/0300-guides/300-transform/110-sql.mdx",tags:[],version:"1.2.0",sidebarPosition:110,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Customize the Transform",permalink:"/docs/guides/transform/config"},next:{title:"Python Transforms",permalink:"/docs/guides/transform/python"}},l={},m=[{value:"SELECT statements",id:"select-statements",level:2},{value:"Column description",id:"column-description",level:2},{value:"Custom write strategy",id:"custom-write-strategy",level:2}],u={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"sql-transforms"},"SQL Transforms"),(0,a.yg)("p",null,"SQL transforms are used to materialize SELECT statements using a user defined strategy."),(0,a.yg)("h2",{id:"select-statements"},"SELECT statements"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"../transform/tutorial#the-select-statements"},"SQL transforms")," are SELECT statements materialized using a user defined strategy.\nThe result of the SELECT statement is then used to populate the target table by applying the ",(0,a.yg)("a",{parentName:"p",href:"../load/write-strategies"},"write strategy")," defined in the corresponding YAML configuration file.\nThe SELECT statement can be as simple or as complex as needed."),(0,a.yg)("p",null,"The only requirement is that the result of the SELECT statement must match the schema of the target table if it exists, otherwise starlake will infer the schema."),(0,a.yg)("h2",{id:"column-description"},"Column description"),(0,a.yg)("p",null,"Most of the time you won't need to document the columns in the SELECT statement as starlake will infer the schema from the result of the SELECT statement\nand the column documentation from the source table column description."),(0,a.yg)("p",null,"You may need to document the calculated columns in the SELECT statement as they don't exist in the source tables.\nYou can do that by adding setting the ",(0,a.yg)("inlineCode",{parentName:"p"},"attributesDesc")," key in the YAML configuration file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="metadata/transform/<domain>/<table>.sl.yml"',title:'"metadata/transform/<domain>/<table>.sl.yml"'},"\ntask:\n  ...\n  attributesDesc:\n    name: <column_name>\n    comment: <column_description>\n  ...\n\n")),(0,a.yg)("h2",{id:"custom-write-strategy"},"Custom write strategy"),(0,a.yg)("p",null,"If none of the ",(0,a.yg)("a",{parentName:"p",href:"../load/write-strategies"},"predefined write strategies")," fits your need, you can write your own update/insert/merge statements directly in the SQL file\ninstead of letting starlake convert your select statements into update/insert/merge statements."),(0,a.yg)("p",null,"But in that case, you will need to set the ",(0,a.yg)("inlineCode",{parentName:"p"},"parseSQL")," (",(0,a.yg)("inlineCode",{parentName:"p"},"true")," by default) to ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," in the YAML configuration file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="metadata/transform/<domain>/<table>.sl.yml"',title:'"metadata/transform/<domain>/<table>.sl.yml"'},"\ntask:\n  ...\n  parseSQL: false\n  ...\n\n")))}d.isMDXComponent=!0}}]);