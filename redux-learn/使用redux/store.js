
/**
 * actions.js 中描述了发生了什么
 * reducer.js中定义了render，用来根据action更新action
 * 利用store将两者结合在一起
 * 
 */


/**
 * 获得对象中会有四个函数：
 * dispatch: 更新state,
   subscribe: 注册数据更新监听器,
   getState: 获取state,
   replaceReducer: ,
 */

let {createStore} = require('redux')
//let {todoApp} = require('./reducer')
let {todoApp} = require('./reducer-combineReducers')
let {addTodo,toggleTodo,setVisibilityFilter} = require('./actions')

// 测试初始的数据
let initState = {
  visibilityFilter: 123,
  todos: [
    {
      id: 1,
      title: '第123个',
      completed: false
    }
  ]
 }

let store = createStore(todoApp/*,initState*/)// 第二个参数为初始的state，可省略

console.log(store.getState())
store.dispatch(addTodo('新添加的'))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))
console.log(store.getState())





