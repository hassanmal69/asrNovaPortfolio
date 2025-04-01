import { motion } from 'framer-motion';
import './styles.css';
import SwingingRobot from './swingingRobot';
import ParallaxEffect from './textMoving';
import { ButtoninBookaCall } from '../buttonForHero';
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
              className="ethnocentric text-4xl font-bold bg-gradient-to-r from-[#00F5A0] to-[#00A3FF] bg-clip-text text-transparent leading-tight "
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            >
              Websites Fade, <br /> Stories Last Forever
            </motion.h1>
            <motion.p
              className="orbitron text-xl text-[#000000] leading-relaxed w-[80%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Your business is more than just a service – it’s a story waiting
              to be told. At{' '}
              <span className="font-semibold text-[#00A3FF]">Asrnova</span>, we
              create digital experiences that make your brand impossible to
              ignore.
            </motion.p>
            <ButtoninBookaCall text="Get in touch"/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <SwingingRobot />
          </motion.div>
        </div>
      </div>
      <div className="movingText w-[100%]">
        <ParallaxEffect />
      </div>
    </section>
  );
};

export default Hero;