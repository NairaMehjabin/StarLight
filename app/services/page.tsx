"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  deliverables: string[];
  index: number;
}

const ServiceCard = ({
  title,
  price,
  description,
  deliverables,
  index,
}: ServiceCardProps) => {
  const softPinkBg = "#fff1f2";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 300 }}
      className="relative overflow-hidden border-2 border-[#8b5a2b]/20 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-lg hover:border-[#8b5a2b] transition-all"
      style={{ backgroundColor: softPinkBg }}
    >
      <div>
        <h3 className="text-2xl font-black text-[#5d3d1e] uppercase tracking-tighter leading-tight mb-2">
          {title}
        </h3>

        <div className="mb-4 pb-4 border-b border-[#8b5a2b]/15">
          <span className="text-xs font-bold text-[#8b5a2b] uppercase tracking-wider block mb-1">
            Starting at
          </span>
          <span className="text-3xl font-black text-[#5d3d1e] tracking-tight">
            {price}
          </span>
        </div>

        <p className="text-sm font-medium text-[#5d3d1e]/80 leading-relaxed mb-6 min-h-[40px]">
          {description}
        </p>

        <div className="space-y-2.5 mb-8">
          <p className="text-[11px] font-black uppercase tracking-widest text-[#8b5a2b]">
            Highlights:
          </p>
          {deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <CheckCircle2
                size={16}
                className="text-[#8b5a2b] shrink-0 mt-0.5"
              />
              <span className="text-xs font-semibold text-[#5d3d1e]/90">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Link href="/contact" className="w-full">
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 rounded-2xl font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 border-2 bg-white text-[#5d3d1e] border-[#8b5a2b]/30 hover:border-[#8b5a2b] hover:bg-[#8b5a2b] hover:text-white transition-all cursor-pointer"
        >
          <span>Contact Me</span>
          <ArrowRight size={14} />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default function ServicesPage() {
  const services = [
    {
      title: "Student Portfolio",
      price: "$150",
      description:
        "Professional portfolio websites for students, creators, and developers.",
      deliverables: [
        "1-3 Custom Pages",
        "Mobile Responsive Layout",
        "Contact & Social Integration",
      ],
    },
    {
      title: "Business Website",
      price: "$450",
      description:
        "High-converting marketing sites designed to showcase services and drive inquiries.",
      deliverables: [
        "Up to 5 Pages with CMS",
        "Lead Generation Forms",
        "Basic SEO & Analytics",
      ],
    },
    {
      title: "Custom Web App",
      price: "$950",
      description:
        "Tailored web applications built with modern frontend and backend architectures.",
      deliverables: [
        "Full-Stack Development",
        "Database & User Auth",
        "API Integration",
      ],
    },
  ];

  return (
    <div className="selection:bg-[#ffb4a2] selection:text-white pb-20">
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* HEADER SECTION */}
        <header className="mb-16 border-b-2 border-dashed border-[#8b5a2b]/20 pb-8 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black text-[#5d3d1e] uppercase italic tracking-tighter leading-tight mb-3">
            Services & <span className="text-[#8b5a2b]">Pricing</span>
          </h1>
          <p className="text-sm font-medium text-[#8b5a2b] max-w-xl">
            Simple, fixed-rate web development tailored to your specific project needs.
          </p>
        </header>

        {/* SERVICES TIERS */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={service.title} index={idx} {...service} />
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="bg-[#fff1f2] border-2 border-[#8b5a2b]/20 rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#5d3d1e] uppercase italic tracking-tighter">
              Let's Talk
            </h2>
            <p className="text-sm text-[#8b5a2b] font-medium leading-relaxed">
              Need a website or web application? Tell me about your project and I'll get back to you with a custom quote.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-[#8b5a2b] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#5d3d1e] transition-colors shadow-md cursor-pointer"
                >
                  Contact Me
                </motion.div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}