import React, { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import Button from './Button'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, -15])
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const bgShift = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  useEffect(() => {
    // nothing for now, all with framer-motion transforms
  }, [])

  return (
    <section ref={ref} className="relative min-h-[92vh] w-full overflow-hidden bg-[#0D0D0D]">
      <motion.div
        style={{ backgroundPositionY: bgShift }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_20%,rgba(46,219,166,0.25),transparent),radial-gradient(800px_500px_at_80%_60%,rgba(0,167,142,0.2),transparent)]"
      />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 pt-28 pb-24 sm:px-8 md:pt-36">
        <motion.h1
          style={{ y }}
          className="text-left text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl"
        >
          Banking, your way
        </motion.h1>
        <motion.p style={{ y }} className="max-w-2xl text-lg text-white/80 sm:text-xl">
          100% digital Romanian bank. Open your account in minutes.
        </motion.p>
        <motion.div style={{ rotate }} className="flex flex-wrap items-center gap-4">
          <Button>
            Get started
          </Button>
          <Button variant="secondary">Learn more</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-64 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
    </section>
  )
}
