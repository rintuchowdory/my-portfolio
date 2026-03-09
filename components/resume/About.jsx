import React, { useEffect, useRef } from "react";
import { MapPin, Coffee, Code2, Heart } from "lucide-react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Done" },
  { value: "20+", label: "Happy Clients" },
  { value: "3", label: "Awards Won" },
];

const facts = [
  { icon: MapPin, text: "Based in Baesweiler, Germany" },
  { icon: Coffee, text: "Fueled by coffee & Linux terminals" },
  { icon: Code2, text: "Open source contributor on GitHub" },
  { icon: Heart, text: "Loves cloud computing & cricket" },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current?.querySelectorAll(".section-reveal").forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 150);
        });
      }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-32 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="section-reveal relative">
          <div className="relative rounded-3xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80&fit=crop" alt="Working" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/20 via-transparent to-[#0a0a0f]/80" />
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            {stats.map((s, i) => (
              <div key={i} className="glass-gold rounded-2xl p-5 text-center hover-lift">
                <div className="text-3xl font-black gradient-text">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="section-reveal mb-3">
            <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">About Me</span>
          </div>
          <h2 className="section-reveal text-4xl md:text-5xl font-black mb-6 leading-tight">
            Turning infrastructure into<br /><span className="gradient-text">cloud reality</span>
          </h2>
          <p className="section-reveal text-gray-400 text-lg leading-relaxed mb-6">
            I'm a Linux Administrator & Cloud/DevOps Engineer with hands-on expertise in AWS, Docker, Kubernetes, and CI/CD pipelines. I build reliable, scalable infrastructure and automate workflows using GitHub Actions and shell scripting.
          </p>
          <p className="section-reveal text-gray-500 leading-relaxed mb-10">
            Multilingual professional (Bengali, German B2, English B2, Russian B1) with a diverse background across production, logistics, and IT. When I'm not in the terminal, I enjoy football, cricket, and swimming.
          </p>
          <div className="section-reveal grid grid-cols-1 sm:grid-cols-2 gap-3">
            {facts.map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                <Icon size={16} className="text-[#c9a84c] shrink-0" />
                <span className="text-sm text-gray-400">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
