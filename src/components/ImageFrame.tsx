import type { ImgHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type ImageFrameProps = ImgHTMLAttributes<HTMLImageElement> & {
  caption?: string
}

export function ImageFrame({ caption, className, ...props }: ImageFrameProps) {
  return (
    <figure className="m-0">
      <div className="overflow-hidden border border-ink/15 bg-deep-slate p-2">
        <img className={cn('block aspect-[4/3] w-full object-cover', className)} {...props} />
      </div>
      {caption ? (
        <figcaption className="mt-3 font-technical text-[0.65rem] tracking-[0.12em] text-sesame/70 uppercase">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}