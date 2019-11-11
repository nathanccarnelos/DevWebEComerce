<template>
  <v-app>
    <v-app-bar
      app
      color="deep-purple accent-4"
      dark
    >
    SHOPLATE
    <v-spacer></v-spacer>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn small text v-on="on">
          <v-icon small>mdi-account</v-icon> faça seu login
        </v-btn>
      </template>
    <log-menu @close-menu="menu=false"></log-menu>
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
import LogMenu from './components/LogMenu.vue'
export default {
  name: 'App',

  components: {
    LogMenu
  },

  data: () => ({
    menu: false
  }),
  mounted () {
    console.log('vai')
  }
}
</script>
<style scoped>
.v-badge--overlap.v-badge--bottom .v-badge__badg {
 bottom: 0;
}
</style>
