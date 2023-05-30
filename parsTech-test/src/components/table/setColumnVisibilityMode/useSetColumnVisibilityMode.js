// mouse.js
import { reactive, onMounted, onUnmounted } from 'vue'


// by convention, composable function names start with "use"
export function useSetColumnVisibilityMode({ store }) {
  const { addRow,headers, updateHeaderVisibility } = store
  const state = reactive({
    dropdown: null,
  })



  function toggleColumnVisible(key) {
    updateHeaderVisibility({ key, isVisible: !headers[key].isVisible })
  }

 
  return {  toggleColumnVisible }
}