import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import type { Portfolio, Profile } from "@/lib/portfolio";
import { CopyEmailButton } from "./CopyEmailButton";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./Reveal";

type ContactProps = {
  profile: Profile;
  contact: Portfolio["contact"];
};

function handle(url: string) {
  return url.replace(/\/+$/, "").split("/").pop() ?? url;
}

export function Contact({ profile, contact }: ContactProps) {
  const channels = [
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
      icon: <Phone className="h-5 w-5" />,
    },
    {
      label: "LinkedIn",
      value: handle(profile.socials.linkedin),
      href: profile.socials.linkedin,
      icon: <LinkedinIcon className="h-5 w-5" />,
      external: true,
    },
    {
      label: "GitHub",
      value: `@${handle(profile.socials.github)}`,
      href: profile.socials.github,
      icon: <GithubIcon className="h-5 w-5" />,
      external: true,
    },
  ];

  return (
    <section id="contact" className="px-4 py-24">
      <Reveal className="relative mx-auto max-w-5xl">
        <div className="bg-accent-gradient absolute -inset-px rounded-[2.25rem] opacity-60 blur-xl" />
        <div className="glass relative overflow-hidden rounded-[2.25rem] px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="text-sm font-medium tracking-wide text-cyan">Get in touch</span>
              <h2 className="mt-3 font-display text-3xl leading-tight font-bold text-white sm:text-4xl">
                {contact.heading}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-300">{contact.text}</p>
              <p className="mt-5 flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4" />
                {profile.location} · {profile.workMode}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-ink transition-transform hover:scale-[1.03]"
                >
                  <Mail className="h-4 w-4" />
                  Email me
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
                >
                  <Download className="h-4 w-4" />
                  Download resume
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink/40 p-3 pl-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-gradient text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-500">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="block truncate font-medium text-white hover:text-cyan"
                  >
                    {profile.email}
                  </a>
                </div>
                <CopyEmailButton email={profile.email} />
              </div>

              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noreferrer" : undefined}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-ink/40 p-3 pl-4 transition-colors hover:border-violet/40 hover:bg-ink/60"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-slate-200">
                    {channel.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-500">{channel.label}</p>
                    <p className="truncate font-medium text-white">{channel.value}</p>
                  </div>
                  <ArrowUpRight className="mr-2 h-4 w-4 text-slate-500 transition-colors group-hover:text-cyan" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
