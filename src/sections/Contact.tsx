import { GlassCard } from '../components/GlassCard';
import { Mail, Linkedin, Github, Download, MapPin } from 'lucide-react';
import { RESUME_URL } from '../constants/resume';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold text-white mb-8 text-center">Let's build something.</h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Always excited to collaborate on innovative projects. Whether it's embedded systems, 
          AI-powered applications, or something entirely new — let's make it happen.
        </p>
        
        <GlassCard className="text-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <a
              href="mailto:calvin.g.karthik@gmail.com"
              className="flex flex-col items-center p-6 rounded-xl hover:bg-cyan-400/10 transition-all duration-300 group border border-transparent hover:border-cyan-400/30"
            >
              <Mail size={32} className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-white mb-2">Email</span>
              <span className="text-gray-400 text-sm">calvin.g.karthik@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/calvinkarthik"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-xl hover:bg-cyan-400/10 transition-all duration-300 group border border-transparent hover:border-cyan-400/30"
            >
              <Linkedin size={32} className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-white mb-2">LinkedIn</span>
              <span className="text-gray-400 text-sm">@calvinkarthik</span>
            </a>

            <a
              href="https://github.com/calvinkarthik"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-xl hover:bg-cyan-400/10 transition-all duration-300 group border border-transparent hover:border-cyan-400/30"
            >
              <Github size={32} className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-white mb-2">GitHub</span>
              <span className="text-gray-400 text-sm">@calvinkarthik</span>
            </a>

            {/* Resume -> open PDF in new tab */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-xl hover:bg-cyan-400/10 transition-all duration-300 group border border-transparent hover:border-cyan-400/30"
              title="Open resume PDF"
            >
              <Download size={32} className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-white mb-2">Resume</span>
              <span className="text-gray-400 text-sm">Open PDF</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <MapPin size={18} className="text-cyan-400" />
              <span>Hamilton / GTA, Ontario</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400 mt-2">
              <span>Phone: (705) 927-0366</span>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Built with care. No trackers, just basic analytics.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
