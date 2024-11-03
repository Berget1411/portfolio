"use client";
import Project from "./Project";
import projects from "@/assets/json/projects.json";
import { Separator } from "@/components/ui/separator";

export default function ProjectSection() {
  return (
    <>
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
      {projects.find((project) => project.devMode) && (
        <Separator className="relative mb-16 mt-32 max-sm:mb-10 max-sm:mt-20">
          <span className="absolute left-[18%] top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xl font-bold text-primary max-sm:left-[25%] max-sm:text-lg">
            In development
          </span>
        </Separator>
      )}
      <div className="flex flex-col gap-24 max-sm:gap-12">
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
    </>
  );
}
