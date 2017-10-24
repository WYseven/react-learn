import React, {Component} from 'react'
import connect from '../lib/connect'



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

export default Title;