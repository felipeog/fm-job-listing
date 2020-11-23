import WidthWrapper from '../WidthWrapper'
import TabletList from '../TabletList'
import { getTabletsFromFilters } from '../../utils/getTabletsFromFilters'
import './index.scss'

function FiltersHeader({ filters, toggleValueFilter, clearAllFilters }) {
  const tablets = getTabletsFromFilters(filters)

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
