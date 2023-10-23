"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[284],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(r),k=n,s=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return r?a.createElement(s,i(i({ref:t},c),{},{components:r})):a.createElement(s,i({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const l={id:"upgrade",title:"HertzBeat \u65b0\u7248\u672c\u66f4\u65b0\u6307\u5f15",sidebar_label:"\u7248\u672c\u66f4\u65b0\u6307\u5f15"},i=void 0,o={unversionedId:"start/upgrade",id:"start/upgrade",title:"HertzBeat \u65b0\u7248\u672c\u66f4\u65b0\u6307\u5f15",description:"HertzBeat \u7684\u5143\u6570\u636e\u4fe1\u606f\u4fdd\u5b58\u5728 H2 \u6216 Mysql, PostgreSQL \u5173\u7cfb\u578b\u6570\u636e\u5e93\u5185, \u91c7\u96c6\u6307\u6807\u6570\u636e\u5b58\u50a8\u5728 TDengine, IotDB \u7b49\u65f6\u5e8f\u6570\u636e\u5e93\u5185\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/start/upgrade.md",sourceDirName:"start",slug:"/start/upgrade",permalink:"/zh-cn/docs/start/upgrade",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/start/upgrade.md",tags:[],version:"current",frontMatter:{id:"upgrade",title:"HertzBeat \u65b0\u7248\u672c\u66f4\u65b0\u6307\u5f15",sidebar_label:"\u7248\u672c\u66f4\u65b0\u6307\u5f15"},sidebar:"docs",previous:{title:"Rainbond\u65b9\u5f0f\u90e8\u7f72",permalink:"/zh-cn/docs/start/rainbond-deploy"},next:{title:"\u4f7f\u7528IoTDB\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)",permalink:"/zh-cn/docs/start/iotdb-init"}},p={},d=[{value:"Docker\u90e8\u7f72\u65b9\u5f0f\u7684\u5347\u7ea7",id:"docker\u90e8\u7f72\u65b9\u5f0f\u7684\u5347\u7ea7",level:3},{value:"\u5b89\u88c5\u5305\u90e8\u7f72\u65b9\u5f0f\u7684\u5347\u7ea7",id:"\u5b89\u88c5\u5305\u90e8\u7f72\u65b9\u5f0f\u7684\u5347\u7ea7",level:3}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"HertzBeat \u7684\u5143\u6570\u636e\u4fe1\u606f\u4fdd\u5b58\u5728 H2 \u6216 Mysql, PostgreSQL \u5173\u7cfb\u578b\u6570\u636e\u5e93\u5185, \u91c7\u96c6\u6307\u6807\u6570\u636e\u5b58\u50a8\u5728 TDengine, IotDB \u7b49\u65f6\u5e8f\u6570\u636e\u5e93\u5185\u3002  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5347\u7ea7\u524d\u60a8\u9700\u8981\u4fdd\u5b58\u5907\u4efd\u597d\u6570\u636e\u5e93\u7684\u6570\u636e\u6587\u4ef6")," "),(0,n.kt)("h3",{id:"docker\u90e8\u7f72\u65b9\u5f0f\u7684\u5347\u7ea7"},"Docker\u90e8\u7f72\u65b9\u5f0f\u7684\u5347\u7ea7"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u82e5\u4f7f\u7528\u4e86\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u5907\u4efd ",(0,n.kt)("inlineCode",{parentName:"li"},"docker cp hertzbeat:/opt/hertzbeat/define ./define")," \u5f53\u524d\u8fd0\u884c docker \u5bb9\u5668\u91cc\u9762\u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"/opt/hertzbeat/define")," \u76ee\u5f55\u5230\u5f53\u524d\u4e3b\u673a\u4e0b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker cp hertzbeat:/opt/hertzbeat/define ./define")),(0,n.kt)("li",{parentName:"ul"},"\u7136\u540e\u5728\u540e\u7eed\u5347\u7ea7\u542f\u52a8 docker \u5bb9\u5668\u7684\u65f6\u5019\u9700\u8981\u6302\u8f7d\u4e0a\u8fd9\u4e2a define \u76ee\u5f55\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"-v $(pwd)/define:/opt/hertzbeat/define")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-v $(pwd)/define:/opt/hertzbeat/define")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u82e5\u4f7f\u7528\u5185\u7f6e\u9ed8\u8ba4 H2 \u6570\u636e\u5e93 "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9700\u6302\u8f7d\u6216\u5907\u4efd ",(0,n.kt)("inlineCode",{parentName:"li"},"-v $(pwd)/data:/opt/hertzbeat/data")," \u5bb9\u5668\u5185\u7684\u6570\u636e\u5e93\u6587\u4ef6\u76ee\u5f55 ",(0,n.kt)("inlineCode",{parentName:"li"},"/opt/hertzbeat/data")),(0,n.kt)("li",{parentName:"ul"},"\u505c\u6b62\u5e76\u5220\u9664\u5bb9\u5668\uff0c\u5220\u9664\u672c\u5730 HertzBeat docker \u955c\u50cf\uff0c\u62c9\u53d6\u65b0\u7248\u672c\u955c\u50cf"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,n.kt)("a",{parentName:"li",href:"docker-deploy"},"Docker\u5b89\u88c5HertzBeat")," \u4f7f\u7528\u65b0\u955c\u50cf\u521b\u5efa\u65b0\u7684\u5bb9\u5668\uff0c\u6ce8\u610f\u9700\u8981\u5c06\u6570\u636e\u5e93\u6587\u4ef6\u76ee\u5f55\u6302\u8f7d ",(0,n.kt)("inlineCode",{parentName:"li"},"-v $(pwd)/data:/opt/hertzbeat/data")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u82e5\u4f7f\u7528\u5916\u7f6e\u5173\u7cfb\u578b\u6570\u636e\u5e93 Mysql, PostgreSQL"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65e0\u9700\u6302\u8f7d\u5907\u4efd\u5bb9\u5668\u5185\u7684\u6570\u636e\u5e93\u6587\u4ef6\u76ee\u5f55"),(0,n.kt)("li",{parentName:"ul"},"\u505c\u6b62\u5e76\u5220\u9664\u5bb9\u5668\uff0c\u5220\u9664\u672c\u5730 HertzBeat docker \u955c\u50cf\uff0c\u62c9\u53d6\u65b0\u7248\u672c\u955c\u50cf"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,n.kt)("a",{parentName:"li",href:"docker-deploy"},"Docker\u5b89\u88c5HertzBeat")," \u4f7f\u7528\u65b0\u955c\u50cf\u521b\u5efa\u65b0\u7684\u5bb9\u5668\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"application.yml"),"\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5373\u53ef")))),(0,n.kt)("h3",{id:"\u5b89\u88c5\u5305\u90e8\u7f72\u65b9\u5f0f\u7684\u5347\u7ea7"},"\u5b89\u88c5\u5305\u90e8\u7f72\u65b9\u5f0f\u7684\u5347\u7ea7"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u82e5\u4f7f\u7528\u5185\u7f6e\u9ed8\u8ba4 H2 \u6570\u636e\u5e93"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5907\u4efd\u5b89\u88c5\u5305\u4e0b\u7684\u6570\u636e\u5e93\u6587\u4ef6\u76ee\u5f55 ",(0,n.kt)("inlineCode",{parentName:"li"},"/opt/hertzbeat/data")," "),(0,n.kt)("li",{parentName:"ul"},"\u82e5\u6709\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248\uff0c\u9700\u5907\u4efd ",(0,n.kt)("inlineCode",{parentName:"li"},"/opt/hertzbeat/define")," \u4e0b\u7684\u6a21\u7248YML"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bin/shutdown.sh")," \u505c\u6b62 HertzBeat \u8fdb\u7a0b\uff0c\u4e0b\u8f7d\u65b0\u5b89\u88c5\u5305"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,n.kt)("a",{parentName:"li",href:"package-deploy"},"\u5b89\u88c5\u5305\u5b89\u88c5HertzBeat")," \u4f7f\u7528\u65b0\u5b89\u88c5\u5305\u542f\u52a8"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u82e5\u4f7f\u7528\u5916\u7f6e\u5173\u7cfb\u578b\u6570\u636e\u5e93 Mysql, PostgreSQL"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65e0\u9700\u5907\u4efd\u5b89\u88c5\u5305\u4e0b\u7684\u6570\u636e\u5e93\u6587\u4ef6\u76ee\u5f55"),(0,n.kt)("li",{parentName:"ul"},"\u82e5\u6709\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248\uff0c\u9700\u5907\u4efd ",(0,n.kt)("inlineCode",{parentName:"li"},"/opt/hertzbeat/define")," \u4e0b\u7684\u6a21\u7248YML"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bin/shutdown.sh")," \u505c\u6b62 HertzBeat \u8fdb\u7a0b\uff0c\u4e0b\u8f7d\u65b0\u5b89\u88c5\u5305"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,n.kt)("a",{parentName:"li",href:"package-deploy"},"\u5b89\u88c5\u5305\u5b89\u88c5HertzBeat")," \u4f7f\u7528\u65b0\u5b89\u88c5\u5305\u542f\u52a8\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"application.yml"),"\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5373\u53ef")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"HAVE FUN")))}u.isMDXComponent=!0}}]);