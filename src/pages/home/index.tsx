import { useRef, lazy, Suspense } from "react";
import Hero from "./components/hero";
import BookaCall from "./components/bookaCall";
import Footer from "@layout/footer";
import { Navbar } from "@layout/navbar";
import '../../global.css';

const Services = lazy(() => import("./components/services"));
const Testimonials = lazy(() => import("./components/testimonials"));
const WorkComponent = lazy(() => import("./components/work"));
const GlowingEffectDemo = lazy(() => import("./components/whyChoose/gloweffect.tsx"));
const MeetourTeam = lazy(() => import("./components/meetOurTeam"));

const Home = () => {
  const bookRef = useRef<HTMLElement | null>(null);

  const handleScrollToBook = () => {
    bookRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className=""
      style={{
        background: "black",
        backgroundRepeat: "no-repeat",
        backgroundSize: "220vh",
      }}
    >
      <Navbar />
      <Hero handleScrollToBook={handleScrollToBook} />
      
      <div className="flex flex-col gap-12 bg-[#000000] text-white">
        <Suspense fallback={<div>Loading Services...</div>}>
          <Services />
        </Suspense>

        <Suspense fallback={<div>Loading Testimonials...</div>}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<div>Loading Work Showcase...</div>}>
          <WorkComponent />
        </Suspense>

        <div className="UA">
          <Suspense fallback={<div>Loading Glow Effect...</div>}>
            <GlowingEffectDemo />
          </Suspense>
        </div>

        <Suspense fallback={<div>Loading Team Section...</div>}>
          <MeetourTeam />
        </Suspense>

        <BookaCall ref={bookRef} />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
