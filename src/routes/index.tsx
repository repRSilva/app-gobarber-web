import React, { ReactFragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signUp" component={SignUp} />
  </Switch>
);

export default Routes;
