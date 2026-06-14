import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Globe, Wrench } from "lucide-react";

const ALL_PROJECTS = [
  { title: "AmtAssist", desc: "AI-powered German bureaucracy assistant.", tags: ["React","AI","Vercel"], live: "https://amtassist.vercel.app", github: "https://github.com/rintuchowdory/amtassist", status: "live" },
  { title: "Athan App", desc: "Islamic prayer times app.", tags: ["React","Vercel"], live: "https://athan-app-puce.vercel.app", github: "https://github.com/rintuchowdory/athan-app", status: "live" },
  { title: "Aura-AI", desc: "AI-powered interview coach with voice mode and Cloudflare Worker proxy.", tags: ["React","Vite","Groq","Cloudflare"], live: "https://aura-ai-phi-one.vercel.app", github: "https://github.com/rintuchowdory/Aura-AI", status: "live" },
  { title: "Bürokratie Simulator 2026", desc: "Satirical German bureaucracy simulator.", tags: ["React","Manus"], live: "https://buerosim-jagns6gc.manus.space", github: "https://github.com/rintuchowdory/buerokratie-simulator-2026", status: "live" },
  { title: "ChatGPT Clone (NexusAI)", desc: "Dark-themed GPT clone with multi-session sidebar, streaming & voice/Talk Mode. Built on Alpine Linux via QEMU.", tags: ["FastAPI","Groq","Vercel"], live: "https://chatgpt-clone-ten-steel.vercel.app", github: "https://github.com/rintuchowdory/chatgpt-clone", status: "live" },
  { title: "Chatgpt-Rintu", desc: "ChatGPT UI built with Lovable.", tags: ["Lovable","AI"], live: "https://chatgpt-rintu.lovable.app", github: "https://github.com/rintuchowdory/chatgpt-rintu", status: "live" },
  { title: "Clocklytics", desc: "Time analytics dashboard.", tags: ["React","Manus"], live: "https://clocklytics-s2kza6c7.manus.space", github: "https://github.com/rintuchowdory/clocklytics", status: "live" },
  { title: "Codex Divine", desc: "Deployed on Cloudflare Pages.", tags: ["Cloudflare Pages"], live: "https://b4cda6d1.codex-divine.pages.dev/", github: "https://github.com/rintuchowdory/codex-divine", status: "live" },
  { title: "Cool Platform", desc: "Demo platform deployed to Vercel.", tags: ["Vercel"], live: "https://cool-pltfrm.vercel.app", github: "https://github.com/rintuchowdory/cool-pltfrm", status: "live" },
  { title: "Freelancer Toolkit Germany", desc: "Tools for German freelancers.", tags: ["React","Manus"], live: "https://freelancetk-yundewau.manus.space", github: "https://github.com/rintuchowdory/freelancer-toolkit-germany", status: "live" },
  { title: "German Call Companion", desc: "German phone call assistance app.", tags: ["Lovable","AI"], live: "https://handy-helper-helfer.lovable.app", github: "https://github.com/rintuchowdory/german-call-companion", status: "live" },
  { title: "Germany People Finder", desc: "People search tool for Germany.", tags: ["Lovable"], live: "https://find-germany-folk.lovable.app", github: "https://github.com/rintuchowdory/germany-people-finder", status: "live" },
  { title: "GrundgesetzGPT", desc: "AI-powered German Basic Law app — deployed to Manus, using Groq Llama3-70b via Cloudflare Worker.", tags: ["React","Vite","Groq","Cloudflare"], live: "https://grundgpt-fvh7k5f7.manus.space", github: "https://github.com/rintuchowdory/grundgesetz-gpt", status: "live" },
  { title: "Islamic Hub", desc: "Islamic resource hub with prayer tools.", tags: ["React","Vercel"], live: "https://islamic-hub-theta.vercel.app", github: "https://github.com/rintuchowdory/islamic-hub", status: "live" },
  { title: "Krankenkasse Navigator", desc: "German health insurance comparison tool. 16 files pushed via Zapier MCP to GitHub Pages.", tags: ["React","Vite","GitHub Pages","Groq"], live: "https://krankenkasse-navigator.pages.dev/", github: "https://github.com/rintuchowdory/krankenkasse-navigator", status: "live" },
  { title: "Landio Clone", desc: "Framer-exported landing page deployed to Cloudflare Pages.", tags: ["Framer","Cloudflare"], live: "https://modern-yards-793817.framer.app/", github: "https://github.com/rintuchowdory/landio-clone", status: "live" },
  { title: "Leben in Deutschland", desc: "Civics & life-in-Germany companion app.", tags: ["Render"], live: "https://leben-in-deutschland-sp8q.onrender.com/", github: "https://github.com/rintuchowdory/leben-in-deutschland", status: "live" },
  { title: "My Expert Portfolio", desc: "Next.js portfolio with Genkit/Gemini AI integration.", tags: ["Next.js","Gemini","Vercel"], live: "https://my-expert-portfolio.vercel.app", github: "https://github.com/rintuchowdory/my-expert-portfolio", status: "live" },
  { title: "My Music App", desc: "Music streaming UI.", tags: ["React","Vercel"], live: "https://my-musicapp.vercel.app", github: "https://github.com/rintuchowdory/my-musicapp", status: "live" },
  { title: "OpenClow AI", desc: "AI-powered cloud tool.", tags: ["AI","Manus"], live: "https://openclowai-hghmf2wg.manus.space", github: "https://github.com/rintuchowdory/openclow", status: "live" },
  { title: "Phishing Lab", desc: "Cybersecurity awareness & phishing simulation lab.", tags: ["Security","Vercel"], live: "https://phishing-lab.vercel.app", github: "https://github.com/rintuchowdory/phishing-lab", status: "live" },
  { title: "Pitch Visualizer", desc: "Startup pitch deck visualizer.", tags: ["Replit"], live: "https://pitch-visualizer--rintuchowdory.replit.app", github: "https://github.com/rintuchowdory/pitch-visulizer", status: "live" },
  { title: "Rintu (Personal Site)", desc: "Personal homepage on Render.", tags: ["Render"], live: "https://rintu.onrender.com", github: "https://github.com/rintuchowdory/rintu", status: "live" },
  { title: "SaaS Auth CI Dashboard", desc: "SaaS authentication + CI/CD dashboard.", tags: ["GitHub Pages","CI/CD"], live: "https://rintuchowdory.github.io/saas-auth-ci-dashboard/", github: "https://github.com/rintuchowdory/saas-auth-ci-dashboard", status: "live" },
  { title: "Schufa Open Platform", desc: "Open credit scoring platform alternative.", tags: ["Render","FinTech"], live: "https://schufa-open-platform.onrender.com", github: "https://github.com/rintuchowdory/schufa-open-platform", status: "live" },
  { title: "SpiritLevel", desc: "Digital spirit level web app.", tags: ["React","Vercel"], live: "https://spirit-level-one.vercel.app", github: "https://github.com/rintuchowdory/SpiritLevel", status: "live" },
  { title: "Tesla Chatbot", desc: "Tesla-themed AI chatbot.", tags: ["AI","Render"], live: "https://tesla-chatbot-1.onrender.com", github: "https://github.com/rintuchowdory/tesla-chatbot", status: "live" },
  { title: "WarShip Tracker", desc: "Real-time warship tracking dashboard using Leaflet.js.", tags: ["Leaflet.js","Manus"], live: "https://warshipapp-ans4yvej.manus.space", github: "https://github.com/rintuchowdory/warship-tracker", status: "live" },
  { title: "WerRiefAn.de", desc: "German reverse phone lookup — React/Vite + Cloudflare Worker + KV. In active development.", tags: ["React","Cloudflare","KV"], github: "https://github.com/rintuchowdory/werriefan", status: "wip" },
  { title: "WhatsFlow", desc: "WhatsApp automation flow tool.", tags: ["GitHub Pages"], live: "https://rintuchowdory.github.io/WhatsFlow/", github: "https://github.com/rintuchowdory/WhatsFlow", status: "live" },
  { title: "WhatsFlow Landing Page", desc: "Marketing landing page for WhatsFlow.", tags: ["Vercel"], live: "https://whatsflow-landing-page.vercel.app", github: "https://github.com/rintuchowdory/whatsflow-landing-page", status: "live" },
  { title: "CinemAI", desc: "Netflix-style movie app powered by Groq API.", tags: ["React","Groq"], github: "https://github.com/rintuchowdory/cinemai", status: "wip" },
  { title: "ContractAI", desc: "AI contract analysis tool using Gemini API.", tags: ["React","Gemini"], github: "https://github.com/rintuchowdory/contractai", status: "wip" },
  { title: "AntragGPT", desc: "AI German government form assistant.", tags: ["React","AI"], github: "https://github.com/rintuchowdory/antraggpt", status: "wip" },
  { title: "Name statt Können", desc: "Social impact platform visualizing hiring discrimination in Germany.", tags: ["React","Vite","Tailwind"], github: "https://github.com/rintuchowdory/name-statt-koennen", status: "wip" },
  { title: "SteuerHeld", desc: "German tax return helper app.", tags: ["React","AI"], github: "https://github.com/rintuchowdory/steuerheld", status: "wip" },
  { title: "ARMBoost", desc: "Python/customtkinter Windows desktop optimization app for ARM64 laptops.", tags: ["Python","tkinter","ARM64"], github: "https://github.com/rintuchowdory/arm-performance-lab", status: "wip" },
  { title: "k8s-project", desc: "WSL2 home lab with k3s — full Kubernetes Dashboard + comprehensive K8s resources.", tags: ["Kubernetes","k3s","WSL2"], github: "https://github.com/rintuchowdory/k8s-project", status: "wip" },
  { title: "DevOps Mesh", desc: "FastAPI + Astro microservices portfolio dashboard.", tags: ["FastAPI","Astro","DevOps"], github: "https://github.com/rintuchowdory/devops-portfolio-microservice", status: "wip" },
  { title: "SkyTrace", desc: "Flight tracker using Leaflet.js and OpenSky API via Cloudflare Worker proxy.", tags: ["Leaflet.js","Cloudflare","API"], github: "https://github.com/rintuchowdory/flight-tracker", status: "wip" },
  { title: "OrbitWatch", desc: "Rocket & satellite tracker using Leaflet.js.", tags: ["Leaflet.js","Space API"], github: "https://github.com/rintuchowdory/rocket-tracker", status: "wip" },
  { title: "Luftlinie", desc: "German distance calculator between cities.", tags: ["React","Maps"], github: "https://github.com/rintuchowdory/luftlinie", status: "wip" },
  { title: "Project Tesla", desc: "Tesla chatbot alternative instance.", tags: ["AI","Render"], live: "https://tesla-chatbot-1.onrender.com/", github: "https://github.com/rintuchowdory/project-tesla", status: "live" },
  { title: "Flutter Portfolio App", desc: "Portfolio app built in Flutter/Dart, deployed to GitHub Pages via GitHub Actions CI/CD.", tags: ["Flutter","Dart","GitHub Actions"], live: "https://rintuchowdory.github.io", github: "https://github.com/rintuchowdory/Project-Flutter-Android", status: "live" },
  { title: "Islamischer Quiz", desc: "Islamic knowledge quiz app.", tags: ["React"], github: "https://github.com/rintuchowdory/islamischer-quiz", status: "wip" },
  { title: "Tasbih Counter", desc: "Digital Islamic tasbih counter app.", tags: ["React","PWA"], github: "https://github.com/rintuchowdory/tasbih-counter-app", status: "wip" },
  { title: "Free PDF Merger", desc: "Client-side PDF merge tool.", tags: ["JavaScript","PDF"], github: "https://github.com/rintuchowdory/free-pdf-merger", status: "wip" },
  { title: "Codespaces React", desc: "React app started in GitHub Codespaces.", tags: ["React","Codespaces"], live: "https://codespaces-react-gamma-six.vercel.app", github: "https://github.com/rintuchowdory/codespaces-react", status: "live" },
  { title: "Remix Visual Landing Page", desc: "Remix of visual landing page template.", tags: ["Vercel"], live: "https://remix-of-visual-landing-page-websit-rintu.vercel.app/", github: "https://github.com/rintuchowdory/remix-of-visual-landing-page-website-template", status: "live" },
  { title: "Rintu Project", desc: "General Vercel-deployed project.", tags: ["Vercel"], live: "https://rintu-project-seven.vercel.app", github: "https://github.com/rintuchowdory/Rintu-project", status: "live" },
  { title: "ReiseFreunde", desc: "Travel companion app concept.", tags: ["React"], github: "https://github.com/rintuchowdory/ReiseFreunde", status: "wip" },
  { title: "Habit Tracker", desc: "Daily habit tracking app.", tags: ["React"], github: "https://github.com/rintuchowdory/habit-tracker", status: "wip" },
  { title: "Recipe Vault", desc: "Recipe storage and discovery app.", tags: ["React"], github: "https://github.com/rintuchowdory/recipevault", status: "wip" },
  { title: "Quantum Particle Explorer", desc: "Physics visualization app.", tags: ["JavaScript","Canvas"], github: "https://github.com/rintuchowdory/quantum-particle-explorer", status: "wip" },
  { title: "TaxEasy App", desc: "Tax filing simplification app for Germany.", tags: ["React","FinTech"], github: "https://github.com/rintuchowdory/taxeasy-app", status: "wip" },
  { title: "Sentinel SOC", desc: "Security Operations Center dashboard.", tags: ["Security","Dashboard"], github: "https://github.com/rintuchowdory/sentinel-soc", status: "wip" },
  { title: "Freelancer Toolkit Germany", desc: "Tools for German freelancers — invoice gen, tax calc.", tags: ["React","Manus"], live: "https://freelancetk-yundewau.manus.space", github: "https://github.com/rintuchowdory/freelancer-toolkit-germany", status: "live" },
  { title: "ASET Site", desc: "Association/organization website.", tags: ["React"], github: "https://github.com/rintuchowdory/aset-site", status: "wip" },
  { title: "Enterprise Mono", desc: "Enterprise monorepo scaffold.", tags: ["DevOps","Monorepo"], github: "https://github.com/rintuchowdory/enterprise-mono", status: "wip" },
];

