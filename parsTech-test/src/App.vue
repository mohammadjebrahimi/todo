<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import { useLightModeStore } from '@/stores/lightMode.js'
import { ref, toRefs } from 'vue';

const { islightMode } = useLightModeStore()


</script>

<template>
  <Header />
  <RouterView />
</template>

<style >
#app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0%;
  min-height: 100vh;


}
 main {
  overflow: hidden;
}
</style>
