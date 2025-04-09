import { useState } from 'react'
import Header from './component/Header'
import About from './component/About'
import Project from './component/Project'
import "./App.css"
import Navbar from './component/Navbar'
import Skills from './component/Skills'
import Contact from './component/Contact'
import Footer from './component/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
