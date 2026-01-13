// src/sections/About.tsx
import headshot from "../assets/calvin-headshot.png";
import { GlassCard } from "../components/GlassCard";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-white mb-16 text-center">About</h2>

        <GlassCard className="p-8 md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-[auto,1fr]">
            {/* Headshot with cyan accent ring to match experience cards */}
            <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0">
              <div className="absolute inset-0 rounded-full ring-2 ring-cyan-400/70" aria-hidden />
              <div className="absolute -inset-1 rounded-full blur-xl opacity-30 shadow-[0_0_60px] shadow-cyan-400/30" aria-hidden />
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <img
                  src={headshot}
                  alt="Calvin Karthik headshot"
                  className="h-full w-full object-cover scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_65%,rgba(0,0,0,0.3))]" />
              </div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg text-gray-200">
                I'm passionate about creating technology that bridges the digital and physical worlds. From PCB design and embedded control systems to AI-powered mobile apps, I build solutions that are clean, reliable, and actually get used.
              </p>
              <p>
                I'm a Computer Engineering student at McMaster. I've worked on exoskeleton systems, biogas research, and a bunch of portfolio projects. I care about shipping polish.
              </p>
              <p>
                When I'm not wiring or coding, I'm exploring HPC, power systems, and full-stack dev. Always learning, always building.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200 hover:border-cyan-300/60 hover:bg-cyan-400/20 transition-colors">
                  Hardware
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200 hover:border-cyan-300/60 hover:bg-cyan-400/20 transition-colors">
                  Software
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200 hover:border-cyan-300/60 hover:bg-cyan-400/20 transition-colors">
                  Systems Thinking
                </span>
              </div>
            </div>
          </div>

          <div className="my-10 border-t border-white/10" />

          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-white font-semibold">Education</h3>

            <span className="inline-flex flex-wrap items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 hover:border-cyan-300/60 hover:bg-cyan-400/20 transition-colors">
              <span className="font-semibold text-cyan-200">McMaster University</span>
              <span className="text-gray-400 text-xs">B.Eng Computer Engineering (Co-op)</span>
            </span>

            <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-amber-100 text-sm font-semibold hover:border-amber-300/60 hover:bg-amber-400/20 transition-colors">
              Dean's Honour Roll (2025)
            </span>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
