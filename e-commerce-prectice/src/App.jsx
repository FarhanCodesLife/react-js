import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addtocart } from './config/redux/reducer/CartSlice'
import CategoriesBar from './component/CategoriesBar'

const App = () => {

  let [products,setproducts]=useState(null)

  useEffect(()=>{
    let addtocartitems = ()=>{
      
        axios('https://dummyjson.com/products')
        .then(res=>{
          // console.log(res.data.products);
          setproducts(res.data.products)
          
        })
        .catch(err=>{console.log(err);
        })
        
        
      }
      addtocartitems()
    },[])
    
    console.log(products);
  let selector = useSelector(state=>state.cart.cartitems)
  console.log(selector);

  let dispatch = useDispatch()
  
  let addcart =(item)=>{
    dispatch(
      addtocart({
        item
      })
    )
  }


  return (
<>
<Navbar selector={selector}/>
<CategoriesBar/>
<div className='flex justify-center items-center flex-wrap gap-5 m-5'>

{products? products.map((item)=>{
  return <div key={item.id} className="card bg-base-100 w-72 shadow-xl">
  <figure>
    <img
      src={item.thumbnail}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title.slice(0,12)+"..."}
      <div className="badge badge-secondary"><p>{item.rating}</p></div>
    </h2>
    <p>{item.description.slice(0,50)+"..."}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline"><p>{item.brand}</p></div>
      <div className="badge badge-outline">{item.availabilityStatus}</div>
    </div>
      <div className="m-2 text-lg font-bold"><h1>${item.price}</h1></div>
    <div className='text-center  mt-3 btn btn-primary text-lg'>
      <button onClick={()=>addcart(item)}>Add to cart</button>
    </div>
  </div>
</div>

}):<h1>loading...</h1> }
</div>

</>

)
}

export default App