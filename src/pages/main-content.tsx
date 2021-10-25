import { Switch, Route } from 'react-router-dom';
import "../App.css"
import { RouterMaps } from '../router/route';
import React, {Suspense} from 'react';

function MainContent() {
  const componentList = RouterMaps.map((com) => {
    const Component = React.lazy(() => import(`${com.component}`))

    return <Route key={com.name} path={com.path} render={() => (
        <Component />
    )}/>
  })
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {componentList}
    </Switch>
    </Suspense>
  )
}

export default MainContent