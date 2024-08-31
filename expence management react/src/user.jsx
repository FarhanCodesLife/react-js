import React, { useRef, useState } from 'react'
import Items from './Items'
// import { motion } from "framer-motion"

function User() {
    
    let username = useRef()
    let expense = useRef()
    let date = useRef()
    let [userinfo ,setuserinfo] = useState([])
    let ref = useRef() 
    function adduser(event) {
        
        event.preventDefault()
        //    console.log(username.current.value);
        //    console.log(expense.current.value);
        //    console.log(date.current.value);
        
        userinfo.push({
            name:username.current.value,
            expense:expense.current.value,
            date:date.current.value
            
        })
        setuserinfo([...userinfo])
       

username.current.value =""
expense.current.value =""
date.current.value =""
   
    
    }






  return (
    <>

     <div className='w-[30vw] h-80  flex justify-center content-center'>
        <div className='w-[75%] h-full item-center justify-center rounded-3xl overflow-hidden items-center bg-slate-900'>
            <h1 className='text-center text-2xl p-3 font-semibold bg-blue-100 '>New Expense</h1>
          <div className='py-6 px-10  justify-center h-full   '>
    <form onSubmit={adduser}>

          <input className='h-8 p-4 w-full rounded-md  ' type="text" placeholder='Enter expence' ref={username} required />
            <input className='h-8 p-4 w-full rounded-md mt-4' type="number" placeholder='Price' ref={expense} required />
            <input className='h-8 p-4 w-full rounded-md mt-4' type="date"  ref={date} required/>

    <button type='submit' className='border mb-3  rounded-full px-3 py-1 mt-5 bg-blue-400 border-black hover:border-white'>Add Expense </button>
    </form>
    <a className='text-white text-sm m-3' href="https://github.com/MUHAMMADFARHANHANIF">Craeted By Muhammad Farhan</a>
          </div >
            
        </div>
      </div>

      <div className=' relative w-[70vw] h-full' >
        <h1 className='z-[0] text-[10vw] select-none tracking-tighter absolute top-1/2 left-1/2   text-zinc-500/25 -translate-x-[50%]  -translate-y-[50%]  '>Your All Expenses</h1>

        <div className='-z-[2] flex  justify-start content-start     flex-wrap  w-full h-full border-black rounded-lg border-2 overflow-hidden' ref={ref} >
        
     {userinfo !="" ? <Items user={userinfo} reference={ref}/>:console.log('erro')   }
   








    </div>





        

      </div>
    </>
  )
}

export default User