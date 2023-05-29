<template>
<div class="">
<div class="">
<AddRow :headers="headers"/>

</div>
  <table class="table table-hover">
    
    <thead>
      <tr>
        <th scope="col">#</th>
        <template  v-for="(headerValue,headerkey, index) in headers" :key="'header-' + index" >
          <th  v-if="headerValue.isVisible"  scope="col">{{ headerkey }}</th>
        </template>
        <th scope="col">actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in rows " :key="'row-' + rowIndex">
        <td scope="row">{{ rowIndex + 1 }}</td>
        <template  v-for="(headerValue,headerkey, rowItemIndex) in headers" :key="'rowItem-' + rowItemIndex" >
          <td  v-if="headerValue.isVisible"  scope="col">{{ row[headerkey] }}</td>
        </template>
        <td scope="row">act</td>
      </tr>
    </tbody>
  </table>
</div>  
</template>
<script setup>
defineProps({

  headers: {
    tyope: Array,
    default: []
  },
  rows: {
    tyope: Array,
    default: []
  }

})

import AddRow from './addRow.vue';
import { useTable } from './table.js'

const { x, y } = useTable()
</script>



<style scoped></style>
