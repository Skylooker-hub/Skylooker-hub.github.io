# display

决定CSS布局中的表现形式

## block

表现为块级元素盒子， 它的之前和之后打断（换行）

## inline

表现为行内元素盒子，它的之前和之后不打断（不换行）

## flex

对外表现block，对内弹性布局

## grid

对外表现block，对内网格布局

## flow-root

块级盒子，创建一个新的BFC

> 行内元素与块级元素属性的不同，主要是盒模型属性上：行内元素设置width无效，height无效(可以设置line-height)，margin上下无效，padding上下无效。

:::tip
 两个行内元素之间会留下一个空白（white-space）， 解决方法： font-size：0；
:::
