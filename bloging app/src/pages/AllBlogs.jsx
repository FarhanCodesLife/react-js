import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { getAllData,auth } from '../config/firebase/firebasefunctions';

const AllBlogs = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(user.uid);
       
      }
      else{
        
      }
      const blogsData = await getAllData("blogs");
      console.log(blogsData);
      setBlogs([...blogsData]);

    });
  }, []);



  return (


<> <h1 className="text-3xl font-semibold text-center mb-6">User Blogs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.length > 0 ? blogs.map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">{item.placeholder  }</h2>
                <p className="text-gray-600">{item.textarea}</p>
              </div>
            )) : (
              <h2 className="text-xl font-semibold text-center col-span-full">No blogs found</h2>
            )}
          </div>

</>  
  
  )
}

export default AllBlogs