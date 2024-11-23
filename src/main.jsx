import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import ReactRoutes from './ReactRoutes/ReactRoutes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className="max-w-[1200px] mx-auto">
      <BrowserRouter>
      <ReactRoutes></ReactRoutes>
  </BrowserRouter>
      </div>
  </StrictMode>,
)
