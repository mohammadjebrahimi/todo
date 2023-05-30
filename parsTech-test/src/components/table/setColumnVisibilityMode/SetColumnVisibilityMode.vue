<template>
  <div class="btn btn-primary m-1 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
    aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </div>

  <div class="dropdown-menu" id="headerVisibilityDRP" aria-labelledby="navbarDropdown">



    <div v-for="(headerValue, headerkey, index) in headers" :key="'headerVisibility-' + index" class="dropdown-item"
    :class="{ active: headerValue.isVisible }" @click="toggleColumnVisible(headerkey)">
      {{ headerkey }}</div>
  </div>
</template>
<script setup>
const props = defineProps({
  headers: {
    tyope: Object,
    default: {}
  },
})

import { useSetColumnVisibilityMode } from '@/components/table/setColumnVisibilityMode/useSetColumnVisibilityMode'

const { toggleColumnVisible } = useSetColumnVisibilityMode({ ...props })
</script>



<style scoped></style>
