import React, { useEffect, useState } from 'react'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero';
import Apout from './Components/Apout/Apout';
import Technilgies from './Components/Technilgies/Technilgies';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import { PiArrowFatUpDuotone } from "react-icons/pi";
import { ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import Education from './Components/Education/Education';
import NavMobile from './Components/NavMobile/NavMobile';
import Experince from './Components/Experince/Experince';

function App() {
  const [Scrool, setScrool] = useState(0);
  const [Dark, setDark] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrool(window.scrollY);
    })
  }, [])
  return (
    <>
      {/* #fff */}
      <div className='overflow-x-hidden  text-neutral-300 antialiased selection:bg-blue-900 selection:text-white'>
        <div className="fixed top-0 -z-10 w-full h-full ">
          <div className={`absolute inset-0 -z-10 h-full w-full items-center ${Dark ? "text-black" : ""} px-5 py-24 ${Dark ? "[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" : "[background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"} `}></div>
        </div>
        <div className="container mx-auto px-8  ">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ y: [0, 15, 20, 25, 10, 5, 0] }}
            animate={{ opacity: Scrool >= 175 ? 1 : 0 }}
            transition={{ duration: 2, repeat: Infinity }}
            href='#ups' className={`toUp z-50  transition-all  ${Scrool <= 175 ? "hidden" : ""} bg-zinc-700 cursor-pointer fixed p-2  rounded-full bottom-5 flex  right-5 `}>

            <PiArrowFatUpDuotone className='text-white text-3xl ' />
          </motion.a>
          <ToastContainer autoClose={300} />
          <Nav Dark={Dark} setDark={setDark} />
          <NavMobile Dark={Dark} />
          <Hero Dark={Dark} />
          <Apout Dark={Dark} />
          <Experince Dark={Dark} />
          <Technilgies Dark={Dark} />
          <Education Dark={Dark} />
          <Projects Dark={Dark} />
          <Contact Dark={Dark} />
        </div>
      </div>
    </>
  )
}

export default App
