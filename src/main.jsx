import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Register from './pages/Register'
import List from './pages/List'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
