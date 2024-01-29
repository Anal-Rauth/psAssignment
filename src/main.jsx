import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Sidebar from './components/Sidebar.jsx'
import DistanceSlider from './components/DistanceSlider.jsx'
import Map from './Components/Map.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Sidebar />
    <DistanceSlider />
  </React.StrictMode>,
)

