import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import InfoCard from "../ui/InfoCard";
import { useTranslations } from "next-intl";
import kthImage from "@/public/img/kth.jpeg";
import odinImage from "@/public/img/odin.png";
import ngImage from "@/public/img/ng.png";

export default function Education() {
  const t = useTranslations("education");
  const kth = {
    title: t("kth.title"),
    undertitle: t("kth.undertitle"),
    date: t("kth.date"),
    desc1: t("kth.desc1"),
    desc2: t("kth.desc2"),
    image: kthImage,
  };
  const odin = {
    title: t("odin.title"),
    undertitle: t("odin.undertitle"),
    date: t("odin.date"),
    desc1: t("odin.desc1"),
    desc2: t("odin.desc2"),
    image: odinImage,
  };
  const ng = {
    title: t("ng.title"),
    undertitle: t("ng.undertitle"),
    date: t("ng.date"),
    desc1: t("ng.desc1"),
    desc2: t("ng.desc2"),
    image: ngImage,
  };
  return (
    <section className="mb-12" id="education">
      <h2 className="text-2xl font-bold">{t("title")}</h2>
      <Card className="mt-4 flex flex-col gap-6 p-7">
        <InfoCard {...kth} />
        <Separator />
        <InfoCard {...odin} />
        <Separator />
        <InfoCard {...ng} />
      </Card>
    </section>
  );
}
