import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { LabSection } from '@/components/lab-section'
import { SkillsSection } from '@/components/skills-section'
import { CertificationsSection } from '@/components/certifications-section'
import { TimelineSection } from '@/components/timeline-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <LabSection />
        <SkillsSection />
        <CertificationsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
