// mouse.js
import { reactive, onMounted, onUnmounted, computed, toRefs } from 'vue'
import { useTodoListStore } from '@/stores/todolist.js'

export function useActions(props) {
  const { row: propRow } = props
  const { deleteRow,
    updateRow, } = useTodoListStore()

  const updateRowAndCloseModal = ({ rowIndex, event, CLB }) => {
    const row = Object.keys(propRow).reduce((row, column) => {
      console.log(column);
      row[column] = event.target.elements[column].value
      return row
    }, {})
    updateRow({ index: rowIndex, row })
    CLB()
  }

  return {
    deleteRow,
    updateRow,
    updateRowAndCloseModal
  }
}