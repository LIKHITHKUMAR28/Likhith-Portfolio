import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Layers, Users, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "Jun 2026 – Present",
      title: "Freelance Digital Platform Engineer & Project Coordinator",
      subtitle: "Kavora Tech Groups · Remote",
      description:
        "Designed and built frontend experiences while leading technical and platform operations as the sole technical resource across three service lines.\n\nKey Contributions:\n• Brought three service lines to production within the first operating quarter.\n• Maintained zero unplanned downtime during the pre-seed phase.\n• Proactively identified risks and triaged platform issues.\n• Introduced lightweight status tracking and documentation practices.\n• Coordinated technical development and enrollment operations.\n• Supported the launch of an industry certification course on schedule.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Feb 2026 – Jun 2026",
      title: "Digital Platform Engineer & Project Coordinator",
      subtitle: "Dion Groups · Bengaluru",
      description:
        "Key Contributions:\n• Maintained zero critical platform outages across a five-month operational period.\n• Redesigned three recurring manual workflows.\n• Recovered 4+ hours per week of team capacity.\n• Delivered 4+ platform integration milestones on or ahead of schedule.\n• Screened 50+ candidates and supported onboarding of 22 hires.\n• Coordinated 10+ recurring cross-functional initiatives across HR, marketing, and product.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "May 2025 – Oct 2025",
      title: "Frontend Development Intern → UI/UX Designer",
      subtitle: "Labmentix Pvt. Ltd. · Remote",
      description:
        "Key Contributions:\n• Delivered three production features end-to-end.\n• Worked as the sole frontend contributor across development and deployment.\n• Created 5+ Figma interfaces.\n• Developed structured design-to-development handoff documentation.\n• Reduced design-to-development revision cycles by approximately 40%.\n• Identified and resolved 8+ usability issues through prototype testing.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2023 – 2025",
      title: "Marketing & Events Lead",
      subtitle: "GITAM Quiz Club",
      description:
        "Drove promotion and logistics for 4+ quiz competitions over two years, contributing to semester-on-semester growth in participation.",
      icon: <Users className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="Frontend development, digital platform operations, and technical coordination"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        cardEffect="glow"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
        darkMode={true}
      />
    </div>
  );
};
