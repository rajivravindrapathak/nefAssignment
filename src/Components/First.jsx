import React from 'react'
import Discount from "./Discount"

const First = () => {
  return (
    <div>
      first
      <h1>Recipe</h1>
      <Discount name="maggi" price={50} discount={5} />
      <h2>panner</h2>
      <h2>dosa</h2>
      <h2>depla</h2>
      <h2>liti</h2>
    </div>
  )
}

export default First
