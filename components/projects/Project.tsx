"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Project({
  reverse,
  id,
  image,
  github,
  demo,
}: {
  reverse: boolean;
  id: string;
  image: string;
  github: string;
  demo?: string;
}) {
  const t = useTranslations("projects");
  const title = t(`${id}.title`);
  const longDescription = t(`${id}.longDescription`);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id={id}
      className={cn(
        "flex w-full justify-between gap-4 max-md:flex-col max-md:gap-8",
        reverse && "flex-row-reverse max-md:flex-col",
      )}
    >
      <div>
        <motion.h3
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="mb-6 w-[360px] max-md:w-full"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {longDescription}
        </motion.p>
        <div className="flex items-center gap-4">
          {demo ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href={demo} target="_blank">
                <Button>Try it out</Button>
              </Link>
            </motion.div>
          ) : (
            <Button disabled>Try it out</Button>
          )}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
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
          </motion.div>
        </div>
      </div>
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <motion.div
              layoutId={`project-image-${id}`}
              className="cursor-pointer"
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={`/img/projects/${image}`}
                alt={title}
                width={400}
                height={300}
                className="aspect-[4/3] rounded-[0.5rem] border border-border object-cover"
              />
            </motion.div>
          </DialogTrigger>
          <AnimatePresence>
            {isOpen && demo && (
              <DialogContent className="h-[70vh] w-[80vw] max-w-none p-0">
                <motion.div
                  layoutId={`project-image-${id}`}
                  className="h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <iframe
                    src={demo}
                    className="h-full w-full"
                    title={title}
                  ></iframe>
                </motion.div>
              </DialogContent>
            )}
          </AnimatePresence>
        </Dialog>
      </motion.div>
    </div>
  );
}
