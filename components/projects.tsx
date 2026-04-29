"use client";
import { ExternalLink, Github, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Bubble",
    description: `Bubble is a modern on-demand music streaming platform with personalized recommendations and music library management.\nUsers can manage own playlists, manage queues, and explore daily and weekly trending songs, playlists, albums and artists.`,
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Hls.js",
      "Zustand",
      "Tanstack Query",
    ],
    github: "https://github.com/aungchanpyae33/bubblemusic",
    live: "https://bubblemusic.vercel.app",
    image: "/ProjectImage/project-1.png",
  },
  {
    title: "Miney",
    description: `Miney is a social profile sharing platform that lets users create and share a personalized profile link in their social media bio. It helps others understand who you are before starting a conversation, making online connections more meaningful and transparent.`,
    tags: ["Next.js", "TypeScript", "Supabase", "Base-Ui", "Tanstack Query"],
    github: "https://github.com/aungchanpyae33/miney",
    live: "https://miney-bubble.vercel.app",
    image: "/ProjectImage/project-2.png",
  },
  {
    title: "GitHub Markdown Preview Editor",
    description:
      "Developer-focused Markdown editor for real-time preview using the GitHub Markdown API.\nIt delivers authentic GitHub Flavored Markdown rendering with a side-by-side editor and responsive layout for seamless writing.",
    tags: ["React", "TypeScript", "GitHub API", "github-markdown-css"],
    github: "https://github.com/aungchanpyae33/github-markdown",
    live: "https://github-markdown.vercel.app/",

    image: "/ProjectImage/project-3.png",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-5xl mx-auto border-t border-border"
    >
      <p className="font-mono text-xs text-blue uppercase tracking-widest mb-12">
        Selected work
      </p>

      {/* Featured list */}
      <div className="space-y-0 divide-y divide-border">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group py-8 grid md:grid-cols-12 gap-6 items-start"
          >
            {/* Image */}
            <div className="md:col-span-6 overflow-hidden rounded-sm border border-border group relative aspect-video bg-surface">
              <Image
                src={project.image}
                alt={project.title}
                className="transition-opacity duration-300"
                fill
              />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={project.live}
                className="hidden group-hover:flex group-hover:absolute group-hover:inset-0 group-hover:items-center group-hover:justify-center group-hover:bg-black/45"
              >
                <ExternalLink size={36} />
              </Link>
            </div>

            {/* Info */}
            <div className="md:col-span-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-blue transition-colors duration-150">
                  {project.title}
                </h3>

                <div className="flex items-center gap-3 shrink-0">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="text-foreground-subtle hover:text-foreground transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  ) : (
                    <span className="ext-foreground-subtle hover:text-foreground transition-colors">
                      <Lock size={16} />{" "}
                    </span>
                  )}

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live`}
                    className="text-foreground-subtle hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-foreground-muted leading-relaxed mb-4 whitespace-pre-line">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="font-mono text-xs text-foreground-subtle border border-border px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
