import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaTools,
  FaJs,
  FaPython,
  FaAws,
  FaDocker,
  FaServer,
  FaPhp,
  FaLaravel,
} from 'react-icons/fa'
import { SiTypescript, SiPostgresql, SiMongodb, SiTailwindcss, SiMysql, SiFirebase, SiExpress, SiNestjs, SiDjango, SiNextdotjs, SiPrisma, SiSupabase, SiGithub } from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ReactNode
  category: 'frontend' | 'backend' | 'tools' | 'database'
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: <FaReact />, category: 'frontend' },
  { name: 'Next.js', icon: <SiNextdotjs />, category: 'frontend' },
  { name: 'TypeScript', icon: <SiTypescript />, category: 'frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'frontend' },
  { name: 'JavaScript', icon: <FaJs />, category: 'frontend' },

  // Backend
  { name: 'Node.js', icon: <FaNode />, category: 'backend' },
  { name: 'Express.js', icon: <SiExpress />, category: 'backend' },
  { name: 'NestJS', icon: <SiNestjs />, category: 'backend' },
  { name: 'PHP', icon: <FaPhp />, category: 'backend' },
  { name: 'Laravel', icon: <FaLaravel />, category: 'backend' },
  { name: 'Python', icon: <FaPython />, category: 'backend' },
  { name: 'Django', icon: <SiDjango />, category: 'backend' },

  // Database
  { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'database' },
  { name: 'MySQL', icon: <SiMysql />, category: 'database' },
  { name: 'MongoDB', icon: <SiMongodb />, category: 'database' },

  // Tools & Version Control
  { name: 'Git', icon: <FaTools />, category: 'tools' },
  { name: 'GitHub', icon: <SiGithub />, category: 'tools' },
  { name: 'Docker', icon: <FaDocker />, category: 'tools' },
  { name: 'AWS', icon: <FaAws />, category: 'tools' },
  { name: 'Firebase', icon: <SiFirebase />, category: 'tools' },
  { name: 'Prisma', icon: <SiPrisma />, category: 'tools' },
  { name: 'Supabase', icon: <SiSupabase />, category: 'tools' },
]

const categories = [
  { id: 'frontend', name: 'Frontend', icon: <FaReact /> },
  { id: 'backend', name: 'Backend', icon: <FaServer /> },
  { id: 'database', name: 'Database', icon: <FaDatabase /> },
  { id: 'tools', name: 'Tools & Version Control', icon: <FaTools /> },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('frontend')

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

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25 scale-105'
                  : 'glass text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {skills
              .filter((skill) => skill.category === activeCategory)
              .map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass-dark p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors group"
                >
                  <div className="text-4xl text-gray-400 group-hover:text-primary-400 transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills


