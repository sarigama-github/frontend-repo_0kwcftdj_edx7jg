import React from 'react'
import { CreditCard, PiggyBank, ContactlessPayment } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: CreditCard,
    title: '3% interest on Current Account and Spaces',
    desc: 'Grow what you keep — effortless, daily interest.',
  },
  {
    icon: PiggyBank,
    title: 'Multi-currency card with excellent exchange rate',
    desc: 'Spend globally. Save locally. No hidden fees.',
  },
  {
    icon: ContactlessPayment,
    title: 'Digital by default, plastic‑optional, contactless withdrawals',
    desc: 'Modern payments, less plastic, more freedom.',
  },
]

export default function Values() {
  return (
    <section className="relative w-full bg-[#F9F9F9] py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((it, i) => {
          const Icon = it.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 text-teal-700 shadow-inner">
                <Icon className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="text-sm text-gray-600">{it.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
