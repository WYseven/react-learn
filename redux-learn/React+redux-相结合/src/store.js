import createStore from './lib/redux-min'

let initState = {
  color: 'red'
}

function changeColor(state=initState,action){
  console.log(state)
  switch(action.type){
    case 'change_color':
      return {
        ...state,
        color: action.color
      }
    break;
    default:
      return state;
  }
}

let store = createStore(changeColor);

export default store;
