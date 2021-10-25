import { Switch, Route } from 'react-router-dom';
import "../App.css"
import Home from './home';
import About from './about';
import Topics from './topics';
import { RouterMaps } from '../route';

function MainContent() {
  const coms = [
    {
      path:"/about" ,
      component: About
    },
    {
      path:"/topics",
      component: Topics
    },
    {
      path:"/",
      component:  Home
    },
  ]
  console.log(coms)
  console.log(RouterMaps)
  return (
    <Switch>
      {coms.map((com) => (
        <Route key={com.path} path={com.path} render={() => 
          <com.component />
        }/>
      ))}
    </Switch>
  )
}

export default MainContent