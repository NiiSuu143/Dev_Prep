import { Route, Routes } from "react-router-dom"
import Login from './Components/Login'
import Chat from './Components/ChatWindow'
import Home from './Components/Home'
import PageNotFound from './Components/PageNotFound'
import ProtectedRoute from "./Components/ProtectedRoute"
import { useState } from "react"

function App() {
  // loggedIn -> imformation, user data -> CRUD

  return (
    <>
        <Routes>
            <Route path="/" element={<ProtectedRoute >
                <Home></Home>
            </ProtectedRoute>}></Route>

            <Route path="/login" element={<Login></Login>}></Route>

            {/* it will match to the route that has chat/sometext */}
            <Route path="/:chatId" element={<ProtectedRoute>
              <Home></Home>
            </ProtectedRoute>}></Route>

            {/* it will match with everything */}
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    </>
  )
}

export default App

