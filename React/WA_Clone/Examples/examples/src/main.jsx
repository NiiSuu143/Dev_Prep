import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Myfile, { NonDefault } from './Components/Myfile'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Myfile></Myfile>
    <NonDefault></NonDefault> */}
  </StrictMode>,
)
