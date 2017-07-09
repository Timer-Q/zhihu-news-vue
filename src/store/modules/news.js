import { NEWSID } from './mutation-types'

const state = {
  id: ''
}

const getters = {
  getId () {
    return state.id
  }
}

const actions = {
  setId ({ commit }, payload) {
    commit(NEWSID, payload)
  }
}

const mutations = {
  NEWSID (state, payload) {
    state.id = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
