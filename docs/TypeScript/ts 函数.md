# TypeScript 函数

函数参数类型与返回值类型 (返回若是基本类型，ts编译器可以自己推导)

```ts
function(x: number, y: number): number { return x + y; } // 函数
let myAdd: (x:number, y:number) => number =
    function(x: number, y: number): number { return x + y; }; // 函数表达式
```

## 默认参数 、 可选参数

Js中所有参数都是可选的，Ts有使用？标注的可选参数（必须放在参数后面），默认参数（属于可选参数，有默认值）

```ts
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // works correctly now

function buildName(firstName: string, lastName="Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");  // works correctly now
```

## 剩余参数

在TypeScript里，你可以把所有参数收集到一个变量里，类型为数组

```ts
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
```
