import React, { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    label: "Cloud & DevOps", color: "#c9a84c",
    skills: [
      { name: "AWS (EC2, S3, Lambda, VPC, IAM)", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 80 },
      { name: "CI/CD (GitHub Actions, Jenkins)", level: 82 },
    ],
  },
  {
    label: "Linux & Systems", color: "#7c6ee0",
    skills: [
      { name: "Linux Administration", level: 90 },
      { name: "Shell Scripting (Bash)", level: 85 },
      { name: "Linux CLI", level: 92 },
      { name: "Microsoft Excel", level: 75 },
    ],
  },
  {
    label: "Programming", color: "#3b82f6",
    skills: [
      { name: "Python", level: 78 },
      { name: "JavaScript", level: 75 },
      { name: "Dart (Flutter)", level: 72 },
      { name: "HTML Basics", level: 80 },
    ],
  },
];

const techBadges = ["Linux", "AWS", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Python", "JavaScript", "Flutter", "Dart", "Shell", "Git"];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-xs font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: animate ? `${level}%` : "0%", background: `linear-gradient(90deg, ${color}88, ${color})` }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setAnimate(true), 300);
        ref.current?.querySelectorAll(".section-reveal").forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 120);
        });
      }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="section-reveal mb-3">
            <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">What I Know</span>
          </div>
          <h2 className="section-reveal text-4xl md:text-5xl font-black">Skills & <span className="gradient-text">Expertise</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group, gi) => (
            <div key={gi} className="section-reveal glass rounded-3xl p-8 hover-lift" style={{ transitionDelay: `${gi * 100}ms` }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: group.color }} />
                <span className="font-bold text-white">{group.label}</span>
              </div>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} color={group.color} animate={animate} />
              ))}
            </div>
          ))}
        </div>
        <div className="section-reveal text-center">
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech) => (
              <span key={tech} className="px-4 py-2 text-sm font-medium glass rounded-full text-gray-400 hover:text-[#c9a84c] border border-white/5 transition-all duration-300">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
