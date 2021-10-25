import { Link } from 'react-router-dom';
import { RouterMap, RouterMaps } from '../router/route';
function Nav() {
    const navList  = RouterMaps.map((route: RouterMap) => 
      <li key={route.name}>
        <Link to={route.path}>{route.name}</Link>
      </li>
    )
    return (
        <nav>
          <ul>
            {navList}
          </ul>
        </nav>
    )
}

export default Nav