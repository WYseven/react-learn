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

 let {VisibilityFilters, appTypes} = require('./actions')

 let initState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [
    {
      id: 1,
      title: '第一个',
      completed: false
    }
  ]
 }

 // 定义一个reducer，接收state和action作为参数

 function todoApp(state=initState, action){
  switch(action.type){
    case appTypes.set_visibility_filter : // 设置过滤条件
      return {
        ...state,
        visibilityFilter: action.visibilityFilter
      }
    break;
    case appTypes.add_todo : 
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          title: action.text,
          completed: false
        }
      ]
    }
    break;
    case appTypes.toggle_todo : 
      return {
        ...state,
        todos: state.todos.map((item,index) => {
          if(index === action.index){  // 如果切花的是指定的下标，则返回一个新的对象代替
            return {
              ...item,
              completed : !item.completed
            }
          }
          return item
        })
      }
    break;

    default: 
      return state;
  }
 }

exports.todoApp = todoApp;
