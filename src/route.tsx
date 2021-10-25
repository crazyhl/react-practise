import About from "./components/about"
import Home from "./components/home"
import Topics from "./components/topics"

export type RouterMap = {
  path: string;
  name: string;
  component: ()=>JSX.Element
}

export const RouterMaps = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/topics",
    name: "Topics",
    component: Topics,
  },
]
