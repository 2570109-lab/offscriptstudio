import { motion } from 'framer-motion';
import { Heart, MessageCircle, Send, Bookmark, Play } from 'lucide-react';

const services = [
  'Content strategy', 'Reels', 'Creative direction',
  'Instagram management', 'Content calendars', 'Campaigns', 'Community growth',
];

const marqueeItems = ['STRATEGY', 'CONTENT', 'CREATIVE', 'DISTRIBUTION', 'ANALYTICS', 'OPTIMIZATION'];

const posts = [
  { type: 'reel', caption: 'How a small brand doubled its reach in 30 days', likes: '2.4k', comments: 89 },
  { type: 'image', caption: 'Designing for trust, not just attention', likes: '1.8k', comments: 52 },
  { type: 'reel', caption: 'The 3-second rule that changed our content strategy', likes: '3.1k', comments: 124 },
  { type: 'image', caption: 'Your website is your hardest working employee', likes: '956', comments: 34 },
];

export default function SocialGrowth() {
  return (
    <section id="growth" className="relative overflow-hidden py-32 sm:py-40">
      <div className="px-6">
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-400">08 — Social Growth</span>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink-50 sm:text-5xl lg:text-6xl">
            Your website gets the click.
            <br />
            <span className="text-ink-400">Your content earns the attention.</span>
          </h2>
        </div>
      </div>

      <div className="grid gap-8 px-6 lg:grid-cols-[1fr_400px]">
        <div className="flex flex-wrap gap-3">
          {services.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-full border border-ink-700 bg-ink-900/40 px-5 py-2.5 text-sm text-ink-200 transition-colors hover:border-accent-400/30 hover:text-accent-400"
            >
              {s}
            </motion.span>
          ))}
        </div>

        {/* Instagram-style feed mockup */}
        <div className="rounded-3xl border border-ink-800 bg-ink-900/40 p-4">
          <div className="flex items-center gap-3 border-b border-ink-800 pb-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-accent-400 to-accent-600 p-0.5">
              <div className="h-full w-full rounded-full bg-ink-900" />
            </div>
            <div>
              <p className="text-sm font-medium text-ink-100">Offscript Studio</p>
              <p className="text-xs text-ink-500">Digital Growth Studio</p>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-ink-800 bg-ink-950/50 p-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-ink-500">{post.type === 'reel' ? 'Reel' : 'Post'}</span>
                  <span className="font-mono text-xs text-ink-600">#{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className={`mt-3 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br ${
                  i % 2 === 0 ? 'from-ink-800 to-ink-900' : 'from-accent-900/30 to-ink-900'
                }`}>
                  {post.type === 'reel' ? (
                    <Play size={32} className="text-ink-400" fill="currentColor" />
                  ) : (
                    <span className="font-display text-2xl text-ink-600">Offscript</span>
                  )}
                </div>
                <p className="mt-3 text-sm text-ink-200">{post.caption}</p>
                <div className="mt-3 flex items-center gap-4 text-xs text-ink-500">
                  <span className="flex items-center gap-1"><Heart size={14} /> {post.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle size={14} /> {post.comments}</span>
                  <span className="flex items-center gap-1"><Send size={14} /></span>
                  <span className="ml-auto"><Bookmark size={14} /></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling content strip */}
      <div className="mt-16 flex overflow-hidden border-y border-ink-800 py-6">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex shrink-0 gap-8 pr-8"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="font-display text-3xl font-medium text-ink-700">
              {item} <span className="text-accent-400">/</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
