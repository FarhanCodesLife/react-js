import React, {  useState } from 'react'
import Card from './component/Card'

const App = () => {
   let [age , setage] = useState(0)
 
  return (
    <>
    <h1>Age {age}</h1>
    <button onClick={()=>{setage(age+1)}}>New age</button>

    {age <= 10  ?<h1>bache ho abhi</h1>: age <= 18 ?<h1>extra fee charge hogi Rs1000</h1> :age >18 ?<Card />:<h1>age to batwo</h1>}
    
    </>
    

  )
}

export default App