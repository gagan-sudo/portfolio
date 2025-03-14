import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import "./i18n"
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <>
  <Toaster richColors position="top-right" closeButton/>
  <App/>,
  </>
)
