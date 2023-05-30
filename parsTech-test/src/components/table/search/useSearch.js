// mouse.js
import { reactive } from 'vue'



export function useSearch({store}) {
  const { headers, search,updateSearch } = store


  function selectSearchColumn(key) {
    updateSearch({selectedColumn:key })
  }


  return { search, headers, selectSearchColumn }
}