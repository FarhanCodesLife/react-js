import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo,  } from "./config/reduxconfig/reducer/todoSlice";

const Todo = () => {

const dispatch = useDispatch()
  const todoval = useRef()

  let addtodoinredux = (event)=>{
event.preventDefault()
console.log(todoval.current.value);
dispatch(addtodo({
  title:todoval.current.value
}))


  }

  const selector = useSelector(state => state.todos.todo);
  ;


  
  return (
    <>
      <div>Todo</div>

      <div>
        <div className="w-full text-center h-full justify-center  flex">
          <div>
            <div className=" mt-5 text-4xl">Todo App</div>
            <div className="bg-blue-400 p-7 m-10 rounded-2xl  content-center">
              <div>
                <form>
                  <input
                    type="text"
                    className="border rounded-lg p-2 h-10 "
                    placeholder="enter todo"
                    required
                    ref={todoval}
                  />
                  <button
                    type="submit"
                    onClick={addtodoinredux}
                    className="px-5  py-2 border hover:scale-110 bg-black text-cyan-50 hover:bg-slate-500 rounded-full ml-5 mt-5 text-sm"
                  >
                    Add Todo
                  </button>
                </form>
              </div>
            </div>
            {/* <div className=' h-20 w-80 bg-slate-500 justify-center items-center mt-10  flex'> */}

            <ol>
              
              {selector?  selector.map((items)=>{console.log(items)

                return <div key={items.id} className='p-3 rounded-lg border border-zinc-500  bg-gray-300 justify-center items-center m-3  ' > 
                  <li className='text-2xl font-semibold capitalize'>
                    {items.title}
                  </li>
                  
                  <button className='border mr-3 mt-4 hover:scale-110 hover:border-white hover:bg-red-700 hover:text-white rounded-full border-black text-sm bg-red-500 px-3 py-1' onClick={} >Delet</button>
                  <button className='border mr-3 mt-4 hover:scale-110 hover:border-white hover:bg-green-700 hover:text-white rounded-full border-black text-sm bg-green-500 px-3 py-1' >Edit</button>
                </div> 
                
              }):<h1>not found</h1>}
             
            </ol>
          </div>
        </div>
        <div className="items-center w-full text-center">
          <button className="btn  btn-primary">LogOut</button>
        </div>
      </div>
    </>
  );
};

export default Todo;
