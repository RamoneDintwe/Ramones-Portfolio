import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Eyebrow({
  as: Component = 'span',
  className,
  children,
}: {
  as?: ElementType
  className?: string
  children: ReactNode
}) {
  return (
    <Component
      className={cn(
        'font-mono text-xs tracking-widest text-primary uppercase',
        className,
      )}
    >
      {children}
    </Component>
  )
}
