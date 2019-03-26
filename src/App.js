import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import HelloWorld from './components/@shared/HelloWorld/HelloWorld';
import Clock from './components/@shared/Clock/Clock';
import Toggle from './components/@shared/Toggle/Toggle';
import Counter from './components/@shared/Counter/Counter';
import Loop from './components/@shared/Loop/Loop';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <HelloWorld text="Hello World"/>
          <Clock/>
          <Toggle/>
          <Counter/>
          <Loop number="10"/>

        </header>
      </div>
      
    );
  }
}

export default App;
