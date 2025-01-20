import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { SiCss3 } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { motion } from "framer-motion"
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaShieldCat } from "react-icons/fa6";
import { MdSmartToy } from "react-icons/md";






const Technilgies = (duration, Dark) => {
    const container = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            }
        },
    })
    return (
        <div id='Technology' className={`border-b ${Dark ? "border-white" : "border-black"} pb-4`}>

            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }} className='my-20 flex items-end justify-center text-center text-4xl' >
                < MdSmartToy className='mx-2' /> Technologies</motion.h2>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    whileHover={{ scale: 1.1, y: 0 }}
                    variants={container(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl  my-3 hover:border-white  transition-all border-4 border-neutral-700  p-4">
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div

                    whileHover={{ scale: 1.1, y: 0 }}
                    variants={container(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl  my-3 hover:border-white  transition-all  border-4 border-neutral-700 p-4">
                    <RiJavascriptFill className='text-7xl text-yellow-400' />
                </motion.div>
                <motion.div
                    variants={container(5)}
                    whileHover={{ scale: 1.1, y: 0 }}
                    initial="initial"
                    animate="animate" className="rounded-2xl  my-3 hover:border-white  transition-all border-4 border-neutral-700 p-4">
                    <SiCss3 className='text-7xl text-blue-600' />
                </motion.div>
                <motion.div
                    variants={container(2)}
                    whileHover={{ scale: 1.1, y: 0 }}
                    initial="initial"
                    animate="animate" className="rounded-2xl  my-3 hover:border-white  transition-all border-4 border-neutral-700 p-4">
                    <SiJquery className='text-7xl text-blue-600' />
                </motion.div>
                <motion.div
                    variants={container(4)}
                    whileHover={{ scale: 1.1, y: 0 }}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl  my-3 hover:border-white  transition-all border-4 border-neutral-700 p-4">
                    <RiTailwindCssFill className='text-7xl text-blue-400' />
                </motion.div>
                <motion.div
                    variants={container(6)}
                    whileHover={{ scale: 1.1, y: 0 }}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl  my-3 hover:border-white  transition-all border-4 border-neutral-700  p-4">
                    <FaBootstrap className='text-7xl text-purple-800 ' />
                </motion.div>
                <motion.div
                    variants={container(1.5)}
                    whileHover={{ scale: 1.1, y: 0 }}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl  my-3 hover:border-white  transition-all border-4 border-neutral-700 p-4">
                    <SiTypescript className='text-7xl text-blue-600' />
                </motion.div>
                <motion.div
                    variants={container(3)}
                    whileHover={{ scale: 1.1, y: 0 }}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl  my-3 hover:border-white  transition-all border-4 border-neutral-700 p-4">
                    <FaSass className='text-7xl text-pink-600' />
                </motion.div>
                <motion.div
                    variants={container(6)}
                    whileHover={{ scale: 1.1, y: 0 }}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl  my-3 hover:border-white  transition-all border-4 border-neutral-700 p-4">
                    <TiHtml5 className='text-7xl text-orange-600' />
                </motion.div>
                <motion.div
                    variants={container(2.5)}
                    whileHover={{ scale: 1.1, y: 0 }}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl  my-3 hover:border-white  transition-all border-4 border-neutral-700 p-4">
                    <FaGithub className='text-7xl text-white' />
                </motion.div>

                <motion.div
                    variants={container(2.5)}
                    whileHover={{ scale: 1.1, y: 0 }}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl  my-3 hover:border-white  transition-all border-4 border-neutral-700 p-4">
                    <FaNode className='text-7xl text-green-600' />
                </motion.div>

                <motion.div
                    variants={container(2.5)}
                    whileHover={{ scale: 1.1, y: 0 }}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl  my-3 hover:border-white  transition-all border-4 border-neutral-700 p-4">
                    <SiMongodb className='text-7xl text-green-600' />
                </motion.div>

                <motion.div
                    variants={container(2.5)}
                    whileHover={{ scale: 1.1, y: 0 }}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl  my-3 hover:border-white  transition-all border-4 border-neutral-700 p-4">
                    <FaShieldCat className='text-7xl text-pink-600' />
                </motion.div>

                <motion.div
                    variants={container(2.5)}
                    whileHover={{ scale: 1.1, y: 0 }}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl  my-3 hover:border-white  transition-all border-4 border-neutral-700 p-4">
                    <SiRedux className='text-7xl text-fuchsia-900' />
                </motion.div>
            </motion.div>
        </div >
    )
}

export default Technilgies
