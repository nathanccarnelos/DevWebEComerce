<template>
  <v-card>
    <v-form
      ref="form"
      v-model="valid">
      <v-container>
        <v-text-field
          :rules="emailRules"
          label="E-mail"
          required
          v-model="userForm.username"
        ></v-text-field>
        <v-text-field
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[v => !!v || 'Campo requerido']"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        label="Password"
        v-model="userForm.password"
      ></v-text-field>
        <v-btn @click="$router.push({name:'registerUser'})" color="primary" small text>Cliente novo? Cadastrar</v-btn>
      </v-container>
    </v-form>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :dark="valid" :disabled="!valid" @click="login()" color="teal">Entrar</v-btn>
      <v-btn @click="closeMenu()" color="error">Cancelar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'LoginMenu',
  data () {
    return {
      emailRules: [
        v => !!v || 'E-mail é requerido',
        v => /.+@.+/.test(v) || 'E-mail deve ser valido'
      ],
      valid: false,
      userForm: {
        username: '',
        password: ''
      },
      showPassword: false
    }
  },
  methods: {
    closeMenu () {
      this.$emit('close-menu')
    },
    login () {
      this.axios.post('/api/login', {
        email: this.userForm.username,
        password: this.userForm.password
      })
      this.$store.dispatch('loginUser', this.userForm)
        .then(response => {
          if (response.data.data.code === 200) {
            // this.$store.dispatch('changeUserInfo', event)
            this.$store.dispatch('changeIsLogged', true)
          }
        })
      this.closeMenu()
    }
  }
}
</script>
