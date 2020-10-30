import Router from 'vue-router'
import Vue from 'vue'
import userApi from '@/api/users'
import newsRoutes from '@/router/news'
import Main from '@/layouts/Main'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      component: Main,
      path: '',
      children: [
        ...newsRoutes
      ]
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(route => route.meta.auth)) {
    try {
      await userApi.verifyUser()
      return next()
    } catch (e) {
      localStorage.removeItem('token')
      return next('/login')
    }
  } else {
    return next()
  }
})

export default router
