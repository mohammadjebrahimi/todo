<template>
  <Modal id="filterModal" title="filter">
    <template #default="{ closeModal }">
      <form @submit.prevent="addToTodolist($event, closeModal)">
        <select v-for="(headerValue, headerkey, index) in headers" :key="'headerFilter-' + index" class="form-select m-2"
          aria-label="Default select example">
          <option selected>Filter this {{ headerkey }} menu</option>
          <option v-for="(optionValue, optionIndex) in filterOption[headerkey]" :key="'filterOption-' + optionIndex"
            :value="optionValue">{{ optionValue }}</option>
        </select>
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
import { useFilter } from './useFilter'

const { filterOption } = useFilter({ ...props })
</script>



<style scoped></style>
