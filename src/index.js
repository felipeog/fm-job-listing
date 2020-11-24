import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { FiltersProvider } from './contexts/Filters'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'

ReactDOM.render(
  <BrowserRouter>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
