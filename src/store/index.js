import Vue from 'vue'
import Vuex from 'vuex'
import findIndex from 'lodash/findIndex'
import { consoleError } from 'vuetify/lib/util/console'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false,
    userInfo: {
      name: '',
      email: '',
      phoneNumber: '',
      cpf: '',
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
    async loginUser (context, { username, password }) {
      if (!username || !password) {
        await Promise.reject(new Error('usuário ou senha incorretos.'))
      }
      await axios.post('https://shielded-oasis-78348.herokuapp.com/public/api/clients/login', {
        email: username,
        password: password
      })
        .then(response => {
          if (response.data.data.code === 200) {
            let user = response.data.data.user
            this.dispatch('changeUserInfo',
              {
                id: user.id,
                name: user.nome,
                email: user.email,
                phoneNumber: user.phone,
                cpf: user.cpf,
                address: {
                  cep: user.cep,
                  neighborhood: '',
                  city: '',
                  street: '',
                  uf: '',
                  complement: user.adress_complement
                }
              })
            this.dispatch('changeIsLogged', true)
          }
        })
        .catch(() => consoleError('erro no login'))
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
    },
    logout (context) {
      context.commit('changeIsLogged', false)
      context.commit('changeUserInfo', {
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
      })
    }
  }
})
