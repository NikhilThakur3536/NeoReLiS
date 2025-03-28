import { MdPeople, MdThunderstorm } from "react-icons/md";
import {FeatureCardsProps} from "../ui/src/featurecards"
import { FaChartBar, FaCloud, FaDochub } from "react-icons/fa";
import { CgLock } from "react-icons/cg";

export const FeaturesCardData: FeatureCardsProps[] = [
  {
    icon: MdThunderstorm,
    heading: "Protocol Planning",
    description: "Define a domain-specific protocol that guides your systematic review process with customizable forms and fields.",
  },
  {
    icon: FaDochub,
    heading: "Protocol Planning",
    description: "Import from CSV, BibTeX, or EndNote. Organize and categorize articles with advanced filtering options.",
  },
  {
    icon: MdPeople,
    heading: "Protocol Planning",
    description: "Work seamlessly with multiple reviewers, assign specific tasks, and track overall progress.",
  },
  {
    icon: FaChartBar,
    heading: "Protocol Planning",
    description: "Generate comprehensive reports and visualizations based on your review data.",
  },
  {
    icon: FaCloud,
    heading: "Protocol Planning",
    description: "Access your projects from anywhere with secure, reliable cloud-based storage.",
  },
  {
    icon: CgLock,
    heading: "Protocol Planning",
    description: "Save up to 60% of your time with automated screening, data extraction, and conflict resolution.",
  },

]
