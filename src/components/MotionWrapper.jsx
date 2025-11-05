// components/MotionWrapper.jsx

import { AnimatePresence, motion } from "motion/react"

export default function MotionWrapper({ children, animation, className }) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        animate={animation.animate}
        className={`w-fit ${className}`}
        exit={animation.exit}
        initial={animation.initial}
        style={{ transformOrigin: "center center" }}
        transition={animation.transition}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
