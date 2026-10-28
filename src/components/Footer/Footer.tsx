import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { MorphingText } from "../lightswind/morphing-text";

export const Footer = () => {
  const morphingTexts = [
    "Likhith Kumar L J",
    "UI/UX Designer",
    "Digital Platform Engineer",
    "Frontend Developer",
    "Technical Project Coordinator",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Career", href: "#career" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/LIKHITHKUMAR28", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/likhithkumar285/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:likhithkumar581@gmail.com", label: "Email" },
  ];

  return (
    <footer className="w-full relative z-10 pt-16 pb-28 md:pb-36 bg-card/60 backdrop-blur-2xl border-t border-black/5 dark:border-white/10 shadow-2xl rounded-t-[3rem] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-10">
        
        {/* Top Header Row: Logo & Back-to-Top Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-black/5 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-primary to-sky-400 p-[1px] shadow-lg">
              <div className="w-full h-full bg-background rounded-[11px] flex items-center justify-center overflow-hidden">
                <img
                  src="/logo 1.png"
                  alt="LK Logo"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-tight text-foreground text-base leading-none">
                LIKHITH KUMAR L J
              </span>
              <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">
                UI/UX Designer · Digital Platform Engineer
              </span>
            </div>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel border border-black/5 dark:border-white/10 text-xs font-bold text-foreground hover:text-primary hover:border-primary/40 transition-all shadow-sm cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Center Banner: Signature Brand & Morphing Text Container */}
        <div className="relative py-12 px-6 rounded-3xl bg-black/[0.015] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 text-center flex flex-col items-center justify-center my-2 shadow-sm overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-primary/10 to-sky-500/5 opacity-40 pointer-events-none group-hover:opacity-100 transition-opacity duration-700" />

          {/* Illuminated Logo Brand Hallmark */}
          <div className="relative mb-5 flex justify-center">
            <div className="absolute inset-0 bg-primary/25 blur-2xl rounded-full scale-90 pointer-events-none" />
            <img 
              src="/logo.png" 
              alt="Likhith Kumar Brand Logo" 
              className="relative max-h-20 sm:max-h-24 md:max-h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_4px_24px_rgba(139,92,246,0.3)] select-none"
            />
          </div>

          <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-3 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 shadow-sm relative z-10">
            Innovate & Build
          </span>

          <MorphingText
            texts={morphingTexts}
            morphTime={1.6}
            cooldownTime={0.8}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-extrabold min-h-[70px] text-center relative z-10"
          />
        </div>

        {/* Quick Navigation Links */}
        <div className="py-6 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm font-semibold text-muted-foreground">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-foreground transition-colors hover:scale-105 transform duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom Row: Social Icons & Copyright */}
        <div className="pt-6 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass-panel border border-black/5 dark:border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:scale-110 transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Copyright notice */}
          <div className="flex items-center gap-1.5 font-medium text-center md:text-right">
            <span>© {new Date().getFullYear()} Likhith Kumar.</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline-block" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
