import React, { useRef } from 'react'
import { motion } from "framer-motion"
function App() {
  let hero = useRef()
  return (
    <>
    <div className=' flex flex-wra justify-center items-center w-full h-screen bg-slate-500'>
      <div className='w-[30vw] h-80  flex justify-center content-center'>
        <div className='w-[75%] h-full item-center justify-center rounded-lg items-center bg-slate-400'>
            <h1 className='text-center text-2xl p-3 font-semibold bg-blue-100 rounded-md'>New Expense</h1>
          <div className='py-6 px-10  justify-center h-full   '>

          <input className='h-8 p-4 w-full rounded-md  ' type="text" placeholder='Enter name'  />
            <input className='h-8 p-4 w-full rounded-md mt-4' type="text" placeholder='Your expanece ' />
            <input className='h-8 p-4 w-full rounded-md mt-4' type="date"  />
{/* <div className='lr-0'> */}

    <button className='border  rounded-full px-3 py-1 mt-5 bg-blue-500'>Add Expense </button>
{/* </div> */}
          </div >
            
        </div>
      </div>
      <div className=' relative w-[70vw] h-full'>
        <h1 className='z-[0] text-[10vw] select-none tracking-tighter absolute top-1/2 left-1/2   text-blue-600/25 -translate-x-[50%]  -translate-y-[50%]  '>Your All Expenses</h1>
        <div className='-z-[2] hero w-full h-full bg-slate-300 overflow-hidden' ref={hero}>

        <motion.div drag dragConstraints={hero} whileDrag={{scale:1.1}} dragElastic={0.1} dragTransition={{bounceDamping: 30,bounceStiffness:10}} className=' p-5 w-52   bg-red-300 '>
        <div className='text-center text-2xl capitalize border border-black'>

<h1>farhan</h1>
<h1>school fees</h1>

<h1>26/8/2024</h1>
</div>
        
        </motion.div>

        <motion.div drag dragConstraints={hero} whileDrag={{scale:1.1}} dragElastic={0.1} dragTransition={{bounceDamping: 10,bounceStiffness:30}} className=' p-5 w-52 mt-2  bg-blue-300 '>
        <div className='text-center text-2xl capitalize border border-black'>

<h1>farhan</h1>
<h1>school fees</h1>

<h1>26/8/2024</h1>
</div>
        
        </motion.div>


        <motion.div drag dragConstraints={hero} whileDrag={{scale:1.1}} dragElastic={0.3} dragTransition={{bounceDamping: 10,bounceStiffness:30}} className=' p-5 w-52  bg-green-300 '>
        <div className='text-center text-2xl capitalize border border-black'>

<h1>farhan</h1>
<h1>school fees</h1>

<h1>26/8/2024</h1>
</div>
        
        </motion.div>

        </div>
      </div>
    </div>
    </>
    
  )
}

export default App