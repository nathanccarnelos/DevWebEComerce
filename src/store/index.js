import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false,
    userInfo: {
      name: '',
      email: '',
      phoneNumber: '',
      address: {
        cep: '',
        neighborhood: '',
        city: '',
        street: '',
        uf: '',
        complement: ''
      }
    }
  },
  mutations: {
    changeIsLogged (state, payload) {
      state.isLogged = payload
    },
    changeUserInfo (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    changeIsLogged (context, payload) {
      context.commit('changeIsLogged', payload)
    },
    changeUserInfo (context, payload) {
      context.commit('changeUserInfo', payload)
    }
  }
})
