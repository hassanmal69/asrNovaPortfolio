import './service.css'
import { motion, useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from '../../../../assets/laalanti.jpg'
import Firefly from '../bgfirefly'

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(value)
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.1], [6, 0])
  const rotateY = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 100, 500])
  const visible = useTransform(scrollYProgress, [0, 0.1, 0.3], [1, 0.5, 0])
  const cardsVisible = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.5], [0, 0.2, 0.5, 1])
  const textOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8])
  const textScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.7])
  const textBlur = useTransform(scrollYProgress, [0, 0.1], [0, 6])
  const textUp = useTransform(scrollYProgress, [0, 0.1], [0, 20])
  const finalBlur = useMotionTemplate`blur(${textBlur}px)`
  const yPosforBg = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.5, 0.7], [0, 100, 500, 700, 900])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.5], [1, 0.9, 0.7, 0.5])
  // Detect when text is in view
  const { ref: textRef, inView } = useInView({ triggerOnce: false, threshold: 0.2 })

  return (
    <motion.div
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
      <motion.h1 className='text-8xl font-bold text-center'
        style={{
          opacity: textOpacity,
          scale: textScale,
          filter: finalBlur,
          y: textUp
        }}>Our Services</motion.h1>

      <motion.div className="imageMainContainer relative flex justify-center items-center shadow-2xl rounded-3xl !-mt-2 w-[70%] h-[700px] border-4"
        style={{
          rotateX: rotateX,
          translateZ: "40px",
          y: rotateY,
          opacity: visible
        }}>

        <img className='w-full h-full relative rounded-3xl imginservice' src={Image} />

        {/* Animated text */}
        <motion.p
          ref={textRef}
          className="absolute text-white px-4 py-2 flex gap-2 w-[50%] bg-opacity-50 rounded-md flex-wrap">
          {servicesContent.intro.split(" ").map((word, index) => {
            const delay = index * 0.05; // Stagger effect

            return (
              <motion.span
                key={index}
                className="inline-block text-2xl font-extrabold "
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

      <motion.div
        style={{ opacity: cardsVisible }}
        className="serviceSimplecard relative !h-[800px] gap-8 flex justify-center items-center flex-col w-full ">
          
        <motion.div className='absolute z-10 h-full w-full pointer-events-none'>
         <div className="blackscreen w-full h-full absolute z-10 pointer-events-none"></div>
          <Firefly/>
        </motion.div>
        <motion.div className="flex flex-wrap gap-10 justify-center w-full z-10 relative">
          {servicesContent.services.map((service, index) => (
            <div className="parent" key={index}>
              <div className="card">
                <div className="content-box">
                  <div className="head">{service.title}</div>
                  <div className="content">
                    {service.description}
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        <div className="relative z-30">
      <p className='text-amber-50'>{servicesContent.closing}</p>
      </div>
      </motion.div>

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
        "A website isn’t just an online presence—it’s a **fully functional product** that needs to be fast, secure, and scalable. We develop custom web applications, SaaS platforms, and dashboards designed for performance, security, and growth.",
    },
    {
      title: "App Development",
      description:
        "We create powerful, scalable mobile applications that go beyond just looking good—they **solve real problems**. Whether it's iOS, Android, or cross-platform, we build apps with high-performance architectures, seamless UX, and future-ready technology.",
    },
    {
      title: "SaaS Development",
      description:
        "We specialize in **end-to-end SaaS solutions**—from ideation to deployment. Whether you're building a subscription-based platform, a B2B SaaS tool, or an AI-powered SaaS product, we ensure scalability, security, and seamless user experience.",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Artificial Intelligence is transforming industries, and we help businesses leverage **AI-powered automation, chatbots, predictive analytics, and computer vision**. Our AI solutions enhance efficiency and create intelligent digital experiences.",
    },
    {
      title: "AR & VR Solutions",
      description:
        "Augmented and Virtual Reality are reshaping digital experiences. We develop **immersive AR/VR applications** for education, retail, real estate, and gaming—blending the digital and physical worlds to create **next-gen interactive experiences**.",
    },
    {
      title: "Web3 & Blockchain",
      description:
        "The future is decentralized, and we build **Web3 solutions** that redefine ownership, trust, and security. From **NFT marketplaces and DeFi platforms to smart contracts and decentralized applications (DApps)**, we build cutting-edge blockchain technology.",
    },
    {
      title: "Automation & Custom Integrations",
      description:
        "We streamline business workflows with **custom automation solutions**. From API integrations and CRM automation to AI-driven process optimizations, we help businesses operate faster, smarter, and more efficiently.",
    },
  ],
  closing:
    "At Asrnova, we don’t just write code—we build technology that **drives businesses forward**.",
};
