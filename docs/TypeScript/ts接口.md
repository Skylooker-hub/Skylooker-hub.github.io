# 接口interface

## 接口的作用

 在 TypeScript 里，接口的作用就是为这些**类型命名**和为你的代码或第三方代码**定义契约**（让class实现interface，接口多态）。

1. 接口 可选属性（？） 只读属性（readonly）

2. 类实现接口（implements），接口继承接口

:::warning
额外的属性检查(当一个类实现了一个接口时，只对其实例部分进行类型检查。)

TypeScript对**对象字面量**有额外属性检查，如果一个对象字面量存在**任何“目标类型”不包含的属性**时，你会得到一个错误。

解决办法： 1、类型断言；2、添加一个字符串索引签名；3、将对象字面量赋予一个变量。
:::

## 混合类型

一个对象可以同时作为函数和对象使用，并带有额外的属性

```ts
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = function(start: number) {} as Counter;
  counter.interval = 123;
  counter.reset = function() {};
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```
