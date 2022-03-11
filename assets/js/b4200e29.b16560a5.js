"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4111],{9613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),s=o,d=m["".concat(p,".").concat(s)]||m[s]||f[s]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6504:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return f}});var n=r(7813),o=r(7044),a=(r(9496),r(9613)),i=["components"],l={},p="BFC",c={unversionedId:"HTML CSS/BFC \u4e0e \u5916\u8fb9\u8ddd\u584c\u9677",id:"HTML CSS/BFC \u4e0e \u5916\u8fb9\u8ddd\u584c\u9677",title:"BFC",description:"\u6982\u5ff5",source:"@site/docs\\HTML CSS\\BFC \u4e0e \u5916\u8fb9\u8ddd\u584c\u9677.md",sourceDirName:"HTML CSS",slug:"/HTML CSS/BFC \u4e0e \u5916\u8fb9\u8ddd\u584c\u9677",permalink:"/docs/HTML CSS/BFC \u4e0e \u5916\u8fb9\u8ddd\u584c\u9677",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/intro"},next:{title:"Form \u6ce8\u610f\u4e8b\u9879",permalink:"/docs/HTML CSS/HTML Form"}},u={},f=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"BFC\u6982\u5ff5\u5e94\u7528",id:"bfc\u6982\u5ff5\u5e94\u7528",level:2},{value:"\u521b\u5efaBFC\u7684\u7b80\u5355\u65b9\u6cd5",id:"\u521b\u5efabfc\u7684\u7b80\u5355\u65b9\u6cd5",level:2}],m={toc:f};function s(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bfc"},"BFC"),(0,a.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uff08Block Formatting Context\uff09 \u5757\u7ea7\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587 \uff08CSS\u6e32\u67d3 \u5757\u7ea7\u76d2\u5b50 \u7684 \u533a\u57df\uff09")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"BFC\u76f8\u5f53\u4e8e\u8ff7\u4f60\u5e03\u5c40\uff0c\u91cc\u9762\u5b58\u5728\u591a\u4e2a\u5143\u7d20")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e0d\u540c\u7684BFC\u4e4b\u95f4\u4e0d\u4f1a\u4e92\u76f8\u5f71\u54cd"))),(0,a.kt)("h2",{id:"bfc\u6982\u5ff5\u5e94\u7528"},"BFC\u6982\u5ff5\u5e94\u7528"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6e05\u9664\u6d6e\u52a8 \uff08",(0,a.kt)("strong",{parentName:"p"},"\u6d6e\u52a8"),"\u4e0d\u4f1a\u5f71\u54cd\u5176\u5b83BFC\u4e2d\u5143\u7d20\u7684\u5e03\u5c40\uff0c\u800c",(0,a.kt)("strong",{parentName:"p"},"\u6e05\u9664\u6d6e\u52a8"),"\u53ea\u80fd\u6e05\u9664\u540c\u4e00BFC\u4e2d\u5728\u5b83\u524d\u9762\u7684\u5143\u7d20\u7684\u6d6e\u52a8\u3002\uff09")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5916\u8fb9\u8ddd\u584c\u9677\uff08\u5916\u8fb9\u8ddd\u6298\u53e0\uff08Margin collapsing\uff09\u4e5f\u53ea\u4f1a\u53d1\u751f\u5728\u5c5e\u4e8e",(0,a.kt)("strong",{parentName:"p"},"\u540c\u4e00BFC"),"\u7684\u5757\u7ea7\u5143\u7d20\u4e4b\u95f4\uff09\uff08\u7236\u5b50\u8d34\u8fb9\u6216\u5144\u5f1f\u8d34\u8fb9\uff0cMargin\u53ea\u4f1a\u53d6\u957f\u7684\uff09"))),(0,a.kt)("h2",{id:"\u521b\u5efabfc\u7684\u7b80\u5355\u65b9\u6cd5"},"\u521b\u5efaBFC\u7684\u7b80\u5355\u65b9\u6cd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7236\u5143\u7d20 display: inline-block\u5305\u88f9")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7236\u5143\u7d20 overflow: auto(\u975evisible)\u5305\u88f9")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7236\u5143\u7d20 display: flow-root\u5305\u88f9"))))}s.isMDXComponent=!0}}]);