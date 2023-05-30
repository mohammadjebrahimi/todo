

import { computed } from 'vue'

export function useTable({ props,emit }) {

   
    const { searchedRows, filteredRows, rows } = props.store


    const filteredRow = computed(() => {
        console.log(filteredRows(searchedRows({ rows: rows})));
        return filteredRows(searchedRows({ rows: rows}))
    }
    )
    const rowClicked=(rowIndex)=>{
        emit('rowClicked',rowIndex)

    }
    return { filteredRow,rowClicked }
}