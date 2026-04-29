import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
