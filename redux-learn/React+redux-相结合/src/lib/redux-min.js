function createStore(reducer){
  let state = undefined;
  const listeners = []
  const getState = () => state;  // 用来获取应用的数据
  const subscribe = (listener) => listeners.push(listener)
  const dispatch = (action) => {
    state = reducer(state, action); // 覆盖原来的对象
    console.log(state)
    listeners.forEach((listener) => listener())
  }
  dispatch({}); // 初始数据
  return {getState, dispatch, subscribe}
}

export default createStore;