import React, { useRef, useState } from 'react';
import { signUpUser } from '../config/firebase/firebasefunctions'; // Assuming this function is correctly set up for Firebase authentication
import { useNavigate } from 'react-router-dom';

const Register = () => {

let navigate = useNavigate()
  
  let [user, setUser] = useState(null);
  let firstnameval = useRef(null);
  let emailval = useRef(null);
  let passwordval = useRef(null);

  function getUser(event) {
    event.preventDefault();
    const userData = {
      firstname: firstnameval.current.value,
      email: emailval.current.value,
      password: passwordval.current.value,
    };
    setUser(userData);
    console.log(userData); 
    signUpUser(userData); 
    
    navigate("/login")
    // This should handle Firebase user registration
  }

  return (
    <>
      <div className='bg-gray-200 h-screen overflow-hidden'>
        <div className='bg-white'>
          <h1 className='px-14 py-5 text-5xl mb-10 font-bold'>Register</h1>
        </div>

        <div className='w-full h-screen flex justify-center mt-20'>
          <div className='w-[20rem] m-auto'>
            <form onSubmit={getUser}>
              <label className="input input-bordered flex items-center gap-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" ref={firstnameval} required placeholder="Firstname" />
              </label>

              <label className="input input-bordered flex items-center gap-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="email" className="grow" ref={emailval} required placeholder="Email" />
              </label>

              <label className="input input-bordered flex items-center gap-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path fillRule="evenodd" d="M14 6a4 4 0 1 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" />
                </svg>
                <input type="password" className="grow" ref={passwordval} required placeholder="Password" />
              </label>

              <div className='text-center'>
                <button className='btn mt-4 bg-[#7749F8] border-none text-lg px-6 rounded-2xl' type='submit'>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
