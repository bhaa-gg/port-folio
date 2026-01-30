import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../i18next'
import LanguageSwitcher from './../LanguageSwitcher/LanguageSwitcher';

function Nav({ Dark, setDark }) {
  const { t } = useTranslation()

  return (
    <nav id="ups" className="flex items-center justify-between     py-3">
      <div>
        <h1
          className={` ${!Dark ? 'text-black' : 'text-white'} font-bold 
           text-4xl  cursor-pointer`}
        >
          {t('nav.name')}
          <spam className="text-blue-800">.</spam>
        </h1>
      </div>

      <ul className="flex gap-4 items-center justify-center text-2xl text-white  ">
        <li>
          <a
            href="//www.linkedin.com/in/bhaa-wafy-69005a298"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={` ${!Dark ? 'text-black' : ''} cursor-pointer fa-brands fa-linkedin`}></i>
          </a>
        </li>
        <li>
          <a href="//github.com/bhaa-gg/" target="_blank" rel="noopener noreferrer">
            <i className={` ${!Dark ? 'text-black' : ''} cursor-pointer fa-brands fa-github`}></i>
          </a>
        </li>
        <li>
          <a href="https://wa.me/01210031428/" target="_blank" rel="noopener noreferrer">
            <i className={` ${!Dark ? 'text-black' : ''} fa-brands fa-whatsapp`}></i>
          </a>
        </li>

        <li>
          <p
            onClick={() => setDark(!Dark)}
            className={`${!Dark ? 'bg-black' : 'bg-white'} w-5 rounded-full curs-pointer h-5`}
          ></p>
        </li>
        {/* <li>
          <LanguageSwitcher />
        </li> */}
      </ul>
    </nav>
  )
}

export default Nav
