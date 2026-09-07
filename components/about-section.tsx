import { Eyebrow } from '@/components/eyebrow'
import { SectionHeading } from '@/components/section-heading'
import { currentFocus } from '@/lib/site-data'

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading index="01" title="About" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I&apos;m transitioning into cybersecurity and ICT through
              hands-on projects, home labs and certifications. I learn best by
              building &mdash; setting up environments, writing tools and
              working through security problems rather than studying theory in
              isolation.
            </p>
            <p>
              My focus is on Blue Team and security operations fundamentals:
              security monitoring, detection and incident response, supported by
              the networking, systems and scripting skills underneath them. Each
              project and lab is a deliberate step toward that goal.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <Eyebrow as="h3">Current Focus</Eyebrow>
            <ul className="mt-5 space-y-3">
              {currentFocus.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span
                    className="size-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
