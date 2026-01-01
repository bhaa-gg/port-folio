import React from 'react'
import { motion } from 'framer-motion'
import me from '../../assets/o.png'

import { Cursor, Typewriter } from 'react-simple-typewriter'
import { useTranslation } from 'react-i18next'
import '../../i18next'

function Hero({ Dark }) {
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
    <div id="Home" className={`lg:mb-36 border-b ${Dark ? 'border-white' : 'border-black'} pb-4`}>
      <div className=" flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0, -100)}
              initial="hidden"
              animate="visible"
              className={`pb-16 text-6xl ${
                Dark ? 'text-white' : 'text-black'
              } font-thin tracking-tight lg:mt-16 lg:text-8xl `}
            >
              {t('hero.name')}
            </motion.h1>
            <motion.span
              variants={container(0.5, -100)}
              initial="hidden"
              animate="visible"
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
              variants={container(1, -100)}
              initial="hidden"
              animate="visible"
              className={` ${
                Dark ? 'text-white' : 'text-black'
              } my-2 max-w-xl py-6 font-light tracking-tighter word-spacing-[0.5rem] `}
            >
              {t('hero.HERO_CONTENT')}
            </motion.p>
            <motion.a
              whileInView={{ rotate: [-5, 0, 5, 0, -5] }}
              whileHover={{ rotate: [0, 0, 0, 0, 0], scale: 1.1 }}
              transition={{ duration: 2, repeat: Infinity }}
              download
              href="https://api.cloudinary.com/v1_1/dlzkz7mdq/image/download?api_key=735117441361392&attachment=true&audit_context=eyJhY3Rvcl90eXBlIjoidXNlciIsImFjdG9yX2lkIjoiOTM0ZDc5NjM5MjUyYWRjM2UxYTcyNjFjNjU0NTJiN2MiLCJ1c2VyX2V4dGVybmFsX2lkIjoiZTZlNjBmZjUyMDZkY2I3MzI1OWIyOWNjMGU0NWJjIiwidXNlcl9jdXN0b21faWQiOiJiaGFhdGl0aTI4MUBnbWFpbC5jb20iLCJjb21wb25lbnQiOiJjb25zb2xlIn0%3D&public_id=BahaaWafyCv_Full_vpjgnx&signature=d130254e84fb0bbea96925e293b94bed3a814786&source=ml&target_filename=BahaaWafyCv_Full_vpjgnx&timestamp=1767228421&type=upload"
              className=" cv my-2 p-3 rounded-lg bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                        tracking-tighter text-black font-bold"
            >
              {t('hero.cv')}
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              className="rounded-full sm:w-[400px] w-[400px] border-8  border-white sm:h-[650px] h-[500px] "
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: '100%' }}
              transition={{ duration: 1 }}
              src={me}
              alt="ing"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
