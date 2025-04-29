import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal, ModalBody, ModalContent, ModalTrigger, } from "./animated-modal";
import { motion } from "motion/react";
import { useState } from 'react';
import { stringSimilarity } from "string-similarity-js";
import FaqData from '../../../../data/chatdata.json';
import chatMan from '../../../../assets/chatman.png';
import './model.css';
export function AnimatedModalDemo() {
    const [msg, setMsg] = useState("");
    const [similar, setSimilar] = useState("");
    const [ask, setAsk] = useState(false);
    const handleCheck = () => {
        let bestScore = 0;
        let bestMatch = null;
        setAsk(true);
        FaqData.faqs.forEach((f) => {
            const similarity = stringSimilarity(msg.toLowerCase(), f.question.toLowerCase());
            if (similarity > bestScore) {
                bestScore = similarity;
                bestMatch = {
                    ...f,
                };
            }
        });
        setSimilar(bestMatch);
    };
    return (_jsx("div", { className: "py-40 flex items-center justify-center", children: _jsxs(Modal, { children: [_jsx("div", { className: " bottom-8 right-30 z-500000", children: _jsx(ModalTrigger, { className: " flex justify-center group/modal-btn", children: _jsx("button", { children: "chat support" }) }) }), _jsx(ModalBody, { children: _jsx(ModalContent, { children: _jsxs("div", { className: "flex flex-row-reverse h-full w-full", children: [_jsx(motion.img, { src: chatMan, className: 'h-[270px]', animate: {
                                        rotate: [0, 10, -10, 10, -10, 0], // waving effect
                                    }, transition: {
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatDelay: 0,
                                    } }), _jsxs("div", { className: "relative h-full w-full flex justify-end gap-2 items-end", children: [_jsx("input", { className: 'border-2 border-amber-50 left-0 rounded-2xl !p-2 !pb-0', type: "text", value: msg, onChange: (e) => setMsg(e.target.value) }), _jsx("button", { onClick: handleCheck, className: "", children: "Send" }), ask ? (similar ? (_jsx("div", { className: "absolute h-full w-full flex items-center justify-center pointer-events-none", children: _jsx("div", { className: "bg-gray-800 w-full tooltip", children: _jsx("ul", { className: "w-full", children: _jsx("li", { className: "w-full h-full text-xs", children: similar.answer }) }) }) })) : (_jsx("div", { className: "absolute h-full w-full flex items-center justify-center pointer-events-none", children: _jsx("div", { className: "bg-gray-800 w-full tooltip", children: _jsx("ul", { className: "w-full", children: _jsx("li", { className: "w-full h-full text-xs", children: "Sorry, I couldn't find an answer." }) }) }) }))) : (_jsx("div", { className: "absolute h-full w-full flex items-center justify-center pointer-events-none", children: _jsx("div", { className: "bg-gray-800 w-full tooltip", children: _jsx("ul", { className: "w-full", children: _jsx("li", { className: "w-full h-full text-xs", children: "You are not a drop in the ocean. You are the entire ocean, in a drop. Ask away." }) }) }) }))] })] }) }) })] }) }));
}
