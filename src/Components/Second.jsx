import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Discount from "./Discount"
import "./Second.css"


const Second = () => {
    const [list, setList] = useState([]);
     
    useEffect(()=>{
         axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((response)=>{
           //console.log(response.data.categories);
            setList([...response.data.categories]);  
        
        })
    },[]);

  return (
    <div className='receipe'>
      <h1>Recipe</h1>
      <div style={{textAlign:"center",marginTop:"15px"}}>
        {list.map((e) => (
            <Discount
            
                idCategory={e.idCategory}
                strCategoryThumb={e.strCategoryThumb}
                strCategory={e.strCategory} 
                // strCategoryDescription={e.strCategoryDescription}
                >  
            </Discount>
        ))}
      
      </div>
      
    </div>
  )
}

export default Second
