// import About from "./components/about"
// import Firefly from "./components/bgfirefly"
import Hero from "./components/hero"
import Services from "./components/services"
// import BallMoving from "./components/services/ballMoving"
// import { BackgroundBeams } from "./components/ui/background-beams"
import WorkComponent from "./components/work"

const Home = () => {
  return (
    <section className="flex flex-col gap-12 ">
      <Hero />
      {/* <Firefly/> */}

      {/* <About /> */}
      <Services />
      {/* <BackgroundBeams/> */}
      {/* <BallMoving/> */}
      <WorkComponent/>
    </section>
  )
}

export default Home
