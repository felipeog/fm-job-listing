import { useContext } from 'react'
import { FiltersContext } from '../../contexts/Filters'
import Tablet from '../Tablet'
import './index.scss'

function TabletList({ tablets, removeIcon }) {
  const { toggleValueFilter } = useContext(FiltersContext)

  return (
    <ul className="TabletList">
      {tablets.map(({ value, filter }) => (
        <li className="TabletList__item" key={`${value}-${filter}`}>
          <Tablet
            text={value}
            onClick={() => toggleValueFilter(value, filter)}
            removeIcon={removeIcon}
          />
        </li>
      ))}
    </ul>
  )
}

export default TabletList
