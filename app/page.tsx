"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Heart,
  Star,
  Cherry,
  Apple,
  Sparkles,
  Cloud,
  Sun,
  MousePointer2,
  BookOpen,
  FileDown,
  X,
} from "lucide-react";

export default function Dashboard() {
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const floating: Variants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [0, -10, 0],
      rotate: [-1, 1, -1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const wobbleHover: Variants = {
    hover: {
      scale: 1.05,
      rotate: [0, -2, 2, -2, 0],
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-4 sm:px-6 md:px-10 py-8 md:py-10 space-y-6 md:space-y-12 max-w-7xl mx-auto relative overflow-hidden"
      >
        {/* Background Elements */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-10 left-10 opacity-20 text-[#90be6d] hidden lg:block pointer-events-none -z-10"
        >
          <Cloud size={60} />
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute bottom-20 right-10 opacity-20 text-[#ffd166] hidden lg:block pointer-events-none -z-10"
        >
          <Sun size={80} />
        </motion.div>

        {/* TOP SECTION: BIO, HERO, LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 items-center">
          {/* BIO */}
          <motion.div variants={itemVariants} className="md:col-span-4 space-y-6">
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -2 }}
                className="flex items-center gap-3 cursor-default w-fit"
              >
                <span className="bg-[#90be6d] text-white px-4 py-1.5 rounded-lg font-[1000] text-base uppercase shadow-[4px_4px_0px_0px_#5a7d32] border-2 border-white/20">
                  Naira
                </span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-xl sm:text-2xl"
                >
                  🍎
                </motion.span>
              </motion.div>

              <motion.div
                animate={{ x: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="bg-[#c45a5a] text-white text-[10px] px-3 py-1 inline-block font-[1000] rounded-md tracking-[0.2em] uppercase border-2 border-white/30 shadow-sm"
              >
                Artsy | Full-Stack Dev
              </motion.div>
            </div>

            <div className="text-sm sm:text-[15px] leading-relaxed font-[1000] text-[#5d3d1e] space-y-4">
              <div className="flex items-center gap-2">
                <motion.span
                  whileHover={{ scale: 1.5, rotate: 20 }}
                  className="text-lg sm:text-xl cursor-pointer"
                >
                  🥪
                </motion.span>
                <span>
                  Site by{" "}
                  <span className="underline decoration-[#90be6d] decoration-[3px] underline-offset-4">
                    Naira
                  </span>
                  !
                </span>
              </div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-[#fffdf5]/90 p-5 sm:p-6 rounded-[2rem] border-[3px] border-[#90be6d]/40 shadow-xl text-[#3d5223] relative overflow-hidden group space-y-4"
              >
                <div className="absolute inset-0 bg-[#90be6d]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
                <p className="relative z-10 italic">
                  I am a Bangladesh-based Full-Stack Developer specializing in transforming complex Figma designs into high-performance, responsive web experiences. I bridge the gap between creative folk-art aesthetics and modern technical standards.
                </p>

                {/* ACTION BUTTONS: READ BIO + RESUME */}
                <div className="relative z-10 flex flex-col sm:flex-row gap-2 pt-1 not-italic">
                  <motion.button
                    type="button"
                    onClick={() => setIsBioModalOpen(true)}
                    variants={wobbleHover}
                    whileHover="hover"
                    whileTap="tap"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#90be6d] text-white py-2.5 px-3 rounded-xl font-[1000] text-xs uppercase tracking-wider border-b-[3px] border-[#5a7d32] shadow-[0_3px_0_0_#5a7d32] hover:shadow-[0_1px_0_0_#5a7d32] hover:translate-y-[2px] transition-all duration-200"
                  >
                    <BookOpen size={15} />
                    <span>Read Bio</span>
                  </motion.button>

                  <motion.a
                    href="/my-resume.pdf"
                    download="Naira_Resume.pdf"
                    variants={wobbleHover}
                    whileHover="hover"
                    whileTap="tap"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#c45a5a] text-white py-2.5 px-3 rounded-xl font-[1000] text-xs uppercase tracking-wider border-b-[3px] border-[#8b3a3a] shadow-[0_3px_0_0_#8b3a3a] hover:shadow-[0_1px_0_0_#8b3a3a] hover:translate-y-[2px] transition-all duration-200"
                  >
                    <FileDown size={15} />
                    <span>Resume</span>
                  </motion.a>
                </div>

                <motion.div
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute -bottom-1 -right-1 pointer-events-none"
                >
                  <Sparkles size={26} className="text-[#ffd166]" fill="currentColor" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div variants={itemVariants} className="md:col-span-4 flex justify-center">
            <motion.div
              variants={floating}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="relative group w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] cursor-pointer"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-10 bg-[#ffd166]/80 -rotate-3 z-30 shadow-sm mix-blend-multiply border-x-2 border-[#8b5a2b]/10" />
              <div className="absolute inset-0 bg-[#8b5a2b] rounded-[3rem] translate-x-4 translate-y-4 opacity-20" />
              <div className="relative aspect-square bg-[#fffdf5] border-[6px] border-[#8b5a2b] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="/img/id.png"
                  alt="Naira"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 45 }}
                  className="absolute top-4 right-4 bg-[#90be6d] text-white p-2.5 rounded-full border-[3px] border-[#8b5a2b] shadow-lg"
                >
                  <Star size={20} fill="currentColor" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* LINKS */}
          <motion.div variants={itemVariants} className="md:col-span-4 space-y-8">
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              className="bg-[#90be6d] text-white px-6 py-4 rounded-2xl text-center font-[1000] border-b-[6px] border-[#5a7d32] uppercase tracking-widest shadow-lg"
            >
              Find Me Here~
            </motion.div>

            <ul className="space-y-6 px-2 sm:px-4">
              {[
                { icon: <Cloud size={24} />, label: "Fiverr", color: "#90be6d", url: "https://www.fiverr.com/s/WER7D77" },
                { icon: <Apple size={24} />, label: "GitHub", color: "#c45a5a", url: "https://github.com/NairaMehjabin" },
                { icon: <Cherry size={24} />, label: "LinkedIn", color: "#ef476f", url: "https://www.linkedin.com/in/naira-mehjabin/" },
                { icon: <Heart size={24} />, label: "Instagram", color: "#ff6b6b", url: "https://www.instagram.com/certi.fried_dora/" },
              ].map((link, i) => (
                <motion.li key={i} variants={wobbleHover} whileHover="hover" whileTap="tap">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 text-base sm:text-lg font-[1000] group"
                  >
                    <motion.span
                      style={{ color: link.color }}
                      className="p-3 bg-white rounded-2xl shadow-md border-2 border-[#8b5a2b]/10 group-hover:shadow-pink-200/50 transition-all"
                    >
                      {link.icon}
                    </motion.span>
                    <span className="text-[#5d3d1e] border-b-2 border-dashed border-[#8b5a2b]/30 group-hover:text-[#c45a5a] group-hover:border-[#c45a5a] transition-colors">
                      {link.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* PROJECT PREVIEW SECTION */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          {/* LEFT: LIVE IFRAME CARD */}
          <motion.a
            href="https://chitrabeethi-client.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -10, scale: 1.01 }}
            className="md:col-span-7 relative block group/card"
          >
            <div className="absolute inset-0 bg-[#8b5a2b] rounded-[2.5rem] translate-x-3 translate-y-3 opacity-10 group-hover/card:translate-x-4 group-hover/card:translate-y-4 transition-transform" />

            <div className="relative bg-white border-[4px] border-[#ffcbe1] rounded-[2.5rem] p-5 shadow-md overflow-hidden">
              <div className="w-full aspect-video bg-[#fdfcf0] rounded-[1.5rem] border-[3px] border-dashed border-[#ffcbe1] overflow-hidden relative group/iframe shadow-inner transition-all">
                <iframe
                  src="https://chitrabeethi-client.vercel.app/"
                  title="Chitrabeethi Live Preview"
                  loading="lazy"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[1280px] h-[720px] origin-top scale-[0.28] md:scale-[0.35] border-none pointer-events-none transition-opacity duration-500 group-hover/card:opacity-80"
                />

                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none skew-x-12"
                />

                <div className="absolute bottom-3 right-3 bg-[#460c0c] text-white text-[10px] px-3 py-1.5 rounded-lg font-black uppercase shadow-lg flex items-center gap-2 z-20 transition-transform active:scale-95">
                  <MousePointer2 size={10} /> Visit Live Site
                </div>
              </div>
            </div>
          </motion.a>

          {/* RIGHT: PROJECT INFO */}
          <motion.div variants={floating} initial="initial" animate="animate" className="md:col-span-5">
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="bg-[#fffdf5] border-[5px] border-[#8b5a2b] p-6 sm:p-8 md:p-10 rounded-[3rem] shadow-[12px_12px_0px_0px_#8b5a2b] -rotate-2 relative overflow-hidden flex flex-col gap-6"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#90be6d]/10 rounded-bl-full" />

              <div>
                <h4 className="text-2xl sm:text-3xl font-[1000] text-[#5d3d1e] uppercase mb-5 italic flex items-center gap-3">
                  Chitrabeethi <Cherry className="text-[#ef476f]" />
                </h4>
                <p className="text-sm sm:text-[15px] font-[1000] text-[#5d3d1e]/80 leading-relaxed">
                  Chitrabeethi is a dynamic web application that allows users to explore and share their artistic creations. Built with Next.js, Tailwind CSS, and React. Users can upload their artwork, view others' creations, and engage with the community through comments and likes.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Next.js", "Tailwind", "React"].map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ y: -3, backgroundColor: "#90be6d", color: "#fff" }}
                    className="text-[10px] font-black text-[#5a7d32] bg-[#90be6d]/20 px-4 py-2 rounded-xl border-2 border-[#90be6d]/40 cursor-default transition-all"
                  >
                    #{tag.toUpperCase()}
                  </motion.span>
                ))}
              </div>

              <Link
                href="/projects"
                className="relative flex items-center justify-center gap-3 w-full"
              >
                <motion.div
                  variants={wobbleHover}
                  whileHover="hover"
                  whileTap="tap"
                  className="relative flex items-center justify-center gap-3 w-full bg-[#e29494] text-white py-3 rounded-[1.2rem] font-[1000] border-[4px] border-[#f4c2c2] uppercase italic tracking-[0.15em] overflow-hidden group/btn transition-all duration-300 shadow-[0_6px_0_0_#a65d5d] hover:shadow-[0_2px_0_0_#a65d5d] hover:translate-y-[4px]"
                >
                  <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] group-hover/btn:left-[200%] transition-all duration-1000 ease-in-out" />
                  </div>

                  <span className="relative z-10 flex items-center justify-center gap-2 text-center text-[13px] sm:text-sm drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]">
                    View More Projects?
                    <motion.div
                      animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2.5 }}
                    >
                      <Sparkles size={18} className="text-[#f4c2c2]" fill="currentColor" />
                    </motion.div>
                  </span>

                  <div className="absolute inset-[2px] rounded-[1rem] border border-white/20 pointer-events-none z-0" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isBioModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsBioModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#fffdf5] border-[5px] border-[#8b5a2b] rounded-[2.5rem] p-6 sm:p-8 max-w-lg w-full shadow-[10px_10px_0px_0px_#8b5a2b] relative space-y-4"
            >
              <button
                type="button"
                onClick={() => setIsBioModalOpen(false)}
                className="absolute top-5 right-5 p-2 bg-[#c45a5a] text-white rounded-xl border-2 border-[#8b5a2b] hover:bg-[#8b3a3a] transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 text-[#8b5a2b] font-[1000] text-base uppercase tracking-wider">
                <Sparkles size={18} className="text-[#ffd166]" fill="currentColor" />
                <span>About Naira</span>
              </div>

              <div className="text-xs sm:text-sm leading-relaxed text-[#5d3d1e] font-medium space-y-3 pt-2">
                <p>
                  I am a Bangladesh-based Full-Stack Developer with a passion for building creative, interactive web experiences. My journey began with curiosity about how web interfaces work, which quickly grew into building full-stack applications with modern frontend and backend tech.
                </p>
                <p>
                  I specialize in converting Figma designs into clean, high-performance code, experimenting with cozy folk-art aesthetics, and making software that feels both joyful and functionally robust!
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsBioModalOpen(false)}
                  className="bg-[#90be6d] text-white px-5 py-2 rounded-xl font-[1000] text-xs uppercase tracking-wider border-b-[3px] border-[#5a7d32] shadow-sm"
                >
                  Close ✨
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}