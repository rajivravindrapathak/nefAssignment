import React from 'react'
// import { Link } from 'react-router-dom'

const Discount = ({ idCategory, strCategory, strCategoryDescription, strCategoryThumb }) => {
    
  return (
    // <Link to={"/ProductPage"}> 
    
      <div style={{marginTop:"10px"}} >
      
        <img src={strCategoryThumb} alt="img book"/>
        <h2>id: {idCategory}</h2>
        <h2 >Name: {strCategory}</h2>
        <h2>strCategoryDescription: {strCategoryDescription}</h2>
        
        <hr />
      </div>
    // </Link>
  )
}

export default Discount
