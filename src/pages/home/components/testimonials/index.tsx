import { motion } from "framer-motion";
import Dr from '@assets/testimonial.svg'
const Testimonials = () => {
  return (
    <div className='w-full relative h-[100vh] sm:h-[140vh] !overflow-hidden' id='testimonials'>
      <h1 className='text-4xl sm:text-6xl !mb-20 text-center'>Our Testimonials</h1>
      <motion.div
        animate={{
          y: [0, -15, 0]
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
        className="flex relative w-full h-full right-0 sm:right-16">

        <motion.div initial={{
        }} className=" absolute left-10 sm:left-1/2 z-10 card1 h-[350px] sm:h-[500px] w-[350px] sm:w-[550px] border-2 bg-black border-zinc-800 rounded-4xl flex flex-col items-center">
          <img src={Dr} className='h-10/11 absolute' />
          <div className="h-[90%]">
            <div className="flex flex-col h-full justify-end items-start">
              <h2 className='text-2xl font-light'>Enayatullah Mudaris</h2>
              <p className='text-sm'>CEO of Mudaris Academy</p>
            </div>

          </div>
        </motion.div>
        <div className="w-full flex pointer-events-none justify-center items-center h-full blur-[160px]">
          <div className="w-[30%] h-[450px] rounded-full bg-purple-700 absolute">
          </div>
        </div>
        <motion.div
          initial={{ zIndex: 0 }}
          whileHover={{ zIndex: 40, scale: 1.1 }}
          className=" absolute bg-black !p-10 sm:!p-14 text-center top-1/4 sm:top-1/3 left-0 sm:left-1/3  card1 h-[300px] sm:h-[500px] w-[350px] sm:w-[550px] border-2 border-zinc-800 rounded-4xl flex flex-col items-center">
          <h2 className='text-sm sm:text-2xl font-light'>Working with AsrNova has been an outstanding experience. Moiz and Hassan truly understand how to bring ideas to life with innovation and precision. Their professionalism, communication, and dedication to delivering high-quality work exceeded our expectations. We couldn't be happier with the results and look forward to working with them again!</h2>
        </motion.div>
      </motion.div>
    </div >
  )
}

export default Testimonials
