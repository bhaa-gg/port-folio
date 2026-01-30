import React from 'react'
import cres from '../../assets/Cre/Screenshot (382).png'
import { motion } from 'framer-motion'

import { PiShootingStarLight } from 'react-icons/pi'
import '../../i18next'
import { useTranslation } from 'react-i18next'

const Experince = ({ Dark }) => {
  const { t } = useTranslation()
  const experienceAsArray = t('experience.data', { returnObjects: true })

  return (
    <div>
      <div className={`border-b ${Dark ? 'border-white' : 'border-black'} pb-4`}>
        <h2 className="my-20 text-center font-['Bebas_Neue'] text-5xl flex items-center justify-center ">
          {' '}
          <PiShootingStarLight className="mx-2 " /> {t('experience.head')}
        </h2>
        <div className="">
          {experienceAsArray.map((val, i) => {
            return (
              <div
                key={i}
                className="mb-8 flex items-center gap-y-7 lg:gap-y-0  flex-wrap lg:justify-around"
              >
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ y: -100, opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="w-full lg:w-[40%] rounded-lg "
                >
                  <a
                    href="https://drive.usercontent.google.com/download?id=1pdjW-3arAz26qiFuUB3s6CkNkNB6jcvl&export=download&authuser=0&confirm=t&uuid=c7744abb-9a14-477d-b9cc-6ad9e3201a71&at=APvzH3pfT8YZDdgmc-dKS6MsWnZY:1735236225276"
                    download
                  >
                    <img
                      src={cres}
                      className="w-full rounded-lg hover:scale-105 transition-all "
                      alt="Certificate"
                    />
                  </a>
                </motion.div>
                <motion.div
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`  ${Dark ? 'text-white' : 'text-black'} w-full max-w-xl lg:w-[65%]`}
                >
                  <h6 className={`mb-2 font-semibold ${Dark ? 'text-white' : 'text-black'}`}>
                    {val.role}-{' '}
                    <span className={`text-sm ${Dark ? 'text-white' : 'text-black'} `}>
                      {`${val.company} - ${val.year}`}
                    </span>
                  </h6>
                  <p className={`mb-4 ${Dark ? 'text-white' : 'text-black'}`}>{val.description}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    {val.technologies.map((tecs, is) => (
                      <span className="rounded bg-neutral-900  text-purple-800 p-2" key={is}>
                        {tecs}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experince
