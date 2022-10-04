import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className="App">
      <h2>My application</h2>
      <Routes>
        <Navbar />
      </Routes>
    </div>
  )
}

export default App
