<template>
  <v-row>
    <v-col :key="i" cols="12" lg="3" md="4" sm="6" v-for="(item , i) in homeItens" xs="12">
      <v-container fluid>
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-height="400"
            min-height="400"
            min-width="300"
          >
            <v-img
              :aspect-ratio="16/9"
              :src="item.img"
            >
              <v-expand-transition>
                <div
                  class="d-flex transition-fast-in-fast-out teal darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                  v-if="hover"
                >
                  R${{String(item.price).replace('.', ',')}}
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text
              class="pt-6"
              style="position: relative;"
            >
              <v-btn
                :color="item.onCart ? 'teal' : 'darken green'"
                @click="addProductToCart(item)"
                absolute
                class="white--text"
                fab
                large
                right
                top
              >
                <v-fade-transition hide-on-leave>
                  <v-icon v-if="!item.onCart">mdi-cart-plus</v-icon>
                </v-fade-transition>
                <v-fade-transition hide-on-leave>
                  <v-icon v-if="item.onCart">mdi-check</v-icon>
                </v-fade-transition>
              </v-btn>
              <h3 class="display-1 font-weight-light orange--text mb-2">{{item.title}}</h3>
              <div class="font-weight-light title mb-2">
                {{item.description}}
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InitialProducts',
  data () {
    return {
      homeItens: [
        {
          id: 1,
          img: 'https://portalcorreio.com.br/wp-content/uploads/2019/07/candy-lanchocolates-010319.jpg',
          description: 'Cholate ao leite top, cremoso',
          title: 'Chcolate ao leite',
          price: 29.99,
          onCart: false
        },
        {
          id: 2,
          img: 'https://http2.mlstatic.com/kit-2-barras-chocolate-ao-leite-garoto-21kg-atacado-D_NQ_NP_727514-MLB27593178639_062018-F.jpg',
          description: 'Cholate meio amargo, metade da amargura de sua vida',
          title: 'Chcolate meio amargo',
          price: 29.99,
          onCart: false
        },
        {
          id: 3,
          img: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chocolate_%28blue_background%29.jpg',
          description: 'Chocolate duas cores, a dualidade que voce precisa',
          title: 'Duas cores',
          price: 29.99,
          onCart: false
        },
        {
          id: 4,
          img: 'https://www.paodeacucar.com/img/uploads/1/345/606345.jpg',
          description: 'O chocolate que tem o Talento que voce não tem',
          title: 'Talentoso',
          price: 29.99,
          onCart: false
        },
        {
          id: 5,
          img: 'https://docemalu.vteximg.com.br/arquivos/ids/167526-1000-1000/108892-1.jpg?v=636018481493470000',
          description: 'As bolinhas doces do capeta',
          title: 'Bolinha',
          price: 29.99,
          onCart: false
        }
      ]
    }
  },
  methods: {
    addProductToCart (item) {
      item.onCart = true
      this.$store.dispatch('addToShoppingCartList', { qtd: 1, item })
      this.$notify({
        group: 'addToCart',
        title: `${item.title} adicionado ao carrinho`,
        type: 'success'
      })
    }
  }
}
</script>
<style scoped>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
</style>
