import React from 'react'
import logo from "/images/logo.svg"
import menu from "/images/menu.png"
import { useState } from 'react'
import close from "/images/download.png"

const Navbar = () => {

const [toggle, setToggle] = useState(false)
  return (
    <div className='bg-transparent sticky top-0 z-10'>
      {/* Desktop menu */}
     <nav className='flex justify-between items-center p-4 md:py-8 md:px-28 text-white '>
        <img src={logo} alt="" className=' w-32 md:w-52 filter invert'/>
      <ul className='md:flex justify-between items-center gap-4 cursor-pointer hidden'>
      <li>About</li>
        <li className='px-4 py-2 border-2 border-white'>projects</li>
        <li>testimonials</li>
        <li>Contact me</li>
      </ul>
      {
        toggle? <img onClick={()=>{setToggle(prev=>!prev)}}  src={close} alt="" className='flex md:hidden w-5' /> : <img onClick={()=>{setToggle(prev=>!prev)}} src={menu} alt="" className='flex md:hidden w-5' />
      }
      
      
      </nav>
      {/* moble menu */}
      {toggle &&(
        <ul className='flex w-1/2 flex-col justify-center absolute right-0 top-10 bg-black  gap-6 md:hidden p-6 text-white'>
        <li>About</li>
          <li className='px-4 py-2 border-2 border-white'>projects</li>
          <li>testimonials</li>
          <li>Contact me</li>
        </ul> 
      )}
      
    </div>
  )
}

export default Navbar
