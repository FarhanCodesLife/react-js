import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { getAllData, auth } from '../config/firebase/firebasefunctions';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null); 
  useEffect(() => {
    const fetchBlogs = async () => {
    
        
            const blogsData = await getAllData("blogs");
            console.log("Fetched Blogs Data:", blogsData);
            setBlogs(blogsData);
        // alert('welcome to my bloging app ')
        
     
      
    };

    fetchBlogs();
  }, []);

  let [like,setlike]= useState(0)

  return (
    <>
     <h1 className="text-3xl font-semibold text-center mb-8">User Blogs</h1>
<div className="grid grid-cols-1 sm:grid-cols-2   gap-8">
  {blogs.length > 0 ? blogs.map((item, index) => (
    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden  transition-transform transform hover:scale-105 duration-300">
      <div className="flex items-center p-4">
        <img
          src={item.userinfo.userImage}
          alt={`${item.userinfo.email}'s profile`}
          className="w-14 h-14 rounded-full border-2 border-gray-300 mr-4 object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{item.title}</h2>
          
            {/* <p className="text-gray-500 text-sm">Posted by: {item.userinfo.userData.firstname}</p> */}
          
        </div>
      </div>
      <p className="text-gray-600 p-4 mb-4">{item.description}</p>
      <div key={item} className="flex justify-between items-center p-4 border-t">
        <button onClick={()=>setlike(1 + like)} className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
          Like
        </button>
          <span className="text-gray-500">Likes: {item.likesCount || like}</span>
      </div>
    </div>
  )) : (
    <h2 className="text-xl font-semibold text-center col-span-full">No blogs found</h2>
  )}
</div>

    </>
  );
}

export default AllBlogs;
