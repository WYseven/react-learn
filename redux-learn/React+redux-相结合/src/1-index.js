
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

/**
 * 一个状态可能被多个组件依赖或者影响，而 React.js 并没有提供好的解决方案，
 * 我们只能把状态提升到依赖或者影响这个状态的所有组件的公共父组件上，我们把这种行为叫做状态提升。
 * 但是需求不停变化，共享状态没完没了地提升也不是办法。
 */

class Title extends Component {
  render () {
    return (
      <div style={{background: this.props.color}}>
        hello,我是会变色的
      </div>
    )
  }
}
class Button extends Component {
  changeBlue(){
    this.props.sendColor('blue')
  }
  changeRed(){
    this.props.sendColor('red')
  }
  render () {
    // 点击按钮改变Title组件文字的颜色
    return (
      <div>
        <input type="button" value="blue" onClick={this.changeBlue.bind(this)} />
        <input type="button" value="red" onClick={this.changeRed.bind(this)}  />
      </div>
    )
  }
}

class Index extends Component {
  constructor(){
    super();
    // 状态提升到父级中
    this.state = {
      color: ''
    }
  }
  sendColor(color){
    this.setState({
      color
    })
  }
  render () {
    return (
      <div>
        <Title color={this.state.color} />
        <Button sendColor={this.sendColor.bind(this)}/>
      </div>
    )
  }
}

let root = document.getElementById('root');

ReactDOM.render(
  <Index />,
  root
)


