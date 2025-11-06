import { useState } from 'react';
import HeroScene from './components/HeroScene';
import StoryNav from './components/StoryNav';
import StatCards from './components/StatCards';
import TerminalCard from './components/TerminalCard';

function App() {
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);
  const total = 4; // hero + terminal + stats grid counts as multiple but we'll paginate simply

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <div className="min-h-screen w-full bg-[#0A0E27] bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(1000px_500px_at_0%_0%,rgba(34,211,238,0.15),transparent)] p-4 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="py-6">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold tracking-wide text-white/80">Developer Recapped</div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              v2024 • Terminal Aesthetic
            </div>
          </div>
        </header>

        <StoryNav index={index} total={total} auto={auto} onToggleAuto={() => setAuto((a) => !a)} onPrev={prev} onNext={next} />

        <div className="mt-6 space-y-8">
          {index === 0 && <HeroScene />}
          {index === 1 && <TerminalCard />}
          {index === 2 && <StatCards />}
          {index === 3 && (
            <section className="mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="bg-gradient-to-r from-amber-300 via-orange-300 to-pink-300 bg-clip-text text-2xl font-bold text-transparent">
                Share & Export
              </h2>
              <p className="mt-2 text-white/75">Export individual cards as PNG or compile a short video for social platforms.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white/80 hover:bg-white/15">PNG</button>
                <button className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white/80 hover:bg-white/15">MP4 (15s)</button>
                <button className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white/80 hover:bg-white/15">PDF Report</button>
              </div>
            </section>
          )}
        </div>

        <footer className="mx-auto mt-12 w-full max-w-5xl pb-10 text-center text-white/50">
          "Late nights, big commits, legendary outcomes" • Crafted with passion
        </footer>
      </div>
    </div>
  );
}

export default App;
