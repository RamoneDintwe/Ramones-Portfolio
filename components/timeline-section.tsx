import { SectionHeading } from '@/components/section-heading'
import { timeline } from '@/lib/site-data'

export function TimelineSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          index="06"
          title="Journey"
          description="Milestones added as projects, labs and certifications progress."
        />

        <ol className="mt-12 max-w-2xl">
          {timeline.map((entry, i) => (
            <li key={`${entry.year}-${entry.title}`} className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <span
                  className="mt-1 size-3 shrink-0 rounded-full border-2 border-primary bg-background"
                  aria-hidden="true"
                />
                {i < timeline.length - 1 ? (
                  <span
                    className="w-px flex-1 bg-border"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
              <div className="pb-10">
                <p className="font-mono text-xs tracking-widest text-primary">
                  {entry.year}
                </p>
                <p className="mt-1.5 text-pretty font-medium">{entry.title}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
