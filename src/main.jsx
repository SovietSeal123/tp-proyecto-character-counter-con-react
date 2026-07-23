import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Pagina from './pages/Pagina'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pagina />
  </StrictMode>,
)
