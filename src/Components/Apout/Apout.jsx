import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { FaLaptopCode } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import '../../i18next'

function About({ Dark }) {
  const { t } = useTranslation()
  const ref = useRef(null)

  // Motion values
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth spring motion
  const smoothX = useSpring(x, { stiffness: 150, damping: 20 })
  const smoothY = useSpring(y, { stiffness: 150, damping: 20 })

  // Soft 3D rotation
  const rotateX = useTransform(smoothY, [-120, 120], [10, -10])
  const rotateY = useTransform(smoothX, [-120, 120], [-10, 10])

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()

    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section
      id="About"
      className={`border-b pb-8 lg:mb-36 ${
        Dark ? 'border-white/20 text-white' : 'border-black/10 text-black'
      }`}
    >
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -80, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl flex items-end justify-center gap-2"
      >
        <FaLaptopCode />
        {t('About.head.about')}
        <span className="text-neutral-500">{t('About.head.me')}</span>
      </motion.h2>

      <div className="flex flex-wrap items-center justify-between gap-10">
        {/* Tilt Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full group   lg:w-[40%] flex justify-center perspective-[1400px]"
        >
          <motion.img
            src="https://res.cloudinary.com/dlzkz7mdq/image/upload/v1769728472/o_jxkpdg.png"
            alt="ABOUT"
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 15,
            }}
            className="
            group-hover:shadow-md
            transition-all
            group-hover:shadow-white
              rounded-3xl
              w-[400px] h-[500px]
              sm:h-[650px]
              border-8
              border-white
              shadow-2xl
              will-change-transform
            "
          />
        </motion.div>

        {/* Text */}
        <div className="w-full lg:w-1/2">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 80, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`
              max-w-xl text-xl leading-relaxed py-6
              ${Dark ? 'text-gray-300' : 'text-gray-700'}
            `}
          >
            {t('About.title')}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default About
