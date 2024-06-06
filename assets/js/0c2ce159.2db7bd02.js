"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[2869],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,m=c["".concat(i,".").concat(g)]||c[g]||d[g]||l;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},44212:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={},o="Local filesystem",s={unversionedId:"platforms/file",id:"version-1.1.0/platforms/file",title:"Local filesystem",description:"Sample setup",source:"@site/versioned_docs/version-1.1.0/0700-platforms/050.file.md",sourceDirName:"0700-platforms",slug:"/platforms/file",permalink:"/docs/1.1.0/platforms/file",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.1.0/0700-platforms/050.file.md",tags:[],version:"1.1.0",sidebarPosition:50,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Google Cloud",permalink:"/docs/1.1.0/platforms/gcp"},next:{title:"On Premise Hadoop Cluster",permalink:"/docs/1.1.0/platforms/hadoop"}},i={},p=[{value:"Sample setup",id:"sample-setup",level:2},{value:"Running the samples",id:"running-the-samples",level:2},{value:"Optional",id:"optional",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"local-filesystem"},"Local filesystem"),(0,r.yg)("h2",{id:"sample-setup"},"Sample setup"),(0,r.yg)("p",null,"If running the samples on MacOS or Linux, you may skip this section."),(0,r.yg)("p",null,"To run the samples locally on Windows, you must first create the docker image:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker build --build-arg SL_VERSION=0.7.2.2 -t starlake .\n")),(0,r.yg)("p",null,"One the docker image is built locally, run it:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker run -it starlake:latest bash\n")),(0,r.yg)("h2",{id:"running-the-samples"},"Running the samples"),(0,r.yg)("p",null,"Inside the docker container, make sure you are in the ",(0,r.yg)("inlineCode",{parentName:"p"},"samples/local")," folder"),(0,r.yg)("p",null,"The userguide-template is first duplicated into the samples/local folder to create a startup project  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ ./0.data-init.sh\n")),(0,r.yg)("p",null,"Then you need to import he files located in userguide/incoming into the correct pending folder depending on the domain they belong to:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ ./1.data-import.sh\n")),(0,r.yg)("p",null,"To start the ingestion process, run the load command. The resulting tables should be available in the userguide/datasets/accepted folder:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ ./2.data-load.sh\n")),(0,r.yg)("p",null,"To join multiple datasets using the KPI job example located in userguide/metadata/jobs/kpi.sql, run the corresponding transformation:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ ./3.data-transform.sh\n")),(0,r.yg)("p",null,"To view the data ingested and stored as parquet files:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ ./4.data-view-results.sh\n")),(0,r.yg)("p",null,"To exit the spark shell above type ",(0,r.yg)("inlineCode",{parentName:"p"},":quit")),(0,r.yg)("p",null,"To view the log produced:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ ./4.data-view-audit.sh\n")),(0,r.yg)("p",null,"To exit the spark shell above type ",(0,r.yg)("inlineCode",{parentName:"p"},":quit")),(0,r.yg)("h2",{id:"optional"},"Optional"),(0,r.yg)("p",null,"You may view the relationship between your tables by generating a graphviz diagram using the command below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ ./1.data-visualization.sh\n")))}d.isMDXComponent=!0}}]);