import { motion } from 'framer-motion';
import { Flame, GitBranch, Calendar, Trophy, Bug, Globe, CloudUpload } from 'lucide-react';

const Card = ({ children, gradient = 'from-cyan-500 via-blue-500 to-purple-600' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
  >
    <div className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${gradient} opacity-20`} />
    <div className="relative">{children}</div>
  </motion.div>
);

export default function StatCards() {
  return (
    <section className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
      <Card gradient="from-emerald-400 via-lime-400 to-cyan-400">
        <div className="mb-2 flex items-center gap-2 text-emerald-300">
          <GitBranch className="h-5 w-5" />
          <span className="text-sm">Total Commits</span>
        </div>
        <div className="text-5xl font-extrabold text-white">12,584</div>
        <p className="mt-2 text-white/70">A year of steady momentum and clean merges.</p>
      </Card>

      <Card gradient="from-amber-400 via-orange-400 to-pink-500">
        <div className="mb-2 flex items-center gap-2 text-amber-300">
          <Calendar className="h-5 w-5" />
          <span className="text-sm">Peak Month</span>
        </div>
        <div className="text-5xl font-extrabold text-white">July</div>
        <p className="mt-2 text-white/70">Your power month with a blazing streak.</p>
      </Card>

      <Card gradient="from-fuchsia-400 via-purple-400 to-cyan-400">
        <div className="mb-2 flex items-center gap-2 text-fuchsia-300">
          <Trophy className="h-5 w-5" />
          <span className="text-sm">Streak Master</span>
        </div>
        <div className="text-5xl font-extrabold text-white">43 days</div>
        <p className="mt-2 text-white/70">Legendary consistency — keep the fire going.</p>
      </Card>

      <Card gradient="from-red-400 via-orange-400 to-yellow-400">
        <div className="mb-2 flex items-center gap-2 text-red-300">
          <Bug className="h-5 w-5" />
          <span className="text-sm">Issues Resolved</span>
        </div>
        <div className="text-5xl font-extrabold text-white">318</div>
        <p className="mt-2 text-white/70">Pixel bugs defeated with precision refactors.</p>
      </Card>

      <Card gradient="from-sky-400 via-cyan-400 to-emerald-400">
        <div className="mb-2 flex items-center gap-2 text-sky-300">
          <Globe className="h-5 w-5" />
          <span className="text-sm">Open Source Impact</span>
        </div>
        <div className="text-5xl font-extrabold text-white">27 countries</div>
        <p className="mt-2 text-white/70">Your code traveled far and sparked collaboration.</p>
      </Card>

      <Card gradient="from-purple-400 via-indigo-400 to-cyan-400">
        <div className="mb-2 flex items-center gap-2 text-purple-300">
          <CloudUpload className="h-5 w-5" />
          <span className="text-sm">Deployments</span>
        </div>
        <div className="text-5xl font-extrabold text-white">56</div>
        <p className="mt-2 text-white/70">Shipped with confidence — velocity meets quality.</p>
      </Card>
    </section>
  );
}
