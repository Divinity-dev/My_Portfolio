import { useState } from 'react'
import Header from './component/Header'
import About from './component/About'
import Project from './component/Project'
import "./app.css"
import Navbar from './component/Navbar'
import Skills from './component/Skills'
import Contact from './component/Contact'


function App() {

  return (
    <>
    <Navbar/>
      <Header/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default App
