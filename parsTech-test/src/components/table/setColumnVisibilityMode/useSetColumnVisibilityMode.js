// mouse.js
import { reactive, onMounted, onUnmounted } from 'vue'
import { Dropdown } from 'bootstrap'
import { useTodoListStore } from '@/stores/todolist.js'

// by convention, composable function names start with "use"
export function useSetColumnVisibilityMode({ headers }) {
  const { addRow,todoListHeaders, updateTodoListHeaderVisibility } = useTodoListStore()
  const state = reactive({
    dropdown: null,
  })



  function toggleColumnVisible(key) {
    updateTodoListHeaderVisibility({ key, isVisible: !todoListHeaders[key].isVisible })
  }

 
  return {  toggleColumnVisible }
}