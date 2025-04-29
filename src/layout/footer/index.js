import { jsx as _jsx } from "react/jsx-runtime";
import { TextHoverEffect } from "@components/text-hover-effect";
import './footer.css';
const Footer = () => {
    return (_jsx("div", { className: "footerMaincomponent h-[40rem] flex items-center justify-center border-t-2 border-gray-600 ]", children: _jsx(TextHoverEffect, { text: "AsrNova" }) }));
};
export default Footer;
