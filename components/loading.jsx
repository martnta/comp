import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  const spinnerVariants = {
    start: {
      rotate: 0,
    },
    end: {
      rotate: 360,
    },
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-12 h-12 border-t-4 border-red-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}

export default LoadingSpinner