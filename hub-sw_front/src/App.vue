<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import loginForm from './components/loginForm.vue'

const router = useRouter()
const drawer = ref(true)

const isAuthenticated = computed(() => {
  // return !!localStorage.getItem('token')
  return false;
})

const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.push('/login')
}
</script>

<template>
  <div>
    <!-- <template v-if="isAuthenticated">
      <v-app id="inspire">
        <div class="app-container"> 
          <toolbar @toggleNavigationBar="drawer = !drawer"/>
          <navigation :toggle="drawer"/>
          <v-content>
            <breadcrumbs />
            <router-view/>
            <page-footer />
          </v-content>
        </div>
      </v-app>
    </template>

    <template v-else>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template> -->

  </div>
</template>

<style scoped>
/* Estilos opcionais */
</style>