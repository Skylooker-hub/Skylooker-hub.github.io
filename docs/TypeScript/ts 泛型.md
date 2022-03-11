# 泛型 generics

## 作用

泛型 是 让函数、类等**可重用**的类型工具。让组件支持多种类型。

## 定义泛型数据

```ts
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
```

## 泛型函数定义

```ts
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <U>(arg: U) => U = identity;
```

### 泛型接口定义

```ts
interface GenericIdentityFn<T> {
    (arg: T): T;
}
```

### 泛型类

```ts
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
```

## 泛型约束

1、比如：泛型T必须实现某个接口

```ts
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
```

2、你可以声明一个类型参数，且它被**另一个类型参数**所约束。

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
```
