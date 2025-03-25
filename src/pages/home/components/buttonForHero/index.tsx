import { motion } from 'framer-motion';
import './button.css'
export const ButtoninBookaCall = ({text}) => {
    return (
        <motion.div className="buttonDivinHero flex justify-[left] mx-0 my-0">
            <motion.button className="buttoninHero inter">
                {text}
            </motion.button>
        </motion.div>
    )
}
