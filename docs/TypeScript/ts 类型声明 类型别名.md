# 类型声明和类型别名

## 类型别名

```ts
type Name = string;
type IProps = {
  name: string;
  children: React.ReactNode;
}
```

## 类型声明

类型声明语句：declare

```ts
declare let JQuery: (selector: string) => any;
```

[声明文件](https://ts.xcatliu.com/basics/declaration-files.html#%E4%BB%80%E4%B9%88%E6%98%AF%E5%A3%B0%E6%98%8E%E8%AF%AD%E5%8F%A5)
[模块声明](https://github.com/zhongsp/TypeScript/blob/dev/zh/declaration-files/library-structures.md)
