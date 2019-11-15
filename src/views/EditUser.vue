<template>
  <v-container>
    <user-form>
    </user-form>
  </v-container>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
export default {
  name: 'EditUser',
  components: {
    UserForm
  }
}
</script>
