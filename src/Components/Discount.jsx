import React from 'react'
// import { Link } from 'react-router-dom'

const Discount = ({ image, Receipe, price, discount }) => {
    
  return (
    // <Link to={"/ProductPage"}> 
    
      <div style={{marginTop:"10px"}} >
      
        <img src={image} alt="img book"/>
        <h2>Receipe: {Receipe}</h2>
        <h2>price: {price}</h2>
        <h2>price: {price}</h2>
        <h2>discount: {discount}</h2>
        <hr />
      </div>
    // </Link>
  )
}

export default Discount
