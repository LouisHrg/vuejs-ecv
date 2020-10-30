import Vuex from 'vuex'
import Vue from 'vue'
import news from '@/store/modules/news'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    news
  }
})
