import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

const floatCards = [
  { label: 'Website', icon: '◐', x: -180, y: -120, delay: 0.1 },
  { label: 'Content', icon: '◑', x: 160, y: -80, delay: 0.2 },
  { label: 'Ads', icon: '◒', x: 200, y: 60, delay: 0.3 },
  { label: 'SEO', icon: '◓', x: -120, y: 140, delay: 0.4 },
  { label: 'Analytics', icon: '◔', x: 100, y: 180, delay: 0.5 },
  { label: 'Growth', icon: '◕', x: -220, y: 20, delay: 0.6 },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const [mouseIn, setMouseIn] = useState(false);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    mx.set(x);
    my.set(y);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-ink-700/20 blur-[100px]" />
      </div>

      {/* Floating cards */}
      <div className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
        {floatCards.map((card) => {
          const tx = useTransform(sx, (v) => v * card.x * 0.3);
          const ty = useTransform(sy, (v) => v * card.y * 0.3);
          return (
            <motion.div
              key={card.label}
              style={{ x: tx, y: ty }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: mouseIn ? 0.5 : 0.25, scale: 1 }}
              transition={{ delay: card.delay, duration: 1 }}
              className="absolute flex items-center gap-2 rounded-full border border-ink-700/50 bg-ink-900/40 px-4 py-2 backdrop-blur-sm"
            >
              <span className="text-accent-400">{card.icon}</span>
              <span className="text-sm text-ink-300">{card.label}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-800 bg-ink-900/50 px-4 py-1.5 text-xs text-ink-300 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
          </span>
          Custom scoped. Pay as you go.
        </motion.div>

        <h1 className="font-display text-[2.75rem] font-semibold leading-[0.95] tracking-tight text-ink-50 sm:text-6xl lg:text-7xl xl:text-8xl">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              We don't build
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.65, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              websites.
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="block text-ink-400"
            >
              We build reasons
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.95, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              to choose you.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mx-auto mt-8 max-w-xl text-balance text-lg text-ink-300 sm:text-xl"
        >
          Websites, content and growth systems designed around your business, not a template.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#configurator"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-accent-400 px-7 py-3.5 font-medium text-ink-950 transition-transform hover:scale-[1.03] active:scale-95"
          >
            <span className="relative z-10">Start a Project</span>
            <ArrowUpRight size={18} className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="absolute inset-0 translate-y-full bg-ink-50 transition-transform duration-300 group-hover:translate-y-0" />
          </a>
          <a
            href="#services"
            className="rounded-full border border-ink-700 px-7 py-3.5 font-medium text-ink-200 transition-colors hover:border-ink-500 hover:text-ink-50"
          >
            See Our Approach
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-ink-500">
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom statement */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 text-center text-sm text-ink-500 lg:block"
      >
        Tell us what you need. We'll figure out what it should cost.
      </motion.p>
    </section>
  );
}
