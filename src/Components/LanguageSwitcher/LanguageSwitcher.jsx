import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../i18next'

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const languages = t('nav.lang', { returnObjects: true })

  const [, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <select
      onChange={handleChange}
      value={i18n.language}
      className="px-3 py-2 text-sm border rounded-md bg-white text-black 
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  )
}
