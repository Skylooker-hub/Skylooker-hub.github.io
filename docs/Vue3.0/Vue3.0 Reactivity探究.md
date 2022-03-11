# Reactivity

1、 Vue3.0的响应式是基于（Proxy和Reflect实现的）。

2、 不同于 Vue2.0 Object.defineProperty, 对属性进行监听。

:::tip
Vue2.0响应式的不足：

1. 无法对监听属性增加、删除操作（Vue.set 和 Vue.delete ）

2. 需要处理多个属性，也需要递归处理多层对象。

3. 难以处理数组，（通过包装数组方法解决）。
:::

3、Vue3.0 响应式 基于 对象级别的监听。 不需要遍历多个属性。只需包装一次，就可完成响应式。

通常的响应过程： reactive（响应式包装） + effect（Proxy Handers 中track方法依赖收集）， reactive对象发生改变，触发Proxy Handers 中 trgger方法，遍历执行依赖数组。

4、vue watchEffect/watch 方法 会深度遍历对象（traverse），将该依赖被多个嵌套对象收集，达到深度监听的目的。
