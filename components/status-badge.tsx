import { cn } from '@/lib/utils'
import type { ProjectStatus } from '@/lib/site-data'

const statusStyles: Record<ProjectStatus, string> = {
  Built: 'border-primary/40 text-primary',
  'In Development': 'border-amber-500/40 text-amber-400',
  'Research / Planning': 'border-border text-muted-foreground',
}

export function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatus
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border bg-background/40 px-2.5 py-0.5 font-mono text-xs tracking-wide',
        statusStyles[status],
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {status}
    </span>
  )
}
