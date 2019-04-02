import React, { Component } from 'react';
import './Counter.scss';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <h1>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </h1>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;
