import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Discount from "./Discount"
import "./Fourth.css"

const Fourth = () => {
    const [list, setList] = useState([]);
     
    useEffect(()=>{
         axios.get("http://localhost:8080/storeF").then((response)=>{
           // console.log(response.data);
           
          setList([...response.data]);      
        })
    },[]);

  return (
    <div className='receipe'>
      <h1>Fourth store Recipe</h1>
      <div className='first'>
        {list.map((e) => (
            <Discount

                image={e.image}
                Receipe={e.Receipe}
                price={e.price} 
                discount={e.discount}
              >  

            </Discount>
        ))}
      
      </div>
      
    </div>
  )
}

export default Fourth
