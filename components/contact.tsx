import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 max-w-5xl mx-auto border-t border-border"
    >
      <div className="max-w-xl">
        <p className="font-mono text-xs text-blue uppercase tracking-widest mb-5">
          Contact
        </p>
        <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
          If you would like to work together or just say hi, my inbox is open.
        </h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-8">
          Currently open to new opportunities. Whether it&apos;s a full-time
          role, a freelance project, or just a question — reach out and
          I&apos;ll get back to you.
        </p>
        <a
          href="mailto:aung.c.pyae@outlook.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue text-white text-sm font-medium rounded-sm hover:bg-blue-light transition-colors duration-150"
        >
          Say hello
          <ArrowUpRight size={14} />
        </a>

        {/* Contact details */}
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8">
          <div className="flex items-center justify-between text-sm">
            <span className="text-foreground-subtle font-mono text-xs">
              Mail
            </span>
            <a
              href="mailto:aung.c.pyae@outlook.com"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              aung.c.pyae@outlook.com
            </a>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-foreground-subtle font-mono text-xs">
              GitHub
            </span>
            <a
              href="https://github.com/aungchanpyae33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              github.com/aungchanpyae33
            </a>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-foreground-subtle font-mono text-xs">
              LinkedIn
            </span>
            <a
              href="https://www.linkedin.com/in/aungchanpyae-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              linkedin.com/in/aungchanpyae-dev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
