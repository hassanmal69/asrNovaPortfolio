import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@lib/utils";
import { useEffect, useState } from "react";
import Timeline from "./component/timeline";
export const ParallaxScrollSecond = ({ payload, className, containerRefrence, }) => {
    const { scrollYProgress } = useScroll({
        container: containerRefrence,
        offset: ["start start", "end start"],
    });
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // check on mount
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // For mobile scroll timeline line
    const lineScale = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);
    const translateYFirst = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -200]);
    const translateXFirst = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -200]);
    const rotateXFirst = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -20]);
    const translateYThird = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -200]);
    const translateXThird = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 200]);
    const rotateXThird = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 20]);
    const third = Math.ceil(payload.length / 5);
    const firstPart = payload.slice(0, third + 2);
    const secondPart = payload.slice(third, 3 * third);
    const thirdPart = payload.slice(2 * third);
    return (_jsx("div", { className: cn("relative items-start w-full", className), children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10", children: [_jsx("div", { className: "grid gap-10 w-full justify-end", children: _jsx("ol", { className: "relative border-s  border-gray-200 ol-special dark:border-gray-700 md:border-s-0", children: firstPart.map((el, idx) => (_jsx(_Fragment, { children: isMobile ? (_jsx(_Fragment, { children: _jsx(Timeline, { img: el.img, title: el.title, description: el.description, translateY: translateYFirst, translateX: translateXFirst, rotateZ: rotateXFirst }) })) : (_jsxs(motion.div, { className: "services-cards", style: {
                                    y: translateYFirst,
                                    x: translateXFirst,
                                    rotateZ: rotateXFirst,
                                }, children: [_jsx("img", { src: el.img, className: "rounded-lg ", alt: "thumbnail" }), _jsxs("div", { className: "flex flex-col  items-center justify-center", children: [_jsx("h1", { className: "ethnocentric text-center sm:text-xl font-semibold bg-gradient-to-r from-[#00F5A0] to-[#00A3FF] bg-clip-text text-transparent leading-tight", children: el.title }), _jsx("p", { className: "text-center sm:text-[14px] text-[#eee]", children: el.description })] })] }, "grid-1" + idx)) }))) }) }), _jsx("div", { className: "grid gap-10 w-full justify-end", children: _jsx("ol", { className: "relative border-s border-gray-200 ol-special dark:border-gray-700 md:border-s-0", children: secondPart.map((el, idx) => (_jsx(_Fragment, { children: isMobile ? (_jsx(_Fragment, { children: _jsx(Timeline, { img: el.img, title: el.title, description: el.description, translateY: translateYFirst, translateX: translateXFirst, rotateZ: rotateXFirst }) })) : (_jsxs(motion.div, { className: "services-cards", children: [_jsx("img", { src: el.img, className: "rounded-lg ", alt: "thumbnail" }), _jsxs("div", { className: "flex flex-col  items-center justify-center", children: [_jsx("h1", { className: "ethnocentric text-center sm:text-xl font-semibold bg-gradient-to-r from-[#00F5A0] to-[#00A3FF] bg-clip-text text-transparent leading-tight", children: el.title }), _jsx("p", { className: "text-center sm:text-[14px] text-[#eee]", children: el.description })] })] }, "grid-2" + idx)) }))) }) }), _jsx("div", { className: "grid gap-10 w-full justify-end", children: _jsx("ol", { className: "relative border-s border-gray-200 ol-special dark:border-gray-700 md:border-s-0", children: thirdPart.map((el, idx) => (_jsx(_Fragment, { children: isMobile ? (_jsx(_Fragment, { children: _jsx(Timeline, { img: el.img, title: el.title, description: el.description, translateY: translateYFirst, translateX: translateXFirst, rotateZ: rotateXFirst }) })) : (_jsxs(motion.div, { className: "services-cards", style: {
                                    y: translateYThird,
                                    x: translateXThird,
                                    rotateZ: rotateXThird,
                                }, children: [_jsx("img", { src: el.img, className: "rounded-lg ", alt: "thumbnail" }), _jsxs("div", { className: "flex flex-col  items-center justify-center", children: [_jsx("h1", { className: "ethnocentric text-center sm:text-xl font-semibold bg-gradient-to-r from-[#00F5A0] to-[#00A3FF] bg-clip-text text-transparent leading-tight", children: el.title }), _jsx("p", { className: "text-center  sm:text-[14px] text-[#eee]", children: el.description })] })] }, "grid-3" + idx)) }))) }) })] }) }));
};
