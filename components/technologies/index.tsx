import { useTranslations } from "next-intl";
import TechnologyCard from "./TechnologyCard";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiGitBranchFill,
  RiNodejsFill,
} from "react-icons/ri";
import {
  SiTypescript,
  SiMongodb,
  SiDrizzle,
  SiPython,
  SiDocker,
  SiExpress,
} from "react-icons/si";

const technologies = [
  { icon: RiNextjsFill, name: "Next.js" },
  { icon: RiReactjsFill, name: "React" },
  { icon: SiTypescript, name: "Typescript" },
  { icon: RiTailwindCssFill, name: "TailwindCSS" },
  { icon: RiNodejsFill, name: "Node.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiDrizzle, name: "Drizzle" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPython, name: "Python" },
  { icon: SiDocker, name: "Docker" },
  { icon: RiGitBranchFill, name: "Git" },
];

export default function Technologies() {
  const t = useTranslations("technologies");
  return (
    <section className="bg-grid-black/[0.03] dark:bg-grid-white/[0.03] relative z-10 mt-24 py-12">
      <h2 className="mb-12 text-2xl font-bold">{t("title")}</h2>

      <div className="mx-auto grid max-w-[800px] grid-cols-4 gap-8 gap-y-12 px-4 max-sm:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.name} {...technology} />
        ))}
      </div>
    </section>
  );
}
