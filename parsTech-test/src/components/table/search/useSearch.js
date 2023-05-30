// mouse.js
import { reactive } from 'vue'

import { useTodoListStore } from '@/stores/todolist.js'

export function useSearch() {
  const { todoListHeaders, todoListSearch,updateTodoListSearch } = useTodoListStore()
  const state = reactive({
    dropdown: null,
  })



  function selectSearchColumn(key) {
    updateTodoListSearch({selectedColumn:key })
  }


  return { todoListSearch, todoListHeaders, selectSearchColumn }
}