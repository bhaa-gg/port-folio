import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
]

const LanguageSwitcher = ({ Dark }) => {
  const { i18n } = useTranslation()
  const current = i18n.language

  const changeLang = (lang) => {
    if (lang !== current) {
      i18n.changeLanguage(lang)
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    }
  }

  return (
    <div
      className={`
        relative flex items-center gap-1 p-1 rounded-full
        backdrop-blur-xl border shadow-lg
        bg-white border-white/20 shadow-white/5
      `}
    >
      {/* Sliding active indicator */}
      <motion.div
        layout
        transition={{
          type: 'spring',
          stiffness: 350,
          damping: 30,
        }}
        className={`
          absolute inset-y-1 w-[48%] rounded-full
          ${Dark ? 'bg-white/20' : 'bg-black/10'}
        `}
        style={{
          left: '4px',
        }}
      />

      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => changeLang(lang.code)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={`
            relative z-10 px-4 py-1.5 text-sm font-semibold rounded-full
            transition-colors duration-300
            ${
              current !== lang.code
                ? 'text-gray-300 hover:text-gray-600'
                : 'text-gray-600 hover:text-black'
            }
          `}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
