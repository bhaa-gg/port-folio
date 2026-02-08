import React from 'react'
import { motion } from 'framer-motion'
import { Cursor, Typewriter } from 'react-simple-typewriter'
import { useTranslation } from 'react-i18next'
import '../../i18next'
import { IoDocumentText } from 'react-icons/io5'
import { IoMdPin } from 'react-icons/io'
import { CiMail } from 'react-icons/ci'

const titleVariants = {
  hidden: { opacity: 0, y: -80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.25 },
  }),
}

function HeroNew({ Dark }) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const titles = [t('hero.name1'), t('hero.name2'), t('hero.name3')]

  return (
    <section
      id="Home"
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`
    min-h-[90vh] border-b
    ${Dark ? 'border-white/40 py-4  text-white' : 'border-black/50  text-black'}
  `}
    >
      <div className="flex  flex-col items-center justify-center text-center px-4">
        {/* Titles */}
        {titles.map((title, i) => (
          <motion.h1
            key={i}
            custom={i}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="
          font-['Bebas_Neue']
          uppercase
          pb-4
          tracking-widest
          font-extrabold
          text-5xl sm:text-6xl lg:text-9xl
        "
          >
            {title}
          </motion.h1>
        ))}

        {/* Typewriter */}
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="
        mt-4
        text-2xl sm:text-3xl lg:text-4xl
        font-semibold
        capitalize
        bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500
        bg-clip-text text-transparent
        tracking-tight
        [word-spacing:0.3rem]
      "
        >
          {t('hero.typeWriterWords')}
          <span className="ms-2 capitalize">
            <Typewriter
              words={
                isRTL
                  ? ['مطور برمجيات', 'مطور ويب']
                  : ['Software Developer', 'Web Developer', 'MERN Stack Developer']
              }
              loop
              typeSpeed={70}
              deleteSpeed={50}
              cursor={false}
            />
          </span>
          <Cursor cursorStyle="_" />
        </motion.span>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className={`
        mt-6 max-w-2xl
        text-sm sm:text-base lg:text-lg
        leading-relaxed
        tracking-wide
        [word-spacing:0.15rem]
        font-medium
        ${Dark ? 'text-gray-300' : 'text-gray-600'}
      `}
        >
          {t('hero.HERO_CONTENT')}
        </motion.p>

        {/* Info + Button */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="pt-8 space-y-6"
        >
          {/* Location & Mail */}
          <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base font-semibold">
            <div className={`flex items-center gap-2 ${Dark ? 'text-gray-300' : 'text-gray-700'}`}>
              <IoMdPin className="size-5 text-blue-500" />
              <span>{t('hero.location')}</span>
            </div>

            <div className={`flex items-center gap-2 ${Dark ? 'text-gray-300' : 'text-gray-700'}`}>
              <CiMail className="size-5 text-blue-500" />
              <span>{t('hero.mail')}</span>
            </div>
          </div>

          {/* CV Button */}
          <div className="flex justify-center">
            <motion.a
              href="https://drive.usercontent.google.com/download?id=1rW65LjHqa2dl1WEvJfGL50HqpcWswkJ2&export=download&authuser=0&confirm=t&uuid=d2eb58f4-4279-45fe-be40-51efac5583c0&at=APcXIO1vkw1_akSBaFvU0Nsq1CKm:1770561922013"
              target="_blank"
              download
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`
            group flex items-center gap-2
            rounded-2xl px-8 py-3
            font-semibold tracking-widest
            transition-all duration-300
            shadow-xl backdrop-blur-md
            ${
              Dark
                ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:shadow-pink-500/20'
                : 'bg-black text-white border border-black/10 hover:bg-black/90 hover:shadow-purple-500/20'
            }
          `}
            >
              <IoDocumentText className="size-5 transition-transform group-hover:scale-110 group-hover:rotate-6" />
              <span className="uppercase">{t('hero.cv')}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroNew
