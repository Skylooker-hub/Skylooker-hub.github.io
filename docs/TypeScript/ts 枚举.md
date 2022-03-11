# ENUM 枚举

## 运行时的enum

enum 在运行时是 真正存在的**对象**

enum 分 `字符串型枚举` 、 `数字型枚举`（默认从0开始排序）和 `异构类型枚举`（混合字符串和数字成员）

## 编译时的enum

1. 尽管一个枚举是在运行时真正存在的对象，但**keyof**关键字的行为与其作用在对象上时有所不同。应该使用**keyof typeof**来获取一个表示枚举里**所有字符串key**的类型。

```ts
enum LogLevel {
    ERROR, WARN, INFO, DEBUG
}

/**
 * 等同于：
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;
```

2. 常量枚举 `const enum`（在编译阶段会被删除），在使用的地方会直接内联（修改值）。常量枚举的值不能为计算属性。
