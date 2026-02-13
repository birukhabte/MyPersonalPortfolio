import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'Biruk Habte'

  useEffect(() => {
    let currentIndex = 0
    let timeoutId: number

    const typeLetter = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
        timeoutId = setTimeout(typeLetter, 100)
      } else {
        // Wait 2 seconds before restarting
        setTimeout(() => {
          currentIndex = 0
          setDisplayedText('')
          typeLetter()
        }, 2000)
      }
    }

    typeLetter()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [fullText])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const handleDownloadCV = () => {
    // Replace with your actual CV URL
    const cvUrl = '/cv.pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'file:///C:/Users/Biruk/Downloads/Biruk-Habte-FlowCV-Resume-20260213.pdf'
    link.click()
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-gray-900 to-gray-900">
        {/* Spider Web Pattern */}
        <div className="spider-web spider-web-animated"></div>

        {/* Spider Web SVGs */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" style={{ pointerEvents: 'none' }}>
          {/* Spider Web 1 - Top Left */}
          <g transform="translate(10%, 15%)">
            <line x1="0" y1="0" x2="150" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="150" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-100" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-150" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-100" y2="-100" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="-150" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="100" y2="-100" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <circle cx="0" cy="0" r="2" fill="rgba(255,255,255,0.5)" />
            <circle cx="0" cy="0" r="50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <circle cx="0" cy="0" r="100" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          </g>

          {/* Spider Web 2 - Top Right */}
          <g transform="translate(85%, 20%)">
            <line x1="0" y1="0" x2="120" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="80" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-80" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-120" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-80" y2="-80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="-120" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="80" y2="-80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <circle cx="0" cy="0" r="2" fill="rgba(255,255,255,0.5)" />
            <circle cx="0" cy="0" r="40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <circle cx="0" cy="0" r="80" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          </g>

          {/* Spider Web 3 - Bottom Left */}
          <g transform="translate(15%, 75%)">
            <line x1="0" y1="0" x2="130" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="90" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="130" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-90" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-130" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-90" y2="-90" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="-130" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="90" y2="-90" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <circle cx="0" cy="0" r="2" fill="rgba(255,255,255,0.5)" />
            <circle cx="0" cy="0" r="45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <circle cx="0" cy="0" r="90" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          </g>

          {/* Spider Web 4 - Bottom Right */}
          <g transform="translate(80%, 80%)">
            <line x1="0" y1="0" x2="110" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="75" y2="75" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="110" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-75" y2="75" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-110" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-75" y2="-75" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="-110" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="0" x2="75" y2="-75" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <circle cx="0" cy="0" r="2" fill="rgba(255,255,255,0.5)" />
            <circle cx="0" cy="0" r="37" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <circle cx="0" cy="0" r="75" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          </g>

          {/* Spider Web 5 - Center */}
          <g transform="translate(50%, 50%)">
            <line x1="0" y1="0" x2="140" y2="0" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="140" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-100" y2="100" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-140" y2="0" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-100" y2="-100" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="-140" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <line x1="0" y1="0" x2="100" y2="-100" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <circle cx="0" cy="0" r="2" fill="rgba(255,255,255,0.4)" />
            <circle cx="0" cy="0" r="50" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
            <circle cx="0" cy="0" r="100" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <circle cx="0" cy="0" r="140" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </g>
        </svg>

        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span
              className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Full-Stack Developer
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Hi, I'm{' '}
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {displayedText}
              {showCursor && <span className="animate-pulse">|</span>}
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I build beautiful, functional, and scalable web applications that
            deliver exceptional user experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              onClick={() => {
                const projects = document.querySelector('#projects')
                projects?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-semibold text-white flex items-center gap-2 hover:shadow-lg hover:shadow-primary-500/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={handleDownloadCV}
              className="group px-8 py-4 glass rounded-lg font-semibold text-white flex items-center gap-2 hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />
              Download CV
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg text-gray-400 hover:text-primary-400 hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg text-gray-400 hover:text-primary-400 hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              className="p-3 glass rounded-lg text-gray-400 hover:text-primary-400 hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

