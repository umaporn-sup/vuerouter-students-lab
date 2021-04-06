import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ProjectList from '../views/ProjectList.vue'
import TeamList from '../views/TeamList.vue'
import NotFound from '../views/errorpage/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/teams',
    name: 'Teams',
    component: TeamList
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectList
  },
  {
    //list not found path at last prevent fall into this path instead of above specified paths
    //any name allow after : (dynamic segment) .* is regex match any character combination
    path: '/:catchNotMatchPath(.*)',
    name: 'NotFound',
    component: NotFound
    // redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
