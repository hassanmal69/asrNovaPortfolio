import Hero from "./components/hero"
import Services from "./components/services"
import WorkComponent from "./components/work"
import BookaCall from "./components/bookaCall"
import Footer from "./components/footer"
import MeetourTeam from "./components/meetOurTeam"
const Home = () => {
  return (
    <section className="flex flex-col gap-12 ">
      <Hero />
      <Services />
      <WorkComponent/>
      <MeetourTeam/>
      <BookaCall/>
      <Footer/>
    </section>
  )
}

export default Home
