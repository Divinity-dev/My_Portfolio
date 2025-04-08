import React from 'react';
import { LinkedIn, Facebook, GitHub, Email, X } from "@mui/icons-material";
import medium from "/images/medium.png";
import { Link } from '@mui/material';

const Footer = () => {
  const socials = [
    { icon: LinkedIn, link: "https://www.linkedin.com/in/divinity20/" },
    { icon: GitHub, link: "https://github.com/Divinity-dev" },
    { icon: Facebook, link: "https://web.facebook.com/divine.asiriuwa" },
    { icon: Email, link: "divine_asiriuwa@yahoo.com" },
    { icon: "image", src: medium, link: "https://medium.com/@divine_asiriuwa" },
    { icon: X, link: "https://x.com/AsiriuwaDi56218" },
  ];

  return (
    <div className=' bg-black'>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white p-4 border-b-[1px] border-gray-700">
      {socials.map((item, index) => (
        <div key={index} className="flex items-center justify-start gap-3">
          {item.icon === "image" ? (
            <img src={item.src} alt="medium" className="w-6 h-6" />
          ) : (
            <item.icon />
          )}
          <Link 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            color="inherit" 
            underline="hover"
          >
            {item.link}
          </Link>
        </div>
      ))}
    </div>
    <div>
        <h3 className='text-center text-white'>copywrite  @2025 Divine Asiriuwa</h3>
    </div>
    </div>
  );
};

export default Footer;
