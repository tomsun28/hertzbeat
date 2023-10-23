"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[84268],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,b=u["".concat(i,".").concat(h)]||u[h]||l[h]||o;return r?a.createElement(b,m(m({ref:t},c),{},{components:r})):a.createElement(b,m({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,m=new Array(o);m[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,m[1]=s;for(var p=2;p<o;p++)m[p]=r[p];return a.createElement.apply(null,m)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>m,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={id:"template",title:"Monitoring Template Here",sidebar_label:"Monitoring Template"},m=void 0,s={unversionedId:"template",id:"template",title:"Monitoring Template Here",description:"Hertzbeat is an open source, real-time monitoring tool with custom-monitor and agentLess.",source:"@site/docs/template.md",sourceDirName:".",slug:"/template",permalink:"/docs/template",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/template.md",tags:[],version:"current",frontMatter:{id:"template",title:"Monitoring Template Here",sidebar_label:"Monitoring Template"},sidebar:"docs",previous:{title:"Push Style Custom Monitoring",permalink:"/docs/advanced/extend-push"},next:{title:"Help center",permalink:"/docs/help/guide"}},i={},p=[{value:"Application service monitoring",id:"application-service-monitoring",level:3},{value:"Database monitoring",id:"database-monitoring",level:3},{value:"Operating system monitoring",id:"operating-system-monitoring",level:3},{value:"Middleware monitoring",id:"middleware-monitoring",level:3},{value:"CloudNative monitoring",id:"cloudnative-monitoring",level:3},{value:"Network monitoring",id:"network-monitoring",level:3}],c={toc:p};function l(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Hertzbeat is an open source, real-time monitoring tool with custom-monitor and agentLess.  ")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"We make protocols such as ",(0,n.kt)("inlineCode",{parentName:"p"},"Http, Jmx, Ssh, Snmp, Jdbc")," configurable, and you only need to configure ",(0,n.kt)("inlineCode",{parentName:"p"},"YML")," online to collect any metrics you want.",(0,n.kt)("br",{parentName:"p"}),"\n","Do you believe that you can immediately adapt a new monitoring type such as K8s or Docker just by configuring online?")),(0,n.kt)("p",null,"Here is the architecture.  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzBeat",src:r(10288).Z,width:"2814",height:"1772"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"We define all monitoring collection types (mysql, website, jvm, k8s) as yml templates, and users can import these templates into the hertzbeat system to support corresponding types of monitoring, which is very convenient!")," "),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(80047).Z,width:"4064",height:"2166"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Welcome everyone to contribute your customized general monitoring type YML template during use. The available templates are as follows:")),(0,n.kt)("h3",{id:"application-service-monitoring"},"Application service monitoring"),(0,n.kt)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-website.yml"},"Website monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-api.yml"},"HTTP API")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-ping.yml"},"PING Connectivity")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-port.yml"},"Port Telnet")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-fullsite.yml"},"Full site monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-ssl_cert.yml"},"SSL Cert monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-jvm.yml"},"JVM monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-springboot2.yml"},"SpringBoot2.0")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-springboot3.yml"},"SpringBoot3.0")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-ftp.yml"},"FTP Server")," ",(0,n.kt)("br",null)),(0,n.kt)("h3",{id:"database-monitoring"},"Database monitoring"),(0,n.kt)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-mysql.yml"},"MYSQL database monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-mariadb.yml"},"MariaDB database monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-postgresql.yml"},"PostgreSQL database monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-sqlserver.yml"},"SqlServer database monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-oracle.yml"},"Oracle database monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-dm.yml"},"DM database monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-opengauss.yml"},"OpenGauss database monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-iotdb.yml"},"IoTDB database monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-elasticsearch.yml"},"ElasticSearch database monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-mongodb.yml"},"MongoDB database monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-clickhouse.yml"},"ClickHouse database monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-redis.yml"},"Redis database monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-redis_sentinel.yml"},"Redis Sentinel database monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-redis_cluster.yml"},"Redis Cluster database monitoring")," ",(0,n.kt)("br",null)),(0,n.kt)("h3",{id:"operating-system-monitoring"},"Operating system monitoring"),(0,n.kt)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-linux.yml"},"Linux operating system monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-windows.yml"},"Windows operating system monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-ubuntu.yml"},"Ubuntu operating system monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-centos.yml"},"Centos operating system monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-euleros.yml"},"EulerOS operating system monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-coreos.yml"},"Fedora CoreOS operating system monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-opensuse.yml"},"OpenSUSE operating system monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-rockylinux.yml"},"Rocky Linux operating system monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-redhat.yml"},"Red Hat operating system monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-freebsd.yml"},"FreeBSD operating system monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-almalinux.yml"},"AlmaLinux operating system monitoring")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-debian.yml"},"Debian operating system monitoring")," ",(0,n.kt)("br",null)),(0,n.kt)("h3",{id:"middleware-monitoring"},"Middleware monitoring"),(0,n.kt)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-zookeeper.yml"},"Zookeeper")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-kafka.yml"},"Kafka")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-tomcat.yml"},"Tomcat")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-shenyu.yml"},"ShenYu")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-dynamic_tp.yml"},"DynamicTp")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-rabbitmq.yml"},"RabbitMQ")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-activemq.yml"},"ActiveMQ")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-jetty.yml"},"Jetty")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-flink.yml"},"Flink")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-nacos.yml"},"Nacos")," ",(0,n.kt)("br",null)),(0,n.kt)("h3",{id:"cloudnative-monitoring"},"CloudNative monitoring"),(0,n.kt)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-docker.yml"},"Docker")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-kubernetes.yml"},"Kubernetes")," ",(0,n.kt)("br",null)),(0,n.kt)("h3",{id:"network-monitoring"},"Network monitoring"),(0,n.kt)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-cisco_switch.yml"},"CiscoSwitch")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-hpe_switch.yml"},"HpeSwitch")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-huawei_switch.yml"},"HuaweiSwitch")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-tplink_switch.yml"},"TpLinkSwitch")," ",(0,n.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-h3c_switch.yml"},"H3CSwitch")," ",(0,n.kt)("br",null)),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Have Fun!")))}l.isMDXComponent=!0},80047:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/extend-point-1-0175fbb6d4bd1105c2596f7ccae83938.png"},10288:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/hertzbeat-arch-758b3f08da56310b5f1fe1d1bfd99d82.png"}}]);