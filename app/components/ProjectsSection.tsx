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
      "A pair of metadata-driven Python generators — one emitting T-SQL, one emitting DB2 SQL — that wrote 76 merge procedures for both ends of a live ERP cutover, keeping a legacy EDI system in sync with a new JD Edwards 9.2 environment and decoupling a stalled EDI migration from an upgrade that shipped on schedule.",
    tech: ["Python", "SQL Server", "IBM DB2", "SSIS", "JD Edwards"],
    caseStudyUrl: "/projects/edi-sync",
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
