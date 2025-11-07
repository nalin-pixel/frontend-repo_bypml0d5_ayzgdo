import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Terima kasih, ${name}! Pesan kamu sudah terkirim.`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Mari Bekerja Sama</h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">
              Punya ide proyek atau butuh bantuan? Kirim pesan dan saya akan segera membalas.
            </p>
            <div className="mt-6 flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
              <Mail className="h-5 w-5" />
              <a href="mailto:you@email.com" className="hover:underline">you@email.com</a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/50 backdrop-blur">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-sm text-neutral-600 dark:text-neutral-300">Nama</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm text-neutral-600 dark:text-neutral-300">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm text-neutral-600 dark:text-neutral-300">Pesan</label>
                <textarea name="message" rows={4} required className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-medium hover:opacity-90">
                Kirim <Send className="h-4 w-4" />
              </button>
              {status && <p className="text-sm text-green-600">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
