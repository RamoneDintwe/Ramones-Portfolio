import { BookOpen, CheckCircle2 } from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'
import { SectionHeading } from '@/components/section-heading'
import { certifications } from '@/lib/site-data'

export function CertificationsSection() {
  return (
    <section id="certifications" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          index="05"
          title="Certifications & Learning"
          description="Focused on the practical capability behind each course, not certificate counts."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
              <Eyebrow as="h3">Completed</Eyebrow>
            </div>
            <ul className="mt-5 space-y-3">
              {certifications.completed.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                >
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2.5">
              <BookOpen className="size-4 text-amber-400" aria-hidden="true" />
              <Eyebrow as="h3" className="text-amber-400">
                Currently Learning
              </Eyebrow>
            </div>
            <ul className="mt-5 space-y-3">
              {certifications.learning.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                >
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-400"
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
