"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[1185],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||s;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},47355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));const s={},o="Unit tests in Data Engineering",i={unversionedId:"guides/unit-tests/concepts",id:"guides/unit-tests/concepts",title:"Unit tests in Data Engineering",description:"Unit tests are a critical part of the software development process.",source:"@site/docs/0300-guides/0400-unit-tests/050-concepts.mdx",sourceDirName:"0300-guides/0400-unit-tests",slug:"/guides/unit-tests/concepts",permalink:"/docs/next/guides/unit-tests/concepts",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0300-guides/0400-unit-tests/050-concepts.mdx",tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Unit Tests",permalink:"/docs/next/category/unit-tests"},next:{title:"Test Load Tasks",permalink:"/docs/next/guides/unit-tests/load-tests"}},c={},u=[],l={toc:u},p="wrapper";function d(e){let{components:t,...s}=e;return(0,a.yg)(p,(0,r.A)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"unit-tests-in-data-engineering"},"Unit tests in Data Engineering"),(0,a.yg)("p",null,"Unit tests are a critical part of the software development process.\nThey help ensure that the code works as expected and that changes to the code do not introduce bugs.\nIn data engineering, unit tests are used to validate the correctness of data pipelines.\nUnit tests can be used to test the correctness of the data transformations, the data loading process, and the data quality."),(0,a.yg)("p",null,"The main issues in testing data engineering pipelines on the target datawarehouse are:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Data access costs"),(0,a.yg)("li",{parentName:"ul"},"Shared database unsuitable for unit tests"),(0,a.yg)("li",{parentName:"ul"},"Requires a service account for your C.I.."),(0,a.yg)("li",{parentName:"ul"},"Slow feedback loop"),(0,a.yg)("li",{parentName:"ul"},"Hard to test the code in a repeatable way")),(0,a.yg)("p",null,"To address these issues, Starlake transpiles your SQL dialect to the  in-memory datawarehouse DuckDB.\nThis allows you to run your unit tests on your local machine without the need for a service account or access to the target datawarehouse.\nThis also allows you to run your unit tests in a repeatable way, ensuring that your tests are deterministic."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(80014).A,width:"993",height:"901"})))}d.isMDXComponent=!0},80014:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/starlake-unit-tests-eeb82cb33a51f6ed14f4ffa073c57ff1.png"}}]);