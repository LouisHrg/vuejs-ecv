import axios from 'axios'

const state = {
  people: [],
  person: null,
}

const getters = {
  getPeople: state => state.people
}

const mutations = {
  setPeople (state, people) {
    state.people = people
  }
}

const actions = {
  async fetchPeople ({ commit }) {
    const { data } = await axios.get('https://swapi.dev/api/people')
    commit('setPeople', data.results)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
