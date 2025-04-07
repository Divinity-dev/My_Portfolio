import React from 'react'
import logo from "/images/logo.svg"
import {Menu, Close} from "@mui/icons-material"
import { useState } from 'react'



const Navbar = () => {

const [toggle, setToggle] = useState(false)
  return (
    <div className=' bg-[url("/images/sectionbg6.jpeg")] bg-cover sticky top-0  z-10'>
      {/* Desktop menu */}
     <nav className='flex justify-between items-center p-4 md:py-2 md:px-10 text-white '>
        <img src={logo} alt="" className=' w-32 md:w-52 filter invert'/>
      <ul className='md:flex justify-between items-center gap-4 cursor-pointer hidden'>
      <li><a href="#header">Header</a></li>
      <li><a href="#about">About</a></li>
        <li className='px-4 py-2 border-2 border-btyellow'><a href="#projects">projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>
      {
        toggle? <div className='flex md:hidden w-5'><Close onClick={()=>{setToggle(prev=>!prev)}}  /></div> : <div className='flex md:hidden w-5'><Menu onClick={()=>{setToggle(prev=>!prev)}}  /></div> 
      }
      
      
      </nav>
      {/* moble menu */}
      {toggle &&(
        <ul className='flex w-1/2 flex-col justify-center absolute right-0 top-10 bg-black  gap-6 md:hidden p-6 text-white'>
          <li onClick={()=>{setToggle(prev=>!prev)}}><a href="#header">Header</a></li>
        <li onClick={()=>{setToggle(prev=>!prev)}}><a href="#about">About</a></li>
          <li className='px-4 py-2 border-2 border-btyellow' onClick={()=>{setToggle(prev=>!prev)}}><a href="#projects">projects</a></li>
          <li onClick={()=>{setToggle(prev=>!prev)}}><a href="#skills">Skills</a></li>
          <li onClick={()=>{setToggle(prev=>!prev)}}><a href="#contact">Contact me</a></li>
        </ul> 
      )}
      
    </div>
  )
}

export default Navbar
