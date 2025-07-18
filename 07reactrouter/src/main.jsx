import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from 'lucide-react'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path: "",
        element: <Home/>
      },
      {
        path:"about",
        element:<About/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
//routeprovider ke liye prop dena hota hai 