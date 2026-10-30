import { Briefcase, MapPin } from "lucide-react";
import type { Experience as ExperienceItem } from "@/lib/portfolio";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience({ items }: { items: ExperienceItem[] }) {
  return (
    <section id="experience" className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Career journey"
          title="Where I've made an impact"
          description="From PHP web apps to FinTech platforms, AWS microservices and agentic AI."
        />

        <ol className="relative">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-[15px] w-px bg-gradient-to-b from-violet via-cyan/60 to-transparent sm:left-[19px]"
          />
          {items.map((job, i) => {
            const current = job.end.toLowerCase() === "present";
            return (
              <li key={`${job.company}-${job.start}`} className="relative pb-10 pl-12 last:pb-0 sm:pl-16">
                <span
                  aria-hidden
                  className={`absolute top-6 left-0 grid h-8 w-8 place-items-center rounded-full border sm:h-10 sm:w-10 ${
                    current
                      ? "bg-accent-gradient border-transparent shadow-lg shadow-violet/50"
                      : "border-white/15 bg-ink-2"
                  }`}
                >
                  <Briefcase className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
                </span>

                <Reveal delay={i * 0.05}>
                  <GlassCard className="p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-white">{job.role}</h3>
                        <p className="mt-1 font-medium text-violet-200">{job.company}</p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                            current
                              ? "bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30"
                              : "bg-white/5 text-slate-300 ring-1 ring-white/10"
                          }`}
                        >
                          {job.start} - {job.end}
                        </span>
                        <p className="mt-2 flex items-center justify-end gap-1 text-xs text-slate-500">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 leading-relaxed text-slate-400">{job.summary}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
