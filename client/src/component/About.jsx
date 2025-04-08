import React from 'react';
import { LinkedIn, Facebook, GitHub } from "@mui/icons-material";
import profile from "/images/profile.png";
import medium from "/images/medium.png"
import {motion} from "framer-motion"

const About = () => {
  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="bg-[url('/images/sectionbg4.jpeg')] bg-cover bg-center p-6 md:p-12" id='about'>
      <div className="flex flex-col gap-6 bg-indigo-950 rounded-lg shadow-lg p-6 md:p-10">
        
        {/* Social Icons */}
        <motion.ul 
        initial="hiddenLeft"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.8 }}
        variants={cardVariants}
        viewport={{ once: false, amount: 0.3 }}
        className="flex justify-center md:justify-between items-center py-4 px-6 gap-6 md:px-20 text-white bg-sky-950 rounded-md">
          <li className="bg-btyellow p-2 w-[100px] flex justify-center items-center hover:bg-red-600 transition">
           <a href="https://www.linkedin.com/in/divinity20/" 
            target="_blank" >
            <LinkedIn />
            </a>
          </li>
          <li className="p-2 rounded-md hover:bg-gray-700 transition">
            <a href="https://github.com/Divinity-dev" target="_blank">
            <GitHub />
            </a>
          </li>
          <li className="p-2 rounded-md hover:bg-blue-600 transition">
            <a href="https://web.facebook.com/divine.asiriuwa" target="_blank">
            <Facebook />
            </a>
          </li>
          <li className="p-2 rounded-md hover:bg-red-600 transition">
            <a href="https://medium.com/@divine_asiriuwa" target="_blank">
            <img src={medium} alt="" className='w-7' />
            </a>
          </li>
        </motion.ul>

        {/* About Section */}
        <motion.h3 
         initial="hiddenRight"
         whileInView="visible"
         transition={{ duration: 0.6, delay: 0.8 }}
         variants={cardVariants}
         viewport={{ once: false, amount: 0.3 }}
        className="text-center text-2xl font-semibold text-white after">About me</motion.h3>
        
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Image */}
          <motion.div 
            initial="hiddenLeft"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.8 }}
            variants={cardVariants}
            viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center flex-1">
            <img 
              src={profile} 
              alt="Profile" 
              className="w-40 md:w-80 h-64 md:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial="hiddenRight"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.8 }}
            variants={cardVariants}
            viewport={{ once: false, amount: 0.3 }}
          className="p-6 text-white flex flex-col items-center flex-1">
            <h2 className="text-3xl text-center font-bold mb-4">Why hire me?</h2>
            <p className="italic text-justify leading-relaxed">
              I am a Full-stack Developer skilled in a variety of programming languages and frameworks. 
              I spend most of my time writing clean and efficient code to solve real-world problems. 
              I work both remotely and onsite, either independently or as part of a team.
              <br /><br />
              I am currently employed as a Full-stack Web Developer at 
              <span className="font-semibold"> International Franchise for Business Consulting (IFBC)</span>, 
              based in the United States of America. I have earned recognition for building software solutions for businesses at IFBC.
              <br /><br />
              Click the button below to get my Resume.<br/>
              <button className='px-6 p-2 text-black bg-btyellow mt-3 cursor-pointer'>
                <a href="/images/Divine_Asiriuwa_Resume.pdf" download="Divine_Asiriuwa_Resume">Resume</a>
                </button>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
