import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    getToken (state) {
      return state.user.userinfo.token
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  }
})
