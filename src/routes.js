import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Search from './components/search/Search';
import ShowDetail from './components/general/ShowDetail';
import RequireAuth from './components/auth/Require_Auth';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Welcome} />
    <Route path="signin" component={Signin} />
    <Route path="signout" component={Signout} />
    <Route path="signup" component={Signup} />
    <Route path="search" component={Search} />
    <Route path="home" component={RequireAuth(Home)} />
    <Route path="shows/:id" component={RequireAuth(ShowDetail)}/>

  </Route>
);
