import React from 'react'
import {motion} from "framer-motion"

const Skills = () => {
  const skills = [
    { Skill: "CSS", Link:"https://rockets-ujh2.onrender.com/" },
    { Skill: "Javscript", Link:"https://divinity-dev.github.io/Restaurant-app/dist/" },
    { Skill: "React/Redux", Link:"https://bookhubs.onrender.com/" },
    { Skill: "Nodejs", Link:"https://life-hospital-app-live.onrender.com/" },
    { Skill: "MongoDB", Link:"https://life-hospital-app-live.onrender.com/" },
    { Skill: "Ruby on Rails", Link:"https://budget-app-4qqw.onrender.com/" },
    { Skill: "PostgreSQL", Link:"https://budget-app-4qqw.onrender.com/" },
    { Skill: "TailwindCSS", Link:"https://d323yztowltw28.cloudfront.net/" },
    { Skill: "Express", Link:"https://trucking-app-1.onrender.com" },
  ];

  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div 
    initial="hiddenLeft"
    whileInView="visible"
    transition={{ duration: 0.6, delay: 0.8 }}
    variants={cardVariants}
    viewport={{ once: false, amount: 0.3 }}
    className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-black p-6' id='skills'>
      {skills.map((item, index) => (
        <div key={index} className='text-white bg-gray-800 p-4 rounded shadow-md'>
          <h2 className='font-bold text-center text-2xl'><a target='Blank' href={item.Link}> {item.Skill}</a></h2>
          <span className='underline block text-center mt-2 cursor-pointer'>
            View Project
          </span>
        </div>
      ))}
    </motion.div>
  );
}

export default Skills;
