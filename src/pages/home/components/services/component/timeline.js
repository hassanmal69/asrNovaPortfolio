import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
const Timeline = ({ img, title, description, translateY, translateX, rotateZ, }) => {
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "absolute w-3.5 h-3.5 bg-[#00A3FF] rounded-full -start-2 border border-white dark:border-gray-900 margin dark:bg-[#00A3FF]" }), _jsx("li", { className: "mb-10 ms-4 aaa ", children: _jsxs(motion.div, { className: "services-cards", ...(translateX !== undefined && { x: translateX }), ...(translateY !== undefined && { y: translateY }), ...(rotateZ !== undefined && { rotateZ }), children: [_jsx("img", { src: img, className: "rounded-lg", alt: "thumbnail" }), _jsxs("div", { className: "flex flex-col items-center justify-center", children: [_jsx("h1", { className: "ethnocentric text-center sm:text-xl font-semibold bg-gradient-to-r from-[#00F5A0] to-[#00A3FF] bg-clip-text text-transparent leading-tight", children: title }), _jsx("p", { className: "text-center sm:text-[14px] text-[#eee]", children: description })] })] }) })] }));
};
export default Timeline;
