<template>
  <div>
    <v-dialog max-width="300" persistent v-model="myProducts">
      <v-card>
        <v-toolbar
          class="title"
          color="purple darken-1"
          dark
        >
          <v-toolbar-title>Olá {{userInfo.name.split(' ')[0]}}</v-toolbar-title>
        </v-toolbar>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="myProducts=false" color="error">fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card>
      <v-toolbar
        color="green darken-1"
        dark
      >
        <v-toolbar-title>Olá {{userInfo.name.split(' ')[0]}}</v-toolbar-title>
      </v-toolbar>
      <v-container>
        <v-row class="pa-2">
          <v-btn @click="$router.push({name: 'editUser'})" block color="purple lighten-3">Editar meu cadastro</v-btn>
        </v-row>
        <v-row class="pa-2">
          <v-btn @click="openMyProducts" block color="purple lighten-3">Compras efetivadas</v-btn>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="logout()" color="error">Sair</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'LoginMenu',
  data () {
    return {
      myProducts: false
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$emit('close-menu')
    },
    openMyProducts () {
      this.myProducts = true
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    },
    ordersList () {
      return ['compra1', 'compra2']
    }
  }
}
</script>
