import React, { useEffect, useRef } from "react";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  { title: "Reddit Clone", description: "Full-Stack Web App with Firebase AI Logic and real-time monitoring.", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80&fit=crop", tags: ["React", "Firebase", "JavaScript"], stars: 128, live: "#", github: "https://github.com/rintuchowdory/reddit-clone", featured: true, color: "#c9a84c" },
  { title: "Flutter Android App", description: "Mobile App development with Dart and Flutter. Cross-platform Android application.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&fit=crop", tags: ["Flutter", "Dart", "Android"], stars: 87, live: "#", github: "https://github.com/rintuchowdory/project-flutter-android", featured: true, color: "#7c6ee0" },
  { title: "AWS Cloud Infrastructure", description: "Scalable cloud setup using AWS EC2, S3, Lambda, VPC, IAM with full CI/CD pipeline.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&fit=crop", tags: ["AWS", "EC2", "Lambda", "GitHub Actions"], stars: 64, live: "#", github: "https://github.com/rintuchowdory", featured: false, color: "#3b82f6" },
  { title: "Linux Admin Toolkit", description: "Shell scripting collection and Linux administration utilities with Docker configs.", image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=80&fit=crop", tags: ["Linux", "Shell", "Docker", "Kubernetes"], stars: 52, live: "#", github: "https://github.com/rintuchowdory", featured: false, color: "#10b981" },
];

function ProjectCard({ project, idx }) {
  return (
    <div className="section-reveal group glass rounded-3xl overflow-hidden hover-lift" style={{ transitionDelay: `${idx * 100}ms` }}>
      <div className="relative overflow-hidden h-52">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
        {project.featured && <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-gold text-[#c9a84c] text-xs font-bold">Featured</div>}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 glass rounded-full px-3 py-1.5">
          <Star size={12} className="text-[#c9a84c] fill-[#c9a84c]" />
          <span className="text-xs text-white font-medium">{project.stars}</span>
        </div>
      </div>
      <div className="p-7">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full border font-medium" style={{ borderColor: `${project.color}33`, color: project.color, backgroundColor: `${project.color}0d` }}>{tag}</span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href={project.live} className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full gold-bg text-black"><ExternalLink size={13} /> Live Demo</a>
          <a href={project.github} className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full glass border border-white/10 text-gray-300"><Github size={13} /> Source</a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="section-reveal mb-3"><span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">Portfolio</span></div>
          <h2 className="section-reveal text-4xl md:text-5xl font-black">Featured <span className="gradient-text">Projects</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => <ProjectCard key={project.title} project={project} idx={i} />)}
        </div>
        <div className="section-reveal text-center mt-12">
          <a href="https://github.com/rintuchowdory" className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border border-white/10 text-gray-300 hover:text-white font-semibold text-sm">
            <Github size={16} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
