import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Explore from './pages/Explore.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home/> */}
    <Navbar />
    <Explore />
  </React.StrictMode>
);
