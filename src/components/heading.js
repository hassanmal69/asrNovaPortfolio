import { jsx as _jsx } from "react/jsx-runtime";
export const Heading = ({ title }) => {
    return (_jsx("h1", { className: "ethnocentric text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#00F5A0] to-[#00A3FF] bg-clip-text text-transparent leading-tight text-center px-4", children: title }));
};
