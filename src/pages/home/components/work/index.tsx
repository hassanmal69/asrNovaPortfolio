// import { motion } from "framer-motion";
// import "./work.css";
// import astronoutImg from "../../../../assets/astranout.png";
// import pointinAstraunaut from "../../../../assets/pointing.png";
// import MoonComponent from "./animatedmoon";
// import { useState } from "react";

// const WorkComponent = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.section className="mainSectionMainWork w-full h-[130vh] overflow-hidden justify-start">
//       <div className="blackscreen w-full h-full absolute z-4 pointer-events-none"></div>
//       <div className="textContentinwork !mb-30 flex flex-col gap-3 relative z-50">
//         <h1 className="text-6xl text-center font-bold text-white">
//           Our Work
//         </h1>
//         <h3 className="text-2xl text-gray-500 font-light text-center">
//           Empowering businesses with innovative digital solutions – explore our
//           projects that blend creativity, technology, and efficiency.
//         </h3>
//       </div>

//       <div className="flex w-[80%] gap-10 relative z-10">
//         {projects.map((project, index) =>
//           project.img ? (
//             <motion.img
//               key={index}
//               src={isHovered? project.point : project.img}
//               alt="Project Image"
//               className={` ${
//                 isHovered ? "w-[27%] h-[400px]" : "w-1/3 h-[450px]"
//               }`}
//               animate={{
//                 y: [0, -25, 0],
//               }}
//               transition={{
//                 y: { duration: 3, repeat: Infinity, ease: "easeInOut" }              }}
//             />
//           ) : (
//             <motion.div
//               key={index}
//               className="cardInworkComponent p-6 rounded-2xl shadow-lg projects-wrapper flex flex-col w-full h-full"
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <h2 className="text-3xl font-semibold text-white ">
//                 {project.title}
//               </h2>
//               <p className="text-gray-400">{project.description}</p>
//               <p className="mt-2 text-sm text-gray-300">
//                 <strong>Tech Stack:</strong> {project.techStack}
//               </p>
//               <a
//                 href={project.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block text-amber-500 font-medium hover:underline"
//               >
//                 View Project →
//               </a>
//             </motion.div>
//           )
//         )}
//       </div>

//       <div className="moonComponent w-full h-[100%] flex justify-right">
//         <MoonComponent />
//       </div>
//     </motion.section>
//   );
// };

// const projects = [
//   {
//     title: "Mudaris Academy",
//     description:
//       "Mudaris Academy is a modern Learning Management System (LMS) designed to simplify online education. It offers course management, student progress tracking, live classes, and assessments. The platform ensures a seamless learning experience with an intuitive UI and real-time interactions.",
//     url: "https://www.mudarisacademy.com/",
//     techStack: "React.js, Material UI, stripe & nowPayments, and Vite.",
//   },
//   {
//     img: astronoutImg,
//     point: pointinAstraunaut
//   },
//   {
//     title: "Task Trek",
//     description:
//       "Task Trek is a project management dashboard designed to enhance team collaboration and productivity. It features task tracking, project timelines, team management, and real-time updates to streamline workflow. The platform ensures efficiency with an intuitive UI and seamless task organization.",
//     url: "https://project-task-trek.netlify.app/",
//     techStack:
//       "React.js, Firebase (Firestore & Authentication), Redux Toolkit, Material UI, and Vite.",
//   },
// ];

// export default WorkComponent;
import { motion } from "framer-motion";
import "./work.css";
import astronoutImg from "../../../../assets/astranout.png";
import pointinAstraunaut from "../../../../assets/pointing.png";
import MoonComponent from "./animatedmoon";
import { useState } from "react";
import { ButtoninBookaCall } from "../buttonForHero";

const WorkComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.section className="mainSectionMainWork w-full h-[130vh] overflow-hidden justify-start">
      <div className="blackscreen w-full h-full absolute z-4 pointer-events-none"></div>
      <div className="textContentinwork !mb-30 flex flex-col gap-3 relative z-50">
        <h1 className="text-6xl text-center font-bold text-white">
          Our Work
        </h1>
        <h3 className="text-2xl text-gray-500 font-light text-center">
          Empowering businesses with innovative digital solutions – explore our
          projects that blend creativity, technology, and efficiency.
        </h3>
      </div>

      <div className="flex w-[80%] gap-10 relative z-10">
        {projects.map((project, index) =>
          project.img ? (
            <motion.img
              key={index}
              src={hoveredIndex !== null ? project.point : project.img}
              alt="Project Image"
              className={`w-1/3 h-[450px] imageinworkContainerAstranout ${
                hoveredIndex === 0 ? "point-left w-[27%] !h-[380px]" : hoveredIndex === 2 ? "point-right w-[27%] !h-[380px]" : ""
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
              <h2 className="text-3xl w-full font-semibold text-white">
                {project.title}
              </h2>
              <p className="text-gray-400">{project.description}</p>
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

      <div className="moonComponent w-full h-[100%] flex justify-right">
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
