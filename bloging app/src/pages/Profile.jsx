import React, { useEffect, } from 'react';
import { auth, getData } from '../config/firebase/firebasefunctions';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  let navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(user.uid);
        console.log(user.email);
        
        
        
        getData("users",user.uid)
      }
      else{
        navigate('/login')
      }
    });
  }, []);




  return (

<>

</>
  )
}

export default Profile