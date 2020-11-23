import WidthWrapper from '../WidthWrapper'
import TabletList from '../TabletList'
import './index.scss'

function FiltersHeader({ filters, toggleValueFilter, clearAllFilters }) {
  function getTablets() {
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

  const tablets = getTablets()

  return (
    <div className="FiltersHeader">
      <div className="FiltersHeader__bg" />

      <WidthWrapper>
        <div
          className={`FiltersHeader__content${
            !tablets?.length ? ' FiltersHeader__content--hidden' : ''
          }`}
        >
          <div className="FiltersHeader__tablets">
            <TabletList
              tablets={tablets}
              toggleValueFilter={toggleValueFilter}
              removeIcon
            />
          </div>
          <button
            className="FiltersHeader__clear-button"
            type="button"
            onClick={clearAllFilters}
          >
            Clear
          </button>
        </div>
      </WidthWrapper>
    </div>
  )
}

export default FiltersHeader
