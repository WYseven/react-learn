
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import store from './store'

// 高阶组件 还需要告诉connect该获取那些数据
let connect = (mapStateToProps) => (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }
    

    render () {
      const { store } = this.context
      let stateProps = mapStateToProps(store.getState())

      return <WrappedComponent {...stateProps} />
    }
  }

  return Connect
}


class Title extends Component {
  render () {
    return (
      <div style={{background: this.props.color}}>
        hello,我是会变色的
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    color: state.color
  }
}

Title = connect(mapStateToProps)(Title)


class Button extends Component {
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
      background: this.props.color
    }
    return (
      <div>
        <input type="button" style={style}  value="blue" onClick={this.changeColor.bind(this,'blue')} />
        <input type="button" style={style} value="red" onClick={this.changeColor.bind(this,'red')}  />
      </div>
    )
  }
}

const mapStateToProps2 = (state) => {
  return {
    color: state.color
  }
}

Button = connect(mapStateToProps2)(Button)

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


