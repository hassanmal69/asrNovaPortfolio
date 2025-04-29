import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import Hero from "./components/hero";
import Services from "./components/services";
import WorkComponent from "./components/work";
import BookaCall from "./components/bookaCall";
import Footer from "@layout/footer";
import MeetourTeam from "./components/meetOurTeam";
import { Navbar } from '@layout/navBar';
import pic from '../../assets/magicpattern-87PP9Zd7MNo-unsplash.jpg';
import { GlowingEffectDemo } from "./components/whyChoose/gloweffect";
import '../../global.css';
import Testimonials from "./components/testimonials";
const Home = () => {
    const bookRef = useRef(null);
    const handleScrollToBook = () => {
        bookRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (_jsxs("section", { className: "", style: {
            backgroundImage: `url(${pic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "220vh",
            // backgroundSize: " contain"
        }, children: [_jsx(Navbar, {}), _jsx(Hero, { handleScrollToBook: handleScrollToBook }), _jsxs("div", { className: "flex flex-col gap-12 bg-[#000000]  text-white", children: [_jsx(Services, {}), _jsx(Testimonials, {}), _jsx(WorkComponent, {}), _jsx("div", { className: "UA", children: _jsx(GlowingEffectDemo, {}) }), _jsx(MeetourTeam, {}), _jsx(BookaCall, { ref: bookRef }), _jsx(Footer, {})] })] }));
};
export default Home;
