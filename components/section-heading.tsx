import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  index: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({
  index,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-primary uppercase">
        <span aria-hidden="true">{index}</span>
        <span className="h-px w-8 bg-border" aria-hidden="true" />
      </div>
      <h2 className="mt-4 text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}
