import { motion } from 'framer-motion';
import BgMeetTeam from './bgMeetTeam';
import Hassan from '../../../../assets/hassanNFT.webp';
import Moiz from '../../../../assets/moizNft.webp';
import Point from '../../../../assets/monkeypointin.webp';
import Broken from '../../../../assets/12122.webp';
import { useState } from 'react';
// import { useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

const teamMembers = [
    {
        name: 'Abdul Moiz',
        role: 'CEO',
        description: "Abdul Moiz is the brains behind our vision, always pushing boundaries and exploring new ideas. As CEO, he keeps the team focused and driven.",
        image: Moiz,
        hoverImage: Point
    },
    {
        name: 'Hassan Tahir',
        role: 'CTO',
        description: "Hassan Tahir is the driving force behind our technology, turning ideas into reality. As CTO, he ensures our products are innovative and cutting-edge.",
        image: Hassan,
        hoverImage: Point
    }
];

const MeetourTeam = () => {
    const [hover, setHover] = useState(null);
    return (
        <motion.section className='relative h-[120vh] w-full'>
            <div className="h-full w-full absolute">
                <BgMeetTeam />
            </div>
            <div className="Textcomponent flex justify-center items-center">
                <h1 className='text-6xl font-extrabold'>Meet 'The Team'</h1>
            </div>
            <div className="flex justify-between items-center w-full h-full">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center h-full relative"
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(null)}
                    >
                        <motion.img src={Broken} className='absolute z-50 mix-blend-hard-light pointer-events-none w-[500px] rounded-full'
                            initial={{ scale: 0 }}
                            animate={{ scale: hover === index ? 1.1 : 0 }}
                        />
                        <div className="absolute z-100 w-full h-full flex items-center ">
                            <motion.img
                                src={member.hoverImage}
                                className='absolute z-100 w-[230px]'
                                initial={{ scale: 0, y: 0 }}
                                animate={{ scale: hover === index ? 1 : 0, y: hover === index ? '-50%' : 0 }}
                                transition={{ duration: 1.2, ease: "easeOut", delay: .6 }}
                            />
                            <div className="absolute h-full w-full flex justify-center">
                                <motion.p
                                    animate={{ scale: hover === index ? 1 : 0 }}
                                    transition={{ duration: 1.2, ease: "easeOut", delay: .6 }}
                                    className='w-1/2 font-bold text-l absolute right-10 text-center text-gray-400 meetOurTeamCard'>
                                    {member.description}
                                </motion.p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute w-full h-full flex justify-center items-center z-50 pointer-events-none overflow-hidden">
                                <motion.h4
                                    className='text-4xl text-white font-extrabold flex whitespace-nowrap w-full'
                                    animate={{ x: ["-136%", "10%"] }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                >
                                    {member.name} {member.name} {member.name} {member.name} {member.name} {member.name} {member.name} {member.name}
                                </motion.h4>

                            </div>
                            <motion.img
                                src={member.image}
                                className='w-[500px] rounded-full z-40'
                                initial={{ scale: 1 }}
                                animate={{ scale: hover === index ? 1.1 : 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default MeetourTeam;
