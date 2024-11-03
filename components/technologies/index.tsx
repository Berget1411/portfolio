"use client";
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
import { motion } from "framer-motion";
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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section
      className="relative z-10 mt-24 py-12 bg-grid-black/[0.03] dark:bg-grid-white/[0.03]"
      id="technologies"
    >
      <motion.h2
        className="mb-12 text-2xl font-bold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t("title")}
      </motion.h2>

      <motion.div
        className="mx-auto grid max-w-[800px] grid-cols-4 gap-8 gap-y-12 px-4 max-sm:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {technologies.map((technology) => (
          <motion.div
            key={technology.name}
            variants={item}
            viewport={{ once: true }}
          >
            <TechnologyCard {...technology} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
