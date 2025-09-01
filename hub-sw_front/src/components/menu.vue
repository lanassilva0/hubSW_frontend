<script setup>

</script>


<template>
    <v-navigation-drawer app v-if="isAuthenticated" v-model="drawer">
      <v-list dense nav>
        <v-list-item link to="/home">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<style scoped>

</style>