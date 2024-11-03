"use client";

import { useTranslations } from "next-intl";
import InfoCard from "../ui/InfoCard";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import atlasImage from "@/public/img/atlas.jpeg";
import thsImage from "@/public/img/ths.jpeg";
import { motion } from "framer-motion";

export default function Experience() {
  const t = useTranslations("experience");
  const ths = {
    title: t("ths.title"),
    undertitle: t("ths.undertitle"),
    date: t("ths.date"),
    desc1: t("ths.desc1"),
    desc2: t("ths.desc2"),
    image: thsImage,
  };
  const atlasCopco = {
    title: t("atlas-copco.title"),
    undertitle: t("atlas-copco.undertitle"),
    date: t("atlas-copco.date"),
    desc1: t("atlas-copco.desc1"),
    desc2: t("atlas-copco.desc2"),
    image: atlasImage,
  };

  return (
    <section className="mb-12" id="experience">
      <motion.h2
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("title")}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="mt-4 flex flex-col gap-6 p-7">
          <InfoCard {...ths} />
          <Separator />
          <InfoCard {...atlasCopco} />
        </Card>
      </motion.div>
    </section>
  );
}
