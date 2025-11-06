import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function HeroScene() {
  const [muted, setMuted] = useState(true);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0A0E27]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Grain + Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e27]/20 to-[#0a0e27]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(transparent 0, rgba(255,255,255,0.06) 1px)", backgroundSize: '4px 4px' }} />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="pointer-events-none w-full max-w-5xl">
          <div className="pointer-events-auto mx-auto w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Interactive 3D — move your mouse
            </div>
            <h1 className="bg-gradient-to-br from-purple-300 via-cyan-200 to-sky-300 bg-clip-text text-center text-4xl font-black leading-tight text-transparent md:text-6xl">
              Developer Recapped 2024
            </h1>
            <p className="mt-3 text-center text-white/80 md:text-lg">
              Terminal aesthetics, glass vibes, and your year in code — compiled into a shareable story.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5b21b6] via-[#7c3aed] to-[#06b6d4] px-5 py-2.5 font-medium text-white shadow-lg shadow-purple-900/30 transition-transform hover:scale-[1.02]">
                <Rocket className="h-5 w-5" />
                Launch Recap
              </button>
              <button
                onClick={() => setMuted((m) => !m)}
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/15"
              >
                {muted ? 'Enable' : 'Mute'} ambience
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
