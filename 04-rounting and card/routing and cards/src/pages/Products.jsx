import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Products = () => {
  let [allproducts, setallproducts] = useState(null);



  useEffect(() => {
     axios("https://fakestoreapi.com/products")
      .then((res) => {
          setallproducts(res.data);
          
    })
    .catch((err) => {
        console.log(err);
    });
      
  }, [])

  const navigete = useNavigate()

  function addproduct(element) {
    console.log("clicked " + element.id);
    navigete(`SingleProduct/${element.id}`)

    
    
  }
        // axios("https://fakestoreapi.com/products")
        //   .then((res) => {
        //       setallproducts(res.data);
              
        // })
        // .catch((err) => {
        //     console.log(err);
        // });

        

  return (
    <>
      {allproducts
        ? allproducts.map((element, index) => {
            return <div key={index} className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {element.title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{element.price}</div>
                  <div className="badge badge-outline">Products</div>
                </div>
                <button className="btn btn-ghost" onClick={()=>addproduct(element)}>show more</button>
              </div>
            </div>;
          })
        : <h1>Loading</h1>
        }
    </>
  );
};

export default Products;
