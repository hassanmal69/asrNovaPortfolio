import { motion } from 'framer-motion';
import './styles.css';
import SwingingRobot from './swingingRobot';
import ParallaxEffect from './textMoving';
const Hero = () => {
  return (
    <section className="heroPageMainSection h-dvh flex flex-col overflow-hidden w-full m-auto gap-10 !pb-10">
      <div className="contentInHeroPage flex flex-col gap-10 w-full h-full justify-center items-center ">
        <div className="dumy flex w-[70%] justify-between items-center">
          {/* Text Content */}
          <motion.div
            className="textContent flex flex-col gap-6 w-[70%] items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-6xl font-bold bg-gradient-to-r from-[#5454D4] to-[#8C8CFF] bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            >
              Websites Fade, <br /> Stories Last Forever
            </motion.h1>
            <motion.p
              className="text-lg text-[#000000] leading-relaxed w-[50%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Your business is more than just a service – it’s a story waiting
              to be told. At{' '}
              <span className="font-semibold text-white">Asrnova</span>, we
              create digital experiences that make your brand impossible to
              ignore.
            </motion.p>
            <div className="buttonDivinHero flex justify-[left] mx-0 my-0">
              <motion.button className="buttoninHero inter">
                Get in Touch
              </motion.button>
            </div>
          </motion.div>

          {/* Swinging Robot Animation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <SwingingRobot />
          </motion.div>
        </div>
      </div>
      <div className="movingText w-[80%]">
        <ParallaxEffect />
      </div>
    </section>
  );
};

export default Hero;

// let hero = {
//   title: 'Website Fade, Stories Last Forever',
//   subtitle:
//     'Your business is more than just a service—it’s a story waiting to be told. At Asrnova, we create digital experiences that make your software impossible to ignore.',
//   cta: 'Get Started',
// };
//greencolo #071215 white #D7DBD9 green+white #84ABA6 