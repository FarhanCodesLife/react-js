import React, { useEffect, useRef, useState } from 'react';
import { auth, db, getData, sendData } from '../config/firebase/firebasefunctions';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';

const Dashboard = () => {

let navigate = useNavigate()

let [userinfo,setuserinfo]= useState(null)

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(user.uid);
        
        const blogsData = await getData("blogs", user.uid);
        console.log(blogsData);
        setBlogs([...blogsData]);
        // const userin = await getData("users",user.uid)
        // setuserinfo([...userin])
        // console.log(userinfo);
        
        // async function getdata() {
          const q = query(collection(db, "users"), where("uid", "==", user.uid));
          // let querySnapshot = await getDocs(collection(db, "blogs"));

          const querySnapshot = await getDocs(q);

          querySnapshot.forEach((doc) => {
              // userinfo.push(doc.data()) 
              console.log(doc.data());
              
              setuserinfo([...userinfo])

          //   renderproducts(userinfo)


         
      })



    }
    // getdata()
    
  // }
  else{
    navigate('/login')
  }
}
  
  
  );
  }, []);

  const sendDatatoFirestore = async (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    if (!title || !description) {
      alert('Both title and description are required');
      return;
    }

    try {
      const response = await sendData({
        title: title,
        description: description,
        uid: auth.currentUser.uid,
        userinfo:userinfo
      }, 'blogs');

      blogs.push({
        title: title,
        description: description,
        uid: auth.currentUser.uid
      });
      setBlogs([...blogs]);
      console.log(response);

      // Clear form fields after submission
      titleRef.current.value = '';
      descriptionRef.current.value = '';

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Dashboard</h1>
        <form onSubmit={sendDatatoFirestore} className="bg-white shadow-md rounded-lg p-8 mb-10">
          <div className="mb-5">
            <input 
              type="text" 
              placeholder="Enter blog title" 
              ref={titleRef} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-5">
            <textarea 
              cols="25" 
              rows="5" 
              placeholder="Enter blog description" 
              ref={descriptionRef} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition duration-300"
          >
            Add Blog
          </button>
        </form>

        <h1 className="text-3xl font-semibold text-center mb-6">User Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.length > 0 ? blogs.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          )) : (
            <h2 className="text-xl font-semibold text-center col-span-full">No blogs found</h2>
          )}
        </div>
      </div>
    </>
  )
}

export default Dashboard;
