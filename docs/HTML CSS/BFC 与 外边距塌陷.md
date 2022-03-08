# BFC

## 概念

1. （Block Formatting Context） 块级格式化上下文 （CSS渲染 块级盒子 的 区域）

2. BFC相当于迷你布局，里面存在多个元素

3. 不同的BFC之间不会互相影响

## BFC概念应用

1. 清除浮动 （**浮动**不会影响其它BFC中元素的布局，而**清除浮动**只能清除同一BFC中在它前面的元素的浮动。）

2. 外边距塌陷（外边距折叠（Margin collapsing）也只会发生在属于**同一BFC**的块级元素之间）（父子贴边或兄弟贴边，Margin只会取长的）

## 创建BFC的简单方法

1. 父元素 display: inline-block包裹

2. 父元素 overflow: auto(非visible)包裹

3. 父元素 display: flow-root包裹
