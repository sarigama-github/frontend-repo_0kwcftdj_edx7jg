import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Showcase() {
  const { scrollY } = useScroll()
  const rotate = useTransform(scrollY, [0, 1000], [-8, 8])
  const y = useTransform(scrollY, [0, 1000], [0, -60])

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_20%,rgba(46,219,166,0.12),transparent)]" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Everything you need. More than a bank.</h2>
          <p className="mt-3 max-w-2xl text-gray-600">One app for everyday money, savings and cards — designed to feel effortless.</p>
        </div>

        <div className="relative mt-8 h-[520px] w-full max-w-4xl">
          <motion.div style={{ rotate, y }} className="relative mx-auto h-full w-[280px] sm:w-[320px]">
            <div className="absolute inset-0 rounded-[36px] bg-gray-900 shadow-2xl ring-8 ring-black/5" />
            <div className="absolute inset-[10px] rounded-[28px] overflow-hidden bg-white">
              {/* Mock screens */}
              <div className="absolute inset-0 animate-[fade_12s_ease-in-out_infinite]">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYXNoYm9hcmR8ZW58MHwwfHx8MTc2MzM5MzAxMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Dashboard" className="h-full w-full object-cover" />
              </div>
              <div className="absolute inset-0 animate-[fade_12s_ease-in-out_infinite_4s]">
                <img src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1200&auto=format&fit=crop" alt="Savings" className="h-full w-full object-cover" />
              </div>
              <div className="absolute inset-0 animate-[fade_12s_ease-in-out_infinite_8s]">
                <img src="https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1200&auto=format&fit=crop" alt="Card details" className="h-full w-full object-cover" />
              </div>
            </div>
          </motion.div>
          <div className="pointer-events-none absolute -inset-x-8 -bottom-16 h-48 bg-gradient-to-t from-white" />
        </div>
      </div>
      <style>{`
        @keyframes fade { 0%,33%{opacity:1} 40%,93%{opacity:0} 100%{opacity:1} }
      `}</style>
    </section>
  )
}
