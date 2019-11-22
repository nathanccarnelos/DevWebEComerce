<template>
  <v-card>
    <v-toolbar
      color="green darken-1"
      dark
    >
      <v-toolbar-title>
        <v-icon>mdi-cart</v-icon>
        Carrinho
      </v-toolbar-title>
    </v-toolbar>
    <cart-list-itens></cart-list-itens>
    <v-card-actions>
      <v-btn
        :disabled="shoppingCart.length < 1"
        @click="goToFinish"
        block
        color="primary"
      >
        Fechar Pedido
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import CartListItens from './CartListItens'

export default {
  name: 'CartMenu',
  components: {
    CartListItens
  },
  data () {
    return {}
  },
  methods: {
    goToFinish () {
      this.$emit('close-menu')
      this.$router.push({ name: 'orderFinish' })
    }
  },
  computed: {
    shoppingCart () {
      return this.$store.state.shoppingCart
    }
  }
}
</script>
