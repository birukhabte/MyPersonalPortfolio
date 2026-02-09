import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase, FiBook } from 'react-icons/fi'

interface TimelineItem {
  id: number
  type: 'experience' | 'education'
  title: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    type: 'experience',
    title: 'Frontend Developer',
    company: 'Remote Client',
    location: 'Remote',
    period: '05/2024 – 06/2024',
    description: [
      'Developed responsive and high-performance web interfaces using React.js, Tailwind CSS, and modern JavaScript (ES6+)',
      'Collaborated remotely with international clients to translate UI/UX designs into functional components',
      'Implemented smooth animations and interactions using Framer Motion',
      'Optimized applications for performance, accessibility, and cross-browser compatibility',
      'Integrated frontend components with REST APIs and backend services',
      'Maintained clean, reusable, and scalable component-based architecture',
    ],
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
  },
  {
    id: 2,
    type: 'experience',
    title: 'Full-Stack Developer',
    company: 'Startup XYZ',
    location: 'San Francisco, CA',
    period: '2020 - 2022',
    description: [
      'Built and maintained multiple client-facing applications',
      'Implemented RESTful APIs and database schemas',
      'Optimized application performance and reduced load times by 40%',
    ],
    skills: ['JavaScript', 'Express.js', 'PostgreSQL', 'Docker', 'Git'],
  },
  {
    id: 3,
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    company: 'University Name',
    location: 'City, State',
    period: '2016 - 2020',
    description: [
      'Graduated with honors (GPA: 3.8/4.0)',
      'Relevant coursework: Data Structures, Algorithms, Database Systems',
      'Senior project: Developed a real-time collaboration platform',
    ],
    skills: ['Java', 'Python', 'C++', 'Data Structures', 'Algorithms'],
  },
  {
    id: 4,
    type: 'education',
    title: 'Web Development Bootcamp',
    company: 'Coding Bootcamp',
    location: 'Online',
    period: '2019',
    description: [
      'Intensive 12-week program covering full-stack development',
      'Built 5+ projects using modern web technologies',
      'Learned agile development methodologies',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
  },
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-500 transform md:-translate-x-1/2" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-4 h-4 rounded-full bg-primary-500 border-4 border-gray-900" />
                    </div>

                    {/* Content Card */}
                    <div
                      className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                        }`}
                    >
                      <motion.div
                        className="glass-dark rounded-2xl p-6 hover:bg-white/5 transition-all"
                        whileHover={{ scale: 1.02, y: -4 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`p-3 rounded-lg ${item.type === 'experience'
                              ? 'bg-primary-500/20 text-primary-400'
                              : 'bg-purple-500/20 text-purple-400'
                              }`}
                          >
                            {item.type === 'experience' ? (
                              <FiBriefcase size={24} />
                            ) : (
                              <FiBook size={24} />
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-200 mb-1">
                              {item.title}
                            </h3>
                            <p className="text-primary-400 font-medium mb-1">
                              {item.company}
                            </p>
                            <p className="text-sm text-gray-400 mb-2">
                              {item.location} • {item.period}
                            </p>
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {item.description.map((desc, idx) => (
                            <li
                              key={idx}
                              className="text-gray-300 text-sm flex items-start gap-2"
                            >
                              <span className="text-primary-400 mt-1.5">▹</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700/50">
                          {item.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

