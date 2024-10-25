import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/assets/json/projects.json";
import Project from "@/components/projects/Project";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";

export default function Projects() {
  const t = useTranslations("projects");
  return (
    <div>
      <h2 className="text-2xl font-bold">{t("title")}</h2>
      <div className="mb-24 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <div className="flex flex-col gap-24">
        {projects.map(
          (project, index) =>
            !project.devMode && (
              <>
                <Project
                  key={project.id}
                  {...project}
                  reverse={index % 2 !== 0}
                />
                {index !== projects.length - 1 && index !== 0 && <Separator />}
              </>
            ),
        )}
      </div>
      {projects.find((project, index) => project.devMode) && (
        <Separator className="relative my-32">
          <span className="absolute left-[18%] top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xl font-bold">
            In development
          </span>
        </Separator>
      )}
      <div className="flex flex-col gap-24">
        {projects.map(
          (project, index) =>
            project.devMode && (
              <Project
                key={project.id}
                {...project}
                reverse={index % 2 !== 0}
              />
            ),
        )}
      </div>
    </div>
  );
}
