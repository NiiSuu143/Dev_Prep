import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Streaming Video Player</h2>
      <video width={640} height={500} controls>
        {/* consumed and stream */}
        <source src='http://localhost:3000/rangeStreaming' type='video/mp4'/>
      </video>
    </>
  )
}

export default App
