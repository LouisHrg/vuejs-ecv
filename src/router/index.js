import Router from 'vue-router'
import Vue from 'vue'
import IdList from '@/components/IdList'
import Login from '@/components/Login'
import TestStore from '@/components/TestStore'
import Register from '@/components/Register'
import userApi from '@/api/users'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      component: TestStore,
      path: '/test',
      name: 'test'
    },
    {
      component: Login,
      path: '/login',
      name: 'login'
    },
    {
      component: Register,
      path: '/register',
      name: 'register'
    },
    {
      component: IdList,
      path: '/',
      name: 'people',
      meta: {
        auth: true
      },
      props: {
        title: 'People',
        endpoint: 'people',
        mapping: {
          birth_year: 'Date de naissance',
          name: 'Nom',
          height: 'Taille'
        }
      }
    },
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
