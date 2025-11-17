import React, { useRef } from 'react'
import { cn } from '../utils/cn'

export default function Button({
  children,
  variant = 'primary',
  className,
  as: Comp = 'button',
  ...props
}) {
  const btnRef = useRef(null)

  const handleClick = (e) => {
    const button = btnRef.current
    if (!button) return
    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.clientX - (button.getBoundingClientRect().left + radius)}px`
    circle.style.top = `${e.clientY - (button.getBoundingClientRect().top + radius)}px`
    circle.classList.add('ripple')

    const ripple = button.getElementsByClassName('ripple')[0]

    if (ripple) {
      ripple.remove()
    }

    button.appendChild(circle)

    if (props.onClick) props.onClick(e)
  }

  const variants = {
    primary:
      'bg-gradient-to-r from-emerald-400 to-teal-500 text-black hover:from-emerald-300 hover:to-teal-400 shadow-lg shadow-emerald-500/20',
    secondary:
      'bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur',
    outline:
      'border border-emerald-400/60 text-emerald-300 hover:bg-emerald-400/10'
  }

  return (
    <Comp
      ref={btnRef}
      onClick={handleClick}
      className={cn(
        'relative overflow-hidden rounded-full px-6 py-3 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        variants[variant] || variants.primary,
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Comp>
  )
}
