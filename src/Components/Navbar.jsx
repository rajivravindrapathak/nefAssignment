import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
        <Link to="/">First Receipe</Link>
        <Link to="/second">Second Receipe</Link>
        <Link to="/third">Third Receipe</Link>
        <Link to="/fourth">Fourth Receipe</Link>
        <Link to="/fifth">Fifth Receipe</Link>
    </nav>
  )
}

export default Navbar
