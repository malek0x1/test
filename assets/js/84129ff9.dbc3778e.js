"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[3028],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>f});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,f=p["".concat(i,".").concat(d)]||p[d]||c[d]||o;return a?n.createElement(f,l(l({ref:t},m),{},{components:a})):n.createElement(f,l({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(58168),r=a(96540),o=a(20053),l=a(23104),s=a(56347),i=a(57485),u=a(31682),m=a(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=c(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,u]=f({queryString:a,groupId:n}),[p,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,m.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=i??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var g=a(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),c=e=>{const t=e.currentTarget,a=m.indexOf(t),n=u[a].value;n!==s&&(p(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:c},l,{className:(0,o.A)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=y(e);return r.createElement("div",{className:(0,o.A)("tabs-container",h.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function k(e){const t=(0,g.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},54836:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),o=a(11470),l=a(19365);const s={},i="Transform",u={unversionedId:"user-guide/transform",id:"version-1.1.0/user-guide/transform",title:"Transform",description:"Now that our file is successfully loaded and available as a table, we usually need to join them and expose KPIs.",source:"@site/versioned_docs/version-1.1.0/0400-user-guide/150.transform.mdx",sourceDirName:"0400-user-guide",slug:"/user-guide/transform",permalink:"/docs/1.1.0/user-guide/transform",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.1.0/0400-user-guide/150.transform.mdx",tags:[],version:"1.1.0",sidebarPosition:150,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Load",permalink:"/docs/1.1.0/user-guide/load"},next:{title:"Lineage",permalink:"/docs/1.1.0/user-guide/lineage"}},m={},p=[{value:"SQL Transforms",id:"sql-transforms",level:2},{value:"Jinja2 Transforms",id:"jinja2-transforms",level:2},{value:"Python/PySpark Transforms",id:"pythonpyspark-transforms",level:2},{value:"Incremental updates",id:"incremental-updates",level:2},{value:"Targeting another datawarehouse",id:"targeting-another-datawarehouse",level:2}],c={toc:p},d="wrapper";function f(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"transform"},"Transform"),(0,r.yg)("p",null,"Now that our file is successfully loaded and available as a table, we usually need to join them and expose KPIs.\nThis is where Starlake Transforms come into play.\nThree types of jobs are supported:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"SQL jobs: a single SQL file"),(0,r.yg)("li",{parentName:"ul"},"Jinja2 jobs: a single SQL/Python/PySpark file with Jinja2 templating"),(0,r.yg)("li",{parentName:"ul"},"Python jobs: a single Python/PySpark file")),(0,r.yg)("h2",{id:"sql-transforms"},"SQL Transforms"),(0,r.yg)("p",null,"We create a file ",(0,r.yg)("inlineCode",{parentName:"p"},"metadata/transform/kpi/customers_kpi.sql")," with the following content"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"select count(*) cnt from sales.customers\n")),(0,r.yg)("p",null,"This SQL file alone is sufficient to be a Starlake Transform. It instructs Starlake to put the result of the query in a schema (dataset in BigQuery)\nnamed after the folder name,  ",(0,r.yg)("inlineCode",{parentName:"p"},"kpi")," in our case and the table named after the sql filename aka ",(0,r.yg)("inlineCode",{parentName:"p"},"customers_kpi"),"."),(0,r.yg)("p",null,"That's it! We can now run the transform as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"$ cd $HOME/userguide\n$ starlake transform --name kpi.customers_kpi\n\n$ starlake.sh transform \\\n            --name db_schema.transform_name\n\n")),(0,r.yg)("p",null,"The transform job will run against the connectionRef defined in the application.sl.yml file.\nThe result of the query will be stored in the table ",(0,r.yg)("inlineCode",{parentName:"p"},"kpi.customers_kpi")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"datasets")," folder."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"By default, the existing table data is overriden. To append data, use the ",(0,r.yg)("inlineCode",{parentName:"p"},"write")," option in the ",(0,r.yg)("inlineCode",{parentName:"p"},"metadata/transform/kpi/_config.sl.yml")," file:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"transform:\n  default:\n    write: APPEND\n")),(0,r.yg)("p",{parentName:"admonition"},"This instructs to run all transformations in ",(0,r.yg)("inlineCode",{parentName:"p"},"kpi")," folder in append mode.\nTo run only this transformation in append mode, update the _",(0,r.yg)("em",{parentName:"p"},"config")," file as follows:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml",metastring:"{5-6}","{5-6}":!0},"transform:\n  default:\n    write: OVERWRITE\n  tasks:\n    - name: customers_kpi\n      write: APPEND\n"))),(0,r.yg)("p",null,"The transform job will run against the connectionRef defined in the application.sl.yml file."),(0,r.yg)("h2",{id:"jinja2-transforms"},"Jinja2 Transforms"),(0,r.yg)("p",null,"Starlake Transforms support Jinja2 templating inside SQL requests.\nTo illustrate how this works, we will create two tables, one containing customers living in France\nand another one containing customers living in the USA."),(0,r.yg)("p",null,"We create a file ",(0,r.yg)("inlineCode",{parentName:"p"},"metadata/transform/kpi/bycountry.sql")," with the following content"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"select * from sales.customers where lower(country) like lower('{{ p_country }}')\n")),(0,r.yg)("p",null,"By creating the sql file in the kpi folder, we instruct Starlake to put the result of the query in a schema (dataset in BigQuery)\nnamed 'kpi'.\nBut we need the french customers to be stored in the table ",(0,r.yg)("inlineCode",{parentName:"p"},"cust_france")," and the american customers in the table ",(0,r.yg)("inlineCode",{parentName:"p"},"cust_usa"),"."),(0,r.yg)("p",null,"Since by default the table is named after the SQL file name, ",(0,r.yg)("inlineCode",{parentName:"p"},"bycountry.sql")," will create a table named ",(0,r.yg)("inlineCode",{parentName:"p"},"bycountry"),".\nWe need to configure a dynamic table name based on the country name in the YAML configuration file.\nTherefore, we need to update the YAML file ",(0,r.yg)("inlineCode",{parentName:"p"},"metadata/transform/kpi/_config.sl.yml"),".\nThis file will instruct where the result of the SQL request will be stored."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml",metastring:"{5-7}","{5-7}":!0},"transform:\n  tasks:\n    - name: customers_kpi\n      write: APPEND\n    - name: bycountry # We define the name of the transform.\n      table: cust_{{ p_country }} # We define the table name based on the country name.\n      write: OVERWRITE # We overwrite the table each time the job is executed.\n\n")),(0,r.yg)(o.A,{groupId:"customers",mdxType:"Tabs"},(0,r.yg)(l.A,{value:"usa",label:"American customers table",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"$ cd $HOME/userguide\n$ starlake transform --name kpi.bycountry --options p_country=USA\n"))),(0,r.yg)(l.A,{value:"france",label:"French customers table",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"$ cd $HOME/userguide\n$ starlake transform --name kpi.bycountry --options p_country=France\n")))),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"--options")," argument may hold a comma separated list of variables / values pairs  that will be used for substitution and thus allowing a query to be parameterized."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"--options")," parameter is optional. If not provided,\nthe transform will be executed with the default values defined in the ",(0,r.yg)("inlineCode",{parentName:"p"},"env.sl.yml")," and if ",(0,r.yg)("inlineCode",{parentName:"p"},"env.{{SL_ENV}}.sl.yml")," files if they can be found in the ",(0,r.yg)("inlineCode",{parentName:"p"},"metadata")," folder.")),(0,r.yg)("h2",{id:"pythonpyspark-transforms"},"Python/PySpark Transforms"),(0,r.yg)("p",null,"You mays also use Python/PySpark to create your transforms. The output of the job must be a PySpark DataFrame registered as a temporary view named ",(0,r.yg)("inlineCode",{parentName:"p"},"SL_THIS"),".\nThe dataframe will be saved in a table named after the filename following the same naming rules as the SQL transforms.\nBelow is an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python",metastring:'title="metadata/transform/kpi/pi.py"',title:'"metadata/transform/kpi/pi.py"'},'import sys\nfrom random import random\nfrom operator import add\n\nfrom pyspark.sql import SparkSession\n\n# From Apache Spark example\nif __name__ == "__main__":\n    # get Spark context\n    spark = SparkSession.builder.getOrCreate()\n\n    # run any python/pyspark transform below\n    partitions = 2\n    n = 100000 * partitions\n\n    def f(_: int) -> float:\n        x = random() * 2 - 1\n        y = random() * 2 - 1\n        return 1 if x ** 2 + y ** 2 <= 1 else 0\n    count = spark.sparkContext.parallelize(range(1, n + 1), partitions).map(f).reduce(add)\n    result = 4.0 * count / n\n\n    # put the result in a spark dataframe\n    df = spark.createDataFrame([[result]])\n    # register the dataframe as a temporary view named SL_THIS\n    df.registerTempTable("SL_THIS")\n')),(0,r.yg)("h2",{id:"incremental-updates"},"Incremental updates"),(0,r.yg)("p",null,"You may also be willing to upsert the data in a table during a transformation.\nThis works the same way as for the load time upserts, but the ",(0,r.yg)("inlineCode",{parentName:"p"},"merge")," attribute is added to the table in the transformation configuration file file."),(0,r.yg)("p",null,"Say we did not use the merge strategy at load time and that after appending the data to the ",(0,r.yg)("inlineCode",{parentName:"p"},"sales.customers")," table,\nwe want to create a table ",(0,r.yg)("inlineCode",{parentName:"p"},"silver.customers_last_signup")," containing the most recent data for each customer.\nWe can do this using the ",(0,r.yg)("inlineCode",{parentName:"p"},"merge")," attribute in the transformation configuration file."),(0,r.yg)(o.A,{groupId:"transform",mdxType:"Tabs"},(0,r.yg)(l.A,{value:"sql",label:"SQL",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql",metastring:'title="metadata/transform/silver/unique_customers.sql"',title:'"metadata/transform/silver/unique_customers.sql"'},"\nSELECT * FROM sales.customers\n\n"))),(0,r.yg)(l.A,{value:"unique",label:"Configuration",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="metadata/transform/silver/unique_customers.sl.yml"',title:'"metadata/transform/silver/unique_customers.sl.yml"'},"transform:\n  default:\n    write: OVERWRITE\n  tasks:\n    - name: customers_last_signup\n      write: APPEND\n      merge:\n        timestamp: signup\n        key: [id]\n")))),(0,r.yg)("h2",{id:"targeting-another-datawarehouse"},"Targeting another datawarehouse"),(0,r.yg)("p",null,"Set the ",(0,r.yg)("inlineCode",{parentName:"p"},"connectionRef")," property to the right value in the ",(0,r.yg)("inlineCode",{parentName:"p"},"metadata/application.sl.yml")," file as explained previously in the ",(0,r.yg)("a",{parentName:"p",href:"load#targeting-another-datawarehouse"},"load step section")," ."))}f.isMDXComponent=!0}}]);