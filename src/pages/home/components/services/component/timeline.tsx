import { motion, MotionValue } from "framer-motion";
interface TimelineProps {
  img: string;
  title: string;
  description: string;
  translateY?: number | MotionValue<number>;
  translateX?: number | MotionValue<number>;
  rotateZ?: number | MotionValue<number>;
}

const Timeline = ({
  img,
  title,
  description,
  translateY,
  translateX,
  rotateZ,
}: TimelineProps) => {
  return (
    <>
      <div className="absolute w-3.5 h-3.5 bg-[#00A3FF] rounded-full -start-2 border border-white dark:border-gray-900 margin dark:bg-[#00A3FF]"></div>
      <li className="mb-10 ms-4 aaa ">
        <motion.div
          className="services-cards"
          {...(translateX !== undefined && { x: translateX })}
          {...(translateY !== undefined && { y: translateY })}
          {...(rotateZ !== undefined && { rotateZ })}
        >
          <img src={img} className="rounded-lg" alt="thumbnail" />
          <div className="flex flex-col items-center justify-center">
            <h1 className="ethnocentric text-center sm:text-xl font-semibold bg-gradient-to-r from-[#00F5A0] to-[#00A3FF] bg-clip-text text-transparent leading-tight">
              {title}
            </h1>
            <p className="text-center sm:text-[14px] text-[#eee]">
              {description}
            </p>
          </div>
        </motion.div>
      </li>
    </>
  );
};

export default Timeline;
