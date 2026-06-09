const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "Git",
  "AWS",
  "Figma",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <p className="text-sm uppercase tracking-widest text-indigo-400 mb-3">Skills</p>
      <h2 className="text-3xl font-bold mb-8">Tech I work with</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-sm font-medium text-center hover:border-indigo-500 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
