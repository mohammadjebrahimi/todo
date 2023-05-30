// mouse.js


// by convention, composable function names start with "use"
export function useFilter({ headers ,store}) {
  const { filterOption ,updateFilter} = store

  const filter = (e, closeModal) => {
    const filters = Object.keys(headers).reduce((filter, header) => {
      filter[header] = e.target.elements[header].value

      return filter
    }, {})
    updateFilter(filters)

    closeModal()
  }
  return { filterOption, filter }
}