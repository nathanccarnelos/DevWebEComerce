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
    },
    shoppingCart: []
  },
  mutations: {
    changeIsLogged (state, payload) {
      state.isLogged = payload
    },
    changeUserInfo (state, payload) {
      state.userInfo = payload
    },
    addToShoppingCartList (state, payload) {
      state.shoppingCart = [...state.shoppingCart, payload]
    }
  },
  actions: {
    changeIsLogged (context, payload) {
      context.commit('changeIsLogged', payload)
    },
    changeUserInfo (context, payload) {
      context.commit('changeUserInfo', payload)
    },
    addToShoppingCartList (context, payload) {
      if (context.state.shoppingCart.find((item) => {
        return item.item.id === payload.item.id
      })) {
        return
      }
      let newItem = {
        qtd: payload.qtd,
        item: payload.item
      }
      context.commit('addToShoppingCartList', newItem)
    }
  }
})
