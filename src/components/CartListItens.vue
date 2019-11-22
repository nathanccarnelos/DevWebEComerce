<template>
  <v-list subheader two-line color="grey lighten-2">
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

      <v-list-item-action style="display: inline-block">
        <v-btn @click="reduceQtdInItem(item.item.id)" icon small>
          <v-icon small>mdi-minus</v-icon>
        </v-btn>
        {{item.qtd || ''}}
        <v-btn @click="addQtdInItem(item.item.id)" icon small>
          <v-icon small>mdi-plus</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
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
  },
  methods: {
    addQtdInItem (id) {
      this.$store.dispatch('addQtdShoppingCartItem', id)
    },
    reduceQtdInItem (id) {
      this.$store.dispatch('removeQtdShoppingCartItem', id)
    }
  }
}
</script>
<style scoped>
</style>
