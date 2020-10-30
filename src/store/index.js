import Vuex from 'vuex'
import Vue from 'vue'
import people from '@/store/modules/people'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    people
  }
})
