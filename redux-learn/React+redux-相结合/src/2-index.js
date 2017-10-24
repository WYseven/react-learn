
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
/**
 *  React.js 的 context 其实像就是组件树上某颗子树的全局变量
 * React.js 的 context 就是这么一个东西，某个组件只要往自己的 context 里面放了某些状态，
 * 这个组件之下的所有子组件都直接访问这个状态而不需要通过中间组件的传递。
 * 一个组件的 context 只有它的子组件能够访问，
 * 它的父组件是不能访问到的，你可以理解每个组件的 context 就是瀑布的源头，只能往下流不能往上飞。
 * 
 * context 打破了组件和组件之间通过 props 传递数据的规范，极大地增强了组件之间的耦合性。而且，就如全局变量一样，
 * context 里面的数据能被随意接触就能被随意修改，每个组件都能够改 context 里面的内容会导致程序的运行不可预料。
 */

class Title extends Component {
  static contextTypes = {
    color: PropTypes.string
  }
  render () {
    return (
      <div style={{background: this.context.color}}>
        hello,我是会变色的
      </div>
    )
  }
}
class Button extends Component {
  static contextTypes = {
    color: PropTypes.string
  }
  changeBlue(){
    console.log(this.context)
    this.context.color = 'blue'
    //this.props.sendColor('blue')
  }
  changeRed(){
    this.context.color = 'red'
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
      color: 'yellow'
    }
  }
  static childContextTypes =  {
    color: PropTypes.string
  }
  /**
   * getChildContext 这个方法就是设置 context 的过程，
   * 它返回的对象就是 context，所有的子组件都可以访问到这个对象
   */
  getChildContext(){
    return {
      color: this.state.color
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
        <Title  />
        <Button  sendColor={this.sendColor.bind(this)} />
      </div>
    )
  }
}

let root = document.getElementById('root');

ReactDOM.render(
  <Index />,
  root
)


