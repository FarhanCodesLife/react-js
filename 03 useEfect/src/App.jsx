import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './card'

function App() {
  let [data,setdata]=useState([])
  useEffect(()=>{
    async function getdata() {
      
      let res = await axios("https://fakestoreapi.com/products")
      // console.log(res.data);
      setdata(res.data)
    }
    
    getdata()
  },[])
  
  console.log(data);
  
  return (
    <>
    <div className='w-full h-screen justify-center gap-4 items-center flex flex-wrap'>

    {data ? data.map((item,index) => {
      return(  
        <div className="card bg-base-100 w-80  h-[100%]  shadow-xl" key={index}>
        <figure>
          <img className='w-[100%] h-[100%] '
            src={item.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">{item.title}</h2>
        <p className='w-full h-32 overflow-x-auto  '>{item.description}</p>
        <br />
        <h2 className="card-title ">cataegory: {item.category}</h2>
        <h2 className="card-title ">rating : {item.rating.rate}</h2>

          <div className="card-actions justify-end w-full h-12 items-center gap-6">
        <h2 className="card-title ">${item.price}</h2>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>)
        
      }) : <h1>Loading...</h1>}
      </div>
    </>
  )
  
  
}

export default App