import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Tag({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <li
      className={cn(
        'rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-foreground/90',
        className,
      )}
    >
      {children}
    </li>
  )
}

export function TagList({
  items,
  className,
}: {
  items: string[]
  className?: string
}) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  )
}
