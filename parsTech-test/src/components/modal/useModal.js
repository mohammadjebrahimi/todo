// mouse.js
import { reactive, onMounted, onUnmounted } from 'vue'
import { Modal } from 'bootstrap'


// by convention, composable function names start with "use"
export function useModal({id}) {

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


  onMounted(() => state.modal = new Modal(`#${id}`, {}))


  // expose managed state as return value
  return { openModal, closeModal }
}