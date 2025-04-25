import Hero from "./components/hero"
import Services from "./components/services"
import WorkComponent from "./components/work"
import BookaCall from "./components/bookaCall"
import Footer from "./components/footer"
import MeetourTeam from "./components/meetOurTeam"
import { Navbar } from './components/navBar'
import pic from '../../assets/magicpattern-87PP9Zd7MNo-unsplash.jpg'
import { GlowingEffectDemo } from "./components/whyChoose/gloweffect"
import ChatSystem from "./components/chat"
import { AnimatedModalDemo } from "./components/chat/model"
import '../../global.css'
import Timeline from "./components/services/component/timeline"
const Home = () => {
  return (
    <section className=""
      style={{
        backgroundImage: `url(${pic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "220vh",
        // backgroundSize: " contain"
      }}>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <div className="UA ">
        <AnimatedModalDemo />
      </div> */}
      <div className="flex flex-col gap-12 bg-[#000000]  text-white">
        <Services />
        {/* <WorkComponent />
        <MeetourTeam />
        <div className="UA">
          <GlowingEffectDemo />
        </div>
        <BookaCall />
        <Footer /> */}
      </div>
    </section >
  )
}

export default Home
