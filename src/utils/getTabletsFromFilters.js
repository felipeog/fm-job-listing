export function getTabletsFromFilters(filters) {
  let tablets = []

  Object.keys(filters).forEach((key) => {
    if (filters[key]) {
      if (typeof filters[key] === 'string') {
        tablets.push({ value: filters[key], filter: key })
      }

      if (Array.isArray(filters[key]) && filters[key].length) {
        filters[key].forEach((value) => tablets.push({ value, filter: key }))
      }
    }
  })

  return tablets
}
