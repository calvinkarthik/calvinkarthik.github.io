import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ExternalLink } from 'lucide-react';
import { RESUME_URL } from '../constants/resume';

export const Hero = () => {
  type VantaEffect = { destroy?: () => void };
  type VantaHaloOptions = {
    el: HTMLElement;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
  };
  type VantaWindow = Window &
    typeof globalThis & {
      VANTA?: { HALO?: (opts: VantaHaloOptions) => VantaEffect };
      THREE?: typeof import('three');
    };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<VantaEffect | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null;
        if (existing) {
          if (existing.dataset.loaded === 'true' || existing.readyState === 'complete') {
            resolve();
            return;
          }
          const onLoad = () => {
            existing.dataset.loaded = 'true';
            resolve();
          };
          existing.addEventListener('load', onLoad, { once: true });
          existing.addEventListener('error', reject, { once: true });
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => {
          script.dataset.loaded = 'true';
          resolve();
        };
        script.onerror = reject;
        document.body.appendChild(script);
      });

    const initVanta = async () => {
      try {
        const win = window as VantaWindow;

        if (!win.THREE) {
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        }
        if (!win.VANTA?.HALO) {
          await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js');
        }
        if (cancelled || !vantaRef.current || !win.VANTA?.HALO) {
          console.warn('Vanta HALO not initialized');
          return;
        }
        vantaEffect.current = win.VANTA.HALO({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          backgroundColor: 0x0b0b0c,
          baseColor: 0x0b0b0c,
          color: 0x06b6d4,
          backgroundAlpha: 0.85
        });
      } catch (err) {
        console.error('Vanta load error', err);
      }
    };

    initVanta();
    return () => {
      cancelled = true;
      if (vantaEffect.current?.destroy) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Vanta HALO background */}
      <div ref={vantaRef} className="absolute inset-0 z-0 pointer-events-none" />
      {/* Fallback gradient while Vanta loads */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 -z-10 pointer-events-none" />

      <motion.div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">Calvin Karthik</h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">Computer Engineering @ McMaster (Co-op)</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I design and build embedded systems, intelligent apps, and clean UI that ship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 backdrop-blur-md bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 rounded-xl hover:bg-cyan-400/30 transition-all duration-200 font-medium flex items-center gap-2 group"
          >
            View Projects
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Resume -> open PDF in new tab */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/15 transition-all duration-200 font-medium flex items-center gap-2 group"
          >
            <Download size={18} />
            Download Resume
          </a>

          <a
            href="mailto:calvin.g.karthik@gmail.com"
            className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/15 transition-all duration-200 font-medium flex items-center gap-2 group"
          >
            <Mail size={18} />
            Email Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
