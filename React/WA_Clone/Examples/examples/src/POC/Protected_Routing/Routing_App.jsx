import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'

function Routing_App() {
    const [isloggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
        <h1>Routing_App</h1>
        <Routes>
            <Route path="/" element={<ProtectedRoute 
            isloggedIn={isloggedIn} 
            setIsLoggedIn={setIsLoggedIn}>
                <Home setIsLoggedIn={setIsLoggedIn}></Home>
            </ProtectedRoute>}></Route>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} isloggedIn={isloggedIn}></Login>}></Route>
        </Routes>
    </>
  )
}

export default Routing_App