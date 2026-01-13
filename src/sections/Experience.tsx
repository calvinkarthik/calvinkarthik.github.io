import { GlassCard } from '../components/GlassCard';
import { TechChip } from '../components/TechChip';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    title: "Software Engineering Intern",
    organization: "Hivo Inc | Remote",
    duration: "Dec 2025 - Present",
    description: [
      "Ran full end-to-end iOS regression testing on real devices to capture reproducible defects and verify fixes across user journeys.",
      "Implemented TypeScript (Node.js/Express) backend changes with Prisma + PostgreSQL to enforce correct host application behavior and secure permissions.",
      "Reduced edge-case failures by refactoring the update endpoint to accept structured payloads and apply conditional Prisma updates, verified with Jest + Dockerized Postgres."
    ],
    technologies: ["TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Jest", "Docker"]
  },
  {
    title: "Sensors and Actuation Team",
    organization: "McMaster Exoskeleton",
    duration: "Nov 2024 - Present",
    description: [
      "Validated BNO055 IMU performance for joint sensing (outputs, axis conventions, stability-at-rest, calibration behavior) to reduce integration risk during bring-up.",
      "Investigated IMU behavior under real motion (orientation response + sanity checks) to confirm sensor data quality before downstream use in control/estimation.",
      "PCB schematic capture and layout in Altium Designer with attention to signal integrity."
    ],
    technologies: ["Altium Designer", "PCB Design", "Sensor Integration", "Embedded Systems", "IMU Validation"]
  },
  {
    title: "Systems Packaging & Mech-Elec Integration",
    organization: "McMaster Engineering",
    duration: "Nov 2024 - Jun 2025",
    description: [
      "Designed compact multiplexor enclosures; secure, modular harness mounting.",
      "Streamlined Raspberry Pi, multiplexors, and wiring to improve reliability and serviceability.",
      "Rapid cross-functional prototyping across structural, electrical, and ergonomic needs."
    ],
    technologies: ["Raspberry Pi", "System Integration", "Mechanical Design", "Prototyping"]
  },
  {
    title: "Electrical/Software",
    organization: "McMaster SumoBot",
    duration: "Dec 2024 - Jan 2025",
    description: [
      "Built electrical system for dual-motor robot on Arduino Nano; sensor-driven control.",
      "Implemented autonomous navigation and opponent detection algorithms."
    ],
    technologies: ["Arduino", "C++", "Embedded Systems", "Motor Control"]
  },
  {
    title: "Scientific Research",
    organization: "Trent University",
    duration: "May 2022 - May 2023",
    description: [
      "Biogas from mushroom substrate; published in CSFJ.",
      "13 awards including Best Project in Canada + ISEF 3rd Place.",
      "Developed sustainable energy solutions through innovative waste utilization."
    ],
    technologies: ["Research", "Renewable Energy", "Data Analysis", "Scientific Writing"]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 text-center">Experience</h2>
        
        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="text-xl text-cyan-300 font-medium">{exp.organization}</p>
                  <span className="text-gray-400 text-sm">{exp.duration}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <TechChip key={tech} technology={tech} />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
