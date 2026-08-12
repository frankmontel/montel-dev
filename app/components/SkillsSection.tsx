import { resume } from "@/app/data/resume";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <p className="text-sm uppercase tracking-widest text-indigo-400 mb-3">Skills</p>
      <h2 className="text-3xl font-bold mb-8">What I work with</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resume.skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-gray-800 bg-gray-900 p-6 flex flex-col hover:border-indigo-600 transition-colors"
          >
            <h3 className="text-lg font-semibold mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-sm font-medium text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
            {group.note && (
              <p className="mt-4 text-xs text-gray-500 italic">{group.note}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
