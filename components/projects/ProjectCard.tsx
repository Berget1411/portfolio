"use client";

import { Project } from "@/assets/json/types";
import scrollToSection from "@/utils/scrollToSection";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";
export default function ProjectCard({
  id,
  title,
  description,
  date,
  github,
  demo,
  tech,
}: Project) {
  return (
    <Card
      className="cursor-pointer bg-card transition-all hover:bg-neutral-50 dark:hover:bg-card/40"
      onClick={() => scrollToSection(id)}
    >
      <CardHeader className="flex flex-row items-center justify-between py-0">
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex gap-3">
          <Link href={github} target="_blank">
            <FaGithub
              size={18}
              className="transition-opacity hover:opacity-70"
            />
          </Link>
          <Link href={demo} target="_blank">
            <FaExternalLinkAlt
              size={18}
              className="transition-opacity hover:opacity-70"
            />
          </Link>
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
