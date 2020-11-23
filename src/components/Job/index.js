import TabletList from '../TabletList'
import { getTabletsFromJob } from '../../utils/getTabletsFromJob'
import './index.scss'

function Job({ job }) {
  const {
    company,
    logo,
    new: isNew,
    featured: isFeatured,
    position,
    postedAt,
    contract,
    location,
  } = job
  const tablets = getTabletsFromJob(job)

  return (
    <article className={`Job${isFeatured ? ' Job--is-featured' : ''}`}>
      <div className="Job__logo">
        <img src={logo} alt={company} />
      </div>
      <div className="Job__content">
        <p className="Job__company">
          {company} {isNew && <span className="Job__is-new">New!</span>}{' '}
          {isFeatured && <span className="Job__is-featured">Featured</span>}
        </p>
        <h1 className="Job__position">{position}</h1>
        <p className="Job__meta">
          {postedAt} · {contract} · {location}
        </p>
      </div>

      <TabletList tablets={tablets} />
    </article>
  )
}

export default Job
