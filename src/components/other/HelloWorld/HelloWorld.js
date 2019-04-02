import React, { Component } from 'react';
import propTypes from 'prop-types'
import './HelloWorld.scss';

class HelloWorld extends Component {

  static defaultProps = { text: 'Default Text' }; 

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  text: propTypes.string
};

export default HelloWorld;
