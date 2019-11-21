<template>
  <v-container>
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
      isNewRegister: false
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
      },
      set (value) {
        this.$store.dispatch('changeUserInfo', value)
      }
    }
  },
  methods: {
    updateUser (event) {
      this.userInfo = event
    }
  }

}
</script>
