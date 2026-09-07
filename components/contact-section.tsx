import { Mail } from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
import { SectionHeading } from '@/components/section-heading'
import { profile } from '@/lib/site-data'

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/your-username',
    href: profile.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/your-profile',
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading index="07" title="Contact" />

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Open to ICT, cybersecurity, Blue Team and junior security
          opportunities.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {channels.map((channel) => {
            const Icon = channel.icon
            return (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground transition-colors group-hover:text-primary">
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0">
                  <Eyebrow className="block text-muted-foreground">
                    {channel.label}
                  </Eyebrow>
                  <span className="mt-0.5 block truncate text-sm text-foreground/90">
                    {channel.value}
                  </span>
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
