import { BackgroundBeams } from "../ui/background-beams"
import { Cover } from "../ui/cover"
import './BookaCall.css'
import FormBookacall from "./form"
const BookaCall = () => {
    return (
        <section className="relative w-full flex flex-col !p-0 !g-0 justify-center items-center">
            <div className="relative w-full">
                <BackgroundBeams />
            </div>
            <div className="TextContent absolute w-full flex gap-3.5 flex-col">
                <h1 className="text-4xl md:text-4xl leading-normal lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                    Smart Sites, Bigger Profits <br /> with <Cover>Asr Nova</Cover>
                </h1>
                <p className="w-1/2 text-lg text-gray-300 !m-auto text-center">
                    We create high-converting websites that help your business grow and make more money. Book a free consultation call and let’s chat about your goals!</p>
                <FormBookacall />
            </div>
        </section>
    )
}

export default BookaCall