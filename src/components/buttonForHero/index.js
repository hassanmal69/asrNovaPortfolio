import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import './button.css';
export const ButtoninBookaCall = ({ text, onClick }) => {
    return (_jsx(motion.div, { className: "buttonDivinHero flex justify-[left] mx-0 my-0", children: _jsx(motion.button, { onClick: onClick, className: "buttoninHero inter", children: text }) }));
};
