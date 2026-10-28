import { motion } from "framer-motion";
import {
  Atom,
  Palette,
  Cloud,
  FolderKanban,
  Wrench,
  Brain,
  Target,
  MessageSquare,
  Zap,
  Briefcase,
  ShieldAlert,
  Users,
  CheckCircle2,
  Crown,
  Workflow,
  Lightbulb,
  HeartHandshake,
  Layers,
  Rocket,
} from "lucide-react";

export default function ProfessionalProfile() {
  const technicalSkills = [
    {
      name: "UI/UX Design",
      level: 90,
      icon: Palette,
      iconColor: "text-purple-500 dark:text-purple-400",
      boxBg: "bg-purple-50 dark:bg-purple-500/10 border-purple-200/80 dark:border-purple-500/20",
    },
    {
      name: "Project Management",
      level: 92,
      icon: FolderKanban,
      iconColor: "text-emerald-500 dark:text-emerald-400",
      boxBg: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200/80 dark:border-emerald-500/20",
    },
    {
      name: "Platform & Cloud",
      level: 85,
      icon: Cloud,
      iconColor: "text-blue-500 dark:text-blue-400",
      boxBg: "bg-blue-50 dark:bg-blue-500/10 border-blue-200/80 dark:border-blue-500/20",
    },
    {
      name: "Frontend Development",
      level: 80,
      icon: Atom,
      iconColor: "text-sky-500 dark:text-sky-400",
      boxBg: "bg-sky-50 dark:bg-sky-500/10 border-sky-200/80 dark:border-sky-500/20",
    },
    {
      name: "Tools & Collaboration",
      level: 90,
      icon: Wrench,
      iconColor: "text-amber-500 dark:text-amber-400",
      boxBg: "bg-amber-50 dark:bg-amber-500/10 border-amber-200/80 dark:border-amber-500/20",
    },
  ];

  const softSkills = [
    {
      name: "Problem Solving",
      icon: Brain,
      style: "bg-purple-50/90 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-200/80 dark:border-purple-500/20",
    },
    {
      name: "Ownership",
      icon: Target,
      style: "bg-rose-50/90 dark:bg-rose-500/10 text-rose-600 dark:text-rose-300 border-rose-200/80 dark:border-rose-500/20",
    },
    {
      name: "Communication",
      icon: MessageSquare,
      style: "bg-blue-50/90 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-200/80 dark:border-blue-500/20",
    },
    {
      name: "Adaptability",
      icon: Zap,
      style: "bg-amber-50/90 dark:bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-200/80 dark:border-amber-500/20",
    },
    {
      name: "Stakeholder Coordination",
      icon: Briefcase,
      style: "bg-sky-50/90 dark:bg-sky-500/10 text-sky-600 dark:text-sky-300 border-sky-200/80 dark:border-sky-500/20",
    },
    {
      name: "Risk Identification",
      icon: ShieldAlert,
      style: "bg-red-50/90 dark:bg-red-500/10 text-red-600 dark:text-red-300 border-red-200/80 dark:border-red-500/20",
    },
    {
      name: "Team Collaboration",
      icon: Users,
      style: "bg-emerald-50/90 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-500/20",
    },
    {
      name: "Attention to Detail",
      icon: CheckCircle2,
      style: "bg-indigo-50/90 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-500/20",
    },
    {
      name: "Leadership",
      icon: Crown,
      style: "bg-amber-50/90 dark:bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-200/80 dark:border-amber-500/20",
    },
    {
      name: "Agile Methodologies",
      icon: Workflow,
      style: "bg-sky-50/90 dark:bg-sky-500/10 text-sky-600 dark:text-sky-300 border-sky-200/80 dark:border-sky-500/20",
    },
    {
      name: "Strategic Thinking",
      icon: Lightbulb,
      style: "bg-yellow-50/90 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-300 border-yellow-200/80 dark:border-yellow-500/20",
    },
    {
      name: "Mentorship",
      icon: HeartHandshake,
      style: "bg-teal-50/90 dark:bg-teal-500/10 text-teal-600 dark:text-teal-300 border-teal-200/80 dark:border-teal-500/20",
    },
  ];

  return (
    <section id="skills" className="space-y-8">
      {/* Title Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 flex items-center justify-center text-zinc-900 dark:text-zinc-100 font-mono font-bold text-sm shadow-xs">
          &lt;/&gt;
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
          Expertise & Skills
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical Arsenal Card */}
        <div className="bg-white dark:bg-zinc-900/90 rounded-[2.25rem] border border-zinc-200/80 dark:border-zinc-800/80 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200/80 dark:border-zinc-800 mb-6">
              <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
                Technical Arsenal
              </h4>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-800/60 px-3 py-1 rounded-full border border-zinc-200/70 dark:border-zinc-700/60">
                PROFICIENCY
              </span>
            </div>

            <div className="space-y-6">
              {technicalSkills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div key={i} className="space-y-2.5">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-zinc-900 dark:text-zinc-100 font-bold flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${skill.boxBg}`}>
                          <Icon className={`w-4 h-4 ${skill.iconColor}`} />
                        </div>
                        {skill.name}
                      </span>
                      <span className="font-extrabold text-zinc-900 dark:text-zinc-100 text-sm font-mono">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden p-[1px]">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 via-violet-500 to-sky-400 rounded-full relative"
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/70 rounded-full" />
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Professional Traits Card */}
        <div className="bg-white dark:bg-zinc-900/90 rounded-[2.25rem] border border-zinc-200/80 dark:border-zinc-800/80 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200/80 dark:border-zinc-800 mb-6">
              <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2.5">
                <Brain className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
                Professional Traits
              </h4>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-800/60 px-3 py-1 rounded-full border border-zinc-200/70 dark:border-zinc-700/60">
                CORE COMPETENCIES
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.04 }}
                    viewport={{ once: true }}
                    className={`px-3.5 py-2 rounded-2xl border text-xs font-bold flex items-center gap-2 cursor-default transition-transform hover:scale-[1.02] shadow-xs ${skill.style}`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span>{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800">
            <div className="p-5 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-200/70 dark:border-zinc-800/80 flex items-start gap-4 shadow-xs">
              <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 shrink-0 shadow-xs">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <div>
                <strong className="text-zinc-900 dark:text-zinc-100 font-bold text-sm block mb-1">
                  Cross-Functional Delivery & Technical Execution
                </strong>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Combining engineering discipline, proactive risk tracking, and human-centered design to deliver reliable digital products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

