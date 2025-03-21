import { motion } from 'framer-motion';
const WorkComponent = () => {
  return (
    <motion.section className=' w-full h-full justify-start'>
     <div className="textContentinwork  w-full justify-[left]">
      <motion.h1
        className="text-6xl inter text-start text-amber-500"
        animate={{
          x: [0, 900, 900,0, 0],
          y: [0, 0, 300, 300, 0],
          rotate:[0,-360,-360,0,0]
        }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
        //   repeat: Infinity,
        //   repeatType: 'reverse',
          delay: 2,
        }}
      >
        Our Work
      </motion.h1>
      </div>
    </motion.section>
  );
};

export default WorkComponent;
