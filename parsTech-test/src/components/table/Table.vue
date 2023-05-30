<template>
<div class="">
<div class="d-flex p-2">
<RowMaker :store="store" :headers="headers"/>
<SetColumnVisibilityMode :store="store"  :headers="headers"/>
<Filter :store="store"  :headers="headers"/>
<Search :store="store"/>
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
      <tr @click="rowClicked(row.id)" v-for="(row, rowIndex) in filteredRow " :key="'row-' + rowIndex">
        <td scope="row">{{ rowIndex + 1 }}</td>
        <template  v-for="(headerValue,headerkey, rowItemIndex) in headers" :key="'rowItem-' + rowItemIndex" >
          <td  v-if="headerValue.isVisible"  scope="col">{{ row[headerkey] }}</td>
        </template>
        <td scope="row"><Actions :store="store" :rowIndex="rowIndex" :row="row"/></td>
      </tr>
    </tbody>
  </table>
</div>  
</template>
<script setup>

import RowMaker from '@/components/table/rowMaker/RowMaker.vue';
import SetColumnVisibilityMode from '@/components/table/setColumnVisibilityMode/SetColumnVisibilityMode.vue';
import Actions from './actions/Actions.vue';
import Filter from './filter/filter.vue';
import Search from './search/Search.vue';
import {useTable} from './useTable';

const props=defineProps({

  headers: {
    tyope: Array,
    default: []
  },
  rows: {
    tyope: Array,
    default: []
  },
  store:{
    tyope: Function,

  }

})
const emit = defineEmits(['rowClicked'])

const{filteredRow,rowClicked}=useTable({props,emit})
</script>



<style scoped></style>
