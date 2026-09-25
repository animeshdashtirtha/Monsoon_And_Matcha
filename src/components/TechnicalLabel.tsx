import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export function TechnicalLabel({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'font-technical text-[0.68rem] leading-none tracking-[0.14em] text-sesame uppercase',
        className,
      )}
      {...props}
    />
  )
}