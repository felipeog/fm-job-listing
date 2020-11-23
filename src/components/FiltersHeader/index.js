import './index.scss'

function FiltersHeader({ filters, toggleValueFilter, clearAllFilters }) {
  return (
    <div className="FiltersHeader">
      <button type="button" onClick={clearAllFilters}>
        Clear
      </button>
    </div>
  )
}

export default FiltersHeader
