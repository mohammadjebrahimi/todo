import { useTodoListStore } from '@/stores/todolist.js'

export function useAddRow({ headers }) {
  const { addRow } = useTodoListStore()
  function addToTodolist(e, closeModal) {

    const row = Object.keys(headers).reduce((row, header) => {

      row[header] = e.target.elements[header].value
      closeModal()
      return row
    }, {})
    addRow(row)
  }

  return { addToTodolist }
}