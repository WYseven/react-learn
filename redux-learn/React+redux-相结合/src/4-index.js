
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import store from './store'

// 高阶组件 还需要告诉connect该获取那些数据
let connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }
    
    constructor () {
      super()
      this.state = { allProps: {} }
    }

    componentWillMount () {
      const { store } = this.context
      this._updateProps()
      store.subscribe(() => this._updateProps())
    }

    _updateProps () {
      const { store } = this.context
      let stateProps = mapStateToProps
        ? mapStateToProps(store.getState(), this.props)
        : {} // 防止 mapStateToProps 没有传入
      let dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch, this.props)
        : {} // 防止 mapDispatchToProps 没有传入
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }

    render () {
      return <WrappedComponent {...this.state.allProps} />
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
    if(this.props.changeColor){
      this.props.changeColor(color)
    }
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

const mapDispatchToProps = (dispatch) => {
  
  return {
    changeColor(color){
      dispatch({
        type: 'change_color',
        color: color
      });
    }
  }
}

Button = connect(mapStateToProps2, mapDispatchToProps)(Button)

class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }

  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}

class Index extends Component {
  render () {
    return (
      <div>
        <Title  />
        <Button />
      </div>
    )
  }
}

let root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  root
)


