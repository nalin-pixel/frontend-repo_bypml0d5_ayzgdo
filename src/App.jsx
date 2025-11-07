import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400">
        <p>© {new Date().getFullYear()} Nama Anda. Semua hak dilindungi.</p>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:underline">Beranda</a>
          <a href="#projects" className="hover:underline">Proyek</a>
          <a href="#contact" className="hover:underline">Kontak</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
