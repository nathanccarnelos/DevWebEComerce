<template>
  <v-container>
    <v-alert v-if="showError" type="error">Erro Ao tentar Editar.</v-alert>
    <user-form :userInfos="userInfo" @ok-pressed="updateUser" :isNewRegister="isNewRegister">
    </user-form>
  </v-container>
</template>

<script>
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'EditUser',
  components: {
    'user-form': UserForm
  },
  data () {
    return {
      isNewRegister: false,
      showError: false
    }
  },
  mounted () {
    if (!this.$store.state.isLogged) {
      this.$router.push({ name: 'home' })
    }
  },
  computed: {
    userInfo: {
      get () {
        return this.$store.state.userInfo
      }
    }
  },
  methods: {
    updateUser (event) {
      console.log(event)
      this.axios.put(`https://shielded-oasis-78348.herokuapp.com/public/api/clients/update/${event.id}`, {
        'usuario_nome': event.name,
        'usuario_email': event.email,
        'usuario_phone': event.phoneNumber,
        'usuario_cep': event.address.cep,
        'usuario_cpf': event.cpf,
        'usuario_adress_complement': event.address.complement,
        'usuario_password': event.password
      }).then(response => {
        if (response.status === 200) {
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
