<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';



</script>

<template>
  <Header />
  <RouterView />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}
</style>
