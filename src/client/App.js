import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Admin from './console/Admin.js';
import Employee from './console/Employee.js'
import Edit from './console/Edit.js';
import Home from './console/home.js';
import About from './console/about.js';
import Logout from './console/Logout.js'

export default class App extends Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route exact path="/" component={Admin} />
          <Route exact path="/Employee" component={Employee} />
          <Route path="/Employee/home" component={Home} />
          <Route path="/Employee/edit" component={Edit} />
          <Route path="/Employee/about-us" component={About} />
          <Route path="/Employee" component={Logout} />

        </Switch>
      </Router>
    );
  }
}


