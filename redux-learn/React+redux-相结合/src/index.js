
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import store from './store'

class Title extends Component {
  constructor(){
    super();
    this.state = { color: '' }
  }
  static contextTypes = {
    store: PropTypes.object
  }

  componentWillMount () {
    const { store } = this.context
    this._updateThemeColor()
    // 更新视图
    store.subscribe(() => this._updateThemeColor())
  }

  _updateThemeColor () {
    const { store } = this.context
    const state = store.getState()
    this.setState({ color: state.color })
  }

  render () {
    return (
      <div style={{background: this.state.color}}>
        hello,我是会变色的
      </div>
    )
  }
}
class Button extends Component {
  constructor(){
    super();
    this.state = { color: '' }
  }
  static contextTypes = {
    store: PropTypes.object
  }

  componentWillMount () {
    const { store } = this.context
    this._updateThemeColor()
    // 更新视图
    store.subscribe(() => this._updateThemeColor())
  }

  _updateThemeColor () {
    const { store } = this.context
    const state = store.getState()
    this.setState({ color: state.color })
  }
  changeColor(color){
    
    // 需要dispatch一个action改变state
     let {store} = this.context;

     store.dispatch({
       type: 'change_color',
       color: color
     })
    
  }

  render () {
    // 点击按钮改变Title组件文字的颜色
    let style = {
      background: this.state.color
    }
    return (
      <div>
        <input type="button" style={style}  value="blue" onClick={this.changeColor.bind(this,'blue')} />
        <input type="button" style={style} value="red" onClick={this.changeColor.bind(this,'red')}  />
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
    store: PropTypes.object
  }

  getChildContext(){
    return {
      store
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


