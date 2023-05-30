import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', () => {

  const todoListRows = ref([{
    title: 'sd',
    description: 'dsg',
    creationDate: 's'
  }, {
    title: 'dg',
    description: 'dgsdsdgsddgd',
    creationDate: 's'
  }])
  const todoListFilter = ref({
    title: '',
    description: '',
    creationDate: ''
  })
  const todoListSearch = ref('')
  const todoListHeaders = ref({
    title: { isVisible: true },
    description: { isVisible: true },
    creationDate: { isVisible: true }
  })




  const filterOption = computed(() => todoListRows.value.reduce((acc, item) => {
    for (const key in todoListHeaders.value) {
      if (item[key] !== undefined) {
        acc[key] = new Set([...acc[key] ?? [], item[key]]);
      }
    }
    return acc
  }, {}))






  const searchedRows = ({ rows }) => rows.filter((item) => {
    for (const key in todoListHeaders.value) {
      if (item[key] === undefined || !item[key].includes(todoListSearch.value))
        return false;
    }
    return true;
  })
  const filteredRows = (rows) => rows.filter((item) => {
    for (const key in todoListFilter.value) {
      if (item[key] === undefined || item[key] != todoListFilter.value[key] && todoListFilter.value[key])
        return false;
    }
    return true;
  })
  const updateTodoListFilter = (filters) => {
    for (const key in filters) {
      if (todoListFilter.value[key] !== undefined)
        todoListFilter.value[key] = filters[key]
    }

  }
  const addRow = (row) => {
    const creationDate = new Date().toLocaleDateString();
    todoListRows.value.push({ ...row, creationDate })
  };
  const deleteRow = (index) => {
    return checkRowIndex ? todoListRows.value.splice(index, 1) : []
  }
  const updateRow = ({ index, row }) => {
    return checkRowIndex ? todoListRows.value[index] = row : null

  }
  const checkRowIndex = () => {
    const index = todoListRows.value.indexOf(5);
    return index > -1
  }

  const updateTodoListHeaderVisibility = ({ key, isVisible }) => {
    return todoListHeaders.value[key].isVisible = isVisible
  }

  return {
    todoListRows,
    addRow,
    deleteRow,
    updateRow,
    todoListHeaders,
    updateTodoListHeaderVisibility,
    filteredRows,
    todoListFilter,
    filterOption,
    searchedRows,
    updateTodoListFilter
  }
})
