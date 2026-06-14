import React, { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Cloud & DevOps",
    color: "#FF9900",
    skills: [
      { name: "AWS (EC2, S3, Lambda, VPC, IAM)", pct: 82 },
      { name: "Docker", pct: 88 },
      { name: "Kubernetes / k3s", pct: 80 },
      { name: "CI/CD (GitHub Actions, Jenkins)", pct: 84 },
      { name: "Cloudflare Workers & KV", pct: 87 },
      { name: "n8n AI Workflows", pct: 78 },
    ]
  },
  {
    category: "Frontend Development",
    color: "#61DAFB",
    skills: [
      { name: "React + Vite", pct: 90 },
      { name: "Next.js", pct: 78 },
      { name: "Tailwind CSS", pct: 85 },
      { name: "Flutter / Dart", pct: 72 },
      { name: "HTML / CSS", pct: 88 },
    ]
  },
  {
    category: "Backend & AI",
    color: "#c9a84c",
    skills: [
      { name: "FastAPI (Python)", pct: 80 },
      { name: "Groq / Llama3-70b", pct: 85 },
      { name: "Google Gemini API", pct: 78 },
      { name: "Anthropic Claude API", pct: 82 },
      { name: "Python", pct: 78 },
    ]
  },
  {
    category: "Linux & Systems",
    color: "#10b981",
    skills: [
      { name: "Linux Administration", pct: 90 },
      { name: "Shell Scripting (Bash)", pct: 85 },
      { name: "WSL2 / QEMU / ARM64", pct: 82 },
      { name: "Git & GitHub", pct: 92 },
    ]
  },
];

const techBadges = [
  "Linux","AWS","Docker","Kubernetes","GitHub Actions","Jenkins","Python","JavaScript",
  "React","Vite","Next.js","FastAPI","Cloudflare","n8n","Flutter","Dart","Shell",
  "Git","Groq","Gemini","Anthropic","Vercel","Render","Tailwind"
];

function SkillBar({ name, pct, color }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-gray-300 text-sm">{name}</span>
        <span className="text-xs font-bold" style={{ color }}>{pct}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current?.querySelectorAll(".section-reveal").forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 100);
        });
        // Animate bars
        ref.current?.querySelectorAll("[data-bar]").forEach(el => {
          el.style.width = el.getAttribute("data-bar") + "%";
        });
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-reveal mb-3"><span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">What I Know</span></div>
          <h2 className="section-reveal text-4xl md:text-5xl font-black">Skills & <span className="gradient-text">Expertise</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillGroups.map((group) => (
            <div key={group.category} className="section-reveal glass rounded-2xl p-7 hover-lift">
              <h3 className="font-bold text-base mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: group.color }} />
                <span style={{ color: group.color }}>{group.category}</span>
              </h3>
              {group.skills.map(s => <SkillBar key={s.name} name={s.name} pct={s.pct} color={group.color} />)}
            </div>
          ))}
        </div>

        <div className="section-reveal">
          <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map(t => (
              <span key={t} className="glass px-4 py-2 rounded-full text-sm text-gray-300 border border-white/5 hover:border-[#c9a84c]/30 hover:text-white transition-all">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
