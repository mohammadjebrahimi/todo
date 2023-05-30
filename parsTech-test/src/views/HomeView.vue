<script setup>
import Table from '@/components/table/Table.vue';
import { useTodoListStore } from '@/stores/todolist.js'
import router from '../router';
const { headers, rows } = useTodoListStore()
const gotoTodoPage=(e)=>{
  router.push({ name: 'todo', params: { id: e } })
}
</script>

<template>
  <main>
    <Table @rowClicked="gotoTodoPage($event)" :store="useTodoListStore()" :headers="headers" :rows="rows" />
  </main>
</template>
