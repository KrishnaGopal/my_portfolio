"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/lib/portfolio";
import { GlassCard } from "./GlassCard";
import { ProjectModal } from "./ProjectModal";
import { Reveal } from "./Reveal";

export function Projects({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.06}>
            <GlassCard
              className={`group flex h-full flex-col p-7 ${
                project.featured
                  ? "border-violet/40! shadow-[0_0_60px_-24px_rgb(139_92_246/0.7),inset_0_1px_0_rgb(255_255_255/0.06)]!"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-violet/15 px-3 py-1 text-xs font-medium text-violet-200 ring-1 ring-violet/30">
                  {project.category}
                </span>
                {project.featured ? (
                  <span className="flex items-center gap-1 text-xs text-amber-200/90">
                    <Star className="h-3.5 w-3.5 fill-amber-300/80 text-amber-300/80" />
                    Featured
                  </span>
                ) : null}
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-1 text-sm text-slate-500">
                {project.company} · {project.period}
              </p>
              <p className="mt-4 flex-1 leading-relaxed text-slate-400">{project.summary}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((tech) => (
                  <li key={tech} className="rounded-lg bg-white/[0.05] px-2.5 py-1 text-xs text-slate-300">
                    {tech}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setSelected(project)}
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-cyan transition-colors hover:text-white"
              >
                View details
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
