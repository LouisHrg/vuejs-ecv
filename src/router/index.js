import Router from 'vue-router'
import Vue from 'vue'
import IdList from '@/components/IdList'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      component: IdList,
      path: '/',
      name: 'people',
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
    {
      component: IdList,
      path: '/starships',
      name: 'starships',
      props: {
        title: 'Starships',
        endpoint: 'starships',
        mapping: {
          cost_in_credits: 'Prix',
          name: 'Nom',
          passengers: 'Nb de passagers'
        }
      }
    },
    {
      component: IdList,
      path: '/vehicles',
      name: 'vehicles',
      props: {
        title: 'Vehicles',
        endpoint: 'vehicles',
        mapping: {
          cost_in_credits: 'Prix',
          name: 'Nom',
          passengers: 'Nb de passagers'
        }
      }
    },
  ]
})

export default router
