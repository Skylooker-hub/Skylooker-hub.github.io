# TypeScript 高级类型

## 交叉类型（insertion types）

交叉类型把几个类型的成员**合并**，形成一个拥有这几个类型所有成员的新类型。

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
