import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useLightModeStore = defineStore('lightMode', () => {
  const islightMode = ref(true)

  const togglelightMode = () => {
    console.log('islightMode.value',islightMode.value);
    return islightMode.value=!islightMode.value
  }

  return {
    islightMode,
    togglelightMode
  }
})
