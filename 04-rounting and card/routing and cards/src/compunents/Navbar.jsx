import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    
    <button> <Link to='' >Home</Link></button>
    <button> <Link to='about' >About</Link></button>
    <button> <Link to='servises' >Servises</Link></button>
    <button> <Link to='products' >Products</Link></button>
    
    </>
  )
}

export default Navbar