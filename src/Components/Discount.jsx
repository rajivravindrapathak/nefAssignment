import React from 'react'
// import { Link } from 'react-router-dom'
import "./Discount.css"

const Discount = ({ image, Receipe, price, discount }) => {
  const btnDiscount = () => {

  }
    
  return (
    // <Link to={"/ProductPage"}> 
    
      <div className='dis'>
        <img src={image} alt="img book"/>
        <h2>Receipe: {Receipe}</h2>
        <h2>price: {price}</h2>
        <h2>discount: {discount}%</h2>
        <hr />
        <button onClick={btnDiscount}>Discount</button>
      </div>
    // </Link>
  )
}

export default Discount
