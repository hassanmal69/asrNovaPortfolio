import './style.css';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
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
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  // Fade away effect when the text reaches 90% of the container width
  const opacity = useTransform(baseX, [-90, -50, 0], [1, 0.5, 1]);

  return (
    <div className="parallax">
      <motion.div
        className="scroller"
        style={{
          x,
        }}
      >
        {[...Array(12)].map((_, index) => (
          <motion.span
            key={index}
            style={{ opacity }} // Apply fading effect
            className="azonix text-2xl sm:text-4xl font-extrabold text-[#00A3FF]"
          >
            {children}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
// bg-gradient-to-r from-[#00F5A0] to-[#00A3FF] bg-clip-text text-transparent
export default function ParallaxEffect() {
  return (
    <section>
      <ParallaxText baseVelocity={-5}>ASR NOVA</ParallaxText>
      <ParallaxText baseVelocity={5}>YOUR STORY MAKERS</ParallaxText>
    </section>
  );
}
