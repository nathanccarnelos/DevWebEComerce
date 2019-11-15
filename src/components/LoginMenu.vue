<template>
  <v-card>
      <v-toolbar
        color="indigo"
        dark
      >
       <v-toolbar-title>Log in</v-toolbar-title>
      </v-toolbar>
      <v-form
      ref="form"
      v-model="valid">
      <v-container>
          <v-text-field
            :rules="emailRules"
            label="E-mail"
            required
            v-model="userForm.userName"
        ></v-text-field>
        <v-text-field
            v-model="userForm.userPassWord"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            :rules="[v => !!v || 'Campo requerido']"
            label="Password"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <v-btn small text color="primary" @click="$router.push({name:'registerUser'})">Cliente novo? Cadastrar</v-btn>
        </v-container>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="login()" :disabled="!valid" color="primary">Entrar</v-btn>
        <v-btn color="error" @click="closeMenu()">Cancelar</v-btn>
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
        userName: '',
        userPassWord: ''
      },
      showPassword: false,
      userinfoTESTE: {
        name: 'Nathan Carnelos',
        email: 'nathancoltinho@gmail.com',
        phoneNumber: '(71)99999-9999',
        address: {
          cep: '40000-000',
          neighborhood: 'BairroTeste',
          city: 'cidadeTeste',
          street: 'ruaTeste',
          uf: 'BA',
          complement: 'Ap 01'
        }
      }
    }
  },
  methods: {
    closeMenu () {
      this.$emit('close-menu')
    },
    login () {
      this.$store.dispatch('changeIsLoged')
      this.$store.dispatch('changeUserInfo', this.userinfoTESTE)
      this.closeMenu()
    }
  }
}
</script>
