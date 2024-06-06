"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[8417],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>d});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),c=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(i.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=n,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return t?a.createElement(d,s(s({ref:r},u),{},{components:t})):a.createElement(d,s({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=f;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},19365:(e,r,t)=>{t.d(r,{A:()=>s});var a=t(96540),n=t(20053);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:r,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,s),hidden:t},r)}},11470:(e,r,t)=>{t.d(r,{A:()=>j});var a=t(58168),n=t(96540),o=t(20053),s=t(23104),l=t(56347),i=t(57485),c=t(31682),u=t(89466);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}function m(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??p(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function f(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function d(e){let{queryString:r=!1,groupId:t}=e;const a=(0,l.W6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(a.location.search);r.set(o,e),a.replace({...a.location,search:r.toString()})}),[o,a])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,o=m(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:o}))),[i,c]=d({queryString:t,groupId:a}),[p,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,o]=(0,u.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),y=(()=>{const e=i??p;return f({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var y=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:r,block:t,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.a_)(),m=e=>{const r=e.currentTarget,t=u.indexOf(r),a=c[t].value;a!==l&&(p(r),i(a))},f=e=>{let r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1];break}}r?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},r)},c.map((e=>{let{value:r,label:t,attributes:s}=e;return n.createElement("li",(0,a.A)({role:"tab",tabIndex:l===r?0:-1,"aria-selected":l===r,key:r,ref:e=>u.push(e),onKeyDown:f,onClick:m},s,{className:(0,o.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===r})}),t??r)})))}function v(e){let{lazy:r,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a}))))}function k(e){const r=b(e);return n.createElement("div",{className:(0,o.A)("tabs-container",g.tabList)},n.createElement(h,(0,a.A)({},e,r)),n.createElement(v,(0,a.A)({},e,r)))}function j(e){const r=(0,y.A)();return n.createElement(k,(0,a.A)({key:String(r)},e))}},40356:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=t(58168),n=(t(96540),t(15680)),o=t(11470),s=t(19365);const l={},i="On Premise Hadoop Cluster",c={unversionedId:"configuration/platforms/hadoop",id:"version-1.2.0/configuration/platforms/hadoop",title:"On Premise Hadoop Cluster",description:"Running on Hadoop is similar to running on a local filesystem, we just need to set the correct filesystem",source:"@site/versioned_docs/version-1.2.0/0500-configuration/0700-platforms/060.hadoop.mdx",sourceDirName:"0500-configuration/0700-platforms",slug:"/configuration/platforms/hadoop",permalink:"/docs/configuration/platforms/hadoop",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.2.0/0500-configuration/0700-platforms/060.hadoop.mdx",tags:[],version:"1.2.0",sidebarPosition:60,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Local filesystem",permalink:"/docs/configuration/platforms/file"},next:{title:"CLI",permalink:"/docs/category/cli"}},u={},p=[],m={toc:p},f="wrapper";function d(e){let{components:r,...t}=e;return(0,n.yg)(f,(0,a.A)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"on-premise-hadoop-cluster"},"On Premise Hadoop Cluster"),(0,n.yg)("p",null,"Running on Hadoop is similar to running on a ",(0,n.yg)("a",{parentName:"p",href:"file"},"local filesystem"),", we just need to set the correct filesystem\nand add the ",(0,n.yg)("inlineCode",{parentName:"p"},"jackson-dataformat-yaml")," library to the classpath on HDP:"),(0,n.yg)(o.A,{mdxType:"Tabs"},(0,n.yg)(s.A,{value:"spark3",label:"Spark 3",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="HDP example"',title:'"HDP','example"':!0},"spark-submit --deploy-mode cluster --master yarn \\\n--jars hdfs://my-namespace/libraires/jackson-dataformat-yaml-2.12.3.jar \\\n--conf spark.yarn.appMasterEnv.SL_ROOT=/user/userguide \\\n--conf spark.yarn.appMasterEnv.SL_FS=hdfs://my-namespace \\\n--class ai.starlake.job.Main \\\nhdfs://my-namespace/libraires/comet-spark2_2.12-0.2.8-assembly.jar import\n"))),(0,n.yg)(s.A,{value:"oozie",label:"Oozie",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-xml",metastring:'title="HDP example"',title:'"HDP','example"':!0},'<action name="ImportToHDFS" cred="hdfs_creds">\n    <spark xmlns="uri:oozie:spark-action:0.2">\n        <job-tracker>${jobTracker}</job-tracker>\n        <name-node>${nameNode}</name-node>\n        <job-xml>${commonRoot}/conf/hbase-site.xml</job-xml>\n        <master>yarn-cluster</master>\n        <name>ai.starlake.job.Main</name>\n        <class>ai.starlake.job.Main</class>\n        <jar>hdfs://${appRoot}/libraries/comet-spark2_2.12-0.2.8-assembly.jar</jar>\n        <spark-opts>\n            --num-executors 6\n            --executor-cores 3 --executor-memory 2g --driver-memory 5g\n            --queue ${queueName}\n            --driver-java-options "-Djava.security.auth.login.config=./jaas.conf -Dconfig.file=./application.conf"\n            --conf spark.yarn.security.tokens.hive.enabled=false\n            --conf spark.history.kerberos.enabled=true\n            --conf spark.history.kerberos.keytab="${sparkHistoryKerberosKeytab}"\n            --conf spark.history.kerberos.principal="${sparkHistoryKerberosPrincipal}"\n            --conf spark.yarn.historyServer.address="${sparkYarnHistoryServerAddress}"\n            --conf spark.history.ui.port="${sparkYarnHistoryServerUiPort}"\n            --conf spark.history.fs.logDirectory="${sparkHistoryFsLogDirectory}"\n            --conf spark.eventLog.dir="${sparkHistoryFsLogDirectory}"\n            --conf spark.eventLog.enabled=true\n            --conf spark.executor.extraJavaOptions="-Djava.security.auth.login.config=./jaas.conf"\n            --conf spark.ssl.enabledAlgorithms=TLS_RSA_WITH_AES_256_CBC_SHA\n            --jars hdfs://${appRoot}/libraries/jackson-dataformat-yaml-2.6.7.jar\n        </spark-opts>\n        <arg>import</arg>\n        <file>${nameNode}/${appRoot}/config/application.conf</file>\n        <file>${nameNode}/user/${userName}/${userKeytab}</file>\n        <file>${nameNode}/${commonRoot}/conf/hive-site.xml</file>\n        <file>${nameNode}/${appRoot}/config/jaas.conf</file>\n        <file>${nameNode}/${commonRoot}/conf/hbase-site.xml</file>\n        <file>${nameNode}/${appRoot}/config/metrics.properties</file>\n        <file>${nameNode}/${commonRoot}/kerberos/krb5.conf</file>\n    </spark>\n    <ok to="..." />\n    <error to="..." />\n</action>\n')))))}d.isMDXComponent=!0}}]);