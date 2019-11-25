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
import map from 'lodash/map'
export default {
  name: 'InitialProducts',
  data () {
    return {
      homeItens: []
    }
  },
  mounted () {
    this.axios.get('https://shielded-oasis-78348.herokuapp.com/public/api/products')
      .then(response => {
        this.homeItens = this.hydrateProductsList(response.data.data)
      })
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
    },
    hydrateProductsList (rawList) {
      return map(rawList, (item) => {
        return {
          id: item.id,
          title: item.nome,
          price: item.price,
          category: item['category_id'],
          img: item.img === 'no-img' ? '' : item.img,
          itemCount: item['stock_count'] || 0
        }
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
