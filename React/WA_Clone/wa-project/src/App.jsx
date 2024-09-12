import { Route, Routes } from "react-router-dom"
import Login from './Components/Login'
import Chat from './Components/Chat'
import Home from './Components/Home'
import PageNotFound from './Components/PageNotFound'

function App() {

  return (
    <>
      <h1>Whatsapp Clone</h1>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* it will match with /login string */}
        <Route path="/login" element={<Login></Login>}></Route>
        {/* it will match to the route that has chat/sometext */}
        <Route path="/chat/:uniqueId" element={<Chat></Chat>}></Route>
        {/* it will match with everything */}
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  )
}

export default App
