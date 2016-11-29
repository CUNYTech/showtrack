import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import MyList from './components/list/MyList';
import Search from './components/search/Search';
import ShowDetail from './components/general/ShowDetail';
import RequireAuth from './components/auth/Require_Auth';
import EpisodeDetail from './components/general/EpisodeDetail';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="signin" component={Signin} />
    <Route path="signout" component={Signout} />
    <Route path="signup" component={Signup} />
    <Route path="search" component={Search} />
    <Route path="my-list" component={RequireAuth(MyList)} />
    <Route path="shows/:id" component={RequireAuth(ShowDetail)}/>
    <Route path="episode" component={RequireAuth(EpisodeDetail)}/>
    
  </Route>
);
