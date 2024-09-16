import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Myfile, { NonDefault } from './Components/Myfile'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ThemeWrapper from './Context/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <BrowserRouter>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </BrowserRouter>
      {/* <Myfile></Myfile>
      <NonDefault></NonDefault> */}
    </>
  </StrictMode>,
)
