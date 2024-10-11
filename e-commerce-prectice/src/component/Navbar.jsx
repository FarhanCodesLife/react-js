import React, { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  let selector = useSelector((state) => state.cart.cartitems);

  const totalPrice = selector.reduce((total, item) => {
    return total + (item.price || 0);
  }, 0);

  return (
    <>
      {/* <div className='p-5 bg-black text-white flex flex-wrap justify-between'>
    <div className='p-5 flex text-center justify-between bg-gray-600'>
      <div>
      <img width={70} height={70} src="https://www.shutterstock.com/image-vector/luxury-concept-fh-circle-organic-260nw-2473343897.jpg" alt="LOGO" />
      </div>
      <div>
        <img src="" alt="" />
        <p>Deliverd to Pakistan </p>
      </div>
    </div>
    <div>

    </div>


</div> */}

      <div className="navbar  bg-yellow-400">
        <div className="flex-1 px-10">
          <div className="rounded-full overflow-hidden">
            <img
              width={100}
              height={100}
              src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
              alt="LOGO"
            />
          </div>
          {/* <a className="btn btn-ghost text-xl">E-Commerce</a> */}
          {/* <h1>{selector.lenght}/</h1> */}
        </div>

        <div className="flex flex-wrap   px-5">
          <div className=" flex gap-2 border-r-2 px-4">
            <img
              width={30}
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <p>Pakistan</p>
          </div>

          <div className="px-4 border-r-2">
            <p>Wishlist</p>
          </div>

          <div className=" bg--500  flex dropdown dropdown-end px-4">
            <p className="m-auto ">Cart</p>

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {selector ? selector.length : 0}
                </span>
              </div>
            </div>

            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-96 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  {selector ? selector.length : 0} Items
                </span>
                <ol>
                  {selector
                    ? selector.map((item) => {
                        return (
                          <li>
                            <a className="font-bold">
                              {item.title} <br /> Price ${item.price}
                            </a>
                            <hr />
                          </li>
                        );
                      })
                    : 0}
                </ol>
                <span className="text-info">
                  Subtotal: ${Math.round(totalPrice)}
                </span>
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end px-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
