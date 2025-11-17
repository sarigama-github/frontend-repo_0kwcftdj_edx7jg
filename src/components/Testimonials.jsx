import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'The onboarding was unbelievably fast. Finally a bank that feels modern.',
    name: 'Andrei P.',
  },
  {
    quote: 'Love the Spaces and the clean UI. Saving actually feels easy.',
    name: 'Ioana C.',
  },
  {
    quote: 'Multi-currency card saved me money while traveling. Great rates.',
    name: 'Mihai L.',
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">What founders say</h2>
          <p className="mt-2 text-gray-600">Early members share their first impressions.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative rounded-2xl bg-[#F9FAFB] p-6 shadow-sm ring-1 ring-black/5"
            >
              <div className="mb-3 text-6xl leading-none text-emerald-400">“</div>
              <p className="text-gray-800">{t.quote}</p>
              <div className="mt-4 text-sm font-medium text-gray-600">{t.name}</div>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 opacity-70">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-8" />
          <img src="https://images.unsplash.com/photo-1614260938313-a7fc1a7ad0d2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXYWxsZXR8ZW58MHwwfHx8MTc2MzM5MzAxMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Wallet" className="h-8" />
          <img src="https://images.unsplash.com/photo-1545987796-200677ee1011?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZXR3b3JrfGVufDB8MHx8fDE3NjMzOTMwMTJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Network" className="h-6" />
        </div>
      </div>
    </section>
  )
}
