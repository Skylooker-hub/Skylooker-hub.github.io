"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5796],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6400:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(7813),a=n(7044),o=(n(9496),n(9613)),l=["components"],i={slug:"nodemailer-auto-sendEmail",title:"NodeMailer\u5b9e\u73b0\u81ea\u52a8\u53d1\u9001\u90ae\u4ef6\u529f\u80fd",authors:["skylooker"],tags:["nodemailer","SMTP"]},s=void 0,c={permalink:"/blog/nodemailer-auto-sendEmail",source:"@site/blog/2022-03-23-NodeMailer\u5b9e\u73b0\u81ea\u52a8\u53d1\u9001\u90ae\u4ef6\u529f\u80fd.md",title:"NodeMailer\u5b9e\u73b0\u81ea\u52a8\u53d1\u9001\u90ae\u4ef6\u529f\u80fd",description:"\u524d\u7f6e\u77e5\u8bc6\uff1a",date:"2022-03-23T00:00:00.000Z",formattedDate:"2022\u5e743\u670823\u65e5",tags:[{label:"nodemailer",permalink:"/blog/tags/nodemailer"},{label:"SMTP",permalink:"/blog/tags/smtp"}],readingTime:2.235,truncated:!1,authors:[{name:"Skylooker",title:"A Front End Coder",url:"https://github.com/Skylooker-hub",imageURL:"https://github.com/Skylooker-hub.png",key:"skylooker"}],frontMatter:{slug:"nodemailer-auto-sendEmail",title:"NodeMailer\u5b9e\u73b0\u81ea\u52a8\u53d1\u9001\u90ae\u4ef6\u529f\u80fd",authors:["skylooker"],tags:["nodemailer","SMTP"]},nextItem:{title:"\u5728Windows\u4e0b\u8fdb\u884cDocSearch\u722c\u866b",permalink:"/blog/windows-algoria-crawler"}},p={authorsImageUrls:[void 0]},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u524d\u7f6e\u77e5\u8bc6\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SMTP\u662f\u4e00\u4e2a\u76f8\u5bf9\u7b80\u5355\u7684\u57fa\u4e8e\u6587\u672c\u7684\u534f\u8bae\u3002\u5728\u5176\u4e4b\u4e0a\u6307\u5b9a\u4e86\u4e00\u6761\u6d88\u606f\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u63a5\u6536\u8005\uff08\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u88ab\u786e\u8ba4\u662f\u5b58\u5728\u7684\uff09\uff0c\u7136\u540e\u6d88\u606f\u6587\u672c\u4f1a\u88ab\u4f20\u8f93\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SMTP\u4e00\u822c\u7528\u4e8e\u7535\u5b50\u90ae\u4ef6\u4f20\u8f93\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SMTP\u662f\u4e00\u4e2a\u201c\u63a8\u201d\u7684\u534f\u8bae\uff0c\u5b83\u4e0d\u5141\u8bb8\u6839\u636e\u9700\u8981\u4ece\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u201c\u62c9\u201d\u6765\u6d88\u606f\uff0c\u201c\u62c9\u201d\u7684\u534f\u8bae\u4e00\u822c\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"POP3"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"IMAP"),"\u3002"))),(0,o.kt)("p",null,"\u901a\u5e38\uff0c\u4f60\u5728Email\u90ae\u7bb1\u7684\u8bbe\u7f6e\u91cc\uff0c\u53ef\u4ee5\u5f00\u542fSMTP\u670d\u52a1\uff0c\u4e4b\u540e\u83b7\u53d6",(0,o.kt)("strong",{parentName:"p"},"\u6388\u6743\u7801"),"\uff08\u8bb0\u4f4f\uff0c\u540e\u9762\u6709\u7528\uff09\u3002"),(0,o.kt)("p",null,"\u540c\u65f6\uff0c\u4f60\u4e5f\u9700\u8981\u4f60\u7684Email\u670d\u52a1\u5546\u7684SMTP\u5730\u5740\u4e0eSSL\u7aef\u53e3\u53f7\uff0c\u5982126\u90ae\u7bb1\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SMTP\u5730\u5740: smtp.126.com, SSL\u7aef\u53e3\u53f7\uff1a456")),(0,o.kt)("p",null,"\u63a5\u4e0b\u4ecb\u7ecd\u4e00\u4e0bNodeMailer\uff0cNodeMailer\u662f\u6211\u4eec\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Node"),"\u4e0a\u8fd0\u884c\u7684\u80fd\u591f\u4f7f\u7528SMTP\u53d1\u9001\u90ae\u4ef6\u7684\u6a21\u5757\uff0c\u5b83\u7b80\u5316\u4e86\u6211\u4eec\u7684\u5904\u7406\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u5c55\u793a\u4e00\u4e0b\u6211\u7684\u4f7f\u7528\u4ee3\u7801\uff1a"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"  \u8fd9\u6bb5\u4ee3\u7801\u662f\u8fd0\u884c\u5728\u6811\u8393\u6d3e\u4e0a\u7684\uff0c\u4f5c\u7528\u662f\u5728\u6811\u8393\u6d3e\u5f00\u673a\u4e4b\u540e\u5c06\u81ea\u5df1\u7684IP\u5730\u5740\u901a\u8fc7\u90ae\u4ef6\u53d1\u9001\u51fa\u6765\u3002"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const nodemailer = require("nodemailer");\nconst address = require("address")\nconst moment = require("moment")\n\n// async..await is not allowed in global scope, must use a wrapper\nasync function main() {\n\n  // create reusable transporter object using the default SMTP transport\n  let transporter = nodemailer.createTransport({\n    host: "smtp.126.com",\n    port: 465,\n    secure: true, // true for 465, false for other ports\n    auth: {\n      user: \'< \u4f60\u7684\u90ae\u7bb1\u5730\u5740 >\', // generated ethereal user\n      pass: \'< SMTP\u6388\u6743\u7801 >\', // generated ethereal password\n    },\n  });\n\n  // send mail with defined transport object\n  let info = await transporter.sendMail({\n    from: \'"myraspberrypi" < \u4f60\u7684\u90ae\u7bb1\u5730\u5740 >\', // sender address\n    to: "429068173@qq.com", // list of receivers\n    subject: `Hello\uff0c\u4e3b\u4eba at ${moment().format("YY/MM/DD")}`, // Subject line\n    text: "\u6211\u82cf\u9192\u4e86", // plain text body\n    html: `<p><b>ip:</b>${address.ip()}</p><p>\u795d\u4f60\u5929\u5929\u597d\u5fc3\u60c5\uff01</p>`, // html body\n  });\n\n  console.log("Message sent: %s", info.messageId);\n  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>\n\n  // Preview only available when sending through an Ethereal account\n  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));\n  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...\n}\n\nmain().catch(console.error);\n')),(0,o.kt)("p",null,"\u7ed3\u675f ~~"))}d.isMDXComponent=!0}}]);