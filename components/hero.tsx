import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-14">
      <div className="max-w-3xl">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
          <span className="text-xs font-mono text-foreground-subtle tracking-wider uppercase">
            Available for work
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight text-balance mb-6">
          <div className="flex items-center">
            <Image
              src={"/app-logo.svg"}
              alt="Letter A"
              width={0}
              height={0}
              className="h-[1em] w-[1em]"
              aria-label="Letter A"
            />
            <span> ung Chan Pyae</span>
          </div>

          <span className="block text-foreground-subtle font-normal mt-2 text-2xl sm:text-3xl lg:text-4xl">
            Frontend Developer
          </span>
        </h1>

        <p className="text-foreground-muted text-lg leading-relaxed max-w-xl mb-10">
          I build fast, accessible, pixel-perfect interfaces. Specializing in
          React and TypeScript — turning complex problems into clean, simple
          experiences.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-blue text-white text-sm font-medium rounded-sm hover:bg-blue-light transition-colors duration-150"
          >
            View Work
            <ArrowUpRight size={14} />
          </a>
          <a
            href="mailto:aung.c.pyae@outlook.com"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-border text-foreground-muted text-sm font-medium rounded-sm hover:border-foreground-subtle hover:text-foreground transition-colors duration-150"
          >
            Get in touch
          </a>
        </div>

        {/* Social row */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/aungchanpyae33"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground-subtle hover:text-foreground transition-colors duration-150"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground-subtle hover:text-foreground transition-colors duration-150"
          >
            <Linkedin size={18} />
          </a>

          <div className="h-px w-12 bg-border" aria-hidden="true" />
          <span className="font-mono text-xs text-foreground-subtle">
            aungchanpyae.vercel.app
          </span>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-foreground-subtle hover:text-foreground transition-colors duration-150"
      >
        <div className="w-px h-12 bg-border" />
        <span className="font-mono text-xs tracking-widest rotate-90 origin-center mt-2">
          scroll
        </span>
      </a>
    </section>
  );
}
