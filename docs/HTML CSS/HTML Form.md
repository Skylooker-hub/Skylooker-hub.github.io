# Form 注意事项

## 1、 enctype属性

  就是表单提交给服务器的[MIME类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)。
  HTTP 消息头 Content-Type
  常见类型：
  > application/x-www-form-urlencoded 未指定类型的默认类型

  > multipart/form-data：当表单包含 type=file 的 input元素时使用此值。

## 2、method属性

  现在（HTML5）仅支持 Post/Get。
