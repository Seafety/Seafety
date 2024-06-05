import React from 'react'
import ReactDOM from 'react-dom/client'
import './ui/sass/index.scss'
import Router from './router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
