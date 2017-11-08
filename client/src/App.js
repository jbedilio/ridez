import React from 'react';
import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import Ridez from './pages/Ridez';
import Details from './pages/Details';
// import {GoogleApiWrapper} from './components/MapContainer/MapContainer.js';


const App = () =>
  <Router history={HashRouter}>
    <div>
      <Switch>
        <Route exact path='/' component={Ridez} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/logout' component={Login} />
        <Route exact path='/ridez' component={Ridez} />
        <Route path='/ridez/' component={Details} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>;
  
export default App;

