import { useEffect, useState } from 'react'
import data from '../../consts/data.json'
import FiltersHeader from '../../components/FiltersHeader'
import JobList from '../../components/JobList'
import './index.scss'

function Home() {
  const filtersInitialState = {
    role: null,
    level: null,
    languages: [],
    tools: [],
  }

  const [jobs, setJobs] = useState(data)
  const [filters, setFilters] = useState(filtersInitialState)

  useEffect(() => {
    let filteredJobs = data

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        if (typeof filters[key] === 'string') {
          filteredJobs = filteredJobs.filter(
            (job) => filters[key].toLowerCase() === job[key].toLowerCase()
          )
        }

        if (Array.isArray(filters[key]) && filters[key].length) {
          const filtersLowerCase = filters[key].map((item) =>
            item.toLowerCase()
          )

          filteredJobs = filteredJobs.filter((job) => {
            const jobLowerCase = job[key].map((item) => item.toLowerCase())

            return filtersLowerCase.every((value) =>
              jobLowerCase.includes(value)
            )
          })
        }
      }
    })

    setJobs(filteredJobs)
  }, [filters])

  function toggleValueFilter(value, filter) {
    switch (filter) {
      case 'role':
      case 'level':
        setFilters((filters) => {
          const newValue = value === filters[filter] ? null : value

          return {
            ...filters,
            [filter]: newValue,
          }
        })

        break

      case 'languages':
      case 'tools':
        const newValue = filters[filter].includes(value)
          ? filters[filter].filter((filter) => value !== filter)
          : [...filters[filter], value]

        setFilters((filters) => {
          return {
            ...filters,
            [filter]: newValue,
          }
        })

        break

      default:
        throw new Error('Home @ handleTabletClick >>>>> Invalid filter')
    }
  }

  function clearAllFilters() {
    setFilters(filtersInitialState)
  }

  return (
    <main className="Home">
      <FiltersHeader
        filters={filters}
        toggleValueFilter={toggleValueFilter}
        clearAllFilters={clearAllFilters}
      />

      <JobList jobs={jobs} toggleValueFilter={toggleValueFilter} />
    </main>
  )
}

export default Home
