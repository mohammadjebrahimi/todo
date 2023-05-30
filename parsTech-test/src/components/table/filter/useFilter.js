// mouse.js
import { reactive, onMounted, onUnmounted, computed } from 'vue'
import { Dropdown } from 'bootstrap'
import { useTodoListStore } from '@/stores/todolist.js'

// by convention, composable function names start with "use"
export function useFilter({ headers }) {
  const { filterOption ,updateTodoListFilter,todoListFilter} = useTodoListStore()

  const filter = (e, closeModal) => {
    const filters = Object.keys(headers).reduce((filter, header) => {
      filter[header] = e.target.elements[header].value

      return filter
    }, {})
    updateTodoListFilter(filters)
    console.log(todoListFilter);
    closeModal()
  }
  return { filterOption, filter }
}