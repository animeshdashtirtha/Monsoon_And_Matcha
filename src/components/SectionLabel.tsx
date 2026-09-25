import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export function SectionLabel({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'font-technical text-[0.68rem] tracking-[0.18em] text-botanical uppercase',
        className,
      )}
      {...props}
    />
  )
}