import { Cover } from "../ui/cover"
import './BookaCall.css'
import FormBookacall from "./form"
const BookaCall = () => {
    return (
        <section className=" w-full flex flex-col !p-0 !g-0 justify-center items-center TextContent gap-3.5">
                <h1 className="text-4xl md:text-4xl leading-normal ethnocentric right lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-[#00A3FF] dark:via-[#00F5A0] dark:to-white">
                    Book a call<Cover>Asr Nova</Cover>
                </h1>
                <p className="w-4xl text-lg  text-gray-300 !m-auto text-center">
                    We create high-converting websites that help your business grow and make more money. Book a free consultation call and let’s chat about your goals!</p>
                <FormBookacall />
        </section>
    )
}

export default BookaCall