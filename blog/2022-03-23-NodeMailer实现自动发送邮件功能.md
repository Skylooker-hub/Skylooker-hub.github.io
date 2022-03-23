---
slug: nodemailer-auto-sendEmail
title: NodeMailer实现自动发送邮件功能
authors: [skylooker]
tags: [nodemailer, SMTP]
---

前置知识：

- SMTP是一个相对简单的基于文本的协议。在其之上指定了一条消息的一个或多个接收者（在大多数情况下被确认是存在的），然后消息文本会被传输。

- SMTP一般用于电子邮件传输。

- SMTP是一个“推”的协议，它不允许根据需要从远程服务器上“拉”来消息，“拉”的协议一般是`POP3`或`IMAP`。

通常，你在Email邮箱的设置里，可以开启SMTP服务，之后获取**授权码**（记住，后面有用）。

同时，你也需要你的Email服务商的SMTP地址与SSL端口号，如126邮箱：

> SMTP地址: smtp.126.com, SSL端口号：456

接下介绍一下NodeMailer，NodeMailer是我们在`Node`上运行的能够使用SMTP发送邮件的模块，它简化了我们的处理程序。

下面展示一下我的使用代码：

:::tip
  这段代码是运行在树莓派上的，作用是在树莓派开机之后将自己的IP地址通过邮件发送出来。
:::

```js
const nodemailer = require("nodemailer");
const address = require("address")
const moment = require("moment")

// async..await is not allowed in global scope, must use a wrapper
async function main() {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.126.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '< 你的邮箱地址 >', // generated ethereal user
      pass: '< SMTP授权码 >', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"myraspberrypi" < 你的邮箱地址 >', // sender address
    to: "429068173@qq.com", // list of receivers
    subject: `Hello，主人 at ${moment().format("YY/MM/DD")}`, // Subject line
    text: "我苏醒了", // plain text body
    html: `<p><b>ip:</b>${address.ip()}</p><p>祝你天天好心情！</p>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
```

结束 ~~
