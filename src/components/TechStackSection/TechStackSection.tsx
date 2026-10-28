import { motion } from "framer-motion";
import {
  Layout,
  Smartphone,
  Eye,
  MonitorSmartphone,
  Share2,
  Rocket,
  Activity,
  GitMerge,
  Zap,
  Network,
  Workflow,
  ShieldAlert,
  Target,
  BarChart3,
  Users,
} from "lucide-react";

interface TechItem {
  name: string;
  icon?: string;
  lucide?: React.ComponentType<{ className?: string }>;
  color?: string;
}

const technologies: TechItem[] = [
  // UI/UX Design
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Wireframing", lucide: Layout, color: "text-purple-400" },
  { name: "Prototyping", lucide: Smartphone, color: "text-indigo-400" },
  { name: "Usability Testing", lucide: Eye, color: "text-emerald-400" },
  { name: "Responsive Design", lucide: MonitorSmartphone, color: "text-sky-400" },
  { name: "Design Handoff", lucide: Share2, color: "text-pink-400" },

  // Digital Platform & Infrastructure
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
  { name: "Deployment Management", lucide: Rocket, color: "text-amber-400" },
  { name: "System Monitoring", lucide: Activity, color: "text-emerald-400" },
  { name: "CI/CD Awareness", lucide: GitMerge, color: "text-rose-400" },
  { name: "Process Automation", lucide: Zap, color: "text-yellow-400" },

  // Frontend Development
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "REST APIs", lucide: Network, color: "text-cyan-400" },

  // Project & Program Operations
  { name: "Agile / Scrum", lucide: Workflow, color: "text-blue-400" },
  { name: "Risk & Issue Tracking", lucide: ShieldAlert, color: "text-red-400" },
  { name: "Milestone Delivery", lucide: Target, color: "text-emerald-400" },
  { name: "Stakeholder Reporting", lucide: BarChart3, color: "text-indigo-400" },
  { name: "Cross-functional Coordination", lucide: Users, color: "text-violet-400" },

  // Tools
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
  { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" },
];

const TechStackSection = () => {
  return (
    <div className="w-full py-5 border-t border-b border-foreground/10 bg-foreground/[0.02] flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full overflow-hidden relative flex items-center"
      >
        {/* Gradients to fade edges */}
        <div className="absolute left-0 w-24 md:w-36 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 w-24 md:w-36 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Marquee Animation */}
        <div className="flex w-max animate-[marquee_50s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused] py-1">
          {[...technologies, ...technologies].map((tech, i) => (
            <div 
              key={i} 
              className="mx-2 px-4 py-2 rounded-full border border-foreground/10 bg-background/80 text-foreground font-semibold text-xs flex items-center gap-2.5 transition-all hover:scale-105 hover:border-primary/50 hover:bg-foreground/5 cursor-default shadow-xs group shrink-0"
            >
              {tech.icon ? (
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-4 h-4 object-contain group-hover:scale-110 transition-transform duration-300 dark:invert-0" 
                  loading="lazy"
                  decoding="async" 
                />
              ) : tech.lucide ? (
                <tech.lucide className={`w-4 h-4 ${tech.color || "text-primary"} shrink-0`} />
              ) : null}
              <span className="tracking-wide text-xs">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default TechStackSection;
