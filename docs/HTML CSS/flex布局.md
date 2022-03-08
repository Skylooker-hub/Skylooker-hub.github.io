# flex 布局 弹性布局

## flex

flex-grow、 flex-basis 和 flex-shink 简写

:::tip
一个值, 无单位数字: flex-grow

一个值 (width/height, 有单位 ): flex-basis
:::

## flex-grow

 flex 增长系数, 无单位， 初始值0

## flex-shink

flex 收缩系数，无单位， 初始值1

## flex-basis

flex 元素在主轴上的初始大小， 初始值auto

## flex-wrap

flex是否允许换行， 初始值nowrap

## flex-direction

定义了主轴和主轴方向（row， row-reverse， column， column-reverse）， 初始值row（在rn中是column）

## justify-items

属性为所有盒中的项目定义了默认的 justify-self ， 可以使这些项目以默认方式沿适当轴线**对齐**到每个盒子

## justify-content

分配顺着弹性容器主轴(或者网格行轴, 这里指的是grid) 的元素之间及其周围的**空间**。（center、stat、end、flex-start、flex-end、space-between、 space-around、 space-evenly ）

## align-items

将所有直接子节点上的**align-self**值设置为一个组。 align-self属性设置项目在其包含块中在交叉轴方向上的对齐方式。（center、stat、end、flex-start、flex-end）

## align-content

align-content 属性设置了浏览器如何沿着弹性盒子布局的交叉轴的元素之间及其周围的**空间**
