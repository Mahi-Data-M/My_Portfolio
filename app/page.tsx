import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import AcademicsLeadership from "@/components/sections/AcademicsLeadership";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        {/* ── Hero: sticky full-screen cinematic video — scrolled over by content ── */}
        <Hero />

        {/* ── Content stack — slides over sticky Hero ── */}
        <div className="relative z-10" style={{ background: "#050911" }}>
          {/* ── About: Bio & stats ── */}
          <About />

          {/* ── Skills: Categorized tech stack ── */}
          <Skills />

          {/* ── Projects: Featured project cards ── */}
          <Projects />

          {/* ── Certifications: Industry credentials ── */}
          <Certifications />

          {/* ── Education (left) + Publications & Leadership (right) ── */}
          <AcademicsLeadership />

          {/* ── Contact: Form + socials ── */}
          <Contact />
        </div>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}
