import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import Routing_App from './POC/Protected_Routing/Routing_App.jsx'
import User from './POC/useEffect/User.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* <App /> */}
        {/* <Routing_App/> */}
        <User></User>
    </BrowserRouter>

    ,)
