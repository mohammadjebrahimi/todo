
import { useTodoListStore } from '@/stores/todolist.js'
import { computed } from 'vue'

export function useTable({ headers }) {
    const { searchedRows, filteredRows, todoListRows } = useTodoListStore()


    const filteredRow = computed(() => {
        return filteredRows(searchedRows({ rows: todoListRows, search: '' }))
    }
    )
    return { filteredRow }
}