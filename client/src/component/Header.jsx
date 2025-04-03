import React from 'react';
import Navbar from './Navbar';
import profile2 from "/images/profile2.png";

const Header = () => {
  return (
    <div className="bg-[url('/images/sectionbg6.jpeg')] bg-cover bg-center p-6 md:py-2 md:px-20">
      <Navbar />
      <div className="flex flex-col-reverse md:h-[90vh] md:flex-row justify-between items-center mt-1 gap-6">
        <h3 className="text-lg sm:text-xl md:text-3xl text-white flex-1 text-center md:text-left leading-snug">
          Hello, I'm <br />
          <span className="text-3xl sm:text-5xl font-bold block mt-2">Divine Asiriuwa,</span>
          a full-stack web developer
        </h3>
        <div className="flex-1 flex justify-center items-center h-full">
          <img 
            src={profile2} 
            className="w-auto h-[60vh] md:h-[80%] object-contain rounded-full shadow-lg" 
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
