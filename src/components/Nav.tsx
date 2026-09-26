import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Growth', href: '#growth' },
  { label: 'About', href: '#about' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-1/2 top-4 z-[100] w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2"
      >
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
            scrolled ? 'glass shadow-2xl shadow-black/40' : 'bg-transparent'
          }`}
        >
          <a href="#top" className="flex items-center gap-1 font-display text-base font-semibold tracking-tight sm:text-lg">
            Offscript<span className="text-accent-400"> Studio</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative px-4 py-2 text-sm text-ink-300 transition-colors hover:text-ink-50"
              >
                {l.label}
                <span className="absolute bottom-1 left-4 h-px w-0 bg-accent-400 transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#configurator"
              className="group relative overflow-hidden rounded-full bg-ink-50 px-3 py-2 text-xs font-medium text-ink-950 transition-transform hover:scale-[1.03] active:scale-95 sm:px-5 sm:text-sm"
            >
              <span className="relative z-10">Start a Project</span>
              <span className="absolute inset-0 translate-y-full bg-accent-400 transition-transform duration-300 group-hover:translate-y-0" />
            </a>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
