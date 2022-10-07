import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Fifth from './Components/Fifth'
import First from './Components/First'
import Fourth from './Components/Fourth'
import Navbar from './Components/Navbar'
import Second from './Components/Second'
import Third from './Components/Third'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/first' element={<First />} />
        <Route path='/second' element={<Second />} />
        <Route path='/third' element={<Third />} />
        <Route path='/fourth' element={<Fourth />} />  
        <Route path='/fifth' element={<Fifth />} />
      </Routes>
    </div>
  )
}

export default App
