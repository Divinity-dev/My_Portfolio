import { useState } from 'react'
import Header from './component/Header'
import About from './component/About'
import Project from './component/Project'
import "./app.css"
import Navbar from './component/Navbar'
import Skills from './component/Skills'
import Contact from './component/Contact'
import Footer from './component/Footer'


function App() {

  return (
    <>
    <Navbar/>
      <Header/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
