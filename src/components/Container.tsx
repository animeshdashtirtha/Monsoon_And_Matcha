import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  narrow?: boolean
}

export function Container({ className, narrow = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 sm:px-8 lg:px-12',
        narrow ? 'max-w-4xl' : 'max-w-7xl',
        className,
      )}
      {...props}
    />
  )
}