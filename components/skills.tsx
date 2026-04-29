const categories = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "Python"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Hono"],
  },
  {
    label: "Styling",
    items: ["Tailwind CSS", "CSS Modules", "Motion (Framer Motion)"],
  },
  {
    label: "Tools",
    items: ["Git", "Docker", "Supabase", "Vercel", "Cloudflare"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 max-w-5xl mx-auto border-t border-border"
    >
      <p className="font-mono text-xs text-blue uppercase tracking-widest mb-10">
        Skills
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden">
        {categories.map((cat) => (
          <div key={cat.label} className="bg-background p-6 md:p-8">
            <h3 className="text-xs font-mono text-foreground-subtle uppercase tracking-widest mb-5">
              {cat.label}
            </h3>
            <ul className="space-y-3">
              {cat.items.map((item) => (
                <li key={item} className="text-sm text-foreground-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
