import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  children: ReactNode
}

export function IconButton({ className, label, children, ...props }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={cn(
        'inline-flex size-10 items-center justify-center border border-ink text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-botanical',
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}