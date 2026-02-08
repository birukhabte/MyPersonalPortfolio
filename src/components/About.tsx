import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import aboutImage from '../assets/image.png'

const techStack = [
  'React',
  'Node.js',
  'PostgreSQL',
  'TypeScript',
  'Next.js',
  'Express',
  'MongoDB',
  'Tailwind CSS',
  'Docker',
  'AWS',
  'Git',
  'GraphQL',
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-12">
            {/* Image - Left Side */}
            <motion.div
              variants={itemVariants}
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.img
                  src={aboutImage}
                  alt="Profile"
                  className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-2xl border-2 border-primary-500/30 shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </motion.div>
            </motion.div>

            {/* Text Content - Right Side */}
            <motion.div
              variants={itemVariants}
              className="flex-1 glass-dark rounded-2xl p-8 sm:p-10"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full-Stack Developer with a strong foundation
                in modern web technologies. I specialize in building scalable,
                performant applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                With expertise in both frontend and backend development, I create
                seamless user experiences while ensuring robust, maintainable code.
                I'm always eager to learn new technologies and take on challenging
                projects.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new frameworks,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-200">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 glass rounded-lg text-sm font-medium text-gray-300 hover:text-primary-400 hover:bg-white/10 transition-all cursor-default"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ delay: index * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