const FEATURED = ["GrundgesetzGPT","Krankenkasse Navigator","Aura-AI","ChatGPT Clone (NexusAI)","WerRiefAn.de","k8s-project","ARMBoost","Name statt Können"];

const tagColors = {
  "React": "#61DAFB", "Vite": "#646CFF", "Groq": "#c9a84c", "AI": "#c9a84c",
  "Cloudflare": "#F48120", "GitHub Pages": "#6e5494", "Next.js": "#ffffff",
  "FastAPI": "#009688", "Python": "#3776AB", "Flutter": "#02569B",
  "Kubernetes": "#326CE5", "Docker": "#2496ED", "AWS": "#FF9900",
  "Vercel": "#ffffff", "Render": "#46E3B7", "Security": "#ef4444",
  "Leaflet.js": "#199900", "Manus": "#7c6ee0",
};

function tag_color(tag) {
  return tagColors[tag] || "#9ca3af";
}

export default function Projects() {
  const ref = useRef(null);
  const [filter, setFilter] = useState("featured");
  const [showAll, setShowAll] = useState(false);

  const filters = [
    { key: "featured", label: "⭐ Featured" },
    { key: "live", label: "🚀 Deployed" },
    { key: "wip", label: "🔧 In Progress" },
    { key: "all", label: "All 85+" },
  ];

  const featured = ALL_PROJECTS.filter(p => FEATURED.includes(p.title));
  const displayed = filter === "featured" ? featured
    : filter === "all" ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.status === filter);

  const visible_projects = showAll ? displayed : displayed.slice(0, 12);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current?.querySelectorAll(".section-reveal").forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 80);
        });
      }
    }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="section-reveal mb-3"><span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">Portfolio</span></div>
          <h2 className="section-reveal text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">85+ Projects</span> on GitHub
          </h2>
          <p className="section-reveal text-gray-400 max-w-xl mx-auto">From AI-powered civic tools to Kubernetes home labs — a growing portfolio of self-built, production-deployed work.</p>
        </div>

        {/* Filter tabs */}
        <div className="section-reveal flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => { setFilter(f.key); setShowAll(false); }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === f.key
                  ? "gold-bg text-black"
                  : "glass border border-white/10 text-gray-400 hover:text-white hover:border-[#c9a84c]/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible_projects.map((project, i) => (
            <div key={project.title + i} className="section-reveal group glass rounded-2xl overflow-hidden hover-lift" style={{ transitionDelay: `${(i % 12) * 60}ms` }}>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {project.status === "live"
                      ? <Globe size={14} className="text-green-400 flex-shrink-0" />
                      : <Wrench size={14} className="text-yellow-500 flex-shrink-0" />
                    }
                    {FEATURED.includes(project.title) && (
                      <span className="text-xs px-2 py-0.5 rounded-full glass-gold text-[#c9a84c] font-bold">Featured</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[#c9a84c] transition-colors"
                        title="Live Demo">
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                      title="GitHub">
                      <Github size={12} />
                    </a>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#c9a84c] transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full font-medium border"
                      style={{ color: tag_color(tag), borderColor: `${tag_color(tag)}33`, backgroundColor: `${tag_color(tag)}0d` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && displayed.length > 12 && (
          <div className="section-reveal text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 rounded-full glass border border-[#c9a84c]/30 text-[#c9a84c] font-semibold text-sm hover:bg-[#c9a84c]/10 transition-all"
            >
              Show All {displayed.length} Projects
            </button>
          </div>
        )}

        <div className="section-reveal text-center mt-8">
          <a href="https://github.com/rintuchowdory" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border border-white/10 text-gray-300 hover:text-white font-semibold text-sm transition-all">
            <Github size={16} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
