import { motion } from "framer-motion";
import { Timeline, TimelineItem, TimelineMarker, TimelineContent } from "@components/timeline";

const Cards = ({
  firstPart,
  secondPart,
  thirdPart,
  isMobile,
  translateYFirst,
  translateXFirst,
  rotateXFirst,
  translateYThird,
  translateXThird,
  rotateXThird
}: any) => {
  const allItems = [...firstPart, ...secondPart, ...thirdPart];

  if (isMobile) {
    console.table(allItems)
    return (
      <Timeline>
        {allItems.map((el: any, idx: number) => (
          <TimelineItem key={"timeline-" + idx}>
            <TimelineMarker />
            <TimelineContent>
              <img
                src={el.img}
                alt="thumbnail"
                className="w-full h-60 object-cover rounded-lg"
              />
              <h1 className="text-lg font-semibold mt-2">{el.title}</h1>
              <p className="text-sm text-gray-500">{el.description}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    );
  }

  // Desktop: Original parallax layout
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
      {/* First Column */}
      <div className="grid gap-10 w-full justify-end">
        {firstPart.map((el: any, idx: number) => (
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
        {secondPart.map((el: any, idx: number) => (
          <motion.div className="relative" key={"grid-2" + idx}>
            <img
              src={el.img}
              className="h-50 sm:h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
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
        {thirdPart.map((el: any, idx: number) => (
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
  );
};

export default Cards;
