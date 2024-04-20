import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Explore from './pages/Explore.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import CreatePage from './pages/CreatePage.jsx'


const router = createBrowserRouter([
  {
    path :'/',
    
    element: <Layout />,
    children:[
      {
        path:"",
        element:<Home />,
      },
      {
        path:"/explore",
        element:<Explore />,
      },
      {
        path: "/createPage",
        element:<CreatePage/>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


