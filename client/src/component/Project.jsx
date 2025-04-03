import React, { useState } from "react";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { projects } from "./ProjectDetails";

const Project = () => {
  const [startIndex, setStartIndex] = useState(0); // Track the first visible project index
  const projectsPerPage = 3; // Adjust based on your design

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

  return (
    <div className="bg-indigo-950 px-6 py-10 md:px-20">
      {/* Header Section */}
      <div className="flex justify-between items-center text-white mb-6">
        <h3 className="text-lg md:text-xl font-semibold">Projects</h3>
        <div className="border-[1px] px-4 flex">
          <button onClick={handlePrev}>
            <ArrowBack />
          </button>
          <button onClick={handleNext} className="border-l-[1px] border-white">
            <ArrowForward />
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-white">
        {projects
          .slice(startIndex, startIndex + projectsPerPage)
          .map((project) => (
            <div
              key={project.index}
              className="flex flex-col items-center w-full sm:w-80 bg-sky-950 rounded-lg shadow-lg"
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
                  <button className="px-4 py-2 text-sm text-white bg-yellow-700 rounded-md">
                    See Code
                  </button>
                  <button className="px-4 py-2 text-sm text-white bg-yellow-700 rounded-md">
                    See Live
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Project;
