import { Route, Routes } from "react-router-dom"
import Login from './Components/Login'
import Chat from './Components/Chat'
import Home from './Components/Home'
import PageNotFound from './Components/PageNotFound'
import ProtectedRoute from "./Components/ProtectedRoute"
import { useState } from "react"
import { useEffect } from "react"

function App() {

  const [isloggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
        <Routes>
            <Route path="/" element={<ProtectedRoute 
            isloggedIn={isloggedIn} 
            setIsLoggedIn={setIsLoggedIn}>
                <Home setIsLoggedIn={setIsLoggedIn}></Home>
            </ProtectedRoute>}></Route>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
            {/* it will match to the route that has chat/sometext */}
            <Route path="/chat/:uniqueId" element={<Chat></Chat>}></Route>
            {/* it will match with everything */}
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    </>
  )
}

export default App

