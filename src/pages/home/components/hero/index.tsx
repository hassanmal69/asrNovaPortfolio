import { motion } from 'framer-motion';
import './styles.css';
import ParallaxEffect from './textMoving';
import { ButtoninBookaCall } from '@components/buttonForHero';
import { GlobeDemo } from './globe';
import uaaa from '../../../../assets/nayi image.png'
const Hero = ({ handleScrollToBook }: any) => {
  return (
    <section className="flex flex-col overflow-hidden w-full m-auto gap-40 !pb-10">
      <div className="contentInHeroPage flex flex-col gap-10 w-full h-full justify-center items-center ">
        <div className="flex flex-col-reverse sm:flex-row sm:w-[70%] justify-between items-center">
          <motion.div

            className="textContent flex flex-col gap-6 sm:w-[70%] items-center sm:items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h1
              className="ethnocentric text-center sm:text-left text-2xl sm:text-4xl max-sm:text-[18px] font-bold bg-gradient-to-r from-[#00F5A0] to-[#00A3FF] bg-clip-text text-transparent leading-tight "
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            >
              Websites Fade, <br /> Stories Last Forever
            </motion.h1>
            <motion.p
              className="orbitron text-xl text-white leading-relaxed w-[80%] max-sm:text-[14px] max-sm:text-center sm:w-full "
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
            <ButtoninBookaCall text="Get in touch" onClick={handleScrollToBook} />
          </motion.div>
          <GlobeDemo />
        </div>
      </div>
      <img src={uaaa} className='absolute w-[30%] h-[80%] right-0 -z-10 drop-shadow-[2px_4px_6px_black] opacity-50' />
      <div className="movingText w-[100%]">
        <ParallaxEffect />
      </div>
    </section>
  );
};

export default Hero;