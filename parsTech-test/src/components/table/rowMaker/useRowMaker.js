

export function useAddRow({ headers ,store }) {
  const { addRow } =store
  function addToTodolist(e, closeModal) {

    const row = Object.keys(headers).reduce((row, header) => {
      row[header] = e.target.elements[header].value
      return row
    }, {})
    addRow(row)
    closeModal()
  }

  return { addToTodolist }
}