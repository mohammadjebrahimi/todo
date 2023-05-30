<template>


  <Modal id="addRowModal" title="Add row">
    <template #default="{ closeModal }">
      <form  @submit.prevent="addToTodolist($event,closeModal)">
      <div v-for="(headerValue, headerkey, index) in headers" :key="'headerInput-' + index" class="form-group">
        <label :for="'headerInput-' + index">{{ headerkey }}</label>
        <input :name="headerkey" class="form-control" :id="'headerInput-' + index" :placeholder="headerkey">
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
    </template>

  </Modal>
</template>
<script setup>
const props = defineProps({
  headers: {
    tyope: Object,
    default: {}
  },
})

import Modal from '../../modal/Modal.vue';
import { useAddRow } from './useRowMaker'

const { addToTodolist } = useAddRow({ ...props  })
</script>



<style scoped></style>
