# TypeScript 高级类型

## 何为高级类型

传入类型参数，经过一系列类型运算逻辑后，返回新的类型的类型就叫做高级类型。

## 条件类型：extends？：

类似于JS中的三段式条件语句。

```ts
type isTwo<T> = T extends 2 ? true: false;

type res = isTwo<1>;
type res2 = isTwo<2>;
```

## 推导类型：infer

提取类型中的一部分。

```ts
// 第一个extends 为约束。
type First<A extends unknown[]> = A extends [infer T,...infer R] ? T : never;

type res = First<[1,2,3]>;
```

## 交叉类型（insertion types）

交叉类型把几个类型的成员**合并**，形成一个拥有这几个类型所有成员的新类型。

交叉类型会将同一类型的进行合并，不同类型的舍弃

```ts
  interface IPerson {
    name: string,
    age: number
  }
  interface IChild {
    parent: string
  }
  const man:IPerson & IChild
```

## 联合类型（union types）

联合类型只能得多个类型中的一个。使用时需要明确类型，使用typeof、instanceof

```ts
 type Scores = 1 | 2 | 3 | 4 | 5;
```

## 映射类型

对象、class 在 TypeScript 对应的类型是索引类型（Index Type）
映射类型：修改索引类型。

- keyof T 是查询索引类型中所有的索引，叫做索引查询。

- T[Key] 是取索引类型某个索引的值，叫做索引访问。

- in 是用于遍历联合类型的运算符。

除了值可以变化，索引也可以做变化，用 as 运算符，叫做重映射。

```ts
type MapType<T> = {
    [Key in keyof T]: [ T[Key], T[Key], T[Key] ]
}

type res = MapType<{a: 1, b: 2}>;

type MapType<T> = {
    [
        Key in keyof T 
            as `${Key & string}${Key & string}${Key & string}`
    ]: [ T[Key], T[Key], T[Key] ]
}
```
