import React, { useState } from 'react'

function App() {

let [num ,setnum ] = useState(0)

  return (
<>


<div className='flex  w-full h-screen justify-center items-center'  >
<div className="card bg-neutral border rounded-2xl bg-zinc-300 text-neutral-content items-center h-80 w-96">
  <div className="card-body content-center text-center   w-full h-full">
  <div className='mb-3 text-3xl'>
    <h1>click counter</h1>
    </div>
  <div className=" font-bold">
      <button className=" w-20 h-20 hover:bg-red-600  bg-red-500 py-1 border text-sm border-black rounded-t-full" onClick={()=>{num>0?setnum(num - 1):setnum(0)}}>Sub -</button>
    </div>
    <div>

    <h2 className="text-6xl font-bold p-5 ">{num}</h2>
        </div>
    <div className=" font-bold ">
      <button className=" w-20 h-20 hover:bg-green-600 py-1 border bg-green-500  text-sm border-black rounded-b-full" onClick={()=>{setnum(num + 1)}}>Add +</button>
    </div>
  </div>
</div>
</div>
</>
  )
}

export default App