import { useEffect, useState } from 'react'
import data from '../../consts/data.json'
import FiltersHeader from '../../components/FiltersHeader'
import './index.scss'

function Home() {
  const filtersInitialState = {
    role: null,
    level: null,
    languages: [],
    tools: [],
  }

  const [companies, setCompanies] = useState(data)
  const [filters, setFilters] = useState(filtersInitialState)

  useEffect(() => {
    let filteredCompanies = data

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        if (typeof filters[key] === 'string') {
          filteredCompanies = filteredCompanies.filter(
            (company) => filters[key] === company[key]
          )
        }

        if (Array.isArray(filters[key]) && filters[key].length) {
          filteredCompanies = filteredCompanies.filter((company) =>
            filters[key].every((value) => company[key].includes(value))
          )
        }
      }
    })

    setCompanies(filteredCompanies)
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
      <div className="wrapper">
        <FiltersHeader
          filters={filters}
          toggleValueFilter={toggleValueFilter}
          clearAllFilters={clearAllFilters}
        />

        {companies.map(
          ({
            id,
            company,
            logo,
            new: isNew,
            featured: isFeatured,
            position,
            role,
            level,
            postedAt,
            contract,
            location,
            languages,
            tools,
          }) => {
            const roleTablet = { value: role, filter: 'role' }
            const levelTablet = { value: level, filter: 'level' }
            const languagesTablets = languages.map((language) => ({
              value: language,
              filter: 'languages',
            }))
            const toolsTablets = tools.map((tool) => ({
              value: tool,
              filter: 'tools',
            }))
            const tablets = [
              roleTablet,
              levelTablet,
              ...languagesTablets,
              ...toolsTablets,
            ]

            return (
              <article key={id}>
                {company}
                <ul>
                  {tablets.map(({ value, filter }) => (
                    <li
                      key={`${company}-${id}-${value}`}
                      onClick={() => toggleValueFilter(value, filter)}
                    >
                      {value} - {filter}
                    </li>
                  ))}
                </ul>
              </article>
            )
          }
        )}
      </div>
    </main>
  )
}

export default Home
