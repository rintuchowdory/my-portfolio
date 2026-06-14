import React, { useEffect, useRef } from "react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const jobs = [
  {
    role: "Produktionsmitarbeiter – Medizintechnik",
    company: "INGENERIC GmbH",
    location: "Aachen / Würselen",
    period: "03/2025 – Heute",
    type: "current",
    points: [
      "Produktion und Inspektion von Präzisionsoptiken unter Reinraumbedingungen",
      "Messen und Prüfen von Bauteilen nach exakten Qualitätsstandards",
      "Erfassung & Dokumentation von Fertigungsschritten"
    ],
    tags: ["Medizintechnik","Reinraum","Qualitätsprüfung"]
  },
  {
    role: "Bäcker / Verkäufer",
    company: "Nobis Printen",
    location: "Aachen",
    period: "01/2025 – 02/2025",
    type: "past",
    points: ["Bäckerei und Verkauf von Spezialprodukten"],
    tags: ["Kundenkontakt"]
  },
  {
    role: "Produktions- und Lagerhelfer",
    company: "Abiomed Europe GmbH",
    location: "Aachen",
    period: "05/2023 – 12/2024",
    type: "past",
    points: [
      "Hochpräzise Klebe-, Skalpell-, Löt- und Montagearbeiten unterm Mikroskop",
      "Warendisposition, Wareneingangskontrolle",
      "Funktionstest einzelner Baugruppen",
      "Regelmäßige Qualitätsprüfungen & Dokumentation"
    ],
    tags: ["Mikroskop-Arbeit","Qualitätskontrolle","Medizintechnik","Logistik"]
  },
  {
    role: "Kassierer",
    company: "REWE Stenten",
    location: "Aachen",
    period: "03/2022 – 02/2023",
    type: "past",
    points: ["Kundenbedienung an der Kasse (Vollzeit)"],
    tags: ["Kundenkontakt","Verkauf"]
  },
  {
    role: "Verkäufer (Obst & Gemüse)",
    company: "Edeka Jansen",
    location: "Baesweiler",
    period: "07/2021 – 01/2022",
    type: "past",
    points: ["Beratung & Verkauf in der Obst- und Gemüseabteilung"],
    tags: ["Einzelhandel"]
  },
  {
    role: "Ausbildung zum Verkäufer (IHK)",
    company: "REWE Fischer",
    location: "Übach-Palenberg",
    period: "2019 – 2021",
    type: "education",
    points: ["Abschluss: Verkäufer (IHK), Note Ø 2,0", "Mittlere Reife am Berufskolleg Eschweiler"],
    tags: ["IHK-Abschluss","Mittlere Reife"]
  },
];

const education = [
  { institution: "Berufskolleg Eschweiler", degree: "Mittlere Reife (Fachklasse Verkäufer)", period: "2019 – 2021", location: "Eschweiler" },
  { institution: "Berufskolleg KKS Aachen", degree: "Fachklasse Restaurantfachleute", period: "2016 – 2019", location: "Aachen" },
  { institution: "Dhaka (Bangladesh)", degree: "Abitur", period: "2005 – 2007", location: "Dhaka" },
  { institution: "Dhaka (Bangladesh)", degree: "High School", period: "1994 – 2005", location: "Dhaka" },
];

const typeColor = { current: "#c9a84c", past: "#6b7280", education: "#7c6ee0" };

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current?.querySelectorAll(".section-reveal").forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 120);
        });
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-reveal mb-3"><span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">My Journey</span></div>
          <h2 className="section-reveal text-4xl md:text-5xl font-black">Work <span className="gradient-text">Experience</span></h2>
        </div>

        {/* Work Experience Timeline */}
        <div className="relative pl-8 border-l border-white/10 space-y-10 mb-20">
          {jobs.map((job, i) => (
            <div key={i} className="section-reveal relative">
              <div className="absolute -left-[37px] w-4 h-4 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: typeColor[job.type], backgroundColor: job.type === "current" ? typeColor[job.type] : "#0a0a0f" }}>
                {job.type === "current" && <div className="w-2 h-2 rounded-full bg-black" />}
              </div>
              <div className="glass rounded-2xl p-6 hover-lift">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {job.type === "current" && <span className="text-xs px-2 py-0.5 rounded-full bg-[#c9a84c]/20 text-[#c9a84c] font-bold">Aktuell</span>}
                    </div>
                    <h3 className="text-lg font-bold text-white">{job.role}</h3>
                    <p className="text-[#c9a84c] font-semibold text-sm">{job.company}</p>
                  </div>
                  <div className="text-right text-gray-400 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 justify-end"><Calendar size={11} />{job.period}</div>
                    <div className="flex items-center gap-1.5 justify-end"><MapPin size={11} />{job.location}</div>
                  </div>
                </div>
                <ul className="space-y-1 mb-4">
                  {job.points.map((p, j) => (
                    <li key={j} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-[#c9a84c] mt-1.5 flex-shrink-0">·</span>{p}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full glass border border-white/10 text-gray-400">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 className="section-reveal text-2xl font-black mb-8 flex items-center gap-3">
            <GraduationCap className="text-[#c9a84c]" /> Ausbildung & Bildung
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((e, i) => (
              <div key={i} className="section-reveal glass rounded-2xl p-5 hover-lift">
                <p className="text-white font-bold mb-1">{e.degree}</p>
                <p className="text-[#c9a84c] text-sm font-semibold mb-2">{e.institution}</p>
                <div className="flex gap-4 text-gray-500 text-xs">
                  <span className="flex items-center gap-1"><Calendar size={10} />{e.period}</span>
                  <span className="flex items-center gap-1"><MapPin size={10} />{e.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="section-reveal mt-12 glass rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-5 text-white">🌍 Sprachkenntnisse</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { lang: "Bengalisch", level: "Muttersprache", pct: 100 },
              { lang: "Deutsch", level: "B2", pct: 70 },
              { lang: "Englisch", level: "B2", pct: 70 },
              { lang: "Russisch", level: "B1", pct: 50 },
            ].map(l => (
              <div key={l.lang} className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#1f1f2e" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#c9a84c" strokeWidth="3"
                      strokeDasharray={`${l.pct} ${100 - l.pct}`} strokeLinecap="round" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#c9a84c]">{l.level}</span>
                </div>
                <p className="text-white text-sm font-semibold">{l.lang}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
