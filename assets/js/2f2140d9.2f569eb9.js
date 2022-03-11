"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8768],{9613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(r),y=o,m=f["".concat(p,".").concat(y)]||f[y]||s[y]||c;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3712:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=r(7813),o=r(7044),c=(r(9496),r(9613)),a=["components"],i={},p="\u7c7b\u578b\u58f0\u660e\u548c\u7c7b\u578b\u522b\u540d",l={unversionedId:"TypeScript/ts \u7c7b\u578b\u58f0\u660e \u7c7b\u578b\u522b\u540d",id:"TypeScript/ts \u7c7b\u578b\u58f0\u660e \u7c7b\u578b\u522b\u540d",title:"\u7c7b\u578b\u58f0\u660e\u548c\u7c7b\u578b\u522b\u540d",description:"\u7c7b\u578b\u522b\u540d",source:"@site/docs\\TypeScript\\ts \u7c7b\u578b\u58f0\u660e \u7c7b\u578b\u522b\u540d.md",sourceDirName:"TypeScript",slug:"/TypeScript/ts \u7c7b\u578b\u58f0\u660e \u7c7b\u578b\u522b\u540d",permalink:"/docs/TypeScript/ts \u7c7b\u578b\u58f0\u660e \u7c7b\u578b\u522b\u540d",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6cdb\u578b generics",permalink:"/docs/TypeScript/ts \u6cdb\u578b"},next:{title:"TypeScript \u9ad8\u7ea7\u7c7b\u578b",permalink:"/docs/TypeScript/ts\u4ea4\u53c9\u7c7b\u578b \u8054\u5408\u7c7b\u578b"}},u={},s=[{value:"\u7c7b\u578b\u522b\u540d",id:"\u7c7b\u578b\u522b\u540d",level:2},{value:"\u7c7b\u578b\u58f0\u660e",id:"\u7c7b\u578b\u58f0\u660e",level:2}],f={toc:s};function y(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u7c7b\u578b\u58f0\u660e\u548c\u7c7b\u578b\u522b\u540d"},"\u7c7b\u578b\u58f0\u660e\u548c\u7c7b\u578b\u522b\u540d"),(0,c.kt)("h2",{id:"\u7c7b\u578b\u522b\u540d"},"\u7c7b\u578b\u522b\u540d"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"type Name = string;\ntype IProps = {\n  name: string;\n  children: React.ReactNode;\n}\n")),(0,c.kt)("h2",{id:"\u7c7b\u578b\u58f0\u660e"},"\u7c7b\u578b\u58f0\u660e"),(0,c.kt)("p",null,"\u7c7b\u578b\u58f0\u660e\u8bed\u53e5\uff1adeclare"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"declare let JQuery: (selector: string) => any;\n")),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://ts.xcatliu.com/basics/declaration-files.html#%E4%BB%80%E4%B9%88%E6%98%AF%E5%A3%B0%E6%98%8E%E8%AF%AD%E5%8F%A5"},"\u58f0\u660e\u6587\u4ef6"),"\n",(0,c.kt)("a",{parentName:"p",href:"https://github.com/zhongsp/TypeScript/blob/dev/zh/declaration-files/library-structures.md"},"\u6a21\u5757\u58f0\u660e")))}y.isMDXComponent=!0}}]);