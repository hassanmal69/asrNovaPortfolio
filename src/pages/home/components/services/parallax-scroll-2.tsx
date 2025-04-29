import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@lib/utils";
import { useEffect, useState } from "react";
import { ThemeMode } from "@tsparticles/engine";
import Timeline from "./component/timeline";
export const ParallaxScrollSecond = ({
  payload,
  className,
  containerRefrence,
}: {
  payload?: string | any;
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
  const translateYFirst = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [0, -200]
  );
  const translateXFirst = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [0, -200]
  );
  const rotateXFirst = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [0, -20]
  );

  const translateYThird = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [0, -200]
  );
  const translateXThird = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [0, 200]
  );
  const rotateXThird = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [0, 20]
  );

  const third = Math.ceil(payload.length / 5);
  const firstPart = payload.slice(0, third + 2);
  const secondPart = payload.slice(third, 3 * third);
  const thirdPart = payload.slice(2 * third);

  return (
    <div className={cn("relative items-start w-full", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        {/* First Column */}
        <div className="grid gap-10 w-full justify-end">
          <ol className="relative border-s  border-gray-200 ol-special dark:border-gray-700 md:border-s-0">
            {firstPart.map((el: string | any, idx: number) => (
              <>
                {isMobile ? (
                  <>
                    <Timeline
                      img={el.img}
                      title={el.title}
                      description={el.description}
                      translateY={translateYFirst}
                      translateX={translateXFirst}
                      rotateZ={rotateXFirst}
                    />
                  </>
                ) : (
                  <motion.div
                    className="services-cards"
                    style={{
                      y: translateYFirst,
                      x: translateXFirst,
                      rotateZ: rotateXFirst,
                    }}
                    key={"grid-1" + idx}
                  >
                    <img src={el.img} className="rounded-lg " alt="thumbnail" />
                    <div className="flex flex-col  items-center justify-center">
                      <h1 className="ethnocentric text-center sm:text-xl font-semibold bg-gradient-to-r from-[#00F5A0] to-[#00A3FF] bg-clip-text text-transparent leading-tight">
                        {el.title}
                      </h1>
                      <p className="text-center sm:text-[14px] text-[#eee]">
                        {el.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </>
            ))}
          </ol>
        </div>

        {/* Second Column */}
        <div className="grid gap-10 w-full justify-end">
          <ol className="relative border-s border-gray-200 ol-special dark:border-gray-700 md:border-s-0">
            {secondPart.map((el: string | any, idx: number) => (
              <>
                {isMobile ? (
                  <>
                    <Timeline
                      img={el.img}
                      title={el.title}
                      description={el.description}
                      translateY={translateYFirst}
                      translateX={translateXFirst}
                      rotateZ={rotateXFirst}
                    />
                  </>
                ) : (
                  <motion.div className="services-cards" key={"grid-2" + idx}>
                    <img src={el.img} className="rounded-lg " alt="thumbnail" />
                    <div className="flex flex-col  items-center justify-center">
                      <h1 className="ethnocentric text-center sm:text-xl font-semibold bg-gradient-to-r from-[#00F5A0] to-[#00A3FF] bg-clip-text text-transparent leading-tight">
                        {el.title}
                      </h1>
                      <p className="text-center sm:text-[14px] text-[#eee]">
                        {el.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </>
            ))}
          </ol>
        </div>

        {/* Third Column */}
        <div className="grid gap-10 w-full justify-end">
          <ol className="relative border-s border-gray-200 ol-special dark:border-gray-700 md:border-s-0">
            {thirdPart.map((el: string | any, idx: number) => (
              <>
                {isMobile ? (
                  <>
                    <Timeline
                      img={el.img}
                      title={el.title}
                      description={el.description}
                      translateY={translateYFirst}
                      translateX={translateXFirst}
                      rotateZ={rotateXFirst}
                    />
                  </>
                ) : (
                  <motion.div
                    className="services-cards"
                    style={{
                      y: translateYThird,
                      x: translateXThird,
                      rotateZ: rotateXThird,
                    }}
                    key={"grid-3" + idx}
                  >
                    <img src={el.img} className="rounded-lg " alt="thumbnail" />
                    <div className="flex flex-col  items-center justify-center">
                      <h1 className="ethnocentric text-center sm:text-xl font-semibold bg-gradient-to-r from-[#00F5A0] to-[#00A3FF] bg-clip-text text-transparent leading-tight">
                        {el.title}
                      </h1>
                      <p className="text-center  sm:text-[14px] text-[#eee]">
                        {el.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
