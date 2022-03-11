# React Ref

## 类 class Ref

 ref可以获取class component的组件的实例。

```tsx
// 注意：此时ref类型为refObject
this.rootRef = createRef<HTMLDivElement>()

render() {
    return <div ref={this.rootRef}>{this.props.children}</div>;
}
```

## react hook Ref

ref 不能 function component的组件实例。需要使用`forwardRef`进行ref转发。
在fc中，可以使用`useImperativeHandle` 对转发的ref进行包装。

```tsx
type Props = React.HTMLProps<HTMLInputElement>;
type InputRef = HTMLInputElement; // element 实例
export type RefProps = {
  // focus(): void;
  inputSomthing(): void;
  element: HTMLInputElement;
};

// 在fc中ref 的类型为React.Ref。
export default React.forwardRef((props: Props, ref: React.Ref<RefProps>) => {
  const inputRef = React.useRef<InputRef>(null);
  // 包装ref
  React.useImperativeHandle(ref, () => ({
    inputSomthing() {
      inputRef.current.value = '6666';
    },
    element: inputRef.current,
  }));

  return <input {...props} ref={inputRef} />;
});
```
