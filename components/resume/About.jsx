import React, { useEffect, useRef } from "react";
import { Terminal, Cloud, Code2, Brain } from "lucide-react";

const highlights = [
  { icon: Terminal, label: "Linux / WSL2", detail: "Daily driver — k3s, Kubernetes Dashboard, systemd services" },
  { icon: Cloud, label: "Cloud & DevOps", detail: "AWS, Docker, Kubernetes, GitHub Actions, Cloudflare Workers" },
  { icon: Code2, label: "Full-Stack Dev", detail: "React + Vite, Next.js, FastAPI, n8n AI workflows" },
  { icon: Brain, label: "AI Engineering", detail: "Groq Llama3, Gemini, Anthropic — integrated into 30+ apps" },
];

const stats = [
  { value: "85+", label: "GitHub Repos" },
  { value: "30+", label: "Deployed Apps" },
  { value: "5+", label: "Yrs Production Exp." },
  { value: "4", label: "Languages" },
];

export default function About() {
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
    <section id="about" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-reveal mb-3"><span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">About Me</span></div>
          <h2 className="section-reveal text-4xl md:text-5xl font-black">
            Turning <span className="gradient-text">Infrastructure</span> into Reality
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="section-reveal space-y-5 text-gray-400 text-lg leading-relaxed">
            <p>
              I'm a <strong className="text-white">self-taught DevOps practitioner & full-stack developer</strong> based in Baesweiler, NRW — currently working at INGENERIC GmbH in precision optical manufacturing while actively expanding a portfolio of <strong className="text-white">85+ GitHub projects</strong>.
            </p>
            <p>
              My stack revolves around <strong className="text-white">React + Vite frontends</strong> deployed to GitHub Pages or Vercel, <strong className="text-white">Cloudflare Workers</strong> as secure API proxies, <strong className="text-white">Groq/Gemini/Anthropic</strong> as AI backends, and a <strong className="text-white">WSL2 home lab</strong> running k3s and the full Kubernetes Dashboard.
            </p>
            <p>
              I speak Bengali (native), German (B2), English (B2), and Russian (B1) — and bring the same structured, detail-oriented mindset from cleanroom production work into every line of code I write.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["📍 Baesweiler, NRW", "🌐 linkedin.com/in/rintu-chowdory", "📧 rintuchowdory@yahoo.com"].map(t => (
                <span key={t} className="glass px-3 py-1.5 rounded-full text-sm border border-white/5 text-gray-300">{t}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="section-reveal glass-gold rounded-2xl p-5 hover-lift">
                <Icon className="text-[#c9a84c] mb-3" size={24} />
                <h3 className="text-white font-bold mb-1 text-sm">{label}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="section-reveal glass rounded-2xl p-6 text-center hover-lift">
              <div className="text-4xl font-black gradient-text mb-1">{value}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
