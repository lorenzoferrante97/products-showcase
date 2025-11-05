const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: "easeOut" },
}

const slideInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.4, ease: "easeOut" },
}

const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: { duration: 0.4, ease: "easeOut" },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.3, ease: "easeOut" },
}

const rotateIn = {
  initial: { opacity: 0, rotate: -10 },
  animate: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: -10 },
  transition: { duration: 0.4, ease: "easeOut" },
}

const popIn = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: [1.2, 0.95, 1] },
  exit: { opacity: 0, scale: 0.5 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const swingIn = {
  initial: { opacity: 0, rotate: -45, scale: 0.8 },
  animate: { opacity: 1, rotate: [15, -10, 5, 0], scale: 1 },
  exit: { opacity: 0, rotate: -45, scale: 0.8 },
  transition: { duration: 0.7, ease: "easeOut" },
}

const bounceFade = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: [0, -10, 0] },
  exit: { opacity: 0, y: -40 },
  transition: { type: "spring", stiffness: 150, damping: 12, duration: 0.8 },
}

export { fadeIn, slideInUp, slideInLeft, scaleIn, rotateIn, popIn, swingIn, bounceFade }
