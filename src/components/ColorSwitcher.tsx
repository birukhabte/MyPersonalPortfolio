import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSettings } from 'react-icons/fi'

interface ColorOption {
  name: string
  color: string
  gradient: string
}

const colorOptions: ColorOption[] = [
  {
    name: 'red',
    color: '#de302f',
    gradient: 'linear-gradient(135deg, #de302f 0%, #8B0000 100%)'
  },
  {
    name: 'orange',
    color: '#f76d2b',
    gradient: 'linear-gradient(135deg, #f76d2b 0%, #FF4500 100%)'
  },
  {
    name: 'blue',
    color: '#228dcb',
    gradient: 'linear-gradient(135deg, #228dcb 0%, #0A065D 100%)'
  },
  {
    name: 'pink',
    color: '#FF2761',
    gradient: 'linear-gradient(135deg, #FF2761 0%, #C71585 100%)'
  },
  {
    name: 'green',
    color: '#2dcc70',
    gradient: 'linear-gradient(135deg, #2dcc70 0%, #006400 100%)'
  },
  {
    name: 'purple',
    color: '#6054c2',
    gradient: 'linear-gradient(135deg, #6054c2 0%, #4B0082 100%)'
  },
  {
    name: 'default',
    color: '#915B4A',
    gradient: 'linear-gradient(135deg, #915B4A 0%, #0A065D 100%)'
  }
]

const ColorSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('default')

  useEffect(() => {
    // Set initial theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'default'
    setCurrentTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  const applyTheme = (themeName: string) => {
    const theme = colorOptions.find(option => option.name === themeName)
    if (theme) {
      // Update CSS custom property
      document.documentElement.style.setProperty('--bg-gradient', theme.gradient)
      
      // Also update body style as fallback
      document.body.style.background = theme.gradient
      
      // Update the main app div
      const appDiv = document.querySelector('.min-h-screen')
      if (appDiv) {
        (appDiv as HTMLElement).style.background = theme.gradient
      }
    }
  }

  const handleColorChange = (themeName: string) => {
    setCurrentTheme(themeName)
    applyTheme(themeName)
    localStorage.setItem('portfolio-theme', themeName)
    setIsOpen(false)
  }

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <motion.div
        className="relative"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-gray-800/80 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 transition-colors shadow-lg border border-gray-600/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiSettings 
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            size={20} 
          />
        </motion.button>

        {/* Color Options Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute right-16 top-0 bg-gray-800/90 backdrop-blur-md rounded-lg p-3 shadow-xl border border-gray-600/50"
            >
              <div className="flex flex-col gap-2">
                <p className="text-xs text-gray-300 mb-2 font-medium">Background Colors</p>
                {colorOptions.map((option) => (
                  <motion.button
                    key={option.name}
                    onClick={() => handleColorChange(option.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-colors shadow-md ${
                      currentTheme === option.name 
                        ? 'border-white ring-2 ring-white/50' 
                        : 'border-gray-600 hover:border-white'
                    }`}
                    style={{ background: option.color }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={`Switch to ${option.name} theme`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default ColorSwitcher