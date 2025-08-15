import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NormalCounter from './Components/NormalCounter.jsx'
import ReduxCounter from './Components/ReduxComponent.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NormalCounter/> */}
      <ReduxCounter/>
    </>
  )
}

export default App
