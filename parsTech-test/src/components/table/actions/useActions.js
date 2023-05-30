

export function useActions(props) {
  const { row: propRow ,store} = props
  const { deleteRow,
    updateRow, } = store

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