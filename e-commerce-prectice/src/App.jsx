import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addtocart } from './config/redux/reducer/CartSlice'
import CategoriesBar from './component/CategoriesBar'
import Scrolar from './component/Scrolar'
import Deal from './component/Deal'
import Products from './component/products'

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
<Scrolar/>
<div className='flex flex-wrap justify-center gap-4'>
<Deal/>
<Deal/>
<div className='flex w-96 gap-2 flex-wrap   border-gray border-2 shadow-lg rounded-lg p-2 justify-center '>
<div className="w-96 border-2 shadow-lg rounded-lg">
          <img  src="https://f.nooncdn.com/mpcms/EN0001/assets/ab57e61d-e010-441c-8e94-e36c7ae0e467.png?format=avif" className="card-img-tp" alt="..."/>
               
    </div>

    <div className="w-96 border-2 shadow-lg rounded-lg">
          <img src="https://f.nooncdn.com/ads/banner-410x410/410x195-EN%20(4).1727701967.7759702.png?format=avif" className="card-img-op" alt="..."/>
               
    </div>
</div>


</div>


<div>

<div className='m-10 text-4xl font-bold  '>

  <h1>Beauty</h1>
</div>
<div className='flex overflow-scroll scroll-smooth  justify-start border p-2   items-center  gap-3 m-5'>

<Products products={products} addcart={addcart} categori={'beauty'}/>
</div>
</div>

<div>

<div className='m-10 text-4xl font-bold  '>

  <h1>Furniture</h1>
</div>
<div className='flex overflow-scroll scroll-smooth  justify-start border p2  items-center  gap-3 m-5'>

<Products products={products} addcart={addcart} categori={'furniture'}/>
</div>
</div>

<div>

<div className='m-10 text-4xl font-bold  '>

  <h1>fragrances</h1>
</div>
<div className='flex overflow-scroll scroll-smooth  justify-start border p2  items-center  gap-3 m-5'>

<Products products={products} addcart={addcart} categori={'fragrances'}/>
</div>
</div>


<div>

<div className='m-10 text-4xl font-bold  '>

  <h1>fragrances</h1>
</div>
<div className='flex overflow-scroll scroll-smooth  justify-start border p2  items-center  gap-3 m-5'>

<Products products={products} addcart={addcart} categori={'groceries'}/>
</div>
</div>



<div>

<div className='m-10 text-4xl font-bold  '>

  <h1>fragrances</h1>
</div>
<div className='flex overflow-scroll scroll-smooth   justify-start border p2  items-center  gap-3 m-5'>

<Products products={products} addcart={addcart} categori={'groceries'}/>
</div>
</div>

</>

)
}

export default App