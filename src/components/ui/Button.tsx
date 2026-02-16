'use client'

// Reusable button with sliding-circle hover effect (uiverse.io style).
// Renders as <Link> when `href` is provided, otherwise as <button>.
import { Link } from '@/i18n/navigation'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  showArrow?: boolean
  disabled?: boolean
}

// Rotated arrow icon that spins on hover
const arrow = (
  <svg
    aria-hidden="true"
    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-white text-white ease-linear duration-300 rounded-full border border-[#fd8ebe] group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      className="fill-[#fd8ebe] group-hover:fill-[#fd8ebe]"
    />
  </svg>
)

const base = [
  'inline-flex justify-center gap-2 items-center no-underline',
  'shadow-xl text-sm font-body font-semibold',
  'bg-white/80 text-[#fd8ebe] backdrop-blur-md',
  'border-2 border-white/80 rounded-full',
  'relative z-10 px-5 py-2.5 overflow-hidden isolation-auto',
  'cursor-pointer group',
  // ::before pseudo-element (the sliding circle)
  "before:content-[''] before:absolute before:w-full before:aspect-square",
  'before:rounded-full before:bg-[#fd8ebe]',
  'before:-left-full before:-z-10',
  'before:transition-all before:duration-700',
  // hover states
  'hover:text-white hover:border-[#fd8ebe]',
  'hover:before:left-0 hover:before:scale-150 hover:before:duration-700',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2',
].join(' ')

const disabledStyles = [
  'inline-flex justify-center gap-2 items-center no-underline',
  'text-sm font-body font-semibold',
  'bg-white/40 text-brand-dark/40 backdrop-blur-md',
  'border-2 border-brand-dark/20 rounded-full',
  'px-5 py-2.5 cursor-default',
].join(' ')

export function Button({ children, href, className = '', onClick, type = 'button', showArrow = true, disabled = false }: ButtonProps) {
  if (disabled) {
    return (
      <span className={`${disabledStyles} ${className}`}>
        {children}
      </span>
    )
  }

  const classes = `${base} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {showArrow && arrow}
      </Link>
    )
  }
  return (
    <button className={classes} onClick={onClick} type={type}>
      {children}
      {showArrow && arrow}
    </button>
  )
}
