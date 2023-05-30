<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary m-1" @click.stop ="openModal()" :data-target="`#${id}`">
    {{ title }}
  </button>

  <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"> {{ title }}</h5>
          <button type="button" class="close" @click.stop ="closeModal()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot v-bind:closeModal="closeModal" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  id: {
    tyope: String,
    default: ''
  },
  title: {
    tyope: String,
    default: ''
  },
})

import { useModal } from './useModal'

const { openModal, closeModal} = useModal({ ...props })
</script>



<style scoped></style>
