<template>
  <v-container fluid class="login-container">
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="8" md="6" lg="4">
        <login-form />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import loginForm from '@/components/loginForm.vue';

export default {
  name: 'LoginPage',
  components: {
    loginForm
  }
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.fill-height {
  min-height: 100vh;
}
</style>