"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Layers, 
  Database, 
  Rocket, 
  Heart, 
  Zap, 
  Star 
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  deliverables: string[];
  index: number;
  badge: string;
  icon: React.ReactNode;
  accentColor: string;
}

const ServiceCard = ({
  title,
  price,
  description,
  deliverables,
  index,
  badge,
  icon,
  accentColor,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ y: -8 }}
      className="relative group col-span-1 flex flex-col justify-between"
    >
      {/* Playful Shadow Accent Effect */}
      <div 
        className="absolute inset-0 rounded-[2.5rem] translate-x-3 translate-y-3 opacity-20 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />

      <div className="relative bg-white border-[4px] border-[#8b5a2b] rounded-[2.5rem] p-7 md:p-8 shadow-md overflow-hidden h-full flex flex-col justify-between">
        
        {/* Floating Decorative Sparkle */}
        <motion.div 
          animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: index * 0.5 }}
          className="absolute top-4 right-4 text-[#8b5a2b]/20 pointer-events-none"
        >
          <Sparkles size={36} />
        </motion.div>

        <div>
          {/* Top Badge & Icon */}
          <div className="flex justify-between items-center mb-4">
            <motion.div 
              whileHover={{ rotate: [-2, 2, -2] }}
              className="text-white px-3.5 py-1 rounded-full text-[10px] font-black border-[2px] border-[#8b5a2b] uppercase tracking-wider shadow-sm flex items-center gap-1.5"
              style={{ backgroundColor: accentColor }}
            >
              {icon}
              <span>{badge}</span>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: index * 0.3 }}
            >
              <Heart size={20} className="text-[#c45a5a]" fill="#c45a5a" />
            </motion.div>
          </div>

          {/* Service Title */}
          <h3 className="text-2xl font-[1000] text-[#5d3d1e] uppercase tracking-tight leading-tight mb-2 flex items-center gap-2">
            {title}
          </h3>

          {/* Pricing Banner */}
          <div className="mb-5 pb-4 border-b-2 border-dashed border-[#8b5a2b]/20 flex items-baseline gap-2">
            <span className="text-[11px] font-black text-[#8b5a2b] uppercase tracking-wider">
              Starting at
            </span>
            <span className="text-3xl font-[1000] text-[#5d3d1e] tracking-tight">
              {price}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm font-bold text-[#8b5a2b] leading-relaxed mb-6 italic min-h-[42px]">
            {description}
          </p>

          {/* Deliverables / Highlights Container */}
          <div className="bg-[#fdfcf0] border-[3px] border-[#8b5a2b] rounded-2xl p-5 mb-8 border-dashed">
            <span className="text-[11px] font-[1000] uppercase text-[#8b5a2b] block mb-3 tracking-[0.1em] flex items-center gap-1">
              <Zap size={13} className="text-[#c45a5a]" /> What's Included:
            </span>
            <ul className="space-y-2.5">
              {deliverables.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  whileHover={{ x: 4 }}
                  className="text-xs font-black text-[#3d5223] flex items-center gap-2.5"
                >
                  <CheckCircle2 size={16} className="text-[#4a632a] shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <Link href="/contact" className="w-full pt-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3.5 rounded-xl font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 border-[3px] bg-[#c45a5a] text-white border-[#8b5a2b] shadow-md hover:brightness-110 transition-all cursor-pointer"
          >
            <span>Order / Inquiry</span>
            <ArrowRight size={15} />
          </motion.div>
        </Link>

      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const services = [
    {
      title: "Portfolio & Personal",
      price: "$50 - $120",
      description:
        "Cozy, aesthetic, and high-impact personal portfolios for students, developers, & creators.",
      deliverables: [
        "1-3 Custom Animated Pages",
        "Mobile-Responsive Layouts",
        "Interactive Modals & Projects Showcase",
        "Contact & Social Links Integration",
      ],
      badge: "Quick Launch",
      icon: <Sparkles size={12} />,
      accentColor: "#c45a5a",
    },
    {
      title: "Frontend Development",
      price: "$120 - $300",
      description:
        "High-performance client-side interfaces with modern framer-motion micro-interactions.",
      deliverables: [
        "Next.js App Router Architecture",
        "Tailwind CSS + Custom Aesthetics",
        "Dynamic UI Components & State Handling",
        "SEO Optimization & Fast Load Times",
      ],
      badge: "Interactive UI",
      icon: <Code2 size={12} />,
      accentColor: "#4a632a",
    },
    {
      title: "Full-Stack Web App",
      price: "$150 - $450",
      description:
        "Complete dynamic platforms backed by databases, auth systems, and order pipelines.",
      deliverables: [
        "Full-Stack Next.js / Node.js Engine",
        "MySQL / PostgreSQL Database Architecture",
        "User Auth & Session State Logic",
        "API & Payment/Email Service Integrations",
      ],
      badge: "Complete System",
      icon: <Database size={12} />,
      accentColor: "#8b5a2b",
    },
  ];

  return (
    <div className="selection:bg-[#c45a5a] selection:text-white pb-20">
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-10 space-y-12">
        
        {/* HEADER SECTION */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 border-b-[3px] border-dashed border-[#8b5a2b] pb-8 text-center md:text-left"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#f2ead3] border-2 border-[#8b5a2b] px-3 py-1 rounded-full text-[11px] font-black uppercase text-[#8b5a2b] tracking-wider mb-1">
              <Star size={13} className="text-[#c45a5a]" fill="#c45a5a" />
              <span>Transparent Pricing & Custom Builds</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-[1000] text-[#5d3d1e] uppercase italic tracking-tighter leading-none">
              Services & <span className="text-[#c45a5a]">Pricing</span> 🌸
            </h1>
            <p className="text-sm font-bold text-[#4a632a] max-w-xl uppercase tracking-widest">
              Hand-crafted web solutions tailored specifically to your budget & goals.
            </p>
          </div>

          {/* Playful Floating Badge */}
          <motion.div 
            animate={{ rotate: [3, -3, 3], y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="bg-[#c45a5a] text-white p-4 rounded-2xl shadow-md border-[3px] border-[#8b5a2b] shrink-0 hidden md:flex flex-col items-center justify-center text-center -rotate-2"
          >
            <Rocket size={28} />
            <span className="text-[10px] font-black uppercase tracking-wider mt-1">Ready to Build</span>
          </motion.div>
        </motion.header>

        {/* SERVICES GRID */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={service.title} index={idx} {...service} />
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-[#fdfcf0] border-[4px] border-[#8b5a2b] rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden shadow-lg"
        >
          {/* Background Decorative Accents */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute -top-10 -left-10 text-[#8b5a2b]/10 pointer-events-none"
          >
            <Layers size={140} />
          </motion.div>

          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="inline-block bg-[#f2ead3] px-4 py-1.5 rounded-full border-2 border-[#8b5a2b] text-[10px] font-[1000] text-[#8b5a2b] uppercase tracking-[0.2em] shadow-sm rotate-1"
            >
              ⭐ Custom Project Inquiries ⭐
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-[1000] text-[#5d3d1e] uppercase italic tracking-tighter leading-tight">
              Let's Bring Your Idea To Life!
            </h2>
            
            <p className="text-sm text-[#8b5a2b] font-bold leading-relaxed italic">
              Need something specialized, or have a unique project request? Drop a message and let's craft a tailored solution together!
            </p>
            
            <div className="pt-3">
              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#c45a5a] text-white rounded-2xl font-black text-xs uppercase tracking-widest border-[3px] border-[#8b5a2b] shadow-md hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Start A Conversation</span>
                  <ArrowRight size={16} />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}