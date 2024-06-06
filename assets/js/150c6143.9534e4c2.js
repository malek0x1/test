"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[3942],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>y});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,y=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return n?t.createElement(y,i(i({ref:r},c),{},{components:n})):t.createElement(y,i({ref:r},c))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56882:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=n(58168),o=(n(96540),n(15680));const a={},i="Azure Synapse Spark Pools",l={unversionedId:"configuration/platforms/azure",id:"version-1.2.0/configuration/platforms/azure",title:"Azure Synapse Spark Pools",description:"Running Locally",source:"@site/versioned_docs/version-1.2.0/0500-configuration/0700-platforms/020.azure.md",sourceDirName:"0500-configuration/0700-platforms",slug:"/configuration/platforms/azure",permalink:"/docs/configuration/platforms/azure",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.2.0/0500-configuration/0700-platforms/020.azure.md",tags:[],version:"1.2.0",sidebarPosition:20,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Amazon Web Services",permalink:"/docs/configuration/platforms/aws"},next:{title:"Databricks on any cloud",permalink:"/docs/configuration/platforms/databricks"}},s={},u=[{value:"Running Locally",id:"running-locally",level:2},{value:"Running on Azure",id:"running-on-azure",level:2}],c={toc:u},p="wrapper";function f(e){let{components:r,...n}=e;return(0,o.yg)(p,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"azure-synapse-spark-pools"},"Azure Synapse Spark Pools"),(0,o.yg)("h2",{id:"running-locally"},"Running Locally"),(0,o.yg)("p",null,"Starlake need to access ADFS. You need to provide the credentials in one of the three ways below:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Through a core-site.xml file present in the classpath (you'll probably use this method when running the ingestion process from your laptop):")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},' <?xml version="1.0" encoding="UTF-8"?>\n <?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n <configuration>\n     <property>\n         <name>fs.azure.account.key.ebizcomet.dfs.core.windows.net</name>\n         <value>*******==</value>\n     </property>\n     <property>\n         <name>fs.default.name</name>\n         <value>abfs://cometfs@ebizcomet.dfs.core.windows.net/</value>\n     </property>\n </configuration>\n')),(0,o.yg)("h2",{id:"running-on-azure"},"Running on Azure"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"At cluster creation as specified ",(0,o.yg)("inlineCode",{parentName:"li"},"here <https://docs.microsoft.com/fr-fr/azure/databricks/data/data-sources/azure/azure-datalake-gen2#rdd-api>"),"_.\n(you'll probably use this method on a production cluster)")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Through a specific application.conf file in the starlake-assembly.jar classpath.\nYou must add the spark.hadoop. prefix to the corresponding Hadoop configuration keys to propagate them to the Hadoop configurations that are used used in the Starlake Spark Job.")))}f.isMDXComponent=!0}}]);