<template>
  <v-app>
    <v-app-bar
      app
      color="deep-purple"
      dark
    >
      <v-toolbar-title>
        <v-btn @click="$router.push({ name: 'home' })" text x-large>SHOPLATE</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu
        :close-on-content-click="false"
        :nudge-width="200"
        offset-y
        v-model="menu"
      >
        <template v-slot:activator="{ on }">
          <v-btn small text v-on="on">
            <v-icon small>mdi-account</v-icon>
            {{isLogged ? 'olá ' + userName :'faça seu login'}}
          </v-btn>
        </template>
        <login-menu @close-menu="menu=false" v-if="!isLogged"></login-menu>
        <logged-menu @close-menu="menu=false" v-else></logged-menu>
      </v-menu>
      <v-menu
        :close-on-content-click="false"
        :nudge-width="400"
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-badge
            color="green"
            overlap
            left
          >
            <template v-slot:badge>
              <span v-if="shoppingCartCount > 0">{{ shoppingCartCount }}</span>
            </template>
            <v-btn icon v-on="on">
              <v-icon>mdi-cart</v-icon>
            </v-btn>
          </v-badge>
        </template>
        <cart-menu></cart-menu>
      </v-menu>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import LoginMenu from './components/LoginMenu.vue'
import LoggedMenu from './components/LoggedMenu.vue'
import CartMenu from './components/CartMenu.vue'

export default {
  name: 'App',
  components: {
    LoginMenu,
    LoggedMenu,
    CartMenu
  },
  data: () => ({
    menu: false,
    cartMenu: false
  }),
  computed: {
    isLogged () {
      return this.$store.state.isLogged
    },
    userName () {
      return this.$store.state.userInfo.name.split(' ')[0]
    },
    shoppingCartCount () {
      return this.$store.state.shoppingCart.length
    }
  }
}
</script>
<style scoped>
  .v-badge--overlap.v-badge--bottom .v-badge__badg {
    bottom: 0;
  }
</style>
