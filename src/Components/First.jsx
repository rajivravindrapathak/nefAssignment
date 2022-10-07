import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Discount from "./Discount"
import "./First.css"

const First = () => {
    const [list, setList] = useState([]);
     
    useEffect(()=>{
         axios.get("http://localhost:8080/storeO").then((response)=>{
           // console.log(response.data);
           
          setList([...response.data]);      
        })
    },[]);

  return (
    <div className='receipe'>
      <h1>First store Recipe</h1>
      <div style={{textAlign:"center",marginTop:"15px"}}>
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

export default First
