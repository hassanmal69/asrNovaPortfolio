import { motion } from 'framer-motion';
import './button.css'
export const ButtoninBookaCall = ({text, onClick}: any) => {
    return (
        <motion.div className="buttonDivinHero flex justify-[left] mx-0 my-0">
            <motion.button onClick={onClick} className="buttoninHero inter">
                {text}
            </motion.button>
        </motion.div>
    )
}
