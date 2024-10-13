import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addtocart } from './config/redux/reducer/CartSlice'
import CategoriesBar from './component/CategoriesBar'
import Scrolar from './component/Scrolar'
import Deal from './component/Deal'
import Products from './component/products'
import Footer from './component/Footer'

const App = () => {

  let [products,setproducts]=useState(null)

  useEffect(()=>{
    let addtocartitems = ()=>{
      
        axios('https://dummyjson.com/products')
        .then(res=>{
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

  <h1>Fragrances</h1>
</div>
<div className='flex overflow-scroll scroll-smooth  justify-start border p2  items-center  gap-3 m-5'>

<Products products={products} addcart={addcart} categori={'fragrances'}/>
</div>
</div>


<div>

<div className='m-10 text-4xl font-bold  '>

  <h1>Groceries</h1>
</div>
<div className='flex overflow-scroll scroll-smooth   justify-start border p2  items-center  gap-3 m-5'>

<Products products={products} addcart={addcart} categori={'groceries'}/>
</div>

</div>






<div>
<img src="https://f.nooncdn.com/mpcms/EN0001/assets/c1073d7b-2c8b-49aa-a551-d065094cbeb8.png?format=avif" className="card-img-top" alt="..."/>
<div>
<h1 className='text-lg font-bold m-3'>Superior online shopping in the UAE
</h1>
<p className='text-md  m-5'>As the leading destination for online shopping in the UAE, noon has everything you need under one roof. Whether you’re shopping for the latest electronic products, fashion, homeware, products for kids and babies, books and stationery, sports and health essentials, beauty products, or groceries, we have millions of products in the noon UAE store. As a customer-centric online store, we make it easier to buy online with flexible payment plans that help you save, along with regular sales across our extensive product range, gift cards, wishlists, our exclusive Mashreq VIP card, our easy-to-use shopping app, and so much more.
</p>


<h1 className='text-lg font-bold m-3'>Hassle-free UAE online shopping
</h1>
<p className='text-md m-5'>
You’ll find a massive variety of products from top brands at noon UAE. Our electronics department has the latest mobile phones, along with tablets, mobile accessories, laptops, wearable technology such as smartwatches and other wearable devices, headphones (in-ear, wireless and noise-cancelling), audiovisual gear, a selection of cameras, televisions, video game consoles such as PC and Xbox controllers, and video games. We have products from Samsung, Xiaomi, Sony, HP, Dell, Huawei, Lenovo, Apple, and many other leading tech brands.

</p>


<h1 className='text-lg font-bold m-3'>Shop the best products & brands at noon UAE
</h1>
<p className='text-md m-5'>
When you buy online at noon, you will always have peace of mind knowing that you are getting the best level of service. We take the hassle out of online shopping in Abu Dhabi and Dubai, with a number of features and flexible payment plans that make shopping simpler, faster, and better. Our Buy Now, Pay Later plans include Tabby, with orders split over 4 payments, and Tamara, with orders split over 3 payments. Both plans are interest-free. We accept credit cards and debit cards from Emirates NBD, FAB bank, Mashreq bank, ADCB, and ADIB, and cash on delivery. For even more convenience, we have a No-Cost EMI. We have a 15-day return policy that takes even more stress out of shopping.

</p>
</div>
</div>

<Footer/>



</>

)
}

export default App