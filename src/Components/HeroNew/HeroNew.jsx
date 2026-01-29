import React from 'react'
import { motion } from 'framer-motion'
import me from '../../assets/o.png'

import { Cursor, Typewriter } from 'react-simple-typewriter'
import { useTranslation } from 'react-i18next'
import '../../i18next'

function HeroNew({ Dark }) {
  const { t, i18n } = useTranslation()

  const container = (delay, aft_x) => ({
    hidden: { x: aft_x, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay },
    },
  })

  return (
    <div id="Home" className={` border-b  min-h-screen ${Dark ? 'border-white' : 'border-black'} `}>
      <div className="w-full flex flex-col   justify-center items-center  ">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`pb-10 font-extrabold text-6xl ${
            Dark ? 'text-white' : 'text-black'
          } font-thin tracking-tight  lg:text-8xl `}
        >
          <span>{t('hero.name1')}</span>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className={`pb-10 font-extrabold text-6xl ${
            Dark ? 'text-white' : 'text-black'
          } font-thin tracking-tight  lg:text-8xl `}
        >
          <span>{t('hero.name2')}</span>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -140 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className={`pb-10 font-extrabold text-6xl ${
            Dark ? 'text-white' : 'text-black'
          } font-thin tracking-tight  lg:text-8xl `}
        >
          <span>{t('hero.name3')}</span>
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                        text-4xl bg-clip-text tracking-tighter text-transparent"
        >
          {t('hero.typeWriterWords')}
          <span className=" ms-2 tracking-tighter ">
            <Typewriter
              words={
                i18n.language === 'ar'
                  ? ['مطور برمجيات', 'مطور ويب']
                  : ['Software Developer', 'Web Developer', 'Mern Stack Developer']
              }
              loop={true}
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </span>
          <span className="  text-white tracking-tighter text-transparent">
            <Cursor />
          </span>
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className={` text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2 ${
            Dark ? 'text-white' : 'text-black'
          } my-2 max-w-2xl text-xl   py-6 font-light tracking-tighter  `}
        >
          {t('hero.HERO_CONTENT')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 140 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className=""
        >
          <motion.a
            animate={{ rotate: [-5, 0, 5, 0, -5] }}
            whileHover={{ rotate: [0, 0, 0, 0, 0], scale: 1.1 }}
            transition={{ duration: 2, repeat: Infinity }}
            target="_blank"
            download
            href=""
            className=" cv my-2 p-3 rounded-lg bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
          tracking-tighter text-black font-bold"
          >
            {t('hero.cv')}
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroNew
