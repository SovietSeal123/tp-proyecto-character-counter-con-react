import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pagina from './Pagina.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pagina />
  </StrictMode>,
)
