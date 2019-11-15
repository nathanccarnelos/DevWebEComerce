import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoged: false,
    userInfo: {}
  },
  mutations: {
    changeIsLoged (state) {
      state.isLoged = !state.isLoged
    },
    changeUserInfo (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    changeIsLoged (context) {
      context.commit('changeIsLoged')
    },
    changeUserInfo (context, payload) {
      context.commit('changeUserInfo', payload)
    }
  }
})
