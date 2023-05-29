<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" @click="openModal()" data-target="#exampleModal">
    Add row
  </button>

  <!-- Modal -->
  <div class="modal fade" id="addRowModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" @click="closeModal()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addToTodolist($event)">
            <div v-for="(headerValue, headerkey, index) in headers" :key="'headerInput-' + index" class="form-group">
              <label :for="'headerInput-' + index">{{ headerkey }}</label>
              <input :name="headerkey" class="form-control" :id="'headerInput-' + index" :placeholder="headerkey">
            </div>
            <button class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  headers: {
    tyope: Object,
    default: {}
  },
})

import { useAddRow } from './rowMaker'

const { openModal, closeModal, addToTodolist } = useAddRow({ ...props })
</script>



<style scoped></style>
