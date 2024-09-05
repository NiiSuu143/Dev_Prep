import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// if you import any css in any component
import './index.css'

createRoot(document.getElementById('root')).render(<App />)
