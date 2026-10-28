import { motion } from "framer-motion";
import { Briefcase, Code2, Layout, Users } from "lucide-react";

const stats = [
  { icon: <Briefcase className="w-6 h-6" />, label: "Year of Professional Experience", value: "1" },
  { icon: <Code2 className="w-6 h-6" />, label: "Production Features Delivered", value: "3+" },
  { icon: <Layout className="w-6 h-6" />, label: "UI/UX Interfaces Designed", value: "5+" },
  { icon: <Users className="w-6 h-6" />, label: "Participants Coordinated", value: "200+" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        className="flex flex-col lg:flex-row gap-16 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              About <span className="text-gradient-primary">Me</span>
            </h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science Engineer and technology professional based in Bengaluru, India, with experience across frontend development, UI/UX design, digital platform engineering, and technical project coordination.
              </p>
              <p>
                I enjoy working across the different stages of a digital product — understanding requirements, designing experiences, building interfaces, supporting platform operations, and coordinating delivery across teams.
              </p>
              <p>
                My experience includes building production frontend features, creating user interfaces and prototypes, managing platform operations, improving recurring workflows, tracking project milestones, identifying risks, and working with both technical and non-technical stakeholders.
              </p>
              <p className="text-foreground/90 font-medium">
                I’m interested in opportunities where I can combine technology, design, and project execution to build useful and reliable digital products.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="glass-panel p-6 rounded-2xl border border-foreground/10 hover:border-primary/50 transition-colors group relative overflow-hidden flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="text-primary mb-4 p-3 bg-primary/10 w-max rounded-xl group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-1.5 tracking-tight">{stat.value}</h3>
                <p className="text-sm font-medium text-muted-foreground leading-snug">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

