import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/items/Home.vue'
import Createitems from '../views/items/Createitems.vue'
import Edititems from '../views/items/Edititems.vue'
import Detailitems from '../views/items/Detailitems.vue'
// import Groups from '../views/groups/Index.vue'

const routes = [
  {
    path: '/',
    name: 'items.home',
    component: Home
  },
  {
    path: '/Createitems',
    name: 'items.create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createitems 
  },
{
  path: '/edititems/:id',
  name: 'Edititems',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Edititems
},
{
  path: '/detailitems/:id',
  name: 'Detailitems',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Detailitems
},
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
