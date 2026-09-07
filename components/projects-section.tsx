import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from '@/components/icons'
import { Eyebrow } from '@/components/eyebrow'
import { SectionHeading } from '@/components/section-heading'
import { StatusBadge } from '@/components/status-badge'
import { TagList } from '@/components/tag'
import { cn } from '@/lib/utils'
import { type Project, projects } from '@/lib/site-data'

function TagGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <Eyebrow as="p" className="text-muted-foreground">
        {label}
      </Eyebrow>
      <TagList items={items} className="mt-2.5" />
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight">
          {project.title}
        </h3>
        {project.status ? <StatusBadge status={project.status} /> : null}
      </div>

      <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-6 space-y-5">
        {project.technologies ? (
          <TagGroup label="Technologies" items={project.technologies} />
        ) : null}
        {project.securityConcepts ? (
          <TagGroup label="Security concepts" items={project.securityConcepts} />
        ) : null}
      </div>

      {project.links && project.links.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                link.primary
                  ? 'bg-primary text-primary-foreground hover:opacity-90'
                  : 'border border-border bg-secondary/40 hover:bg-accent',
              )}
            >
              {link.label === 'GitHub' ? (
                <GitHubIcon className="size-3.5" />
              ) : (
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              )}
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          index="02"
          title="Featured Projects"
          description="Practical projects in phishing analysis, detection and Blue Team fundamentals. New work is added as it is built."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
