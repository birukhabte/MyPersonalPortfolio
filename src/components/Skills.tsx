import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaTools,
  FaJs,
  FaPython,
  FaAws,
  FaDocker,
} from 'react-icons/fa'
import { SiTypescript, SiPostgresql, SiMongodb, SiTailwindcss } from 'react-icons/si'

interface Skill {
  name: string
  level: number
  icon: React.ReactNode
  category: 'frontend' | 'backend' | 'tools'
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, icon: <FaReact />, category: 'frontend' },
  { name: 'TypeScript', level: 85, icon: <SiTypescript />, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss />, category: 'frontend' },
  { name: 'JavaScript', level: 88, icon: <FaJs />, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, icon: <FaNode />, category: 'backend' },
  { name: 'PostgreSQL', level: 80, icon: <SiPostgresql />, category: 'backend' },
  { name: 'MongoDB', level: 75, icon: <SiMongodb />, category: 'backend' },
  { name: 'Python', level: 70, icon: <FaPython />, category: 'backend' },
  
  // Tools
  { name: 'Docker', level: 75, icon: <FaDocker />, category: 'tools' },
  { name: 'AWS', level: 70, icon: <FaAws />, category: 'tools' },
  { name: 'Git', level: 85, icon: <FaTools />, category: 'tools' },
]

const categories = [
  { id: 'frontend', name: 'Frontend', icon: <FaReact /> },
  { id: 'backend', name: 'Backend', icon: <FaDatabase /> },
  { id: 'tools', name: 'Tools', icon: <FaTools /> },
]

const Skills = () => {
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
    <section id="skills" ref={ref} className="py-20 sm:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-12">
            {categories.map((category) => {
              const categorySkills = skills.filter(
                (skill) => skill.category === category.id
              )

              return (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  className="glass-dark rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-2xl text-primary-400">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-200">
                      {category.name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="glass rounded-lg p-4 hover:bg-white/10 transition-all"
                        whileHover={{ scale: 1.05, y: -4 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-xl text-primary-400">
                            {skill.icon}
                          </div>
                          <span className="font-semibold text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={
                              isInView ? { width: `${skill.level}%` } : { width: 0 }
                            }
                            transition={{
                              duration: 1,
                              delay: index * 0.1 + 0.3,
                              ease: 'easeOut',
                            }}
                          />
                        </div>
                        <span className="text-sm text-gray-400 mt-1 block text-right">
                          {skill.level}%
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills


