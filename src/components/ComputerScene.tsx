import { motion } from 'framer-motion'

const ComputerScene = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-8xl mb-4"
          animate={{ 
            rotateY: [0, 10, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💻
        </motion.div>
        <motion.div
          className="text-xl futura-heading text-neon mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Full-Stack Developer
        </motion.div>
        <motion.div
          className="text-sm text-gray-400 futura-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Building modern web experiences
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ComputerScene