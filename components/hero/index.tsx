"use client";

import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import profile from "@/public/img/profile.png";
import { useTranslations } from "next-intl";
import { TypeAnimation } from "react-type-animation";
import HeroBackground from "./herobackground";
import scrollToSection from "@/utils/scrollToSection";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("profile");
  return (
    <>
      <HeroBackground />
      <section
        className="relative flex items-center justify-between gap-6 py-4 max-sm:flex-col-reverse max-sm:py-24 sm:min-h-[70vh]"
        id="start"
      >
        <div>
          <TypeAnimation
            sequence={[t("title")]}
            speed={50}
            omitDeletionAnimation={false}
            className="text-4xl font-medium tracking-tight"
          />
          <motion.div
            className="mb-6 mt-3 flex gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link
              href="https://github.com/Berget1411"
              target="_blank"
              className="transition-opacity hover:opacity-80"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ludvig-bergstrom/"
              target="_blank"
              className="transition-opacity hover:opacity-80"
            >
              <FaLinkedin size={24} />
            </Link>
          </motion.div>

          <motion.ul
            className="mb-4 flex flex-col gap-1 text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <li>
              {t("desc1")}{" "}
              <Link
                href="https://kth.se"
                target="_blank"
                className="font-bold text-primary transition-opacity hover:opacity-80"
              >
                @KTH
              </Link>
            </li>
            <li>
              {t("desc2")}{" "}
              <Link
                href="https://thsbusiness.se"
                target="_blank"
                className="font-bold text-primary transition-opacity hover:opacity-80"
              >
                @THS-Business
              </Link>
            </li>
          </motion.ul>
        </div>
        <motion.div
          className="group relative h-[160px] w-[160px] flex-shrink-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <div className="absolute -inset-0.5 animate-tilt rounded-full bg-gradient-to-r from-orange-600 to-rose-600 opacity-75 blur-lg transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <Image
            src={profile}
            alt="Ludvig Bergtröm"
            width={160}
            height={160}
            className="z-1 relative rounded-full"
          />
        </motion.div>

        <FaArrowDown
          size={24}
          className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 animate-bounce cursor-pointer text-primary transition-opacity hover:opacity-80 max-sm:bottom-8"
          onClick={() => {
            scrollToSection("about");
          }}
        />
      </section>
    </>
  );
}
