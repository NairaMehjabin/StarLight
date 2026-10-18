"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, ShieldCheck, Hammer, Activity, Heart, Sparkles, Briefcase, ExternalLink, CheckCircle2 
} from "lucide-react";

const SkillShard = ({ name, level, index }: { name: string; level: string; index: number }) => {
  const [hovered, setHovered] = useState(false);

  const hoverTerms = ["Blooming ✨", "Flourishing 🎨", "Nurturing 🌿", "Sprouting 🌱"];
  const currentTerm = hoverTerms[index % hoverTerms.length];

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, rotate: index % 2 === 0 ? 1 : -1 }}
      transition={{ delay: index * 0.03, type: "spring", stiffness: 250 }}
      className="relative group bg-[#fffdf5] border-[3px] border-[#8b5a2b] rounded-[1.8rem] p-4 shadow-[4px_4px_0px_0px_#8b5a2b] overflow-hidden flex flex-col justify-between min-h-[140px]"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <Heart size={10} fill="#ef476f" className="text-[#ef476f]" />
          <span className="text-[9px] font-[1000] text-[#8b5a2b]/70 uppercase tracking-widest">
            SKILL_0{index + 1}
          </span>
        </div>
        <Sparkles size={14} className="text-[#ffd166]" fill="currentColor" />
      </div>

      <div>
        <h3 className="text-lg font-[1000] text-[#5d3d1e] uppercase tracking-tight leading-tight">
          {name}
        </h3>
      </div>

      <div className="mt-4 flex items-center justify-between pt-2 border-t-2 border-dashed border-[#8b5a2b]/20">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full border border-[#8b5a2b] ${
                i < 4 ? "bg-[#90be6d]" : "bg-white"
              }`}
            />
          ))}
        </div>
        <span className="text-[9px] font-[1000] text-[#c45a5a] bg-[#c45a5a]/10 px-2 py-0.5 rounded-md border border-[#c45a5a]/30 uppercase">
          {level}
        </span>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 10 }}
            className="absolute inset-0 z-20 p-4 bg-[#ffd166] border-[3px] border-[#8b5a2b] flex flex-col justify-center items-center text-center space-y-1"
          >
            <Activity size={20} className="text-[#5d3d1e]" />
            <span className="text-[9px] font-[1000] text-[#8b5a2b] uppercase tracking-widest">
              {currentTerm}
            </span>
            <p className="text-sm font-[1000] text-[#5d3d1e] uppercase italic">{name}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function SkillsPage() {
  const categories = [
    { 
      title: "Frontend Skills", 
      icon: <Globe size={20} />, 
      skills: [
        { name: "TypeScript", level: "Expert" }, 
        { name: "JavaScript", level: "Expert" }, 
        { name: "React", level: "Expert" }, 
        { name: "Next.js", level: "Advanced" }, 
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Vite", level: "Advanced" },
        { name: "HTML5 / CSS3", level: "Expert" }
      ] 
    },
    { 
      title: "Backend Skills", 
      icon: <ShieldCheck size={20} />, 
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "MySQL", level: "Advanced" }, 
        { name: "Prisma", level: "Expert" }, 
        { name: "HeidiSQL", level: "Power User" }, 
        { name: "BetterAuth", level: "Specialist" }, 
        { name: "NextAuth", level: "Advanced" }, 
        { name: "Sequel Ace", level: "Advanced" }, 
        { name: "NeonDB", level: "Proficient" }
      ] 
    },
    { 
      title: "Tools & Workflow", 
      icon: <Hammer size={20} />, 
      skills: [
        { name: "Framer Motion", level: "Expert" }, 
        { name: "VS Code", level: "Power User" },
        { name: "Vercel", level: "Expert" }, 
        { name: "Render", level: "Advanced" },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Daisy UI", level: "Expert" },
        { name: "Figma Conversion", level: "Expert" }
      ] 
    }
  ];

  return (
    <div className="p-6 md:p-12 space-y-12 max-w-6xl mx-auto">
      {/* HEADER SECTION */}
      <header className="border-b-[4px] border-dashed border-[#8b5a2b] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 bg-[#ffd166] text-[#5d3d1e] px-3 py-1 rounded-lg border-2 border-[#8b5a2b] font-[1000] text-[10px] uppercase tracking-wider w-fit shadow-[2px_2px_0px_0px_#8b5a2b]">
            <Sparkles size={12} fill="currentColor" />
            <span>Naira's Craft & Skills</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-[1000] text-[#5d3d1e] uppercase tracking-tighter">
            Skills & Experience
          </h1>
        </div>
        <p className="text-xs font-[1000] text-[#8b5a2b] uppercase tracking-widest bg-[#f2ead3] p-3 rounded-xl border-2 border-[#8b5a2b] max-w-xs shadow-sm">
          "A cozy collection of digital tools planted and grown with care."
        </p>
      </header>

      {/* WORK EXPERIENCE SECTION */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#ef476f] text-white rounded-xl border-[3px] border-[#8b5a2b] shadow-md">
            <Briefcase size={22} strokeWidth={3} />
          </div>
          <h2 className="text-2xl font-[1000] text-[#5d3d1e] uppercase tracking-tight">
            Work Experience
          </h2>
        </div>

        <motion.div 
          whileHover={{ y: -3 }}
          className="bg-[#fffdf5] border-[4px] border-[#8b5a2b] rounded-[2.5rem] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#8b5a2b] relative overflow-hidden space-y-5"
        >
          {/* Tape Accent */}
          <div className="absolute -top-3 left-10 w-28 h-7 bg-[#ffd166]/80 -rotate-2 border-x-2 border-[#8b5a2b]/20 shadow-xs pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b-2 border-dashed border-[#8b5a2b]/30 pb-4">
            <div>
              <span className="bg-[#90be6d] text-white text-[10px] px-3 py-1 font-[1000] rounded-md tracking-widest uppercase border-2 border-[#5a7d32] shadow-sm inline-block mb-1">
                Frontend Designer
              </span>
              <h3 className="text-2xl font-[1000] text-[#5d3d1e] uppercase flex items-center gap-2">
                Shobdotori.com
                <a 
                  href="https://shobdotori.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#c45a5a] hover:scale-110 transition-transform"
                >
                  <ExternalLink size={18} />
                </a>
              </h3>
            </div>
            <span className="bg-[#f2ead3] text-[#8b5a2b] border-2 border-[#8b5a2b] px-4 py-1.5 rounded-xl font-[1000] text-xs uppercase tracking-wider w-fit shadow-xs">
              Nov 2025 – Present
            </span>
          </div>

          <p className="text-xs sm:text-sm font-[1000] text-[#5d3d1e]/80 leading-relaxed">
            Remote Frontend Designer for Shobdotori.com—a prominent online bookstore platform in Bangladesh. Responsible for designing clean, intuitive web interfaces, translating complex catalog and e-commerce workflows into performant layouts, and delivering cozy user-first digital experiences.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {["Frontend Design", "UI/UX", "Next.js", "Tailwind CSS", "Figma to Code"].map((tag) => (
              <span key={tag} className="text-[10px] font-black text-[#5a7d32] bg-[#90be6d]/20 px-3 py-1 rounded-lg border border-[#90be6d]/40">
                #{tag.toUpperCase()}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SKILLS CATEGORIES */}
      <div className="space-y-12">
        {categories.map((cat) => (
          <section key={cat.title} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#ffd166] text-[#8b5a2b] rounded-xl border-[3px] border-[#8b5a2b] shadow-md">
                {cat.icon}
              </div>
              <h2 className="text-xl sm:text-2xl font-[1000] text-[#5d3d1e] uppercase tracking-tight">
                {cat.title}
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {cat.skills.map((skill, idx) => (
                <SkillShard key={skill.name} {...skill} index={idx} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* FOOTER ACCENT */}
      <footer className="pt-8 border-t-[4px] border-dashed border-[#8b5a2b]/30 flex flex-col items-center gap-3 text-center">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#90be6d] border border-[#8b5a2b]" />
          <span className="w-3 h-3 rounded-full bg-[#ffd166] border border-[#8b5a2b]" />
          <span className="w-3 h-3 rounded-full bg-[#ef476f] border border-[#8b5a2b]" />
        </div>
        <span className="text-[10px] font-[1000] text-[#8b5a2b] uppercase tracking-[0.2em]">
          Crafted with love & detail // st4rligh7 2026
        </span>
      </footer>
    </div>
  );
}