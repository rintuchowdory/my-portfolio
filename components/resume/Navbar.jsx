import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar({ scrollY }) {
  const [open, setOpen] = useState(false);
  const isScrolled = scrollY > 50;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass py-4" : "py-6 bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text tracking-wider">RC</a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300 relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px gold-bg transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:block text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full border border-[#c9a84c]/30 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black transition-all duration-300">Hire Me</a>
        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-6">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="text-gray-300 hover:text-[#c9a84c] font-medium transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
