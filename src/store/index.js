import Vue from 'vue'
import Vuex from 'vuex'
import findIndex from 'lodash/findIndex'

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
    },
    addQtdShoppingCartItem (state, key) {
      state.shoppingCart[key].qtd++
    },
    removeQtdShoppingCartItem (state, key) {
      state.shoppingCart[key].qtd--
    },
    removeItemFromListShoppingCart (state, key) {
      state.shoppingCart = state.shoppingCart.filter((item, index) => {
        return index !== key
      })
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
    },
    addQtdShoppingCartItem (context, itemId) {
      let key = findIndex(context.state.shoppingCart, (o) => {
        return o.item.id === itemId
      })
      if (key === -1) {
        return
      }
      context.commit('addQtdShoppingCartItem', key)
    },
    removeQtdShoppingCartItem (context, itemId) {
      let key = findIndex(context.state.shoppingCart, (o) => {
        return o.item.id === itemId
      })
      if (key === -1) {
        return
      }
      if (context.state.shoppingCart[key].qtd <= 1) {
        context.commit('removeItemFromListShoppingCart', key)
        return
      }
      context.commit('removeQtdShoppingCartItem', key)
    }
  }
})
