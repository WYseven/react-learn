import React, {Component} from 'react'
import connect from '../lib/connect'

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

export default Button;