import { motion } from 'framer-motion';
import { Code2, Power } from 'lucide-react';

export default function TerminalCard() {
  const lines = [
    'Initializing Developer Recapped 2024... ✅',
    'Loading repositories... ✅',
    'Aggregating commits... ✅',
    'Rendering contributions heatmap... ✅',
    'Boot complete. Welcome back, Developer!'
  ];

  return (
    <section className="mx-auto mt-10 w-full max-w-5xl">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B102B] shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2 text-white/70">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-red-500/80" />
            <span className="inline-block h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="inline-block h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs uppercase tracking-wider">Terminal</span>
          </div>
          <Power className="h-4 w-4" />
        </div>
        {/* Body */}
        <div className="relative p-4 font-mono text-sm text-emerald-200/90">
          <div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '4px 4px' }} />
          {lines.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.3 }}
              className="relative flex items-start gap-2"
            >
              <Code2 className="mt-1 h-4 w-4 text-cyan-300" />
              <pre className="whitespace-pre-wrap text-emerald-200/90">{l}</pre>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: lines.length * 0.3 + 0.4 }}
            className="mt-4 text-cyan-300"
          >
            $ yarn start --story developer-recapped
          </motion.div>
        </div>
      </div>
    </section>
  );
}
