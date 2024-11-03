"use client";

import { Project } from "@/assets/json/types";
import scrollToSection from "@/utils/scrollToSection";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function ProjectCard({
  id,
  github,
  demo,
  tech,
  devMode,
}: Project) {
  const t = useTranslations("projects");
  const title = t(`${id}.title`);
  const description = t(`${id}.shortDescription`);
  const date = t(`${id}.date`);

  return (
    <Card
      className="cursor-pointer bg-card transition-all hover:bg-neutral-50 dark:hover:bg-card/40"
      onClick={() => scrollToSection(id)}
    >
      <CardHeader className="flex flex-row items-center justify-between py-0">
        <CardTitle className="flex items-center gap-2 text-xl">
          {title}
          {devMode && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="rounded-md bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                    Dev
                  </span>
                </TooltipTrigger>
                <TooltipContent>Currently in development</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </CardTitle>
        <div className="flex gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={github} target="_blank">
                  <FaGithub
                    size={18}
                    className="transition-opacity hover:opacity-70"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>View code</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {demo && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={demo} target="_blank">
                    <FaExternalLinkAlt
                      size={18}
                      className="transition-opacity hover:opacity-70"
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Go to site</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </CardHeader>
      <CardContent className="text-sm">{description}</CardContent>
      <CardFooter className="flex flex-row items-center justify-between py-0 text-sm">
        <p className="w-1/2">{tech.join(", ")}</p>
        <p>{date}</p>
      </CardFooter>
    </Card>
  );
}
