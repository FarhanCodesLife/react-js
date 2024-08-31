import React from 'react'

function Data() {
  return (
    // <div>data</div>
    <>
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
    </>

  )
}

export default Data

