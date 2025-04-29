import { motion } from "framer-motion";
import "./work.css";
import astronoutImg from "@assets/astranout.png";
import pointinAstraunaut from "@assets/pointing.png";
import MoonComponent from "./animatedmoon";
import { useState, useRef, useEffect } from "react";
import spaceShip from '@assets/spaceship-.png'
import { Heading } from "@components/heading";
const WorkComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isCursorVisible, setCursorVisible] = useState(false);
  const [isMobile, setisMobile] = useState(window.innerWidth < 670)
  useEffect(() => {
    const handleResize = () => setisMobile(window.innerWidth < 670)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])


  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const handleMouseMove = (e:any) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  };
  return (
    <motion.section
    id="work"
      onMouseMove={handleMouseMove}
      ref={containerRef}
      onMouseEnter={() => setCursorVisible(true)}
      onMouseLeave={() => setCursorVisible(false)}
      className="mainSectionMainWork w-full sm:h-[130vh] overflow-hidden justify-start cursor-none">
      {isCursorVisible && <div className="customCursor" ref={cursorRef}> <img src={spaceShip} className="w-full h-full" /></div>}
      <div className="blackscreen w-full h-full absolute z-4 pointer-events-none"></div>
      <div className="textContentinwork !mb-30 flex flex-col gap-3 relative z-50">
      <Heading title="
          Our Work
      " />
        <p className="text-base sm:text-2xl text-gray-500 font-light text-center px-4">
          Empowering businesses with innovative digital solutions – explore our
          projects that blend creativity, technology, and efficiency.
        </p>

      </div>

      <div className="flex flex-col sm:flex-row w-[80%] gap-10 relative z-10">
        {projects.map((project, index: any) =>
          project.img ? (
            <motion.img
              key={index}
              src={isMobile ? project.img : hoveredIndex !== null ? project.point : project.img}
              alt="Project Image"
              className={`sm:w-1/3 h-[450px] imageinworkContainerAstranout ${isMobile ? project.img : hoveredIndex === 0 ? "point-left w-[27%] !h-[380px]" : hoveredIndex === 2 ? "point-right w-[27%] !h-[380px]" : ""
                }`}
              animate={{
                y: [0, -25, 0],
                opacity: [0.5, 1],
              }}
              transition={{
                opacity: { duration: 0.3 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          ) : (
            <motion.div
              key={index}
              className="cardInworkComponent rounded-2xl shadow-lg projects-wrapper flex flex-col items-start gap-1.5 w-full h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl w-full font-semibold text-white">
                {project.title}
              </h2>
              <p className="text-gray-400 sm:text-l">{project.description}</p>
              <p className="mt-2 text-sm text-gray-300">
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-200 w-full font-medium hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          )
        )}
      </div>

      <div className="moonComponent absolute top-1/2 sm:top-auto justify-center w-full h-[20%] sm:h-full flex sm:justify-right">
        <MoonComponent />
      </div>
    </motion.section>
  );
};

const projects = [
  {
    title: "Mudaris Academy",
    description:
      "Mudaris Academy is a modern Learning Management System (LMS) designed to simplify online education. It offers course management, student progress tracking, live classes, and assessments. The platform ensures a seamless learning experience with an intuitive UI and real-time interactions.",
    url: "https://www.mudarisacademy.com/",
    techStack: "React.js, Material UI, stripe & nowPayments, and Vite.",
  },
  {
    img: astronoutImg,
    point: pointinAstraunaut,
  },
  {
    title: "Task Trek",
    description:
      "Task Trek is a project management dashboard designed to enhance team collaboration and productivity. It features task tracking, project timelines, team management, and real-time updates to streamline workflow. The platform ensures efficiency with an intuitive UI and seamless task organization.",
    url: "https://project-task-trek.netlify.app/",
    techStack:
      "React.js, Firebase (Firestore & Authentication), Redux Toolkit, Material UI, and Vite.",
  },
];

export default WorkComponent;
