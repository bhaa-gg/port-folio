import React from 'react'
import { motion } from 'framer-motion';

const Education = ({ Dark }) => {
    return (
        <div id='Tutorial' className={`lg:mb-36 border-b ${Dark ? "border-white" : "border-black"} pb-4`} >
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl' ><i class="fa-solid fa-graduation-cap"></i> My Education</motion.h2>


            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}

                className="Card w-full  lg:w-3/4  mx-auto p-3 rounded border-white">

                <div className="imgs overflow-hidden  w-full md:w-[80%] text-center  mx-auto">
                    <a target='_blank' rel='noreferrer' href='https://www.facebook.com/DTU.MC?locale=ar_AR'>

                        <img id='DtuImg' src="https://lh3.googleusercontent.com/p/AF1QipMtpv4nAtkBx9UJgRiwQ37gjmf2xcwCeLDGrXsX=s680-w680-h510" className='w-full mx-auto rounded' alt="DTU" />
                    </a>
                </div>
                <div className={`  w-full md:w-[80%] mx-auto py-3 ${Dark ? "text-white" : "text-black"} `}>
                    <h2 className='text-2xl font-bold' >
                        Student in Technology
                    </h2>
                    <p >
                        Delta University For Science & Technology
                    </p>
                    <p>
                        2022 - 2026
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default Education
