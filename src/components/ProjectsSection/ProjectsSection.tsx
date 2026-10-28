import { motion } from "framer-motion";
import { Github, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "../lightswind/button";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  codeUrl?: string;
  liveUrl?: string;
  designProcess?: string[];
}

const projects: Project[] = [
  {
    id: "cohere",
    title: "CoHere",
    category: "Workforce Operations Platform",
    description:
      "Where work comes together — an enterprise workforce platform unifying attendance, leave management, team tasks, and HR operations in one coherent system.",
    features: [
      "Role-based access control (Admin, HR, Manager, Employee)",
      "Live work timer & real-time shift attendance tracking",
      "Leave request engine with dynamic balance calculations",
      "Anonymous whistleblower portal & company announcements",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Firestore"],
    image: "/Cohere.png",
    liveUrl: "https://cohere-fb4a8.web.app/",
    codeUrl: "https://github.com/LIKHITHKUMAR28/cohere",
  },
  {
    id: "yukta-eduos",
    title: "Yukta EduOS",
    category: "Academic Operating System",
    description:
      "An intelligent academic operating system built to power modern educational institutions, managing courses, student lifecycles, and institutional intelligence.",
    features: [
      "Academic OS architecture for institutions",
      "Student & faculty directory with lifecycle tracking",
      "Course curriculum management & gradebooks",
      "Institutional analytics & AI-assisted academic workflows",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase", "AI Integration"],
    image: "/yukta-eduos.png",
    liveUrl: "https://eduos-prod.web.app/",
    codeUrl: "https://github.com/LIKHITHKUMAR28/Yukta",
  },
  {
    id: "konvey",
    title: "Konvey",
    category: "Project Operations & Delivery",
    description:
      "A workforce and project operations platform that helps teams manage projects, tasks, collaboration, and work context in one place. It goes beyond traditional project management by providing insights into project health, blockers, decisions, scope changes, and recovery actions.",
    features: [
      "Blocker radar & interactive dependency graph with critical-path alerts",
      "60-second context recovery ('Catch Up') executive briefing",
      "Decision memory with context-linked Architectural Decision Records (ADRs)",
      "Scope creep radar with contract baseline diffing & segregated client portal",
    ],
    techStack: ["React 19", "TypeScript", "Vite", "Vanilla CSS", "Cloud Firestore", "Firebase Hosting"],
    image: "/konvey.png",
    liveUrl: "https://konvey-a357d.web.app/",
    codeUrl: "https://github.com/LIKHITHKUMAR28/Konvey",
  },
  {
    id: "evertrace",
    title: "Evertrace",
    category: "Identity Governance & Continuity OS",
    description:
      "A Zero-Trust Institutional Intelligence & IAM Offboarding platform engineered to eliminate enterprise 'shadow access', mitigate single-point-of-failure (SPOF) workforce risks, and orchestrate cryptographic-grade personnel offboarding.",
    features: [
      "Directed institutional topography graph mapping cross-departmental dependencies & SPOF risks",
      "Deterministic exit impact simulator computing real-time operational blast radiuses",
      "Cryptographic multi-party offboarding with SHA-256 hash-chained audit trails & automated de-provisioning",
      "Granular Zero-Trust RBAC with role simulations for Board, Compliance, HR, C-Suite, & DevOps",
    ],
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Firebase Auth", "Cloud Firestore"],
    image: "/evertrace.png",
    liveUrl: "https://evertrace-c9a40.web.app/",
    codeUrl: "https://github.com/LIKHITHKUMAR28/EVERTRACE",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Selected <span className="text-gradient-primary">Works</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl text-lg">
          Production applications and human-centered design systems built with precision, usability, and scale.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="glass-panel rounded-[2rem] border border-foreground/10 overflow-hidden flex flex-col justify-between hover:border-primary/40 transition-all duration-300 hover:shadow-2xl group"
          >
            {/* Top Visual Image */}
            <div className="relative h-56 w-full overflow-hidden bg-muted/20">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-background/80 backdrop-blur-md border border-white/10 text-primary shadow-sm">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 lg:p-6 xl:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Optional Design Process Flow for Penny Pilot */}
                {project.designProcess && (
                  <div className="mb-6 p-3 rounded-xl bg-foreground/[0.03] border border-foreground/10">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                      Design Process
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-foreground">
                      {project.designProcess.map((step, sIdx) => (
                        <span key={sIdx} className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[11px]">
                            {step}
                          </span>
                          {sIdx < project.designProcess!.length - 1 && (
                            <ArrowRight className="w-3 h-3 text-muted-foreground/60" />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features List */}
                <div className="mb-6">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-3">
                    Key Highlights & Features
                  </span>
                  <ul className="space-y-2">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/90 font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tech Stack & Buttons */}
              <div className="pt-5 border-t border-border/50">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-foreground/5 text-muted-foreground border border-foreground/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 w-full"
                    >
                      <Button
                        size="sm"
                        className="w-full rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-1.5 hover:bg-primary/90 transition-all cursor-pointer h-11 text-xs px-2.5 group/live shadow-md shadow-primary/20"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/live:scale-110 transition-transform" />
                      </Button>
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 w-full"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full rounded-xl glass-panel text-foreground font-bold flex items-center justify-center gap-1.5 border-foreground/15 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer h-11 text-xs px-2.5 group/btn shadow-xs"
                      >
                        <span>Repository</span>
                        <Github className="w-3.5 h-3.5 text-primary group-hover/btn:scale-110 transition-transform" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
