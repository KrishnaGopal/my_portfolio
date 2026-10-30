import { ArrowUp } from "lucide-react";
import type { Profile } from "@/lib/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer({ profile, note }: { profile: Profile; note: string }) {
  return (
    <footer className="px-4 pt-8 pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-slate-300">
            © {profile.name}
          </p>
          <p className="mt-1">{note}</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-xl text-slate-400 hover:bg-white/5 hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-xl text-slate-400 hover:bg-white/5 hover:text-white"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="glass grid h-10 w-10 place-items-center rounded-xl text-slate-300 hover:text-white"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
