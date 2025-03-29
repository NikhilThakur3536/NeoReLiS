import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FeaturesCard } from "./FeaturesCard";
import {
  faBoltLightning,
  faChartSimple,
  faClock,
  faCloud,
  faFileImport,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export function Features() {
  return (
    <div className="">
      <div className="400 w-full flex justify-center mt-20">
        <div className="border-2 rounded-4xl bg-[#ECF0F6] px-5 text-[#6B829A]">
          Powerful Features
        </div>
      </div>

      <div className="mt-8 poppins tracking-widest">
        <h2 className="text-7xl text-center leading-20 text-[#304D69]">
          Everything You Need For Systematic Reviews
        </h2>
      </div>
      <div className="text-center mt-10 px-2">
        <h4 className="text-xl my-2 mx-2 text-[#6B829A] poppins">
          ReLiS provides a comprehensive set of tools designed to make the
          systematic review process more efficient and accurate
        </h4>
      </div>
      <div className="justify-between flex mx-20  ">
        <div>
          <FeaturesCard
            heading="Protocol Planning"
            description="Define a domain-specified protocol that guides your systematic review process with customizable forms and fileds"
            icon={<FontAwesomeIcon icon={faBoltLightning} size="lg" />}
          />
        </div>
        <div>
          <FeaturesCard
            heading="Protocol Planning"
            description="Import from CSV,BibTeX, or EndNote. Organize and categorize articles with advance filtering options"
            icon={<FontAwesomeIcon icon={faFileImport} size="lg" />}
          />
        </div>
        <div>
          <FeaturesCard
            heading="Protocol Planning"
            description="Work seamlessly with multiple reviewers, assign specific tasks, and track overall progress "
            icon={<FontAwesomeIcon icon={faUsers} size="lg" />}
          />
        </div>
      </div>
      <div className="justify-between flex mx-20  ">
        <div>
          <FeaturesCard
            heading="Protocol Planning"
            description="Generate comprehensive reports and visualization based on your review data."
            icon={<FontAwesomeIcon icon={faChartSimple} size="lg" />}
          />
        </div>
        <div>
          <FeaturesCard
            heading="Protocol Planning"
            description="Access your projects from anywhere with secure, reliable cloud-based storage"
            icon={<FontAwesomeIcon icon={faCloud} size="lg" />}
          />
        </div>
        <div>
          <FeaturesCard
            heading="Protocol Planning"
            description="Save  upto 60% of your time with automated screening, data extraction, and conflict resolution "
            icon={<FontAwesomeIcon icon={faClock} size="lg" />}
          />
        </div>
      </div>
    </div>
  );
}
