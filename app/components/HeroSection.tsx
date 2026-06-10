import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 px-6 text-center">
      <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">
        Welcome to my portfolio
      </p>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
        Frank J. Montel IV
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-400 max-w-2xl">
        Enterprise data and technology leader.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#about"
          className="inline-block px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold text-white"
        >
          View my work
        </a>
        <Link
          href="/resume"
          className="inline-block px-8 py-3 rounded-full border border-gray-600 hover:border-indigo-500 transition-colors font-semibold text-white"
        >
          Resume
        </Link>
      </div>
    </section>
  );
}
