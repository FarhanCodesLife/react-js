import { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { getData } from '../config/firebase/firebasefunctions';

const UserBlog = () => {
  let navigate = useNavigate()
  const [blogs, setBlogs] = useState(null);
  
  const { uid } = useParams(); // Extract uid from the URL parameter

useEffect(()=>{
  const fetchBlogs = async (uid) => {
    try {
      const blogsData = await getData("blogs", uid);
      setBlogs(blogsData || []);
      console.log("Blogs Data:", blogsData);
    } catch (error) {
      console.error("Error fetching blogs data:", error);
    }
  };
  fetchBlogs(uid)

},[])

  return (
    <div className='container mx-auto p-6'>
      {/* <div className='m-5' ><button onClick={()=>navigate('allblogs')} className=' btn-primary text-black hover:scale-105'>  <kbd className="kbd btn-ghost">◀︎</kbd>All Blogs</button></div> */}
    

      <div className="grid  gap-8">
        {/* Show a loading spinner while fetching user data */}
        {blogs == null ? (
          <span className=" flex loading loading-dots loading-lg"></span>
        ) : (
          <>
            {blogs.length > 0 ? blogs.map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                <div className="flex items-center p-4">
                  <img
                    src={item.userinfo.userImage}
                    alt={`${item.userinfo.email}'s profile`}
                    className="w-14 h-14 rounded-full border-2 border-gray-300 mr-4 object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    {item.userinfo && (
                      <p className="text-gray-500 text-sm">Posted by: {item.userinfo.userData.email}</p>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 p-4 mb-4">{item.description}</p>
                <div className="flex justify-between items-center p-4 border-t">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                    Like
                  </button>
                  <span className="text-gray-500">Likes: {item.likesCount || 0}</span>
                </div>
              </div>
            )) : (
              <h2 className="text-xl font-semibold text-center col-span-full">No blogs found</h2>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UserBlog;
