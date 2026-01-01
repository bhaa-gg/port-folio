import React from 'react'
import { motion } from "framer-motion"
import { FaLaptopCode } from "react-icons/fa";
import '../../i18next';


import logo_2 from "../../assets/about.jpg"
// import me from "../../assets/o.png"
import me from "../../assets/me.jpg"

import { useTranslation } from 'react-i18next';
function Apout({ Dark }) {
    const { t } = useTranslation();

    return (
        <div id='About' className={`border-b ${Dark ? "border-white" : "border-black"} pb-4 lg:mb-36`} >
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}

                className='my-20 text-center text-4xl flex items-end justify-center' >  <FaLaptopCode className='mx-2' /> {t("About.head.about")}<span className='text-neutral-500'>{t("About.head.me")}</span>
            </motion.h2>

            <div className=" flex flex-wrap items-center justify-between">
                <div className="w-full  flex items-center justify-center lg:w-[40%] lg:p-8">
                    <motion.img
                        whileInView={{ opacity: 1, scale: "100%" }}
                        initial={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 1 }}
                        src={me}
                        className='rounded  border-8 w-full'
                    // className='rounded-full w-[400px] border-8  border-white h-[650px] ' alt="img-2" 
                    />
                </div>
                <div className="w-full lg:w-1/2 ">
                    <div className="flex justify-center lg:justify-start ">
                        <motion.p
                            whileInView={{ opacity: 1, x: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className={`max-w-xl ${Dark ? "text-white" : "text-black"} text-xl my-2 py-6`}>
                            {t("About.title")}

                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apout
