import React from 'react'

const Products = ({ products, addcart ,categori }) => {
  return (
    <>
      {products && products.length > 0 ? (
        products
          .filter((item) => item.category === categori)
          .map((item) => {
            return (
              <div key={item.id} className="w-96 overflow-hidd items-center border-2 bg-base-100   shadow-xl">
                <figure>
                  <img width={800} src={item.thumbnail} alt={item.title} />
                </figure>
                <div className="card-body w-80">
                  <h2 className="card-title">
                    {item.title.slice(0, 8) + "..."}
                    <div className="badge badge-secondary">
                      <p>{item.rating}</p>
                    </div>
                  </h2>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                      <p>{item.brand}</p>
                    </div>
                    <div className="badge badge-outline">
                      {item.availabilityStatus}
                    </div>
                  </div>
                  <div className=" text-lg font-bold">
                    <h1>${item.price}</h1>
                  </div>
                  <div className="text-center mt-3 btn btn-outline btn-warning text-lg">
                    <button onClick={() => addcart(item)}>Add to cart</button>
                  </div>
                </div>
              </div>
            );
          })
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
};

export default Products;
