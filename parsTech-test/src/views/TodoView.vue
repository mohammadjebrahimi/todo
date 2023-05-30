<script setup>
import Table from '@/components/table/Table.vue';
import { useTodoItemStore } from '@/stores/todoItem.js'
import router from '../router';
import { useRoute } from "vue-router";
import { onMounted, ref } from 'vue';

onMounted(() => setParentId(route.params.id))
const route = useRoute();
const { headers, rows, setParentId } = useTodoItemStore()
const gotoTodoPage = (e) => {
  router.push({ name: 'todo', params: { id: e } })
}

</script>

<template>
  <main>
    <Table @rowClicked="" :headers="headers" :rows="rows" :store="useTodoItemStore()" />
  </main>
</template>