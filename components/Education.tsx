import { GraduationCap } from "lucide-react";
import type { Education as EducationItem } from "@/lib/portfolio";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education({ items }: { items: EducationItem[] }) {
  return (
    <section id="education" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.06}>
              <GlassCard className="h-full p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet/25 to-cyan/15">
                    <GraduationCap className="h-5 w-5 text-violet-200" />
                  </div>
                  <span className="text-gradient font-display text-2xl font-bold">{item.score}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{item.degree}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.institution}</p>
                <p className="mt-4 text-xs font-medium tracking-wide text-slate-500">{item.period}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
