import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type GridLinesProps = HTMLAttributes<HTMLDivElement> & {
  columns?: number
  rows?: number
}

export function GridLines({ className, columns = 4, rows = 3, ...props }: GridLinesProps) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0', className)} {...props}>
      {Array.from({ length: columns - 1 }, (_, index) => (
        <span
          className="absolute inset-y-0 border-l border-ink/10"
          key={`column-${index}`}
          style={{ left: `${((index + 1) / columns) * 100}%` }}
        />
      ))}
      {Array.from({ length: rows - 1 }, (_, index) => (
        <span
          className="absolute inset-x-0 border-t border-ink/10"
          key={`row-${index}`}
          style={{ top: `${((index + 1) / rows) * 100}%` }}
        />
      ))}
    </div>
  )
}