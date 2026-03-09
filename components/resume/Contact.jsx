import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current?.querySelectorAll(".section-reveal").forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 120);
        });
      }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: "rintuchowdory@yahoo.com", href: "mailto:rintuchowdory@yahoo.com" },
    { icon: Phone, label: "Phone", value: "+49 176 82029425", href: "tel:+4917682029425" },
    { icon: MapPin, label: "Location", value: "52499 Baesweiler, Germany", href: "#" },
  ];

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/rintuchowdory" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rintu-chowdory-67977b2a7" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="section-reveal mb-3"><span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">Get In Touch</span></div>
          <h2 className="section-reveal text-4xl md:text-5xl font-black">Let's <span className="gradient-text">Work Together</span></h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="section-reveal space-y-6 mb-10">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-[#c9a84c]/20 border border-white/0 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl glass-gold flex items-center justify-center shrink-0"><Icon size={18} className="text-[#c9a84c]" /></div>
                  <div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">{label}</div>
                    <div className="text-white font-medium group-hover:text-[#c9a84c] transition-colors">{value}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="section-reveal">
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-4">Socials</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} className="flex-1 flex flex-col items-center gap-2 glass rounded-2xl p-4 border border-white/0 hover:border-[#c9a84c]/20 transition-all duration-300 group">
                    <Icon size={18} className="text-gray-500 group-hover:text-[#c9a84c] transition-colors" />
                    <span className="text-xs text-gray-500">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="section-reveal glass rounded-3xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 gap-4 text-center">
                <div className="w-16 h-16 rounded-full glass-gold flex items-center justify-center"><Send size={24} className="text-[#c9a84c]" /></div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-500">Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">Your Name</label>
                  <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Smith" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#c9a84c]/40 transition-colors" />
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">Email Address</label>
                  <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#c9a84c]/40 transition-colors" />
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">Message</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#c9a84c]/40 transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full py-4 rounded-xl gold-bg text-black font-bold text-sm tracking-wide hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
