import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { Input } from "../lightswind/input";
import { Textarea } from "../lightswind/textarea";
import { Button } from "../lightswind/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-12 rounded-[3rem] border border-foreground/10 relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Ambient Hologram in Background (No Text) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-0 select-none">
          {/* Hologram Projector Light Cone Beam */}
          <div 
            className="absolute bottom-0 w-[500px] sm:w-[650px] h-[450px] opacity-20 dark:opacity-35"
            style={{
              background: "linear-gradient(to top, rgba(6, 182, 212, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 100%)",
              clipPath: "polygon(22% 0%, 78% 0%, 100% 100%, 0% 100%)",
            }}
          />

          {/* Hologram Pedestal Base Rings */}
          <div className="absolute bottom-6 w-80 h-10 rounded-[100%] border border-cyan-400/40 opacity-40 shadow-[0_0_25px_rgba(6,182,212,0.6)]" />
          <div className="absolute bottom-8 w-52 h-5 rounded-[100%] bg-cyan-400/25 blur-sm" />

          {/* Floating Pure Emblem Hologram (NO text) */}
          <motion.div
            animate={{
              y: [-8, 8, -8],
              opacity: [0.12, 0.22, 0.12],
              filter: [
                "drop-shadow(0 0 25px rgba(6,182,212,0.6)) drop-shadow(0 0 50px rgba(139,92,246,0.35))",
                "drop-shadow(0 0 40px rgba(6,182,212,0.9)) drop-shadow(0 0 75px rgba(139,92,246,0.55))",
                "drop-shadow(0 0 25px rgba(6,182,212,0.6)) drop-shadow(0 0 50px rgba(139,92,246,0.35))",
              ],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex items-center justify-center w-[300px] sm:w-[380px] md:w-[460px]"
          >
            {/* Pure Geometric Emblem with zero text */}
            <img 
              src="/logo-emblem.png" 
              alt="" 
              className="w-full h-auto object-contain filter contrast-125 brightness-110"
            />

            {/* Scanlines Effect Overlay across the emblem */}
            <div 
              className="absolute inset-0 mix-blend-overlay opacity-40"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(6, 182, 212, 0.5) 4px, rgba(6, 182, 212, 0.5) 5px)",
              }}
            />
          </motion.div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Contact Info */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Let's <span className="text-gradient-primary">Connect</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Have a project in mind, an opportunity to discuss, or simply want to talk about design and engineering? 
                Feel free to reach out. I'm always open to new connections.
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:likhithkumar581@gmail.com" 
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block font-bold uppercase tracking-wider">Email</span>
                  <span className="font-semibold text-foreground text-sm">likhithkumar581@gmail.com</span>
                </div>
              </a>

              <a 
                href="tel:+919019624773" 
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block font-bold uppercase tracking-wider">Phone</span>
                  <span className="font-semibold text-foreground text-sm">+91 90196 24773</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground group">
                <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block font-bold uppercase tracking-wider">Location</span>
                  <span className="font-semibold text-foreground text-sm">Bengaluru, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 glass-panel p-8 rounded-[2rem] border border-foreground/10 relative">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Your Name</label>
                <Input 
                  type="text" 
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  placeholder="John"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Your Email</label>
                <Input 
                  type="email" 
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Message</label>
                <Textarea 
                  rows={4}
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary resize-none placeholder:text-muted-foreground/50 min-h-[120px]"
                  placeholder="How can I help you?"
                />
              </div>

              <Button size="lg" className="w-full rounded-xl bg-primary text-primary-foreground font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] mt-4 h-12">
                Send Message <Send className="w-4 h-4 ml-1" />
              </Button>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
