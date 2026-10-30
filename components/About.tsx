import type { Portfolio } from "@/lib/portfolio";
import { GlassCard } from "./GlassCard";
import { getIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About({ about }: { about: Portfolio["about"] }) {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About me" title="Backend depth, AI focus" description={about.intro} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {about.highlights.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <GlassCard className="h-full p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet/25 to-cyan/15">
                    <Icon className="h-6 w-6 text-violet-200" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
