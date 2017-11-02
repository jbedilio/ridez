import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './pages/NotFound';

const App = () =>
  <Router>
    <Switch>
      <Route exact path ='/' />
      <Route component={NotFound} />
    </Switch>
  </Router>;
    

export default App;
