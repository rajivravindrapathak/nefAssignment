import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  
  return (
    <div className='Header'>
        <Link to="/first">First store</Link> 
        <Link to="/second">Second store</Link> 
        <Link to="/third">Third store</Link> 
        <Link to="/fourth">Fourth store</Link> 
        <Link to="/fifth">Fifth store</Link>
    </div>
  )
}

export default Navbar
