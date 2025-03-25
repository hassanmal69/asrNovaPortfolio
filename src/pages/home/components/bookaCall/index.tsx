import { BackgroundBeams } from "../ui/background-beams"

const BookaCall = () => {
    return (
        <section className="relative w-full flex justify-center items-center">
            <div className="relative w-full">
                <BackgroundBeams children={undefined} />
            </div>
            <div className="TextContent absolute w-full flex">
                <h1 className="text-6xl">Book a Call Now!</h1>
            </div>
        </section>
    )
}

export default BookaCall