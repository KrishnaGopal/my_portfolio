import type { SkillGroup } from "@/lib/portfolio";
import { GlassCard } from "./GlassCard";
import { getIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <section id="skills" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & technologies"
          description="The stack I use to design, build, test and ship production systems."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => {
            const Icon = getIcon(group.icon);
            return (
              <Reveal key={group.group} delay={(i % 3) * 0.06}>
                <GlassCard className="h-full p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-accent-gradient grid h-10 w-10 place-items-center rounded-xl shadow-lg shadow-violet/25">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">{group.group}</h3>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-2.5 text-sm"
                      >
                        <span className="text-slate-200">{item.name}</span>
                        {item.years ? (
                          <span className="rounded-md bg-cyan/10 px-2 py-0.5 text-xs font-medium text-cyan">
                            {item.years}
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
