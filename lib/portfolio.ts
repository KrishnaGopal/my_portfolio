import data from "@/data/portfolio.json";

export type IconKey =
  | "bot"
  | "server"
  | "cloud"
  | "layers"
  | "database"
  | "shield"
  | "code"
  | "wrench";

export type Site = {
  title: string;
  description: string;
  url: string;
  keywords: string[];
};

export type Profile = {
  name: string;
  shortName: string;
  initials: string;
  title: string;
  headline: string;
  tagline: string;
  location: string;
  availability: string;
  workMode: string;
  email: string;
  phone: string;
  resumeUrl: string;
  photo: string;
  socials: {
    github: string;
    linkedin: string;
  };
  rotatingRoles: string[];
};

export type Stat = {
  value: string;
  label: string;
};

export type Highlight = {
  icon: string;
  title: string;
  text: string;
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  tech: string[];
};

export type Project = {
  title: string;
  company: string;
  period: string;
  category: string;
  stack: string[];
  summary: string;
  description: string;
  features: string[];
  responsibilities: string[];
  featured: boolean;
};

export type SkillGroup = {
  group: string;
  icon: string;
  items: { name: string; years?: string }[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  score: string;
};

export type Portfolio = {
  site: Site;
  profile: Profile;
  stats: Stat[];
  about: {
    intro: string;
    highlights: Highlight[];
  };
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
  contact: {
    heading: string;
    text: string;
  };
  footer: {
    note: string;
  };
};

// Annotating the import makes `next build` fail when portfolio.json is missing a field.
const portfolio: Portfolio = data;

export function getPortfolio(): Portfolio {
  return portfolio;
}
