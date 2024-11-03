"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
export default function About() {
  const t = useTranslations("about");
  return (
    <section className="mb-12 max-w-[600px]" id="about">
      <motion.h2
        className="text-2xl font-bold"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {t("title")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {t("body")}
      </motion.p>
    </section>
  );
}
