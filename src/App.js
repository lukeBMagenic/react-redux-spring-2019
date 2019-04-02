import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles"

// import logo from './logo.svg';
import './App.scss';

import HomePage from './components/pages/HomePage/HomePage';
import OtherPage from './components/pages/OtherPage/OtherPage';

// import HelloWorld from './components/other/HelloWorld/HelloWorld';
// import Clock from './components/other/Clock/Clock';
// import Toggle from './components/other/Toggle/Toggle';
// import Counter from './components/other/Counter/Counter';
// import Loop from './components/other/Loop/Loop';
// import AdditionCalculator from './components/other/AdditionCalculator/AdditionCalculator';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#333333"
    }
  }
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <CssBaseline>
          <MuiThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/other" component={OtherPage} />
              <Route component={HomePage} />
            </Switch>
          </MuiThemeProvider>
        </CssBaseline>
      </BrowserRouter>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>

//           <HelloWorld text="Hello World"/>
//           <Clock/>
//           <Toggle/>
//           <Counter/>
//           <Loop number="10"/>
//           <AdditionCalculator/>

//         </header>
//       </div>
      
//     );
//   }
// }

export default App;
