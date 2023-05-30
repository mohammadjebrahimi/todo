// mouse.js
import { reactive, onMounted, onUnmounted } from 'vue'
import { Modal } from 'bootstrap'
import { useTodoListStore } from '@/stores/todolist.js'

// by convention, composable function names start with "use"
export function useModal({id}) {
  const { addRow}= useTodoListStore()
  const state = reactive({
    modal: null,
})

  function openModal()
  {
      state.modal.show()
  }
  
  function closeModal()
  {
      state.modal.hide()
  }

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  onMounted(() => state.modal = new Modal(`#${id}`, {}))


  // expose managed state as return value
  return { openModal, closeModal }
}