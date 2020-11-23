import WidthWrapper from '../WidthWrapper'
import Job from '../Job'
import './index.scss'

function JobList({ jobs, toggleValueFilter }) {
  return (
    <ul className="JobList">
      <WidthWrapper>
        {jobs.map((job) => (
          <li className="JobList__item" key={job.id}>
            <Job job={job} toggleValueFilter={toggleValueFilter} />
          </li>
        ))}
      </WidthWrapper>
    </ul>
  )
}

export default JobList
