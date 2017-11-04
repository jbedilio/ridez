import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';
// import Chat from './pages/Chat';
import Ridez from './pages/Ridez';

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Ridez} />
        {/* <Route exact path='/io/chat/read' component={Chat} /> */}
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/logout' component={Login} />
        <Route exact path='/ridez' component={Ridez} />
        {<Route exact path='/ridez/' component={Ridez} />}
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
  
export default App;

