# grid 布局 网格布局

## grid-template-columns

定义每一列的宽度 （ 可以使用的值如： 数值、百分比、 弹性系数（fr）、 一些函数：minmax（10px，1fr）、repeat（4，fr）、 repeat（auto-fill， 100px） ）

```css
grid-template-columns: 1fr 2fr 1fr;
```

## grid-template-rows

定义每一行的高度

```css
grid-template-rows: 1fr 2fr 1fr;
```

## grid-gap

grid-row-gap grid-column-gap 简写，设置间隔

## grid-template-areas 与 grid-area 相互配合

grid-template-areas划分区域，grid-area选择区域。

```css
.container {
  grid-template-areas: 'a b c'
  'd e f'
  'g h i';
}

.item {
  grid-area: e;
}
```

## grid-column 、 grid-row 根据网格线确定网格大小

grid-column属性是grid-column-start和grid-column-end的合并简写形式，grid-row属性是grid-row-start属性和grid-row-end的合并简写形式。

* grid-column-start属性：左边框所在的垂直网格线（从左数）
* grid-column-end属性：右边框所在的垂直网格线
* grid-row-start属性：上边框所在的水平网格线（从上数）
* grid-row-end属性：下边框所在的水平网格线

```css
.item {
  grid-column: <start-line> / <end-line>;
  grid-row: <start-line> / <end-line>;
}
```
