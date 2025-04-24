"use client";
import { useScroll, useTransform } from "framer-motion";
import { cn } from "@lib/utils";
import { useEffect, useState, useMemo } from "react";
import Cards from "./cards";

export const ParallaxScroll = ({
  payload,
  className,
  containerRef
}: {
  payload: { title: string; description: string }[];
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
console.log("i am payload : ",payload)
  // Split images into 3 parts
  // const [firstPart, secondPart, thirdPart] = useMemo(() => {
  //   const third = Math.ceil(payload.length / 3);
  //   return [
  //     payload.slice(0, third).map((img, i) => ({ img, title: `Title ${i + 1}`, description: `Description ${i + 1}` })),
  //     payload.slice(third, third * 2).map((img, i) => ({ img, title: `Title ${i + third + 1}`, description: `Description ${i + third + 1}` })),
  //     payload.slice(third * 2).map((img, i) => ({ img, title: `Title ${i + third * 2 + 1}`, description: `Description ${i + third * 2 + 1}` }))
  //   ];
  // }, [payload]);

  // Motion transforms
  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <div className={cn("relative items-start w-full", className)}>
      <Cards
        // firstPart={firstPart}
        // secondPart={secondPart}
        // thirdPart={thirdPart}
        isMobile={isMobile}
        translateYFirst={translateYFirst}
        translateXFirst={translateXFirst}
        rotateXFirst={rotateXFirst}
        translateYThird={translateYThird}
        translateXThird={translateXThird}
        rotateXThird={rotateXThird}
      />
    </div>
  );
};
