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
        <v-btn x-small text color="primary">Cliente novo? Cadastrar</v-btn>
        <v-text-field
          v-model="userForm.userName"
          :rules="[v => !!v || 'Campo requerido']"
          label="Username"
          required
        ></v-text-field>
        <v-text-field
            v-model="userForm.userPassWord"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            :rules="[v => !!v || 'Campo requerido']"
            label="Password"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-container>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!valid" color="primary">Entrar</v-btn>
        <v-btn color="error" @click="closeMenu()">Cancelar</v-btn>
      </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'LogMenu',
  data () {
    return {
      valid: false,
      userForm: {
        userName: '',
        userPassWord: ''
      },
      showPassword: true
    }
  },
  methods: {
    closeMenu () {
      this.$emit('close-menu')
    }
  }
}
</script>
