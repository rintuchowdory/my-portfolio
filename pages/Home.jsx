import React, { useEffect, useState } from "react";
import Hero from "../components/resume/Hero";
import About from "../components/resume/About";
import Experience from "../components/resume/Experience";
import Projects from "../components/resume/Projects";
import Skills from "../components/resume/Skills";
import Contact from "../components/resume/Contact";
import Navbar from "../components/resume/Navbar";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #c9a84c; border-radius: 2px; }
        .gold { color: #c9a84c; }
        .gold-bg { background: #c9a84c; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-gold { 0%, 100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.4); } 50% { box-shadow: 0 0 0 20px rgba(201,168,76,0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-gold { animation: pulse-gold 2s ease-in-out infinite; }
        .gradient-text {
          background: linear-gradient(135deg, #c9a84c 0%, #f4d780 50%, #c9a84c 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.06); }
        .glass-gold { background: rgba(201,168,76,0.05); backdrop-filter: blur(10px); border: 1px solid rgba(201,168,76,0.2); }
        .section-reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16,1,0.3,1); }
        .section-reveal.visible { opacity: 1; transform: translateY(0); }
        .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .hover-lift:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(201,168,76,0.1); }
      `}</style>
      <Navbar scrollY={scrollY} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>© 2026 — Rintu Chowdory · rintuchowdory@yahoo.com · Baesweiler, Germany</p>
      </footer>
    </div>
  );
}
