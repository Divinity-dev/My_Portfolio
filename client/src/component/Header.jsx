import React from 'react';
import Navbar from './Navbar';
import profile2 from "/images/profile2.png";
import {motion} from "framer-motion"

const Header = () => {
  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="bg-[url('/images/sectionbg6.jpeg')] bg-cover bg-center p-6 md:py-2 md:px-20" id='header'>
      
      <div className="flex flex-col-reverse md:h-[90vh] md:flex-row justify-between items-center mt-1 gap-6">
        <motion.h3 
        initial="hiddenLeft"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.8 }}
        variants={cardVariants}
        viewport={{ once: false, amount: 0.3 }}
        className="text-lg sm:text-xl md:text-3xl text-white flex-1 text-center md:text-left leading-snug">
          Hello, I'm <br />
          <span className="text-3xl sm:text-5xl font-bold block mt-2">Divine Asiriuwa,</span>
          a full-stack web developer
        </motion.h3>
        <motion.div 
        initial="hiddenRight"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.8 }}
        variants={cardVariants}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1 flex justify-center items-center h-full">
          <img 
            src={profile2} 
            className="w-auto h-[60vh] md:h-[80%] object-contain rounded-full shadow-lg" 
            alt="Profile"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
