import React, { useState } from "react";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { projects } from "./ProjectDetails";
import {motion} from "framer-motion"
import CountUp from 'react-countup'

const Project = () => {
  const [startIndex, setStartIndex] = useState(0); 
  const [bg, setBg] = useState(false)
  const projectsPerPage = 3; 

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + projectsPerPage >= projects.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 1 < 0 ? projects.length - projectsPerPage : prevIndex - 1
    );
  };

  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-indigo-950 px-6 py-10 md:px-20"id="projects">
      {/* Header Section */}
      <motion.div 
       initial="hiddenLeft"
       whileInView="visible"
       transition={{ duration: 0.6, delay: 0.8 }}
       variants={cardVariants}
       viewport={{ once: false, amount: 0.3 }}
      className="flex justify-between items-center text-white mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-white">Projects(<CountUp end={30} duration={4} enableScrollSpy scrollSpyDelay={30} className="text-red-500"/>+)</h3>
        <div className="border-[1px] flex">
          <button onClick={handlePrev}>
            <ArrowBack onClick={()=>{setBg(false)}} className={bg? "bg-transparent":"bg-btyellow"}/>
          </button>
          <button onClick={handleNext} className="border-l-[1px] border-white">
            <ArrowForward onClick={()=>{setBg(true)}} className={bg? "bg-btyellow":"bg-transparent"}/>
          </button>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
       initial="hiddenRight"
       whileInView="visible"
       transition={{ duration: 0.6, delay: 0.8 }}
       variants={cardVariants}
       viewport={{ once: false, amount: 0.3 }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-white">
        {projects
          .slice(startIndex, startIndex + projectsPerPage)
          .map((project) => (
           <div className="anim">
            <div
              key={project.index}
              className="flex flex-col items-center w-full sm:w-80 bg-sky-950 rounded-lg shadow-lg "
            >
              <img
                src={project.image}
                alt={project.image}
                className="w-full h-48 object-contain rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-center">
                  {project.Title}
                </h3>
                <p className="italic font-thin text-sm my-2 text-center">
                  {project.Desc}
                </p>
                <div className="flex justify-center gap-3">
                  <button className="px-4 py-2 text-sm text-black  bg-btyellow rounded-md">
                    <a target="Blank" href={project.Link2}>See Code</a>
                    
                  </button>
                  <button className="px-4 py-2 text-sm text-black bg-btyellow rounded-md">
                  <a target="Blank" href={project.Link1}>See Live</a>
                  </button>
                </div>
              </div>
            </div>
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default Project;
