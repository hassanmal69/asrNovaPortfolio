import './service.css'
import { motion, useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from '@assets/laalanti.jpg'
import { ParallaxScrollSecond } from "./parallax-scroll-2";
import Web from "../../../../assets/web.jpeg"
import App from "../../../../assets/appdev.jpeg"
import SaaS from "../../../../assets/SaaS.jpeg"
import AR from "../../../../assets/Ar.jpeg"
import AI from "../../../../assets/AI.jpeg"
import Blockchain from "../../../../assets/blockchain.png"
import Automation from "../../../../assets/automation.png"
import Design from "../../../../assets/Design.png"
import { TextHoverEffect } from '../../../../components/text-hover-effect'

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const [isMobile, setisMobile] = useState(window.innerWidth < 660)
  useEffect(() => {
    const handleResize = () => setisMobile(window.innerWidth < 660)
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(value)
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.1], [6, 0])
  const rotateYInput = isMobile ? [0, 0.05, 0.2] : [0, 0.1, 0.3];

  const rotateY = useTransform(scrollYProgress, rotateYInput, [0, 100, 500])
  const visible = useTransform(scrollYProgress, [0, 0.1, 0.3], [1, 0.5, 0])
  const textOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8])
  const textScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.7])
  const textBlur = useTransform(scrollYProgress, [0, 0.1], [0, 6])
  const textUp = useTransform(scrollYProgress, [0, 0.1], [0, 20])
  const finalBlur = useMotionTemplate`blur(${textBlur}px)`
  const yPosforBg = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.5, 0.7], [0, 100, 500, 700, 900])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.5], [1, 0.9, 0.7, 0.5]); const { ref: textRef, inView } = useInView({ triggerOnce: false, threshold: 0.2 })
  const Payload = servicesContent.services.map((service: {
    img: string | any; title: string; description: string; 
}) => ({
    title: service.title,
    description: service.description,
    img: service.img
  }))
  return (
    <motion.div 
    id='service'
      ref={containerRef}
      className='mainSectionService flex flex-col items-center  bg-black w-full  !py-10'>
      <motion.div
        className='circleinbg relative bg-gradient-to-r from-[#5454D4] to-[#8C8CFF]'
        style={{ y: yPosforBg, opacity: bgOpacity }}
        animate={{
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      >
      </motion.div>
      <div className="w-full h-[100vh] sm:h-[150vh]">
        <motion.h1 className='ethnocentric text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#00F5A0] to-[#00A3FF] bg-clip-text text-transparent leading-tight text-center px-4'
          style={{
            opacity: textOpacity,
            scale: textScale,
            filter: finalBlur,
            y: textUp
          }}>Our Vision</motion.h1>

        <motion.div className="imageMainContainer translate-z-[20px] sm:translate-z-[40px] relative flex justify-center items-center shadow-2xl rounded-3xl !-mt-2 w-[90%] h-[350px] sm:w-[70%] sm:h-[700px] border-4"
          style={{
            rotateX: rotateX,
            // translateZ: "40px",
            y: rotateY,
            opacity: visible,
          }}>

          <img className='w-full h-full relative rounded-3xl imginservice' src={Image} />

          <motion.p
            ref={textRef}
            className="absolute text-white px-4 py-2 flex gap-1 sm:gap-2 w-[90%] sm:w-[50%] bg-opacity-50 rounded-md flex-wrap">
            {servicesContent.intro.split(" ").map((word, index) => {
              const delay = index * 0.05; // Stagger effect

              return (
                <motion.span
                  key={index}
                  className="inline-block text-sm sm:text-2xl font-extrabold "
                  style={{ display: "inline-block", whiteSpace: "nowrap" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Trigger only when in view
                  transition={{ duration: 0.5, delay: delay }}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.p>

        </motion.div>
      </div>
      <section className="flex flex-col gap-24 services-section">
        <TextHoverEffect text='Our Services' />
        <ParallaxScrollSecond payload={Payload} />

        <div className="relative z-30">
          <p className='text-amber-50'>{servicesContent.closing}</p>
        </div>
      </section>
    </motion.div>
  )
}

export default Services

const servicesContent = {
  title: "Our Services",
  intro:
    "At Asrnova, we build **real** software—scalable, high-performance solutions that power startups, businesses, and educators. Whether you're developing an MVP, automating workflows, or creating an enterprise-grade platform, we turn complex ideas into seamless digital products.",
    services: [
      {
        title: "Web Development",
        description:
          "Your website is more than a digital footprint—it’s a **flagship product**. We engineer custom platforms, marketing sites, SaaS dashboards, and high-performance web apps that are lightning-fast, ultra-secure, and ready to scale with your ambition.",
        img: Web,
      },
      {
        title: "App Development",
        description:
          "We craft mobile apps that don’t just look beautiful—they **work like beasts**. From iOS to Android to cross-platform builds, we architect robust apps with seamless UX, powerful performance, and the flexibility to evolve with your users.",
        img: App,
      },
      {
        title: "SaaS Development",
        description:
          "SaaS is in our DNA. Whether you're bootstrapping a subscription platform or scaling a B2B powerhouse, we handle **everything from MVP to multi-tenant infrastructure**—with elegance, efficiency, and elite-level engineering.",
        img: SaaS,
      },
      {
        title: "AI & Machine Learning",
        description:
          "We don’t just use AI—we build with it. From **predictive analytics and NLP to custom chatbots and computer vision**, we create intelligent systems that learn, adapt, and deliver results that feel like magic—but run on code.",
        img: AI,
      },
      {
        title: "AR & VR Solutions",
        description:
          "Welcome to the future. We design **immersive AR/VR experiences** that blend digital and physical worlds—think virtual showrooms, interactive training, gamified learning, and spatial storytelling that hits different.",
        img: AR,
      },
      {
        title: "Web3 & Blockchain",
        description:
          "Ownership. Transparency. Trust. We build in the decentralized world—**NFT marketplaces, DApps, smart contracts, and DeFi platforms**—with bulletproof security and blockchain logic that’s clean, scalable, and future-proof.",
        img: Blockchain,
      },
      {
        title: "Automation & Integrations",
        description:
          "We connect your tools, sync your data, and automate the chaos. Think **custom APIs, CRMs, webhooks, third-party services, and AI-driven flows**—all talking to each other like they were made to. Because now, they are.",
        img: Automation,
      },
      {
        title: "UI/UX Design",
        description:
          "Design isn’t just how it looks—it’s how it works. We craft **pixel-perfect interfaces, seamless flows, and user-first experiences** that make products feel intuitive, thoughtful, and kind of addictive.",
        img: Design,
      },
    ],
    
  closing:
    "At Asrnova, we don’t just write code—we build technology that **drives businesses forward**.",
};
