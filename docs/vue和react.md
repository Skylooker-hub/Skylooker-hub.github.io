# Vue 和 React

用于构建 UI 的 JavaScript 库

## Vue 和 React 的差别

1. 设计差别
   Vue 进行数据拦截/代理，（Object.defineProperty / Proxy）它对侦测数据的变化更敏感、更精确，也间接对一些后续优化提供了很大的便利。
   React 推崇函数式，UI = F(State),它直接进行局部(全量)重新刷新（或者重新渲染）,但是 React 并不知道什么时候“应该去刷新”，触发局部重新变化是由开发者手动调用 setState 完成。

为了达到更好的性能，React 暴漏给开发者 shouldComponentUpdate 这个生命周期 hook ，pureComponent 类， memo 方法等等，来避免不需要的重新渲染，（相比之下，Vue 由于采用依赖追踪，默认就是优化状态：你动了多少数据，就触发多少更新，不多也不少，而 React 对数据变化毫无感知，它就提供 React.createElement 调用已生成 virtual dom）。另外 React 为了弥补不必要的更新，会对 setState 的行为进行合并操作。

2. 设计理念
React 设计是改变开发者，提供强大而复杂的机制，开发者按照我的来；Vue 是适应开发者，让开发者怎么爽怎么来。（Vue 包装 this 指向，方便开发者）

<s> 3. 预编译优化问题 </s>

4. mutable 与 immutable 例如hook的依赖数组、setState()使用**Object.is** 进行浅比较，决定是否优化。

## 状态容器 redux 和 Vuex

1、 `Redux` 是 JavaScript 应用的**状态容器**，提供可预测的状态管理(单向数据流)。 三部分：reducer（由用户配置， initialState 和 reducer 方法 ），store（由 reducer 生成，拥有事件机制，保存着全局 State）， dispatch（由 store 生成的方法，接收 action 对象{type: "xxx"，payload: {}}, 使store的state更新，并触发事件）。

2、`react-redux` 是 常用于 react 的**外部状态管理工具**（react的外部状态管理工具还有 `Dva` （国人开发，基于redux）， `mobx`（基于响应式的数据管理，非redux））， 通常react-redux 利用 react context 机制，\<Provider \/>使得store state 成为 react全局数据。
connect函数 HOC。  

3、Redux 的数据更新是`immutable`的更新，这与react一直采取优化策略吻合（`react context`会根据引用标识来决定何时进行渲染（本质上是 value 属性值的浅比较））。

4、通常Redux 无法处理异步，只能在异步之后再调用dispatch。 Redux处理异步需要中间件：如`redux thunk`中间件（使dispatch 可以接受函数） 或 `redux saga` 中间件（使用generator 异步进行流程化（协程））
:::tip
 Generator 拥有暂停执行 和 恢复执行的能力，加上 执行器中利用（Promise交还执行权的能力 和 错误处理的能力） ， 使得 Generator 拥有管理异步操作的能力。（async 语法类似）
:::

4、`Vuex`是 Vue 响应式数据的延伸，是全局而不是组件级别。
