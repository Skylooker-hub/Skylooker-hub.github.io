"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9400],{9613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4836:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(7813),a=n(7044),l=(n(9496),n(9613)),o=["components"],c={},i="TypeScript \u7c7b",p={unversionedId:"TypeScript/ts\u7c7b",id:"TypeScript/ts\u7c7b",title:"TypeScript \u7c7b",description:"\u7c7b class",source:"@site/docs/TypeScript/ts\u7c7b.md",sourceDirName:"TypeScript",slug:"/TypeScript/ts\u7c7b",permalink:"/docs/TypeScript/ts\u7c7b",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u63a5\u53e3interface",permalink:"/docs/TypeScript/ts\u63a5\u53e3"},next:{title:"TypeScript \u9ad8\u7ea7\u7c7b\u578b",permalink:"/docs/TypeScript/ts\u9ad8\u7ea7\u7c7b\u578b"}},s={},u=[{value:"\u7c7b class",id:"\u7c7b-class",level:2},{value:"\u516c\u5171\uff0c\u79c1\u6709\u4e0e\u53d7\u4fdd\u62a4\u7684\u4fee\u9970\u7b26",id:"\u516c\u5171\u79c1\u6709\u4e0e\u53d7\u4fdd\u62a4\u7684\u4fee\u9970\u7b26",level:2},{value:"readonly\u4fee\u9970\u7b26\u3001\u53c2\u6570\u5c5e\u6027",id:"readonly\u4fee\u9970\u7b26\u53c2\u6570\u5c5e\u6027",level:2},{value:"\u5b58\u53d6\u5668",id:"\u5b58\u53d6\u5668",level:2},{value:"\u9759\u6001\u5c5e\u6027",id:"\u9759\u6001\u5c5e\u6027",level:2},{value:"\u62bd\u8c61\u7c7b",id:"\u62bd\u8c61\u7c7b",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"typescript-\u7c7b"},"TypeScript \u7c7b"),(0,l.kt)("h2",{id:"\u7c7b-class"},"\u7c7b class"),(0,l.kt)("p",null,"class\u7531ES5\u5f15\u5165\uff0c\u4f7fJS\u80fd\u591f\u4f7f\u7528\u9762\u5bf9\u5bf9\u8c61\u7f16\u7a0b\u65b9\u5f0f\u7f16\u7a0b\u3002"),(0,l.kt)("h2",{id:"\u516c\u5171\u79c1\u6709\u4e0e\u53d7\u4fdd\u62a4\u7684\u4fee\u9970\u7b26"},"\u516c\u5171\uff0c\u79c1\u6709\u4e0e\u53d7\u4fdd\u62a4\u7684\u4fee\u9970\u7b26"),(0,l.kt)("p",null,"public\uff08\u9ed8\u8ba4\uff09\uff1a\u81ea\u7531\u8bbf\u95ee\u7c7b\u6210\u5458\u3002\nprivate\uff1a\u4e0d\u5141\u8bb8\u5916\u90e8\u8bbf\u95ee\u3002\nprotected\uff1a\u4e0d\u5141\u8bb8\u5916\u90e8\u8bbf\u95ee\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"protected"),"\u6210\u5458\u5728\u6d3e\u751f\u7c7b\u4e2d\u4ecd\u7136\u53ef\u4ee5\u8bbf\u95ee\u3002"),(0,l.kt)("h2",{id:"readonly\u4fee\u9970\u7b26\u53c2\u6570\u5c5e\u6027"},"readonly\u4fee\u9970\u7b26\u3001\u53c2\u6570\u5c5e\u6027"),(0,l.kt)("p",null,"readonly \u53ea\u8bfb\u5c5e\u6027"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class Animal {\n    constructor(private name: string) { }\n    move(distanceInMeters: number) {\n        console.log(`${this.name} moved ${distanceInMeters}m.`);\n    }\n}\n\n")),(0,l.kt)("p",null,"\u53c2\u6570\u5c5e\u6027\u901a\u8fc7",(0,l.kt)("strong",{parentName:"p"},"\u7ed9\u6784\u9020\u51fd\u6570\u53c2\u6570\u6dfb\u52a0\u4e00\u4e2a\u8bbf\u95ee\u9650\u5b9a\u7b26\u6765\u58f0\u660e"),"\u3002 \u4f7f\u7528private\u9650\u5b9a\u4e00\u4e2a\u53c2\u6570\u5c5e\u6027\u4f1a\u58f0\u660e\u5e76\u521d\u59cb\u5316\u4e00\u4e2a\u79c1\u6709\u6210\u5458\uff1b\u5bf9\u4e8epublic\u548cprotected\u6765\u8bf4\u4e5f\u662f\u4e00\u6837\u3002"),(0,l.kt)("h2",{id:"\u5b58\u53d6\u5668"},"\u5b58\u53d6\u5668"),(0,l.kt)("p",null,"TypeScript\u652f\u6301\u901a\u8fc7getters/setters\u6765\u622a\u53d6\u5bf9\u5bf9\u8c61\u6210\u5458\u7684\u8bbf\u95ee\u3002 \u5b83\u80fd\u5e2e\u52a9\u4f60\u6709\u6548\u7684\u63a7\u5236\u5bf9\u5bf9\u8c61\u6210\u5458\u7684\u8bbf\u95ee\u3002\n\u53ea\u5e26\u6709get\u4e0d\u5e26\u6709set\u7684\u5b58\u53d6\u5668\u81ea\u52a8\u88ab\u63a8\u65ad\u4e3areadonly\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const fullNameMaxLength = 10;\n\nclass Employee {\n    private _fullName: string;\n\n    get fullName(): string {\n        return this._fullName;\n    }\n\n    set fullName(newName: string) {\n        if (newName && newName.length > fullNameMaxLength) {\n            throw new Error("fullName has a max length of " + fullNameMaxLength);\n        }\n\n        this._fullName = newName;\n    }\n}\n')),(0,l.kt)("h2",{id:"\u9759\u6001\u5c5e\u6027"},"\u9759\u6001\u5c5e\u6027"),(0,l.kt)("p",null,"static,\u8fd9\u4e9b\u5c5e\u6027\u5b58\u5728\u4e8e\u7c7b\u672c\u8eab\u4e0a\u9762\u800c\u4e0d\u662f\u7c7b\u7684\u5b9e\u4f8b\u4e0a\u3002"),(0,l.kt)("h2",{id:"\u62bd\u8c61\u7c7b"},"\u62bd\u8c61\u7c7b"),(0,l.kt)("p",null,"abstract \u7c7b\uff0c\u4e00\u822c\u4e0d\u4f1a\u76f4\u63a5\u88ab\u5b9e\u4f8b\u5316\uff0c\u62bd\u8c61\u7c7b\u4e2d\u9664\u62bd\u8c61\u65b9\u6cd5\u5916\u90fd\u53ef\u4ee5\u6709\u5177\u4f53\u5b9e\u73b0\u3002\nabstract\u65b9\u6cd5\u65e0\u5177\u4f53\u5b9e\u73b0\uff0c\u9700\u8981\u5728\u6d3e\u751f\u7c7b\u4e2d\u5b9e\u73b0\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'abstract class Animal {\n    abstract makeSound(): void;\n    move(): void {\n        console.log("roaming the earth...");\n    }\n}\n')))}f.isMDXComponent=!0}}]);