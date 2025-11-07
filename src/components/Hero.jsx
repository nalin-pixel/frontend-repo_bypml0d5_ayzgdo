import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/60 via-transparent to-transparent dark:from-indigo-950/30 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-600/20">
              Tersedia untuk freelance
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Halo, saya <span className="text-indigo-600">Nama Anda</span>
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-prose">
              Frontend developer yang fokus membangun pengalaman web yang cepat, rapi, dan mudah digunakan. Suka Tailwind, React, dan animasi halus.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-medium hover:opacity-90"
              >
                Lihat Proyek <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:you@email.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md ring-1 ring-neutral-300 dark:ring-neutral-700 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                Kontak
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-neutral-600 dark:text-neutral-300">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:you@email.com" className="hover:text-neutral-900 dark:hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-1 shadow-lg">
              <div className="h-full w-full rounded-xl bg-white dark:bg-neutral-900 grid place-items-center">
                <div className="h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
