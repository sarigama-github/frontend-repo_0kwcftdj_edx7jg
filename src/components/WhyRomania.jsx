import React from 'react'
import { motion } from 'framer-motion'

export default function WhyRomania() {
  return (
    <section className="relative overflow-hidden bg-[#F9F9F9] py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-5xl">Built for Romania. Built for you.</h2>
          <p className="mt-4 text-gray-700">We’re Romania’s first 100% digital bank. Open. Fast. Fair. We bring powerful features with a premium, minimalist experience — so you can do more with your money.</p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Local IBANs. Global reach.</li>
            <li>• Instant payments and savings Spaces.</li>
            <li>• Contactless ATM withdrawals and digital wallets.</li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative h-[360px] w-full">
            <img
              src="https://images.unsplash.com/photo-1649979303673-27ee99a81fcb?q=80&w=1400&auto=format&fit=crop"
              alt="Happy diverse users"
              className="h-full w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/10" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
