"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"nodemailer-auto-sendEmail","metadata":{"permalink":"/blog/nodemailer-auto-sendEmail","source":"@site/blog/2022-03-23-NodeMailer\u5b9e\u73b0\u81ea\u52a8\u53d1\u9001\u90ae\u4ef6\u529f\u80fd.md","title":"NodeMailer\u5b9e\u73b0\u81ea\u52a8\u53d1\u9001\u90ae\u4ef6\u529f\u80fd","description":"\u524d\u7f6e\u77e5\u8bc6\uff1a","date":"2022-03-23T00:00:00.000Z","formattedDate":"2022\u5e743\u670823\u65e5","tags":[{"label":"nodemailer","permalink":"/blog/tags/nodemailer"},{"label":"SMTP","permalink":"/blog/tags/smtp"}],"readingTime":2.235,"truncated":false,"authors":[{"name":"Skylooker","title":"A Front End Coder","url":"https://github.com/Skylooker-hub","imageURL":"https://github.com/Skylooker-hub.png","key":"skylooker"}],"frontMatter":{"slug":"nodemailer-auto-sendEmail","title":"NodeMailer\u5b9e\u73b0\u81ea\u52a8\u53d1\u9001\u90ae\u4ef6\u529f\u80fd","authors":["skylooker"],"tags":["nodemailer","SMTP"]},"nextItem":{"title":"\u5728Windows\u4e0b\u8fdb\u884cDocSearch\u722c\u866b","permalink":"/blog/windows-algoria-crawler"}},"content":"\u524d\u7f6e\u77e5\u8bc6\uff1a\\n\\n- SMTP\u662f\u4e00\u4e2a\u76f8\u5bf9\u7b80\u5355\u7684\u57fa\u4e8e\u6587\u672c\u7684\u534f\u8bae\u3002\u5728\u5176\u4e4b\u4e0a\u6307\u5b9a\u4e86\u4e00\u6761\u6d88\u606f\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u63a5\u6536\u8005\uff08\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u88ab\u786e\u8ba4\u662f\u5b58\u5728\u7684\uff09\uff0c\u7136\u540e\u6d88\u606f\u6587\u672c\u4f1a\u88ab\u4f20\u8f93\u3002\\n\\n- SMTP\u4e00\u822c\u7528\u4e8e\u7535\u5b50\u90ae\u4ef6\u4f20\u8f93\u3002\\n\\n- SMTP\u662f\u4e00\u4e2a\u201c\u63a8\u201d\u7684\u534f\u8bae\uff0c\u5b83\u4e0d\u5141\u8bb8\u6839\u636e\u9700\u8981\u4ece\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u201c\u62c9\u201d\u6765\u6d88\u606f\uff0c\u201c\u62c9\u201d\u7684\u534f\u8bae\u4e00\u822c\u662f`POP3`\u6216`IMAP`\u3002\\n\\n\u901a\u5e38\uff0c\u4f60\u5728Email\u90ae\u7bb1\u7684\u8bbe\u7f6e\u91cc\uff0c\u53ef\u4ee5\u5f00\u542fSMTP\u670d\u52a1\uff0c\u4e4b\u540e\u83b7\u53d6**\u6388\u6743\u7801**\uff08\u8bb0\u4f4f\uff0c\u540e\u9762\u6709\u7528\uff09\u3002\\n\\n\u540c\u65f6\uff0c\u4f60\u4e5f\u9700\u8981\u4f60\u7684Email\u670d\u52a1\u5546\u7684SMTP\u5730\u5740\u4e0eSSL\u7aef\u53e3\u53f7\uff0c\u5982126\u90ae\u7bb1\uff1a\\n\\n> SMTP\u5730\u5740: smtp.126.com, SSL\u7aef\u53e3\u53f7\uff1a456\\n\\n\u63a5\u4e0b\u4ecb\u7ecd\u4e00\u4e0bNodeMailer\uff0cNodeMailer\u662f\u6211\u4eec\u5728`Node`\u4e0a\u8fd0\u884c\u7684\u80fd\u591f\u4f7f\u7528SMTP\u53d1\u9001\u90ae\u4ef6\u7684\u6a21\u5757\uff0c\u5b83\u7b80\u5316\u4e86\u6211\u4eec\u7684\u5904\u7406\u7a0b\u5e8f\u3002\\n\\n\u4e0b\u9762\u5c55\u793a\u4e00\u4e0b\u6211\u7684\u4f7f\u7528\u4ee3\u7801\uff1a\\n\\n:::tip\\n  \u8fd9\u6bb5\u4ee3\u7801\u662f\u8fd0\u884c\u5728\u6811\u8393\u6d3e\u4e0a\u7684\uff0c\u4f5c\u7528\u662f\u5728\u6811\u8393\u6d3e\u5f00\u673a\u4e4b\u540e\u5c06\u81ea\u5df1\u7684IP\u5730\u5740\u901a\u8fc7\u90ae\u4ef6\u53d1\u9001\u51fa\u6765\u3002\\n:::\\n\\n```js\\nconst nodemailer = require(\\"nodemailer\\");\\nconst address = require(\\"address\\")\\nconst moment = require(\\"moment\\")\\n\\n// async..await is not allowed in global scope, must use a wrapper\\nasync function main() {\\n\\n  // create reusable transporter object using the default SMTP transport\\n  let transporter = nodemailer.createTransport({\\n    host: \\"smtp.126.com\\",\\n    port: 465,\\n    secure: true, // true for 465, false for other ports\\n    auth: {\\n      user: \'< \u4f60\u7684\u90ae\u7bb1\u5730\u5740 >\', // generated ethereal user\\n      pass: \'< SMTP\u6388\u6743\u7801 >\', // generated ethereal password\\n    },\\n  });\\n\\n  // send mail with defined transport object\\n  let info = await transporter.sendMail({\\n    from: \'\\"myraspberrypi\\" < \u4f60\u7684\u90ae\u7bb1\u5730\u5740 >\', // sender address\\n    to: \\"429068173@qq.com\\", // list of receivers\\n    subject: `Hello\uff0c\u4e3b\u4eba at ${moment().format(\\"YY/MM/DD\\")}`, // Subject line\\n    text: \\"\u6211\u82cf\u9192\u4e86\\", // plain text body\\n    html: `<p><b>ip:</b>${address.ip()}</p><p>\u795d\u4f60\u5929\u5929\u597d\u5fc3\u60c5\uff01</p>`, // html body\\n  });\\n\\n  console.log(\\"Message sent: %s\\", info.messageId);\\n  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>\\n\\n  // Preview only available when sending through an Ethereal account\\n  console.log(\\"Preview URL: %s\\", nodemailer.getTestMessageUrl(info));\\n  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...\\n}\\n\\nmain().catch(console.error);\\n```\\n\\n\u7ed3\u675f ~~"},{"id":"windows-algoria-crawler","metadata":{"permalink":"/blog/windows-algoria-crawler","source":"@site/blog/2022-03-23-\u5728Windows\u4e0b\u8fdb\u884cAlgolia\u722c\u866b.md","title":"\u5728Windows\u4e0b\u8fdb\u884cDocSearch\u722c\u866b","description":"Algolia \u56fd\u5916\u8457\u540d\u7684\u641c\u7d22\u63a8\u8350\u670d\u52a1\u63d0\u4f9b\u5546\u3002","date":"2022-03-23T00:00:00.000Z","formattedDate":"2022\u5e743\u670823\u65e5","tags":[{"label":"Aligolia","permalink":"/blog/tags/aligolia"},{"label":"DocSearch","permalink":"/blog/tags/doc-search"}],"readingTime":2.505,"truncated":false,"authors":[{"name":"Skylooker","title":"A Front End Coder","url":"https://github.com/Skylooker-hub","imageURL":"https://github.com/Skylooker-hub.png","key":"skylooker"}],"frontMatter":{"slug":"windows-algoria-crawler","title":"\u5728Windows\u4e0b\u8fdb\u884cDocSearch\u722c\u866b","authors":["skylooker"],"tags":["Aligolia","DocSearch"]},"prevItem":{"title":"NodeMailer\u5b9e\u73b0\u81ea\u52a8\u53d1\u9001\u90ae\u4ef6\u529f\u80fd","permalink":"/blog/nodemailer-auto-sendEmail"}},"content":"Algolia \u56fd\u5916\u8457\u540d\u7684\u641c\u7d22\u63a8\u8350\u670d\u52a1\u63d0\u4f9b\u5546\u3002\\n\\nDocSearch\u662f\u5efa\u7acb\u5728`Algolia`\u4e4b\u4e0a\u7684\u670d\u52a1\uff0c\u4e3a\u7f51\u7ad9\u5efa\u7acb\u6587\u6863\u641c\u7d22\u670d\u52a1\uff0c\u4e5f\u4e3a\u975e\u5546\u4e1a\u7684\u4e2a\u4eba\u6216\u7ec4\u7ec7\u63d0\u4f9b\u514d\u8d39\u7684\u670d\u52a1\u3002\\n\\nDocSearch\u4e5f\u662f`DocuSaurus`\u96c6\u6210\u7684\u641c\u7d22\u670d\u52a1\uff0c\u53ea\u9700\u7ed1\u5b9a`Algolia`\u5373\u53ef\uff0c\u5982\u6211\u7684\\n\\n```js\\nconst config = {\\n  ...others,  \\n  themeConfig: ({\\n  ...others,\\n  algolia: {\\n        apiKey: \\"<algolia apiKey>\\",\\n        indexName: \\"docsearch\\",\\n        appId: \\"<appId>\\",\\n      }\\n  })\\n}\\n\\n```\\n\\n\u73b0\u5728\u5c31\u5269\u4e0b\u8ba9`DocSearch`\u722c\u53d6\u4f60\u7684\u7f51\u7ad9\u7684\u6587\u6863\uff0c\u751f\u6210\u7279\u5b9a\u7684\u6570\u636e\u653e\u5728`Algolia`\u4e0a\u4e86\u3002\\n\\n\u867d\u7136 `DocSearch` \u6709\u7ebf\u4e0a\u722c\u866b\u670d\u52a1\u6765\u722c\u53d6\u4f60\u7684\u7f51\u7ad9\uff0c\u4f46\u603b\u662f\u4f1a\u906d\u5230\u62d2\u7edd\u3002\\n\\n> We\'re always sad to have to turn down applications, but with the number of requests we receive every day, we\'ve had to focus on fair criteria. We hope you understand.\\n\\n\u8fd9\u65f6\u5c31\u9700\u8981\u6211\u4eec\u81ea\u98df\u5176\u529b\u4e86\uff0c[\u81ea\u884c\u722c\u53d6\u7f51\u7ad9\u6570\u636e\u63d0\u4f9b\u7ed9Algolia](https://docsearch.algolia.com/docs/legacy/run-your-own)\\n\\n\u5177\u4f53\u8fc7\u7a0b\u5982\u4e0b\uff1a\\n\\n:::tip\\n\u5148\u81ea\u884c\u6ce8\u518cAlgolia\u670d\u52a1\u5e76\u65b0\u5efa\u4e00\u4e2a\u6587\u6863index\uff0c\u540e\u9762\u9700\u8981\u7528\u5230\\n:::\\n\\n`DocSearch`\u63d0\u4f9b\u4e00\u4e2adocker\u955c\u50cf\uff0c\u9700\u8981\u6211\u4eec\u81ea\u884c\u5b89\u88c5docker\u670d\u52a1\uff08Windows\u63a8\u8350docker desktop\uff09\uff0c\u4e4b\u540e\u4e0b\u8f7d\u955c\u50cf\u5e76\u8fd0\u884c\u3002\\n\\n\u8fd0\u884cdocker\u955c\u50cf\u8fd9\u91cc\u6709\u56db\u4e2a\u6b65\u9aa4\uff1a\\n\\n1. \u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\\n\\n  ```bash\\n    mkdir docSearch & cd docSearch\\n  ```\\n\\n2. \u5728\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa`.env`\u6587\u4ef6\uff0c\u5e76\u586b\u5199\u4fe1\u606f\\n\\n  ```env\\n  APPLICATION_ID=<your applicationId>\\n  API_KEY=<your apikey>\\n  ```\\n\\n3. \u5728\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa`docsearch.json`\u6587\u4ef6\uff0c\u5e76\u586b\u5199\u4fe1\u606f\\n\\n  ```json\\n  {\\n    \\"index_name\\": \\"<your index_name>\\",\\n    \\"start_urls\\": [\\n      \\"<your website_url>\\"\\n    ],\\n    \\"sitemap_urls\\": [\\n      \\"<your website_sitemap_url>\\"\\n    ],\\n    \\"stop_urls\\": [\\n      \\"/search\\",\\n      \\"/v3me\\",\\n      \\"/playground\\",\\n      \\"/inspector\\"\\n    ],\\n    \\"sitemap_alternate_links\\": true,\\n    \\"selectors\\": {\\n      \\"lvl0\\": {\\n        \\"selector\\": \\"(//ul[contains(@class,\'menu__list\')]//a[contains(@class, \'menu__link menu__link--sublist menu__link--active\')]/text() | //nav[contains(@class, \'navbar\')]//a[contains(@class, \'navbar__link--active\')]/text())[last()]\\",\\n        \\"type\\": \\"xpath\\",\\n        \\"global\\": true,\\n        \\"default_value\\": \\"Documentation\\"\\n      },\\n      \\"lvl1\\": \\"header h1\\",\\n      \\"lvl2\\": \\"article h2\\",\\n      \\"lvl3\\": \\"article h3\\",\\n      \\"lvl4\\": \\"article h4\\",\\n      \\"lvl5\\": \\"article h5, article td:first-child\\",\\n      \\"lvl6\\": \\"article h6\\",\\n      \\"text\\": \\"article p, article li, article td:last-child\\"\\n    },\\n    \\"strip_chars\\": \\" .,;:#\\",\\n    \\"custom_settings\\": {\\n      \\"separatorsToIndex\\": \\"_\\",\\n      \\"attributesForFaceting\\": [\\n        \\"language\\",\\n        \\"version\\",\\n        \\"type\\",\\n        \\"docusaurus_tag\\"\\n      ],\\n      \\"attributesToRetrieve\\": [\\n        \\"hierarchy\\",\\n        \\"content\\",\\n        \\"anchor\\",\\n        \\"url\\",\\n        \\"url_without_anchor\\",\\n        \\"type\\"\\n      ]\\n    },\\n    \\"js_render\\": true,\\n    \\"nb_hits\\": 856\\n  }\\n  ```\\n\\n  4. \u5728\u8be5\u6587\u4ef6\u5939\u8def\u5f84\u4e0b\u8fd0\u884c\u547d\u4ee4\uff08windows\u73af\u5883\u4e0b\u8bf7\u4f7f\u7528gitBash\uff0c\u5e76\u5728\u547d\u4ee4\u524d\u9762\u52a0\u4e0a`winpty`\uff09\\n  \\n  ```bash\\n    docker run -it --env-file=.env -e \\"CONFIG=$(cat docsearch.json | jq -r tostring)\\" algolia/docsearch-scraper\\n  ```\\n\\n\u8fd0\u884c\u7ed3\u675f\u540e\uff0c\u5e94\u8be5\u5c31\u80fd\u5728`Algolia`\u91cc\u9762\u770b\u5230\u751f\u6210\u7684\u6587\u6863\u6570\u636e\u4e86(*^_^*)"}]}')}}]);