import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//Screen
import PrivateScreen from './screen/PrivateScreen';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import PrivateRoute from './routing/PrivateRoute';

const App = () => {
    return (
   <Router>
   <div className="App">
   <Switch>
  <PrivateRoute exact path="/" component={PrivateScreen} />
  <Route exact path="/login" component={LoginScreen} />
  <Route exact path="/register" component={RegisterScreen} />
  
  </Switch>
  </div>
  </Router>
    )
}

export default App;