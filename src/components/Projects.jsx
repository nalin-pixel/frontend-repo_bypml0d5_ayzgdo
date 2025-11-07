import { Code2, Globe, Link as LinkIcon } from 'lucide-react';

const projects = [
  {
    title: 'Dashboard Analitik',
    description:
      'Aplikasi dashboard interaktif dengan chart dinamis dan autentikasi.',
    tags: ['React', 'Tailwind', 'Recharts'],
    link: '#',
  },
  {
    title: 'Website Company Profile',
    description:
      'Situs responsif dan cepat dengan SEO yang baik untuk meningkatkan kehadiran online.',
    tags: ['Vite', 'Tailwind', 'SEO'],
    link: '#',
  },
  {
    title: 'E-commerce Mini',
    description:
      'Eksperimen checkout sederhana dengan keranjang belanja dan pembayaran mock.',
    tags: ['React', 'Context', 'Stripe API'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Proyek Pilihan</h2>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm text-indigo-600 hover:underline"
          >
            Butuh bantuan? Hubungi saya <LinkIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 backdrop-blur hover:shadow-sm transition overflow-hidden"
            >
              <div className="h-36 bg-gradient-to-br from-indigo-500/70 to-purple-500/70 grid place-items-center">
                <Code2 className="h-8 w-8 text-white opacity-90" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a href={p.link} className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:underline">
                    Lihat proyek <Globe className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
