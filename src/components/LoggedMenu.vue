<template>
  <v-card>
    <v-toolbar
        color="green darken-1"
        dark
    >
      <v-toolbar-title>Olá {{userInfo.name.split(' ')[0]}}</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-btn block @click="$router.push({name: 'editUser'})">Editar meu cadastro</v-btn>
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="logout()" color="error">Sair</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'LoginMenu',
  data () {
    return {}
  },
  methods: {
    logout () {
      this.$store.dispatch('changeIsLogged', false)
      this.$emit('close-menu')
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  }
}
</script>
