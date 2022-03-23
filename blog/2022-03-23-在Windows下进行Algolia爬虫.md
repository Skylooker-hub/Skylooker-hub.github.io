---
slug: windows-algoria-crawler
title: 在Windows下进行DocSearch爬虫
authors: [skylooker]
tags: [Aligolia, DocSearch]
---

Algolia 国外著名的搜索推荐服务提供商。

DocSearch是建立在`Algolia`之上的服务，为网站建立文档搜索服务，也为非商业的个人或组织提供免费的服务。

DocSearch也是`DocuSaurus`集成的搜索服务，只需绑定`Algolia`即可，如我的

```js
const config = {
  ...others,  
  themeConfig: ({
  ...others,
  algolia: {
        apiKey: "<algolia apiKey>",
        indexName: "docsearch",
        appId: "<appId>",
      }
  })
}

```

现在就剩下让`DocSearch`爬取你的网站的文档，生成特定的数据放在`Algolia`上了。

虽然 `DocSearch` 有线上爬虫服务来爬取你的网站，但总是会遭到拒绝。

> We're always sad to have to turn down applications, but with the number of requests we receive every day, we've had to focus on fair criteria. We hope you understand.

这时就需要我们自食其力了，[自行爬取网站数据提供给Algolia](https://docsearch.algolia.com/docs/legacy/run-your-own)

具体过程如下：

:::tip
先自行注册Algolia服务并新建一个文档index，后面需要用到
:::

`DocSearch`提供一个docker镜像，需要我们自行安装docker服务（Windows推荐docker desktop），之后下载镜像并运行。

运行docker镜像这里有四个步骤：

1. 新建一个文件夹

  ```bash
    mkdir docSearch & cd docSearch
  ```

2. 在文件夹下新建`.env`文件，并填写信息

  ```env
  APPLICATION_ID=<your applicationId>
  API_KEY=<your apikey>
  ```

3. 在文件夹下新建`docsearch.json`文件，并填写信息

  ```json
  {
    "index_name": "<your index_name>",
    "start_urls": [
      "<your website_url>"
    ],
    "sitemap_urls": [
      "<your website_sitemap_url>"
    ],
    "stop_urls": [
      "/search",
      "/v3me",
      "/playground",
      "/inspector"
    ],
    "sitemap_alternate_links": true,
    "selectors": {
      "lvl0": {
        "selector": "(//ul[contains(@class,'menu__list')]//a[contains(@class, 'menu__link menu__link--sublist menu__link--active')]/text() | //nav[contains(@class, 'navbar')]//a[contains(@class, 'navbar__link--active')]/text())[last()]",
        "type": "xpath",
        "global": true,
        "default_value": "Documentation"
      },
      "lvl1": "header h1",
      "lvl2": "article h2",
      "lvl3": "article h3",
      "lvl4": "article h4",
      "lvl5": "article h5, article td:first-child",
      "lvl6": "article h6",
      "text": "article p, article li, article td:last-child"
    },
    "strip_chars": " .,;:#",
    "custom_settings": {
      "separatorsToIndex": "_",
      "attributesForFaceting": [
        "language",
        "version",
        "type",
        "docusaurus_tag"
      ],
      "attributesToRetrieve": [
        "hierarchy",
        "content",
        "anchor",
        "url",
        "url_without_anchor",
        "type"
      ]
    },
    "js_render": true,
    "nb_hits": 856
  }
  ```

  4. 在该文件夹路径下运行命令（windows环境下请使用gitBash，并在命令前面加上`winpty`）
  
  ```bash
    docker run -it --env-file=.env -e "CONFIG=$(cat docsearch.json | jq -r tostring)" algolia/docsearch-scraper
  ```

运行结束后，应该就能在`Algolia`里面看到生成的文档数据了(*^_^*)

