export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Tentang Saya</h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">
              Saya seorang pengembang front-end yang menikmati membuat antarmuka yang bersih, aksesibel, dan cepat. Fokus pada pengalaman pengguna, performa, dan detail kecil yang membuat produk terasa istimewa.
            </p>
            <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
              <li>• 3+ tahun pengalaman membangun aplikasi web modern</li>
              <li>• Terbiasa dengan React, Vite, Tailwind, dan ekosistemnya</li>
              <li>• Peduli dengan aksesibilitas, SEO, dan best practice</li>
            </ul>
          </div>
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/50 backdrop-blur">
            <h3 className="font-semibold">Keahlian</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              {['React', 'Next.js', 'Vite', 'Tailwind', 'TypeScript', 'Framer Motion'].map((s) => (
                <span key={s} className="px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  {s}
                </span>
              ))}
            </div>
            <h3 className="mt-6 font-semibold">Sertifikasi</h3>
            <ul className="mt-3 list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-1">
              <li>Google Mobile Web Specialist</li>
              <li>Meta Front-End Developer</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
