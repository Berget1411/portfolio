import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/assets/json/projects.json";

import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");

  const listOfProjects = projects.map((project) => ({
    ...project,
    title: t(`${project.id}.title`),
    description: t(`${project.id}.description`),
    date: t(`${project.id}.date`),
  }));
  return (
    <div>
      <h2 className="text-2xl font-bold">{t("title")}</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {listOfProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
