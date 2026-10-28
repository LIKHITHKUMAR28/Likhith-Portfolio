import { motion } from "framer-motion";
import { 
  Cloud, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Database, 
  Code2, 
  Binary, 
  Users, 
  Bot, 
  BrainCircuit, 
  Workflow 
} from "lucide-react";
import Carousel, { type CarouselItemData } from "../Carousel/Carousel";

const GDRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/1NNHcWDC1dMeCEL80A3vQlQ_fTiwL_ecH?usp=drive_link";

// Box 1 (Left): Cloud, Security & Software Systems
const CLOUD_AND_SYSTEMS: CarouselItemData[] = [
  {
    id: "cloud-1",
    title: "AWS Cloud Foundations",
    link: "https://www.credly.com/go/FWr28oOe",
    issuer: "AWS Academy",
    date: "Oct 2023",
    badge: "AWS Certified",
    description: "20-hour AWS curriculum mastering EC2 compute, S3 storage, IAM access management, VPC networking, and cloud security.",
    icon: <Cloud className="carousel-icon" />
  },
  {
    id: "cloud-2",
    title: "AWS Solutions Architecture",
    link: GDRIVE_FOLDER_URL,
    issuer: "AWS / Forage",
    date: "Apr 2025",
    badge: "Cloud Architect",
    description: "Architectural simulation designing scalable, fault-tolerant multi-tier cloud systems, elastic load balancers, and resilient storage.",
    icon: <Workflow className="carousel-icon" />
  },
  {
    id: "cloud-3",
    title: "Cyber Security Internship",
    link: GDRIVE_FOLDER_URL,
    issuer: "AICTE & Palo Alto Networks",
    date: "Jun 2024",
    badge: "Cybersecurity",
    description: "10-week virtual internship in network defense, enterprise firewall configurations, zero-trust security, and threat intelligence.",
    icon: <ShieldCheck className="carousel-icon" />
  },
  {
    id: "cloud-4",
    title: "Python Essentials",
    link: GDRIVE_FOLDER_URL,
    issuer: "Cisco & OpenEDG Python Institute",
    date: "Feb 2025",
    badge: "Python Core",
    description: "Algorithmic thinking, OOP design principles, data structures, exception handling, and Python Standard Library tooling.",
    icon: <Code2 className="carousel-icon" />
  },
  {
    id: "cloud-5",
    title: "Android Developer Internship",
    link: GDRIVE_FOLDER_URL,
    issuer: "AICTE & Google for Developers",
    date: "Mar 2024",
    badge: "Mobile Dev",
    description: "10-week intensive training developing native Android applications using Kotlin, Android Studio, Jetpack components, and Material Design.",
    icon: <Binary className="carousel-icon" />
  },
  {
    id: "cloud-6",
    title: "Project Management Fundamentals",
    link: "https://www.credly.com/go/ZxPKYGb3",
    issuer: "IBM SkillsBuild",
    date: "Jul 2026",
    badge: "IBM Badge",
    description: "Project lifecycle initiation, risk mitigation, Agile/Scrum execution, stakeholder collaboration, and delivery milestone management.",
    icon: <Award className="carousel-icon" />
  },
  {
    id: "cloud-7",
    title: "Data Visualisation Insights",
    link: GDRIVE_FOLDER_URL,
    issuer: "TATA / Forage",
    date: "Apr 2025",
    badge: "Data Storytelling",
    description: "Translating complex operational data metrics into executive visual dashboards, business KPIs, and strategic actionable insights.",
    icon: <Database className="carousel-icon" />
  }
];

// Box 2 (Centre): AI, Machine Learning & Data Science
const AI_AND_DATA_SCIENCE: CarouselItemData[] = [
  {
    id: "ai-1",
    title: "Gen AI Academy",
    link: GDRIVE_FOLDER_URL,
    issuer: "Google Cloud & Hack2Skill",
    date: "May 2025",
    badge: "Generative AI",
    description: "Applied generative AI engineering with Google Vertex AI, Gemini multimodal APIs, retrieval-augmented generation (RAG), and vector embeddings.",
    icon: <Sparkles className="carousel-icon" />
  },
  {
    id: "ai-2",
    title: "Prompt Design in Vertex AI",
    link: GDRIVE_FOLDER_URL,
    issuer: "Google Cloud",
    date: "2025",
    badge: "Google Badge",
    description: "Accredited Google Cloud skill badge covering few-shot prompt engineering, context framing, temperature tuning, and multimodal parameter control.",
    icon: <Bot className="carousel-icon" />
  },
  {
    id: "ai-3",
    title: "AWS Machine Learning Foundations",
    link: "https://www.credly.com/go/87bBbjRz",
    issuer: "AWS Academy",
    date: "Oct 2023",
    badge: "ML Graduate",
    description: "Supervised and unsupervised learning, AWS SageMaker pipelines, feature engineering, loss evaluation, and computer vision classification.",
    icon: <BrainCircuit className="carousel-icon" />
  },
  {
    id: "ai-4",
    title: "AWS Academy Data Engineering",
    link: "https://www.credly.com/go/4iZjpkPO",
    issuer: "AWS Academy",
    date: "Jun 2025",
    badge: "Data Engineer",
    description: "40-hour curriculum mastering scalable ETL pipelines, AWS Glue, Amazon Redshift data warehousing, Athena queries, and EMR data clusters.",
    icon: <Database className="carousel-icon" />
  },
  {
    id: "ai-5",
    title: "Deep Learning Specialization",
    link: "https://coursera.org/verify/84OXQ2YW5G35XYZ",
    issuer: "Illinois Tech & Coursera",
    date: "Mar 2025",
    badge: "Deep Learning",
    description: "Multi-layer neural networks, gradient backpropagation, convolutional networks (CNNs), attention mechanisms, and deep model optimization.",
    icon: <Cpu className="carousel-icon" />
  },
  {
    id: "ai-6",
    title: "GenAI Powered Data Analytics",
    link: GDRIVE_FOLDER_URL,
    issuer: "TATA / Forage",
    date: "Jun 2025",
    badge: "AI Analytics",
    description: "Integrating LLMs and generative intelligence for corporate data synthesis, automated report analysis, and predictive trends.",
    icon: <Sparkles className="carousel-icon" />
  },
  {
    id: "ai-7",
    title: "Data Analytics Simulation",
    link: GDRIVE_FOLDER_URL,
    issuer: "Deloitte / Forage",
    date: "Apr 2025",
    badge: "Data Analytics",
    description: "Forensic business analytics, statistical segmentation, dashboard metrics, and formulating evidence-based organizational decisions.",
    icon: <Database className="carousel-icon" />
  }
];

