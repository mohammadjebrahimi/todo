<template>
  <div class="input-group w-50">
    <input type="search" v-model="search.searchString" class="form-control rounded" placeholder="Search"
      aria-label="Search" aria-describedby="search-addon" />
    <div class="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
      data-bs-toggle="dropdown" aria-expanded="false">
      {{ search.selectedColumn }}
    </div>


    <div class="dropdown-menu" id="searchDRP">
      <template v-for="(headerValue, headerkey, index) in headers" :key="'headerSearch-' + index">
        <div v-if="headerValue.isSearchable" class="dropdown-item"
          :class="{ active: headerkey == search.selectedColumn }" @click="selectSearchColumn(headerkey)">
          {{ headerkey }}</div>
      </template>

    </div>




  </div>
</template>
<script setup>

import { useSearch } from '@/components/table/search/useSearch'
const props = defineProps({
  headers: {
    tyope: Object,
    default: {}
  },
  store: {
    tyope: Function,

  }
})
const { search, headers, selectSearchColumn } = useSearch({...props})
</script>



<style scoped></style>
