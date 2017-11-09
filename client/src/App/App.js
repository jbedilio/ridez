import React from 'react';
import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Ridez from '../pages/Ridez';
import Details from '../pages/Details';
// import SearchResultContainer from "./components/SearchResultContainer";

const App = () =>
<div id="body">
  <Router history={HashRouter}>
    <div>
      <Switch>
        <Route exact path='/' component={Ridez} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/logout' component={Login} />
        <Route exact path='/ridez' component={Ridez} />
        <Route exact path='/ridez/:id' component={Details} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
</div>;
  
export default App;

