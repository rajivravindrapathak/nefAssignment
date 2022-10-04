import React from 'react'
import { Route, Routes } from 'react-router-dom'
import First from './First'
import Navbar from './Navbar'
import Second from './Second'


function AllRoutes() {

  return (
    <>
    <Navbar />

    <Routes>
      <Route path='/' element={<First/>} />
      <Route path='/second' element={<Second/>} />
      <Route path='/third' element={<Contact/>} />
      <Route path='/users' element={<Users/>} >
        {/* <Route path=':id' element={<div>Nested Route</div>}></Route> */}
          
      </Route>
      <Route path='/users/:user_id' element={<UserPage />} />
    </Routes>
    </>
  )
}

export default AllRoutes