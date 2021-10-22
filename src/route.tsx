import About from "./components/about"
import Home from "./components/home"
import Topics from "./components/topics"

export type RouterMap = {
  path: string;
  name: string;
  module: any;
}

export const RouterMaps = [
  {
    path: "/",
    name: "Home",
    module: Home
  },
  {
    path: "/about",
    name: "About",
    module: About
  },
  {
    path: "/topics",
    name: "Topics",
    module: Topics
  },
]
