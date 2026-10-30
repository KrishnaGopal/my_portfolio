"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar } from "./Avatar";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

type NavbarProps = {
  initials: string;
  name: string;
  photo: string;
  resumeUrl: string;
};

export function Navbar({ initials, name, photo, resumeUrl }: NavbarProps) {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ["top", ...links.map((link) => link.id)]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled || open ? "glass bg-ink/75!" : "border border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          {photo ? (
            <Avatar src={photo} alt={name} size={36} className="rounded-xl ring-2 ring-violet/50" />
          ) : (
            <span className="bg-accent-gradient grid h-9 w-9 place-items-center rounded-xl font-display text-sm font-bold text-white shadow-lg shadow-violet/30">
              {initials}
            </span>
          )}
          <span className="hidden font-display text-sm font-semibold text-white sm:block">{name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active === link.id ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {active === link.id ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={resumeUrl}
            download
            className="bg-accent-gradient hidden items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet/25 transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-xl text-slate-200 hover:bg-white/10 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass mx-auto mt-2 max-w-6xl rounded-2xl bg-ink-2! p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-slate-200 hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={resumeUrl}
                  download
                  className="bg-accent-gradient mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-medium text-white"
                >
                  <Download className="h-4 w-4" />
                  Download resume
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
