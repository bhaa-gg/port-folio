import React from 'react'
import { ABOUT_TEXT_2 } from '../../constants'
import { motion } from "framer-motion"
import { FaLaptopCode } from "react-icons/fa";

import logo_2 from "../../assets/about.jpg"
function Apout({ Dark }) {

    return (
        <div id='About' className={`border-b ${Dark ? "border-white" : "border-black"} pb-4 lg:mb-36`} >
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}

                className='my-20 text-center text-4xl flex items-end justify-center' >  <FaLaptopCode className='mx-2' /> About<span className='text-neutral-500'>Me</span>
            </motion.h2>

            <div className=" flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.img
                        whileInView={{ opacity: 1, scale: "100%" }}
                        initial={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        src={logo_2} className='rounded-2xl ' alt="img-2" />
                </div>
                <div className="w-full lg:w-1/2 ">
                    <div className="flex justify-center lg:justify-start ">
                        <motion.p
                            whileInView={{ opacity: 1, x: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className={`max-w-xl ${Dark ? "text-white" : "text-black"} text-xl my-2 py-6`}>
                            {ABOUT_TEXT_2}
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apout