// Box 3 (Right): Dedicated Volunteering Experience
const VOLUNTEER_EXPERIENCES: CarouselItemData[] = [
  {
    id: "vol-1",
    title: "Agentic AI Day 2025",
    link: GDRIVE_FOLDER_URL,
    issuer: "Google Cloud & Hack2Skill",
    date: "2025",
    badge: "Hackathon Volunteer",
    description: "Recognized with a Certificate of Appreciation for outstanding volunteer contribution in organizing operations & participant coordination during the 30-hour AI hackathon.",
    icon: <Users className="carousel-icon" />
  },
  {
    id: "vol-2",
    title: "Build with AI Bootcamp",
    link: GDRIVE_FOLDER_URL,
    issuer: "Google for Developers & Hack2Skill",
    date: "2026",
    badge: "Event Volunteer",
    description: "Awarded Certificate of Volunteering for operational support in event logistics, workshop coordination, and hands-on guidance for developer AI bootcamps.",
    icon: <Users className="carousel-icon" />
  },
  {
    id: "vol-3",
    title: "Gen AI Exchange Hackathon",
    link: GDRIVE_FOLDER_URL,
    issuer: "Google Cloud",
    date: "2025",
    badge: "Community Volunteer",
    description: "Contributed as a Volunteer at Google Cloud Gen AI Exchange hackathon 2025, supporting smooth operations & participant experience.",
    icon: <Users className="carousel-icon" />
  },
  {
    id: "vol-4",
    title: "Promptwars Hackathon",
    link: GDRIVE_FOLDER_URL,
    issuer: "Google for Developers",
    date: "2025",
    badge: "Event Volunteer",
    description: "Contributed as a Volunteer at Promptwars by Google for Developers, supporting smooth operations & participant experience.",
    icon: <Users className="carousel-icon" />
  }
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="max-w-7xl mx-auto px-6 py-24 relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles size={14} />
          <span>Accredited Credentials & Leadership</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Certifications & <span className="text-gradient-primary">Volunteer</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base">
          Industry-recognized certifications and community leadership in cloud architecture, generative AI, data engineering, and developer initiatives.
        </p>
      </motion.div>

      {/* 3 Boxes Layout: Left (Cloud & Systems), Centre (AI & Data Science), Right (Volunteering) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch justify-center">
        {/* Left Box: Cloud & Systems */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="w-full flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Cloud size={16} />
              </span>
              <h3 className="font-bold text-sm tracking-wide text-foreground uppercase">Cloud & Platforms</h3>
            </div>
            <span className="text-[11px] font-semibold text-muted-foreground bg-foreground/5 px-2 py-0.5 rounded-full border border-foreground/10">
              {CLOUD_AND_SYSTEMS.length} Credentials
            </span>
          </div>

          <div className="w-full flex justify-center">
            <Carousel
              items={CLOUD_AND_SYSTEMS}
              baseWidth={350}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </motion.div>

        {/* Centre Box: AI & Data Science */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="w-full flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Cpu size={16} />
              </span>
              <h3 className="font-bold text-sm tracking-wide text-foreground uppercase">AI & Data Science</h3>
            </div>
            <span className="text-[11px] font-semibold text-muted-foreground bg-foreground/5 px-2 py-0.5 rounded-full border border-foreground/10">
              {AI_AND_DATA_SCIENCE.length} Credentials
            </span>
          </div>

          <div className="w-full flex justify-center">
            <Carousel
              items={AI_AND_DATA_SCIENCE}
              baseWidth={350}
              autoplay={true}
              autoplayDelay={3400}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </motion.div>

        {/* Right Box: Dedicated Volunteering */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="w-full flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Users size={16} />
              </span>
              <h3 className="font-bold text-sm tracking-wide text-foreground uppercase">Volunteering</h3>
            </div>
            <span className="text-[11px] font-semibold text-muted-foreground bg-foreground/5 px-2 py-0.5 rounded-full border border-foreground/10">
              {VOLUNTEER_EXPERIENCES.length} Initiatives
            </span>
          </div>

          <div className="w-full flex justify-center">
            <Carousel
              items={VOLUNTEER_EXPERIENCES}
              baseWidth={350}
              autoplay={true}
              autoplayDelay={3800}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
