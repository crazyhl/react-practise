export type RouterMap = {
  path: string;
  name: string;
  component: any
}

export const RouterMaps = [
  {
    path:"/about" ,
    name:"about",
    component: './about'
  },
  {
    path:"/topics",
    name:"topics",
    component: './topics'
  },
  {
    path:"/",
    name:"home",
    component: './home'
  },
]
