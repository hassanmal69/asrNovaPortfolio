import {useRef} from "react"
import Hero from "./components/hero"
import Services from "./components/services"
import WorkComponent from "./components/work"
import BookaCall from "./components/bookaCall"
import Footer from "@layout/footer"
import MeetourTeam from "./components/meetOurTeam"
import { Navbar } from '@layout/navBar'
import pic from '../../assets/magicpattern-87PP9Zd7MNo-unsplash.jpg'
import { GlowingEffectDemo } from "./components/whyChoose/gloweffect"
import '../../global.css'
import Testimonials from "./components/testimonials"
const Home = () => {
  const bookRef = useRef<HTMLElement | null>(null);

  const handleScrollToBook = () => {
    bookRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className=""
      style={{
        backgroundImage: `url(${pic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "220vh",
        // backgroundSize: " contain"
      }}>
      <Navbar />
      <Hero handleScrollToBook={handleScrollToBook} />
      <div className="flex flex-col gap-12 bg-[#000000]  text-white">
        <Services />
        <Testimonials />
        <WorkComponent />
        <div className="UA">
          <GlowingEffectDemo />
        </div>
        <MeetourTeam />
        <BookaCall ref={bookRef} />
        <Footer />
      </div>
    </section >
  )
}

export default Home
