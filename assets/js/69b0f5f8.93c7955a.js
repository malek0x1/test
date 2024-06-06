"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[3895],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},o="Local filesystem",i={unversionedId:"configuration/platforms/file",id:"version-1.2.0/configuration/platforms/file",title:"Local filesystem",description:"Sample setup",source:"@site/versioned_docs/version-1.2.0/0500-configuration/0700-platforms/050.file.md",sourceDirName:"0500-configuration/0700-platforms",slug:"/configuration/platforms/file",permalink:"/docs/configuration/platforms/file",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.2.0/0500-configuration/0700-platforms/050.file.md",tags:[],version:"1.2.0",sidebarPosition:50,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Google Cloud",permalink:"/docs/configuration/platforms/gcp"},next:{title:"On Premise Hadoop Cluster",permalink:"/docs/configuration/platforms/hadoop"}},s={},p=[{value:"Sample setup",id:"sample-setup",level:2},{value:"Running the samples",id:"running-the-samples",level:2},{value:"Optional",id:"optional",level:2}],u={toc:p},c="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"local-filesystem"},"Local filesystem"),(0,r.yg)("h2",{id:"sample-setup"},"Sample setup"),(0,r.yg)("p",null,"If running the samples on MacOS or Linux, you may skip this section."),(0,r.yg)("p",null,"To run the samples locally on Windows, you must first create the docker image:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker build --build-arg SL_VERSION=0.7.2.2 -t starlake .\n")),(0,r.yg)("p",null,"One the docker image is built locally, run it:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker run -it starlake:latest bash\n")),(0,r.yg)("h2",{id:"running-the-samples"},"Running the samples"),(0,r.yg)("p",null,"Inside the docker container, make sure you are in the ",(0,r.yg)("inlineCode",{parentName:"p"},"samples/local")," folder"),(0,r.yg)("p",null,"The userguide-template is first duplicated into the samples/local folder to create a startup project  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ ./0.data-init.sh\n")),(0,r.yg)("p",null,"Then you need to import he files located in userguide/incoming into the correct pending folder depending on the domain they belong to:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ ./1.data-import.sh\n")),(0,r.yg)("p",null,"To start the ingestion process, run the load command. The resulting tables should be available in the userguide/datasets/accepted folder:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ ./2.data-load.sh\n")),(0,r.yg)("p",null,"To join multiple datasets using the KPI job example located in userguide/metadata/jobs/kpi.sql, run the corresponding transformation:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ ./3.data-transform.sh\n")),(0,r.yg)("p",null,"To view the data ingested and stored as parquet files:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ ./4.data-view-results.sh\n")),(0,r.yg)("p",null,"To exit the spark shell above type ",(0,r.yg)("inlineCode",{parentName:"p"},":quit")),(0,r.yg)("p",null,"To view the log produced:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ ./4.data-view-audit.sh\n")),(0,r.yg)("p",null,"To exit the spark shell above type ",(0,r.yg)("inlineCode",{parentName:"p"},":quit")),(0,r.yg)("h2",{id:"optional"},"Optional"),(0,r.yg)("p",null,"You may view the relationship between your tables by generating a graphviz diagram using the command below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ ./1.data-visualization.sh\n")))}g.isMDXComponent=!0}}]);