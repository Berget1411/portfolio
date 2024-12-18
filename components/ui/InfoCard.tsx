"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export default function ExperienceCard({
  title,
  undertitle,
  date,
  desc1,
  desc2,
  image,
}: {
  title: string;
  undertitle: string;
  date: string;
  desc1: string;
  desc2: string;
  image: StaticImageData;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex items-start gap-8 max-sm:flex-col">
        <div className="group relative h-[60px] w-[60px] flex-shrink-0">
          <div className="absolute -inset-0.5 animate-tilt bg-gradient-to-r from-orange-600 to-rose-600 opacity-75 blur-lg transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <Image
            src={image}
            alt={title}
            width={60}
            height={60}
            className="relative z-10 h-full w-full rounded-[0.5rem]"
          />
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <h3 className="m-0 text-lg font-bold">{title}</h3>
            <p className="m-0 text-sm">{undertitle}</p>
            <p className="m-0 mb-3 text-sm opacity-70">{date}</p>
          </div>
          <ul className="list-style-none ml-4 flex max-w-[600px] list-disc flex-col gap-2 text-sm">
            <li>{desc1}</li>
            <li>{desc2}</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
