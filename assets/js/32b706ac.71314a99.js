"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[5823],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||y[u]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={sidebar_position:280,title:"stage"},o=void 0,l={unversionedId:"cli/stage",id:"version-1.2.0/cli/stage",title:"stage",description:"Synopsis",source:"@site/versioned_docs/version-1.2.0/0800-cli/stage.md",sourceDirName:"0800-cli",slug:"/cli/stage",permalink:"/docs/cli/stage",draft:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/versioned_docs/version-1.2.0/0800-cli/stage.md",tags:[],version:"1.2.0",sidebarPosition:280,frontMatter:{sidebar_position:280,title:"stage"},sidebar:"starlakeSidebar",previous:{title:"site",permalink:"/docs/cli/site"},next:{title:"table-dependencies",permalink:"/docs/cli/table-dependencies"}},s={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:c},d="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"synopsis"},"Synopsis"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"starlake stage ","[options]")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Move the files from the landing area to the pending area."),(0,a.yg)("p",null,"Files are loaded one domain at a time."),(0,a.yg)("p",null,'Each domain has its own directory and is specified in the "directory" key of Domain YML file\ncompressed files are uncompressed if a corresponding ack file exist.'),(0,a.yg)("p",null,"Compressed files are recognized by their extension which should be one of .tgz, .zip, .gz.\nraw file should also have a corresponding ack file\nbefore moving the files to the pending area, the ack files are deleted."),(0,a.yg)("p",null,'To import files without ack specify an empty "ack" key (aka ack:"") in the domain YML file.'),(0,a.yg)("p",null,'"ack" is the default ack extension searched for but you may specify a different one in the domain YML file.'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"comet import\n")),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:null},"Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"--domains:",(0,a.yg)("inlineCode",{parentName:"td"},"domain1,domain2...")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("em",{parentName:"td"},"Optional")),(0,a.yg)("td",{parentName:"tr",align:null},"Domains to stage")))))}y.isMDXComponent=!0}}]);