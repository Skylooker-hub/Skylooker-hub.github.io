# React Fiber

## Fiber 架构之前

React15时， `Reconciler`（协调器）采用递归的方式执行，数据保存在递归调用栈中。（`stack Reconciler`）

> 缺点：`stack Reconciler`无法中断，当更新大量数据时，js线程被长时间占用，无法及时归还浏览器`渲染线程`，导致卡顿问题。

React16开始，加入调度器`Scheduler`，`Reconciler`换成`Fiber Reconciler`。

:::tip
React16之前的架构 Reconciler + Renderer。Reconciler、Renderer 交替工作
之后 Scheduler + Reconciler + Renderer。整个Scheduler与Reconciler的工作都**在内存中进行**，只有当所有组件都完成Reconciler的工作，才会统一交给Renderer。
:::

## Fiber

`Fiber Reconciler` 最大的改变在于从`同步更新`变成`可中断的异步的渲染`。

### Fiber tree

待以后补充......

### Fiber node

待以后补充......
