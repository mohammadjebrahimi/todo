<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Table from './components/Table.vue';
import { useTodoListStore } from './stores/todolist.js'
const { todoListHeaders ,todoListRows}= useTodoListStore()
</script>

<template>
  <Header />
  <Table :headers="todoListHeaders" :rows="todoListRows" />
  <RouterView />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100;
}
</style>
