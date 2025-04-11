"use client";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../../../../lib/utils";
import { useEffect, useState } from "react";
import MonkeyPoint from '../../../../assets/monkeyshowing.png'
import CatPoint from '../../../../assets/catand mobile.png'
export const ParallaxScrollSecond = ({
    images,
    className,
    containerRefrence
}: {
    images: string[];
    className?: string;
    containerRefrence: React.RefObject<HTMLElement>;
}) => {
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
    const MonkeyMoving = useTransform(scrollYProgress, [0, 1], [-350, 4000])
    const catMoving = useTransform(scrollYProgress, [0, 1], [-350, 4000])
    const catDisplay = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
    const MonkeyDisplay = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0])
    const translateYFirst = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -200]);
    const translateXFirst = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -200]);
    const rotateXFirst = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -20]);

    const translateYThird = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -200]);
    const translateXThird = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 200]);
    const rotateXThird = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 20]);

    const third = Math.ceil(images.length / 4);
    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
        <div className={cn("relative items-start w-full", className)}>
            {/* Mobile Scroll Timeline Line */}
            {isMobile && (
                <div className="fixed overflow-hidden w-full h-full z-100">
                    <motion.div
                        style={{ height: lineScale }}
                        className="fixed left-4 top-0 w-[5px] bg-[#5271ff] origin-top z-10"
                    />
                    <motion.img
                        // initial={{ rotate: 0 }}  // Keep the image in its original direction
                        // animate={{
                        //     rotate: [0, 10, 0],  // A small rotation to simulate the point
                        //     y: [0, -6, 0],       // Add some body motion as the arm moves forward
                        //     scale: [1, 1.1, 1],   // Slight scale to simulate the action
                        // }}
                        // transition={{
                        //     repeat: Infinity,        // Repeat the animation indefinitely
                        //     duration: 1.5,            // Smooth motion duration
                        //     ease: "easeInOut",        // Smooth easing for the animation
                        // }}
                        style={{
                            y: MonkeyMoving,
                            opacity: MonkeyDisplay
                        }}
                        className="absolute overflow-hidden z-20 w-[200px] h-[200px]"
                        src={MonkeyPoint}
                        alt="Monkey Point"
                    />
                    <motion.img src={CatPoint} alt="cattpoining"
                        className="absolute overflow-hidden z-20 w-[200px] h-[200px]"
                        // initial={{ rotate: 0 }}  // Keep the image in its original direction
                        // animate={{
                        //     rotate: [0, 10, 0],  // A small rotation to simulate the point
                        //     y: [0, -6, 0],       // Add some body motion as the arm moves forward
                        //     scale: [1, 1.1, 1],   // Slight scale to simulate the action
                        // }}
                        // transition={{
                        //     repeat: Infinity,        // Repeat the animation indefinitely
                        //     duration: 1.5,            // Smooth motion duration
                        //     ease: "easeInOut",        // Smooth easing for the animation
                        // }}
                        style={{
                            y: catMoving,
                            opacity: catDisplay
                        }}
                    />
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
                {/* First Column */}
                <div className="grid gap-10 w-full justify-end">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            className="relative"
                            style={{
                                y: translateYFirst,
                                x: translateXFirst,
                                rotateZ: rotateXFirst,
                            }}
                            key={"grid-1" + idx}
                        >
                            <img
                                src={el.img}
                                className="h-50 sm:h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                            <div className="absolute !px-[10px] sm:!p-0 bottom-2 flex flex-col gap-2 items-center justify-center">
                                <h1 className="text-l sm:text-xl font-semibold mt-2">{el.title}</h1>
                                <p className="text-xs text-center sm:text-sm text-gray-500">{el.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Second Column */}
                <div className="grid gap-10 w-full justify-end">
                    {secondPart.map((el, idx) => (
                        <motion.div className="relative" key={"grid-2" + idx}>
                            <img
                                src={el.img}
                                className="h-50 sm:h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="100%"
                                width="100%"
                                alt="thumbnail"
                            />
                            <div className="absolute !px-[10px] sm:!p-0 bottom-2 flex flex-col gap-2 items-center justify-center">
                                <h1 className="text-l sm:text-xl font-semibold mt-2">{el.title}</h1>
                                <p className="text-xs text-center sm:text-sm text-gray-500">{el.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Third Column */}
                <div className="grid gap-10 w-full justify-end">
                    {thirdPart.map((el, idx) => (
                        <motion.div
                            className="relative"
                            style={{
                                y: translateYThird,
                                x: translateXThird,
                                rotateZ: rotateXThird,
                            }}
                            key={"grid-3" + idx}
                        >
                            <img
                                src={el.img}
                                className="h-50 sm:h-80 w-full object-cover object-left-top rounded-2xl gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                            <div className="absolute !px-[10px] sm:!p-0 bottom-2 flex flex-col gap-2 items-center justify-center">
                                <h1 className="text-l text-center sm:text-xl font-semibold mt-2">{el.title}</h1>
                                <p className="text-xs text-center sm:text-sm text-gray-500">{el.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
