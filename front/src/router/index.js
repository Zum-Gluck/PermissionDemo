import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/Index.vue'
import LoginView from '../views/login/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/permission',
    name: 'permission',
    component: () => import('../views/permission/Index.vue')
  }
]

const createRouter = () => new VueRouter({
  mode: 'hash', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  VueRouter.matcher = newRouter.matcher // reset router
}

export default router
