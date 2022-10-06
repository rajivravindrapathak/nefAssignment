import React from 'react'

const Discount = ({name, price , discount}) => {
    const amount = (price*discount)/100

  return (
    <div>
        {name}
        <h1>Price: {price}</h1>
        {discount}
    </div>
  )
}

export default Discount
