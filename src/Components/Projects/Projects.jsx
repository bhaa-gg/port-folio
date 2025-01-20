import React, { useState } from 'react'
import { PROJECTS, All, backEnd } from '../../constants'
import { motion } from "framer-motion"

const Projects = ({ Dark }) => {
    const [Projects, setProjects] = useState(PROJECTS)
    return (
        <div className={`border-b ${Dark ? "border-white" : "border-black"} pb-4`} >
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl' >Projects</motion.h2>
            <div className="">
                <div className="flex mb-5 items-center justify-center">
                    <ul className='mb-5 p-2 flex gap-4 items-center justify-center text-2xl text-white ' >
                        <li onClick={() => setProjects(PROJECTS)} className={`curs-pointer ${Dark ? "text-white" : "text-black"}  transition-all  py-1 px-2 rounded  ${Projects[0].type === "Front" ? " text-black" : ""} `} >Front End</li>
                        <li onClick={() => setProjects(backEnd)} className={`curs-pointer ${Dark ? "text-white" : "text-black"}  transition-all  py-1 px-2 rounded  ${Projects[0].type === "Back" ? " text-black" : ""} `} >Back End</li>
                        <li onClick={() => setProjects(All)} className={`curs-pointer ${Dark ? "text-white" : "text-black"}  transition-all  py-1 px-2 rounded  ${Projects[0].type === "All" ? " text-black" : ""} `} >All</li>
                    </ul>
                </div>
                {
                    Projects?.length ?
                        Projects?.map((val, i) => (
                            <div key={i} className="mb-8 flex flex-wrap lg:justify-center ">
                                <motion.div
                                    whileInView={{ x: 0, opacity: 1 }}
                                    initial={{ x: -100, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className=" haveHover w-full overflow-hidden lg:me-10 lg:w-[46%]    ">
                                    <a href={val.demo} target='_blank'>
                                        <img src={val.image} className='w-full m-auto mb-6 rounded-md xl:m-0 hover:scale-105 transition-all   ' alt={val.title} />
                                    </a>
                                </motion.div>
                                <motion.div
                                    whileInView={{ x: 0, opacity: 1 }}
                                    initial={{ x: 100, opacity: 0 }}
                                    transition={{ duration: 0.2, delay: 0.2 }}

                                    className="w-full   max-w-xl lg:w-[46%] ">
                                    <h6 className={`mb-2 ${Dark ? "text-white" : "text-black"}   font-semibold`} >
                                        {val.title}
                                    </h6>
                                    <p className={` ${Dark ? "text-white" : "text-black"} mb-4 `} >{val.description}</p>
                                    <div className="flex flex-wrap items-center gap-4">
                                        {val.technologies.map((tecs, is) => (
                                            <div className='rounded bg-neutral-900  text-purple-800 p-2' key={is} >{tecs}</div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))
                        : <h1>No Projects Now</h1>
                }
            </div>
        </div>
    )
}

export default Projects 
