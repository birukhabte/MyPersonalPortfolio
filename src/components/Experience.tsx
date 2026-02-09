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
    skills: ['React.js', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'REST APIs'],
  },
  {
    id: 2,
    type: 'experience',
    title: 'Full-Stack Developer',
    company: 'Orizen Technology',
    location: '',
    period: '03/2024 – 09/2025',
    description: [
      'Built and maintained web and mobile applications, working across front-end and back-end systems to deliver scalable, high-performance solutions',
      'Developed responsive user interfaces using modern front-end frameworks and implemented robust backend APIs and database solutions',
      'Collaborated with designers and backend engineers to create seamless experiences for users and optimize business processes',
      'Integrated third-party services, implemented authentication systems, and optimized application performance for better user experience',
    ],
    skills: ['React', 'Node.js', "Express", 'MongoDb', 'TypeScript',],
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Experience Column */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-200 mb-6 flex items-center gap-2">
                <FiBriefcase className="text-primary-400" />
                Experience
              </h3>
              <div className="space-y-6">
                {timelineItems
                  .filter((item) => item.type === 'experience')
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      className="glass-dark rounded-2xl p-6 hover:bg-white/5 transition-all"
                      whileHover={{ scale: 1.02, y: -4 }}
                    >
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-gray-200 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-primary-400 font-medium mb-1">
                          {item.company}
                        </p>
                        <p className="text-sm text-gray-400 mb-2">
                          {item.location} • {item.period}
                        </p>
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
                  ))}
              </div>
            </div>

            {/* Education Column */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-200 mb-6 flex items-center gap-2">
                <FiBook className="text-purple-400" />
                Education
              </h3>
              <div className="space-y-6">
                {timelineItems
                  .filter((item) => item.type === 'education')
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      className="glass-dark rounded-2xl p-6 hover:bg-white/5 transition-all"
                      whileHover={{ scale: 1.02, y: -4 }}
                    >
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-gray-200 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-purple-400 font-medium mb-1">
                          {item.company}
                        </p>
                        <p className="text-sm text-gray-400 mb-2">
                          {item.location} • {item.period}
                        </p>
                      </div>

                      <ul className="space-y-2">
                        {item.description.map((desc, idx) => (
                          <li
                            key={idx}
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <span className="text-purple-400 mt-1.5">▹</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700/50">
                        {item.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                          >
                            {skill}
                          </span>
                        ))}
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

