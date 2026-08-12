import Link from "next/link";
import { resume } from "@/app/data/resume";
import type { Metadata } from "next";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume — Frank Montel",
  description: "Professional resume of Frank J Montel IV — Technology & Analytics Leader.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-gray-950/90 backdrop-blur border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Portfolio
        </Link>
        <PrintButton />
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 print:py-0 print:px-0">
        {/* Header */}
        <header className="mb-8 print:mb-6">
          <h1 className="text-4xl font-bold tracking-tight print:text-3xl">{resume.name}</h1>
          <p className="mt-1 text-indigo-400 font-medium print:text-indigo-700">{resume.tagline}</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-400 print:text-gray-600">
            <span>{resume.location}</span>
            <a href={`tel:${resume.phone}`} className="hover:text-white transition-colors print:text-gray-600">
              {resume.phone}
            </a>
            <a href={`mailto:${resume.email}`} className="hover:text-white transition-colors print:text-gray-600">
              {resume.email}
            </a>
            <a
              href={resume.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors print:text-gray-600"
            >
              {resume.linkedin}
            </a>
          </div>
        </header>

        <Divider />

        {/* Summary */}
        <Section label="Professional Summary">
          <p className="text-gray-300 leading-relaxed text-sm print:text-gray-800">{resume.summary}</p>
        </Section>

        <Divider />

        {/* Skills */}
        <Section label="Technical Skills">
          <dl className="space-y-2">
            {resume.skills.map((s) => (
              <div key={s.category} className="grid grid-cols-[160px_1fr] gap-3 text-sm print:grid-cols-[140px_1fr]">
                <dt className="font-semibold text-gray-200 print:text-gray-900 shrink-0">{s.category}</dt>
                <dd className="text-gray-400 leading-relaxed print:text-gray-700">
                  {s.items.join(", ")}
                  {s.note ? `; ${s.note}` : ""}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Divider />

        {/* Experience */}
        <Section label="Professional Experience">
          <div className="space-y-8 print:space-y-6">
            {resume.experience.map((job) => (
              <div key={`${job.title}-${job.company}-${job.start}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  <h3 className="font-semibold text-white print:text-gray-900">
                    {job.title}
                  </h3>
                  <span className="text-sm text-gray-500 print:text-gray-500 shrink-0">
                    {job.start} – {job.end}
                  </span>
                </div>
                <p className="text-sm text-indigo-400 print:text-indigo-700 mb-2">
                  {job.company}, {job.location}
                </p>
                <ul className="space-y-1.5 text-sm text-gray-400 print:text-gray-700">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500 print:bg-indigo-700 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Earlier Experience */}
            <div>
              <h3 className="font-semibold text-white print:text-gray-900 mb-1">Earlier Experience</h3>
              <p className="text-sm text-gray-400 print:text-gray-700 leading-relaxed">
                {resume.earlierExperience.join(" · ")}
              </p>
            </div>
          </div>
        </Section>

        <Divider />

        {/* Education & Certifications */}
        <Section label="Education & Certifications">
          <div className="space-y-5 text-sm">
            {/* Degree */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <h3 className="font-semibold text-white print:text-gray-900">{resume.education.degree}</h3>
                <span className="text-gray-500 shrink-0">Graduated {resume.education.graduated}</span>
              </div>
              <p className="text-indigo-400 print:text-indigo-700 mb-1">{resume.education.institution}</p>
              <p className="text-gray-400 print:text-gray-700 leading-relaxed">{resume.education.notes}</p>
            </div>

            {/* Additional Coursework */}
            <div>
              <h3 className="font-semibold text-white print:text-gray-900 mb-1">Additional Coursework</h3>
              <p className="text-gray-400 print:text-gray-700 leading-relaxed">
                {resume.additionalCoursework.join(" · ")}
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-semibold text-white print:text-gray-900 mb-2">Microsoft Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {resume.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300 print:bg-gray-100 print:border-gray-300 print:text-gray-800"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <div className="h-16 print:hidden" />
      </main>
    </div>
  );
}

function Divider() {
  return <hr className="border-gray-800 my-8 print:my-5 print:border-gray-300" />;
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mb-0">
      <p className="text-xs uppercase tracking-widest text-indigo-400 print:text-indigo-700 mb-4 print:mb-3">
        {label}
      </p>
      {children}
    </section>
  );
}
