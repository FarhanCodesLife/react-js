import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<>
<div className="navbar bg-base-1 bg-[#7749F8]">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Bloging App</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal  text-lg font-bold">
      <li><Link to='login'>login</Link></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><Link to='dashboard'>Dashboard</Link> </li>
            <li><Link to='profile'>profile</Link> </li>
            <li><Link to=''>allblogs</Link> </li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>

</>


)
}

export default Navbar