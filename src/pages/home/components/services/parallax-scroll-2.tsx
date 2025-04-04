"use client";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../../../../lib/utils";

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

    const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);

    const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20]);

    const third = Math.ceil(images.length / 4);

    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
        <div
            className={cn("items-start w-full", className)}
        >
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
            >
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div className="relative"
                            style={{
                                y: translateYFirst,
                                x: translateXFirst,
                                rotateZ: rotateXFirst,
                            }} // Apply the translateY motion value here
                            key={"grid-1" + idx}
                        >
                            <img
                                src={el.img}
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                            <div className="absolute bottom-2 flex flex-col items-center justify-center">
                                <h1 className="text-xl font-semibold mt-2">{el.title}</h1>
                                <p className="text-sm text-gray-500">{el.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div className="relative" key={"grid-2" + idx}>
                            <img
                                src={el.img}
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="100%"
                                width="100%"
                                alt="thumbnail"
                            />
                            <div className="absolute bottom-2 flex flex-col items-center justify-center">
                                <h1 className="text-xl font-semibold mt-2">{el.title}</h1>
                                <p className="text-sm text-gray-500">{el.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div className="relative"
                            style={{
                                y: translateYThird,
                                x: translateXThird,
                                rotateZ: rotateXThird,
                            }}
                            key={"grid-3" + idx}
                        >
                            <img
                                src={el.img}
                                className="h-80 w-full object-cover object-left-top rounded-2xl gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
            
                                alt="thumbnail"
                            />
                            <div className="absolute bottom-2 flex flex-col items-center justify-center">
                                <h1 className="text-xl font-semibold mt-2">{el.title}</h1>
                                <p className="text-sm text-gray-500">{el.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
