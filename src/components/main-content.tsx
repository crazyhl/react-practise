import { Route } from 'react-router-dom';
import "../App.css"
import { RouterMap, RouterMaps } from '../route';

function MainContent() {
  return (
    <div>
      {RouterMaps.map((route:RouterMap) => 
        <Route key={route.name} path={route.path} render={() => (
          <route.component />
        )}/>
      )}
    </div>
  )
}

export default MainContent