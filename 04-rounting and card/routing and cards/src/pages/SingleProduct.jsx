import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    console.log("single products");
    const {id} = useParams()
    
//     useEffect(()=>{
//         axios(`https://fakestoreapi.com/products/${id}`)
//         .then((res)=>{

//     console.log(res);

//         })

//         .catch((error)=>{
//                 console.log(error);
                
//         })
//     },[])

  return (
<>
</>

)


}

export default SingleProduct