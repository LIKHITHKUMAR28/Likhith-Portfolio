import { motion } from "framer-motion";
import { Palette, Cloud, Code2, FolderKanban } from "lucide-react";
import { MagicCard } from "../lightswind/magic-card";

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tags: string[];
}

const services: ServiceItem[] = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive digital experiences from early concepts and wireframes through prototypes, usability testing, and developer handoff.",
    tags: ["Figma", "Wireframing", "Prototyping", "Usability Testing", "Design Handoff"],
  },
  {
    icon: Cloud,
    title: "Digital Platform Engineering",
    description: "Supporting digital platforms through deployment management, monitoring, process automation, reliability practices, and cloud technologies.",
    tags: ["AWS", "Google Cloud", "Deployment", "Monitoring", "CI/CD", "Automation"],
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive and production-ready web interfaces with a focus on usability, performance, and clean implementation.",
    tags: ["React", "JavaScript", "HTML/CSS", "REST APIs", "Responsive Development"],
  },
  {
    icon: FolderKanban,
    title: "Project & Technical Coordination",
    description: "Coordinating people, priorities, milestones, risks, and technical work to keep projects moving from requirements to delivery.",
    tags: ["Agile/Scrum", "Jira", "Risk Tracking", "Stakeholder Reporting", "Cross-functional Coordination"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient-primary">
          What I Do
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Four areas where I combine technology, design, operations, and execution.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
              className="h-full"
            >
              <MagicCard
                className="h-full p-8 rounded-[2rem] border border-border/80 bg-card/80 flex flex-col justify-between"
                gradientSize={350}
                gradientFrom="rgba(56, 189, 248, 0.45)"
                gradientTo="rgba(139, 92, 246, 0.35)"
              >
                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300 mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {service.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-foreground/5 text-muted-foreground border border-foreground/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
