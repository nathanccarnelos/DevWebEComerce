<template>
  <v-stepper v-model="step">
    <v-stepper-header>
      <v-spacer></v-spacer>
      <v-stepper-step :complete="step > 1" step="1">Pedido</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="step > 2" step="2">Entrega</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="step > 3" step="3">Pagamento</v-stepper-step>
      <v-spacer></v-spacer>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-2"
        >
          <cart-list-itens v-if="shoppingCartCount >= 1"></cart-list-itens>
          <v-row justify="center" v-else>
            <v-col class="text-center">
              <v-btn @click="$router.push({name:'home'})" color="primary">Voltar as compras</v-btn>
            </v-col>
          </v-row>
        </v-card>
        <v-btn
          :disabled="shoppingCartCount < 1"
          @click="step = 2"
          class="mx-2"
          color="primary"
        >
          Continuar
        </v-btn>
        <v-btn @click="$router.push({name:'home'})" color="error">Voltar</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-2"
        >
          <v-container v-if="isUserLogged">
            <v-row>
              <v-col class="text-center title">Dados de Entrega</v-col>
            </v-row>
            <v-row>
              <v-divider></v-divider>
            </v-row>
            <v-row>
              <v-col class="text-center" xs="6">Nome: {{userInfo.name}}</v-col>
              <v-col class="text-center" xs="6">Telefone: {{userInfo.phoneNumber}}</v-col>
            </v-row>
            <v-row>
              <v-col class="text-center" xs="6">CEP: {{userInfo.address.cep}}</v-col>
              <v-col class="text-center" xs="6">UF: {{userInfo.address.uf}}</v-col>
            </v-row>
            <v-row>
              <v-col class="text-center" xs="6">Bairro: {{userInfo.address.neighborhood}}</v-col>
              <v-col class="text-center" xs="6">Cidade: {{userInfo.address.city}}</v-col>
            </v-row>
            <v-row>
              <v-col class="text-center" xs="6">Rua: {{userInfo.address.street}}</v-col>
              <v-col class="text-center" xs="6">Complemento: {{userInfo.address.complement}}</v-col>
            </v-row>
          </v-container>
          <v-container v-else>
            <v-row align-content="center" justify="center">
              <v-col class="text-center title">
                Por favor faça o login
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-btn
          :disabled="!isUserLogged"
          @click="orderFinish()"
          class="mx-2"
          color="primary"
        >
          Finalizar pedido
        </v-btn>
        <v-btn @click="step = 1" color="error">Voltar</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
        >
          <v-container>
            <v-row class="text-center">
              <v-col class="text-center title">Metodos de Pagamento</v-col>
            </v-row>
            <v-row class="text-center py-2">
              <v-divider></v-divider>
            </v-row>
            <v-row class="text-center py-2">
              <v-btn block>Boleto</v-btn>
            </v-row>
            <v-row class="text-center py-2">
              <v-btn block>cartão de credito</v-btn>
            </v-row>
          </v-container>
        </v-card>
        <v-btn @click="step = 2" color="error">Voltar</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import CartListItens from '../components/CartListItens'
import forEach from 'lodash/forEach'

export default {
  name: 'OrderFinish',
  components: {
    CartListItens
  },
  data () {
    return {
      step: 0
    }
  },
  computed: {
    shoppingCart () {
      return this.$store.state.shoppingCart
    },
    shoppingCartCount () {
      return this.$store.state.shoppingCart.length
    },
    userInfo () {
      return this.$store.state.userInfo
    },
    isUserLogged () {
      return this.$store.state.isLogged
    }
  },
  methods: {
    orderFinish () {
      forEach(this.shoppingCart, item => {
        this.axios.post('https://shielded-oasis-78348.herokuapp.com/public/api/purchase/store', {
          'prodcut_id': item.item.id,
          'product_quant': item.qtd,
          'quantity': item.qtd,
          'client': this.userInfo.id,
          'iscreditcard': 0,
          'boleto_id': null,
          'credit_card': null

        }).then(() => { this.step = 3 })
      })
    }
  }
}
</script>
