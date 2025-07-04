import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Aboutpage from './Components/Aboutpage'
import Dashboard from './Components/Dashboard'

import React from 'react';
import Navbar from './Components/Navbar'
import { Paramcomp } from './Components/Paramcomp'
import Courses from './Components/Courses'
import Mocktest from './Components/Mocktest'
//import { Link } from 'react-router-dom';


//import Navbar from './Components/Navbar'





const  router =createBrowserRouter([
  {path:"/",
    element: <div>
      <Navbar/>
      <Home/>
    </div>
  },

 {path:"/aboutpage",
    element: 
    <div>
      <Navbar/>
      <Aboutpage/>
    </div>
  },
  {
   path:"/dashboard",
   element:(
   <div>
    <Navbar/>
    <Dashboard/>
   </div>),
   children:[
    {
      path:"courses",
      element:<Courses/>
    },
    {
     path:"mock-tests",
     element:<Mocktest/>

    },
    {
      path:"report",
      element:<Report/>
    }]
   
  },
  {
    path:"student/:id",
    element:
    <div>
    <Navbar/>
    <Paramcomp/>
   </div>
  }
])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
        <RouterProvider router ={router}/>
      </div>
    </>
  )
}

export default App