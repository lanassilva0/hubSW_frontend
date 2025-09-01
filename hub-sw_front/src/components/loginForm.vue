<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const valid = ref(true)
const loading = ref(false)
const email = ref('')
const password = ref('')

const emailRules = [
  v => !!v || 'E-mail é obrigatório',
  v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido'
]

const passwordRules = [
  v => !!v || 'Senha é obrigatória',
  v => (v && v.length >= 6) || 'Senha deve ter pelo menos 6 caracteres'
]

const form = ref(null)

async function handleLogin() {
}

function loginWithGoogle() {
  showMessage('Login com Google clicado', 'info')
}
</script>

<template>
  <v-card class="login-card" max-width="450" elevation="12">
    <v-card-title class="text-center bg-primary">
      <span class="text-h5 font-weight-bold white--text">Login</span>
    </v-card-title>

    <v-card-text class="pa-6">
      <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="handleLogin">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          type="email"
          required
          outlined
          prepend-inner-icon="mdi-email"
          class="mb-4"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Senha"
          type="password"
          required
          outlined
          prepend-inner-icon="mdi-lock"
          class="mb-2"
        ></v-text-field>

        <div class="d-flex justify-space-between align-center mb-4">
          <v-checkbox
            v-model="rememberMe"
            label="Lembrar-me"
            color="primary"
            hide-details
          ></v-checkbox>

          <a href="#" class="text-caption text-primary text-decoration-none">
            Esqueci minha senha
          </a>
        </div>

        <v-btn
          :disabled="!valid || loading"
          :loading="loading"
          color="primary"
          type="submit"
          block
          large
          class="mb-4"
        >
          <v-icon left>mdi-login</v-icon>
          Entrar
        </v-btn>
        <div class="text-center">
          <p class="text-body-2 mb-3">Ou entre com</p>
          <div class="d-flex justify-center gap-2">
            <v-btn icon color="blue darken-1" @click="loginWithGoogle">
              <v-icon>mdi-google</v-icon>
            </v-btn>
          </div>
        </div>
      </v-form>
    </v-card-text>
    <v-card-actions class="pa-4 pt-0">
      <div class="text-center text-body-2" style="width: 100%">
        Não tem uma conta?
        <a href="#" class="text-primary text-decoration-none ml-1">Cadastre-se</a>
      </div>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.login-card {
  border-radius: 12px;
  margin: 0 auto;
}

.gap-2 {
  gap: 8px;
}

.v-card__title.bg-primary {
  background: linear-gradient(135deg, #1976d2 0%, #0d47a1 100%);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
</style>
