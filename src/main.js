import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage.js';
import vegetable from './pages/vegetable.js';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/vegetable' component={vegetable}></Route>
    </Switch>
  );
}

export default Main;