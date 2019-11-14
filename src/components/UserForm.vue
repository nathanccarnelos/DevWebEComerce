<template>
  <v-card>
      <v-toolbar
        color="green darken-1"
        dark
      >
       <v-toolbar-title>{{isNewUser ? 'Criar Cadastro' : 'Editar Cadastro'}}</v-toolbar-title>
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
  name: 'UserForm',
  data () {
    return {
      isNewUser: true
    }
  },
  methods: {
    closeMenu () {

    }
  }
}
</script>
