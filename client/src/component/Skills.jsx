import React from 'react'

const Skills = () => {
  const skills = [
    { Skill: "CSS" },
    { Skill: "Javscript" },
    { Skill: "React/Redux" },
    { Skill: "Nodejs" },
    { Skill: "MongoDB" },
    { Skill: "Ruby on Rails" },
    { Skill: "PostgreSQL" },
    { Skill: "TailwindCSS" },
    { Skill: "Express" },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-black p-6'>
      {skills.map((item, index) => (
        <div key={index} className='text-white bg-gray-800 p-4 rounded shadow-md'>
          <h2 className='font-bold text-center text-2xl'>{item.Skill}</h2>
          <span className='underline block text-center mt-2 cursor-pointer'>
            View Project
          </span>
        </div>
      ))}
    </div>
  );
}

export default Skills;
