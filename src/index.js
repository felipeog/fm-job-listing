import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { FiltersProvider } from './contexts/Filters'
import './index.scss'

ReactDOM.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
  document.getElementById('root')
)
