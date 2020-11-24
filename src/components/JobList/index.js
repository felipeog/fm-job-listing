import { useContext } from 'react'
import { FiltersContext } from '../../contexts/Filters'
import WidthWrapper from '../WidthWrapper'
import Job from '../Job'
import './index.scss'

function JobList() {
  const { jobs } = useContext(FiltersContext)

  return (
    <div className="JobList">
      <WidthWrapper as="ul">
        {jobs.map((job) => (
          <li className="JobList__item" key={job.id}>
            <Job job={job} />
          </li>
        ))}
      </WidthWrapper>
    </div>
  )
}

export default JobList
