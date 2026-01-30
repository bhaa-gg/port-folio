import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import '../../i18next'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

const Education = ({ Dark }) => {
  const { t } = useTranslation()

  return (
    <section
      id="Tutorial"
      className={`lg:mb-36 min-h-screen border-b ${Dark ? 'border-white' : 'border-black'} pb-10`}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="my-20 flex items-center justify-center gap-3 text-center text-5xl font-['Bebas_Neue'] tracking-widest"
      >
        🎓 {t('Education.head')}
      </motion.h2>

      {/* Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto w-full lg:w-3/4 px-4"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -10,
            scale: 1.02,
            boxShadow: Dark ? '0 20px 40px rgba(255,255,255,0.15)' : '0 20px 40px rgba(0,0,0,0.15)',
          }}
          transition={{ type: 'spring', stiffness: 120 }}
          className={`rounded-2xl w-3/4  mx-auto border p-6 backdrop-blur-md ${
            Dark ? 'border-white/30 bg-white/5 text-white' : 'border-black/20 bg-black/5 text-black'
          }`}
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl">
            <a href="https://www.facebook.com/DTU.MC?locale=ar_AR" target="_blank" rel="noreferrer">
              <motion.img
                src="https://lh3.googleusercontent.com/p/AF1QipMtpv4nAtkBx9UJgRiwQ37gjmf2xcwCeLDGrXsX=s680-w680-h510"
                alt="DTU"
                className="w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </a>
          </motion.div>

          {/* Text */}
          <motion.div variants={itemVariants} className="mt-6 space-y-2">
            <h3 className="text-2xl font-bold tracking-wide">{t('Education.what')}</h3>
            <p className="opacity-80">{t('Education.where')}</p>
            <p className="opacity-60">{t('Education.when')}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Education
