import {
  Globe,
  Monitor,
  Radar,
  Server,
  ShieldAlert,
  Terminal,
} from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'
import { SectionHeading } from '@/components/section-heading'
import { StatusBadge } from '@/components/status-badge'
import { TagList } from '@/components/tag'
import { labNetworks, labPractices } from '@/lib/site-data'

const systemIcons: Record<string, typeof Server> = {
  'Windows Client': Monitor,
  'Windows Server / Domain Controller': Server,
  'Wazuh SIEM': Radar,
  'Linux Server': Server,
  'Kali Linux': Terminal,
}

function Connector() {
  return (
    <div
      className="mx-auto h-8 w-px bg-gradient-to-b from-primary/50 to-border"
      aria-hidden="true"
    />
  )
}

function NodeBox({
  icon: Icon,
  label,
  emphasis,
}: {
  icon: typeof Server
  label: string
  emphasis?: boolean
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-lg border px-4 py-2.5 text-sm ${
        emphasis
          ? 'border-primary/40 bg-primary/10 text-foreground'
          : 'border-border bg-secondary/40 text-foreground/90'
      }`}
    >
      <Icon
        className={`size-4 shrink-0 ${emphasis ? 'text-primary' : 'text-muted-foreground'}`}
        aria-hidden="true"
      />
      <span>{label}</span>
    </div>
  )
}

export function LabSection() {
  return (
    <section id="lab" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <SectionHeading
            index="03"
            title="Cybersecurity Lab"
            description="A planned lab architecture for practising Blue Team workflows — log collection, detection, investigation and monitoring."
          />
          <StatusBadge status="In Development" className="px-3 py-1" />
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-6 sm:p-10">
          <div
            className="flex flex-col items-center"
            role="img"
            aria-label="Lab network diagram: the internet connects to a pfSense firewall, which routes to three networks — Corp Network with a Windows Client and Windows Server / Domain Controller, Management Network with a Wazuh SIEM and Linux Server, and Attack Network with Kali Linux."
          >
            <NodeBox icon={Globe} label="Internet" />
            <Connector />
            <NodeBox icon={ShieldAlert} label="pfSense Firewall" emphasis />
            <Connector />

            <div className="grid w-full gap-6 md:grid-cols-3">
              {labNetworks.map((network) => (
                <div
                  key={network.name}
                  className="rounded-lg border border-dashed border-border bg-background/40 p-4"
                >
                  <Eyebrow as="p" className="block text-center">
                    {network.name}
                  </Eyebrow>
                  <div className="mt-4 space-y-3">
                    {network.systems.map((system) => (
                      <NodeBox
                        key={system.name}
                        icon={systemIcons[system.name] ?? Server}
                        label={system.name}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-3xl">
          <p className="text-pretty leading-relaxed text-muted-foreground">
            The lab is being developed to practise the core skills of a security
            operations workflow. None of the components below are presented as
            operational yet &mdash; they represent the planned scope as the
            environment is built out:
          </p>
          <TagList items={labPractices} className="mt-5" />
        </div>
      </div>
    </section>
  )
}
