'use client'

import React from 'react'
// Lib
import { motion } from 'framer-motion'

function AboutMe() {
  const animationSettings = {
    initial: { x: -200, opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1
    },
    transition: {
      delay: 0.2,
      //   duration: 0.3,
      ease: 'easeInOut',
      staggerChildren: 0.5
    }
  }
  return (
    <section className="flex-col gap-y-5 inline-flex max-w-[600px] ">
      <motion.div {...animationSettings} className="flex flex-col gap-y-5">
        <motion.h6 className="text-left  font-sans text-6xl font-bold mb-5">About me</motion.h6>

        <motion.p className="text-lg text-slate-500 text-justify">
          I&apos;m a fast learner and team player who values internal communication within teams. My journey into
          software began during my university years, where my interest led me to dive deep into this field. I&apos;ve
          developed several projects, continually aiming to improve myself in the software domain while balancing
          personal growth through swimming, basketball, and stock market analysis.
        </motion.p>
        <motion.p className="text-lg text-slate-500 text-justify">
          Currently, I&apos;m making waves at Sociality.io, an all-in-one social media management platform serving
          enterprise customers globally.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default AboutMe
