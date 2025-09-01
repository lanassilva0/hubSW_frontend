<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h4 primary--text">
            <v-icon large color="primary" class="mr-2">mdi-home</v-icon>
            Bem-vindo ao Hub SW!
          </v-card-title>
          
          <v-card-text>
            <p class="text-h6">Olá, {{ user.name }}!</p>
            <p>Esta é sua página inicial após o login.</p>
            
            <v-row class="mt-4"> 
              <v-col cols="12" md="4">
                <v-card color="green-lighten-5" class="text-center">
                  <v-card-text>
                    <v-icon x-large color="green">mdi-account</v-icon>
                    <div class="text-h6 mt-2">Perfil</div>
                    <!-- <v-btn color="green" class="mt-2" to="/profile">Editar</v-btn> -->
                  </v-card-text>
                </v-card>
              </v-col>
              
              <v-col cols="12" md="4">
                <v-card color="orange-lighten-5" class="text-center">
                  <v-card-text>
                    <v-icon x-large color="orange">mdi-cog</v-icon>
                    <div class="text-h6 mt-2">Configurações</div>
                    <v-btn color="orange" class="mt-2" to="/settings">Configurar</v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
              
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'HomePage',
  setup() {
    const user = ref(JSON.parse(localStorage.getItem('user') || '{}'))

    onMounted(() => {
      // Pode buscar dados adicionais aqui
    })

    return {
      user
    }
  }
}
</script>