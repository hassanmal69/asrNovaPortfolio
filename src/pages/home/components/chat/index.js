import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { stringSimilarity } from "string-similarity-js";
import FaqData from '../../../../data/chatdata.json';
import chatMan from '../../../../assets/chatman.png';
const ChatSystem = () => {
    const [msg, setMsg] = useState("");
    const [similar, setSimilar] = useState(null);
    const [show, setShow] = useState(false);
    const handleCheck = () => {
        let bestScore = 0;
        let bestMatch = null;
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
    const toggleState = () => {
        setShow(prev => !prev);
    };
    return (_jsx("section", { className: 'absolute w-full flex justify-end', children: _jsxs("div", { className: 'absolute z-50 flex flex-col w-full justify-center h-full items-end', children: [_jsx("button", { onClick: toggleState, children: "Chat Support" }), show && (_jsxs("div", { className: "", children: [_jsx("img", { src: chatMan, className: 'h-[250px]' }), _jsx("input", { className: 'border-2 border-amber-50 left-0', type: "text", value: msg, onChange: (e) => setMsg(e.target.value), placeholder: 'uaaaa' }), _jsx("button", { onClick: handleCheck, children: "ask" }), similar && (_jsx("div", { children: _jsx("ul", { children: _jsxs("li", { children: [" ", similar.answer] }) }) }))] }))] }) }));
};
export default ChatSystem;
