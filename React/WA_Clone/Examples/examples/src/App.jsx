import React, { useState } from 'react'
import './App.css'

import HeadingParent from './Components/HeadingParent'
import ShoppingCart from './Components/ShoppingCart'
import CounterParent from './Components/CounterParent'
import InputBox from './Components/InputBox'
import PropDrilling from './Context/PropDrilling'
import PropDrillingSol from './Context/PropDrillingSol'

import { Routes, Route} from 'react-router-dom'
import PageNotFound from './Context/ThemeChanger/PageNotFound'
import Home from './Context/ThemeChanger/Home'
import { useDarkTheme } from './Context/ThemeContext'



function App() {
  
  const { handleToggleTheme } = useDarkTheme();
  return (
    <>
     <h1>App Component</h1>
     {/* <HeadingParent></HeadingParent> */}
     {/* <ShoppingCart></ShoppingCart> */}
     {/* <CounterParent></CounterParent> */}
     {/* <InputBox></InputBox> */}
     {/* <PropDrilling></PropDrilling> */}
     {/* <PropDrillingSol></PropDrillingSol> */}

      <button onClick={handleToggleTheme}>Toggle Theme</button>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
   
    </>
  )
}

export default App
