import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoItemStore = defineStore('todoItem', () => {
  const parentId = ref('ascacsscacacacs')
  const Id = ref('todoItem')
  const rows = ref({
    ascacsscacacacs:
      [{
        title: 'jfgjf',
        description: 'ssfsf',
        dueDate: '5/30/2023',
        priority: 'dggsg',
        creationDate: '5/30/2023'

      }, {
        title: 'jfgjffff',
        description: 'sdgfgdsfsf',
        dueDate: '5/34/2023',
        priority: 'dggdfgdfgdfgsg',
        creationDate: '8/30/2023'
      }],
    fhfhfdh: [],
    fhhgjghjghjfhfdh: []
  })
  const filter = ref({
    title: '',
    description: '',
    dueDate: '',
    priority: '',
    creationDate: ''
  })
  const search = ref({
    selectedColumn: 'title',
    searchString: ''
  })
  const headers = ref({
    title: { isVisible: true, isSearchable: true },
    description: { isVisible: true, isSearchable: true },
    dueDate: { isVisible: true, isSearchable: false },
    priority: { isVisible: true, isSearchable: false },
    creationDate: { isVisible: true, isSearchable: false }
  })




  const filterOption = computed(() => {
    console.log({ rows });
    return rows.value[parentId.value].reduce((acc, item) => {
      for (const key in headers.value) {
        if (item[key] !== undefined) {
          acc[key] = new Set([...acc[key] ?? [], item[key]]);
        }
      }
      return acc
    }, {})
  })
  const getAllToDoItem = () => {
    let result = []
    for (const key in rows.value) {

      result = [...result, ...rows.value[key]]
    }

    console.log(',',result);
    return result
  }


  const sortDate = {
    asc: ({ array, key }) => {
      return array.sort(function (a, b) {
        return new Date(a[key]) - new Date(b[key]);
      });

    },
    desc: ({ array, key }) => {
      return array.sort(function (a, b) {
        return new Date(b[key]) - new Date(a[key]);
      });
    }

  }





  const searchedRows = ({ rows }) => {

    return rows[parentId.value].filter((item) => {
      const column = search.value.selectedColumn
      if (item[column] === undefined || !item[column].includes(search.value.searchString))
        return false;

      return true;
    })
  }
  const filteredRows = (rows) => rows.filter((item) => {
    for (const key in filter.value) {
      if (item[key] === undefined || item[key] != filter.value[key] && filter.value[key])
        return false;
    }
    return true;
  })
  const updateFilter = (filters) => {
    for (const key in filters) {
      if (filter.value[key] !== undefined)
        filter.value[key] = filters[key]
    }

  }
  const addRow = (row) => {
    const creationDate = new Date().toLocaleDateString();
    rows.value[parentId.value].push({ ...row, creationDate })
  };
  const deleteRow = (index) => {
    console.log(rows.value[parentId.value][0]);
    return checkRowIndex(index) ? rows.value[parentId.value].splice(index, 1) : []
  }
  const updateRow = ({ index, row }) => {

    for (const key in row) {
      if (rows.value[parentId.value][index][key] !== undefined)
        rows.value[parentId.value][index][key] = row[key]
    }
    console.log(rows);
  }
  const checkRowIndex = (i) => {
    const index = rows.value[parentId.value].length > i;
    return index
  }

  const updateHeaderVisibility = ({ key, isVisible }) => {
    return headers.value[key].isVisible = isVisible
  }
  const updateSearch = (searchOption) => {
    for (const key in searchOption) {
      if (search.value[key] !== undefined)
        search.value[key] = searchOption[key]
    }
  }

  const setParentId = (id) => {
    parentId.value = id
  }
  const addKeyByParentId = (id) => {
    if (!rows.value[id])
      rows.value[id] = []
  }
  const deleteKeyByParentId = (id) => {
    if (rows.value[id])
      delete rows.value[id]

  }
  return {
    rows,
    addRow,
    deleteRow,
    updateRow,
    headers,
    updateHeaderVisibility,
    filteredRows,
    filter,
    filterOption,
    searchedRows,
    updateFilter,
    search,
    updateSearch,
    setParentId,
    addKeyByParentId,
    deleteKeyByParentId,
    getAllToDoItem,
    sortDate
  }
})
