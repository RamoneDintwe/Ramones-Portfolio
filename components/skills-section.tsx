import { Eyebrow } from '@/components/eyebrow'
import { SectionHeading } from '@/components/section-heading'
import { TagList } from '@/components/tag'
import { skillCategories } from '@/lib/site-data'

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          index="04"
          title="Skills"
          description="Grouped by area rather than rated by level. Items under Currently Learning are still in progress."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <Eyebrow as="h3">{category.title}</Eyebrow>
              <TagList items={category.skills} className="mt-5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
