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
    <v-list subheader two-line>
      <v-list-item
        :key="key"
        v-for="(item, key) in shoppingCart"
      >
        <v-list-item-avatar>
          <v-img :src="item.item.img"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{item.item.title}}</v-list-item-title>
          <v-list-item-subtitle>{{item.item.description}}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-card-actions>
      <v-btn block color="">Fechar Pedido</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CartMenu',
  data () {
    return {}
  },
  computed: {
    shoppingCart () {
      return this.$store.state.shoppingCart
    }
  }
}
</script>
