// mouse.js
import { reactive, onMounted, onUnmounted, computed } from 'vue'
import { Dropdown } from 'bootstrap'
import { useTodoListStore } from '@/stores/todolist.js'

// by convention, composable function names start with "use"
export function useFilter({ headers }) {
  const { filterOption } = useTodoListStore()

console.log(filterOption);
  return { filterOption }
}