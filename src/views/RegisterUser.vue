<template>
  <v-container>
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
      isNewRegister: true
    }
  },
  methods: {
    createUser (event) {
      this.axios.post('/api/clients/store', {
        'usuario_nome': event.name,
        'usuario_email': event.email,
        'usuario_phone': event.phoneNumber,
        'usuario_cep': event.address.cep,
        'usuario_cpf': '9976423',
        'usuario_adress_complement': event.address.complement
      }).then()
      this.$store.dispatch('changeUserInfo', event)
    }
  }
}
</script>
