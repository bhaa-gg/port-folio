import React from 'react'
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import '../../i18next'

function Nav({ Dark, setDark }) {
  const { t } = useTranslation()

  return (
    <nav id="ups" className="flex items-center justify-between     py-3">
      <div>
        <h1
          className={` ${!Dark ? 'text-black' : 'text-white'} font-bold text-4xl  cursor-pointer`}
        >
          {t('nav.name')}
        </h1>
      </div>
      <ul className="flex gap-4 items-center justify-center text-2xl text-white  ">
        <li>
          <a target="_blank" href="//www.linkedin.com/in/bhaa-wafy-69005a298">
            <i className={` ${!Dark ? 'text-black' : ''} cursor-pointer fa-brands fa-linkedin`}></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="//github.com/bhaa-gg/">
            <i className={` ${!Dark ? 'text-black' : ''} cursor-pointer fa-brands fa-github`}></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://wa.me/01210031428/">
            <i className={` ${!Dark ? 'text-black' : ''} fa-brands fa-whatsapp`}></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="//bhaatiti281@gmail.com/">
            <i className={` ${!Dark ? 'text-black' : ''} fa-solid fa-envelope`}></i>
          </a>
        </li>
        <li>
          <p
            onClick={() => setDark(!Dark)}
            className={`${!Dark ? 'bg-black' : 'bg-white'} w-5 rounded-full curs-pointer h-5`}
          ></p>
        </li>
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  )
}

export default Nav
