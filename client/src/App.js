import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () =>
  <Router>
    <Switch>
      <Route exact path='/' />
      <Route exact path='/api/auth/register' component={Register} />
      <Route exact path='/api/auth/login' component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>;
    

export default App;
