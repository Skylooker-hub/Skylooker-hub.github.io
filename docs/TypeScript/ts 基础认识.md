---
sidebar_position: 1
---
# TypeScript认识

## 1. TypeScript的意义

   > 1、TypeScript 是 JavaScript的超集，使js具有类型语法（有利于js引擎进行静态优化）

   > 2、TypeScript 可以使js在编辑过程具有类型、属性的智能提示

   > 3、TypeScript 最终编译成JavaScript，可以在编译时排除类型错误

## 2. TypeScript 基本类型

Number、String、Boolean、Symbol（无法通过字面量创建，Symbol()）、Null和Undefined（JavaScript原始类型）， Object、Array（JavaScript对象类型）
Number、String、Boolean、Symbol、Null和Undefined、Object，声明类型使用小写

Tuple、Enum、Unknown、Any、Void、Never（Ts扩展），声明类型使用小写

Tuple：表示一个已知元素数量和类型的**数组**，如

```ts
  const tuple: [string, number, number]
```

enum：（枚举类型）可以为一组数值赋予友好的名字, 默认从0开始, 也可以用'='赋值

```ts
  enum Color {Red, Green, Blue}
  let color = Color.Green; // 2
  enum Color {Red='red', Green='green', Blue='blue'}
  let color = Color.Green; // 'green'
```

unknown：与any类似，声明未知类型的值，但需要使用**typeof**，**instanceof**主动缩小类型范围（Narrowing the unknown Type），如

```ts
function stringifyForLogging(value: unknown): string {
  if (typeof value === "function") {
    // Within this branch, `value` has type `Function`,
    // so we can access the function's `name` property
    const functionName = value.name || "(anonymous)";
    return `[function ${functionName}]`;
  }

  if (value instanceof Date) {
    // Within this branch, `value` has type `Date`,
    // so we can call the `toISOString` method
    return value.toISOString();
  }

  return String(value);
}
```

any：声明未知类型的值，可以避开类型检查。

void： 通常用于表示**无返回值**

never： 表示永不存在值，通常用于***抛出异常**、死循环的情况。

## 3、类型断言

> 类型断言明确告诉编译器，变量的类型，无需检查。
在jsx中，只有as语法被允许。

```ts
  let strLength: number = (<string>someValue).length;
  let strLength: number = (someValue as string).length;
```
