
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import Provider from './lib/provider'
import Button from './components/button'
import Title from './components/title'



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


