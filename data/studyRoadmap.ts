import {
  Star,
  GraduationCap,
  FileText,
  Send,
  Award,
  Plane,
  MapPin,
  BookOpen,
  Briefcase,
  Flag,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface RoadmapStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const roadmap: RoadmapStep[] = [
  {
    title: "Dream",
    description: "Set your goal to study in Korea and explore your options.",
    icon: Star,
  },
  {
    title: "Choose Degree",
    description: "Select your program, university, and study track.",
    icon: GraduationCap,
  },
  {
    title: "Prepare Documents",
    description: "Gather transcripts, MOI, TOPIK, and recommendation letters.",
    icon: FileText,
  },
  {
    title: "Apply",
    description: "Submit your applications to universities or GKS Embassy Track.",
    icon: Send,
  },
  {
    title: "Scholarship",
    description: "Apply for GKS, KOICA, or university scholarships.",
    icon: Award,
  },
  {
    title: "Visa",
    description: "Obtain your D-2 student visa from the Korean embassy.",
    icon: Plane,
  },
  {
    title: "Arrival",
    description: "Land in Korea, get settled, and complete your registration.",
    icon: MapPin,
  },
  {
    title: "Study",
    description: "Begin classes, adapt to campus life, and make the most of it.",
    icon: BookOpen,
  },
  {
    title: "Graduation",
    description: "Complete your degree and celebrate your achievement.",
    icon: Flag,
  },
  {
    title: "Jobs",
    description: "Explore career opportunities or continue your studies.",
    icon: Briefcase,
  },
];
