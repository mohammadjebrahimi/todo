import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useTodoItemStore } from '@/stores/todoItem.js'



export const useTodoListStore = defineStore('todoList', () => {
  const { deleteKeyByParentId ,addKeyByParentId } = useTodoItemStore()
  const Id = ref('todoList')
  const rows = ref([{
    title: 'sd',
    description: 'dsg',
    creationDate: 's',
    id:'ascacsscacacacs'
  }, {
    title: 'dg',
    description: 'dgsdsdgsddgd',
    creationDate: 's',
    id:'fhfhfdh'
  }])
  const filter = ref({
    title: '',
    description: '',
    creationDate: '',
  })
  const search = ref({
    selectedColumn: 'title',
    searchString: ''
  })
  const headers = ref({
    title: { isVisible: true, isSearchable: true },
    description: {
      isVisible: true, isSearchable: true
    },
    creationDate: { isVisible: true, isSearchable: false }
  })




  const filterOption = computed(() => rows.value.reduce((acc, item) => {
    for (const key in headers.value) {
      if (item[key] !== undefined) {
        acc[key] = new Set([...acc[key] ?? [], item[key]]);
      }
    }
    return acc
  }, {}))


  const searchedRows = ({ rows }) => rows.filter((item) => {
    const column = search.value.selectedColumn
    if (item[column] === undefined || !item[column].includes(search.value.searchString))
      return false;

    return true;
  })
  const filteredRows = (rows) => rows.filter((item) => {
    for (const key in filter.value) {
      if (item[key] === undefined || item[key] != filter.value[key] && filter.value[key])
        return false;
    }
    return true;
  })
  const updateFilter = (filters) => {
    for (const key in filters) {
      if (filter.value[key] !== undefined)
        filter.value[key] = filters[key]
    }

  }
  const addRow = (row) => {
    const creationDate = new Date().toLocaleDateString();
    const id = Math.random().toString(16).slice(2)
    addKeyByParentId(id)
    rows.value.push({ ...row, creationDate })
  };
  const deleteRow = (index) => {
    deleteKeyByParentId(rows.value[index])
    return checkRowIndex(index) ? rows.value.splice(index, 1) : []
  }
  const updateRow = ({ index, row }) => {
 
    for (const key in row) {
      console.log(row);
      if (rows.value[index][key] !== undefined)
      rows.value[index][key] = row[key]
    }
  }
  const checkRowIndex = (i) => {
    const index = rows.value.length>= i ;
    return index 
  }

  const updateHeaderVisibility = ({ key, isVisible }) => {
    return headers.value[key].isVisible = isVisible
  }
  const updateSearch = (searchOption) => {
    for (const key in searchOption) {
      if (search.value[key] !== undefined)
        search.value[key] = searchOption[key]
    }
  }
  return {
    rows,
    addRow,
    deleteRow,
    updateRow,
    headers,
    updateHeaderVisibility,
    filteredRows,
    filter,
    filterOption,
    searchedRows,
    updateFilter,
     search,
     updateSearch
  }
})
