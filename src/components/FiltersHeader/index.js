import { useContext } from 'react'
import { FiltersContext } from '../../contexts/Filters'
import { getTabletsFromFilters } from '../../utils/getTabletsFromFilters'
import WidthWrapper from '../WidthWrapper'
import TabletList from '../TabletList'
import './index.scss'

function FiltersHeader() {
  const { filters, clearAllFilters } = useContext(FiltersContext)
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
          {!!tablets?.length && (
            <>
              <div className="FiltersHeader__tablets">
                <TabletList tablets={tablets} removeIcon />
              </div>
              <button
                className="FiltersHeader__clear-button"
                type="button"
                onClick={clearAllFilters}
              >
                Clear
              </button>
            </>
          )}
        </div>
      </WidthWrapper>
    </div>
  )
}

export default FiltersHeader
