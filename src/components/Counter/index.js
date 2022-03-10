import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      console.log(`Previous state value is ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  onDecrement = () => {
    this.setState(prevState => {
      console.log(`Previous state value is ${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }
  reset = () => {
    this.setState(prevState => {
      console.log(`Previous state value is ${prevState.count}`)
      return {count: 0}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading"> Counter </h1>
        <p className="count"> {count} </p>
        <div>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
          <button className="button" onClick={this.reset}>
            Reset
          </button>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
