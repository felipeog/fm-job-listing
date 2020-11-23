import FiltersHeader from '../../components/FiltersHeader'
import JobList from '../../components/JobList'
import './index.scss'

function Home() {
  return (
    <main className="Home">
      <FiltersHeader />

      <JobList />
    </main>
  )
}

export default Home
