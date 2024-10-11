import React from "react";

const CategoriesBar = () => {
  return (
    <>
      <div className=" flex flex-wrap justify-start bg-gray-500 text-white text-wrap">
        <div className="p-3 px-10 text-xl border-black border ">
          CategoresBar
        </div>

        <div className=" flex flex-wrap px-3 overflow-hidden justify-start gap-7 text-lg items-center">
          <p>Fragrens</p>
          <p>Beauty</p>
          <p>furniture</p>
          <p>Fruits</p>
          <p>Cold</p>
          <p>groceries</p>
        </div>

        <div>

            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/e774506d-194f-49df-8ef6-039a820391a5.png?format=avif" alt="" />
        </div>
      </div>
    </>
  );
};

export default CategoriesBar;
