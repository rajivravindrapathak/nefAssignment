import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Header'>
        <Link to="/first">First store</Link> <br /><br />
        <Link to="/second">Second store</Link> <br /><br />
        <Link to="/third">Third store</Link> <br /><br />
        <Link to="/fourth">Fourth store</Link> <br /><br />
        <Link to="/fifth">Fifth store</Link>
    </div>
  )
}

export default Navbar
