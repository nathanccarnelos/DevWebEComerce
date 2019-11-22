<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-spacer></v-spacer>
      <v-stepper-step :complete="e1 > 1" step="1">Pedido</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">Entrega</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 3" step="3">Pagamento</v-stepper-step>
      <v-spacer></v-spacer>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          min-height="200px"
        >
          <cart-list-itens></cart-list-itens>
          <v-card-actions>
          <v-btn
            @click="e1 = 2"
            color="primary"
          >
            Continue
          </v-btn>
          <v-btn text>Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          @click="e1 = 3"
          color="primary"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          @click="e1 = 1"
          color="primary"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import CartListItens from '../components/CartListItens'

export default {
  name: 'OrderFinish',
  components: {
    CartListItens
  },
  data () {
    return {
      e1: 0
    }
  }
}
</script>
