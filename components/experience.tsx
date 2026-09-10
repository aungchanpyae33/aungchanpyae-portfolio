"use client";

import { useState } from "react";

const jobs = [
  {
    company: "Freeboh Innovations",
    title: "Frontend Developer",
    period: "July 2026 — Present",
    bullets: [
      "Migrated application state/data-fetching from Redux to TanStack Query, simplifying data flow efficiency.",
      "Introduced unit and end-to-end testing and integrated automated tests into the CI/CD pipeline.",
      "Migrated React codebase from JavaScript to TypeScript and refactored class components to hooks.",
      "Led responsive redesign of core UI, enhancing usability across devices."
    ],
  },
  {
    company: "MMS IT",
    title: "Frontend Developer",
    period: "Aug 2025 — Mar 2026",
    bullets: [
      "Developed and maintained POS features with Next.js and TypeScript, improving reliability and reducing errors.",
      "Optimized 4 core products with refactoring and lazy loading, reducing load time from 3.2s to 1.1s.",
      "Built a UI component library that accelerated feature development cycles by 30%.",
    ],
  },
  {
    company: "MMS IT",
    title: "Frontend Developer (Intern)",
    period: "May 2025 — Aug 2025 ",
    bullets: [
      "Translated 15+ UI/UX designs into pixel-perfect, production-ready interfaces with cross-browser compatibility.",
      "Identified and resolved 20+ frontend rendering bottlenecks, significantly improving application performance.",
      ,
    ],
  },
  {
    company: "Freelance",
    title: "Frontend Developer",
    period: "Mar 2024 — 2025",
    bullets: [
      "Delivered 3+ projects including portfolio sites, landing pages helping clients establish their online presence.",
      "Built a reusable starter kit and component system to speed up development and maintain consistency.",
    ],
  },
];

export function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="experience"
      className="py-28 px-6 max-w-5xl mx-auto border-t border-border"
    >
      <p className="font-mono text-xs text-blue uppercase tracking-widest mb-12">
        Experience
      </p>

      <div className="flex flex-col md:flex-row gap-0 md:gap-12">
        {/* Company tabs */}
        <div
          role="tablist"
          aria-label="Work experience"
          className="flex md:flex-col overflow-x-auto md:overflow-visible gap-0 border-b md:border-b-0 md:border-l border-border min-w-40 pb-0 mb-8 md:mb-0"
        >
          {jobs.map((job, i) => (
            <button
              key={job.company + i}
              role="tab"
              aria-selected={active === i}
              aria-controls={`panel-${i}`}
              id={`tab-${i}`}
              onClick={() => setActive(i)}
              className={`relative pl-5 pr-6 py-2.5 text-sm font-mono text-left whitespace-nowrap transition-colors duration-150 ${
                active === i
                  ? "text-foreground"
                  : "text-foreground-muted hover:text-foreground-subtle"
              }`}
            >
              <span
                className={`absolute left-0 top-0 bottom-0 w-px transition-all duration-150 ${
                  active === i ? "bg-blue" : "bg-transparent"
                }`}
              />
              {job.company}
            </button>
          ))}
        </div>

        {/* Panels */}
        <div className="flex-1">
          {jobs.map((job, i) => (
            <div
              key={job.company + i}
              role="tabpanel"
              id={`panel-${i}`}
              aria-labelledby={`tab-${i}`}
              hidden={active !== i}
            >
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="text-base font-semibold text-foreground">
                  {job.title}
                </h3>
              </div>
              <p className="font-mono text-xs text-foreground-subtle mb-6">
                {job.period}
              </p>
              <ul className="space-y-3">
                {job.bullets.map((bullet, bi) => (
                  <li
                    key={bi}
                    className="flex gap-3 text-sm text-foreground-muted leading-relaxed"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue mt-2 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
