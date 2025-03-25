import { motion } from "framer-motion";
import "./work.css"
const WorkComponent = () => {
  return (
    <motion.section className=" w-full h-full justify-start">
      <div className="textContentinwork flex flex-col gap-3">
        {/* <motion.h1
          className="text-6xl inter text-start text-amber-500"
          animate={{
            x: [0, 900, 900, 0, 0],
            y: [0, 0, 300, 300, 0],
            rotate: [0, -360, -360, 0, 0],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            //   repeat: Infinity,
            //   repeatType: 'reverse',
            delay: 2,
          }}
        > */}
        <h1 className="text-6xl text-center font-bold text-white
         ">
        Our Work
        </h1>

        {/* </motion.h1> */}
        <h3 className="text-2xl text-gray-500 font-light text-center">
        Empowering businesses with innovative digital solutions – explore our projects that blend creativity, technology, and efficiency.
        </h3>
        </div>
        <div className="grid md:grid-cols-1 gap-10 ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg projects-wrapper"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-3xl font-semibold text-white ">
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
                className="inline-block  text-amber-500 font-medium hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
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
    techStack: "React.js, Material UI, stripe & nowPayemnts and Vite.",
  },
  {
    title: "Task Trek",
    description: "Task Trek is a project management dashboard designed to enhance team collaboration and productivity. It features task tracking, project timelines, team management, and real-time updates to streamline workflow. The platform ensures efficiency with an intuitive UI and seamless task organization.",
    url: "https://project-task-trek.netlify.app/",
    techStack: "React.js, Firebase (Firestore & Authentication), Redux Toolkit, Material UI, and Vite."
  }
];
export default WorkComponent;
