import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', () => {

  const todoListRows = ref([{
    title: 'rgergrer',
    description: 'ergergergergergeg',
    creationDate:'s'
  },{
    title: 'rgergrer',
    description: 'ergergergergergeg',
    creationDate:'s'
  }])
  const todoListHeaders = ref({
    title: { isVisible: true },
    description: { isVisible: true },
    creationDate:{isVisible: true }
  })
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

  const updateTodoListHeaderVisibility=({key,isVisible})=>{
   return todoListHeaders.value[key].isVisible=isVisible
  }

  return { todoListRows, addRow, deleteRow, updateRow, todoListHeaders,updateTodoListHeaderVisibility }
})
