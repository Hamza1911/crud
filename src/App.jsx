import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Create from './components/Create'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Create/>}/>
    </Routes>
    </BrowserRouter>
      
    
       
    </>
  )
}

export default App
