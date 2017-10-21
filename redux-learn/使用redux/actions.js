/**
 * action 是把数据从应用传到store中，是 store 数据的唯一来源，
 * action本质上就是一个js普通的对象，用来描述发生了什么
 * action有些约定：
 *          action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作
 * 
 */

 // 定义一个action

 let add_todo = {
   type: 'add_todo',      // 执行的动作是新添加一项
   text: 'add a new todo' // 添加新项的标题
 }

let appTypes = {
  add_todo: 'add_todo',
  toggle_todo: 'toggle_todo',
  set_visibility_filter: 'set_visibility_filter'
 }

 // 定义应用要改变的数据的动作

 expors.appTypes = appTypes;

// 设置数据过滤的字段
 exports.VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

 /**
  * action创建函数
    就是生成 action 的方法，action 创建函数只是简单的返回一个 action
  */

  exports.addTodo = function addTodo(text){
    return {
      type: appTypes.add_todo,      
      text: text 
    }
  }

  exports.toggleTodo = function toggleTodo(index) {
    return { type: appTypes.toggle_todo, index }
  }

  exports.setVisibilityFilter =  function setVisibilityFilter(filter) {
    return { type: appTypes.set_visibility_filter, filter }
  }