'use client'

import { motion, useReducedMotion } from 'framer-motion'

type Props = { children: React.ReactNode; className?: string; delay?: number }

export default function Reveal({ children, className, delay = 0 }: Props) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
