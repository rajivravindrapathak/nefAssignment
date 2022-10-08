import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import "./Discount.css"

const Discount = ({ image, Receipe, price, discount }) => {
  const [amt, setAmt] = useState()
  let amount
  const btnDiscount = () => {
      amount = price - Math.floor((price*discount)/100)
      console.log("amount", amount)
      setAmt(amount)
  }
  
  // console.log("amount", amount)
  
  return (
    // <Link to={"/ProductPage"}> 
    
      <div className='dis'>
        <img src={image} alt="img book"/>
        <h2>Receipe: {Receipe}</h2>
        <h2>price: {price}</h2>
        <h2>discount: {discount}%</h2>
        <hr />
        <button onClick={btnDiscount}>Paybale amount</button>
        <h2>amount: {amt}</h2>
      </div>
    // </Link>
  )
}

export default Discount
