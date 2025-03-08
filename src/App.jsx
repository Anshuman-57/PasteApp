import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import Home from './components/Home'

function App() {
 
  const router = createBrowserRouter([

    {
      path : "/",
      element:
      <div>
        <Navbar></Navbar>
        <Home></Home>
      </div>
    },

    {
      path : "/pastes",
      element: 
      <div>
        <Navbar></Navbar>
        <Paste></Paste>
      </div>
    },

    {
      path : "/pastes/:id",
      element:
      <div>
        <Navbar></Navbar>
        <ViewPaste></ViewPaste>
      </div>
    }
  ])

  return (
    <div>
 
<RouterProvider router={router} ></RouterProvider>

    </div>
  )
}

export default App
