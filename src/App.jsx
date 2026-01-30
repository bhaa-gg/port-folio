import React, { useEffect, useState } from 'react'
import Nav from './Components/Nav/Nav'
import About from './Components/Apout/Apout'
import Technilgies from './Components/Technilgies/Technilgies'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import { PiArrowFatUpDuotone } from 'react-icons/pi'
import { ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import Education from './Components/Education/Education'
import NavMobile from './Components/NavMobile/NavMobile'
import Experince from './Components/Experince/Experince'
import { useTranslation } from 'react-i18next'
import './i18next'
import HeroNew from './Components/HeroNew/HeroNew'
function App() {
  const { i18n } = useTranslation()

  const [Scroll, setScroll] = useState(0)
  const [Dark, setDark] = useState(true)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY)
    })

    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY)
      })
    }
  }, [])
  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="overflow-x-hidden  text-neutral-300 antialiased selection:bg-blue-900 selection:text-white">
        <div className="fixed top-0 -z-10 w-full h-full ">
          <div
            className={`
    absolute inset-0 -z-10 h-full w-full
    transition-all duration-700 ease-in-out

    ${
      Dark
        ? '[background:radial-gradient(120%_120%_at_50%_15%,#0b0b0f_35%,#3b1d6a_75%,#000_100%)]'
        : '[background:radial-gradient(120%_120%_at_50%_15%,#ffffff_30%,#e9e6ff_60%,#c7bfff_100%)]'
    }
  `}
          />
        </div>
        <div className="container mx-auto px-8  ">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ y: [0, 15, 20, 25, 10, 5, 0] }}
            animate={{ opacity: Scroll >= 175 ? 1 : 0 }}
            transition={{ duration: 2, repeat: Infinity }}
            href="#ups"
            className={`toUp z-50  transition-all  ${
              Scroll <= 175 ? 'hidden' : ''
            } bg-zinc-700 cursor-pointer fixed p-2  rounded-full bottom-5 flex  right-5 `}
          >
            <PiArrowFatUpDuotone className="text-white text-3xl " />
          </motion.a>
          <ToastContainer autoClose={300} />
          <Nav Dark={Dark} setDark={setDark} />
          {/* <NavMobile Dark={Dark} /> */}
          <HeroNew Dark={Dark} />
          <About Dark={Dark} />
          <Experince Dark={Dark} />
          <Technilgies Dark={Dark} />
          <Education Dark={Dark} />
          <Projects Dark={Dark} />
          <Contact Dark={Dark} />
        </div>
      </div>
    </div>
  )
}

export default App
