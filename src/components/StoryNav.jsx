import { useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export default function StoryNav({ index, total, auto, onToggleAuto, onPrev, onNext }) {
  const progressRef = useRef(null);

  useEffect(() => {
    if (!auto || !progressRef.current) return;
    progressRef.current.style.width = '0%';
    // animate progress bar per slide
    const id = setTimeout(() => {
      onNext();
    }, 4500);
    let start;
    const step = (ts) => {
      if (!start) start = ts;
      const pct = Math.min(100, ((ts - start) / 4500) * 100);
      if (progressRef.current) progressRef.current.style.width = pct + '%';
      if (pct < 100) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    return () => clearTimeout(id);
  }, [index, auto, onNext]);

  return (
    <div className="sticky top-4 z-20 mx-auto w-full max-w-5xl">
      <div className="rounded-2xl border border-white/10 bg-[#0A0E27]/70 p-3 backdrop-blur">
        <div className="mb-2 h-1 w-full overflow-hidden rounded bg-white/10">
          <div ref={progressRef} className="h-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500 transition-[width]" style={{ width: auto ? '0%' : '100%' }} />
        </div>
        <div className="flex items-center justify-between text-white/80">
          <div className="text-sm">Card {index + 1} of {total}</div>
          <div className="flex items-center gap-2">
            <button onClick={onPrev} className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 hover:bg-white/15">Prev</button>
            <button onClick={onNext} className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 hover:bg-white/15">Next</button>
            <button onClick={onToggleAuto} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 px-3 py-1.5 text-white">
              {auto ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {auto ? 'Pause' : 'Auto-play'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
