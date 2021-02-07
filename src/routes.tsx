import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import UserNotFound from './pages/UserNotFound';
import Links from './pages/Links';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/404/:username' component={UserNotFound} />
        <Route path='/:username' component={Links} />
      </Switch>
    </Router>
  );
};

export default Routes;
