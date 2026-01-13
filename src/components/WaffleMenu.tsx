import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, Mail, Github, Linkedin } from 'lucide-react';
import { RESUME_URL } from '../constants/resume';

export const WaffleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Resume', icon: Download, action: () => window.open(RESUME_URL, '_blank', 'noopener,noreferrer'), external: true },
    { title: 'GitHub', icon: Github, action: () => window.open('https://github.com/calvinkarthik', '_blank'), external: true },
    { title: 'LinkedIn', icon: Linkedin, action: () => window.open('https://linkedin.com/in/calvinkarthik', '_blank'), external: true },
    { title: 'Email', icon: Mail, action: () => window.open('mailto:calvin.g.karthik@gmail.com'), external: false },
    { title: 'Devpost', icon: ExternalLink, action: () => window.open('https://devpost.com/software/pawgress-t78w9h', '_blank'), external: true },
    { title: 'CSFJ Paper', icon: ExternalLink, action: () => window.open('#paper', '_blank'), external: true },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 p-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl hover:bg-white/15 transition-all duration-200"
      >
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-cyan-400 rounded-full" />
          ))}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="fixed top-20 right-6 z-[61] p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl min-w-[280px]"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={20} className="text-gray-400" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.title}
                      onClick={item.action}
                      className="flex flex-col items-center p-3 hover:bg-white/10 rounded-lg transition-all duration-200 group"
                    >
                      <Icon size={24} className="text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>Email: calvin.g.karthik@gmail.com</span>
                  <button
                    onClick={() => navigator.clipboard.writeText('calvin.g.karthik@gmail.com')}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Copy
                  </button>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
                  <span>Phone: (705) 927-0366</span>
                  <button
                    onClick={() => navigator.clipboard.writeText('(705) 927-0366')}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
