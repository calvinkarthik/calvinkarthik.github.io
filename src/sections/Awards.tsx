import { GlassCard } from '../components/GlassCard';
import { Award } from 'lucide-react';

const awards = [
  {
    title: "3rd Place, Energy: Sustainable Materials & Design",
    organization: "Regeneron ISEF",
    date: "May 2022",
    type: "International"
  },
  {
    title: "Award, Ministry of Universities of Salamanca (Spain)",
    organization: "EUCYS",
    date: "Oct 2021",
    type: "European"
  },
  {
    title: "Best Project (Discovery), Energy Challenge, Gold Excellence",
    organization: "CWSF",
    date: "May 2021",
    type: "National"
  },
  {
    title: "Dynacast Engineering Award",
    organization: "Dynacast",
    date: "2024",
    type: "Industry"
  },
  {
    title: "Faculty of Engineering Award of Excellence",
    organization: "McMaster University",
    date: "2024",
    type: "Academic"
  },
  {
    title: "Senior Academic Achievement: Physics (IB)",
    organization: "Academic",
    date: "2024",
    type: "Academic"
  },
  {
    title: "BWXT Nuclear STEM Award",
    organization: "BWXT",
    date: "2024",
    type: "Industry"
  },
  {
    title: "BWXT Nuclear STEM Award",
    organization: "BWXT",
    date: "2024",
    type: "Industry"
  },
  {
    title: "Senior Academic Achievement: Physics (IB)",
    organization: "Academic",
    date: "2024",
    type: "Academic"
  }
];

export const Awards = () => {
  return (
    <section id="awards" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 text-center">Awards & Recognition</h2>
        
        <GlassCard>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-cyan-400" size={32} />
            <h3 className="text-2xl font-semibold text-white">Notable Achievements</h3>
          </div>
          
          <div className="grid gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">{award.title}</h4>
                  <p className="text-cyan-300 font-medium">{award.organization}</p>
                </div>
                <div className="flex flex-col sm:items-end gap-1">
                  <span className="text-gray-400 text-sm">{award.date}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    award.type === 'International' ? 'bg-red-400/20 text-red-300 border border-red-400/30' :
                    award.type === 'European' ? 'bg-blue-400/20 text-blue-300 border border-blue-400/30' :
                    award.type === 'National' ? 'bg-green-400/20 text-green-300 border border-green-400/30' :
                    award.type === 'Industry' ? 'bg-purple-400/20 text-purple-300 border border-purple-400/30' :
                    'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30'
                  }`}>
                    {award.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
