import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import type { Profile, Stat } from "@/lib/portfolio";
import { Avatar } from "./Avatar";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./Reveal";
import { RotatingText } from "./RotatingText";

type HeroProps = {
  profile: Profile;
  stats: Stat[];
};

export function Hero({ profile, stats }: HeroProps) {
  return (
    <section id="top" className="relative px-4 pt-36 pb-20 sm:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-7 font-display text-lg text-slate-300">
              Hi, I&apos;m <span className="font-semibold text-white">{profile.name}</span>
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {profile.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 min-h-[3.5rem] text-lg text-slate-300 sm:min-h-0">
              Currently building <RotatingText words={profile.rotatingRoles} />
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-slate-400">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={0.15} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="bg-accent-gradient group inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white shadow-xl shadow-violet/30 transition-transform hover:scale-[1.03]"
            >
              Let&apos;s talk
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download resume
            </a>
            <div className="flex items-center gap-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="glass grid h-12 w-12 place-items-center rounded-xl text-slate-300 transition-colors hover:text-white"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="glass grid h-12 w-12 place-items-center rounded-xl text-slate-300 transition-colors hover:text-white"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-md">
          <div className="bg-accent-gradient absolute -inset-1 rounded-[2rem] opacity-40 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-7">
            <div className="flex items-center gap-5">
              {profile.photo ? (
                <div className="bg-accent-gradient rounded-[1.1rem] p-[3px] shadow-lg shadow-violet/40">
                  <Avatar src={profile.photo} alt={profile.name} size={96} priority className="rounded-2xl" />
                </div>
              ) : (
                <div className="bg-accent-gradient grid h-24 w-24 shrink-0 place-items-center rounded-2xl font-display text-3xl font-bold text-white shadow-lg shadow-violet/40">
                  {profile.initials}
                </div>
              )}
              <div>
                <p className="font-display text-xl font-semibold text-white">{profile.name}</p>
                <p className="mt-1 text-sm text-violet-200">{profile.title}</p>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-400">
                  <MapPin className="h-3.5 w-3.5" />
                  {profile.location} · {profile.workMode}
                </p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                  <p className="text-gradient font-display text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs leading-snug text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition-colors hover:bg-white/10"
            >
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan" />
                {profile.email}
              </span>
              <Sparkles className="h-4 w-4 text-violet-300" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
