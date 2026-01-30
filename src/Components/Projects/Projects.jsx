import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import VideoComponent from '../VideoComponent/VideoComponent '
import Slider from 'react-slick'
import { BiSolidVideos } from 'react-icons/bi'
import '../../i18next'
import { useTranslation } from 'react-i18next'

const Projects = ({ Dark }) => {
  const { t, i18n } = useTranslation()

  const my_PROJECTS = t('Projects.data.front', { returnObjects: true })
  const my_backEnd = t('Projects.data.back', { returnObjects: true })
  const my_All = t('Projects.data.all', { returnObjects: true })
  const my_PROJECTSVideos = t('Projects.data.PROJECTSVideos', { returnObjects: true })

  const [Projects, setProjects] = useState(my_PROJECTS)

  const settings = {
    className: 'center',
    infinite: true,
    fade: true,
    waitForAnimate: false,
    slidesToShow: 1,
    speed: 500,
  }

  useEffect(() => {
    setProjects(my_PROJECTS)
  }, [i18n.language ])

  return (
    <div className={`border-b ${Dark ? 'border-white' : 'border-black'} pb-4`}>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {t('Projects.head')}
      </motion.h2>
      <div className="">
        <div className="flex mb-5 items-center justify-center">
          <ul className="mb-5 p-2 flex gap-4 items-center justify-center text-2xl text-white ">
            <li
              onClick={() => setProjects(my_PROJECTS)}
              className={`cursor-pointer transition-all py-1 px-2 rounded ${
                Dark
                  ? Projects[0].type.toLowerCase() === 'front'
                    ? 'bg-gray-700 text-blue-400'
                    : 'text-gray-200 hover:bg-gray-800'
                  : Projects[0].type.toLowerCase() === 'front'
                    ? 'bg-white text-blue-500'
                    : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              {t('Projects.front')}
            </li>

            <li
              onClick={() => setProjects(my_backEnd)}
              className={`cursor-pointer transition-all py-1 px-2 rounded ${
                Dark
                  ? Projects[0].type.toLowerCase() === 'back'
                    ? 'bg-gray-700 text-blue-400'
                    : 'text-gray-200 hover:bg-gray-800'
                  : Projects[0].type.toLowerCase() === 'back'
                    ? 'bg-white text-blue-500'
                    : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              {t('Projects.back')}
            </li>

            <li
              onClick={() => setProjects(my_All)}
              className={`cursor-pointer transition-all py-1 px-2 rounded ${
                Dark
                  ? Projects[0].type.toLowerCase() === 'all'
                    ? 'bg-gray-700 text-blue-400'
                    : 'text-gray-200 hover:bg-gray-800'
                  : Projects[0].type.toLowerCase() === 'all'
                    ? 'bg-white text-blue-500'
                    : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              {t('Projects.all')}
            </li>
          </ul>
        </div>
        {Projects?.length ? (
          Projects?.map((val, i) => (
            <div key={i} className="mb-8 flex flex-wrap lg:justify-center ">
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className=" haveHover w-full overflow-hidden lg:me-10 lg:w-[46%]    "
              >
                <a href={val.demo} rel="noreferrer" target="_blank">
                  <img
                    src={val.image}
                    className="w-full m-auto mb-6 rounded-md xl:m-0 hover:scale-105 transition-all   "
                    alt={val.title}
                  />
                </a>
              </motion.div>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="w-full   max-w-xl lg:w-[46%] "
              >
                <h6 className={`mb-2 ${Dark ? 'text-white' : 'text-black'}   font-semibold`}>
                  {val.title}
                </h6>
                <p className={` ${Dark ? 'text-white' : 'text-black'} mb-4 `}>{val.description}</p>
                <div className="flex flex-wrap items-center gap-4">
                  {val.technologies.map((tecs, is) => (
                    <div className="rounded bg-neutral-900  text-purple-800 p-2" key={is}>
                      {tecs}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))
        ) : (
          <h1>No Projects Now</h1>
        )}
      </div>
      {i18n.language == 'en' && (
        <div className="">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="my-20 border-b flex items-center justify-center  pb-5 text-4xl"
          >
            {t('Projects.OtherProjects')} <BiSolidVideos className="mx-2" />
          </motion.h2>
          <Slider {...settings}>
            {my_PROJECTSVideos.map((vi, i) => (
              <VideoComponent key={i} title={vi.title} src={vi.src} />
            ))}
          </Slider>
        </div>
      )}
    </div>
  )
}

export default Projects
