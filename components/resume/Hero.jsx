import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";

const titles = ["Linux Administrator", "Cloud & DevOps Engineer", "AWS Specialist", "Open Source Contributor"];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  useEffect(() => {
    const current = titles[titleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setTitleIdx((i) => (i + 1) % titles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, titleIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#c9a84c]/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
              Available for Work
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
              Hi, I'm <span className="gradient-text">Rintu Chowdory</span>
            </h1>
            <div className="flex items-center gap-3 mb-6 h-10">
              <span className="text-xl md:text-2xl font-light text-gray-300">
                {displayed}
                <span className="inline-block w-0.5 h-6 bg-[#c9a84c] ml-1 animate-pulse" />
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              Linux Administrator & Cloud DevOps Engineer based in Baesweiler, Germany. Passionate about AWS, Docker, Kubernetes, and building reliable cloud infrastructure.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a href__="#contact" className="px-8 py-4 rounded-full gold-bg text-black font-bold text-sm tracking-wide hover:shadow-lg hover:shadow-[#c9a84c]/30 transition-all duration-300 hover:scale-105">Let's Talk</a>
              <a href__="/ResumePDF" className="px-8 py-4 rounded-full glass border border-white/10 text-white font-semibold text-sm tracking-wide hover:border-[#c9a84c]/40 transition-all duration-300 flex items-center gap-2">
                <Download size={16} /> Download CV
              </a>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-gray-600 text-xs uppercase tracking-widest">Follow</span>
              <div className="w-8 h-px bg-gray-700" />
              {[
                { icon: Github, href: "https://github.com/rintuchowdory", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/rintu-chowdory-67977b2a7", label: "LinkedIn" },
                { icon: Mail, href: "mailto:rintuchowdory@yahoo.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href__={href} className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[#c9a84c] border border-white/5 transition-all duration-300" aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div className={`relative flex justify-center transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="relative">
              <div className="absolute inset-[-20px] rounded-full border border-dashed border-[#c9a84c]/20 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden animate-pulse-gold">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a92aaec911a2dad30796b2/381453aff_IMG-20260216-WA0000.jpg" alt="Rintu Chowdory" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c9a84c]/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-8 glass-gold rounded-2xl px-4 py-3 animate-float">
                <div className="text-2xl font-black gold">5+</div>
                <div className="text-xs text-gray-400">Years Exp.</div>
              </div>
              <div className="absolute -top-2 -right-8 glass-gold rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-2xl font-black gold">50+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
