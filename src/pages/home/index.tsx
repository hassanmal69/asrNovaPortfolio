import Hero from "./components/hero"
import Services from "./components/services"
import WorkComponent from "./components/work"
import BookaCall from "./components/bookaCall"
import Footer from "@layout/footer"
import MeetourTeam from "./components/meetOurTeam"
import { Navbar } from '@layout/navBar'
import pic from '../../assets/magicpattern-87PP9Zd7MNo-unsplash.jpg'
import { GlowingEffectDemo } from "./components/whyChoose/gloweffect"
import { AnimatedModalDemo } from "./components/chat/model"
import '../../global.css'
import Testimonials from "./components/testimonials"
const Home = () => {
  return (
    <section className=""
      style={{
        backgroundImage: `url(${pic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "220vh",
        // backgroundSize: " contain"
      }}>
      <Navbar />
      <Hero />
      <div className="UA ">
        <AnimatedModalDemo />
      </div>
      <div className="flex flex-col gap-12 bg-[#000000]  text-white">
        <Services />
        <WorkComponent />
        <div className="UA">
          <GlowingEffectDemo />
        </div>
        <MeetourTeam />
        <Testimonials />
        <BookaCall />
        <Footer />
      </div>
    </section >
  )
}

export default Home
