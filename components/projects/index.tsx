"use client";
import ProjectSummary from "@/components/projects/ProjectSummary";
import ProjectSection from "@/components/projects/ProjectSection";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section id="projects">
      <motion.h2
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t("title")}
      </motion.h2>
      <ProjectSummary />
      <ProjectSection />
    </section>
  );
}
