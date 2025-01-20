import React from 'react'
import { HERO_CONTENT } from './../../constants/index';
import { motion } from "framer-motion"
import myImg from "../../assets/423239556_3522830081301886_5803025320462055495_n.jpg"
import { Cursor, Typewriter } from 'react-simple-typewriter'
function Hero({ Dark }) {
    const container = (delay, aft_x) => ({
        hidden: { x: aft_x, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay },
        },
    })

    return (
        <div id='Home' className={`lg:mb-36 border-b ${Dark ? "border-white" : "border-black"} pb-4`} >
            <div className=" flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0, -100)}
                            initial="hidden"
                            animate="visible"
                            className={`pb-16 text-6xl ${Dark ? "text-white" : "text-black"} font-thin tracking-tight lg:mt-16 lg:text-8xl `}>Bhaa Wafy</motion.h1>
                        <motion.span variants={container(0.5, -100)}
                            initial="hidden"
                            animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                        text-4xl bg-clip-text tracking-tighter text-transparent">
                            I'am a
                            <span className=' ms-2 tracking-tighter ' >

                                <Typewriter
                                    words={['Software Developer', 'Web Developer', 'Mern Stack Developer']}
                                    loop={true}
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                />
                            </span>
                            <span className='  text-white tracking-tighter text-transparent'>
                                <Cursor />
                            </span>
                        </motion.span>
                        <motion.p
                            variants={container(1, -100)}
                            initial="hidden"
                            animate="visible"
                            className={` ${Dark ? "text-white" : "text-black"} my-2 max-w-xl py-6 font-light tracking-tighter`}>{HERO_CONTENT}
                        </motion.p>
                        <motion.a
                            whileInView={{ rotate: [-5, 0, 5, 0, -5] }}
                            whileHover={{ rotate: [0, 0, 0, 0, 0], scale: 1.1 }}
                            transition={{ duration: 2, repeat: Infinity }}
                            download
                            href='https://drive.usercontent.google.com/download?id=1a6_60-IJ30VXTVRqGN1EDyLo6hqYwCqn&export=download&authuser=0&confirm=t&uuid=c9d3b413-b89e-42f7-a310-d9bbb3061280&at=APvzH3qNqJLvO2qAnwXNDbtXCWLs:1735240417442' className=' cv my-2 p-3 rounded-lg bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                        tracking-tighter text-black font-bold' >Download My Cv</motion.a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            className='rounded border'
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: "100%" }}
                            transition={{ duration: 0.5 }}

                            src={myImg} alt="ing" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero
