<template>
  <div class="d-flex p-2">
    <button type="button" class="btn btn-danger m-1" @click.stop="deleteRow(rowIndex)">delete</button>
    <Modal :id='"updateRowModal"' title="update">
      <template #default="{ closeModal }">
        <form @submit.prevent="updateRowAndCloseModal({ rowIndex,event: $event,CLB:closeModal } )">
          {{row}}
          <div v-for="(rowValue, rowkey, index) in row" :key="'updaterow-' + index" class="form-group">
            <label :for="'updaterow-' + index">{{ rowkey }}</label>
            <input :value="rowValue" :name="rowkey" class="form-control" :id="'updaterow-' + index" :placeholder="rowkey">
          </div>
          <button @click.stop class="btn btn-primary">Submit</button>
        </form>
      </template>

    </Modal>
  </div>
</template>
<script setup>

import Modal from '../../modal/Modal.vue';
import { useActions } from './useActions'
const props = defineProps({
  rowIndex: {
    type: Number,
    required: true
  },
  row: {
    tyope: Object,
    default: {}
  },
  store:{
    tyope: Function,

  }
})
const { deleteRow,
  updateRowAndCloseModal} = useActions({ ...props })
</script>



<style scoped></style>
