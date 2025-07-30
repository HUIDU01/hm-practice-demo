import { getUserInfo, setUserInfotoLocal } from '@/utils/storage.js'

export default {
  namespaced: true,
  state () {
    return {
      userinfo: getUserInfo()
    }
  },
  mutations: {
    setUserInfo (state, obj) {
      state.userinfo = obj
      setUserInfotoLocal(obj)
    }
  },
  getters: {},
  actions: {}
}
