<template>
  <v-container>
    <user-form @ok-pressed="createUser" :isNewRegister="isNewRegister">
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
      this.$store.dispatch('changeUserInfo', event)
    }
  }
}
</script>
