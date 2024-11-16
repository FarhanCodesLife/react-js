import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [user,setusers] = useState(null)

  useEffect(()=>{
    async function facthdata() {
      
      try {
       let response = await axios('http://localhost:3000/users')
          console.log(response.data);
          setusers(response.data)
      } catch (error) {
        console.log(error);}
    }
    facthdata()
  },[])


async function deleteuser(id) {
  console.log(id);
    
     await axios.delete(`http://localhost:3000/user/${id}`)
   let response = await axios('http://localhost:3000/users')
    setusers(response.data)


}


async function edituser(id) {
  console.log(id);
    
     await axios.put(`http://localhost:3000/user/${id}`)
   let response = await axios('http://localhost:3000/users')
    setusers(response.data)


}






  return (
    <>
    <div>todo</div>
    {user && user.length >= 0 ?
        
        (user.map((item,index)=>(

          
          <div key={index}>

          <h1>username:{item.data.username}</h1>
          <h1>id:{item.data.id}</h1>
          <button onClick={()=>{deleteuser(item.data.id)}}>delet</button>
          <button onClick={()=>{edituser(item.data.id)}}>edit</button>
          </div>
          
        ))):(<h1>loading..</h1>)
    
    }

      

    </>
  )
}

export default App