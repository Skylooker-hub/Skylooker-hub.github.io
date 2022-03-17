"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6979],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6182:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(7813),a=r(7044),i=(r(9496),r(9613)),o=["components"],c={},u="Reactivity",l={unversionedId:"Vue3.0/Vue3.0 Reactivity\u63a2\u7a76",id:"Vue3.0/Vue3.0 Reactivity\u63a2\u7a76",title:"Reactivity",description:"1\u3001 Vue3.0\u7684\u54cd\u5e94\u5f0f\u662f\u57fa\u4e8e\uff08Proxy\u548cReflect\u5b9e\u73b0\u7684\uff09\u3002",source:"@site/docs\\Vue3.0\\Vue3.0 Reactivity\u63a2\u7a76.md",sourceDirName:"Vue3.0",slug:"/Vue3.0/Vue3.0 Reactivity\u63a2\u7a76",permalink:"/docs/Vue3.0/Vue3.0 Reactivity\u63a2\u7a76",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4ee3\u6570\u6548\u5e94",permalink:"/docs/React/\u4ee3\u6570\u6548\u5e94"},next:{title:"\u5c0f\u7a0b\u5e8f\u6846\u67b6",permalink:"/docs/\u5c0f\u7a0b\u5e8f/\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u6846\u67b6\u7684\u5bf9\u6bd4"}},p={},s=[],f={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reactivity"},"Reactivity"),(0,i.kt)("p",null,"1\u3001 Vue3.0\u7684\u54cd\u5e94\u5f0f\u662f\u57fa\u4e8e\uff08Proxy\u548cReflect\u5b9e\u73b0\u7684\uff09\u3002"),(0,i.kt)("p",null,"2\u3001 \u4e0d\u540c\u4e8e Vue2.0 Object.defineProperty, \u5bf9\u5c5e\u6027\u8fdb\u884c\u76d1\u542c\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Vue2.0\u54cd\u5e94\u5f0f\u7684\u4e0d\u8db3\uff1a"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u5bf9\u76d1\u542c\u5c5e\u6027\u589e\u52a0\u3001\u5220\u9664\u64cd\u4f5c\uff08Vue.set \u548c Vue.delete \uff09")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9700\u8981\u5904\u7406\u591a\u4e2a\u5c5e\u6027\uff0c\u4e5f\u9700\u8981\u9012\u5f52\u5904\u7406\u591a\u5c42\u5bf9\u8c61\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u96be\u4ee5\u5904\u7406\u6570\u7ec4\uff0c\uff08\u901a\u8fc7\u5305\u88c5\u6570\u7ec4\u65b9\u6cd5\u89e3\u51b3\uff09\u3002"))))),(0,i.kt)("p",null,"3\u3001Vue3.0 \u54cd\u5e94\u5f0f \u57fa\u4e8e \u5bf9\u8c61\u7ea7\u522b\u7684\u76d1\u542c\u3002 \u4e0d\u9700\u8981\u904d\u5386\u591a\u4e2a\u5c5e\u6027\u3002\u53ea\u9700\u5305\u88c5\u4e00\u6b21\uff0c\u5c31\u53ef\u5b8c\u6210\u54cd\u5e94\u5f0f\u3002"),(0,i.kt)("p",null,"\u901a\u5e38\u7684\u54cd\u5e94\u8fc7\u7a0b\uff1a reactive\uff08\u54cd\u5e94\u5f0f\u5305\u88c5\uff09 + effect\uff08Proxy Handers \u4e2dtrack\u65b9\u6cd5\u4f9d\u8d56\u6536\u96c6\uff09\uff0c reactive\u5bf9\u8c61\u53d1\u751f\u6539\u53d8\uff0c\u89e6\u53d1Proxy Handers \u4e2d trgger\u65b9\u6cd5\uff0c\u904d\u5386\u6267\u884c\u4f9d\u8d56\u6570\u7ec4\u3002"),(0,i.kt)("p",null,"4\u3001vue watchEffect/watch \u65b9\u6cd5 \u4f1a\u6df1\u5ea6\u904d\u5386\u5bf9\u8c61\uff08traverse\uff09\uff0c\u5c06\u8be5\u4f9d\u8d56\u88ab\u591a\u4e2a\u5d4c\u5957\u5bf9\u8c61\u6536\u96c6\uff0c\u8fbe\u5230\u6df1\u5ea6\u76d1\u542c\u7684\u76ee\u7684\u3002"))}m.isMDXComponent=!0}}]);