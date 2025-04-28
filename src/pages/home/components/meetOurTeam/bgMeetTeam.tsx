import { motion } from 'framer-motion';
import saturn from '../../../../assets/saturn.jpg';
import './ourteam.css'
const BgMeetTeam = () => {
    return (
        <motion.div className="absolute w-full h-full">
            <div className="BackGroundMeetourteam h-full z-10 flex justify-end items-end w-full relative">
                <motion.img
                    src={saturn}
                    className='w-[600px] absolute -left-40 top-100 mix-blend-difference'
                    initial={{ scale: 1, filter: "blur(0px)" }}
                    animate={{ scale: 1.3, filter: "blur(8px)" }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />
                <div className="h-full w-full flex justify-center items-center relative">
                    <div className="absolute flex justify-center items-center w-full h-full">
                        <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] BluecircleinBG absolute rounded-full"></div>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default BgMeetTeam;
