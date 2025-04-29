import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './style.css';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame, } from 'framer-motion';
import { wrap } from '@motionone/utils';
function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 30,
        stiffness: 50,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        }
        else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });
    // Fade away effect when the text reaches 90% of the container width
    const opacity = useTransform(baseX, [-90, -50, 0], [1, 0.5, 1]);
    return (_jsx("div", { className: "parallax", children: _jsx(motion.div, { className: "scroller", style: {
                x,
            }, children: [...Array(12)].map((_, index) => (_jsx(motion.span, { style: { opacity }, className: "azonix text-2xl sm:text-4xl font-extrabold text-[#00A3FF]", children: children }, index))) }) }));
}
// bg-gradient-to-r from-[#00F5A0] to-[#00A3FF] bg-clip-text text-transparent
export default function ParallaxEffect() {
    return (_jsxs("section", { children: [_jsx(ParallaxText, { baseVelocity: -5, children: "ASR NOVA" }), _jsx(ParallaxText, { baseVelocity: 5, children: "YOUR STORY MAKERS" })] }));
}
