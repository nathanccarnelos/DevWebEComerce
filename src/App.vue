<template>
  <v-app>
    <v-app-bar
        app
        color="deep-purple accent-4"
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
            {{isLoged ? 'olá ' + userName :'faça seu login'}}
          </v-btn>
        </template>
        <login-menu @close-menu="menu=false" v-if="!isLoged"></login-menu>
        <loged-menu v-else @close-menu="menu=false"></loged-menu>

      </v-menu>
      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import LoginMenu from './components/LoginMenu.vue'
import LogedMenu from './components/LogedMenu.vue'

export default {
  name: 'App',
  components: {
    LoginMenu,
    LogedMenu
  },
  data: () => ({
    menu: false
  }),
  computed: {
    isLoged () {
      return this.$store.state.isLoged
    },
    userName () {
      return this.$store.state.userInfo.name.split(' ')[0]
    }
  }
}
</script>
<style scoped>
  .v-badge--overlap.v-badge--bottom .v-badge__badg {
    bottom: 0;
  }
</style>
