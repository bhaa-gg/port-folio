import React, { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next";
import '../../i18next';


export function LanguageSwitcher() {
  const { i18n ,t } = useTranslation();
  const languages = t("nav.lang", { returnObjects: true });


  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState("en")
  const dropdownRef = useRef(null)

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode)
    setCurrentLang(langCode)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative text-black" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-[150px] px-4 py-2 text-sm bg-white border rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {languages.find((lang) => lang.code === currentLang)?.name}
        <svg
          className={`ml-2 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[150px] bg-white border rounded-md shadow-lg z-10">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                role="menuitem"
              >
                {language.name}
                {currentLang === language.code && (
                  <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

