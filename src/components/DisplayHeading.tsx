import type { ElementType, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type DisplayHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: Extract<ElementType, 'h1' | 'h2' | 'h3'>
}

export function DisplayHeading({ as: Heading = 'h2', className, ...props }: DisplayHeadingProps) {
  return (
    <Heading
      className={cn(
        'font-editorial text-5xl leading-[0.95] tracking-[-0.045em] text-ink sm:text-7xl',
        className,
      )}
      {...props}
    />
  )
}