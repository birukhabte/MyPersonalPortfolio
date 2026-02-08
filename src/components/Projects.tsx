import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  live: string
  category: 'all' | 'frontend' | 'fullstack' | 'backend'
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and drag-and-drop functionality.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
    tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'frontend',
  },
  {
    id: 3,
    title: 'REST API Service',
    description:
      'A scalable REST API built with Node.js and Express, featuring authentication and rate limiting.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'backend',
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description:
      'A modern dashboard for managing social media accounts with analytics and scheduling features.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    tech: ['Next.js', 'TypeScript', 'Chart.js', 'Prisma'],
    github: 'https://github.com',
    live: 'https://example.com',
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
    id: 6,
    title: 'Microservices Architecture',
    description:
      'A distributed system with multiple microservices communicating via message queues.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    tech: ['Node.js', 'Docker', 'RabbitMQ', 'Kubernetes'],
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'backend',
  },
]

const categories = [
  { id: 'all', name: 'All' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'backend', name: 'Backend' },
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
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    activeCategory === category.id
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
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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


