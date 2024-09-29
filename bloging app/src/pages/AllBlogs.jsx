import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { getAllData, auth } from '../config/firebase/firebasefunctions';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null); 
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            console.log("User UID:", user.uid);
            const blogsData = await getAllData("blogs");
            console.log("Fetched Blogs Data:", blogsData);
            setBlogs(blogsData);
          } else {
            console.log("User is not authenticated.");
          }
        })
      } catch (err) {
        console.error("Error fetching blogs data:", err);
        setError("Failed to fetch blogs. Please try again later.");
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-semibold text-center mb-6">User Blogs</h1>
      {error && <p className="text-red-500 text-center">{error}</p>} 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length > 0 ? (
          blogs.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-600">{item.userinfo.userData.email}</p>
              <p className="text-gray-600">{item.userinfo.userData.firstname}</p>
            </div>
          ))
        ) : (
          <h2 className="text-xl font-semibold text-center col-span-full">No blogs found</h2>
        )}
      </div>
    </>
  );
}

export default AllBlogs;
