"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7156],{9613:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(k,l(l({ref:n},s),{},{components:t})):a.createElement(k,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6063:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=t(7813),r=t(7044),o=(t(9496),t(9613)),l=["components"],i={slug:"windows-algoria-crawler",title:"\u5728Windows\u4e0b\u8fdb\u884cDocSearch\u722c\u866b",authors:["skylooker"],tags:["Aligolia","DocSearch"]},c=void 0,p={permalink:"/blog/windows-algoria-crawler",source:"@site/blog\\2022-03-23-\u5728Windows\u4e0b\u8fdb\u884cAlgolia\u722c\u866b.md",title:"\u5728Windows\u4e0b\u8fdb\u884cDocSearch\u722c\u866b",description:"Algolia \u56fd\u5916\u8457\u540d\u7684\u641c\u7d22\u63a8\u8350\u670d\u52a1\u63d0\u4f9b\u5546\u3002",date:"2022-03-23T00:00:00.000Z",formattedDate:"2022\u5e743\u670823\u65e5",tags:[{label:"Aligolia",permalink:"/blog/tags/aligolia"},{label:"DocSearch",permalink:"/blog/tags/doc-search"}],readingTime:2.505,truncated:!1,authors:[{name:"Skylooker",title:"A Front End Coder",url:"https://github.com/Skylooker-hub",imageURL:"https://github.com/Skylooker-hub.png",key:"skylooker"}],frontMatter:{slug:"windows-algoria-crawler",title:"\u5728Windows\u4e0b\u8fdb\u884cDocSearch\u722c\u866b",authors:["skylooker"],tags:["Aligolia","DocSearch"]},prevItem:{title:"NodeMailer\u5b9e\u73b0\u81ea\u52a8\u53d1\u9001\u90ae\u4ef6\u529f\u80fd",permalink:"/blog/nodemailer-auto-sendEmail"}},s={authorsImageUrls:[void 0]},u=[],m={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Algolia \u56fd\u5916\u8457\u540d\u7684\u641c\u7d22\u63a8\u8350\u670d\u52a1\u63d0\u4f9b\u5546\u3002"),(0,o.kt)("p",null,"DocSearch\u662f\u5efa\u7acb\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Algolia"),"\u4e4b\u4e0a\u7684\u670d\u52a1\uff0c\u4e3a\u7f51\u7ad9\u5efa\u7acb\u6587\u6863\u641c\u7d22\u670d\u52a1\uff0c\u4e5f\u4e3a\u975e\u5546\u4e1a\u7684\u4e2a\u4eba\u6216\u7ec4\u7ec7\u63d0\u4f9b\u514d\u8d39\u7684\u670d\u52a1\u3002"),(0,o.kt)("p",null,"DocSearch\u4e5f\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"DocuSaurus"),"\u96c6\u6210\u7684\u641c\u7d22\u670d\u52a1\uff0c\u53ea\u9700\u7ed1\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"Algolia"),"\u5373\u53ef\uff0c\u5982\u6211\u7684"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const config = {\n  ...others,  \n  themeConfig: ({\n  ...others,\n  algolia: {\n        apiKey: "<algolia apiKey>",\n        indexName: "docsearch",\n        appId: "<appId>",\n      }\n  })\n}\n\n')),(0,o.kt)("p",null,"\u73b0\u5728\u5c31\u5269\u4e0b\u8ba9",(0,o.kt)("inlineCode",{parentName:"p"},"DocSearch"),"\u722c\u53d6\u4f60\u7684\u7f51\u7ad9\u7684\u6587\u6863\uff0c\u751f\u6210\u7279\u5b9a\u7684\u6570\u636e\u653e\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Algolia"),"\u4e0a\u4e86\u3002"),(0,o.kt)("p",null,"\u867d\u7136 ",(0,o.kt)("inlineCode",{parentName:"p"},"DocSearch")," \u6709\u7ebf\u4e0a\u722c\u866b\u670d\u52a1\u6765\u722c\u53d6\u4f60\u7684\u7f51\u7ad9\uff0c\u4f46\u603b\u662f\u4f1a\u906d\u5230\u62d2\u7edd\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We're always sad to have to turn down applications, but with the number of requests we receive every day, we've had to focus on fair criteria. We hope you understand.")),(0,o.kt)("p",null,"\u8fd9\u65f6\u5c31\u9700\u8981\u6211\u4eec\u81ea\u98df\u5176\u529b\u4e86\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/legacy/run-your-own"},"\u81ea\u884c\u722c\u53d6\u7f51\u7ad9\u6570\u636e\u63d0\u4f9b\u7ed9Algolia")),(0,o.kt)("p",null,"\u5177\u4f53\u8fc7\u7a0b\u5982\u4e0b\uff1a"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5148\u81ea\u884c\u6ce8\u518cAlgolia\u670d\u52a1\u5e76\u65b0\u5efa\u4e00\u4e2a\u6587\u6863index\uff0c\u540e\u9762\u9700\u8981\u7528\u5230"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DocSearch"),"\u63d0\u4f9b\u4e00\u4e2adocker\u955c\u50cf\uff0c\u9700\u8981\u6211\u4eec\u81ea\u884c\u5b89\u88c5docker\u670d\u52a1\uff08Windows\u63a8\u8350docker desktop\uff09\uff0c\u4e4b\u540e\u4e0b\u8f7d\u955c\u50cf\u5e76\u8fd0\u884c\u3002"),(0,o.kt)("p",null,"\u8fd0\u884cdocker\u955c\u50cf\u8fd9\u91cc\u6709\u56db\u4e2a\u6b65\u9aa4\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  mkdir docSearch & cd docSearch\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},".env"),"\u6587\u4ef6\uff0c\u5e76\u586b\u5199\u4fe1\u606f"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-env"},"APPLICATION_ID=<your applicationId>\nAPI_KEY=<your apikey>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"docsearch.json"),"\u6587\u4ef6\uff0c\u5e76\u586b\u5199\u4fe1\u606f"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "index_name": "<your index_name>",\n  "start_urls": [\n    "<your website_url>"\n  ],\n  "sitemap_urls": [\n    "<your website_sitemap_url>"\n  ],\n  "stop_urls": [\n    "/search",\n    "/v3me",\n    "/playground",\n    "/inspector"\n  ],\n  "sitemap_alternate_links": true,\n  "selectors": {\n    "lvl0": {\n      "selector": "(//ul[contains(@class,\'menu__list\')]//a[contains(@class, \'menu__link menu__link--sublist menu__link--active\')]/text() | //nav[contains(@class, \'navbar\')]//a[contains(@class, \'navbar__link--active\')]/text())[last()]",\n      "type": "xpath",\n      "global": true,\n      "default_value": "Documentation"\n    },\n    "lvl1": "header h1",\n    "lvl2": "article h2",\n    "lvl3": "article h3",\n    "lvl4": "article h4",\n    "lvl5": "article h5, article td:first-child",\n    "lvl6": "article h6",\n    "text": "article p, article li, article td:last-child"\n  },\n  "strip_chars": " .,;:#",\n  "custom_settings": {\n    "separatorsToIndex": "_",\n    "attributesForFaceting": [\n      "language",\n      "version",\n      "type",\n      "docusaurus_tag"\n    ],\n    "attributesToRetrieve": [\n      "hierarchy",\n      "content",\n      "anchor",\n      "url",\n      "url_without_anchor",\n      "type"\n    ]\n  },\n  "js_render": true,\n  "nb_hits": 856\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u8be5\u6587\u4ef6\u5939\u8def\u5f84\u4e0b\u8fd0\u884c\u547d\u4ee4\uff08windows\u73af\u5883\u4e0b\u8bf7\u4f7f\u7528gitBash\uff0c\u5e76\u5728\u547d\u4ee4\u524d\u9762\u52a0\u4e0a",(0,o.kt)("inlineCode",{parentName:"p"},"winpty"),"\uff09"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'  docker run -it --env-file=.env -e "CONFIG=$(cat docsearch.json | jq -r tostring)" algolia/docsearch-scraper\n')))),(0,o.kt)("p",null,"\u8fd0\u884c\u7ed3\u675f\u540e\uff0c\u5e94\u8be5\u5c31\u80fd\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Algolia"),"\u91cc\u9762\u770b\u5230\u751f\u6210\u7684\u6587\u6863\u6570\u636e\u4e86(",(0,o.kt)("em",{parentName:"p"},"^_^"),")"))}d.isMDXComponent=!0}}]);