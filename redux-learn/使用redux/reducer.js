/**
 * Action 只是描述了有事情发生了这一事实，并没有指明应用如何更新 state。而这正是 reducer 要做的事情。
 * 
 * 在 Redux 应用中，所有的 state 都被保存在一个单一对象中
 * 
 * reducer就是一个纯函数，接收之前的state和action，返回一个新的state
 * 
 * 保持reducer纯洁，不要在reducer中做一下操作：
 *            修改传入参数；
              执行有副作用的操作，如 API 请求和路由跳转；
              调用非纯函数，如 Date.now() 或 Math.random()
 */

 

