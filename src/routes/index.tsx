import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from './route';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import Dashboard from '../pages/dashboard';
import ForgotPassword from '../pages/forgotPassword';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signUp" component={SignUp} />
    <Route path="/forgotPassword" component={ForgotPassword} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
