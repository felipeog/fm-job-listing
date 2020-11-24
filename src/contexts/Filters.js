import { createContext, useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import data from '../consts/data.json'

const defaultState = {
  role: null,
  level: null,
  languages: [],
  tools: [],
}

export const FiltersContext = createContext(defaultState)

export function FiltersProvider({ children }) {
  const history = useHistory()
  const location = useLocation()
  const [jobs, setJobs] = useState(data)
  const [filters, setFilters] = useState(defaultState)

  useEffect(() => {
    const { role, level, languages, tools } = queryString.parse(location.search)
    const newFilters = {
      role: role ?? null,
      level: level ?? null,
      languages: languages
        ? Array.isArray(languages)
          ? languages
          : [languages]
        : [],
      tools: tools ? (Array.isArray(tools) ? tools : [tools]) : [],
    }

    setFilters(newFilters)
  }, [location])

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
    let newFilters = filters
    let newValue = null

    switch (filter) {
      case 'role':
      case 'level':
        newValue = value === filters[filter] ? null : value

        newFilters = {
          ...newFilters,
          [filter]: newValue,
        }

        break

      case 'languages':
      case 'tools':
        newValue = filters[filter].includes(value)
          ? filters[filter].filter((filter) => value !== filter)
          : [...filters[filter], value]

        newFilters = {
          ...newFilters,
          [filter]: newValue,
        }

        break

      default:
        throw new Error(
          'FiltersProvider @ toggleValueFilter >>>>> Invalid filter'
        )
    }

    const stringifiedFilters = queryString.stringify(newFilters, {
      skipNull: true,
    })

    history.push({ search: stringifiedFilters })
  }

  function clearAllFilters() {
    history.push({ search: '' })
  }

  return (
    <FiltersContext.Provider
      value={{
        jobs,
        filters,
        toggleValueFilter,
        clearAllFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
