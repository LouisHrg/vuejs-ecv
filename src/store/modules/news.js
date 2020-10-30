import axios from 'axios'

const state = {
  manyNews: [],
  news: null,
}

const getters = {
  getManyNews: state => state.manyNews,
  getNews: state => state.news,
}

const mutations = {
  setManyNews (state, manyNews) {
    state.manyNews = manyNews
  },
  setNews (state, news) {
    state.news = news
  }
}

const actions = {
  async fetchManyNews ({ commit }) {
    const { data } = await axios.get('http://localhost:3000/news')
    commit('setManyNews', data)
  },
  async fetchNews ({ commit }, id) {
    const { data } = await axios.get(`http://localhost:3000/news/${id}`)
    commit('setNews', data)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
