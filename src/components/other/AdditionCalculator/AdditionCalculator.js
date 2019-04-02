import React, { Component, Fragment } from 'react';
import './AdditionCalculator.scss';

class AdditionCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = { value1: 0, value2: 0};
  }
  
  handleValue1Change = e => {
    this.setState({ value1: e.target.value });
  }

  handleValue2Change = e => {
    this.setState({ value2: e.target.value });
  }

  render() {
    const value1 = this.state.value1;
    const value2 = this.state.value2;
    return (
      <Fragment>
        <fieldset>
          <legend>Add up some numbers</legend>
          <input value={value1} onchange={this.handleValue1Change} />
          <input value={value2} onchange={this.handleValue2Change} />
        </fieldset>
        <h1>Sum of these numbers {parseInt(value1) + parseInt(value2)}</h1>
      </Fragment>
    );
  }
}

export default AdditionCalculator;
