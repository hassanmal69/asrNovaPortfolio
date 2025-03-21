import Hero from "./components/hero"
import Services from "./components/services"
import WorkComponent from "./components/work"
import BookaCall from "./components/bookaCall"
const Home = () => {
  return (
    <section className="flex flex-col gap-12 ">
      <Hero />
      <Services />
      <BookaCall/>
      <WorkComponent/>
    </section>
  )
}

export default Home
