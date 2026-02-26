import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import livePhoto from '../assets/live photo.png'
import fitnessPhoto from '../assets/intro.jpg'
import powerlinkPhoto from '../assets/powerlik profile.png'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  live: string
  category: 'all' | 'frontend' | 'fullstack'
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Teen Magazine',
    description:
      'A full stack website for a digital magazine',
    image: livePhoto,
    tech: ['Svelte', 'Supabase', 'Github-actions'],
    github: 'https://github.com/birukhabte/teen-magazin.git',
    live: 'https://teen-ethiopia.vercel.app/',
    category: 'fullstack',
  },
  {
    id: 4,
    title: 'Fitness E-commerce site',
    description:
      'fitness e-commerce web application built using Next.js 13, focused on selling fitness-related products such as gym equipment, supplements, and workout accessories. It demonstrates modern full-stack development practices with scalable architecture and optimized performance.',
    image: fitnessPhoto,
    tech: ['Next.js', 'TypeScript', 'MongoDb', 'Tailwind CSS'],
    github: 'https://github.com/birukhabte/Gym_ecommerce.git',
    live: 'https://nextjs-ecommerce-typescript.vercel.app/',
    category: 'fullstack',
  },
  {
    id: 5,
    title: 'Weather App',
    description:
      'A beautiful weather application with location-based forecasts and interactive maps.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800',
    tech: ['React', 'OpenWeather API', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'frontend',
  },

  {
    id: 7,
    title: 'PowerLink Ethiopia',
    description:
      'PowerLink Ethiopia is a web-based platform designed to improve communication between citizens and power service providers in Ethiopia. The system allows users to report power outages, request electrical services, and track the status of their requests in real time, helping reduce delays and improve service transparency.',
    image: powerlinkPhoto,
    tech: ['React', 'Node.js/Express', 'Tailwind CSS', 'Supabase (PostgreSQL)'],
    github: 'https://github.com/birukhabte/Powerlink.git',
    live: 'https://powerlinkethiopiasystem.vercel.app/',
    category: 'fullstack',
  },
]

const categories = [
  { id: 'all', name: 'All' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'fullstack', name: 'Full Stack' },
]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

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
    <section id="projects" ref={ref} className="py-20 sm:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-8" />

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="glass-dark rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-primary-500/20 transition-all"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/90 rounded-lg text-white hover:bg-primary-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/90 rounded-lg text-white hover:bg-primary-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full glass text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects



