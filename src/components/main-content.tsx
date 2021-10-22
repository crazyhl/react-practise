import React from 'react';

import { Switch, Route } from 'react-router-dom';
import "../App.css"
import Home from './home';
import About from './about';
import Topics from './topics';
import { RouterMap, RouterMaps } from '../route';

function MainContent() {
  const routeList = RouterMaps.map((route: RouterMap) =>
    <Route path={route.path} key={route.name}>
      {route.module}
    </Route>
  )
  console.log(routeList)
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/topics">
        <Topics />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default MainContent