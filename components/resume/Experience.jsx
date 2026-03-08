import React, { useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  { role: "Produktionsassistent (Medizintechnik)", company: "Meotec GMBH", location: "Aachen", period: "03/2025 – 11/2025", type: "Full-time", description: "Reinigung und Bearbeitung von Medizinprodukten. Messen und Prüfen von Bauteilen. Erfassung und Dokumentation von Fertigungsschritten.", tags: ["Medizintechnik", "Qualitätsprüfung", "Dokumentation"], color: "#c9a84c" },
  { role: "Produktions- und Lagerhelfer", company: "Abiomed Europe GmbH", location: "Aachen", period: "05/2023 – 12/2024", type: "Full-time", description: "Hochpräzise Klebe-, Skalpell-, Löt- und Montagearbeiten unterm Mikroskop. Warendisposition und Wareneingangskontrolle.", tags: ["Mikroskop-Arbeit", "Qualitätskontrolle", "Logistik"], color: "#7c6ee0" },
  { role: "Kassierer", company: "REWE Stenten", location: "Aachen", period: "03/2022 – 02/2023", type: "Full-time", description: "Kundenbedienung an der Kasse und Mitarbeit im Verkaufsbereich.", tags: ["Kundenkontakt", "Verkauf"], color: "#3b82f6" },
  { role: "Ausbildung zum Verkäufer (IHK)", company: "REWE Fischer", location: "Übach-Palenberg", period: "2019 – 2021", type: "Ausbildung", description: "Abschluss: Verkäufer (IHK), Note Ø 2,0. Mittlere Reife am Berufskolleg Eschweiler.", tags: ["IHK-Abschluss", "Mittlere Reife"], color: "#10b981" },
];

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current?.querySelectorAll(".section-reveal").forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 150);
        });
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref__={ref} className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-reveal mb-3">
            <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">My Journey</span>
          </div>
          <h2 className="section-reveal text-4xl md:text-5xl font-black">Work <span className="gradient-text">Experience</span></h2>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a84c]/50 via-purple-500/30 to-transparent hidden md:block" />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="section-reveal relative flex gap-8">
                <div className="hidden md:flex flex-col items-center pt-1">
                  <div className="w-3 h-3 rounded-full shrink-0 mt-1 z-10" style={{ backgroundColor: exp.color, boxShadow: `0 0 12px ${exp.color}66` }} />
                </div>
                <div className="flex-1 glass rounded-3xl p-8 hover-lift ml-0 md:ml-2">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={13} className="text-[#c9a84c]" />
                        <span className="font-semibold" style={{ color: exp.color }}>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500"><Calendar size={12} /><span>{exp.period}</span></div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500"><MapPin size={12} /><span>{exp.location}</span></div>
                      <span className="text-xs px-2.5 py-1 rounded-full glass-gold text-[#c9a84c]">{exp.type}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full border font-medium" style={{ borderColor: `${exp.color}33`, color: exp.color, backgroundColor: `${exp.color}0d` }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
