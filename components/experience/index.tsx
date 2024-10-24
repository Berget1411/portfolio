import { useTranslations } from "next-intl";
import ExperienceCard from "./ExperienceCard";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import atlasImage from "@/public/img/atlas.jpeg";
import thsImage from "@/public/img/ths.jpeg";

export default function Experience() {
  const t = useTranslations("experience");
  const ths = {
    title: t("ths.title"),
    role: t("ths.role"),
    date: t("ths.date"),
    desc1: t("ths.desc1"),
    desc2: t("ths.desc2"),
    image: thsImage,
  };
  const atlasCopco = {
    title: t("atlas-copco.title"),
    role: t("atlas-copco.role"),
    date: t("atlas-copco.date"),
    desc1: t("atlas-copco.desc1"),
    desc2: t("atlas-copco.desc2"),
    image: atlasImage,
  };

  return (
    <section className="mb-12" id="experience">
      <h2 className="text-2xl font-bold">{t("title")}</h2>
      <Card className="mt-4 flex flex-col gap-6 p-7">
        <ExperienceCard {...ths} />
        <Separator />
        <ExperienceCard {...atlasCopco} />
      </Card>
    </section>
  );
}
