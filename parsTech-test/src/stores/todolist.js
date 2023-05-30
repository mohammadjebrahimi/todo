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
    title: 'sd',
    description: 'dsg',
    creationDate: 's'
  })
  const todoListHeaders = ref({
    title: { isVisible: true },
    description: { isVisible: true },
    creationDate: { isVisible: true }
  })
  const filteredRows = computed((rows) => rows.filter((item) => {
    for (const key in todoListFilter.value) {
      if (item[key] === undefined || item[key] != todoListFilter.value[key])
        return false;
    }
    return true;
  }))
  const filterOption = computed(() => todoListRows.value.reduce((acc, item) => {
    for (const key in todoListHeaders.value) {
      if (item[key] !== undefined) {
        acc[key] = new Set([...acc[key] ?? [], item[key]]);
      }
    }
    return acc
  }, {}))
  const searchedRows = computed(({ rows, search }) => rows.filter((item) => {
    for (const key in todoListHeaders.value) {
      if (item[key] === undefined || !item[key].includes(search))
        return false;
    }
    return true;
  }))

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
    filterOption
  }
})
