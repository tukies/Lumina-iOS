import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initGoogleAnalytics } from './analytics.js'
import App from './App.jsx'

initGoogleAnalytics()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
