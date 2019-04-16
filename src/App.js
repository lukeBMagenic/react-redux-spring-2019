import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles"

// import logo from './logo.svg';
import './App.scss';

import FamilyTreePage from './components/pages/FamilyTreePage/FamilyTreePage';
import DataPage from './components/pages/DataPage/DataPage';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: green,
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
              <Route exact path="/" component={FamilyTreePage} />
              <Route exact path="/data" component={DataPage} />
              <Route component={FamilyTreePage} />
            </Switch>
          </MuiThemeProvider>
        </CssBaseline>
      </BrowserRouter>
    );
  }
}

export default App;
