import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { SectionHeading } from "@/components/SectionHeading";
import { Skills } from "@/components/Skills";
import { getPortfolio } from "@/lib/portfolio";

export default function Home() {
  const portfolio = getPortfolio();
  const { profile } = portfolio;

  return (
    <>
      <Navbar
        initials={profile.initials}
        name={profile.name}
        photo={profile.photo}
        resumeUrl={profile.resumeUrl}
      />
      <main>
        <Hero profile={profile} stats={portfolio.stats} />
        <About about={portfolio.about} />
        <Experience items={portfolio.experience} />
        <section id="projects" className="px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects I've built"
              description="Production platforms across agentic AI, energy, FinTech and productivity. Open any card for the details."
            />
            <Projects projects={portfolio.projects} />
          </div>
        </section>
        <Skills groups={portfolio.skills} />
        <Education items={portfolio.education} />
        <Contact profile={profile} contact={portfolio.contact} />
      </main>
      <Footer profile={profile} note={portfolio.footer.note} />
    </>
  );
}
