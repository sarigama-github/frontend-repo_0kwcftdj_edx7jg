import React from 'react'
import Button from './Button'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D0D] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_10%,rgba(46,219,166,0.25),transparent)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-semibold sm:text-5xl">Become a Founder. Join the digital banking revolution.</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">Be among the first to experience Salt — a premium, digital‑first bank built for Romania.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button>Open your account now</Button>
          <Button variant="secondary">Why become a founder?</Button>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-t from-[#0D0D0D]" />
    </section>
  )
}
