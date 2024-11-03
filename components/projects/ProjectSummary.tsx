"use client";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import projects from "@/assets/json/projects.json";

export default function ProjectSummary() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className="mb-24 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={item} viewport={{ once: true }}>
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
