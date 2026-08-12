import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
};

const projects: Project[] = [
  {
    title: "EDI Sync",
    description:
      "A metadata-driven Python generator that wrote 38 T-SQL MERGE procedures to keep a legacy EDI system in sync with a new JD Edwards 9.2 environment — decoupling a stalled EDI migration from an ERP upgrade that shipped on schedule.",
    tech: ["Python", "SQL Server", "SSIS", "JD Edwards"],
    caseStudyUrl: "/projects/edi-sync",
  },
  {
    title: "Project Alpha",
    description:
      "A full-stack web application with real-time collaboration features, built with Next.js and PostgreSQL.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project Beta",
    description:
      "A developer CLI tool that automates repetitive tasks and integrates with popular CI/CD pipelines.",
    tech: ["Node.js", "TypeScript", "Docker"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project Gamma",
    description:
      "A RESTful API service with authentication, rate limiting, and comprehensive OpenAPI documentation.",
    tech: ["Python", "PostgreSQL", "AWS"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <p className="text-sm uppercase tracking-widest text-indigo-400 mb-3">Projects</p>
      <h2 className="text-3xl font-bold mb-8">Things I&apos;ve built</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-gray-800 bg-gray-900 p-6 flex flex-col hover:border-indigo-600 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-md bg-gray-800 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="text-sm px-4 py-1.5 rounded-full border border-gray-700 hover:border-indigo-500 transition-colors"
                >
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="text-sm px-4 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors"
                >
                  Live Demo
                </a>
              )}
              {project.caseStudyUrl && (
                <Link
                  href={project.caseStudyUrl}
                  className="text-sm px-4 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors"
                >
                  Read case study
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
