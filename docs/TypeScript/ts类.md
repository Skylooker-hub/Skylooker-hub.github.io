# TypeScript 类

## 类 class

class由ES5引入，使JS能够使用面对对象编程方式编程。

## 公共，私有与受保护的修饰符

public（默认）：自由访问类成员。
private：不允许外部访问。
protected：不允许外部访问，`protected`成员在派生类中仍然可以访问。

## readonly修饰符、参数属性

readonly 只读属性

```ts
class Animal {
    constructor(private name: string) { }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

```

参数属性通过**给构造函数参数添加一个访问限定符来声明**。 使用private限定一个参数属性会声明并初始化一个私有成员；对于public和protected来说也是一样。

## 存取器

TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
只带有get不带有set的存取器自动被推断为readonly。

```ts
const fullNameMaxLength = 10;

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }

        this._fullName = newName;
    }
}
```

## 静态属性

static,这些属性存在于类本身上面而不是类的实例上。

## 抽象类

abstract 类，一般不会直接被实例化，抽象类中除抽象方法外都可以有具体实现。
abstract方法无具体实现，需要在派生类中实现。

```ts
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}
```
