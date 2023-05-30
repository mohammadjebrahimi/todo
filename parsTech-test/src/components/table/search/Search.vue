<template>

<div class="input-group w-50">
  <input type="search" v-model="todoListSearch.searchString" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <div class="btn btn-primary m-1 dropdown-toggle" href="#"  role="button" data-toggle="dropdown"
    aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">
    {{todoListSearch.selectedColumn}}
  </div>


  <div class="dropdown-menu" id="searchDRP" >
    <template v-for="(headerValue, headerkey, index) in todoListHeaders" :key="'headerSearch-' + index">
      <div v-if="headerValue.isSearchable" class="dropdown-item"
    :class="{ active: headerkey==todoListSearch.selectedColumn }" @click="selectSearchColumn(headerkey)">
      {{ headerkey }}</div>
    </template>

</div>




  </div>
</template>
<script setup>

import { useSearch } from '@/components/table/search/useSearch'

const { todoListSearch,todoListHeaders,selectSearchColumn } = useSearch()
</script>



<style scoped></style>
