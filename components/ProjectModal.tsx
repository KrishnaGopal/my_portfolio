"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, UserRound, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "@/lib/portfolio";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close project details"
            onClick={onClose}
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/10 bg-ink-2/95 p-7 shadow-2xl backdrop-blur-xl sm:rounded-3xl sm:p-9"
          >
            <div className="bg-accent-gradient absolute inset-x-0 top-0 h-1" />
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 grid h-9 w-9 place-items-center rounded-full bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="rounded-full bg-violet/15 px-3 py-1 text-xs font-medium text-violet-200 ring-1 ring-violet/30">
              {project.category}
            </span>
            <h3 id="project-title" className="mt-4 pr-10 font-display text-2xl font-semibold text-white sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              {project.company} · {project.period}
            </p>
            <p className="mt-5 leading-relaxed text-slate-300">{project.summary}</p>
            <p className="mt-3 leading-relaxed text-slate-400">{project.description}</p>

            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="font-display text-sm font-semibold tracking-wide text-white uppercase">Key features</h4>
                <ul className="mt-3 space-y-2.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm text-slate-400">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold tracking-wide text-white uppercase">My role</h4>
                <ul className="mt-3 space-y-2.5">
                  {project.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-slate-400">
                      <UserRound className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ul className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-6">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
