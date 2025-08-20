import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NormalCounter from './Components/NormalCounter.jsx'
import ReduxCounter from './Components/ReduxComponent.jsx'
import NormalInputCounter from './Components/NormalInputCounter.jsx'
import ReduxInputContainer from './Components/ReduxInputContainer.jsx'
import UserComponent from './Components/UserComponent.jsx'
import ReduxUserComponent from './Components/ReduxUser.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NormalCounter/> */}
      {/* <ReduxCounter/> */}
      {/* <NormalInputCounter/> */}
      {/* <ReduxInputContainer/> */}
      {/* <UserComponent/> */}
      <ReduxUserComponent/>
    </>
  )
}

export default App
