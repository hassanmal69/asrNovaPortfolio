import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Cover } from "@components/ui/cover";
import { forwardRef } from "react";
import "./BookaCall.css";
import FormBookacall from "./form";
const BookaCall = forwardRef((_, ref) => {
    return (_jsxs("section", { id: "contact", ref: ref, className: " w-full flex flex-col !p-0 !g-0 justify-center items-center TextContent gap-3.5", children: [_jsxs("h1", { className: "text-4xl md:text-4xl leading-normal ethnocentric right lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-[#00A3FF] dark:via-[#00F5A0] dark:to-white", children: ["Book a call", _jsx(Cover, { children: "Asr Nova" })] }), _jsx("p", { className: "w-full max-w-3xl text-lg text-gray-300 mx-auto text-center px-4", children: "We create high-converting websites that help your business grow and make more money. Book a free consultation call and let\u2019s chat about your goals!" }), _jsx(FormBookacall, {})] }));
});
export default BookaCall;
