<template>
  <v-container>
    <v-alert v-if="showError" type="error">Erro Ao tentar cadastrar.</v-alert>
    <user-form :isNewRegister="isNewRegister" @ok-pressed="createUser">
    </user-form>
  </v-container>
</template>

<script>
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'RegisterUser',
  components: {
    UserForm
  },
  data () {
    return {
      isNewRegister: true,
      showError: false
    }
  },
  methods: {
    createUser (event) {
      this.axios.post('https://shielded-oasis-78348.herokuapp.com/public/api/clients/store', {
        'usuario_nome': event.name,
        'usuario_email': event.email,
        'usuario_phone': event.phoneNumber,
        'usuario_cep': event.address.cep,
        'usuario_cpf': event.cpf,
        'usuario_adress_complement': event.address.complement,
        'usuario_password': event.password
      }).then(response => {
        if (response.data.data.status === 'Sucess') {
          this.showError = false
          this.$notify({
            group: 'UserSave',
            title: 'Salvo com sucesso',
            type: 'success'
          })
          this.$store.dispatch('changeUserInfo', event)
          this.$store.dispatch('changeIsLogged', true)
          this.$router.push({ name: 'home' })
        }
      }).catch(() => {
        this.showError = true
      })
    }
  }
}
</script>
