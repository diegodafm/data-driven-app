import React, { Component } from 'react';
import Home from './pages/Home'
import {Switch, withRouter, BrowserRouter as Router, Route} from 'react-router-dom';

class AppComponent extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default AppComponent;